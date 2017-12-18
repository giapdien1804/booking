/*
 * Copyright (c) 2017. giapdien1804@gmail.com|+841648392803
 */

export default class GDS {
    static findDataToggleEvent(toggle_name, event, call_back) {
        let $dataToggle = Array.prototype.slice.call(document.querySelectorAll(`[data-toggle="${toggle_name}"]`), 0)
        if ($dataToggle.length > 0) {
            $dataToggle.forEach(function ($el) {
                $el.addEventListener(event, function () {
                    let target = $el.dataset.target
                    let $target = document.querySelector(target)
                    call_back($el, $target)
                })
            })
        }
    }

    static toSlug(str) {
        if (str.length <= 0) return ''
        // Chuyển hết sang chữ thường
        str = str.toLowerCase();

        // xóa dấu
        str = str.replace(/(à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ)/g, 'a');
        str = str.replace(/(è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ)/g, 'e');
        str = str.replace(/(ì|í|ị|ỉ|ĩ)/g, 'i');
        str = str.replace(/(ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ)/g, 'o');
        str = str.replace(/(ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ)/g, 'u');
        str = str.replace(/(ỳ|ý|ỵ|ỷ|ỹ)/g, 'y');
        str = str.replace(/(đ)/g, 'd');

        // Xóa ký tự đặc biệt
        str = str.replace(/([^0-9a-z-\s])/g, '');

        // Xóa khoảng trắng thay bằng ký tự -
        str = str.replace(/(\s+)/g, '-');

        // xóa phần dự - ở đầu
        str = str.replace(/^-+/g, '');

        // xóa phần dư - ở cuối
        str = str.replace(/-+$/g, '');

        // return
        return str;
    }

    static strpos(haystack, needle, offset) {
        let i = (haystack + '')
            .indexOf(needle, (offset || 0))
        return i === -1 ? false : i
    }

    static subText(text, length) {
        text = GDS.strip_tags(text)
        if (text.length <= length)
            return text;
        return text.substring(0, GDS.strpos(text, ' '))
    }

    static strip_tags(input, allowed) {
        if (input === null) return ''

        allowed = (((allowed || '') + '').toLowerCase().match(/<[a-z][a-z0-9]*>/g) || []).join('')
        let tags = /<\/?([a-z][a-z0-9]*)\b[^>]*>/gi
        let commentsAndPhpTags = /<!--[\s\S]*?-->|<\?(?:php)?[\s\S]*?\?>/gi
        let before = input
        let after = input
        // recursively remove tags to ensure that the returned string doesn't contain forbidden tags after previous passes (e.g. '<<bait/>switch/>')
        while (true) {
            before = after
            after = before.replace(commentsAndPhpTags, '').replace(tags, function ($0, $1) {
                return allowed.indexOf('<' + $1.toLowerCase() + '>') > -1 ? $0 : ''
            })
            // return once no more tags are removed
            if (before === after) {
                return after
            }
        }
    }

    static uuidv4() {
        return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
            let r = Math.random() * 16 | 0, v = c === 'x' ? r : (r & 0x3 | 0x8)
            return v.toString(16)
        })
    }

    static randomPassword(length) {
        let chars = 'abcdefghijklmnopqrstuvwxyz!@#$%^&*()-+<>ABCDEFGHIJKLMNOP1234567890'
        let pass = ''
        for (let x = 0; x < length; x++) {
            let i = Math.floor(Math.random() * chars.length)
            pass += chars.charAt(i)
        }
        return pass
    }

    static checkAjax(data) {
        if (typeof data.notifi !== 'undefined') {
            window.Notifi(data.notifi)
        }
        if (typeof data.location !== 'undefined') {
            window.location.href = data.location
        }
    }

    static humanFileSize(size) {
        let i = Math.floor(Math.log(size) / Math.log(1024));
        return ( size / Math.pow(1024, i) ).toFixed(2) * 1 + ' ' + ['B', 'kB', 'MB', 'GB', 'TB'][i];
    }

    static unitCalculator(bytes, options) {
        var units = 'BKMGTPEZY'.split('')

        function equals(a, b) {
            return a && a.toLowerCase() === b.toLowerCase()
        }

        bytes = typeof bytes == 'number' ? bytes : 0
        options = options || {}
        options.fixed = typeof options.fixed == 'number' ? options.fixed : 2
        options.spacer = typeof options.spacer == 'string' ? options.spacer : ' '

        options.calculate = function (spec) {
            var type = equals(spec, 'si') ? ['k', 'B'] : ['K', 'iB']
            var algorithm = equals(spec, 'si') ? 1e3 : 1024
            var magnitude = Math.log(bytes) / Math.log(algorithm) | 0
            var result = (bytes / Math.pow(algorithm, magnitude))
            var fixed = result.toFixed(options.fixed)
            var suffix

            if (magnitude - 1 < 3 && !equals(spec, 'si') && equals(spec, 'jedec'))
                type[1] = 'B'

            suffix = magnitude
                ? (type[0] + 'MGTPEZY')[magnitude - 1] + type[1]
                : ((fixed | 0) === 1 ? 'Byte' : 'Bytes')

            return {
                suffix: suffix,
                magnitude: magnitude,
                result: result,
                fixed: fixed,
                bits: {result: result / 8, fixed: (result / 8).toFixed(options.fixed)}
            }
        }

        options.to = function (unit, spec) {
            var algorithm = equals(spec, 'si') ? 1e3 : 1024
            var position = units.indexOf(typeof unit == 'string' ? unit[0].toUpperCase() : 'B')
            var result = bytes

            if (position === -1 || position === 0) return result.toFixed(2)
            for (; position > 0; position--) result /= algorithm
            return result.toFixed(2)
        }

        options.human = function (spec) {
            var output = options.calculate(spec)
            return output.fixed + options.spacer + output.suffix
        }

        return options;

    }
}