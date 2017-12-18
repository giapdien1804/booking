<?php
/**
 * Created by PhpStorm.
 * User: traih
 * Date: 12/12/2017
 * Time: 11:57 AM
 */

namespace App\Http\Controllers\System;


use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class GetInfoController extends Controller
{
    function getIP(Request $request, $domain)
    {
        $ip = gethostbyname($domain);
        if ($request->ajax())
            if (filter_var($ip, FILTER_VALIDATE_IP)) {
                return response()->json($ip);
            } else {
                return response()->json(['message' => 'Không xác định được địa chỉ ip'], 403);
            }

        return $ip;
    }
}