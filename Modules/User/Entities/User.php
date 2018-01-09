<?php
/**
 * Created by PhpStorm.
 * User: traih
 * Date: 11/12/2017
 * Time: 5:31 PM
 */

namespace Modules\User\Entities;


use App\Helpers\ModelTrait\UuIdTrait;
use Modules\Domain\Entities\Domain;
use Modules\Storage\Entities\StorageFile;

class User extends \Eloquent
{
    use UuIdTrait;
    protected $table = 'users';
    protected $primaryKey = 'uuid';
    public $incrementing = false;
    protected $fillable = ['name', 'email', 'password', 'access', 'status','extra'];
    protected $casts =[
        'extra'=>'array'
    ];

    public function setPasswordAttribute($value)
    {
        $this->attributes['password'] = bcrypt($value);
    }

    function domains()
    {
        return $this->belongsToMany(Domain::class, 'domain_user');
    }

    function setAccessAttribute($value)
    {
        $this->attributes['access'] = \Hash::make($value);
    }

    function storageFiles()
    {
        return $this->hasMany(StorageFile::class);
    }
}