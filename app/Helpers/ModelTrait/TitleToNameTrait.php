<?php
/**
 * Created by PhpStorm.
 * User: traih
 * Date: 17/12/2017
 * Time: 8:49 AM
 */

namespace App\Helpers\ModelTrait;


trait TitleToNameTrait
{
    public static function bootTitleToNameTrait()
    {
        self::creating(function ($model) {
            $model->name = str_slug($model->title);
        });

        self::updating(function ($model) {
            $model->name = str_slug($model->title);
        });
    }
}