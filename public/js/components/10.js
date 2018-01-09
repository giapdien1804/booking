webpackJsonp([10],{

/***/ 118:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(3)
/* script */
var __vue_script__ = __webpack_require__(215)
/* template */
var __vue_template__ = __webpack_require__(216)
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
Component.options.__file = "resources\\assets\\js\\components\\system\\LogViewer.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {  return key !== "default" && key.substr(0, 2) !== "__"})) {  console.error("named exports are not supported in *.vue files.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-79ce6080", Component.options)
  } else {
    hotAPI.reload("data-v-79ce6080", Component.options)
' + '  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 215:
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
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
    data: function data() {
        return {
            isShow: false,
            logData: []
        };
    },
    mounted: function mounted() {
        var _this = this;

        var currentUrl = new URL(window.location.href);
        axios.get('/system/logs', { params: { view: true, l: currentUrl.searchParams.get('l') } }).then(function (res) {
            _this.logData = res.data;
        });
    },

    methods: {
        viewStack: function viewStack(index) {
            this.$el.querySelector('.log-stack-' + index).classList.toggle('is-hidden');
        }
    }
});

/***/ }),

/***/ 216:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "table",
    { staticClass: "table is-narrow is-striped is-fullwidth" },
    [
      _vm._m(0),
      _vm._v(" "),
      _c(
        "tbody",
        [
          Object.keys(_vm.logData).length > 0
            ? _vm._l(_vm.logData, function(log, index) {
                return _c("tr", [
                  _c("td", { class: "has-text-" + log.level_class }, [
                    _c("span", { staticClass: "icon" }, [
                      _c("i", { class: "fa fa-" + log.level_img })
                    ]),
                    _vm._v(
                      "\n                 " +
                        _vm._s(log.level) +
                        "\n            "
                    )
                  ]),
                  _vm._v(" "),
                  _c("td", { staticClass: "text" }, [
                    _vm._v(_vm._s(log.context))
                  ]),
                  _vm._v(" "),
                  _c("td", { staticClass: "date" }, [_vm._v(_vm._s(log.date))]),
                  _vm._v(" "),
                  _c("td", { staticClass: "text" }, [
                    _c(
                      "a",
                      {
                        staticClass: "is-pulled-right",
                        on: {
                          click: function($event) {
                            _vm.viewStack(index)
                          }
                        }
                      },
                      [_vm._m(1, true)]
                    ),
                    _vm._v(
                      "\n                " +
                        _vm._s(log.text) +
                        "\n                "
                    ),
                    _c("br"),
                    _vm._v(_vm._s(log.file) + "\n                "),
                    _c("div", {
                      class: "log-stack-" + index + " is-hidden",
                      domProps: { innerHTML: _vm._s(log.stack) }
                    })
                  ])
                ])
              })
            : _vm._e()
        ],
        2
      )
    ]
  )
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("thead", [
      _c("tr", [
        _c("th", [_vm._v("Level")]),
        _vm._v(" "),
        _c("th", [_vm._v("Context")]),
        _vm._v(" "),
        _c("th", [_vm._v("Date")]),
        _vm._v(" "),
        _c("th", [_vm._v("Content")])
      ])
    ])
  },
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
    require("vue-hot-reload-api")      .rerender("data-v-79ce6080", module.exports)
  }
}

/***/ })

});