<?php
/**
 * Created by PhpStorm.
 * User: traih
 * Date: 3/1/2018
 * Time: 11:59 AM
 */

namespace App;


class Translate extends \Eloquent
{
    protected $table = 'translations';
    protected $fillable = ['lang', 'default_uuid'];

    public function Translatetable()
    {
        return $this->morphTo();
    }
}