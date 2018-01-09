<?php
/**
 * Created by PhpStorm.
 * User: traih
 * Date: 26/7/2017
 * Time: 5:25 PM
 */

namespace App\Helpers;

use App\Helpers\Lap\BulmaHtml;
use Form;
use Illuminate\Support\HtmlString;

class Bulma
{
    use BulmaHtml;

    static function addOnBtn($class = '', $target = '', $title = '', $icon = '', $label = '')
    {
        return "<div class=\"control\">
                   <span class=\"button is-info {$class}\" data-target=\"{$target}\">
                       <span class=\"icon\" title=\"{$title}\">
                        <i class=\"{$icon}\"></i>
                       </span>
                       {$label}
                   </span>
                </div>";
    }

    /**
     * @param string $label
     * @param string $name
     * @param string $value
     * @param string $help
     * @param string $icon
     * @param string $before
     * @param string $after
     * @param array $add_on
     * @return HtmlString
     */
    static function text($label, $name, $value = null, $help = '', $icon = '', $before = '', $after = '', $add_on = [])
    {
        $tmp_name = str_replace(']', '', str_replace('[', '.', $name));
        $is_error = self::errors()->has($tmp_name);
        $is_add_on = empty($add_on) ? false : true;
        if ($is_add_on) {
            $str = Form::label('input-' . $name, $label, ['class' => 'label']);
        }
        $str = self::openField($is_add_on);
        if (!$is_add_on) {
            $str .= Form::label('input-' . $name, $label, ['class' => 'label']);
        }
        $str .= self::openControl($icon != '' ? true : false, $is_error);
        $str .= Form::input('text', $name, $value, [
            'id' => 'input-' . $name,
            'class' => $is_error ? 'input is-danger' : 'input',
        ]);
        if ($icon != '') {
            $str .= self::iconLeft($icon);
        }
        if ($is_error) {
            $str .= self::iconError();
        }
        $str .= self::closeDiv(); //close control
        if ($help != '')
            $str .= '<p class="help">' . $help . '</p>';
        if ($is_add_on) {
            foreach ($add_on as $value) {
                $str .= $value;
            }
        }
        if (!$is_add_on) {
            $str .= self::errorText($tmp_name);
        }
        $str .= self::closeDiv(); //close field
        if ($is_add_on) {
            $str .= self::errorText($tmp_name);
        }

        return new HtmlString(self::getBeforeAfter($str, $before, $after));
    }

    static function textarea($label, $name, $value = null, $before = '', $after = '')
    {
        $tmp_name = str_replace(']', '', str_replace('[', '.', $name));
        $is_error = self::errors()->has($tmp_name);
        $str = self::openField();
        $str .= Form::label('input-' . $name, $label, ['class' => 'label']);
        $str .= self::openControl(false, $is_error);
        $str .= Form::textarea($name, $value, [
            'id' => 'input-' . $name,
            'class' => $is_error ? 'input is-danger' : 'input',
        ]);
        if ($is_error) {
            $str .= self::iconError();
        }
        $str .= self::closeDiv(); //close control

        $str .= self::errorText($tmp_name);
        $str .= self::closeDiv(); //close field

        return new HtmlString(self::getBeforeAfter($str, $before, $after));
    }

    /**
     * @param string $label
     * @param string $name
     * @param string $value
     * @param string $before
     * @param string $after
     * @return \Illuminate\Support\HtmlString
     */
    static function email($label, $name, $value = null, $before = '', $after = '')
    {
        $is_error = self::errors()->has($name);
        $str = self::openField();
        $str .= Form::label('input-' . $name, $label, ['class' => 'label']);
        $str .= self::openControl(true, true);
        $str .= Form::input('email', $name, $value, [
            'id' => 'input-' . $name,
            'class' => $is_error ? 'input is-danger' : 'input',
        ]);
        $str .= self::iconLeft('fa fa-envelope');
        if ($is_error) {
            $str .= self::iconError();
        }
        $str .= self::closeDiv(); //close control
        $str .= self::errorText($name);
        $str .= self::closeDiv(); //close field

        return new HtmlString(self::getBeforeAfter($str, $before, $after));
    }

    /**
     * @param string $label
     * @param string $name
     * @param string $value
     * @param string $before
     * @param string $after
     * @return \Illuminate\Support\HtmlString
     */
    static function password($label, $name, $value = null, $before = '', $after = '')
    {
        $is_error = self::errors()->has($name);
        $str = Form::label('input-' . $name, $label, ['class' => 'label']);
        $str .= self::openField(true);
        $str .= self::openControl(true, true);
        $str .= Form::input('password', $name, $value, [
            'id' => 'input-' . $name,
            'class' => $is_error ? 'input is-danger' : 'input',
        ]);
        $str .= self::iconLeft('fa fa-key');
        if ($is_error) {
            $str .= self::iconError();
        }
        $str .= self::closeDiv();//close control
        $str .= self::addOnBtn('show-pass', 'input-' . $name, 'Show pass', 'fa fa-eye');
        $str .= self::closeDiv();//close field
        $str .= self::errorText($name);

        return new HtmlString(self::getBeforeAfter($str, $before, $after));
    }

