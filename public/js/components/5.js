webpackJsonp([5],{

/***/ 169:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(27)
/* script */
var __vue_script__ = __webpack_require__(307)
/* template */
var __vue_template__ = __webpack_require__(308)
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
Component.options.__file = "resources\\assets\\js\\components\\passport\\PersonalAccessTokens.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {  return key !== "default" && key.substr(0, 2) !== "__"})) {  console.error("named exports are not supported in *.vue files.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-50e40461", Component.options)
  } else {
    hotAPI.reload("data-v-50e40461", Component.options)
' + '  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 171:
/***/ (function(module, exports) {

exports.f = Object.getOwnPropertySymbols;


/***/ }),

/***/ 179:
/***/ (function(module, exports, __webpack_require__) {

exports.f = __webpack_require__(0);


/***/ }),

/***/ 180:
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(2);
var core = __webpack_require__(3);
var LIBRARY = __webpack_require__(34);
var wksExt = __webpack_require__(179);
var defineProperty = __webpack_require__(9).f;
module.exports = function (name) {
  var $Symbol = core.Symbol || (core.Symbol = LIBRARY ? {} : global.Symbol || {});
  if (name.charAt(0) != '_' && !(name in $Symbol)) defineProperty($Symbol, name, { value: wksExt.f(name) });
};


/***/ }),

/***/ 194:
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.7 / 15.2.3.4 Object.getOwnPropertyNames(O)
var $keys = __webpack_require__(61);
var hiddenKeys = __webpack_require__(36).concat('length', 'prototype');

exports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
  return $keys(O, hiddenKeys);
};


/***/ }),

/***/ 201:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _iterator = __webpack_require__(202);

var _iterator2 = _interopRequireDefault(_iterator);

var _symbol = __webpack_require__(204);

var _symbol2 = _interopRequireDefault(_symbol);

var _typeof = typeof _symbol2.default === "function" && typeof _iterator2.default === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof _symbol2.default === "function" && obj.constructor === _symbol2.default && obj !== _symbol2.default.prototype ? "symbol" : typeof obj; };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = typeof _symbol2.default === "function" && _typeof(_iterator2.default) === "symbol" ? function (obj) {
  return typeof obj === "undefined" ? "undefined" : _typeof(obj);
} : function (obj) {
  return obj && typeof _symbol2.default === "function" && obj.constructor === _symbol2.default && obj !== _symbol2.default.prototype ? "symbol" : typeof obj === "undefined" ? "undefined" : _typeof(obj);
};

/***/ }),

/***/ 202:
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(203), __esModule: true };

/***/ }),

/***/ 203:
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(19);
__webpack_require__(17);
module.exports = __webpack_require__(179).f('iterator');


/***/ }),

/***/ 204:
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(205), __esModule: true };

/***/ }),

/***/ 205:
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(206);
__webpack_require__(64);
__webpack_require__(212);
__webpack_require__(213);
module.exports = __webpack_require__(3).Symbol;


/***/ }),

/***/ 206:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// ECMAScript 6 symbols shim
var global = __webpack_require__(2);
var has = __webpack_require__(11);
var DESCRIPTORS = __webpack_require__(6);
var $export = __webpack_require__(5);
var redefine = __webpack_require__(62);
var META = __webpack_require__(207).KEY;
var $fails = __webpack_require__(30);
var shared = __webpack_require__(35);
var setToStringTag = __webpack_require__(18);
var uid = __webpack_require__(33);
var wks = __webpack_require__(0);
var wksExt = __webpack_require__(179);
var wksDefine = __webpack_require__(180);
var enumKeys = __webpack_require__(208);
var isArray = __webpack_require__(209);
var anObject = __webpack_require__(4);
var isObject = __webpack_require__(10);
var toIObject = __webpack_require__(12);
var toPrimitive = __webpack_require__(59);
var createDesc = __webpack_require__(32);
var _create = __webpack_require__(63);
var gOPNExt = __webpack_require__(210);
var $GOPD = __webpack_require__(211);
var $DP = __webpack_require__(9);
var $keys = __webpack_require__(31);
var gOPD = $GOPD.f;
var dP = $DP.f;
var gOPN = gOPNExt.f;
var $Symbol = global.Symbol;
var $JSON = global.JSON;
var _stringify = $JSON && $JSON.stringify;
var PROTOTYPE = 'prototype';
var HIDDEN = wks('_hidden');
var TO_PRIMITIVE = wks('toPrimitive');
var isEnum = {}.propertyIsEnumerable;
var SymbolRegistry = shared('symbol-registry');
var AllSymbols = shared('symbols');
var OPSymbols = shared('op-symbols');
var ObjectProto = Object[PROTOTYPE];
var USE_NATIVE = typeof $Symbol == 'function';
var QObject = global.QObject;
// Don't use setters in Qt Script, https://github.com/zloirock/core-js/issues/173
var setter = !QObject || !QObject[PROTOTYPE] || !QObject[PROTOTYPE].findChild;

