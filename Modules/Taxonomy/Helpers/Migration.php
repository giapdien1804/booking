<?php
/**
 * Created by PhpStorm.
 * User: traih
 * Date: 11/12/2017
 * Time: 2:09 PM
 */

namespace Modules\Taxomomy\Helpers;


use Illuminate\Database\Schema\Blueprint;

class Migration
{
    public static function columns(Blueprint $table, $on_delete = 'SET NULL')
    {
        $table->uuid('taxonomy_uuid')->nullable();

        $table->foreign('taxonomy_uuid')
            ->references('uuid')
            ->on('taxonomies')
            ->onDelete($on_delete);
    }

    public static function termColumns(Blueprint $table, $on_delete = 'SET NULL')
    {
        $table->uuid('taxonomy_term_uuid')->nullable();

        $table->foreign('taxonomy_term_uuid')
            ->references('uuid')
            ->on('taxonomy_terms')
            ->onDelete($on_delete);
    }
}