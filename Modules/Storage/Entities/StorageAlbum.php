<?php
/**
 * Created by PhpStorm.
 * User: traih
 * Date: 14/12/2017
 * Time: 2:30 PM
 */

namespace Modules\Storage\Entities;


use App\Helpers\ModelTrait\TitleToNameTrait;
use App\Helpers\ModelTrait\UuIdTrait;
use Modules\Domain\Entities\Domain;
use Modules\Domain\Entities\DomainUuidTrait;

class StorageAlbum extends \Eloquent
{
    use UuIdTrait, TitleToNameTrait, DomainUuidTrait;
    protected $table = 'storage_albums';
    public $incrementing = false;
    protected $primaryKey = 'uuid';
    protected $fillable = ['title', 'name', 'desc', 'domain_uuid'];
    protected $hidden = ['domain_uuid'];

    function domain()
    {
        return $this->belongsTo(Domain::class);
    }

    function storageFiles()
    {
        return $this->hasMany(StorageFile::class);
    }
}