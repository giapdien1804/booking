webpackJsonp([33],{

/***/ 151:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(18)
/* script */
var __vue_script__ = __webpack_require__(287)
/* template */
var __vue_template__ = __webpack_require__(288)
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
Component.options.__file = "resources\\assets\\js\\components\\passport\\Clients.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {  return key !== "default" && key.substr(0, 2) !== "__"})) {  console.error("named exports are not supported in *.vue files.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-3f99fc75", Component.options)
  } else {
    hotAPI.reload("data-v-3f99fc75", Component.options)
' + '  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 156:
/***/ (function(module, exports) {

exports.f = Object.getOwnPropertySymbols;


/***/ }),

/***/ 164:
/***/ (function(module, exports, __webpack_require__) {

exports.f = __webpack_require__(1);


/***/ }),

/***/ 165:
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(3);
var core = __webpack_require__(2);
var LIBRARY = __webpack_require__(51);
var wksExt = __webpack_require__(164);
var defineProperty = __webpack_require__(7).f;
module.exports = function (name) {
  var $Symbol = core.Symbol || (core.Symbol = LIBRARY ? {} : global.Symbol || {});
  if (name.charAt(0) != '_' && !(name in $Symbol)) defineProperty($Symbol, name, { value: wksExt.f(name) });
};


/***/ }),

/***/ 179:
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.7 / 15.2.3.4 Object.getOwnPropertyNames(O)
var $keys = __webpack_require__(53);
var hiddenKeys = __webpack_require__(27).concat('length', 'prototype');

exports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
  return $keys(O, hiddenKeys);
};


/***/ }),

/***/ 182:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _iterator = __webpack_require__(183);

var _iterator2 = _interopRequireDefault(_iterator);

var _symbol = __webpack_require__(185);

var _symbol2 = _interopRequireDefault(_symbol);

var _typeof = typeof _symbol2.default === "function" && typeof _iterator2.default === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof _symbol2.default === "function" && obj.constructor === _symbol2.default && obj !== _symbol2.default.prototype ? "symbol" : typeof obj; };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = typeof _symbol2.default === "function" && _typeof(_iterator2.default) === "symbol" ? function (obj) {
  return typeof obj === "undefined" ? "undefined" : _typeof(obj);
} : function (obj) {
  return obj && typeof _symbol2.default === "function" && obj.constructor === _symbol2.default && obj !== _symbol2.default.prototype ? "symbol" : typeof obj === "undefined" ? "undefined" : _typeof(obj);
};

/***/ }),

/***/ 183:
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(184), __esModule: true };

/***/ }),

/***/ 184:
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(30);
__webpack_require__(28);
module.exports = __webpack_require__(164).f('iterator');


/***/ }),

/***/ 185:
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(186), __esModule: true };

/***/ }),

/***/ 186:
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(187);
__webpack_require__(193);
__webpack_require__(194);
__webpack_require__(195);
module.exports = __webpack_require__(2).Symbol;


/***/ }),

