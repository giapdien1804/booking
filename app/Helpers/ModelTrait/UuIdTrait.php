<?php
/**
 * Copyright (c) 2017. giapdien1804@gmail.com|+841648392803
 */

/**
 * Created by PhpStorm.
 * User: traih
 * Date: 6/12/2017
 * Time: 9:09 AM
 */

namespace App\Helpers\ModelTrait;

use Ramsey\Uuid\Uuid;

trait UuIdTrait
{
    public static function bootUuIdTrait()
    {
        self::creating(function ($model) {
            $model->{$model->getKeyName()} = Uuid::uuid4()->toString();
        });
    }
}