<?php

//use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateTaxonomiesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('taxonomies', function (Blueprint $table) {
            $table->uuid('uuid')->primary();
            $table->string('title')->default('Category');
            $table->string('name')->default('category');
            $table->text('description')->nullable();
            $table->string('template', 50);
            //domain_uuid
            Modules\Domain\Helpers\Migration::columns($table, 'CASCADE');

            $table->timestamps();
        });

        Schema::create('taxonomy_terms', function (Blueprint $table) {
            $table->uuid('uuid')->primary();
            $table->uuid('taxonomy_uuid')->nullable();
            $table->string('title')->default('Default');
            $table->string('name')->default('default');
            $table->text('description')->nullable();
            $table->json('seo')->nullable();
            $table->integer('post_count')->default(0);
            $table->json('meta')->nullable();
            //file_uuid
            Modules\StorageManager\Helpers\Migration::columns($table);
            //node
            App\Helpers\Node\NestedSet::columns($table, true);

            $table->foreign('taxonomy_uuid')
                ->references('uuid')
                ->on('taxonomies')
                ->onDelete('CASCADE');

            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('terms');
        Schema::dropIfExists('taxonomies');
    }
}
