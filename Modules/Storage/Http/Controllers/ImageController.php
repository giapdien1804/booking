<?php
/**
 * Created by PhpStorm.
 * User: traih
 * Date: 27/12/2017
 * Time: 10:41 AM
 */

namespace Modules\Storage\Http\Controllers;


use Illuminate\Http\Request;

class ImageController extends Controller
{
    function view(Request $request, $size, $model)
    {
        //todo: Nếu sử dụng mã has của ảnh thì dùng function này để return về image/jpg, ...
       /* $public = \Storage::disk('public');
        $local = \Storage::disk('local');
        if($local->has($size.'/'.$model));*/
    }
}