// fallback for old Android, https://code.google.com/p/v8/issues/detail?id=687
var setSymbolDesc = DESCRIPTORS && $fails(function () {
  return _create(dP({}, 'a', {
    get: function () { return dP(this, 'a', { value: 7 }).a; }
  })).a != 7;
}) ? function (it, key, D) {
  var protoDesc = gOPD(ObjectProto, key);
  if (protoDesc) delete ObjectProto[key];
  dP(it, key, D);
  if (protoDesc && it !== ObjectProto) dP(ObjectProto, key, protoDesc);
} : dP;

var wrap = function (tag) {
  var sym = AllSymbols[tag] = _create($Symbol[PROTOTYPE]);
  sym._k = tag;
  return sym;
};

var isSymbol = USE_NATIVE && typeof $Symbol.iterator == 'symbol' ? function (it) {
  return typeof it == 'symbol';
} : function (it) {
  return it instanceof $Symbol;
};

var $defineProperty = function defineProperty(it, key, D) {
  if (it === ObjectProto) $defineProperty(OPSymbols, key, D);
  anObject(it);
  key = toPrimitive(key, true);
  anObject(D);
  if (has(AllSymbols, key)) {
    if (!D.enumerable) {
      if (!has(it, HIDDEN)) dP(it, HIDDEN, createDesc(1, {}));
      it[HIDDEN][key] = true;
    } else {
      if (has(it, HIDDEN) && it[HIDDEN][key]) it[HIDDEN][key] = false;
      D = _create(D, { enumerable: createDesc(0, false) });
    } return setSymbolDesc(it, key, D);
  } return dP(it, key, D);
};
var $defineProperties = function defineProperties(it, P) {
  anObject(it);
  var keys = enumKeys(P = toIObject(P));
  var i = 0;
  var l = keys.length;
  var key;
  while (l > i) $defineProperty(it, key = keys[i++], P[key]);
  return it;
};
var $create = function create(it, P) {
  return P === undefined ? _create(it) : $defineProperties(_create(it), P);
};
var $propertyIsEnumerable = function propertyIsEnumerable(key) {
  var E = isEnum.call(this, key = toPrimitive(key, true));
  if (this === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key)) return false;
  return E || !has(this, key) || !has(AllSymbols, key) || has(this, HIDDEN) && this[HIDDEN][key] ? E : true;
};
var $getOwnPropertyDescriptor = function getOwnPropertyDescriptor(it, key) {
  it = toIObject(it);
  key = toPrimitive(key, true);
  if (it === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key)) return;
  var D = gOPD(it, key);
  if (D && has(AllSymbols, key) && !(has(it, HIDDEN) && it[HIDDEN][key])) D.enumerable = true;
  return D;
};
var $getOwnPropertyNames = function getOwnPropertyNames(it) {
  var names = gOPN(toIObject(it));
  var result = [];
  var i = 0;
  var key;
  while (names.length > i) {
    if (!has(AllSymbols, key = names[i++]) && key != HIDDEN && key != META) result.push(key);
  } return result;
};
var $getOwnPropertySymbols = function getOwnPropertySymbols(it) {
  var IS_OP = it === ObjectProto;
  var names = gOPN(IS_OP ? OPSymbols : toIObject(it));
  var result = [];
  var i = 0;
  var key;
  while (names.length > i) {
    if (has(AllSymbols, key = names[i++]) && (IS_OP ? has(ObjectProto, key) : true)) result.push(AllSymbols[key]);
  } return result;
};

