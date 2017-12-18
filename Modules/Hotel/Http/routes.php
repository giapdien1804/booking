<?php

Route::group(['middleware' => ['web', 'auth'], 'prefix' => 'hotel', 'as' => 'hotel.',
    'namespace' => 'Modules\Hotel\Http\Controllers'], function () {
    Route::get('/d/{domain}', 'HotelController@index')->name('index');
});
