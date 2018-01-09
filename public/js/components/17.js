webpackJsonp([17],{

/***/ 114:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(3)
/* script */
var __vue_script__ = __webpack_require__(207)
/* template */
var __vue_template__ = __webpack_require__(208)
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
Component.options.__file = "resources\\assets\\js\\components\\DeleteLink.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {  return key !== "default" && key.substr(0, 2) !== "__"})) {  console.error("named exports are not supported in *.vue files.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-78eadc7c", Component.options)
  } else {
    hotAPI.reload("data-v-78eadc7c", Component.options)
' + '  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 207:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tiny_cookie__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tiny_cookie___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_tiny_cookie__);
//
//
//
//
//
//



/* harmony default export */ __webpack_exports__["default"] = ({
    name: 'deleteLink',
    props: {
        dataMessage: {
            type: String,
            default: ''
        },
        dataUrl: {
            type: String,
            default: ''
        }
    },
    methods: {
        clickLink: function clickLink() {
            var _this = this;

            window.Message({
                type: 'danger',
                title: 'Confirm delete',
                message: this.dataMessage,
                showConfirm: true,
                onConfirm: function onConfirm() {
                    window.axios.delete(_this.dataUrl).then(function (res) {
                        if (typeof res.data.notification !== 'undefined') Object(__WEBPACK_IMPORTED_MODULE_0_tiny_cookie__["setCookie"])('notification', res.data.notification, JSON.stringify);

                        if (typeof res.data.location !== 'undefined') window.location.href = res.data.location;
                    }).catch(function (error) {
                        if (typeof error.response.data.notification !== 'undefined') window.Notification(error.response.data.notification);
                    });
                }
            });
        }
    }
});

/***/ }),

/***/ 208:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "a",
    {
      staticClass: "tooltip has-text-danger",
      attrs: { href: "", "data-tooltip": "Delete" },
      on: {
        click: function($event) {
          $event.preventDefault()
          _vm.clickLink($event)
        }
      }
    },
    [_c("i", { staticClass: "fa fa-trash" })]
  )
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-78eadc7c", module.exports)
  }
}

/***/ })

});