<?php
/**
 * Created by PhpStorm.
 * User: traih
 * Date: 11/12/2017
 * Time: 2:09 PM
 */

namespace Modules\User\Helpers;


use Illuminate\Database\Schema\Blueprint;

class Migration
{
    public static function columns(Blueprint $table, $on_delete = 'SET NULL')
    {
        $table->uuid('user_uuid')->nullable();

        $table->foreign('user_uuid')
            ->references('uuid')
            ->on('users')
            ->onDelete($on_delete);
    }
}