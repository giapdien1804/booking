webpackJsonp([5],{

/***/ 109:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(181)
}
var normalizeComponent = __webpack_require__(3)
/* script */
var __vue_script__ = __webpack_require__(183)
/* template */
var __vue_template__ = __webpack_require__(185)
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-58dcd272"
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
Component.options.__file = "resources\\assets\\js\\components\\modules\\location\\GoogleMapInput.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {  return key !== "default" && key.substr(0, 2) !== "__"})) {  console.error("named exports are not supported in *.vue files.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-58dcd272", Component.options)
  } else {
    hotAPI.reload("data-v-58dcd272", Component.options)
' + '  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 181:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(182);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(5)("4abe4fe6", content, false);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../../../node_modules/css-loader/index.js!../../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-58dcd272\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0&bustCache!./GoogleMapInput.vue", function() {
     var newContent = require("!!../../../../../../node_modules/css-loader/index.js!../../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-58dcd272\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0&bustCache!./GoogleMapInput.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 182:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(4)(undefined);
// imports


// module
exports.push([module.i, "\n.google-map[data-v-58dcd272] {\n    width: 100%;\n    min-height: 400px;\n}\n", ""]);

// exports


/***/ }),

/***/ 183:
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

var GoogleMapsLoader = __webpack_require__(184);
var DEFAULT_LOCATION = {
    lat: 16.4804269,
    lng: 105.973276
};
/* harmony default export */ __webpack_exports__["default"] = ({
    name: 'googleMapInput',
    props: {
        apiKey: String,
        inputLabel: {
            type: String,
            default: 'Địa chỉ'
        },
        inputName: {
            type: String,
            default: 'map'
        },
        currentMarker: {
            type: [Object, Array],
            default: function _default() {
                return DEFAULT_LOCATION;
            }
        },
        oneMarker: {
            type: [String, Boolean],
            default: true
        }
    },
    data: function data() {
        return {
            center: DEFAULT_LOCATION,
            markerLocation: DEFAULT_LOCATION,
            markers: [],
            gmap: null
        };
    },
    mounted: function mounted() {
        this.googleInit();
    },

    methods: {
        googleInit: function googleInit() {
            var _this = this;

            GoogleMapsLoader.KEY = this.apiKey;
            GoogleMapsLoader.LIBRARIES = ['geometry', 'places'];
            GoogleMapsLoader.LANGUAGE = 'vi';
            GoogleMapsLoader.load(function (google) {
                _this.gmap = new google.maps.Map(_this.$el.querySelector('.google-map'), {
                    center: _this.center,
                    zoom: 5,
                    scrollwheel: true,
                    zoomControl: true
                });

                _this.addMarker(_this.currentMarker);

                //search
                var input = _this.$el.querySelector('#pac-input');
                var searchBox = new google.maps.places.SearchBox(input);

                _this.gmap.addListener('bounds_changed', function () {
                    searchBox.setBounds(_this.gmap.getBounds());
                });

                searchBox.addListener('places_changed', function () {
                    var places = searchBox.getPlaces();

                    if (places.length === 0) {
                        return;
                    }

                    // Clear out the old markers.
                    _this.clearMarkers();

                    // For each place, get the icon, name and location.
                    var bounds = new google.maps.LatLngBounds();
                    places.forEach(function (place) {
                        if (!place.geometry) {
                            console.log("Returned place contains no geometry");
                            return;
                        }
                        // Create a marker for each place.
                        _this.addMarker(place.geometry.location);

                        if (place.geometry.viewport) {
                            // Only geocodes have viewport.
                            bounds.union(place.geometry.viewport);
                        } else {
                            bounds.extend(place.geometry.location);
                        }
                    });
                    _this.gmap.fitBounds(bounds);
                });

                var service = new google.maps.places.PlacesService(_this.gmap);
                //new marker on click
                _this.gmap.addListener('click', function (event) {
                    _this.markerLocation = JSON.parse(JSON.stringify(event.latLng));
                    if (_this.oneMarker) _this.clearMarkers();
                    _this.addMarker(_this.markerLocation);

                    if (event.placeId) service.getDetails({
                        placeId: event.placeId
                    }, function (place, status) {
                        if (status === google.maps.places.PlacesServiceStatus.OK) input.value = place.name + ', ' + place.formatted_address;
                    });
                });
            });
        },
        addMarker: function addMarker(location) {
            var marker = new google.maps.Marker({
                position: location,
                map: this.gmap,
                animation: google.maps.Animation.BOUNCE
            });
            this.markers.push(marker);
        },

        // Sets the map on all markers in the array.
        setMapOnAll: function setMapOnAll(map) {
            for (var i = 0; i < this.markers.length; i++) {
                this.markers[i].setMap(map);
            }
        },


        // Removes the markers from the map, but keeps them in the array.
        clearMarkers: function clearMarkers() {
            this.setMapOnAll(null);
        },


        // Shows any markers currently in the array.
        showMarkers: function showMarkers() {
            this.setMapOnAll(this.gmap);
        },


        // Deletes all markers in the array by removing references to them.
        deleteMarkers: function deleteMarkers() {
            this.clearMarkers();
            this.markers = [];
        }
    }
});