/***/ 187:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// ECMAScript 6 symbols shim
var global = __webpack_require__(3);
var has = __webpack_require__(8);
var DESCRIPTORS = __webpack_require__(4);
var $export = __webpack_require__(12);
var redefine = __webpack_require__(54);
var META = __webpack_require__(188).KEY;
var $fails = __webpack_require__(21);
var shared = __webpack_require__(26);
var setToStringTag = __webpack_require__(29);
var uid = __webpack_require__(24);
var wks = __webpack_require__(1);
var wksExt = __webpack_require__(164);
var wksDefine = __webpack_require__(165);
var enumKeys = __webpack_require__(189);
var isArray = __webpack_require__(190);
var anObject = __webpack_require__(11);
var isObject = __webpack_require__(13);
var toIObject = __webpack_require__(9);
var toPrimitive = __webpack_require__(50);
var createDesc = __webpack_require__(23);
var _create = __webpack_require__(55);
var gOPNExt = __webpack_require__(191);
var $GOPD = __webpack_require__(192);
var $DP = __webpack_require__(7);
var $keys = __webpack_require__(22);
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
  __webpack_require__(179).f = gOPNExt.f = $getOwnPropertyNames;
  __webpack_require__(46).f = $propertyIsEnumerable;
  __webpack_require__(156).f = $getOwnPropertySymbols;

  if (DESCRIPTORS && !__webpack_require__(51)) {
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
$Symbol[PROTOTYPE][TO_PRIMITIVE] || __webpack_require__(5)($Symbol[PROTOTYPE], TO_PRIMITIVE, $Symbol[PROTOTYPE].valueOf);
// 19.4.3.5 Symbol.prototype[@@toStringTag]
setToStringTag($Symbol, 'Symbol');
// 20.2.1.9 Math[@@toStringTag]
setToStringTag(Math, 'Math', true);
// 24.3.3 JSON[@@toStringTag]
setToStringTag(global.JSON, 'JSON', true);


/***/ }),

