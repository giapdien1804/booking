<?php
/**
 * Created by PhpStorm.
 * User: traih
 * Date: 11/12/2017
 * Time: 2:09 PM
 */

namespace Modules\Location\Helpers;


use Illuminate\Database\Schema\Blueprint;

class Migration
{
    public static function columns(Blueprint $table, $on_delete = 'SET NULL')
    {
        $table->uuid('location_uuid')->nullable();

        $table->foreign('location_uuid')
            ->references('uuid')
            ->on('locations')
            ->onDelete($on_delete);
    }
}