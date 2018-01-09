webpackJsonp([3],{

/***/ 104:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(137)
}
var normalizeComponent = __webpack_require__(3)
/* script */
var __vue_script__ = __webpack_require__(140)
/* template */
var __vue_template__ = __webpack_require__(141)
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
Component.options.__file = "resources\\assets\\js\\plugins\\date-time\\TimePicker.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {  return key !== "default" && key.substr(0, 2) !== "__"})) {  console.error("named exports are not supported in *.vue files.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-23b35134", Component.options)
  } else {
    hotAPI.reload("data-v-23b35134", Component.options)
' + '  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 137:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(138);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(5)("1f10a87a", content, false);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../../node_modules/css-loader/index.js!../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-23b35134\",\"scoped\":false,\"hasInlineConfig\":true}!../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0&bustCache!./TimePicker.vue", function() {
     var newContent = require("!!../../../../../node_modules/css-loader/index.js!../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-23b35134\",\"scoped\":false,\"hasInlineConfig\":true}!../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0&bustCache!./TimePicker.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 138:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(4)(undefined);
// imports
exports.i(__webpack_require__(139), "");

// module
exports.push([module.i, "\n", ""]);

// exports


/***/ }),

/***/ 139:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(4)(undefined);
// imports


// module
exports.push([module.i, ".time-picker {\n  display: inline-block;\n  position: relative;\n  font-size: 1em;\n  width: 10em;\n  font-family: sans-serif;\n  vertical-align: middle;\n}\n\n.time-picker * {\n  box-sizing: border-box;\n}\n\n.time-picker input.display-time {\n  border: 1px solid #d2d2d2;\n  width: 10em;\n  height: 2.2em;\n  padding: 0.3em 0.5em;\n  font-size: 1em;\n}\n\n.time-picker .clear-btn {\n  position: absolute;\n  display: flex;\n  flex-flow: column nowrap;\n  justify-content: center;\n  align-items: center;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  margin-top: -0.15em;\n  z-index: 3;\n  font-size: 1.1em;\n  line-height: 1em;\n  vertical-align: middle;\n  width: 1.3em;\n  color: #d2d2d2;\n  background: rgba(255,255,255,0);\n  text-align: center;\n  font-style: normal;\n\n  -webkit-transition: color .2s;\n  transition: color .2s;\n}\n\n.time-picker .clear-btn:hover {\n  color: #797979;\n  cursor: pointer;\n}\n\n.time-picker .time-picker-overlay {\n  z-index: 2;\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n}\n\n.time-picker .dropdown {\n  position: absolute;\n  z-index: 5;\n  top: calc(2.2em + 2px);\n  left: 0;\n  background: #fff;\n  box-shadow: 0 1px 6px rgba(0,0,0,0.15);\n  width: 10em;\n  height: 10em;\n  font-weight: normal;\n}\n\n.time-picker .dropdown .select-list {\n  width: 10em;\n  height: 10em;\n  overflow: hidden;\n  display: flex;\n  flex-flow: row nowrap;\n  align-items: stretch;\n  justify-content: space-between;\n}\n\n.time-picker .dropdown ul {\n  padding: 0;\n  margin: 0;\n  list-style: none;\n\n  flex: 1;\n  overflow-x: hidden;\n  overflow-y: auto;\n}\n\n.time-picker .dropdown ul.minutes,\n.time-picker .dropdown ul.seconds,\n.time-picker .dropdown ul.apms{\n  border-left: 1px solid #fff;\n}\n\n.time-picker .dropdown ul li {\n  text-align: center;\n  padding: 0.3em 0;\n  color: #161616;\n}\n\n.time-picker .dropdown ul li:not(.hint):hover {\n  background: rgba(0,0,0,.08);\n  color: #161616;\n  cursor: pointer;\n}\n\n.time-picker .dropdown ul li.active,\n.time-picker .dropdown ul li.active:hover {\n  background: #41B883;\n  color: #fff;\n}\n\n.time-picker .dropdown .hint {\n  color: #a5a5a5;\n  cursor: default;\n  font-size: 0.8em;\n}\n", ""]);

// exports


/***/ }),

/***/ 140:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });

var CONFIG = {
    HOUR_TOKENS: ['HH', 'H', 'hh', 'h', 'kk', 'k'],
    MINUTE_TOKENS: ['mm', 'm'],
    SECOND_TOKENS: ['ss', 's'],
    APM_TOKENS: ['A', 'a']
};

