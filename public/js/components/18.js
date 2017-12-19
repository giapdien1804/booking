webpackJsonp([18],{

/***/ 162:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(27)
/* script */
var __vue_script__ = __webpack_require__(295)
/* template */
var __vue_template__ = __webpack_require__(296)
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
Component.options.__file = "resources\\assets\\js\\components\\modules\\storage-manager\\include\\Item.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {  return key !== "default" && key.substr(0, 2) !== "__"})) {  console.error("named exports are not supported in *.vue files.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-d3286558", Component.options)
  } else {
    hotAPI.reload("data-v-d3286558", Component.options)
' + '  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 295:
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

/* harmony default export */ __webpack_exports__["default"] = ({
    name: 'fmgSidebarItem',
    props: {
        itemName: {
            type: Object,
            require: false,
            default: function _default() {
                return {
                    name: 'Home',
                    path: ''
                };
            }
        }
    },
    data: function data() {
        return {
            open: false,
            isLoading: false
        };
    },
    mounted: function mounted() {
        var _this = this;

        //load data
        if (this.itemName.path === '') {
            this.isLoading = true;
            axios.post('/storage/fmg/directories').then(function (res) {
                _this.isLoading = false;
                _this.$set(_this.itemName, res.data.root);
                _this.$set(_this.itemName, 'sub', res.data.sub);
            }).catch(function (err) {
                _this.isLoading = false;
                window.Message({
                    title: 'Error',
                    type: 'warning',
                    message: err.response.data.message
                });
            });
        }
    },

    computed: {
        isFolder: function isFolder() {
            return this.itemName.sub && this.itemName.sub.length;
        },
        isToggle: function isToggle() {
            return this.open || this.itemName.path === '';
        }
    },
    methods: {
        setCurrentPath: function setCurrentPath(path) {
            this.$emit('setCurrentPath', path);
        },

        toggle: function toggle(path) {
            var _this2 = this;

            this.open = !this.open;
            if (this.open) this.$emit('setCurrentPath', path);
            if (this.open && path !== '') {
                this.isLoading = true;
                //load data
                axios.post('/storage/fmg/directories', { parent: path }).then(function (res) {
                    _this2.isLoading = false;
                    _this2.$set(_this2.itemName, 'sub', res.data);
                }).catch(function (err) {
                    _this2.isLoading = false;
                    window.Message({
                        title: 'Error',
                        type: 'warning',
                        message: err.response.data.message
                    });
                });
            }
        }
    }
});

/***/ }),

/***/ 296:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("li", [
    _c(
      "a",
      {
        on: {
          click: function($event) {
            _vm.toggle(_vm.itemName.path)
          }
        }
      },
      [
        _c("span", { staticClass: "tree-line" }),
        _c("span", { staticClass: "icon is-small" }, [
          _c("i", {
            class: {
              "fa fa-folder": !_vm.isToggle,
              "fa fa-folder-open": _vm.isToggle,
              "fa fa-spinner fa-pulse fa-fw": _vm.isLoading
            }
          })
        ]),
        _vm._v("\n        " + _vm._s(_vm.itemName.name) + "\n    ")
      ]
    ),
    _vm._v(" "),
    _vm.isFolder
      ? _c(
          "ul",
          {
            directives: [
              {
                name: "show",
                rawName: "v-show",
                value: _vm.isToggle,
                expression: "isToggle"
              }
            ]
          },
          _vm._l(_vm.itemName.sub, function(item, index) {
            return _c("fmg-sidebar-item", {
              key: index,
              attrs: { itemName: item },
              on: { setCurrentPath: _vm.setCurrentPath }
            })
          })
        )
      : _vm._e()
  ])
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-d3286558", module.exports)
  }
}

/***/ })

});