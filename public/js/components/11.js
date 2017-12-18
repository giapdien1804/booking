webpackJsonp([11],{

/***/ 147:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(197)
}
var normalizeComponent = __webpack_require__(27)
/* script */
var __vue_script__ = __webpack_require__(199)
/* template */
var __vue_template__ = __webpack_require__(200)
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
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
Component.options.__file = "resources\\assets\\js\\components\\modules\\storage-manager\\include\\LazyImg.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {  return key !== "default" && key.substr(0, 2) !== "__"})) {  console.error("named exports are not supported in *.vue files.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-56fd6604", Component.options)
  } else {
    hotAPI.reload("data-v-56fd6604", Component.options)
' + '  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 197:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(198);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(29)("7fec3239", content, false);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../../../../node_modules/css-loader/index.js!../../../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-56fd6604\",\"scoped\":false,\"hasInlineConfig\":true}!../../../../../../../node_modules/sass-loader/lib/loader.js!../../../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0&bustCache!./LazyImg.vue", function() {
     var newContent = require("!!../../../../../../../node_modules/css-loader/index.js!../../../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-56fd6604\",\"scoped\":false,\"hasInlineConfig\":true}!../../../../../../../node_modules/sass-loader/lib/loader.js!../../../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0&bustCache!./LazyImg.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 198:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(28)(undefined);
// imports


// module
exports.push([module.i, "\n@-webkit-keyframes img-lazy-load {\n0% {\n    -webkit-transform: rotate(0);\n    transform: rotate(0);\n}\n100% {\n    -webkit-transform: rotate(360deg);\n    transform: rotate(360deg);\n}\n}\n@keyframes img-lazy-load {\n0% {\n    -webkit-transform: rotate(0);\n    transform: rotate(0);\n}\n100% {\n    -webkit-transform: rotate(360deg);\n    transform: rotate(360deg);\n}\n}\n.img-lazy-loading {\n  width: 200px;\n  height: 200px;\n  margin: auto;\n  -webkit-transform: scale(0.5);\n          transform: scale(0.5);\n  position: absolute;\n  top: calc(50% - 100px);\n  left: calc(50% - 100px);\n}\n.img-lazy-loading .img-lazy-load {\n    position: relative;\n    width: 100%;\n    height: 100%;\n}\n.img-lazy-loading .img-lazy-load div {\n      position: absolute;\n      width: 16px;\n      height: 16px;\n      border-radius: 50%;\n      -webkit-animation: img-lazy-load 1.5s cubic-bezier(0.5, 0, 0.5, 1) infinite;\n      animation: img-lazy-load 1.5s cubic-bezier(0.5, 0, 0.5, 1) infinite;\n}\n.img-lazy-loading .img-lazy-load div:nth-child(0) {\n      background: green;\n      top: 134.613px;\n      left: 147.535px;\n      -webkit-transform-origin: -47.535px -34.613px;\n      transform-origin: -47.535px -34.613px;\n      -webkit-animation-delay: 0s;\n      animation-delay: 0s;\n}\n.img-lazy-loading .img-lazy-load div:nth-child(1) {\n      background: green;\n      top: 147.535px;\n      left: 134.613px;\n      -webkit-transform-origin: -34.613px -47.535px;\n      transform-origin: -34.613px -47.535px;\n      -webkit-animation-delay: -0.062s;\n      animation-delay: -0.062s;\n}\n.img-lazy-loading .img-lazy-load div:nth-child(2) {\n      background: green;\n      top: 156.672px;\n      left: 118.788px;\n      -webkit-transform-origin: -18.788px -56.672px;\n      transform-origin: -18.788px -56.672px;\n      -webkit-animation-delay: -0.125s;\n      animation-delay: -0.125s;\n}\n.img-lazy-loading .img-lazy-load div:nth-child(3) {\n      background: green;\n      top: 161.401px;\n      left: 101.137px;\n      -webkit-transform-origin: -1.137px -61.401px;\n      transform-origin: -1.137px -61.401px;\n      -webkit-animation-delay: -0.187s;\n      animation-delay: -0.187s;\n}\n.img-lazy-loading .img-lazy-load div:nth-child(4) {\n      background: green;\n      top: 161.401px;\n      left: 82.863px;\n      -webkit-transform-origin: 17.137px -61.401px;\n      transform-origin: 17.137px -61.401px;\n      -webkit-animation-delay: -0.25s;\n      animation-delay: -0.25s;\n}\n.img-lazy-loading .img-lazy-load div:nth-child(5) {\n      background: green;\n      top: 156.672px;\n      left: 65.212px;\n      -webkit-transform-origin: 34.788px -56.672px;\n      transform-origin: 34.788px -56.672px;\n      -webkit-animation-delay: -0.312s;\n      animation-delay: -0.312s;\n}\n.img-lazy-loading .img-lazy-load div:nth-child(6) {\n      background: green;\n      top: 147.535px;\n      left: 49.387px;\n      -webkit-transform-origin: 50.613px -47.535px;\n      transform-origin: 50.613px -47.535px;\n      -webkit-animation-delay: -0.375s;\n      animation-delay: -0.375s;\n}\n.img-lazy-loading .img-lazy-load div:nth-child(7) {\n      background: green;\n      top: 134.613px;\n      left: 36.465px;\n      -webkit-transform-origin: 63.535px -34.613px;\n      transform-origin: 63.535px -34.613px;\n      -webkit-animation-delay: -0.437s;\n      animation-delay: -0.437s;\n}\n", ""]);

// exports


/***/ }),

/***/ 199:
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

/* harmony default export */ __webpack_exports__["default"] = ({
    name: 'lazyImg',
    props: {
        imageSource: {
            type: String,
            required: true
        },
        imageWidth: 0,
        imageHeight: 0,
        imageLink: '',
        imageAlt: '',
        imageRatio: {
            type: Array,
            default: function _default() {
                return [16, 9];
            }
        },
        imageClass: {
            type: String,
            default: ''
        },
        imageErrorCallback: {
            type: Function,
            default: function _default() {}
        },
        imageSuccessCallback: {
            type: Function,
            default: function _default() {}
        }
    },
    data: function data() {
        return {
            imageState: 'loading',
            asyncImage: new Image()
        };
    },

    computed: {
        getWidth: function getWidth() {
            return this.imageWidth > 0 ? this.imageWidth : false;
        },
        getHeight: function getHeight() {
            return this.imageHeight > 0 ? this.imageHeight : false;
        },
        getImageClass: function getImageClass() {
            return 'image is-' + this.imageRatio[0] + 'by' + this.imageRatio[1] + ' ' + this.imageClass;
        },
        computedUrl: function computedUrl() {
            if (this.imageState === 'img-loading' || this.imageState === 'img-error') {
                this.asyncImage.width = this.imageRatio[0];
                this.asyncImage.height = this.imageRatio[1];
            }
            if (this.imageState === 'img-loaded') {
                return this.asyncImage.src;
            }

            if (this.imageState === 'img-error') {
                return '/storage/no-image.gif';
            }

            return '';
        }
    },
    methods: {
        fetchImage: function fetchImage(url) {
            this.asyncImage.onload = this.imageOnLoad;
            this.asyncImage.onerror = this.imageOnError;
            this.imageState = 'img-loading';
            this.asyncImage.src = this.imageSource;
        },
        imageOnLoad: function imageOnLoad() {
            this.imageState = 'img-loaded';
            this.imageSuccessCallback();
        },
        imageOnError: function imageOnError(isError) {
            this.imageState = 'img-error';
            this.imageErrorCallback();
        }
    },
    mounted: function mounted() {
        var _this = this;

        this.$nextTick(function () {
            _this.fetchImage();
        });
    }
});

/***/ }),

/***/ 200:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "figure",
    { class: _vm.getImageClass },
    [
      _vm.imageState === "img-loading"
        ? _c("div", { staticClass: "img-lazy-loading " }, [_vm._m(0)])
        : _vm._e(),
      _vm._v(" "),
      _c("a", { attrs: { href: _vm.imageLink } }, [
        _c("img", {
          class: _vm.imageState,
          attrs: {
            width: _vm.getWidth,
            height: _vm.getHeight,
            "data-state": _vm.imageState,
            src: _vm.computedUrl,
            alt: _vm.imageAlt
          }
        })
      ]),
      _vm._v(" "),
      _vm._t("default")
    ],
    2
  )
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "img-lazy-load" }, [
      _c("div"),
      _vm._v(" "),
      _c("div"),
      _vm._v(" "),
      _c("div"),
      _vm._v(" "),
      _c("div"),
      _vm._v(" "),
      _c("div"),
      _vm._v(" "),
      _c("div"),
      _vm._v(" "),
      _c("div"),
      _vm._v(" "),
      _c("div")
    ])
  }
]
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-56fd6604", module.exports)
  }
}

/***/ })

});