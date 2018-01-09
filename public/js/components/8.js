webpackJsonp([8],{

/***/ 108:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(177)
}
var normalizeComponent = __webpack_require__(3)
/* script */
var __vue_script__ = __webpack_require__(179)
/* template */
var __vue_template__ = __webpack_require__(180)
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-327860d0"
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
Component.options.__file = "resources\\assets\\js\\components\\modules\\domain\\LangInput.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {  return key !== "default" && key.substr(0, 2) !== "__"})) {  console.error("named exports are not supported in *.vue files.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-327860d0", Component.options)
  } else {
    hotAPI.reload("data-v-327860d0", Component.options)
' + '  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 177:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(178);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(5)("6ea60a2e", content, false);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../../../node_modules/css-loader/index.js!../../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-327860d0\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0&bustCache!./LangInput.vue", function() {
     var newContent = require("!!../../../../../../node_modules/css-loader/index.js!../../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-327860d0\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0&bustCache!./LangInput.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 178:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(4)(undefined);
// imports


// module
exports.push([module.i, "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", ""]);

// exports


/***/ }),

/***/ 179:
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
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
    name: "lang-input",
    props: {
        dataSelect: {
            type: [Array, Object, String],
            required: false
        },
        inputName: {
            type: String,
            default: 'lang'
        }
    },
    data: function data() {
        return {
            langDefault: '',
            langList: [{ code: 'ab', name: 'Abkhazian' }, { code: 'aa', name: 'Afar' }, { code: 'af', name: 'Afrikaans' }, { code: 'ak', name: 'Akan' }, { code: 'sq', name: 'Albanian' }, { code: 'am', name: 'Amharic' }, { code: 'ar', name: 'Arabic' }, { code: 'an', name: 'Aragonese' }, { code: 'hy', name: 'Armenian' }, { code: 'as', name: 'Assamese' }, { code: 'av', name: 'Avaric' }, { code: 'ae', name: 'Avestan' }, { code: 'ay', name: 'Aymara' }, { code: 'az', name: 'Azerbaijani' }, { code: 'bm', name: 'Bambara' }, { code: 'ba', name: 'Bashkir' }, { code: 'eu', name: 'Basque' }, { code: 'be', name: 'Belarusian' }, { code: 'bn', name: 'Bengali' }, { code: 'bh', name: 'Bihari languages' }, { code: 'bi', name: 'Bislama' }, { code: 'bs', name: 'Bosnian' }, { code: 'br', name: 'Breton' }, { code: 'bg', name: 'Bulgarian' }, { code: 'my', name: 'Burmese' }, { code: 'ca', name: 'Catalan, Valencian' }, { code: 'km', name: 'Central Khmer' }, { code: 'ch', name: 'Chamorro' }, { code: 'ce', name: 'Chechen' }, { code: 'ny', name: 'Chichewa, Chewa, Nyanja' }, { code: 'zh', name: 'Chinese' }, { code: 'cu', name: 'Church Slavonic, Old Bulgarian, Old Church Slavonic' }, { code: 'cv', name: 'Chuvash' }, { code: 'kw', name: 'Cornish' }, { code: 'co', name: 'Corsican' }, { code: 'cr', name: 'Cree' }, { code: 'hr', name: 'Croatian' }, { code: 'cs', name: 'Czech' }, { code: 'da', name: 'Danish' }, { code: 'dv', name: 'Divehi, Dhivehi, Maldivian' }, { code: 'nl', name: 'Dutch, Flemish' }, { code: 'dz', name: 'Dzongkha' }, { code: 'en', name: 'English' }, { code: 'eo', name: 'Esperanto' }, { code: 'et', name: 'Estonian' }, { code: 'ee', name: 'Ewe' }, { code: 'fo', name: 'Faroese' }, { code: 'fj', name: 'Fijian' }, { code: 'fi', name: 'Finnish' }, { code: 'fr', name: 'French' }, { code: 'ff', name: 'Fulah' }, { code: 'gd', name: 'Gaelic, Scottish Gaelic' }, { code: 'gl', name: 'Galician' }, { code: 'lg', name: 'Ganda' }, { code: 'ka', name: 'Georgian' }, { code: 'de', name: 'German' }, { code: 'ki', name: 'Gikuyu, Kikuyu' }, { code: 'el', name: 'Greek (Modern)' }, { code: 'kl', name: 'Greenlandic, Kalaallisut' }, { code: 'gn', name: 'Guarani' }, { code: 'gu', name: 'Gujarati' }, { code: 'ht', name: 'Haitian, Haitian Creole' }, { code: 'ha', name: 'Hausa' }, { code: 'he', name: 'Hebrew' }, { code: 'hz', name: 'Herero' }, { code: 'hi', name: 'Hindi' }, { code: 'ho', name: 'Hiri Motu' }, { code: 'hu', name: 'Hungarian' }, { code: 'is', name: 'Icelandic' }, { code: 'io', name: 'Ido' }, { code: 'ig', name: 'Igbo' }, { code: 'id', name: 'Indonesian' }, { code: 'ia', name: 'Interlingua (International Auxiliary Language Association)' }, { code: 'ie', name: 'Interlingue' }, { code: 'iu', name: 'Inuktitut' }, { code: 'ik', name: 'Inupiaq' }, { code: 'ga', name: 'Irish' }, { code: 'it', name: 'Italian' }, { code: 'ja', name: 'Japanese' }, { code: 'jv', name: 'Javanese' }, { code: 'kn', name: 'Kannada' }, { code: 'kr', name: 'Kanuri' }, { code: 'ks', name: 'Kashmiri' }, { code: 'kk', name: 'Kazakh' }, { code: 'rw', name: 'Kinyarwanda' }, { code: 'kv', name: 'Komi' }, { code: 'kg', name: 'Kongo' }, { code: 'ko', name: 'Korean' }, { code: 'kj', name: 'Kwanyama, Kuanyama' }, { code: 'ku', name: 'Kurdish' }, { code: 'ky', name: 'Kyrgyz' }, { code: 'lo', name: 'Lao' }, { code: 'la', name: 'Latin' }, { code: 'lv', name: 'Latvian' }, { code: 'lb', name: 'Letzeburgesch, Luxembourgish' }, { code: 'li', name: 'Limburgish, Limburgan, Limburger' }, { code: 'ln', name: 'Lingala' }, { code: 'lt', name: 'Lithuanian' }, { code: 'lu', name: 'Luba-Katanga' }, { code: 'mk', name: 'Macedonian' }, { code: 'mg', name: 'Malagasy' }, { code: 'ms', name: 'Malay' }, { code: 'ml', name: 'Malayalam' }, { code: 'mt', name: 'Maltese' }, { code: 'gv', name: 'Manx' }, { code: 'mi', name: 'Maori' }, { code: 'mr', name: 'Marathi' }, { code: 'mh', name: 'Marshallese' }, { code: 'ro', name: 'Moldovan, Moldavian, Romanian' }, { code: 'mn', name: 'Mongolian' }, { code: 'na', name: 'Nauru' }, { code: 'nv', name: 'Navajo, Navaho' }, { code: 'nd', name: 'Northern Ndebele' }, { code: 'ng', name: 'Ndonga' }, { code: 'ne', name: 'Nepali' }, { code: 'se', name: 'Northern Sami' }, { code: 'no', name: 'Norwegian' }, { code: 'nb', name: 'Norwegian Bokmål' }, { code: 'nn', name: 'Norwegian Nynorsk' }, { code: 'ii', name: 'Nuosu, Sichuan Yi' }, { code: 'oc', name: 'Occitan (post 1500)' }, { code: 'oj', name: 'Ojibwa' }, { code: 'or', name: 'Oriya' }, { code: 'om', name: 'Oromo' }, { code: 'os', name: 'Ossetian, Ossetic' }, { code: 'pi', name: 'Pali' }, { code: 'pa', name: 'Panjabi, Punjabi' }, { code: 'ps', name: 'Pashto, Pushto' }, { code: 'fa', name: 'Persian' }, { code: 'pl', name: 'Polish' }, { code: 'pt', name: 'Portuguese' }, { code: 'qu', name: 'Quechua' }, { code: 'rm', name: 'Romansh' }, { code: 'rn', name: 'Rundi' }, { code: 'ru', name: 'Russian' }, { code: 'sm', name: 'Samoan' }, { code: 'sg', name: 'Sango' }, { code: 'sa', name: 'Sanskrit' }, { code: 'sc', name: 'Sardinian' }, { code: 'sr', name: 'Serbian' }, { code: 'sn', name: 'Shona' }, { code: 'sd', name: 'Sindhi' }, { code: 'si', name: 'Sinhala, Sinhalese' }, { code: 'sk', name: 'Slovak' }, { code: 'sl', name: 'Slovenian' }, { code: 'so', name: 'Somali' }, { code: 'st', name: 'Sotho, Southern' }, { code: 'nr', name: 'South Ndebele' }, { code: 'es', name: 'Spanish, Castilian' }, { code: 'su', name: 'Sundanese' }, { code: 'sw', name: 'Swahili' }, { code: 'ss', name: 'Swati' }, { code: 'sv', name: 'Swedish' }, { code: 'tl', name: 'Tagalog' }, { code: 'ty', name: 'Tahitian' }, { code: 'tg', name: 'Tajik' }, { code: 'ta', name: 'Tamil' }, { code: 'tt', name: 'Tatar' }, { code: 'te', name: 'Telugu' }, { code: 'th', name: 'Thai' }, { code: 'bo', name: 'Tibetan' }, { code: 'ti', name: 'Tigrinya' }, { code: 'to', name: 'Tonga (Tonga Islands)' }, { code: 'ts', name: 'Tsonga' }, { code: 'tn', name: 'Tswana' }, { code: 'tr', name: 'Turkish' }, { code: 'tk', name: 'Turkmen' }, { code: 'tw', name: 'Twi' }, { code: 'ug', name: 'Uighur, Uyghur' }, { code: 'uk', name: 'Ukrainian' }, { code: 'ur', name: 'Urdu' }, { code: 'uz', name: 'Uzbek' }, { code: 've', name: 'Venda' }, { code: 'vi', name: 'Vietnamese' }, { code: 'vo', name: 'Volap_k' }, { code: 'wa', name: 'Walloon' }, { code: 'cy', name: 'Welsh' }, { code: 'fy', name: 'Western Frisian' }, { code: 'wo', name: 'Wolof' }, { code: 'xh', name: 'Xhosa' }, { code: 'yi', name: 'Yiddish' }, { code: 'yo', name: 'Yoruba' }, { code: 'za', name: 'Zhuang, Chuang' }, { code: 'zu', name: 'Zulu' }],
            langCheck: [],
            langSearch: ''
        };
    },
    mounted: function mounted() {
        if (this.dataSelect) this.langCheck = JSON.parse(this.dataSelect);
    },

    watch: {
        'langCheck': function langCheck(value) {
            if (this.langDefault === '') this.langDefault = value[0];else if (value.indexOf(this.langDefault) === -1) this.langDefault = '';
        }
    },
    computed: {
        getLangList: function getLangList() {
            var _this = this;

            return _.filter(this.langList, function (val) {
                if (_this.langSearch !== '') return val.name.search(new RegExp(_this.langSearch, 'i')) > -1;

                return true;
            });
        },
        getLangCheck: function getLangCheck() {
            var _this2 = this;

            return _.filter(this.langList, function (val) {
                return _this2.langCheck.indexOf(val.code) > -1;
            });
        }
    },
    methods: {
        removeLang: function removeLang(item) {
            this.$delete(this.langCheck, this.langCheck.indexOf(item));
        }
    }
});