    /**
     * @param string $label
     * @param string $name
     * @param null $value
     * @param bool $checked
     * @param string $before
     * @param string $after
     * @return \Illuminate\Support\HtmlString
     */
    static function checkBox($label, $name, $value = null, $checked = false, $before = '', $after = '')
    {
        $str = self::openField();
        $str .= self::openControl();
        $str .= self::openDiv("b-checkbox is-success");
        $str .= Form::checkbox($name, $value, $checked, ['class' => 'styled', 'id' => 'input-' . $name]);
        $str .= Form::label('input-' . $name, $label);
        $str .= self::closeDiv();//close b-checkbox
        $str .= self::closeDiv();//close control
        $str .= self::errorText($name);
        $str .= self::closeDiv();//close field

        return new HtmlString(self::getBeforeAfter($str, $before, $after));
    }

    /**
     * @param string $name
     * @param array $data
     * @param array $checked
     * @param string $before
     * @param string $after
     * @return \Illuminate\Support\HtmlString
     */
    static function checkBoxList($name, $data = [], $checked = [], $before = '', $after = '')
    {
        $str = self::openField();
        $str .= self::openControl();
        $index = 0;
        foreach ($data as $value => $label) {
            $str .= self::openDiv("b-checkbox is-success is-inline");
            $str .= Form::checkbox($name . '[]', $value, in_array($value, $checked), [
                'class' => 'styled',
                'id' => "input-{$name}-{$index}",
            ]);
            $str .= Form::label("input-{$name}-{$index}", $label);
            $str .= self::closeDiv();//close b-checkbox
            $index++;
        }
        $str .= self::closeDiv();//close control
        $str .= self::errorText($name);
        $str .= self::closeDiv();//close field

        return new HtmlString(self::getBeforeAfter($str, $before, $after));
    }

    /**
     * @param string $label
     * @param string $name
     * @param array $data
     * @param null|string|integer $selected
     * @param bool|string|integer $null_value
     * @param string $icon
     * @param string $before
     * @param string $after
     * @param array $add_on
     * @return \Illuminate\Support\HtmlString
     */
    static function select(
        $label,
        $name,
        $data = [],
        $selected = null,
        $null_value = false,
        $icon = '',
        $before = '',
        $after = '',
        $add_on = []
    )
    {
        if ($null_value !== false) {
            $data = array_merge([null => 'Select...'], $data);
        }
        $is_error = self::errors()->has($name);
        $is_add_on = empty($add_on) ? false : true;
        $str = self::openField($is_add_on);
        $str .= Form::label("input-{$name}", $label, ['class' => 'label']);
        $str .= self::openControl($icon != '' ? true : false, $is_error);
        $str .= self::openDiv('select');
        $str .= Form::select($name, $data, $selected, ['id' => "input-{$name}"]);
        $str .= self::closeDiv();//close select
        $str .= self::closeDiv();//close control
        $str .= self::errorText($name);
        $str .= self::closeDiv();//close field

        return new HtmlString(self::getBeforeAfter($str, $before, $after));
    }

    static function breadcrumb($data)
    {
        $str = "<ul class=\"my-breadcrumb is-success\">";
        foreach ($data as $link => $title) {
            $class = '';
            if ($link == \URL::current())
                $class = 'is-active';
            $str .= "<li><a class=\"{$class}\" href=\"{$link}\" aria-current=\"page\">{$title}</a></li>";
        }

        $str .= '</ul>';

        return new HtmlString($str);
    }

    static function shortLink($route, $name, $type)
    {
        $url = (request($name) == 'asc' || !request()->has($name)) ? route($route, [$name => 'desc']) : route($route, [$name => 'asc']);
        $sort = request()->has($name) ? request($name) : 'asc';
        $str = "<a href=\"{$url}\"><span class=\"icon\"><i class=\"fa fa-sort-{$type}-{$sort}\"></i> </span> </a>";

        return new HtmlString($str);
    }

    /**
     * @param \Illuminate\Pagination\LengthAwarePaginator $model
     * @param int $min
     * @return HtmlString
     */
    static function dropdownPerRow($model, $min = 50)
    {
        $total = $model->total();
        if ($total <= $min)
            $str = '';
        else {
            $per_page = request('per_page', $min);

            $str = "<div class=\"dropdown\">
                <div class=\"dropdown-trigger\" data-toggle=\"dropdown\">
                    <button class=\"button is-success\" type=\"button\" aria-haspopup=\"true\" aria-controls=\"dropdown-menu\">
                        <span>{$per_page} dòng</span>
                        <span class=\"icon\">
                        <i class=\"fa fa-angle-down\" aria-hidden=\"true\"></i>
                          </span>
                    </button>
                </div>
                <div class=\"dropdown-menu\" id=\"dropdown-per-row\" role=\"menu\">
                    <div class=\"dropdown-content\">";

            $range = round($total / $min);

            for ($i = 1; $i <= $range; $i++) {
                $in_page = $i * $min;
                $active = $per_page == $in_page ? 'is-active' : '';
                $url = request()->fullUrlWithQuery(['per_page' => $in_page]);
                $str .= "<a href=\"{$url}\"
                           class=\"dropdown-item {$active}\">{$in_page} dòng</a>";
            }

            $str .= "</div>
                </div>
            </div>";
        }

        return new HtmlString($str);
    }
}