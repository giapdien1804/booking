<?php

namespace Modules\Storage\Http\Controllers;

use Carbon\Carbon;
use Illuminate\Http\Request;
use Modules\Domain\Entities\Domain;
use Modules\Storage\Entities\StorageAlbum;
use Modules\Storage\Entities\StorageFile;

class StorageController extends Controller
{
    function index($domain = null)
    {
        return view('storage::index');
    }

    private function setImageSize($d, $p, $w, $h)
    {
        $allowedMimeTypes = ['image/jpeg', 'image/gif', 'image/png'];
        $contentType = \Storage::disk($d)->mimeType($p);
        if (in_array($contentType, $allowedMimeTypes)) { //Checks if is an image

            if (!is_null($w) && !is_null($h)) {
                $image = \Image::make(\Storage::disk($d)->get($p));
                $image->fit($w, $h, function ($constraint) {
                    $constraint->upsize();
                });

                return $image->response();
            } else
                return response(\Storage::disk($d)->get($p))->header('Content-Type', $contentType);
        }

        return null;
    }

    function actionView(Request $request, $uuid)
    {
        $file = StorageFile::withTrashed()->find($uuid);
        if ($file) {
            $d = config('storage.disk_save');
            $p = $file->storage_path;
            $w = $request->get('w');
            $h = $request->get('h');

            if (\Storage::disk($d)->exists($p)) {
                return $this->setImageSize($d, $p, $w, $h);
            }
        }
        return null;
    }

    function fileList(Request $request, $album = null)
    {
        $files = StorageFile::with('user:uuid,email,name');
        if ($request->has('trash')) {
            $files->onlyTrashed();
        }
        if ($request->has('search')) {
            $files->where('storage_title', 'like', "%{$request->get('search')}%");
        }

        if ($album != null)
            $files->whereStorageAlbumUuid($album);

        $files = $files->paginate(30);

        return response()->json($files);
    }

    function fileStore(Request $request, $album)
    {
        if ($request->hasFile('uploads')) {
            $files = $request->file('uploads');
            $time = Carbon::now();
            $_album = StorageAlbum::with('domain')->find($album);
            if ($_album) {
                $domain = !is_null($_album->domain) ? $_album->domain->name : 'default';
                $local_path = "{$domain}/{$time->year}/{$time->month}/$time->day/";
                foreach ($files as $file) {
                    /** @var \Illuminate\Http\UploadedFile $file */
                    $name = \DG::standardName($file->getClientOriginalName());
                    $full_name = $name == null ?
                        $file->getFilename() . '.' . $file->extension() : $name;

                    $path = $file->store($local_path, config('storage.save_disk'));
                    $file_type = $file->getClientMimeType();
                    $file_ext = $file->getClientOriginalExtension();
                    $size = $file->getClientSize();

                    StorageFile::create([
                        'storage_album_uuid' => $album,
                        'storage_path' => $path,
                        'storage_name' => pathinfo($path, PATHINFO_BASENAME),
                        'storage_type' => $file_type,
                        'storage_ext' => $file_ext,
                        'storage_size' => $size,
                        'storage_title' => $full_name
                    ]);

                    //create thum 180x150
                    \DG::createImageThumbnail(config('storage.save_disk'), $path, 180, 150);
                }
            }


            return response()->json(['notification' => 'Tải lên thành công']);
        }

        return response()->json(['notification' => 'Không có ảnh để tải lên'], 403);
    }

    function fileUpdate(Request $request)
    {
        $success = false;
        foreach ($request->get('data') as $value) {
            $data_update = [
                'storage_title' => $value['storage_title'],
                'storage_desc' => $value['storage_desc'],
            ];
            $success = StorageFile::find($value['uuid'])->update($data_update);
        }

        if ($success)
            return response()->json(['notification' => 'Đã lưu thay đổi']);

        return response()->json(['notification' => 'Không lưu được, nhấn F5 để thử lại'], 403);
    }

    function fileDelete(Request $request)
    {
        $hash = $request->all();
        $link = StorageFile::whereIn('uuid', $hash);
        if ($link->delete()) {
            return response()->json(['notification' => 'Đã chuyển các ảnh được chọn vào thùng rác']);
        }

        return response()->json(['notification' => 'Không xóa được, nhấn F5 để thử lại'], 403);
    }

    function fileDestroy(Request $request)
    {
        $hash = $request->all();
        $fmg = StorageFile::withTrashed()->whereIn('uuid', $hash);
        $list = $fmg->get();
        if ($fmg->forceDelete()) {
            //delete storage
            foreach ($list as $value) {
                \Storage::disk(config('storage.save_disk'))->delete($value->path);
            }
            return response()->json(['notification' => 'Đã xóa vĩnh viễn các ảnh được chọn']);
        }

        return response()->json(['notification' => 'Không xóa được, nhấn F5 để thử lại'], 403);
    }

    function fileRestore(Request $request)
    {
        $fmg = StorageFile::withTrashed()->whereIn('uuid', $request->all());
        if ($fmg->restore()) {
            return response()->json(['notification' => 'Đã xóa khôi phục lại các ảnh được chọn']);
        }

        return response()->json(['notification' => 'Không khôi phục được, nhấn F5 để thử lại'], 403);
    }

    function albumList($domain = null)
    {
        //create new default if not isset
        StorageAlbum::firstOrCreate(['title' => config('storage.default_album_title'), 'domain_uuid' => $domain]);

        $albums = StorageAlbum::whereDomainUuid($domain);

        $albums = $albums->orderBy('created_at', 'ASC')->get();

        return response()->json($albums);
    }

    function albumStore(Request $request, $domain = null)
    {
        $this->validate($request, [
            'title' => 'required'
        ]);

        $request->merge(['domain_uuid' => $domain]);

        if (StorageAlbum::firstOrCreate($request->all()))
            return response()->json(['notification' => 'Đã tạo album mới']);

        return response()->json(['notification' => 'Lỗi, không tạo được'], 403);
    }

    function albumUpdate(Request $request, $uuid)
    {
        $this->validate($request, [
            'title' => 'required'
        ]);

        $album = StorageAlbum::findOrFail($uuid);

        if ($request->get('title') == config('storage.default_album_title'))
            return response()->json(['notification' => 'Album này đã có rồi']);

        if ($album->update($request->all()))
            return response()->json(['notification' => 'Đã tạo lưu thay đổi']);

        return response()->json(['notification' => 'Lỗi, không lưu được'], 403);
    }

    function albumDestroy($uuid)
    {
        $album = StorageAlbum::find($uuid);
        if ($album->title == config('storage.default_album_title'))
            return response()->json(['notification' => 'Không thể xóa album mặc định']);
        else
            if (StorageAlbum::destroy($uuid))
                return response()->json(['notification' => 'Đã xóa album']);

        return response()->json(['notification' => 'Lỗi, không xóa được'], 403);
    }

    function makeThum(Request $request)
    {
        $domain = $request->get('domain');
        $next_file = $request->get('next_file');
        $data = [];
        if ($next_file == 0) {
            $data['total_file'] = StorageFile::whereHas('storageAlbum', function ($q) use ($domain) {
                $q->whereDomainUuid($domain);
            })->count();
        }

        $files = StorageFile::whereHas('storageAlbum', function ($q) use ($domain) {
            $q->whereDomainUuid($domain);
        })->orderBy('created_at')->offset($next_file)->first();


        return response()->json($data);
    }
}
