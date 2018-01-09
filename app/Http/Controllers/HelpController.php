<?php
/**
 * Created by PhpStorm.
 * User: traih
 * Date: 28/12/2017
 * Time: 9:52 AM
 */

namespace App\Http\Controllers;


use Illuminate\Http\Request;

class HelpController extends Controller
{
    function index(Request $request)
    {
        if ($request->get('h') == 'khoi-tao-anh-thu-nho')
            return view('help.thum');

        return view('help.index');
    }
}