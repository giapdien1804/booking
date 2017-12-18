<?php
/**
 * Created by PhpStorm.
 * User: traih
 * Date: 11/12/2017
 * Time: 2:09 PM
 */

namespace Modules\Hotel\Helpers;


use Illuminate\Database\Schema\Blueprint;

class Migration
{
    public static function columns(Blueprint $table, $on_delete = 'CASCADE')
    {
        $table->uuid('hotel_uuid')->nullable();

        $table->foreign('hotel_uuid')
            ->references('uuid')
            ->on('hotels')
            ->onDelete($on_delete);
    }

    public static function roomColumns(Blueprint $table, $on_delete = 'CASCADE')
    {
        $table->uuid('hotel_rooms_uuid')->nullable();

        $table->foreign('hotel_rooms_uuid')
            ->references('uuid')
            ->on('hotel_rooms')
            ->onDelete($on_delete);
    }
}