<?php

//use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateDomainsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('domains', function (Blueprint $table) {
            $table->uuid('uuid')->primary();
            $table->string('name')->unique();
            $table->string('desc')->nullable();
            $table->string('svr')->nullable();
            $table->string('ip')->nullable();
            $table->string('type')->nullable();
            $table->string('status')->nullable();
            $table->json('module')->nullable();
            $table->json('lang');
            $table->json('image_size');
            $table->timestamps();
        });

        Schema::create('domain_user', function (Blueprint $table) {
            $table->increments('id');
            $table->uuid('domain_uuid');
            $table->uuid('user_uuid');

            $table->foreign('domain_uuid')
                ->references('uuid')
                ->on('domains')
                ->onDelete('CASCADE');

            $table->foreign('user_uuid')
                ->references('uuid')
                ->on('users')
                ->onDelete('CASCADE');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('domain_user');
        Schema::dropIfExists('domains');
    }
}
