<?php

Route::group(['middleware' => ['web', 'auth'], 'prefix' => 'storage', 'as' => 'storage.',
    'namespace' => 'Modules\Storage\Http\Controllers'], function () {
    Route::get('/action/view/{uuid}', 'StorageController@actionView')
        ->name('action.view');
    Route::get('/d/{domain}', 'StorageController@index')
        ->name('index');
    Route::get('/file/a/{album?}', 'StorageController@fileList')
        ->name('file.list');
    Route::post('/file/a/{album}', 'StorageController@fileStore')
        ->name('file.store');
    Route::put('/file', 'StorageController@fileUpdate')
        ->name('file.update');
    Route::delete('/file/trash', 'StorageController@fileDelete')
        ->name('file.delete');
    Route::delete('/file/destroy', 'StorageController@fileDestroy')
        ->name('file.destroy');
    Route::post('/file/restore', 'StorageController@fileRestore')
        ->name('file.restore');

    Route::get('/album/d/{domain}', 'StorageController@albumList')->name('album.list');
    Route::post('/album/d/{domain}', 'StorageController@albumStore')->name('album.store');
    Route::put('/album/{uuid}', 'StorageController@albumUpdate')->name('album.update');
    Route::delete('/album/{uuid}', 'StorageController@albumDestroy')->name('album.destroy');
});
