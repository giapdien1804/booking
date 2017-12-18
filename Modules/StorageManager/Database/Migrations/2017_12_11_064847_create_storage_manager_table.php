<?php

//use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateStorageManagerTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('storage_albums', function (Blueprint $table) {
            $table->uuid('uuid')->primary();
            $table->string('title');
            $table->string('name');
            $table->text('desc')->nullable();
            //domain_uuid
            Modules\Domain\Helpers\Migration::columns($table);
        });

        Schema::create('storage_files', function (Blueprint $table) {
            $table->uuid('uuid')->primary();
            //album_uuid
            Modules\StorageManager\Helpers\Migration::albumColumns($table);
            //user_uuid
            Modules\User\Helpers\Migration::columns($table);
            $table->text('storage_path')->nullable();
            $table->string('storage_name')->nullable();
            $table->string('storage_type')->nullable();
            $table->string('storage_ext', 20)->nullable();
            $table->string('storage_size')->default(0);
            $table->string('storage_title')->nullable();
            $table->text('storage_desc')->nullable();
            $table->string('storage_status')->default('public');
            $table->string('storage_password')->nullable();
            $table->json('storage_share')->nullable();
            $table->json('storage_permissions')->nullable();
            $table->json('storage_extra')->nullable();
            $table->softDeletes();
            //node
            App\Helpers\Node\NestedSet::columns($table, true);

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
        Schema::dropIfExists('storage_files');
        Schema::dropIfExists('storage_albums');
    }
}