/***/ }),

/***/ 180:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("nav", { staticClass: "panel" }, [
    _c("p", { staticClass: "panel-heading" }, [
      _vm._v("\n        Ngôn ngữ áp dụng\n    ")
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
                  value: _vm.langSearch,
                  expression: "langSearch"
                }
              ],
              staticClass: "input is-fullwidth",
              attrs: { type: "text", placeholder: "search" },
              domProps: { value: _vm.langSearch },
              on: {
                input: function($event) {
                  if ($event.target.composing) {
                    return
                  }
                  _vm.langSearch = $event.target.value
                }
              }
            }),
            _vm._v(" "),
            _vm._m(0)
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "control" }, [
            _c("label", { staticClass: "label is-inline-block" }, [
              _vm._v("Mặc định: ")
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "select" }, [
              _c(
                "select",
                {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model",
                      value: _vm.langDefault,
                      expression: "langDefault"
                    }
                  ],
                  attrs: {
                    title: "Chọn ngôn ngữ mặc định",
                    name: _vm.inputName + "[default]"
                  },
                  on: {
                    change: function($event) {
                      var $$selectedVal = Array.prototype.filter
                        .call($event.target.options, function(o) {
                          return o.selected
                        })
                        .map(function(o) {
                          var val = "_value" in o ? o._value : o.value
                          return val
                        })
                      _vm.langDefault = $event.target.multiple
                        ? $$selectedVal
                        : $$selectedVal[0]
                    }
                  }
                },
                _vm._l(_vm.getLangCheck, function(lang) {
                  return _c("option", { domProps: { value: lang.code } }, [
                    _vm._v(_vm._s(lang.name))
                  ])
                })
              )
            ])
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "control is-expanded" }, [
            _c(
              "div",
              { staticClass: "field is-grouped is-grouped-multiline" },
              _vm._l(_vm.langCheck, function(item) {
                return _c("div", { staticClass: "control" }, [
                  _c("input", {
                    attrs: { name: _vm.inputName + "[list][]", type: "hidden" },
                    domProps: { value: item }
                  }),
                  _vm._v(" "),
                  _c("div", { staticClass: "tags has-addons" }, [
                    _c("span", {
                      staticClass: "tag is-info",
                      domProps: { textContent: _vm._s(item) }
                    }),
                    _vm._v(" "),
                    _c("a", {
                      staticClass: "tag is-delete",
                      on: {
                        click: function($event) {
                          _vm.removeLang(item)
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
          { staticClass: "columns is-multiline" },
          _vm._l(_vm.getLangList, function(lang, index) {
            return _c("div", { staticClass: "column is-4" }, [
              _c("input", {
                directives: [
                  {
                    name: "model",
                    rawName: "v-model",
                    value: _vm.langCheck,
                    expression: "langCheck"
                  }
                ],
                staticClass: "switch is-rounded is-success",
                attrs: { id: _vm.inputName + "-" + index, type: "checkbox" },
                domProps: {
                  value: lang.code,
                  checked: Array.isArray(_vm.langCheck)
                    ? _vm._i(_vm.langCheck, lang.code) > -1
                    : _vm.langCheck
                },
                on: {
                  change: function($event) {
                    var $$a = _vm.langCheck,
                      $$el = $event.target,
                      $$c = $$el.checked ? true : false
                    if (Array.isArray($$a)) {
                      var $$v = lang.code,
                        $$i = _vm._i($$a, $$v)
                      if ($$el.checked) {
                        $$i < 0 && (_vm.langCheck = $$a.concat([$$v]))
                      } else {
                        $$i > -1 &&
                          (_vm.langCheck = $$a
                            .slice(0, $$i)
                            .concat($$a.slice($$i + 1)))
                      }
                    } else {
                      _vm.langCheck = $$c
                    }
                  }
                }
              }),
              _vm._v(" "),
              _c("label", { attrs: { for: _vm.inputName + "-" + index } }, [
                _vm._v(_vm._s(lang.name))
              ])
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
    require("vue-hot-reload-api")      .rerender("data-v-327860d0", module.exports)
  }
}

/***/ })

});