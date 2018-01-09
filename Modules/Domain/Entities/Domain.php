<?php
/**
 * Created by PhpStorm.
 * User: traih
 * Date: 11/12/2017
 * Time: 5:34 PM
 */

namespace Modules\Domain\Entities;


use App\Helpers\ModelTrait\UuIdTrait;
use Modules\Storage\Entities\StorageAlbum;
use Modules\User\Entities\User;

class Domain extends \Eloquent
{
    use UuIdTrait;
    protected $table = 'domains';
    protected $primaryKey = 'uuid';
    public $incrementing = false;
    protected $fillable = ['name', 'desc', 'svr', 'ip', 'type', 'status', 'module', 'lang', 'image_size'];
    protected $casts = [
        'module' => 'array',
        'lang' => 'array',
        'image_size' => 'array'
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