/* harmony default export */ __webpack_exports__["default"] = ({
    name: 'timePicker',

    props: {
        value: { type: Object },
        hideClearButton: { type: Boolean },
        format: { type: String },
        minuteInterval: { type: Number },
        secondInterval: { type: Number },
        id: { type: String },
        inputName: { type: String, required: false }
    },

    data: function data() {
        return {
            hours: [],
            minutes: [],
            seconds: [],
            apms: [],
            showDropdown: false,
            muteWatch: false,
            hourType: 'HH',
            minuteType: 'mm',
            secondType: '',
            apmType: '',
            hour: '',
            minute: '',
            second: '',
            apm: '',
            fullValues: undefined
        };
    },


    computed: {
        displayTime: function displayTime() {
            var formatString = String(this.format || 'HH:mm');
            if (this.hour) {
                formatString = formatString.replace(new RegExp(this.hourType, 'g'), this.hour);
            }
            if (this.minute) {
                formatString = formatString.replace(new RegExp(this.minuteType, 'g'), this.minute);
            }
            if (this.second && this.secondType) {
                formatString = formatString.replace(new RegExp(this.secondType, 'g'), this.second);
            }
            if (this.apm && this.apmType) {
                formatString = formatString.replace(new RegExp(this.apmType, 'g'), this.apm);
            }
            return formatString;
        },
        showClearBtn: function showClearBtn() {
            return !!(this.hour && this.hour !== '' || this.minute && this.minute !== '');
        }
    },

    watch: {
        'format': 'renderFormat',
        minuteInterval: function minuteInterval(newInteval) {
            this.renderList('minute', newInteval);
        },
        secondInterval: function secondInterval(newInteval) {
            this.renderList('second', newInteval);
        },

        'value': 'readValues',
        'displayTime': 'fillValues'
    },

    methods: {
        formatValue: function formatValue(type, i) {
            switch (type) {
                case 'H':
                case 'm':
                case 's':
                    return String(i);
                case 'HH':
                case 'mm':
                case 'ss':
                    return i < 10 ? '0' + i : String(i);
                case 'h':
                case 'k':
                    return String(i + 1);
                case 'hh':
                case 'kk':
                    return i + 1 < 10 ? '0' + (i + 1) : String(i + 1);
                default:
                    return '';
            }
        },
        checkAcceptingType: function checkAcceptingType(validValues, formatString, fallbackValue) {
            if (!validValues || !formatString || !formatString.length) {
                return '';
            }
            for (var i = 0; i < validValues.length; i++) {
                if (formatString.indexOf(validValues[i]) > -1) {
                    return validValues[i];
                }
            }
            return fallbackValue || '';
        },
        renderFormat: function renderFormat(newFormat) {
            newFormat = newFormat || this.format;
            if (!newFormat || !newFormat.length) {
                newFormat = 'HH:mm';
            }

            this.hourType = this.checkAcceptingType(CONFIG.HOUR_TOKENS, newFormat, 'HH');
            this.minuteType = this.checkAcceptingType(CONFIG.MINUTE_TOKENS, newFormat, 'mm');
            this.secondType = this.checkAcceptingType(CONFIG.SECOND_TOKENS, newFormat);
            this.apmType = this.checkAcceptingType(CONFIG.APM_TOKENS, newFormat);

            this.renderHoursList();
            this.renderList('minute');

            if (this.secondType) {
                this.renderList('second');
            }

            if (this.apmType) {
                this.renderApmList();
            }

            var self = this;
            this.$nextTick(function () {
                self.readValues();
            });
        },
        renderHoursList: function renderHoursList() {
            var hoursCount = this.hourType === 'h' || this.hourType === 'hh' ? 12 : 24;
            this.hours = [];
            for (var i = 0; i < hoursCount; i++) {
                this.hours.push(this.formatValue(this.hourType, i));
            }
        },
        renderList: function renderList(listType, interval) {
            if (listType === 'second') {
                interval = interval || this.secondInterval;
            } else if (listType === 'minute') {
                interval = interval || this.minuteInterval;
            } else {
                return;
            }

            if (interval === 0) {
                interval = 60;
            } else if (interval > 60) {
                window.console.warn('`' + listType + '-interval` should be less than 60. Current value is', interval);
                interval = 1;
            } else if (interval < 1) {
                window.console.warn('`' + listType + '-interval` should be NO less than 1. Current value is', interval);
                interval = 1;
            } else if (!interval) {
                interval = 1;
            }

            if (listType === 'minute') {
                this.minutes = [];
            } else {
                this.seconds = [];
            }

            for (var i = 0; i < 60; i += interval) {
                if (listType === 'minute') {
                    this.minutes.push(this.formatValue(this.minuteType, i));
                } else {
                    this.seconds.push(this.formatValue(this.secondType, i));
                }
            }
        },
        renderApmList: function renderApmList() {
            this.apms = [];
            if (!this.apmType) {
                return;
            }
            this.apms = this.apmType === 'A' ? ['AM', 'PM'] : ['am', 'pm'];
        },
        readValues: function readValues() {
            if (!this.value || this.muteWatch) {
                return;
            }

            var timeValue = JSON.parse(JSON.stringify(this.value || {}));

            var values = Object.keys(timeValue);
            if (values.length === 0) {
                return;
            }

            if (values.indexOf(this.hourType) > -1) {
                this.hour = timeValue[this.hourType];
            }

            if (values.indexOf(this.minuteType) > -1) {
                this.minute = timeValue[this.minuteType];
            }

            if (values.indexOf(this.secondType) > -1) {
                this.second = timeValue[this.secondType];
            } else {
                this.second = 0;
            }

            if (values.indexOf(this.apmType) > -1) {
                this.apm = timeValue[this.apmType];
            }

            this.fillValues();
        },
        fillValues: function fillValues() {
            var fullValues = {};

            var baseHour = this.hour;
            var baseHourType = this.hourType;

            var hourValue = baseHour || baseHour === 0 ? Number(baseHour) : '';
            var baseOnTwelveHours = this.isTwelveHours(baseHourType);
            var apmValue = baseOnTwelveHours && this.apm ? String(this.apm).toLowerCase() : false;

            CONFIG.HOUR_TOKENS.forEach(function (token) {
                if (token === baseHourType) {
                    fullValues[token] = baseHour;
                    return;
                }

                var value = void 0;
                var apm = void 0;
                switch (token) {
                    case 'H':
                    case 'HH':
                        if (!String(hourValue).length) {
                            fullValues[token] = '';
                            return;
                        } else if (baseOnTwelveHours) {
                            if (apmValue === 'pm') {
                                value = hourValue < 12 ? hourValue + 12 : hourValue;
                            } else {
                                value = hourValue % 12;
                            }
                        } else {
                            value = hourValue % 24;
                        }
                        fullValues[token] = token === 'HH' && value < 10 ? '0' + value : String(value);
                        break;
                    case 'k':
                    case 'kk':
                        if (!String(hourValue).length) {
                            fullValues[token] = '';
                            return;
                        } else if (baseOnTwelveHours) {
                            if (apmValue === 'pm') {
                                value = hourValue < 12 ? hourValue + 12 : hourValue;
                            } else {
                                value = hourValue === 12 ? 24 : hourValue;
                            }
                        } else {
                            value = hourValue === 0 ? 24 : hourValue;
                        }
                        fullValues[token] = token === 'kk' && value < 10 ? '0' + value : String(value);
                        break;
                    case 'h':
                    case 'hh':
                        if (apmValue) {
                            value = hourValue;
                            apm = apmValue || 'am';
                        } else {
                            if (!String(hourValue).length) {
                                fullValues[token] = '';
                                fullValues.a = '';
                                fullValues.A = '';
                                return;
                            } else if (hourValue > 11) {
                                apm = 'pm';
                                value = hourValue === 12 ? 12 : hourValue % 12;
                            } else {
                                if (baseOnTwelveHours) {
                                    apm = '';
                                } else {
                                    apm = 'am';
                                }
                                value = hourValue % 12 === 0 ? 12 : hourValue;
                            }
                        }
                        fullValues[token] = token === 'hh' && value < 10 ? '0' + value : String(value);
                        fullValues.a = apm;
                        fullValues.A = apm.toUpperCase();
                        break;
                }
            });

            if (this.minute || this.minute === 0) {
                var minuteValue = Number(this.minute);
                fullValues.m = String(minuteValue);
                fullValues.mm = minuteValue < 10 ? '0' + minuteValue : String(minuteValue);
            } else {
                fullValues.m = '';
                fullValues.mm = '';
            }

            if (this.second || this.second === 0) {
                var secondValue = Number(this.second);
                fullValues.s = String(secondValue);
                fullValues.ss = secondValue < 10 ? '0' + secondValue : String(secondValue);
            } else {
                fullValues.s = '';
                fullValues.ss = '';
            }

            this.fullValues = fullValues;
            this.updateTimeValue(fullValues);
            this.$emit('change', { data: fullValues });
        },
        updateTimeValue: function updateTimeValue(fullValues) {
            this.muteWatch = true;

            var self = this;

            var baseTimeValue = JSON.parse(JSON.stringify(this.value || {}));
            var timeValue = {};

            Object.keys(baseTimeValue).forEach(function (key) {
                timeValue[key] = fullValues[key];
            });

            this.$emit('input', timeValue);

            this.$nextTick(function () {
                self.muteWatch = false;
            });
        },
        isTwelveHours: function isTwelveHours(token) {
            return token === 'h' || token === 'hh';
        },
        toggleDropdown: function toggleDropdown() {
            this.showDropdown = !this.showDropdown;
        },
        select: function select(type, value) {
            if (type === 'hour') {
                this.hour = value;
            } else if (type === 'minute') {
                this.minute = value;
            } else if (type === 'second') {
                this.second = value;
            } else if (type === 'apm') {
                this.apm = value;
            }
        },
        clearTime: function clearTime() {
            this.hour = '';
            this.minute = '';
            this.second = '';
            this.apm = '';
        }
    },

    mounted: function mounted() {
        this.renderFormat();
    }
});

