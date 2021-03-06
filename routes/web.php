<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Auth::routes();

Route::get('/home', 'HomeController@index')->name('home');

Route::group(['middleware' => ['web', 'auth']], function () {

    Route::get('/get/info/ip/{web}', 'System\GetInfoController@getIP')->name('get.info.ip');

    Route::get('/', function () {
        return view('welcome');
    });

    Route::get('/help', 'HelpController@index')->name('help.index');

    Route::group(['prefix' => 'system', 'namespace' => 'System', 'as' => 'system-'], function () {
        Route::get('logs', 'LogViewerController@index')->name('log.view');
    });
});
