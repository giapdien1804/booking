<?php
/**
 * Created by PhpStorm.
 * User: traih
 * Date: 26/7/2017
 * Time: 6:19 PM
 */

namespace App\Helpers\Facades;


use Illuminate\Support\Facades\Facade;

class UserCache extends Facade
{
    protected static function getFacadeAccessor()
    {
        return 'App\Helpers\UserCache';
    }
}