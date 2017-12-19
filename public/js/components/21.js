webpackJsonp([21],{

/***/ 155:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(27)
/* script */
var __vue_script__ = __webpack_require__(262)
/* template */
var __vue_template__ = __webpack_require__(263)
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
Component.options.__file = "resources\\assets\\js\\components\\Password.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {  return key !== "default" && key.substr(0, 2) !== "__"})) {  console.error("named exports are not supported in *.vue files.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-16751b92", Component.options)
  } else {
    hotAPI.reload("data-v-16751b92", Component.options)
' + '  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 262:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__plugins_gds_gds__ = __webpack_require__(57);
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
  name: 'password',
  props: {
    inputName: String,
    value: {
      type: String,
      default: ''
    },
    dataAuto: {
      type: [Boolean, String],
      default: function _default() {
        return true;
      }
    }
  },
  model: {
    prop: 'value',
    event: 'change'
  },
  computed: {
    getPass: function getPass() {
      if (this.value === '' && this.dataAuto === true) return __WEBPACK_IMPORTED_MODULE_0__plugins_gds_gds__["a" /* default */].randomPassword(16);

      return this.value;
    }
  },
  methods: {
    showPass: function showPass() {
      var el = this.$el.querySelector('.input');
      if (el.getAttribute('type') === 'text') el.setAttribute('type', 'password');else el.setAttribute('type', 'text');
    }
  }
});

/***/ }),

/***/ 263:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "field" }, [
    _c("label", { staticClass: "label" }, [_vm._v("Password")]),
    _vm._v(" "),
    _c("div", { staticClass: "field has-addons" }, [
      _c("div", { staticClass: "control" }, [
        _c("input", {
          staticClass: "input",
          attrs: {
            type: "password",
            title: "Enter password",
            name: _vm.inputName,
            id: _vm.inputName
          },
          domProps: { value: _vm.getPass }
        })
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "control" }, [
        _c(
          "button",
          {
            staticClass: "button",
            attrs: { type: "button" },
            on: {
              click: function($event) {
                if (
                  !("button" in $event) &&
                  _vm._k($event.keyCode, "prvent", undefined, $event.key)
                ) {
                  return null
                }
                _vm.showPass($event)
              }
            }
          },
          [_vm._m(0)]
        )
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
      _c("i", { staticClass: "fa fa-eye" })
    ])
  }
]
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-16751b92", module.exports)
  }
}

/***/ })

});