<?php

Route::group(['middleware' => ['web','auth'], 'prefix' => 'blog','as'=>'blog.',
    'namespace' => 'Modules\Blog\Http\Controllers'], function()
{
    Route::get('/d/{domain}', 'BlogController@index')->name('index');
});
