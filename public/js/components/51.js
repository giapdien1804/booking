webpackJsonp([51],{

/***/ 137:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(18)
/* script */
var __vue_script__ = __webpack_require__(251)
/* template */
var __vue_template__ = __webpack_require__(252)
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
Component.options.__file = "resources\\assets\\js\\components\\ImageSizeInput.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {  return key !== "default" && key.substr(0, 2) !== "__"})) {  console.error("named exports are not supported in *.vue files.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-aa6d2d36", Component.options)
  } else {
    hotAPI.reload("data-v-aa6d2d36", Component.options)
' + '  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 251:
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

/* harmony default export */ __webpack_exports__["default"] = ({
    name: 'imageSizeInput',
    props: {
        inputName: String,
        dataSize: {
            type: [Array, Object, String],
            default: ''
        }
    },
    data: function data() {
        return {
            itemData: []
        };
    },
    mounted: function mounted() {
        var tmp = [{
            width: 180,
            height: 150
        }];
        if (_.isObject(this.dataSize) || _.isArray(this.dataSize)) tmp = this.dataSize;else if (this.dataSize.length > 0) tmp = JSON.parse(this.dataSize);

        this.itemData = tmp;
    },

    methods: {
        clickPlus: function clickPlus() {
            var tmp = _.last(this.itemData);
            this.itemData.push({ width: Math.round(tmp.width * 1.777), height: Math.round(tmp.height * 1.777) });
        },
        clickMinus: function clickMinus(index) {
            if (this.itemData.length > 1) this.itemData.splice(index, 1);
        }
    }
});

/***/ }),

/***/ 252:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "field" }, [
    _c("label", { staticClass: "label" }, [
      _vm._v("Image size\n        "),
      _c(
        "button",
        {
          staticClass: "button is-info is-small",
          attrs: { type: "button" },
          on: { click: _vm.clickPlus }
        },
        [_vm._m(0, false, false)]
      )
    ]),
    _vm._v(" "),
    _c(
      "div",
      { staticClass: "columns is-multiline" },
      _vm._l(_vm.itemData, function(item, index) {
        return _c(
          "div",
          { staticClass: "column is-3-desktop is-4-tablet is-2-mobile" },
          [
            _c("div", { staticClass: "field has-addons" }, [
              _c("p", { staticClass: "control" }, [
                _c("input", {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model",
                      value: item.width,
                      expression: "item.width"
                    }
                  ],
                  staticClass: "input",
                  attrs: {
                    type: "text",
                    placeholder: "width",
                    name: _vm.inputName + "[" + index + "][width]"
                  },
                  domProps: { value: item.width },
                  on: {
                    input: function($event) {
                      if ($event.target.composing) {
                        return
                      }
                      _vm.$set(item, "width", $event.target.value)
                    }
                  }
                })
              ]),
              _vm._v(" "),
              _vm._m(1, true, false),
              _vm._v(" "),
              _c("p", { staticClass: "control" }, [
                _c("input", {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model",
                      value: item.height,
                      expression: "item.height"
                    }
                  ],
                  staticClass: "input",
                  attrs: {
                    type: "text",
                    placeholder: "height",
                    name: _vm.inputName + "[" + index + "][height]"
                  },
                  domProps: { value: item.height },
                  on: {
                    input: function($event) {
                      if ($event.target.composing) {
                        return
                      }
                      _vm.$set(item, "height", $event.target.value)
                    }
                  }
                })
              ]),
              _vm._v(" "),
              index > 0
                ? _c("p", { staticClass: "control" }, [
                    _c(
                      "button",
                      {
                        staticClass: "button is-primary",
                        attrs: { type: "button" },
                        on: {
                          click: function($event) {
                            _vm.clickMinus(index)
                          }
                        }
                      },
                      [_vm._m(2, true, false)]
                    )
                  ])
                : _vm._e()
            ])
          ]
        )
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
      _c("i", { staticClass: "fa fa-plus" })
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("p", { staticClass: "control" }, [
      _c("span", { staticClass: "button is-static" }, [_vm._v("x")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("span", { staticClass: "icon" }, [
      _c("i", { staticClass: "fa fa-minus" })
    ])
  }
]
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-aa6d2d36", module.exports)
  }
}

/***/ })

});