/***/ 188:
/***/ (function(module, exports, __webpack_require__) {

var META = __webpack_require__(24)('meta');
var isObject = __webpack_require__(13);
var has = __webpack_require__(8);
var setDesc = __webpack_require__(7).f;
var id = 0;
var isExtensible = Object.isExtensible || function () {
  return true;
};
var FREEZE = !__webpack_require__(21)(function () {
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

/***/ 189:
/***/ (function(module, exports, __webpack_require__) {

// all enumerable object keys, includes symbols
var getKeys = __webpack_require__(22);
var gOPS = __webpack_require__(156);
var pIE = __webpack_require__(46);
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

/***/ 190:
/***/ (function(module, exports, __webpack_require__) {

// 7.2.2 IsArray(argument)
var cof = __webpack_require__(25);
module.exports = Array.isArray || function isArray(arg) {
  return cof(arg) == 'Array';
};


/***/ }),

/***/ 191:
/***/ (function(module, exports, __webpack_require__) {

// fallback for IE11 buggy Object.getOwnPropertyNames with iframe and window
var toIObject = __webpack_require__(9);
var gOPN = __webpack_require__(179).f;
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

/***/ 192:
/***/ (function(module, exports, __webpack_require__) {

var pIE = __webpack_require__(46);
var createDesc = __webpack_require__(23);
var toIObject = __webpack_require__(9);
var toPrimitive = __webpack_require__(50);
var has = __webpack_require__(8);
var IE8_DOM_DEFINE = __webpack_require__(52);
var gOPD = Object.getOwnPropertyDescriptor;

exports.f = __webpack_require__(4) ? gOPD : function getOwnPropertyDescriptor(O, P) {
  O = toIObject(O);
  P = toPrimitive(P, true);
  if (IE8_DOM_DEFINE) try {
    return gOPD(O, P);
  } catch (e) { /* empty */ }
  if (has(O, P)) return createDesc(!pIE.f.call(O, P), O[P]);
};


/***/ }),

/***/ 193:
/***/ (function(module, exports) {



/***/ }),

/***/ 194:
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(165)('asyncIterator');


/***/ }),

/***/ 195:
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(165)('observable');


/***/ }),

/***/ 287:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_typeof__ = __webpack_require__(182);
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  name: 'passportClients',
  data: function data() {
    return {
      clients: [],
      showCreate: false,
      showEdit: false,
      createForm: {
        errors: [],
        name: '',
        redirect: ''
      },

      editForm: {
        errors: [],
        name: '',
        redirect: ''
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
      this.getClients();
      if (this.showCreate) this.$el.querySelector('#create-client-name').focus();

      if (this.showEdit) this.$el.querySelector('#edit-client-name').focus();
    },


    /**
     * Get all of the OAuth clients for the user.
     */
    getClients: function getClients() {
      var _this = this;

      axios.get('/oauth/clients').then(function (response) {
        _this.clients = response.data;
      });
    },


    /**
     * Show the form for creating new clients.
     */
    showCreateClientForm: function showCreateClientForm() {
      this.showCreate = true;
    },


    /**
     * Create a new OAuth client for the user.
     */
    store: function store() {
      this.persistClient('post', '/oauth/clients', this.createForm, '#modal-create-client');
    },


    /**
     * Edit the given client.
     */
    edit: function edit(client) {
      this.editForm.id = client.id;
      this.editForm.name = client.name;
      this.editForm.redirect = client.redirect;

      this.showEdit = true;
    },


    /**
     * Update the client being edited.
     */
    update: function update() {
      this.persistClient('put', '/oauth/clients/' + this.editForm.id, this.editForm, '#modal-edit-client');
    },


    /**
     * Persist the client to storage using the given form.
     */
    persistClient: function persistClient(method, uri, form, modal) {
      var _this2 = this;

      form.errors = [];

      axios[method](uri, form).then(function (response) {
        _this2.getClients();

        form.name = '';
        form.redirect = '';
        form.errors = [];

        $(modal).modal('hide');
      }).catch(function (error) {
        if (__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_typeof___default()(error.response.data) === 'object') {
          form.errors = _.flatten(_.toArray(error.response.data));
        } else {
          form.errors = ['Something went wrong. Please try again.'];
        }
      });
    },


    /**
     * Destroy the given client.
     */
    destroy: function destroy(client) {
      var _this3 = this;

      window.Message({
        title: 'Confirm ?',
        message: 'You want to delete the client ?',
        type: 'danger',
        onConfirm: function onConfirm() {
          axios.delete('/oauth/clients/' + client.id).then(function (response) {
            _this3.getClients();
          });
        }
      });
    }
  }
});

/***/ }),

/***/ 288:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("section", { staticClass: "hero" }, [
    _c("div", { staticClass: "hero-body" }, [
      _c("h1", { staticClass: "title" }, [
        _vm._v("\n            OAuth Clients\n        ")
      ]),
      _vm._v(" "),
      _c("h2", { staticClass: "subtitle" }, [
        _c(
          "a",
          {
            staticClass: "button is-small is-primary",
            on: { click: _vm.showCreateClientForm }
          },
          [_vm._v("\n                Create New Client\n            ")]
        ),
        _vm._v(" "),
        _c(
          "a",
          {
            staticClass: "button is-small is-success",
            attrs: { href: "/security/api/access-token" }
          },
          [_vm._v("\n                Personal Access Tokens\n            ")]
        )
      ]),
      _vm._v(" "),
      _vm.clients.length === 0
        ? _c("p", { staticClass: "m-b-none" }, [
            _vm._v(
              "\n            You have not created any OAuth clients.\n        "
            )
          ])
        : _vm._e(),
      _vm._v(" "),
      _vm.clients.length > 0
        ? _c("table", { staticClass: "table is-bordered is-fullwidth" }, [
            _vm._m(0, false, false),
            _vm._v(" "),
            _c(
              "tbody",
              _vm._l(_vm.clients, function(client) {
                return _c("tr", [
                  _c("td", { staticStyle: { "vertical-align": "middle" } }, [
                    _vm._v(
                      "\n                    " +
                        _vm._s(client.id) +
                        "\n                "
                    )
                  ]),
                  _vm._v(" "),
                  _c("td", { staticStyle: { "vertical-align": "middle" } }, [
                    _vm._v(
                      "\n                    " +
                        _vm._s(client.name) +
                        "\n                "
                    )
                  ]),
                  _vm._v(" "),
                  _c("td", { staticStyle: { "vertical-align": "middle" } }, [
                    _c("code", [_vm._v(_vm._s(client.secret))])
                  ]),
                  _vm._v(" "),
                  _c("td", { staticStyle: { "vertical-align": "middle" } }, [
                    _c(
                      "a",
                      {
                        staticClass: "action-link",
                        on: {
                          click: function($event) {
                            _vm.edit(client)
                          }
                        }
                      },
                      [_vm._m(1, true, false)]
                    )
                  ]),
                  _vm._v(" "),
                  _c("td", { staticStyle: { "vertical-align": "middle" } }, [
                    _c(
                      "a",
                      {
                        staticClass: "action-link text-danger",
                        on: {
                          click: function($event) {
                            _vm.destroy(client)
                          }
                        }
                      },
                      [_vm._m(2, true, false)]
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
              attrs: { id: "modal-create-client" }
            },
            [
              _c("div", { staticClass: "modal-background" }),
              _vm._v(" "),
              _c("div", { staticClass: "modal-card" }, [
                _c("header", { staticClass: "modal-card-head" }, [
                  _c("p", { staticClass: "modal-card-title" }, [
                    _vm._v("Create client")
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
                  _vm.createForm.errors.length > 0
                    ? _c("div", { staticClass: "alert alert-danger" }, [
                        _vm._m(3, false, false),
                        _vm._v(" "),
                        _c("br"),
                        _vm._v(" "),
                        _c(
                          "ul",
                          _vm._l(_vm.createForm.errors, function(error) {
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
                    { staticClass: "form-horizontal", attrs: { role: "form" } },
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
                                value: _vm.createForm.name,
                                expression: "createForm.name"
                              }
                            ],
                            staticClass: "input",
                            attrs: { id: "create-client-name", type: "text" },
                            domProps: { value: _vm.createForm.name },
                            on: {
                              keyup: function($event) {
                                if (
                                  !("button" in $event) &&
                                  _vm._k(
                                    $event.keyCode,
                                    "enter",
                                    13,
                                    $event.key
                                  )
                                ) {
                                  return null
                                }
                                _vm.store($event)
                              },
                              input: function($event) {
                                if ($event.target.composing) {
                                  return
                                }
                                _vm.$set(
                                  _vm.createForm,
                                  "name",
                                  $event.target.value
                                )
                              }
                            }
                          })
                        ]),
                        _vm._v(" "),
                        _c("p", { staticClass: "help is-info" }, [
                          _vm._v(
                            "\n                                Something your users will recognize and trust.\n                            "
                          )
                        ])
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "field" }, [
                        _c("label", { staticClass: "label" }, [
                          _vm._v("Redirect URL")
                        ]),
                        _vm._v(" "),
                        _c("div", { staticClass: "control" }, [
                          _c("input", {
                            directives: [
                              {
                                name: "model",
                                rawName: "v-model",
                                value: _vm.createForm.redirect,
                                expression: "createForm.redirect"
                              }
                            ],
                            staticClass: "input",
                            attrs: { type: "text", name: "redirect" },
                            domProps: { value: _vm.createForm.redirect },
                            on: {
                              keyup: function($event) {
                                if (
                                  !("button" in $event) &&
                                  _vm._k(
                                    $event.keyCode,
                                    "enter",
                                    13,
                                    $event.key
                                  )
                                ) {
                                  return null
                                }
                                _vm.store($event)
                              },
                              input: function($event) {
                                if ($event.target.composing) {
                                  return
                                }
                                _vm.$set(
                                  _vm.createForm,
                                  "redirect",
                                  $event.target.value
                                )
                              }
                            }
                          })
                        ]),
                        _vm._v(" "),
                        _c("p", { staticClass: "help is-info" }, [
                          _vm._v(
                            "\n                                Your application's authorization callback URL.\n                            "
                          )
                        ])
                      ])
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
      _vm.showEdit
        ? _c(
            "div",
            { staticClass: "modal", attrs: { id: "modal-edit-client" } },
            [
              _c("div", { staticClass: "modal-background" }),
              _vm._v(" "),
              _c("div", { staticClass: "modal-card" }, [
                _c("header", { staticClass: "modal-card-head" }, [
                  _c("p", { staticClass: "modal-card-title" }, [
                    _vm._v("Edit client")
                  ]),
                  _vm._v(" "),
                  _c("button", {
                    staticClass: "delete",
                    attrs: { "aria-label": "close" },
                    on: {
                      click: function($event) {
                        $event.preventDefault()
                        _vm.showEdit = false
                      }
                    }
                  })
                ]),
                _vm._v(" "),
                _c("section", { staticClass: "modal-card-body" }, [
                  _vm.editForm.errors.length > 0
                    ? _c("div", { staticClass: "alert alert-danger" }, [
                        _vm._m(4, false, false),
                        _vm._v(" "),
                        _c("br"),
                        _vm._v(" "),
                        _c(
                          "ul",
                          _vm._l(_vm.editForm.errors, function(error) {
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
                    { staticClass: "form-horizontal", attrs: { role: "form" } },
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
                                value: _vm.editForm.name,
                                expression: "editForm.name"
                              }
                            ],
                            staticClass: "input",
                            attrs: { id: "edit-client-name", type: "text" },
                            domProps: { value: _vm.editForm.name },
                            on: {
                              keyup: function($event) {
                                if (
                                  !("button" in $event) &&
                                  _vm._k(
                                    $event.keyCode,
                                    "enter",
                                    13,
                                    $event.key
                                  )
                                ) {
                                  return null
                                }
                                _vm.update($event)
                              },
                              input: function($event) {
                                if ($event.target.composing) {
                                  return
                                }
                                _vm.$set(
                                  _vm.editForm,
                                  "name",
                                  $event.target.value
                                )
                              }
                            }
                          })
                        ]),
                        _vm._v(" "),
                        _c("p", { staticClass: "help is-info" }, [
                          _vm._v(
                            "\n                                Something your users will recognize and trust.\n                            "
                          )
                        ])
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "field" }, [
                        _c("label", { staticClass: "label" }, [
                          _vm._v("Redirect URL")
                        ]),
                        _vm._v(" "),
                        _c("div", { staticClass: "control" }, [
                          _c("input", {
                            directives: [
                              {
                                name: "model",
                                rawName: "v-model",
                                value: _vm.editForm.redirect,
                                expression: "editForm.redirect"
                              }
                            ],
                            staticClass: "input",
                            attrs: { type: "text", name: "redirect" },
                            domProps: { value: _vm.editForm.redirect },
                            on: {
                              keyup: function($event) {
                                if (
                                  !("button" in $event) &&
                                  _vm._k(
                                    $event.keyCode,
                                    "enter",
                                    13,
                                    $event.key
                                  )
                                ) {
                                  return null
                                }
                                _vm.update($event)
                              },
                              input: function($event) {
                                if ($event.target.composing) {
                                  return
                                }
                                _vm.$set(
                                  _vm.editForm,
                                  "redirect",
                                  $event.target.value
                                )
                              }
                            }
                          })
                        ]),
                        _vm._v(" "),
                        _c("p", { staticClass: "help is-info" }, [
                          _vm._v(
                            "\n                                Your application's authorization callback URL.\n                            "
                          )
                        ])
                      ])
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
                          _vm.update($event)
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
                          _vm.showEdit = false
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
      _c("tr", [
        _c("th", [_vm._v("Client ID")]),
        _vm._v(" "),
        _c("th", [_vm._v("Name")]),
        _vm._v(" "),
        _c("th", [_vm._v("Secret")]),
        _vm._v(" "),
        _c("th"),
        _vm._v(" "),
        _c("th")
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("span", { staticClass: "icon" }, [
      _c("i", { staticClass: "fa fa-edit" })
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("span", { staticClass: "icon" }, [
      _c("i", { staticClass: "fa fa-trash" })
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
    require("vue-hot-reload-api")      .rerender("data-v-3f99fc75", module.exports)
  }
}

/***/ })

});