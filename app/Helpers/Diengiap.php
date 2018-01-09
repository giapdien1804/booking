<?php
/**
 * Copyright (c) 2017. Code walk giapdien1804@gmail.com | +841648392803
 */

/**
 * Created by PhpStorm.
 * User: traih
 * Date: 26/7/2017
 * Time: 11:55 PM
 */

namespace App\Helpers;

use Illuminate\Support\HtmlString;
use Image;
use Storage;


class Diengiap
{
    public static function standardName($str, $space = '', $lower = false)
    {
        if ($lower) {
            $str = mb_strtolower($str, 'UTF-8');
        }
        $str = trim($str);
        if ($space != '') {
            $str = str_replace(' ', $space, $str);
        }
        $str = preg_replace("/(ò|ó|ọ|ỏ|õ|ơ|ờ|ớ|ợ|ở|ỡ|ô|ồ|ố|ộ|ổ|ỗ)/", 'o', $str);
        $str = preg_replace("/(Ò|Ó|Ọ|Ỏ|Õ|Ơ|Ờ|Ớ|Ợ|Ở|Ỡ|Ô|Ố|Ổ|Ộ|Ồ|Ỗ)/", 'o', $str);
        $str = preg_replace("/(à|á|ạ|ả|ã|ă|ằ|ắ|ặ|ẳ|ẵ|â|ầ|ấ|ậ|ẩ|ẫ)/", 'a', $str);
        $str = preg_replace("/(À|Á|Ạ|Ả|Ã|Ă|Ằ|Ắ|Ặ|Ẳ|Ẵ|Â|Ấ|Ầ|Ậ|Ẩ|Ẫ)/", 'a', $str);
        $str = preg_replace("/(ề|ế|ệ|ể|ê|ễ|é|è|ẻ|ẽ|ẹ)/", 'e', $str);
        $str = preg_replace("/(Ể|Ế|Ệ|Ể|Ê|Ễ|É|È|Ẻ|Ẽ|Ẹ)/", 'e', $str);
        $str = preg_replace("/(ừ|ứ|ự|ử|ư|ữ|ù|ú|ụ|ủ|ũ)/", 'u', $str);
        $str = preg_replace("/(Ừ|Ứ|Ự|Ử|Ư|Ữ|Ù|Ú|Ụ|Ủ|Ũ)/", 'u', $str);
        $str = preg_replace("/(ì|í|ị|ỉ|ĩ)/", 'i', $str);
        $str = preg_replace("/(Ì|Í|Ị|Ỉ|Ĩ)/", 'i', $str);
        $str = preg_replace("/(ỳ|ý|ỵ|ỷ|ỹ)/", 'y', $str);
        $str = preg_replace("/(Ỳ|Ý|Ỵ|Ỷ|Ỹ)/", 'y', $str);
        $str = preg_replace('/(đ|Đ)/', 'd', $str);
        $str = preg_replace('/[^a-z0-9_\.\-[:space:]]/i', '', $str);

        return $str;
    }

    static function valueToIcon($value, $true, $icon, $tooltip = '')
    {
        if ($value == $true) {
            return new HtmlString("<span class='icon tooltip' data-tooltip='{$tooltip}'><i class='fa fa-{$icon}'></i></span>");
        }

        return $value;
    }

    static function setKey($value)
    {
        if (config('auth.encrypt_key'))
            return \Crypt::encryptString($value);
        return $value;
    }

    static function getKey($value)
    {
        if (config('auth.encrypt_key'))
            return \Crypt::decryptString($value);
        return $value;
    }

    static function human_fileSize($bytes, $decimals = 2)
    {
        $sz = 'BKMGTP';
        $factor = floor((strlen($bytes) - 1) / 3);
        return sprintf("%.{$decimals}f", $bytes / pow(1024, $factor)) . @$sz[$factor];
    }

    static function getFontIconArray($path, $class_prefix = 'fa-')
    {
        if (!file_exists($path))
            return false;//if path is incorect or file does not exist, stop.

        $css = file_get_contents($path);
        $pattern = '/\.(' . $class_prefix . '(?:\w+(?:-)?)+):before\s+{\s*content:\s*"(.+)";\s+}/';

        preg_match_all($pattern, $css, $matches, PREG_SET_ORDER);

        $icons = array();
        foreach ($matches as $match) {
            $icons[$match[1]] = ucfirst(str_ireplace(array($class_prefix, '-'), array('', ' '), $match[1]));
        }

        return collect($icons)->sort();

    }

    public static function createImageThumbnail($disk, $path, $width = null, $height = null, $type = "fit", $option = null)
    {
        $path = ltrim($path, "/");
        $public_path = "{$width}x{$height}/{$type}/" . $path;
        //returns the original image if isn't passed width and height
        if (is_null($width) && is_null($height)) {
            if (isset($option['mask'])) {
                if (!Storage::disk('public')->exists('full/mask/' . $path)) {
                    $image = Image::make(Storage::disk($disk)->get($path));
                    $image->mask($option['mask'], true);
                    Storage::disk('public')->put('full/mask/' . $path, $image->encode());
                }
                return url(Storage::disk('public')->url('full/mask' . $path));
            } else {
                if (!Storage::disk('public')->exists('full/' . $path))
                    Storage::disk('public')->put('full/' . $path, Storage::disk($disk)->get($path));
            }

            if (!Storage::disk('public')->exists('full/' . $path))
                return url(Storage::disk('public')->url('full/' . $path));

            return url(Storage::disk('public')->url('no-image.gif'));
        }

        //if thumbnail exist returns it
        if (Storage::disk('public')->exists($public_path)) {
            return url(Storage::disk('public')->url($public_path));
        }

        //If original image doesn't exists returns a default image which shows that original image doesn't exist.
        if (!Storage::disk($disk)->exists($path)) {
            return self::createImageThumbnail('public', 'no-image.gif', $width, $height, $type);
        }

        $allowedMimeTypes = ['image/jpeg', 'image/gif', 'image/png'];
        $contentType = Storage::disk($disk)->mimeType($path);

        if (in_array($contentType, $allowedMimeTypes)) { //Checks if is an image

            $image = Image::make(Storage::disk($disk)->get($path));

            switch ($type) {
                case "fit":
                    {
                        $image->fit($width, $height, function ($constraint) {
                            $constraint->upsize();
                        });
                        break;
                    }
                case "resize":
                    {
                        //stretched
                        $image->resize($width, $height);
                        break;
                    }
                case "background":
                    {
                        $image->resize($width, $height, function ($constraint) {
                            //keeps aspect ratio and sets black background
                            $constraint->aspectRatio();
                            $constraint->upsize();
                        });
                        break;
                    }
                case "resizeCanvas":
                    {
                        $image->resizeCanvas($width, $height, 'center', false, 'rgba(0, 0, 0, 0)'); //gets the center part
                    }
            }

            Storage::disk('public')->put($public_path, $image->encode());

            //return the url of the thumbnail
            return url(Storage::disk('public')->url($public_path));
        } else {
            //return a placeholder image
            return self::createImageThumbnail('local', 'no-image.gif', $width, $height, $type);
        }
    }


    public static function extraByKey($key, $extras)
    {
        $tmp = collect($extras)->where('key', '=', $key)->first()->value;
        return $tmp;
    }

    public static function strFirst($str)
    {
        $map = explode(' ', $str);
        $tmp = '';
        foreach ($map as $item) {
            $tmp .= mb_strtoupper(mb_substr($item, 0, 1));
        }

        return $tmp;
    }
}