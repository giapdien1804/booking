webpackJsonp([20],{

/***/ 101:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(118)
}
var normalizeComponent = __webpack_require__(3)
/* script */
var __vue_script__ = __webpack_require__(120)
/* template */
var __vue_template__ = __webpack_require__(121)
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
Component.options.__file = "resources\\assets\\js\\plugins\\slider\\Slider.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {  return key !== "default" && key.substr(0, 2) !== "__"})) {  console.error("named exports are not supported in *.vue files.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-7374ae31", Component.options)
  } else {
    hotAPI.reload("data-v-7374ae31", Component.options)
' + '  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 118:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(119);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(5)("5ba8df09", content, false);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../../node_modules/css-loader/index.js!../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-7374ae31\",\"scoped\":false,\"hasInlineConfig\":true}!../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0&bustCache!./Slider.vue", function() {
     var newContent = require("!!../../../../../node_modules/css-loader/index.js!../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-7374ae31\",\"scoped\":false,\"hasInlineConfig\":true}!../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0&bustCache!./Slider.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 119:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(4)(undefined);
// imports


// module
exports.push([module.i, "\n.vue-slider-component {\n    position: relative;\n    -webkit-box-sizing: border-box;\n            box-sizing: border-box;\n    -webkit-user-select: none;\n       -moz-user-select: none;\n        -ms-user-select: none;\n            user-select: none;\n}\n.vue-slider-component.vue-slider-disabled {\n    opacity: .5;\n    cursor: not-allowed;\n}\n.vue-slider-component.vue-slider-has-label {\n    margin-bottom: 15px;\n}\n.vue-slider-component.vue-slider-disabled .vue-slider-dot {\n    cursor: not-allowed;\n}\n.vue-slider-component .vue-slider {\n    position: relative;\n    display: block;\n    border-radius: 15px;\n    background-color: #ccc;\n}\n.vue-slider-component .vue-slider::after {\n    content: '';\n    position: absolute;\n    left: 0;\n    top: 0;\n    width: 100%;\n    height: 100%;\n    z-index: 2;\n}\n.vue-slider-component .vue-slider-process {\n    position: absolute;\n    border-radius: 15px;\n    background-color: #3498db;\n    -webkit-transition: all 0s;\n    transition: all 0s;\n    z-index: 1;\n}\n.vue-slider-component.vue-slider-horizontal .vue-slider-process {\n    width: 0;\n    height: 100%;\n    top: 0;\n    left: 0;\n    will-change: width;\n}\n.vue-slider-component.vue-slider-vertical .vue-slider-process {\n    width: 100%;\n    height: 0;\n    bottom: 0;\n    left: 0;\n    will-change: height;\n}\n.vue-slider-component.vue-slider-horizontal-reverse .vue-slider-process {\n    width: 0;\n    height: 100%;\n    top: 0;\n    right: 0;\n}\n.vue-slider-component.vue-slider-vertical-reverse .vue-slider-process {\n    width: 100%;\n    height: 0;\n    top: 0;\n    left: 0;\n}\n.vue-slider-component .vue-slider-dot {\n    position: absolute;\n    border-radius: 50%;\n    background-color: #fff;\n    -webkit-box-shadow: 0.5px 0.5px 2px 1px rgba(0, 0, 0, 0.32);\n            box-shadow: 0.5px 0.5px 2px 1px rgba(0, 0, 0, 0.32);\n    -webkit-transition: all 0s;\n    transition: all 0s;\n    will-change: transform;\n    cursor: pointer;\n    z-index: 3;\n}\n.vue-slider-component.vue-slider-horizontal .vue-slider-dot {\n    left: 0;\n}\n.vue-slider-component.vue-slider-vertical .vue-slider-dot {\n    bottom: 0;\n}\n.vue-slider-component.vue-slider-horizontal-reverse .vue-slider-dot {\n    right: 0;\n}\n.vue-slider-component.vue-slider-vertical-reverse .vue-slider-dot {\n    top: 0;\n}\n.vue-slider-component .vue-slider-tooltip-wrap {\n    display: none;\n    position: absolute;\n    z-index: 9;\n}\n.vue-slider-component .vue-slider-tooltip {\n    display: block;\n    font-size: 14px;\n    white-space: nowrap;\n    padding: 2px 5px;\n    min-width: 20px;\n    text-align: center;\n    color: #fff;\n    border-radius: 5px;\n    border: 1px solid #3498db;\n    background-color: #3498db;\n}\n.vue-slider-component .vue-slider-tooltip-wrap.vue-slider-tooltip-top {\n    top: -9px;\n    left: 50%;\n    -webkit-transform: translate(-50%, -100%);\n            transform: translate(-50%, -100%);\n}\n.vue-slider-component .vue-slider-tooltip-wrap.vue-slider-tooltip-bottom {\n    bottom: -9px;\n    left: 50%;\n    -webkit-transform: translate(-50%, 100%);\n            transform: translate(-50%, 100%);\n}\n.vue-slider-component .vue-slider-tooltip-wrap.vue-slider-tooltip-left {\n    top: 50%;\n    left: -9px;\n    -webkit-transform: translate(-100%, -50%);\n            transform: translate(-100%, -50%);\n}\n.vue-slider-component .vue-slider-tooltip-wrap.vue-slider-tooltip-right {\n    top: 50%;\n    right: -9px;\n    -webkit-transform: translate(100%, -50%);\n            transform: translate(100%, -50%);\n}\n.vue-slider-component .vue-slider-tooltip-wrap.vue-slider-tooltip-top .vue-slider-tooltip::before {\n    content: '';\n    position: absolute;\n    bottom: -10px;\n    left: 50%;\n    width: 0;\n    height: 0;\n    border: 5px solid transparent;\n    border: 6px solid transparent \\0;\n    border-top-color: inherit;\n    -webkit-transform: translate(-50%, 0);\n            transform: translate(-50%, 0);\n}\n.vue-slider-component .vue-slider-tooltip-wrap.vue-slider-tooltip-bottom .vue-slider-tooltip::before {\n    content: '';\n    position: absolute;\n    top: -10px;\n    left: 50%;\n    width: 0;\n    height: 0;\n    border: 5px solid transparent;\n    border: 6px solid transparent \\0;\n    border-bottom-color: inherit;\n    -webkit-transform: translate(-50%, 0);\n            transform: translate(-50%, 0);\n}\n.vue-slider-component .vue-slider-tooltip-wrap.vue-slider-tooltip-left .vue-slider-tooltip::before {\n    content: '';\n    position: absolute;\n    top: 50%;\n    right: -10px;\n    width: 0;\n    height: 0;\n    border: 5px solid transparent;\n    border: 6px solid transparent \\0;\n    border-left-color: inherit;\n    -webkit-transform: translate(0, -50%);\n            transform: translate(0, -50%);\n}\n.vue-slider-component .vue-slider-tooltip-wrap.vue-slider-tooltip-right .vue-slider-tooltip::before {\n    content: '';\n    position: absolute;\n    top: 50%;\n    left: -10px;\n    width: 0;\n    height: 0;\n    border: 5px solid transparent;\n    border: 6px solid transparent \\0;\n    border-right-color: inherit;\n    -webkit-transform: translate(0, -50%);\n            transform: translate(0, -50%);\n}\n.vue-slider-component .vue-slider-dot.vue-slider-hover:hover .vue-slider-tooltip-wrap {\n    display: block;\n}\n.vue-slider-component .vue-slider-dot.vue-slider-always .vue-slider-tooltip-wrap {\n    display: block !important;\n}\n.vue-slider-component .vue-slider-piecewise {\n    position: absolute;\n    width: 100%;\n    padding: 0;\n    margin: 0;\n    left: 0;\n    top: 0;\n    height: 100%;\n    list-style: none;\n}\n.vue-slider-component .vue-slider-piecewise-item {\n    position: absolute;\n    width: 8px;\n    height: 8px;\n}\n.vue-slider-component .vue-slider-piecewise-dot {\n    position: absolute;\n    left: 50%;\n    top: 50%;\n    width: 100%;\n    height: 100%;\n    display: inline-block;\n    background-color: rgba(0, 0, 0, 0.16);\n    border-radius: 50%;\n    -webkit-transform: translate(-50%, -50%);\n            transform: translate(-50%, -50%);\n    z-index: 2;\n    -webkit-transition: all .3s;\n    transition: all .3s;\n}\n.vue-slider-component .vue-slider-piecewise-item:first-child .vue-slider-piecewise-dot, .vue-slider-component .vue-slider-piecewise-item:last-child .vue-slider-piecewise-dot {\n    visibility: hidden;\n}\n.vue-slider-component.vue-slider-horizontal .vue-slider-piecewise-label, .vue-slider-component.vue-slider-horizontal-reverse .vue-slider-piecewise-label {\n    position: absolute;\n    display: inline-block;\n    top: 100%;\n    left: 50%;\n    white-space: nowrap;\n    font-size: 12px;\n    color: #333;\n    -webkit-transform: translate(-50%, 8px);\n            transform: translate(-50%, 8px);\n    visibility: visible;\n}\n.vue-slider-component.vue-slider-vertical .vue-slider-piecewise-label, .vue-slider-component.vue-slider-vertical-reverse .vue-slider-piecewise-label {\n    position: absolute;\n    display: inline-block;\n    top: 50%;\n    left: 100%;\n    white-space: nowrap;\n    font-size: 12px;\n    color: #333;\n    -webkit-transform: translate(8px, -50%);\n            transform: translate(8px, -50%);\n    visibility: visible;\n}\n.vue-slider-component .vue-slider-sr-only {\n    clip: rect(1px, 1px, 1px, 1px);\n    height: 1px;\n    width: 1px;\n    overflow: hidden;\n    position: absolute !important;\n}\n", ""]);

// exports


/***/ }),

/***/ 120:
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
    data: function data() {
        return {
            flag: false,
            size: 0,
            currentValue: 0,
            currentSlider: 0
        };
    },

    props: {
        width: {
            type: [Number, String],
            default: 'auto'
        },
        height: {
            type: [Number, String],
            default: 6
        },
        data: {
            type: Array,
            default: null
        },
        dotSize: {
            type: Number,
            default: 16
        },
        dotWidth: {
            type: Number,
            required: false
        },
        dotHeight: {
            type: Number,
            required: false
        },
        min: {
            type: Number,
            default: 0
        },
        max: {
            type: Number,
            default: 100
        },
        interval: {
            type: Number,
            default: 1
        },
        show: {
            type: Boolean,
            default: true
        },
        disabled: {
            type: Boolean,
            default: false
        },
        piecewise: {
            type: Boolean,
            default: false
        },
        tooltip: {
            type: [String, Boolean],
            default: 'always'
        },
        eventType: {
            type: String,
            default: 'auto'
        },
        direction: {
            type: String,
            default: 'horizontal'
        },
        reverse: {
            type: Boolean,
            default: false
        },
        lazy: {
            type: Boolean,
            default: true
        },
        clickable: {
            type: Boolean,
            default: true
        },
        speed: {
            type: Number,
            default: 0.5
        },
        realTime: {
            type: Boolean,
            default: true
        },
        stopPropagation: {
            type: Boolean,
            default: false
        },
        value: {
            type: [String, Number, Array],
            default: 0
        },
        piecewiseLabel: {
            type: Boolean,
            default: false
        },
        sliderStyle: [Array, Object],
        tooltipDir: [Array, String],
        formatter: [String, Function],
        piecewiseStyle: Object,
        piecewiseActiveStyle: Object,
        processStyle: Object,
        bgStyle: Object,
        tooltipStyle: [Array, Object],
        labelStyle: Object,
        labelActiveStyle: Object
    },
    computed: {
        dotWidthVal: function dotWidthVal() {
            return typeof this.dotWidth === 'number' ? this.dotWidth : this.dotSize;
        },
        dotHeightVal: function dotHeightVal() {
            return typeof this.dotHeight === 'number' ? this.dotHeight : this.dotSize;
        },
        flowDirection: function flowDirection() {
            return 'vue-slider-' + (this.direction + (this.reverse ? '-reverse' : ''));
        },
        tooltipDirection: function tooltipDirection() {
            var dir = this.tooltipDir || (this.direction === 'vertical' ? 'left' : 'top');
            if (Array.isArray(dir)) {
                return this.isRange ? dir : dir[1];
            } else {
                return this.isRange ? [dir, dir] : dir;
            }
        },
        tooltipStatus: function tooltipStatus() {
            return this.tooltip === 'hover' && this.flag ? 'vue-slider-always' : this.tooltip ? 'vue-slider-' + this.tooltip : '';
        },
        tooltipClass: function tooltipClass() {
            return ['vue-slider-tooltip-' + this.tooltipDirection, 'vue-slider-tooltip'];
        },
        isDisabled: function isDisabled() {
            return this.eventType === 'none' ? true : this.disabled;
        },
        disabledClass: function disabledClass() {
            return this.disabled ? 'vue-slider-disabled' : '';
        },
        isRange: function isRange() {
            return Array.isArray(this.value);
        },
        slider: function slider() {
            return this.isRange ? [this.$refs.dot0, this.$refs.dot1] : this.$refs.dot;
        },
        minimum: function minimum() {
            return this.data ? 0 : this.min;
        },

        val: {
            get: function get() {
                return this.data ? this.isRange ? [this.data[this.currentValue[0]], this.data[this.currentValue[1]]] : this.data[this.currentValue] : this.currentValue;
            },
            set: function set(val) {
                if (this.data) {
                    if (this.isRange) {
                        var index0 = this.data.indexOf(val[0]);
                        var index1 = this.data.indexOf(val[1]);
                        if (index0 > -1 && index1 > -1) {
                            this.currentValue = [index0, index1];
                        }
                    } else {
                        var index = this.data.indexOf(val);
                        if (index > -1) {
                            this.currentValue = index;
                        }
                    }
                } else {
                    this.currentValue = val;
                }
            }
        },
        currentIndex: function currentIndex() {
            if (this.isRange) {
                return this.data ? this.currentValue : [(this.currentValue[0] - this.minimum) / this.spacing, (this.currentValue[1] - this.minimum) / this.spacing];
            } else {
                return (this.currentValue - this.minimum) / this.spacing;
            }
        },
        indexRange: function indexRange() {
            if (this.isRange) {
                return this.currentIndex;
            } else {
                return [0, this.currentIndex];
            }
        },
        maximum: function maximum() {
            return this.data ? this.data.length - 1 : this.max;
        },
        multiple: function multiple() {
            var decimals = ('' + this.interval).split('.')[1];
            return decimals ? Math.pow(10, decimals.length) : 1;
        },
        spacing: function spacing() {
            return this.data ? 1 : this.interval;
        },
        total: function total() {
            if (this.data) {
                return this.data.length - 1;
            } else if (~~((this.maximum - this.minimum) * this.multiple) % (this.interval * this.multiple) !== 0) {
                console.error('[Vue-slider warn]: Prop[interval] is illegal, Please make sure that the interval can be divisible');
            }
            return (this.maximum - this.minimum) / this.interval;
        },
        gap: function gap() {
            return this.size / this.total;
        },
        position: function position() {
            return this.isRange ? [(this.currentValue[0] - this.minimum) / this.spacing * this.gap, (this.currentValue[1] - this.minimum) / this.spacing * this.gap] : (this.currentValue - this.minimum) / this.spacing * this.gap;
        },
        limit: function limit() {
            return this.isRange ? [[0, this.position[1]], [this.position[0], this.size]] : [0, this.size];
        },
        valueLimit: function valueLimit() {
            return this.isRange ? [[this.minimum, this.currentValue[1]], [this.currentValue[0], this.maximum]] : [this.minimum, this.maximum];
        },
        wrapStyles: function wrapStyles() {
            return this.direction === 'vertical' ? {
                height: typeof this.height === 'number' ? this.height + 'px' : this.height,
                padding: this.dotHeightVal / 2 + 'px ' + this.dotWidthVal / 2 + 'px'
            } : {
                width: typeof this.width === 'number' ? this.width + 'px' : this.width,
                padding: this.dotHeightVal / 2 + 'px ' + this.dotWidthVal / 2 + 'px'
            };
        },
        sliderStyles: function sliderStyles() {
            if (Array.isArray(this.sliderStyle)) {
                return this.isRange ? this.sliderStyle : this.sliderStyle[1];
            } else {
                return this.isRange ? [this.sliderStyle, this.sliderStyle] : this.sliderStyle;
            }
        },
        tooltipStyles: function tooltipStyles() {
            if (Array.isArray(this.tooltipStyle)) {
                return this.isRange ? this.tooltipStyle : this.tooltipStyle[1];
            } else {
                return this.isRange ? [this.tooltipStyle, this.tooltipStyle] : this.tooltipStyle;
            }
        },
        elemStyles: function elemStyles() {
            return this.direction === 'vertical' ? {
                width: this.width + 'px',
                height: '100%'
            } : {
                height: this.height + 'px'
            };
        },
        dotStyles: function dotStyles() {
            return this.direction === 'vertical' ? {
                width: this.dotWidthVal + 'px',
                height: this.dotHeightVal + 'px',
                left: -(this.dotWidthVal - this.width) / 2 + 'px'
            } : {
                width: this.dotWidthVal + 'px',
                height: this.dotHeightVal + 'px',
                top: -(this.dotHeightVal - this.height) / 2 + 'px'
            };
        },
        piecewiseDotStyle: function piecewiseDotStyle() {
            return this.direction === 'vertical' ? {
                width: this.width + 'px',
                height: this.width + 'px'
            } : {
                width: this.height + 'px',
                height: this.height + 'px'
            };
        },
        piecewiseDotWrap: function piecewiseDotWrap() {
            if (!this.piecewise && !this.piecewiseLabel) {
                return false;
            }

            var arr = [];
            for (var i = 0; i <= this.total; i++) {
                var style = this.direction === 'vertical' ? {
                    bottom: this.gap * i - this.width / 2 + 'px',
                    left: 0
                } : {
                    left: this.gap * i - this.height / 2 + 'px',
                    top: 0
                };
                var index = this.reverse ? this.total - i : i;
                var label = this.data ? this.data[index] : this.spacing * index + this.min;
                arr.push({
                    style: style,
                    label: this.formatter ? this.formatting(label) : label,
                    inRange: index >= this.indexRange[0] && index <= this.indexRange[1]
                });
            }
            return arr;
        }
    },
    watch: {
        value: function value(val) {
            this.flag || this.setValue(val, true);
        },
        max: function max(val) {
            var resetVal = this.limitValue(this.val);
            resetVal !== false && this.setValue(resetVal);
            this.refresh();
        },
        min: function min(val) {
            var resetVal = this.limitValue(this.val);
            resetVal !== false && this.setValue(resetVal);
            this.refresh();
        },
        show: function show(bool) {
            var _this = this;

            if (bool && !this.size) {
                this.$nextTick(function () {
                    _this.refresh();
                });
            }
        }
    },
    methods: {
        bindEvents: function bindEvents() {
            document.addEventListener('touchmove', this.moving, { passive: false });
            document.addEventListener('touchend', this.moveEnd, { passive: false });
            document.addEventListener('mousemove', this.moving);
            document.addEventListener('mouseup', this.moveEnd);
            document.addEventListener('mouseleave', this.moveEnd);

            window.addEventListener('resize', this.refresh);
        },
        unbindEvents: function unbindEvents() {
            window.removeEventListener('resize', this.refresh);

            document.removeEventListener('touchmove', this.moving);
            document.removeEventListener('touchend', this.moveEnd);
            document.removeEventListener('mousemove', this.moving);
            document.removeEventListener('mouseup', this.moveEnd);
            document.removeEventListener('mouseleave', this.moveEnd);
        },
        formatting: function formatting(value) {
            return typeof this.formatter === 'string' ? this.formatter.replace(/\{value\}/, value) : this.formatter(value);
        },
        getPos: function getPos(e) {
            this.realTime && this.getStaticData();
            return this.direction === 'vertical' ? this.reverse ? e.pageY - this.offset : this.size - (e.pageY - this.offset) : this.reverse ? this.size - (e.clientX - this.offset) : e.clientX - this.offset;
        },
        wrapClick: function wrapClick(e) {
            if (this.isDisabled || !this.clickable) return false;
            var pos = this.getPos(e);
            if (this.isRange) {
                this.currentSlider = pos > (this.position[1] - this.position[0]) / 2 + this.position[0] ? 1 : 0;
            }
            this.setValueOnPos(pos);
        },
        moveStart: function moveStart(e, index) {
            if (this.stopPropagation) {
                e.stopPropagation();
            }

            if (this.isDisabled) return false;else if (this.isRange) {
                this.currentSlider = index;
            }
            this.flag = true;
            this.$emit('drag-start', this);
        },
        moving: function moving(e) {
            if (this.stopPropagation) {
                e.stopPropagation();
            }

            if (!this.flag) return false;
            e.preventDefault();

            if (e.targetTouches && e.targetTouches[0]) e = e.targetTouches[0];
            this.setValueOnPos(this.getPos(e), true);
        },
        moveEnd: function moveEnd(e) {
            if (this.stopPropagation) {
                e.stopPropagation();
            }

            if (this.flag) {
                this.$emit('drag-end', this);
                if (this.lazy && this.isDiff(this.val, this.value)) {
                    this.syncValue();
                }
            } else {
                return false;
            }
            this.flag = false;
            this.setPosition();
        },
        setValueOnPos: function setValueOnPos(pos, isDrag) {
            var range = this.isRange ? this.limit[this.currentSlider] : this.limit;
            var valueRange = this.isRange ? this.valueLimit[this.currentSlider] : this.valueLimit;
            if (pos >= range[0] && pos <= range[1]) {
                this.setTransform(pos);
                var v = (Math.round(pos / this.gap) * (this.spacing * this.multiple) + this.minimum * this.multiple) / this.multiple;
                this.setCurrentValue(v, isDrag);
            } else if (pos < range[0]) {
                this.setTransform(range[0]);
                this.setCurrentValue(valueRange[0]);
                if (this.currentSlider === 1) this.currentSlider = 0;
            } else {
                this.setTransform(range[1]);
                this.setCurrentValue(valueRange[1]);
                if (this.currentSlider === 0) this.currentSlider = 1;
            }
        },
        isDiff: function isDiff(a, b) {
            if (Object.prototype.toString.call(a) !== Object.prototype.toString.call(b)) {
                return true;
            } else if (Array.isArray(a) && a.length === b.length) {
                return a.some(function (v, i) {
                    return v !== b[i];
                });
            }
            return a !== b;
        },
        setCurrentValue: function setCurrentValue(val, bool) {
            if (val < this.minimum || val > this.maximum) return false;
            if (this.isRange) {
                if (this.isDiff(this.currentValue[this.currentSlider], val)) {
                    this.currentValue.splice(this.currentSlider, 1, val);
                    if (!this.lazy || !this.flag) {
                        this.syncValue();
                    }
                }
            } else if (this.isDiff(this.currentValue, val)) {
                this.currentValue = val;
                if (!this.lazy || !this.flag) {
                    this.syncValue();
                }
            }
            bool || this.setPosition();
        },
        setIndex: function setIndex(val) {
            if (Array.isArray(val) && this.isRange) {
                var value = void 0;
                if (this.data) {
                    value = [this.data[val[0]], this.data[val[1]]];
                } else {
                    value = [this.spacing * val[0] + this.minimum, this.spacing * val[1] + this.minimum];
                }
                this.setValue(value);
            } else {
                val = this.spacing * val + this.minimum;
                if (this.isRange) {
                    this.currentSlider = val > (this.currentValue[1] - this.currentValue[0]) / 2 + this.currentValue[0] ? 1 : 0;
                }
                this.setCurrentValue(val);
            }
        },
        setValue: function setValue(val, noCb, speed) {
            var _this2 = this;

            if (this.isDiff(this.val, val)) {
                var resetVal = this.limitValue(val);
                if (resetVal !== false) {
                    this.val = this.isRange ? resetVal.concat() : resetVal;
                } else {
                    this.val = this.isRange ? val.concat() : val;
                }
                this.syncValue(noCb);
            }

            this.$nextTick(function () {
                return _this2.setPosition(speed);
            });
        },
        setPosition: function setPosition(speed) {
            this.flag || this.setTransitionTime(speed === undefined ? this.speed : speed);
            if (this.isRange) {
                this.currentSlider = 0;
                this.setTransform(this.position[this.currentSlider]);
                this.currentSlider = 1;
                this.setTransform(this.position[this.currentSlider]);
            } else {
                this.setTransform(this.position);
            }
            this.flag || this.setTransitionTime(0);
        },
        setTransform: function setTransform(val) {
            var value = (this.direction === 'vertical' ? this.dotHeightVal / 2 - val : val - this.dotWidthVal / 2) * (this.reverse ? -1 : 1);
            var translateValue = this.direction === 'vertical' ? 'translateY(' + value + 'px)' : 'translateX(' + value + 'px)';
            var processSize = (this.currentSlider === 0 ? this.position[1] - val : val - this.position[0]) + 'px';
            var processPos = (this.currentSlider === 0 ? val : this.position[0]) + 'px';
            if (this.isRange) {
                this.slider[this.currentSlider].style.transform = translateValue;
                this.slider[this.currentSlider].style.WebkitTransform = translateValue;
                this.slider[this.currentSlider].style.msTransform = translateValue;
                if (this.direction === 'vertical') {
                    this.$refs.process.style.height = processSize;
                    this.$refs.process.style[this.reverse ? 'top' : 'bottom'] = processPos;
                } else {
                    this.$refs.process.style.width = processSize;
                    this.$refs.process.style[this.reverse ? 'right' : 'left'] = processPos;
                }
            } else {
                this.slider.style.transform = translateValue;
                this.slider.style.WebkitTransform = translateValue;
                this.slider.style.msTransform = translateValue;
                if (this.direction === 'vertical') {
                    this.$refs.process.style.height = val + 'px';
                    this.$refs.process.style[this.reverse ? 'top' : 'bottom'] = 0;
                } else {
                    this.$refs.process.style.width = val + 'px';
                    this.$refs.process.style[this.reverse ? 'right' : 'left'] = 0;
                }
            }
        },
        setTransitionTime: function setTransitionTime(time) {
            time || this.$refs.process.offsetWidth;
            if (this.isRange) {
                for (var i = 0; i < this.slider.length; i++) {
                    this.slider[i].style.transitionDuration = time + 's';
                    this.slider[i].style.WebkitTransitionDuration = time + 's';
                }
                this.$refs.process.style.transitionDuration = time + 's';
                this.$refs.process.style.WebkitTransitionDuration = time + 's';
            } else {
                this.slider.style.transitionDuration = time + 's';
                this.slider.style.WebkitTransitionDuration = time + 's';
                this.$refs.process.style.transitionDuration = time + 's';
                this.$refs.process.style.WebkitTransitionDuration = time + 's';
            }
        },
        limitValue: function limitValue(val) {
            var _this3 = this;

            if (this.data) {
                return val;
            }

            var bool = false;
            if (this.isRange) {
                val = val.map(function (v) {
                    if (v < _this3.min) {
                        bool = true;
                        return _this3.min;
                    } else if (v > _this3.max) {
                        bool = true;
                        return _this3.max;
                    }
                    return v;
                });
            } else if (val > this.max) {
                bool = true;
                val = this.max;
            } else if (val < this.min) {
                bool = true;
                val = this.min;
            }
            return bool && val;
        },
        syncValue: function syncValue(noCb) {
            noCb || this.$emit('callback', this.val);
            this.$emit('input', this.isRange ? this.val.concat() : this.val);
        },
        getValue: function getValue() {
            return this.val;
        },
        getIndex: function getIndex() {
            return this.currentIndex;
        },
        getStaticData: function getStaticData() {
            if (this.$refs.elem) {
                this.size = this.direction === 'vertical' ? this.$refs.elem.offsetHeight : this.$refs.elem.offsetWidth;
                this.offset = this.direction === 'vertical' ? this.$refs.elem.getBoundingClientRect().top + window.pageYOffset || document.documentElement.scrollTop : this.$refs.elem.getBoundingClientRect().left;
            }
        },
        refresh: function refresh() {
            if (this.$refs.elem) {
                this.getStaticData();
                this.setPosition();
            }
        }
    },
    mounted: function mounted() {
        var _this4 = this;

        if (typeof window === 'undefined' || typeof document === 'undefined') return;

        this.$nextTick(function () {
            _this4.getStaticData();
            _this4.setValue(_this4.value, true, 0);
            _this4.bindEvents();
        });
    },
    beforeDestroy: function beforeDestroy() {
        this.unbindEvents();
    }
});