/***/ }),

/***/ 184:
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__;var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

(function (root, factory) {

    if (root === null) {
        throw new Error('Google-maps package can be used only in browser');
    }

    if (true) {
        !(__WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.call(exports, __webpack_require__, exports, module)) :
				__WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
    } else if ((typeof exports === 'undefined' ? 'undefined' : _typeof(exports)) === 'object') {
        module.exports = factory();
    } else {
        root.GoogleMapsLoader = factory();
    }
})(typeof window !== 'undefined' ? window : null, function () {

    'use strict';

    var googleVersion = '3.27';

    var script = null;

    var google = null;

    var loading = false;

    var callbacks = [];

    var onLoadEvents = [];

    var originalCreateLoaderMethod = null;

    var GoogleMapsLoader = {};

    GoogleMapsLoader.URL = 'https://maps.googleapis.com/maps/api/js';

    GoogleMapsLoader.KEY = null;

    GoogleMapsLoader.LIBRARIES = [];

    GoogleMapsLoader.CLIENT = null;

    GoogleMapsLoader.CHANNEL = null;

    GoogleMapsLoader.LANGUAGE = null;

    GoogleMapsLoader.REGION = null;

    GoogleMapsLoader.VERSION = googleVersion;

    GoogleMapsLoader.WINDOW_CALLBACK_NAME = '__google_maps_api_provider_initializator__';

    GoogleMapsLoader._googleMockApiObject = {};

    GoogleMapsLoader.load = function (fn) {
        if (google === null) {
            if (loading === true) {
                if (fn) {
                    callbacks.push(fn);
                }
            } else {
                loading = true;

                window[GoogleMapsLoader.WINDOW_CALLBACK_NAME] = function () {
                    ready(fn);
                };

                GoogleMapsLoader.createLoader();
            }
        } else if (fn) {
            fn(google);
        }
    };

    GoogleMapsLoader.createLoader = function () {
        script = document.createElement('script');
        script.type = 'text/javascript';
        script.src = GoogleMapsLoader.createUrl();

        document.head.appendChild(script);
    };

    GoogleMapsLoader.isLoaded = function () {
        return google !== null;
    };

    GoogleMapsLoader.createUrl = function () {
        var url = GoogleMapsLoader.URL;

        url += '?callback=' + GoogleMapsLoader.WINDOW_CALLBACK_NAME;

        if (GoogleMapsLoader.KEY) {
            url += '&key=' + GoogleMapsLoader.KEY;
        }

        if (GoogleMapsLoader.LIBRARIES.length > 0) {
            url += '&libraries=' + GoogleMapsLoader.LIBRARIES.join(',');
        }

        if (GoogleMapsLoader.CLIENT) {
            url += '&client=' + GoogleMapsLoader.CLIENT + '&v=' + GoogleMapsLoader.VERSION;
        }

        if (GoogleMapsLoader.CHANNEL) {
            url += '&channel=' + GoogleMapsLoader.CHANNEL;
        }

        if (GoogleMapsLoader.LANGUAGE) {
            url += '&language=' + GoogleMapsLoader.LANGUAGE;
        }

        if (GoogleMapsLoader.REGION) {
            url += '&region=' + GoogleMapsLoader.REGION;
        }

        return url;
    };

    GoogleMapsLoader.release = function (fn) {
        var release = function release() {
            GoogleMapsLoader.KEY = null;
            GoogleMapsLoader.LIBRARIES = [];
            GoogleMapsLoader.CLIENT = null;
            GoogleMapsLoader.CHANNEL = null;
            GoogleMapsLoader.LANGUAGE = null;
            GoogleMapsLoader.REGION = null;
            GoogleMapsLoader.VERSION = googleVersion;

            google = null;
            loading = false;
            callbacks = [];
            onLoadEvents = [];

            if (typeof window.google !== 'undefined') {
                delete window.google;
            }

            if (typeof window[GoogleMapsLoader.WINDOW_CALLBACK_NAME] !== 'undefined') {
                delete window[GoogleMapsLoader.WINDOW_CALLBACK_NAME];
            }

            if (originalCreateLoaderMethod !== null) {
                GoogleMapsLoader.createLoader = originalCreateLoaderMethod;
                originalCreateLoaderMethod = null;
            }

            if (script !== null) {
                script.parentElement.removeChild(script);
                script = null;
            }

            if (fn) {
                fn();
            }
        };

        if (loading) {
            GoogleMapsLoader.load(function () {
                release();
            });
        } else {
            release();
        }
    };

    GoogleMapsLoader.onLoad = function (fn) {
        onLoadEvents.push(fn);
    };

    GoogleMapsLoader.makeMock = function () {
        originalCreateLoaderMethod = GoogleMapsLoader.createLoader;

        GoogleMapsLoader.createLoader = function () {
            window.google = GoogleMapsLoader._googleMockApiObject;
            window[GoogleMapsLoader.WINDOW_CALLBACK_NAME]();
        };
    };

    var ready = function ready(fn) {
        var i;

        loading = false;

        if (google === null) {
            google = window.google;
        }

        for (i = 0; i < onLoadEvents.length; i++) {
            onLoadEvents[i](google);
        }

        if (fn) {
            fn(google);
        }

        for (i = 0; i < callbacks.length; i++) {
            callbacks[i](google);
        }

        callbacks = [];
    };
    return GoogleMapsLoader;
});

