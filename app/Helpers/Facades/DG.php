<?php
/**
 * Created by PhpStorm.
 * User: traih
 * Date: 2/10/2017
 * Time: 9:39 PM
 */

namespace App\Helpers\Facades;

use Illuminate\Support\Facades\Facade;

class DG extends Facade
{
    protected static function getFacadeAccessor()
    {
        return 'App\Helpers\Diengiap';
    }
}