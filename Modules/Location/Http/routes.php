<?php

Route::group(['middleware' => ['web','auth'], 'prefix' => 'location','as'=>'location.',
    'namespace' => 'Modules\Location\Http\Controllers'], function()
{
    Route::get('/d{domain}', 'LocationController@index')->name('index');
});