/***/ }),

/***/ 185:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "field" }, [
    _c("label", { staticClass: "label" }, [
      _vm._v(_vm._s(_vm.inputLabel) + "\n        "),
      _c("small", [_vm._v("(Click vào map để đánh dấu)")])
    ]),
    _vm._v(" "),
    _c("div", { staticClass: "field has-addons" }, [
      _c("p", { staticClass: "control" }, [
        _c("input", {
          directives: [
            {
              name: "model",
              rawName: "v-model",
              value: _vm.markerLocation.lat,
              expression: "markerLocation.lat"
            }
          ],
          staticClass: "input",
          attrs: { name: _vm.inputName + "[lat]", placeholder: "Lat" },
          domProps: { value: _vm.markerLocation.lat },
          on: {
            input: function($event) {
              if ($event.target.composing) {
                return
              }
              _vm.$set(_vm.markerLocation, "lat", $event.target.value)
            }
          }
        })
      ]),
      _vm._v(" "),
      _c("p", { staticClass: "control" }, [
        _c("input", {
          directives: [
            {
              name: "model",
              rawName: "v-model",
              value: _vm.markerLocation.lng,
              expression: "markerLocation.lng"
            }
          ],
          staticClass: "input",
          attrs: { name: _vm.inputName + "[lng]", placeholder: "Lng" },
          domProps: { value: _vm.markerLocation.lng },
          on: {
            input: function($event) {
              if ($event.target.composing) {
                return
              }
              _vm.$set(_vm.markerLocation, "lng", $event.target.value)
            }
          }
        })
      ])
    ]),
    _vm._v(" "),
    _c("div", { staticClass: "field" }, [
      _c("input", {
        staticClass: "input",
        attrs: {
          id: "pac-input",
          type: "text",
          name: _vm.inputName + "[address]",
          placeholder: "Nhập vào địa chỉ"
        }
      })
    ]),
    _vm._v(" "),
    _c("div", { staticClass: "google-map" })
  ])
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-58dcd272", module.exports)
  }
}

/***/ })

});