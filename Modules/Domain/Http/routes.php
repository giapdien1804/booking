<?php

Route::group(['middleware' => ['web', 'auth'], 'prefix' => 'domain', 'as' => 'domain.',
    'namespace' => 'Modules\Domain\Http\Controllers'], function () {
    Route::get('/', 'DomainController@index')->name('index');
    Route::get('/create', 'DomainController@create')->name('create');
    Route::get('/{uuid}', 'DomainController@edit')->name('edit');
    Route::get('/{uuid}/show', 'DomainController@show')->name('show');
    Route::post('/', 'DomainController@store')->name('store');
    Route::put('/{uuid}', 'DomainController@update')->name('update');
    Route::delete('/{uuid}', 'DomainController@destroy')->name('destroy');
});
