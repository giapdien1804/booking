<?php
/**
 * Created by PhpStorm.
 * User: traih
 * Date: 14/12/2017
 * Time: 2:30 PM
 */

namespace Modules\Storage\Entities;


use App\Helpers\ModelTrait\UuIdTrait;
use App\Helpers\Node\NodeTrait;
use Illuminate\Database\Eloquent\SoftDeletes;
use Modules\User\Entities\User;
use Modules\User\Entities\UserUuidTrait;

class StorageFile extends \Eloquent
{
    use  UuIdTrait, UserUuidTrait, SoftDeletes, NodeTrait;
    protected $table = 'storage_files';
    public $incrementing = false;
    protected $primaryKey = 'uuid';
    protected $fillable = ['storage_album_uuid', 'user_uuid', 'storage_path', 'storage_name', 'storage_type', 'storage_ext',
        'storage_size', 'storage_title', 'storage_desc', 'storage_status', 'storage_password', 'storage_share',
        'storage_permission', 'storage_extra'];

    function storageAlbum()
    {
        return $this->belongsTo(StorageAlbum::class);
    }

    function user()
    {
        return $this->belongsTo(User::class);
    }
}