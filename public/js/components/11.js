webpackJsonp([11],{

/***/ 107:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(3)
/* script */
var __vue_script__ = __webpack_require__(175)
/* template */
var __vue_template__ = __webpack_require__(176)
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
Component.options.__file = "resources\\assets\\js\\components\\modules\\domain\\DomainDropdown.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {  return key !== "default" && key.substr(0, 2) !== "__"})) {  console.error("named exports are not supported in *.vue files.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-4d11ecd1", Component.options)
  } else {
    hotAPI.reload("data-v-4d11ecd1", Component.options)
' + '  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 175:
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



/* harmony default export */ __webpack_exports__["default"] = ({
    name: 'domainDropdown',
    props: {
        dataName: {
            type: String,
            default: 'domain_uuid'
        },
        dataSelected: {
            type: String,
            required: false
        },
        gotoUrl: {
            type: String,
            default: ''
        }
    },
    mounted: function mounted() {
        this.getDomainList(null, null);

        if (this.dataSelected) {
            var data = JSON.parse(this.dataSelected);
            this.itemData.push(data);
            this.itemSelected = data;
        }
    },

    watch: {
        searchValue: _.debounce(function (val) {
            this.getDomainList(val, null);
        }, 500)
    },
    data: function data() {
        return {
            isActive: false,
            itemData: [],
            ps: null,
            searchValue: '',
            itemSelected: {
                uuid: '',
                name: ''
            }
        };
    },
    methods: {
        getDomainList: function getDomainList(name, page) {
            var _this = this;

            window.axios.get('/domain/list', { params: { name: name, page: page } }).then(function (res) {
                _this.itemData = res.data.data;
                if (_this.isActive) _this.$nextTick(function () {
                    _this.ps.update();
                });
            });
        },
        toggleDropdown: function toggleDropdown() {
            this.isActive = !this.isActive;
            if (this.isActive) {
                var el = this.$el.querySelector('.dropdown-content-main');
                el.scrollTop = 0;
                this.ps = new __WEBPACK_IMPORTED_MODULE_0_perfect_scrollbar__["a" /* default */](el, {
                    minScrollbarLength: 50
                });
            } else this.ps.destroy();
        },
        selectItem: function selectItem(value) {
            if (this.gotoUrl !== '') {
                var url = this.gotoUrl.replace('{id}', value.uuid);
                window.location.replace(url);
            } else {
                this.itemSelected = value;
                this.isActive = false;
            }
        },
        outClickDropdown: function outClickDropdown() {
            if (this.isActive) this.isActive = false;
        }
    }
});

/***/ }),

/***/ 176:
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
      _c("input", {
        directives: [
          {
            name: "model",
            rawName: "v-model",
            value: _vm.itemSelected.uuid,
            expression: "itemSelected.uuid"
          }
        ],
        attrs: { type: "hidden", name: _vm.dataName },
        domProps: { value: _vm.itemSelected.uuid },
        on: {
          input: function($event) {
            if ($event.target.composing) {
              return
            }
            _vm.$set(_vm.itemSelected, "uuid", $event.target.value)
          }
        }
      }),
      _vm._v(" "),
      _c("div", { staticClass: "dropdown-trigger" }, [
        _c(
          "button",
          {
            staticClass: "button is-info border-radius-0",
            attrs: {
              type: "button",
              "aria-haspopup": "true",
              "aria-controls": "dropdown-menu"
            },
            on: { click: _vm.toggleDropdown }
          },
          [
            _vm.itemSelected.uuid !== ""
              ? _c("span", [
                  _vm._v(
                    "\n                " +
                      _vm._s(_vm.itemSelected.name) +
                      "\n            "
                  )
                ])
              : _c("span", [_vm._v("Select domain")]),
            _vm._v(" "),
            _vm._m(0)
          ]
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
                staticClass: "input is-small",
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
              _vm._l(_vm.itemData, function(item) {
                return _c(
                  "a",
                  {
                    class: {
                      "dropdown-item": true,
                      "is-active": _vm.itemSelected.uuid === item.uuid
                    },
                    on: {
                      click: function($event) {
                        $event.preventDefault()
                        _vm.selectItem(item)
                      }
                    }
                  },
                  [
                    _vm._v(
                      "\n                    " +
                        _vm._s(item.name) +
                        "\n                "
                    )
                  ]
                )
              })
            )
          ])
        ]
      )
    ]
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
    require("vue-hot-reload-api")      .rerender("data-v-4d11ecd1", module.exports)
  }
}

/***/ })

});