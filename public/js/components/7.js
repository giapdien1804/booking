webpackJsonp([7],{

/***/ 110:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(186)
}
var normalizeComponent = __webpack_require__(3)
/* script */
var __vue_script__ = __webpack_require__(188)
/* template */
var __vue_template__ = __webpack_require__(189)
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-3dc0bb5a"
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
Component.options.__file = "resources\\assets\\js\\components\\modules\\user\\UserInput.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {  return key !== "default" && key.substr(0, 2) !== "__"})) {  console.error("named exports are not supported in *.vue files.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-3dc0bb5a", Component.options)
  } else {
    hotAPI.reload("data-v-3dc0bb5a", Component.options)
' + '  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 186:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(187);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(5)("078dd2fc", content, false);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../../../node_modules/css-loader/index.js!../../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-3dc0bb5a\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0&bustCache!./UserInput.vue", function() {
     var newContent = require("!!../../../../../../node_modules/css-loader/index.js!../../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-3dc0bb5a\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0&bustCache!./UserInput.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 187:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(4)(undefined);
// imports


// module
exports.push([module.i, "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", ""]);

// exports


/***/ }),

/***/ 188:
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
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
    name: "user-input",
    props: {
        dataSelect: {
            type: [Array, Object, String],
            required: false
        },
        inputName: {
            type: String,
            default: 'user_uuid'
        }
    },
    data: function data() {
        return {
            userList: [],
            userSearch: '',
            userCheck: []
        };
    },
    watch: {
        'userSearch': _.debounce(function (val) {
            this.getList(val);
        }, 500)
    },
    mounted: function mounted() {
        if (this.dataSelect) this.userCheck = JSON.parse(this.dataSelect);

        this.getList();
    },

    computed: {
        getUserCheck: function getUserCheck() {
            var _this = this;

            return _.filter(this.userList, function (item) {
                return _this.userCheck.indexOf(item.uuid) > -1;
            });
        }
    },
    methods: {
        getList: function getList() {
            var _this2 = this;

            var s = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';

            window.axios.get('/user', { params: { access_domain: true, s: s } }).then(function (res) {
                _this2.userList = res.data;
            });
        },
        removeUser: function removeUser(uuid) {
            this.$delete(this.userCheck, this.userCheck.indexOf(uuid));
        }
    }
});

/***/ }),

/***/ 189:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("nav", { staticClass: "panel" }, [
    _c("p", { staticClass: "panel-heading" }, [
      _vm._v(
        "\n        Những người dùng sau được phép cập nhật nội dung cho domain này\n    "
      )
    ]),
    _vm._v(" "),
    _c("div", { staticClass: "panel-block" }, [
      _c(
        "div",
        { staticClass: "field is-grouped", staticStyle: { width: "100%" } },
        [
          _c("div", { staticClass: "control has-icons-left" }, [
            _c("input", {
              directives: [
                {
                  name: "model",
                  rawName: "v-model",
                  value: _vm.userSearch,
                  expression: "userSearch"
                }
              ],
              staticClass: "input is-fullwidth",
              attrs: { type: "text", placeholder: "search" },
              domProps: { value: _vm.userSearch },
              on: {
                input: function($event) {
                  if ($event.target.composing) {
                    return
                  }
                  _vm.userSearch = $event.target.value
                }
              }
            }),
            _vm._v(" "),
            _vm._m(0)
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "control is-expanded" }, [
            _c(
              "div",
              { staticClass: "field is-grouped is-grouped-multiline" },
              _vm._l(_vm.getUserCheck, function(item) {
                return _c("div", { staticClass: "control" }, [
                  _c("input", {
                    attrs: { name: _vm.inputName + "[]", type: "hidden" },
                    domProps: { value: item.uuid }
                  }),
                  _vm._v(" "),
                  _c("div", { staticClass: "tags has-addons" }, [
                    _c("span", {
                      staticClass: "tag is-info",
                      domProps: { textContent: _vm._s(item.email) }
                    }),
                    _vm._v(" "),
                    _c("a", {
                      staticClass: "tag is-delete",
                      on: {
                        click: function($event) {
                          _vm.removeUser(item.uuid)
                        }
                      }
                    })
                  ])
                ])
              })
            )
          ])
        ]
      )
    ]),
    _vm._v(" "),
    _c(
      "div",
      {
        staticClass: "panel-block",
        staticStyle: { "max-height": "300px", "overflow-y": "scroll" }
      },
      [
        _c(
          "div",
          {
            staticClass: "columns is-multiline",
            staticStyle: { width: "100%" }
          },
          _vm._l(_vm.userList, function(user, index) {
            return _c("div", { staticClass: "column is-4" }, [
              _c(
                "span",
                {
                  staticClass: "tooltip is-tooltip-right",
                  attrs: { "data-tooltip": user.name }
                },
                [
                  _c("input", {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.userCheck,
                        expression: "userCheck"
                      }
                    ],
                    staticClass: "switch is-rounded is-success",
                    attrs: {
                      id: _vm.inputName + "-" + index,
                      type: "checkbox"
                    },
                    domProps: {
                      value: user.uuid,
                      checked: Array.isArray(_vm.userCheck)
                        ? _vm._i(_vm.userCheck, user.uuid) > -1
                        : _vm.userCheck
                    },
                    on: {
                      change: function($event) {
                        var $$a = _vm.userCheck,
                          $$el = $event.target,
                          $$c = $$el.checked ? true : false
                        if (Array.isArray($$a)) {
                          var $$v = user.uuid,
                            $$i = _vm._i($$a, $$v)
                          if ($$el.checked) {
                            $$i < 0 && (_vm.userCheck = $$a.concat([$$v]))
                          } else {
                            $$i > -1 &&
                              (_vm.userCheck = $$a
                                .slice(0, $$i)
                                .concat($$a.slice($$i + 1)))
                          }
                        } else {
                          _vm.userCheck = $$c
                        }
                      }
                    }
                  }),
                  _vm._v(" "),
                  _c("label", { attrs: { for: _vm.inputName + "-" + index } }, [
                    _vm._v(_vm._s(user.email))
                  ])
                ]
              )
            ])
          })
        )
      ]
    )
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("span", { staticClass: "icon is-left" }, [
      _c("i", { staticClass: "fa fa-search" })
    ])
  }
]
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-3dc0bb5a", module.exports)
  }
}

/***/ })

});