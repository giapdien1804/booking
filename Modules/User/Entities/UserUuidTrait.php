<?php
/**
 * Copyright (c) 2017. giapdien1804@gmail.com|+841648392803
 */

/**
 * Created by PhpStorm.
 * User: traih
 * Date: 6/12/2017
 * Time: 9:19 AM
 */

namespace Modules\User\Entities;


trait UserUuidTrait
{
    public static function bootUserUuidTrait()
    {
        self::creating(function ($model) {
            $model->user_uuid = \Auth::id();
        });
    }
}