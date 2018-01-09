<?php

Route::group(['middleware' => ['web', 'auth'], 'prefix' => 'hotel', 'as' => 'hotel.',
    'namespace' => 'Modules\Hotel\Http\Controllers'], function () {
    Route::get('/d/{domain}', 'HotelController@index')->name('index');
    Route::get('/d/{domain}/create', 'HotelController@create')->name('create');
    Route::get('/edit/{uuid}', 'HotelController@edit')->name('edit');
    Route::get('/show/{uuid}', 'HotelController@show')->name('show');
    Route::post('/d/{domain}/store', 'HotelController@store')->name('store');
    Route::put('/update/{uuid}', 'HotelController@update')->name('update');
    Route::delete('/destroy/{uuid}', 'HotelController@destroy')->name('destroy');
});
