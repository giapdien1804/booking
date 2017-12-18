<?php

Route::group(['middleware' => ['web', 'auth'], 'prefix' => 'user', 'as' => 'user.',
    'namespace' => 'Modules\User\Http\Controllers'], function () {
    Route::get('/list', 'UserController@listSelect')->name('list');
    Route::get('/', 'UserController@index')->name('index');
    Route::get('/create', 'UserController@create')->name('create');
    Route::get('/{id}', 'UserController@edit')->name('edit');
    Route::post('/', 'UserController@store')->name('store');
    Route::put('/{id}', 'UserController@update')->name('update');
    Route::delete('/{id}', 'UserController@destroy')->name('destroy');
});
