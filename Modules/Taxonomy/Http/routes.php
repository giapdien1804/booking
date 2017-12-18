<?php

Route::group(['middleware' => ['web', 'auth'], 'prefix' => 'taxonomy', 'as' => 'taxonomy.',
    'namespace' => 'Modules\Taxonomy\Http\Controllers'], function () {
    Route::get('/d/{domain}', 'TaxonomyController@index')->name('index');
});
