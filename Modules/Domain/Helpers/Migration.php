<?php
/**
 * Created by PhpStorm.
 * User: traih
 * Date: 11/12/2017
 * Time: 2:09 PM
 */

namespace Modules\Domain\Helpers;


use Illuminate\Database\Schema\Blueprint;

class Migration
{
    public static function columns(Blueprint $table, $on_delete = 'SET NULL')
    {
        $table->uuid('domain_uuid')->nullable();

        $table->foreign('domain_uuid')
            ->references('uuid')
            ->on('domains')
            ->onDelete($on_delete);
    }
}