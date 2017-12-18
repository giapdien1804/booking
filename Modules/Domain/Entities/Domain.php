<?php
/**
 * Created by PhpStorm.
 * User: traih
 * Date: 11/12/2017
 * Time: 5:34 PM
 */

namespace Modules\Domain\Entities;


use App\Helpers\ModelTrait\UuIdTrait;
use Modules\StorageManager\Entities\StorageAlbum;
use Modules\User\Entities\User;

class Domain extends \Eloquent
{
    use UuIdTrait;
    protected $table = 'domains';
    protected $primaryKey = 'uuid';
    public $incrementing = false;
    protected $fillable = ['name', 'desc', 'svr', 'ip', 'type', 'status', 'module'];
    protected $casts = [
        'module' => 'array'
    ];

    function users()
    {
        return $this->belongsToMany(User::class, 'domain_user');
    }

    function storageAlbums()
    {
        return $this->hasMany(StorageAlbum::class);
    }
}