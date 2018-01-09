<?php

//use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateHotelsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('hotels', function (Blueprint $table) {
            $table->uuid('uuid')->primary();
            //domain_id
            Modules\Domain\Helpers\Migration::columns($table);
            //location_id
            Modules\Location\Helpers\Migration::columns($table);
            $table->string('star', 3)->default(0);
            $table->dateTime('check_in')->nullable();
            $table->dateTime('check_out')->nullable();
            $table->float('min_price')->default(0);
            $table->float('max_price')->default(0);
            $table->string('address')->nullable();
            $table->json('style')->nullable(); //phong cách khách sạn
            $table->json('room_type')->nullable(); //loại phòng
            $table->integer('number_of_room')->default(1); //số lượng phòng
            $table->text('booking_options')->nullable(); //tùy chọn đặt phòng
            $table->json('amenities')->nullable(); //tiện nghi
            $table->string('title');
            $table->string('name');
            $table->text('desc')->nullable();
            $table->longText('content')->nullable();
            //file_uuid
            Modules\Storage\Helpers\Migration::columns($table);
            $table->timestamps();
        });

        Schema::create('hotel_rooms', function (Blueprint $table) {
            $table->uuid('uuid')->primary();
            //hotel_uuid
            Modules\Hotel\Helpers\Migration::columns($table);
            $table->string('title');
            $table->string('name');
            $table->float('price')->default(0);
            $table->float('taxes')->default(0); //thuế
            $table->float('fees')->default(0); //phí
            $table->integer('max_people')->default(1);
            $table->integer('amount')->default(1); //số lượng phòng
            $table->boolean('refunds')->default(false);
            $table->json('description')->nullable();
            $table->boolean('breakfast')->default(true); //bao gồm bữa sáng
            $table->text('cancellation')->nullable(); //chính sách hủy
            $table->longText('content')->nullable();
            //file_uuid
            Modules\Storage\Helpers\Migration::columns($table);
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
        Schema::dropIfExists('hotel_rooms');
        Schema::dropIfExists('hotels');
    }
}
