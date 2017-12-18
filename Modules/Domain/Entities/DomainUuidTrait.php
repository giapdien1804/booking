<?php
/**
 * Created by PhpStorm.
 * User: traih
 * Date: 17/12/2017
 * Time: 8:57 AM
 */

namespace Modules\Domain\Entities;


trait DomainUuidTrait
{
    public static function bootDomainUuidTrait()
    {
        self::creating(function ($model) {
            if (\Route::current()->hasParameter('domain'))
                $model->domain_uuid = \Route::current()->parameter('domain');
        });
    }
}