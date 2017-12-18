<?php
/**
 * Created by PhpStorm.
 * User: traih
 * Date: 26/7/2017
 * Time: 12:09 PM
 */

namespace App\Helpers;

use Auth;
use Cache;

class UserCache
{
    protected  $key;

    function __construct($key)
    {
        $this->key = 'u_c_' . Auth::id() . $key;
    }

    static function load($key)
    {
        return new UserCache($key);
    }

    function has()
    {
        return Cache::has($this->key);
    }

    function set($value, $time = 60)
    {
        Cache::put($this->key, $value, $time);
        
        return $value;
    }

    function get()
    {
        if ($this->has())
            return Cache::get($this->key);

        return null;
    }

    function forever($value)
    {
        Cache::forever($this->key, $value);

        return $value;
    }

    function forget()
    {
        return Cache::forget($this->key);
    }

}