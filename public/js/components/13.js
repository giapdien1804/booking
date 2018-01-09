webpackJsonp([13],{

/***/ 120:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(3)
/* script */
var __vue_script__ = __webpack_require__(219)
/* template */
var __vue_template__ = __webpack_require__(220)
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
Component.options.__file = "resources\\assets\\js\\components\\TextRepeater.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {  return key !== "default" && key.substr(0, 2) !== "__"})) {  console.error("named exports are not supported in *.vue files.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-eca8cf68", Component.options)
  } else {
    hotAPI.reload("data-v-eca8cf68", Component.options)
' + '  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 219:
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

/* harmony default export */ __webpack_exports__["default"] = ({
    name: "text-repeater",
    props: {
        inputName: { type: String, default: '' },
        inputLabel: { type: String, required: false },
        inputValue: { type: [String, Array, Object], required: false }
    },
    data: function data() {
        return {
            dataInput: [{ value: '' }]
        };
    },
    methods: {
        clickPlus: function clickPlus() {
            this.dataInput.push({ 'value': '' });
        },
        clickRemove: function clickRemove(index) {
            this.$delete(this.dataInput, index);
        }
    }
});

/***/ }),

/***/ 220:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "field" }, [
    _vm.inputLabel
      ? _c("label", {
          staticClass: "label",
          domProps: { textContent: _vm._s(_vm.inputLabel) }
        })
      : _vm._e(),
    _vm._v(" "),
    _c(
      "div",
      { staticClass: "control" },
      _vm._l(_vm.dataInput, function(val, index) {
        return _c("div", { staticClass: "field has-addons" }, [
          _c("div", { staticClass: "control is-expanded" }, [
            _c("input", {
              directives: [
                {
                  name: "model",
                  rawName: "v-model",
                  value: val.value,
                  expression: "val.value"
                }
              ],
              staticClass: "input is-fullwidth",
              attrs: {
                type: "text",
                name: _vm.inputName + "[]",
                placeholder: "..."
              },
              domProps: { value: val.value },
              on: {
                input: function($event) {
                  if ($event.target.composing) {
                    return
                  }
                  _vm.$set(val, "value", $event.target.value)
                }
              }
            })
          ]),
          _vm._v(" "),
          index < Object.keys(_vm.dataInput).length - 1
            ? _c("div", { staticClass: "control" }, [
                _c(
                  "button",
                  {
                    staticClass: "button",
                    attrs: { type: "button" },
                    on: {
                      click: function($event) {
                        _vm.clickRemove(index)
                      }
                    }
                  },
                  [_vm._m(0, true)]
                )
              ])
            : _vm._e(),
          _vm._v(" "),
          index === Object.keys(_vm.dataInput).length - 1
            ? _c("div", { staticClass: "control" }, [
                _c(
                  "button",
                  {
                    staticClass: "button",
                    attrs: { type: "button" },
                    on: { click: _vm.clickPlus }
                  },
                  [_vm._m(1, true)]
                )
              ])
            : _vm._e()
        ])
      })
    )
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("span", { staticClass: "icon" }, [
      _c("i", { staticClass: "fa fa-minus" })
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("span", { staticClass: "icon" }, [
      _c("i", { staticClass: "fa fa-plus" })
    ])
  }
]
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-eca8cf68", module.exports)
  }
}

/***/ })

});