/***/ }),

/***/ 121:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    {
      directives: [
        { name: "show", rawName: "v-show", value: _vm.show, expression: "show" }
      ],
      ref: "wrap",
      class: [
        "vue-slider-component",
        _vm.flowDirection,
        _vm.disabledClass,
        { "vue-slider-has-label": _vm.piecewiseLabel }
      ],
      style: _vm.wrapStyles,
      on: { click: _vm.wrapClick }
    },
    [
      _c(
        "div",
        {
          ref: "elem",
          staticClass: "vue-slider",
          style: [_vm.elemStyles, _vm.bgStyle],
          attrs: { "aria-hidden": "true" }
        },
        [
          _vm.isRange
            ? [
                _c(
                  "div",
                  {
                    ref: "dot0",
                    class: [_vm.tooltipStatus, "vue-slider-dot"],
                    style: [_vm.dotStyles, _vm.sliderStyles[0]],
                    on: {
                      mousedown: function($event) {
                        _vm.moveStart($event, 0)
                      },
                      touchstart: function($event) {
                        _vm.moveStart($event, 0)
                      }
                    }
                  },
                  [
                    _c(
                      "span",
                      {
                        class: [
                          "vue-slider-tooltip-" + _vm.tooltipDirection[0],
                          "vue-slider-tooltip-wrap"
                        ]
                      },
                      [
                        _vm._t(
                          "tooltip",
                          [
                            _c(
                              "span",
                              {
                                staticClass: "vue-slider-tooltip",
                                style: _vm.tooltipStyles[0]
                              },
                              [
                                _vm._v(
                                  _vm._s(
                                    _vm.formatter
                                      ? _vm.formatting(_vm.val[0])
                                      : _vm.val[0]
                                  )
                                )
                              ]
                            )
                          ],
                          { value: _vm.val[0], index: 0 }
                        )
                      ],
                      2
                    )
                  ]
                ),
                _vm._v(" "),
                _c(
                  "div",
                  {
                    ref: "dot1",
                    class: [_vm.tooltipStatus, "vue-slider-dot"],
                    style: [_vm.dotStyles, _vm.sliderStyles[1]],
                    on: {
                      mousedown: function($event) {
                        _vm.moveStart($event, 1)
                      },
                      touchstart: function($event) {
                        _vm.moveStart($event, 1)
                      }
                    }
                  },
                  [
                    _c(
                      "span",
                      {
                        class: [
                          "vue-slider-tooltip-" + _vm.tooltipDirection[1],
                          "vue-slider-tooltip-wrap"
                        ]
                      },
                      [
                        _vm._t(
                          "tooltip",
                          [
                            _c(
                              "span",
                              {
                                staticClass: "vue-slider-tooltip",
                                style: _vm.tooltipStyles[1]
                              },
                              [
                                _vm._v(
                                  _vm._s(
                                    _vm.formatter
                                      ? _vm.formatting(_vm.val[1])
                                      : _vm.val[1]
                                  )
                                )
                              ]
                            )
                          ],
                          { value: _vm.val[1], index: 1 }
                        )
                      ],
                      2
                    )
                  ]
                )
              ]
            : [
                _c(
                  "div",
                  {
                    ref: "dot",
                    class: [_vm.tooltipStatus, "vue-slider-dot"],
                    style: [_vm.dotStyles, _vm.sliderStyles],
                    on: { mousedown: _vm.moveStart, touchstart: _vm.moveStart }
                  },
                  [
                    _c(
                      "span",
                      {
                        class: [
                          "vue-slider-tooltip-" + _vm.tooltipDirection,
                          "vue-slider-tooltip-wrap"
                        ]
                      },
                      [
                        _vm._t(
                          "tooltip",
                          [
                            _c(
                              "span",
                              {
                                staticClass: "vue-slider-tooltip",
                                style: _vm.tooltipStyles
                              },
                              [
                                _vm._v(
                                  _vm._s(
                                    _vm.formatter
                                      ? _vm.formatting(_vm.val)
                                      : _vm.val
                                  )
                                )
                              ]
                            )
                          ],
                          { value: _vm.val }
                        )
                      ],
                      2
                    )
                  ]
                )
              ],
          _vm._v(" "),
          _c(
            "ul",
            { staticClass: "vue-slider-piecewise" },
            _vm._l(_vm.piecewiseDotWrap, function(piecewiseObj, index) {
              return _c(
                "li",
                {
                  key: index,
                  staticClass: "vue-slider-piecewise-item",
                  style: [_vm.piecewiseDotStyle, piecewiseObj.style]
                },
                [
                  _vm._t(
                    "piecewise",
                    [
                      _vm.piecewise
                        ? _c("span", {
                            staticClass: "vue-slider-piecewise-dot",
                            style: [
                              _vm.piecewiseStyle,
                              piecewiseObj.inRange
                                ? _vm.piecewiseActiveStyle
                                : null
                            ]
                          })
                        : _vm._e()
                    ],
                    {
                      label: piecewiseObj.label,
                      index: index,
                      first: index === 0,
                      last: index === _vm.piecewiseDotWrap.length - 1
                    }
                  ),
                  _vm._v(" "),
                  _vm._t(
                    "label",
                    [
                      _vm.piecewiseLabel
                        ? _c(
                            "span",
                            {
                              staticClass: "vue-slider-piecewise-label",
                              style: [
                                _vm.labelStyle,
                                piecewiseObj.inRange
                                  ? _vm.labelActiveStyle
                                  : null
                              ]
                            },
                            [
                              _vm._v(
                                "\n\t\t\t\t\t\t\t" +
                                  _vm._s(piecewiseObj.label) +
                                  "\n\t\t\t\t\t\t"
                              )
                            ]
                          )
                        : _vm._e()
                    ],
                    {
                      label: piecewiseObj.label,
                      index: index,
                      first: index === 0,
                      last: index === _vm.piecewiseDotWrap.length - 1
                    }
                  )
                ],
                2
              )
            })
          ),
          _vm._v(" "),
          _c("div", {
            ref: "process",
            staticClass: "vue-slider-process",
            style: _vm.processStyle
          })
        ],
        2
      ),
      _vm._v(" "),
      !_vm.isRange && !_vm.data
        ? _c("input", {
            directives: [
              {
                name: "model",
                rawName: "v-model",
                value: _vm.val,
                expression: "val"
              }
            ],
            staticClass: "vue-slider-sr-only",
            attrs: { type: "range", min: _vm.min, max: _vm.max },
            domProps: { value: _vm.val },
            on: {
              __r: function($event) {
                _vm.val = $event.target.value
              }
            }
          })
        : _vm._e()
    ]
  )
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-7374ae31", module.exports)
  }
}

/***/ })

});