webpackJsonp([12],{

/***/ 119:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(3)
/* script */
var __vue_script__ = __webpack_require__(217)
/* template */
var __vue_template__ = __webpack_require__(218)
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
Component.options.__file = "resources\\assets\\js\\components\\VueSelect.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {  return key !== "default" && key.substr(0, 2) !== "__"})) {  console.error("named exports are not supported in *.vue files.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-2d5bf08a", Component.options)
  } else {
    hotAPI.reload("data-v-2d5bf08a", Component.options)
' + '  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 217:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_perfect_scrollbar__ = __webpack_require__(21);
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
    name: 'vueSelect',
    props: {
        isMulti: {
            type: [Boolean, String],
            default: false
        },
        buttonClass: {
            type: String,
            default: ''
        },
        dataUrl: {
            type: String,
            require: true
        },
        dataName: {
            type: String,
            default: 'select_name'
        },
        dataSelected: {
            type: String,
            default: ''
        },
        onSelectGoUrl: {
            type: String,
            default: ''
        },
        onSelect: {
            type: Function,
            default: function _default() {}
        }
    },
    mounted: function mounted() {
        this.getDataList(null, null);

        if (this.dataSelected !== '') {
            var data = JSON.parse(this.dataSelected);
            this.itemData.push(data);
            this.itemSelected = data;
        }
    },

    watch: {
        searchValue: _.debounce(function (val) {
            this.getDataList(val, null);
        }, 500)
    },
    data: function data() {
        return {
            isActive: false,
            itemData: [],
            ps: null,
            searchValue: '',
            itemSelected: []
        };
    },
    methods: {
        getDataList: function getDataList(name, page) {
            var _this = this;

            window.axios.get(this.dataUrl, { params: { name: name, page: page } }).then(function (res) {
                _this.itemData = res.data;
                if (_this.isActive) _this.$nextTick(function () {
                    _this.ps.update();
                });
            });
        },
        toggleDropdown: function toggleDropdown() {
            var _this2 = this;

            this.isActive = !this.isActive;
            if (this.isActive) {
                this.$nextTick(function () {
                    var el = _this2.$el.querySelector('.dropdown-content-main');
                    _this2.ps = new __WEBPACK_IMPORTED_MODULE_0_perfect_scrollbar__["a" /* default */](el, {
                        minScrollbarLength: 50
                    });

                    _this2.$el.querySelector('.input-dropdown-search').focus();
                });
            } else this.ps.destroy();
        },
        selectItem: function selectItem(value, name) {
            if (this.onSelectGoUrl !== '') {
                var url = this.onSelectGoUrl.replace('{id}', value);
                url = this.onSelectGoUrl.replace('{uuid}', value);
                window.location.replace(url);
            } else {
                this.itemSelected[value] = name;
                this.isActive = false;

                this.onSelect(this.itemSelected);
            }
        },
        outClickDropdown: function outClickDropdown() {
            if (this.isActive) this.isActive = false;
        }
    }
});

/***/ }),

/***/ 218:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    {
      directives: [
        {
          name: "click-outside",
          rawName: "v-click-outside",
          value: _vm.outClickDropdown,
          expression: "outClickDropdown"
        }
      ],
      class: { dropdown: true, "is-active": _vm.isActive }
    },
    [
      _vm.isMulti
        ? _vm._l(_vm.itemSelected, function(itemName, itemVal) {
            return _c("input", {
              attrs: { type: "hidden", name: _vm.dataName + "[]" },
              domProps: { value: itemVal }
            })
          })
        : [
            _c("input", {
              directives: [
                {
                  name: "model",
                  rawName: "v-model",
                  value: Object.keys(_vm.itemSelected)[0],
                  expression: "Object.keys(itemSelected)[0]"
                }
              ],
              attrs: { type: "hidden", name: _vm.dataName },
              domProps: { value: Object.keys(_vm.itemSelected)[0] },
              on: {
                input: function($event) {
                  if ($event.target.composing) {
                    return
                  }
                  _vm.$set(
                    Object.keys(_vm.itemSelected),
                    0,
                    $event.target.value
                  )
                }
              }
            })
          ],
      _vm._v(" "),
      _c("div", { staticClass: "dropdown-trigger" }, [
        _c(
          "button",
          {
            class: "button is-light " + _vm.buttonClass,
            attrs: {
              type: "button",
              "aria-haspopup": "true",
              "aria-controls": "dropdown-menu"
            },
            on: { click: _vm.toggleDropdown }
          },
          [
            Object.keys(_vm.itemSelected).length > 0
              ? [
                  _vm.isMulti
                    ? [
                        _c(
                          "div",
                          { staticClass: "tags" },
                          _vm._l(_vm.itemSelected, function(name, val) {
                            return _c("span", {
                              staticClass: "tag",
                              domProps: { textContent: _vm._s(name) }
                            })
                          })
                        )
                      ]
                    : _c("span", {
                        domProps: {
                          textContent: _vm._s(
                            _vm.itemSelected[Object.keys(_vm.itemSelected)[0]]
                          )
                        }
                      })
                ]
              : _c("span", [_vm._v("Select...")]),
            _vm._v(" "),
            _vm._m(0)
          ],
          2
        )
      ]),
      _vm._v(" "),
      _c(
        "div",
        {
          staticClass: "dropdown-menu select-icon",
          attrs: { id: "dropdown-menu", role: "menu" }
        },
        [
          _c("div", { staticClass: "dropdown-content" }, [
            _c("div", { staticClass: "dropdown-item" }, [
              _c("input", {
                directives: [
                  {
                    name: "model",
                    rawName: "v-model",
                    value: _vm.searchValue,
                    expression: "searchValue"
                  }
                ],
                staticClass: "input is-small input-dropdown-search",
                attrs: { type: "text", placeholder: "Search..." },
                domProps: { value: _vm.searchValue },
                on: {
                  input: function($event) {
                    if ($event.target.composing) {
                      return
                    }
                    _vm.searchValue = $event.target.value
                  }
                }
              })
            ]),
            _vm._v(" "),
            _c("hr", { staticClass: "dropdown-divider" }),
            _vm._v(" "),
            _c(
              "div",
              {
                staticClass: "dropdown-content-main",
                staticStyle: { "max-height": "300px", position: "relative" }
              },
              _vm._l(_vm.itemData, function(itemName, itemVal) {
                return _c(
                  "a",
                  {
                    class: {
                      "dropdown-item": true,
                      "is-active": Object.keys(_vm.itemSelected)[0] === itemVal
                    },
                    on: {
                      click: function($event) {
                        $event.preventDefault()
                        _vm.selectItem(itemVal, itemName)
                      }
                    }
                  },
                  [
                    _vm._v(
                      "\n                    " +
                        _vm._s(itemName) +
                        "\n                "
                    )
                  ]
                )
              })
            )
          ])
        ]
      )
    ],
    2
  )
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("span", { staticClass: "icon is-small" }, [
      _c("i", {
        staticClass: "fa fa-angle-down",
        attrs: { "aria-hidden": "true" }
      })
    ])
  }
]
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-2d5bf08a", module.exports)
  }
}

/***/ })

});