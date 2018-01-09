<?php
/**
 * Created by PhpStorm.
 * User: traih
 * Date: 20/12/2017
 * Time: 10:46 AM
 */

namespace Modules\Location\Entities;


use App\Helpers\ModelTrait\UuIdTrait;
use App\Translate;
use Modules\Storage\Entities\StorageFile;

class Location extends \Eloquent
{
    use UuIdTrait;
    protected $table = 'locations';
    protected $primaryKey = 'uuid';
    public $incrementing = false;
    protected $fillable = ['title', 'name', 'desc', 'content', 'map', 'storage_file_uuid', 'images'];

    public function getImagesAttribute($value)
    {
        if ($value != null)
            return json_decode($value);

        return $value;
    }

    public function setImagesAttribute($value)
    {
        if (is_array($value) || is_object($value))
            $this->attributes['images'] = json_encode($value, true);
    }

    public function setMapAttribute($value)
    {
        if (is_array($value) || is_object($value))
            $this->attributes['map'] = json_encode($value, true);
    }

    public function getMapAttribute($value)
    {
        if ($value != null)
            return json_decode($value);
        return $value;
    }

    function storageFile()
    {
        return $this->belongsTo(StorageFile::class);
    }

    public function translations()
    {
        return $this->morphMany(Translate::class, 'translatetable', 'translatetable_type', 'translatetable_uuid');
    }
}