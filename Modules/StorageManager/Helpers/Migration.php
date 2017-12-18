<?php
/**
 * Created by PhpStorm.
 * User: traih
 * Date: 11/12/2017
 * Time: 2:03 PM
 */

namespace Modules\StorageManager\Helpers;

use Illuminate\Database\Schema\Blueprint;


class Migration
{
    public static function columns(Blueprint $table)
    {
        $table->uuid('storage_file_uuid')->nullable();
        $table->json('images')->nullable();

        $table->foreign('storage_file_uuid')
            ->references('uuid')
            ->on('storage_files')
            ->onDelete('SET NULL');
    }

    public static function albumColumns(Blueprint $table)
    {
        $table->uuid('storage_album_uuid')->nullable();

        $table->foreign('storage_album_uuid')
            ->references('uuid')
            ->on('storage_albums')
            ->onDelete('SET NULL');
    }
}