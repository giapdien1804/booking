webpackJsonp([48],{

/***/ 140:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(18)
/* script */
var __vue_script__ = __webpack_require__(257)
/* template */
var __vue_template__ = __webpack_require__(258)
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __vue_script__,
  __vue_template__,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "resources\\assets\\js\\components\\Slug.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {  return key !== "default" && key.substr(0, 2) !== "__"})) {  console.error("named exports are not supported in *.vue files.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-ba74e9bc", Component.options)
  } else {
    hotAPI.reload("data-v-ba74e9bc", Component.options)
' + '  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 257:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
    name: 'inputSlug',
    props: {
        value: {
            type: Object,
            default: function _default() {
                return {
                    title: '',
                    name: ''
                };
            }
        },
        label: String,
        name: {
            type: Object,
            default: function _default() {
                return {
                    title: 'title',
                    name: 'slug'
                };
            }
        }
    },
    data: function data() {
        return {
            isEdit: false
        };
    },
    methods: {
        updateInput: function updateInput(value) {
            this.$emit('input', value);
        },
        toSlug: function toSlug(str) {
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
        },
        editSlug: function editSlug() {
            var _this = this;

            this.isEdit = !this.isEdit;
            if (this.isEdit) {
                this.elFrom.removeEventListener('keyup', function () {
                    return false;
                });
            } else {
                this.elFrom.addEventListener('keyup', function () {
                    _this.$refs.slug_input.value = _this.toSlug(_this.elFrom.value);
                });
            }
        }
    }
});

/***/ }),

/***/ 258:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", [
    _c("div", { staticClass: "field" }, [
      _c("label", [_vm._v("Title")]),
      _vm._v(" "),
      _c("input", {
        staticClass: "input",
        attrs: {
          type: "text",
          name: _vm.name.title,
          id: "input-" + _vm.name.title
        },
        domProps: { value: _vm.value.title }
      })
    ]),
    _vm._v(" "),
    _c("div", { staticClass: "field" }, [
      _c("label", { attrs: { for: "input-" + _vm.name } }, [
        _vm._v(_vm._s(_vm.label))
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "field has-addons" }, [
        _c("div", { staticClass: "control is-expanded bg-light" }, [
          _c("input", {
            class: { "input is-fullwidth": true, "is-static": !_vm.isEdit },
            attrs: {
              name: _vm.name.name,
              id: "input-" + _vm.name.name,
              readonly: !_vm.isEdit ? true : null
            },
            domProps: { value: _vm.value.name },
            on: { input: _vm.updateInput }
          })
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "control" }, [
          _c(
            "button",
            {
              staticClass: "button",
              on: {
                click: function($event) {
                  $event.preventDefault()
                  _vm.editSlug($event)
                }
              }
            },
            [_vm._m(0, false, false)]
          )
        ])
      ])
    ])
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("span", { staticClass: "icon" }, [
      _c("i", { staticClass: "fa fa-edit" })
    ])
  }
]
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-ba74e9bc", module.exports)
  }
}

/***/ })

});