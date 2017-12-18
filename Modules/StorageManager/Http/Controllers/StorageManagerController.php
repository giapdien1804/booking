<?php

namespace Modules\StorageManager\Http\Controllers;

use Illuminate\Http\Request;
use Modules\Domain\Entities\Domain;
use Modules\StorageManager\Entities\StorageAlbum;
use Modules\StorageManager\Entities\StorageFile;

class StorageManagerController extends Controller
{
    function index($domain)
    {
        $current_domain = Domain::find($domain);
        return view('storagemanager::index', compact('current_domain'));
    }

    function load(Request $request, $domain)
    {
        $albums = StorageAlbum::with(['storageFiles' => function ($q) {
            $q->paginate(30);
        }], 'storageFiles.user')->whereDomainUuid($domain)->get();

        return response()->json($albums);
    }

    function saveDetail(Request $request)
    {
        foreach ($request->get('data') as $value) {
            $data_update = [
                'item_title' => $value['item_title'],
                'description' => $value['description'],
            ];
            StorageFile::find($value['hash'])->update($data_update);
        }
    }

    function delete(Request $request)
    {
        $hash = $request->all();
        $link = StorageFile::whereIn('hash', $hash);
        if ($link->delete()) {
            return response()->json(['delete success']);
        }

        return response()->json(['Error'], 403);
    }

    function destroy(Request $request)
    {
        $hash = $request->all();
        $fmg = StorageFile::withTrashed()->whereIn('hash', $hash);
        $list = $fmg->get();
        $item = $fmg->pluck('item_title')->toArray();
        if ($fmg->forceDelete()) {
            //delete storage
            foreach ($list as $value) {
                if ($value->file_ext == null)
                    Storage::disk($value->disk)->deleteDir($value->path);
                else
                    Storage::disk($value->disk)->delete($value->path);
            }
            return response()->json(implode(', ', $item));
        }

        return response()->json(['error'], 403);
    }

    function restore(Request $request)
    {
        $fmg = StorageFile::with('descendants')->withTrashed()->whereIn('hash', $request->all());
        $item = $fmg->pluck('item_title')->toArray();
        if ($fmg->restore()) {
            return response()->json(implode(', ', $item));
        }

        return response()->json(['error'], 403);
    }

    function doUpload(Request $request, $cus = null)
    {
        if ($request->hasFile('uploads')) {
            $files = $request->file('uploads');
            $local_path = '';
            if ($request->get('image') == 'active') {
                $local_path = Carbon::now()->year . '/' . Carbon::now()->month . '/' . Carbon::now()->day . '/';
            }

            foreach ($files as $file) {
                /** @var \Illuminate\Http\UploadedFile $file */
                $name = \DG::standardName($file->getClientOriginalName());
                $full_name = $name == null ?
                    $file->getFilename() . '.' . $file->extension() : $name;

                $path = $file->store($local_path . $this->getPath(), $this->disk);
                $file_type = $file->getClientMimeType();
                $file_ext = $file->getClientOriginalExtension();
                $size = $file->getClientSize();

                $node = new StorageFile([
                    'disk' => $this->disk,
                    'path' => $path,
                    'file_name' => pathinfo($path, PATHINFO_BASENAME),
                    'file_type' => $file_type,
                    'file_ext' => $file_ext,
                    'size' => $size,
                    'item_title' => $full_name
                ]);

                if ($this->hash == null)
                    $node->save();
                else
                    $node->appendToNode($this->fmg)->save();

                //create thum 180x150
                Diengiap::createImageThumbnail($this->disk, $path, 180, 150);
            }

            return response()->json(['message' => 'Upload success']);
        }

        return response()->json(['message' => 'No file upload'], 403);
    }

    function albumList($domain)
    {
        $albums = StorageAlbum::whereDomainUuid($domain)->get();

        return response()->json($albums);
    }

    function albumStore(Request $request, $domain)
    {
        $this->validate($request, [
            'title' => 'required'
        ]);

        if (StorageAlbum::create($request->all()))
            return response()->json(['message' => 'Đã tạo album mới']);

        return response()->json(['error' => 'Lỗi, không tạo được'], 403);
    }

    function albumUpdate(Request $request, $uuid)
    {
        $this->validate($request, [
            'title' => 'required'
        ]);

        $album = StorageAlbum::findOrFail($uuid);

        if ($album->update($request->all()))
            return response()->json(['message' => 'Đã tạo lưu thay đổi']);

        return response()->json(['error' => 'Lỗi, không lưu được'], 403);
    }

    function albumDestroy($uuid)
    {
        if (StorageAlbum::destroy($uuid))
            return response()->json(['message' => 'Đã xóa album']);

        return response()->json(['error' => 'Lỗi, không xóa được'], 403);
    }
}