// 19.4.1.1 Symbol([description])
if (!USE_NATIVE) {
  $Symbol = function Symbol() {
    if (this instanceof $Symbol) throw TypeError('Symbol is not a constructor!');
    var tag = uid(arguments.length > 0 ? arguments[0] : undefined);
    var $set = function (value) {
      if (this === ObjectProto) $set.call(OPSymbols, value);
      if (has(this, HIDDEN) && has(this[HIDDEN], tag)) this[HIDDEN][tag] = false;
      setSymbolDesc(this, tag, createDesc(1, value));
    };
    if (DESCRIPTORS && setter) setSymbolDesc(ObjectProto, tag, { configurable: true, set: $set });
    return wrap(tag);
  };
  redefine($Symbol[PROTOTYPE], 'toString', function toString() {
    return this._k;
  });

  $GOPD.f = $getOwnPropertyDescriptor;
  $DP.f = $defineProperty;
  __webpack_require__(194).f = gOPNExt.f = $getOwnPropertyNames;
  __webpack_require__(55).f = $propertyIsEnumerable;
  __webpack_require__(171).f = $getOwnPropertySymbols;

  if (DESCRIPTORS && !__webpack_require__(34)) {
    redefine(ObjectProto, 'propertyIsEnumerable', $propertyIsEnumerable, true);
  }

  wksExt.f = function (name) {
    return wrap(wks(name));
  };
}

$export($export.G + $export.W + $export.F * !USE_NATIVE, { Symbol: $Symbol });

for (var es6Symbols = (
  // 19.4.2.2, 19.4.2.3, 19.4.2.4, 19.4.2.6, 19.4.2.8, 19.4.2.9, 19.4.2.10, 19.4.2.11, 19.4.2.12, 19.4.2.13, 19.4.2.14
  'hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables'
).split(','), j = 0; es6Symbols.length > j;)wks(es6Symbols[j++]);

for (var wellKnownSymbols = $keys(wks.store), k = 0; wellKnownSymbols.length > k;) wksDefine(wellKnownSymbols[k++]);

$export($export.S + $export.F * !USE_NATIVE, 'Symbol', {
  // 19.4.2.1 Symbol.for(key)
  'for': function (key) {
    return has(SymbolRegistry, key += '')
      ? SymbolRegistry[key]
      : SymbolRegistry[key] = $Symbol(key);
  },
  // 19.4.2.5 Symbol.keyFor(sym)
  keyFor: function keyFor(sym) {
    if (!isSymbol(sym)) throw TypeError(sym + ' is not a symbol!');
    for (var key in SymbolRegistry) if (SymbolRegistry[key] === sym) return key;
  },
  useSetter: function () { setter = true; },
  useSimple: function () { setter = false; }
});

$export($export.S + $export.F * !USE_NATIVE, 'Object', {
  // 19.1.2.2 Object.create(O [, Properties])
  create: $create,
  // 19.1.2.4 Object.defineProperty(O, P, Attributes)
  defineProperty: $defineProperty,
  // 19.1.2.3 Object.defineProperties(O, Properties)
  defineProperties: $defineProperties,
  // 19.1.2.6 Object.getOwnPropertyDescriptor(O, P)
  getOwnPropertyDescriptor: $getOwnPropertyDescriptor,
  // 19.1.2.7 Object.getOwnPropertyNames(O)
  getOwnPropertyNames: $getOwnPropertyNames,
  // 19.1.2.8 Object.getOwnPropertySymbols(O)
  getOwnPropertySymbols: $getOwnPropertySymbols
});

// 24.3.2 JSON.stringify(value [, replacer [, space]])
$JSON && $export($export.S + $export.F * (!USE_NATIVE || $fails(function () {
  var S = $Symbol();
  // MS Edge converts symbol values to JSON as {}
  // WebKit converts symbol values to JSON as null
  // V8 throws on boxed symbols
  return _stringify([S]) != '[null]' || _stringify({ a: S }) != '{}' || _stringify(Object(S)) != '{}';
})), 'JSON', {
  stringify: function stringify(it) {
    var args = [it];
    var i = 1;
    var replacer, $replacer;
    while (arguments.length > i) args.push(arguments[i++]);
    $replacer = replacer = args[1];
    if (!isObject(replacer) && it === undefined || isSymbol(it)) return; // IE8 returns string on undefined
    if (!isArray(replacer)) replacer = function (key, value) {
      if ($replacer) value = $replacer.call(this, key, value);
      if (!isSymbol(value)) return value;
    };
    args[1] = replacer;
    return _stringify.apply($JSON, args);
  }
});

