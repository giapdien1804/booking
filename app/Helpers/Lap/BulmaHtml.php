<?php
/**
 * Copyright (c) 2017. Code walk giapdien1804@gmail.com | +841648392803
 */

/**
 * Created by PhpStorm.
 * User: traih
 * Date: 3/8/2017
 * Time: 12:51 AM
 */

namespace App\Helpers\Lap;

use Illuminate\Support\MessageBag;

trait BulmaHtml
{
    static private function openDiv($class = '', $id = null)
    {
        $str_id = is_null($id) ? "" : "id=\"{$id}\"";
        $str_class = is_null($class) ? "" : "class=\"{$class}\"";

        return "<div {$str_id} {$str_class}>";
    }

    static private function closeDiv()
    {
        return "</div>";
    }

    static private function getBeforeAfter($str, $before = '', $after = '')
    {
        if ($before != '') {
            $str = $before.$str;
        }
        if ($after != '') {
            $str .= $after;
        }

        return $str;
    }

    static private function openField($add_on = false)
    {
        $class = $add_on ? 'has-addons' : '';

        return self::openDiv("field {$class}");
    }

    static private function openControl($icon_left = false, $icon_right = false)
    {
        $left = $icon_left ? 'has-icons-left ' : '';
        $right = $icon_right ? 'has-icons-right' : '';

        return self::openDiv("control {$left} {$right}");
    }

    static private function iconLeft($icon)
    {
        return "<span class=\"icon is-small is-left\"><i class=\"{$icon}\"></i></span>";
    }

    static private function iconRight($icon)
    {
        return "<span class=\"icon is-small is-right\"><i class=\"{$icon}\"></i></span>";
    }

    static private function iconError()
    {
        return "<span class=\"icon is-small is-right has-text-danger\"><i class=\"fa fa-warning\"></i></span>";
    }

    /**
     * @return mixed
     */
    private static function errors()
    {
        return \Session::get('errors', new MessageBag);
    }

    /**
     * @param string $name
     * @return string
     */
    static private function errorText($name)
    {
        if (self::errors()->has($name)) {
            $text = self::errors()->first($name);

            return "<p class=\"help is-danger\">{$text}</p>";
        }

        return '';
    }
}