/***/ }),

/***/ 141:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("span", { staticClass: "time-picker" }, [
    _c("input", {
      directives: [
        {
          name: "model",
          rawName: "v-model",
          value: _vm.displayTime,
          expression: "displayTime"
        }
      ],
      staticClass: "display-time",
      attrs: { name: _vm.inputName, id: _vm.id, type: "text", readonly: "" },
      domProps: { value: _vm.displayTime },
      on: {
        click: function($event) {
          $event.stopPropagation()
          _vm.toggleDropdown($event)
        },
        input: function($event) {
          if ($event.target.composing) {
            return
          }
          _vm.displayTime = $event.target.value
        }
      }
    }),
    _vm._v(" "),
    !_vm.hideClearButton
      ? _c(
          "span",
          {
            directives: [
              {
                name: "show",
                rawName: "v-show",
                value: !_vm.showDropdown && _vm.showClearBtn,
                expression: "!showDropdown && showClearBtn"
              }
            ],
            staticClass: "clear-btn",
            on: {
              click: function($event) {
                $event.stopPropagation()
                _vm.clearTime($event)
              }
            }
          },
          [_vm._v("×")]
        )
      : _vm._e(),
    _vm._v(" "),
    _vm.showDropdown
      ? _c("div", {
          staticClass: "time-picker-overlay",
          on: {
            click: function($event) {
              $event.stopPropagation()
              _vm.toggleDropdown($event)
            }
          }
        })
      : _vm._e(),
    _vm._v(" "),
    _c(
      "div",
      {
        directives: [
          {
            name: "show",
            rawName: "v-show",
            value: _vm.showDropdown,
            expression: "showDropdown"
          }
        ],
        staticClass: "dropdown"
      },
      [
        _c("div", { staticClass: "select-list" }, [
          _c(
            "ul",
            { staticClass: "hours" },
            [
              _c("li", {
                staticClass: "hint",
                domProps: { textContent: _vm._s(_vm.hourType) }
              }),
              _vm._v(" "),
              _vm._l(_vm.hours, function(hr) {
                return _c("li", {
                  class: { active: _vm.hour === hr },
                  domProps: { textContent: _vm._s(hr) },
                  on: {
                    click: function($event) {
                      $event.stopPropagation()
                      _vm.select("hour", hr)
                    }
                  }
                })
              })
            ],
            2
          ),
          _vm._v(" "),
          _c(
            "ul",
            { staticClass: "minutes" },
            [
              _c("li", {
                staticClass: "hint",
                domProps: { textContent: _vm._s(_vm.minuteType) }
              }),
              _vm._v(" "),
              _vm._l(_vm.minutes, function(m) {
                return _c("li", {
                  class: { active: _vm.minute === m },
                  domProps: { textContent: _vm._s(m) },
                  on: {
                    click: function($event) {
                      $event.stopPropagation()
                      _vm.select("minute", m)
                    }
                  }
                })
              })
            ],
            2
          ),
          _vm._v(" "),
          _vm.secondType
            ? _c(
                "ul",
                { staticClass: "seconds" },
                [
                  _c("li", {
                    staticClass: "hint",
                    domProps: { textContent: _vm._s(_vm.secondType) }
                  }),
                  _vm._v(" "),
                  _vm._l(_vm.seconds, function(s) {
                    return _c("li", {
                      class: { active: _vm.second === s },
                      domProps: { textContent: _vm._s(s) },
                      on: {
                        click: function($event) {
                          $event.stopPropagation()
                          _vm.select("second", s)
                        }
                      }
                    })
                  })
                ],
                2
              )
            : _vm._e(),
          _vm._v(" "),
          _vm.apmType
            ? _c(
                "ul",
                { staticClass: "apms" },
                [
                  _c("li", {
                    staticClass: "hint",
                    domProps: { textContent: _vm._s(_vm.apmType) }
                  }),
                  _vm._v(" "),
                  _vm._l(_vm.apms, function(a) {
                    return _c("li", {
                      class: { active: _vm.apm === a },
                      domProps: { textContent: _vm._s(a) },
                      on: {
                        click: function($event) {
                          $event.stopPropagation()
                          _vm.select("apm", a)
                        }
                      }
                    })
                  })
                ],
                2
              )
            : _vm._e()
        ])
      ]
    )
  ])
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-23b35134", module.exports)
  }
}

/***/ })

});