// 19.4.3.4 Symbol.prototype[@@toPrimitive](hint)
$Symbol[PROTOTYPE][TO_PRIMITIVE] || __webpack_require__(7)($Symbol[PROTOTYPE], TO_PRIMITIVE, $Symbol[PROTOTYPE].valueOf);
// 19.4.3.5 Symbol.prototype[@@toStringTag]
setToStringTag($Symbol, 'Symbol');
// 20.2.1.9 Math[@@toStringTag]
setToStringTag(Math, 'Math', true);
// 24.3.3 JSON[@@toStringTag]
setToStringTag(global.JSON, 'JSON', true);


/***/ }),

/***/ 207:
/***/ (function(module, exports, __webpack_require__) {

var META = __webpack_require__(33)('meta');
var isObject = __webpack_require__(10);
var has = __webpack_require__(11);
var setDesc = __webpack_require__(9).f;
var id = 0;
var isExtensible = Object.isExtensible || function () {
  return true;
};
var FREEZE = !__webpack_require__(30)(function () {
  return isExtensible(Object.preventExtensions({}));
});
var setMeta = function (it) {
  setDesc(it, META, { value: {
    i: 'O' + ++id, // object ID
    w: {}          // weak collections IDs
  } });
};
var fastKey = function (it, create) {
  // return primitive with prefix
  if (!isObject(it)) return typeof it == 'symbol' ? it : (typeof it == 'string' ? 'S' : 'P') + it;
  if (!has(it, META)) {
    // can't set metadata to uncaught frozen object
    if (!isExtensible(it)) return 'F';
    // not necessary to add metadata
    if (!create) return 'E';
    // add missing metadata
    setMeta(it);
  // return object ID
  } return it[META].i;
};
var getWeak = function (it, create) {
  if (!has(it, META)) {
    // can't set metadata to uncaught frozen object
    if (!isExtensible(it)) return true;
    // not necessary to add metadata
    if (!create) return false;
    // add missing metadata
    setMeta(it);
  // return hash weak collections IDs
  } return it[META].w;
};
// add metadata on freeze-family methods calling
var onFreeze = function (it) {
  if (FREEZE && meta.NEED && isExtensible(it) && !has(it, META)) setMeta(it);
  return it;
};
var meta = module.exports = {
  KEY: META,
  NEED: false,
  fastKey: fastKey,
  getWeak: getWeak,
  onFreeze: onFreeze
};


/***/ }),

/***/ 208:
/***/ (function(module, exports, __webpack_require__) {

// all enumerable object keys, includes symbols
var getKeys = __webpack_require__(31);
var gOPS = __webpack_require__(171);
var pIE = __webpack_require__(55);
module.exports = function (it) {
  var result = getKeys(it);
  var getSymbols = gOPS.f;
  if (getSymbols) {
    var symbols = getSymbols(it);
    var isEnum = pIE.f;
    var i = 0;
    var key;
    while (symbols.length > i) if (isEnum.call(it, key = symbols[i++])) result.push(key);
  } return result;
};


/***/ }),

/***/ 209:
/***/ (function(module, exports, __webpack_require__) {

// 7.2.2 IsArray(argument)
var cof = __webpack_require__(14);
module.exports = Array.isArray || function isArray(arg) {
  return cof(arg) == 'Array';
};


/***/ }),

/***/ 210:
/***/ (function(module, exports, __webpack_require__) {

// fallback for IE11 buggy Object.getOwnPropertyNames with iframe and window
var toIObject = __webpack_require__(12);
var gOPN = __webpack_require__(194).f;
var toString = {}.toString;

var windowNames = typeof window == 'object' && window && Object.getOwnPropertyNames
  ? Object.getOwnPropertyNames(window) : [];

var getWindowNames = function (it) {
  try {
    return gOPN(it);
  } catch (e) {
    return windowNames.slice();
  }
};

module.exports.f = function getOwnPropertyNames(it) {
  return windowNames && toString.call(it) == '[object Window]' ? getWindowNames(it) : gOPN(toIObject(it));
};


/***/ }),

