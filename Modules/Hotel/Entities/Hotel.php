<?php
/**
 * Created by PhpStorm.
 * User: traih
 * Date: 3/1/2018
 * Time: 8:41 PM
 */

namespace Modules\Hotel\Entities;


use App\Helpers\ModelTrait\UuIdTrait;
use Modules\Domain\Entities\Domain;
use Modules\Location\Entities\Location;
use Modules\Storage\Entities\StorageFile;

class Hotel extends \Eloquent
{
    use UuIdTrait;
    protected $table = 'hotels';
    protected $primaryKey = 'uuid';
    public $incrementing = false;
    protected $fillable = ['domain_uuid', 'location_uuid', 'star', 'check_in', 'check_out', 'min_price', 'max_price',
        'address', 'style', 'room_type', 'number_of_room', 'booking_options', 'amenities', 'title', 'name', 'desc',
        'content', 'storage_file_uuid', 'images'];

    protected $casts = [
        'star' => 'number',
        'style' => 'array',
        'room_type' => 'array',
        'amenities' => 'array',
        'images' => 'array'
    ];

    function domain()
    {
        return $this->belongsTo(Domain::class);
    }

    function location()
    {
        return $this->belongsTo(Location::class);
    }

    function storageFile()
    {
        return $this->belongsTo(StorageFile::class);
    }
}