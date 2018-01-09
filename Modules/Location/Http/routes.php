<?php

Route::group(['middleware' => ['web', 'auth'], 'prefix' => 'location', 'as' => 'location.',
    'namespace' => 'Modules\Location\Http\Controllers'], function () {
    Route::get('/', 'LocationController@index')->name('index');
    Route::get('/create', 'LocationController@create')->name('create');
    Route::get('/{uuid}', 'LocationController@edit')->name('edit');
    Route::post('/', 'LocationController@store')->name('store');
    Route::put('/{uuid}', 'LocationController@update')->name('update');
    Route::delete('/{uuid}', 'LocationController@destroy')->name('destroy');
});