/***/ 211:
/***/ (function(module, exports, __webpack_require__) {

var pIE = __webpack_require__(55);
var createDesc = __webpack_require__(32);
var toIObject = __webpack_require__(12);
var toPrimitive = __webpack_require__(59);
var has = __webpack_require__(11);
var IE8_DOM_DEFINE = __webpack_require__(60);
var gOPD = Object.getOwnPropertyDescriptor;

exports.f = __webpack_require__(6) ? gOPD : function getOwnPropertyDescriptor(O, P) {
  O = toIObject(O);
  P = toPrimitive(P, true);
  if (IE8_DOM_DEFINE) try {
    return gOPD(O, P);
  } catch (e) { /* empty */ }
  if (has(O, P)) return createDesc(!pIE.f.call(O, P), O[P]);
};


/***/ }),

/***/ 212:
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(180)('asyncIterator');


/***/ }),

/***/ 213:
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(180)('observable');


/***/ }),

/***/ 307:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_typeof__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_typeof___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_typeof__);

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
    name: 'passportPersonalAccessTokens',
    /*
     * The component's data.
     */
    data: function data() {
        return {
            accessToken: null,
            showCreate: false,
            showAccess: false,
            tokens: [],
            scopes: [],

            form: {
                name: '',
                scopes: [],
                errors: []
            }
        };
    },


    /**
     * Prepare the component (Vue 1.x).
     */
    ready: function ready() {
        this.prepareComponent();
    },


    /**
     * Prepare the component (Vue 2.x).
     */
    mounted: function mounted() {
        this.prepareComponent();
    },


    methods: {
        /**
         * Prepare the component.
         */
        prepareComponent: function prepareComponent() {
            this.getTokens();
            this.getScopes();

            if (this.showCreate) this.$el.querySelector('#create-token-name').focus();
        },


        /**
         * Get all of the personal access tokens for the user.
         */
        getTokens: function getTokens() {
            var _this = this;

            axios.get('/oauth/personal-access-tokens').then(function (response) {
                _this.tokens = response.data;
            });
        },


        /**
         * Get all of the available scopes.
         */
        getScopes: function getScopes() {
            var _this2 = this;

            axios.get('/oauth/scopes').then(function (response) {
                _this2.scopes = response.data;
            });
        },


        /**
         * Show the form for creating new tokens.
         */
        showCreateTokenForm: function showCreateTokenForm() {
            this.showCreate = true;
        },


        /**
         * Create a new personal access token.
         */
        store: function store() {
            var _this3 = this;

            this.accessToken = null;

            this.form.errors = [];

            axios.post('/oauth/personal-access-tokens', this.form).then(function (response) {
                _this3.form.name = '';
                _this3.form.scopes = [];
                _this3.form.errors = [];

                _this3.tokens.push(response.data.token);

                _this3.showAccessToken(response.data.accessToken);
            }).catch(function (error) {
                if (__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_typeof___default()(error.response.data) === 'object') {
                    _this3.form.errors = _.flatten(_.toArray(error.response.data));
                } else {
                    _this3.form.errors = ['Something went wrong. Please try again.'];
                }
            });
        },


        /**
         * Toggle the given scope in the list of assigned scopes.
         */
        toggleScope: function toggleScope(scope) {
            if (this.scopeIsAssigned(scope)) {
                this.form.scopes = _.reject(this.form.scopes, function (s) {
                    return s == scope;
                });
            } else {
                this.form.scopes.push(scope);
            }
        },


        /**
         * Determine if the given scope has been assigned to the token.
         */
        scopeIsAssigned: function scopeIsAssigned(scope) {
            return _.indexOf(this.form.scopes, scope) >= 0;
        },


        /**
         * Show the given access token to the user.
         */
        showAccessToken: function showAccessToken(accessToken) {
            this.accessToken = accessToken;

            this.showAccess = true;
        },


        /**
         * Revoke the given token.
         */
        revoke: function revoke(token) {
            var _this4 = this;

            axios.delete('/oauth/personal-access-tokens/' + token.id).then(function (response) {
                _this4.getTokens();
            });
        }
    }
});

