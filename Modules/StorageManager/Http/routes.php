<?php

Route::group(['middleware' => ['web', 'auth'], 'prefix' => 'storagemanager', 'as' => 'storagemanager.',
    'namespace' => 'Modules\StorageManager\Http\Controllers'], function () {
    Route::get('/d/{domain}', 'StorageManagerController@index')
        ->name('index');
    Route::post('/load/d/{domain}', 'StorageManagerController@load')
        ->name('load');

    Route::get('/album/d/{domain}', 'StorageManagerController@albumList')->name('album.list');
    Route::post('/album/d/{domain}', 'StorageManagerController@albumStore')->name('album.store');
    Route::put('/album/d/{domain}', 'StorageManagerController@albumUpdate')->name('album.update');
});