/***/ }),

/***/ 308:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("section", { staticClass: "hero" }, [
    _c("div", { staticClass: "hero-body" }, [
      _c("h1", { staticClass: "title" }, [
        _vm._v("\n            Personal Access Tokens\n        ")
      ]),
      _vm._v(" "),
      _c("h2", { staticClass: "subtitle" }, [
        _c(
          "a",
          {
            staticClass: "button is-primary is-small",
            on: { click: _vm.showCreateTokenForm }
          },
          [_vm._v("\n                Create New Token\n            ")]
        ),
        _vm._v(" "),
        _c(
          "a",
          {
            staticClass: "button is-small is-success",
            attrs: { href: "/security/api/client" }
          },
          [_vm._v("\n                Clients\n            ")]
        )
      ]),
      _vm._v(" "),
      _vm.tokens.length === 0
        ? _c("p", { staticClass: "m-b-none" }, [
            _vm._v(
              "\n            You have not created any personal access tokens.\n        "
            )
          ])
        : _vm._e(),
      _vm._v(" "),
      _vm.tokens.length > 0
        ? _c("table", { staticClass: "table is-bordered is-fullwidth" }, [
            _vm._m(0),
            _vm._v(" "),
            _c(
              "tbody",
              _vm._l(_vm.tokens, function(token) {
                return _c("tr", [
                  _c("td", { staticStyle: { "vertical-align": "middle" } }, [
                    _vm._v(
                      "\n                    " +
                        _vm._s(token.name) +
                        "\n                "
                    )
                  ]),
                  _vm._v(" "),
                  _c("td", { staticStyle: { "vertical-align": "middle" } }, [
                    _c(
                      "a",
                      {
                        staticClass: "has-text-danger",
                        on: {
                          click: function($event) {
                            _vm.revoke(token)
                          }
                        }
                      },
                      [
                        _vm._v(
                          "\n                        Delete\n                    "
                        )
                      ]
                    )
                  ])
                ])
              })
            )
          ])
        : _vm._e(),
      _vm._v(" "),
      _vm.showCreate
        ? _c(
            "div",
            {
              staticClass: "modal is-active",
              attrs: { id: "modal-create-token" }
            },
            [
              _c("div", { staticClass: "modal-background" }),
              _vm._v(" "),
              _c("div", { staticClass: "modal-card" }, [
                _c("header", { staticClass: "modal-card-head" }, [
                  _c("p", { staticClass: "modal-card-title" }, [
                    _vm._v("Create Token")
                  ]),
                  _vm._v(" "),
                  _c("button", {
                    staticClass: "delete",
                    attrs: { "aria-label": "close" },
                    on: {
                      click: function($event) {
                        $event.preventDefault()
                        _vm.showCreate = false
                      }
                    }
                  })
                ]),
                _vm._v(" "),
                _c("section", { staticClass: "modal-card-body" }, [
                  _vm.form.errors.length > 0
                    ? _c("div", { staticClass: "alert alert-danger" }, [
                        _vm._m(1),
                        _vm._v(" "),
                        _c("br"),
                        _vm._v(" "),
                        _c(
                          "ul",
                          _vm._l(_vm.form.errors, function(error) {
                            return _c("li", [
                              _vm._v(
                                "\n                                " +
                                  _vm._s(error) +
                                  "\n                            "
                              )
                            ])
                          })
                        )
                      ])
                    : _vm._e(),
                  _vm._v(" "),
                  _c(
                    "form",
                    {
                      staticClass: "form-horizontal",
                      attrs: { role: "form" },
                      on: {
                        submit: function($event) {
                          $event.preventDefault()
                          _vm.store($event)
                        }
                      }
                    },
                    [
                      _c("div", { staticClass: "field" }, [
                        _c("label", { staticClass: "label" }, [_vm._v("Name")]),
                        _vm._v(" "),
                        _c("div", { staticClass: "control" }, [
                          _c("input", {
                            directives: [
                              {
                                name: "model",
                                rawName: "v-model",
                                value: _vm.form.name,
                                expression: "form.name"
                              }
                            ],
                            staticClass: "input",
                            attrs: {
                              id: "create-token-name",
                              type: "text",
                              name: "name"
                            },
                            domProps: { value: _vm.form.name },
                            on: {
                              input: function($event) {
                                if ($event.target.composing) {
                                  return
                                }
                                _vm.$set(_vm.form, "name", $event.target.value)
                              }
                            }
                          })
                        ])
                      ]),
                      _vm._v(" "),
                      _vm.scopes.length > 0
                        ? _c("div", { staticClass: "form-group" }, [
                            _c("label", { staticClass: "label" }, [
                              _vm._v("Scopes")
                            ]),
                            _vm._v(" "),
                            _c(
                              "div",
                              { staticClass: "control" },
                              _vm._l(_vm.scopes, function(scope) {
                                return _c("div", [
                                  _c("div", { staticClass: "checkbox" }, [
                                    _c("label", [
                                      _c("input", {
                                        attrs: { type: "checkbox" },
                                        domProps: {
                                          checked: _vm.scopeIsAssigned(scope.id)
                                        },
                                        on: {
                                          click: function($event) {
                                            _vm.toggleScope(scope.id)
                                          }
                                        }
                                      }),
                                      _vm._v(
                                        "\n\n                                            " +
                                          _vm._s(scope.id) +
                                          "\n                                        "
                                      )
                                    ])
                                  ])
                                ])
                              })
                            )
                          ])
                        : _vm._e()
                    ]
                  )
                ]),
                _vm._v(" "),
                _c("footer", { staticClass: "modal-card-foot" }, [
                  _c(
                    "button",
                    {
                      staticClass: "button is-success",
                      on: {
                        click: function($event) {
                          $event.preventDefault()
                          _vm.store($event)
                        }
                      }
                    },
                    [_vm._v("Save changes")]
                  ),
                  _vm._v(" "),
                  _c(
                    "button",
                    {
                      staticClass: "button",
                      on: {
                        click: function($event) {
                          $event.preventDefault()
                          _vm.showCreate = false
                        }
                      }
                    },
                    [_vm._v("Cancel")]
                  )
                ])
              ])
            ]
          )
        : _vm._e(),
      _vm._v(" "),
      _vm.showAccess
        ? _c(
            "div",
            {
              staticClass: "modal is-active",
              attrs: { id: "modal-access-token" }
            },
            [
              _c("div", { staticClass: "modal-background" }),
              _vm._v(" "),
              _c("div", { staticClass: "modal-card" }, [
                _c("header", { staticClass: "modal-card-head" }, [
                  _c("p", { staticClass: "modal-card-title" }, [
                    _vm._v("Personal Access Token")
                  ]),
                  _vm._v(" "),
                  _c("button", {
                    staticClass: "delete",
                    attrs: { "aria-label": "close" },
                    on: {
                      click: function($event) {
                        $event.preventDefault()
                        _vm.showAccess = false
                      }
                    }
                  })
                ]),
                _vm._v(" "),
                _c("section", { staticClass: "modal-card-body" }, [
                  _c("p", [
                    _vm._v(
                      "\n                        Here is your new personal access token. This is the only time it will be shown so don't lose it!\n                        You may now use this token to make API requests.\n                    "
                    )
                  ]),
                  _vm._v(" "),
                  _c("pre", [_c("code", [_vm._v(_vm._s(_vm.accessToken))])])
                ]),
                _vm._v(" "),
                _c("footer", { staticClass: "modal-card-foot" }, [
                  _c(
                    "button",
                    {
                      staticClass: "button",
                      on: {
                        click: function($event) {
                          $event.preventDefault()
                          _vm.showAccess = false
                        }
                      }
                    },
                    [_vm._v("Cancel")]
                  )
                ])
              ])
            ]
          )
        : _vm._e()
    ])
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("thead", [
      _c("tr", [_c("th", [_vm._v("Name")]), _vm._v(" "), _c("th")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("p", [
      _c("strong", [_vm._v("Whoops!")]),
      _vm._v(" Something went wrong!")
    ])
  }
]
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-50e40461", module.exports)
  }
}

/***/ })

});