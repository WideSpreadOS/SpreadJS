// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"../public/logic/dom-manipulation-main.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ElementCollection = exports.AjaxPromise = void 0;
exports.getEl = getEl;

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _wrapNativeSuper(Class) { var _cache = typeof Map === "function" ? new Map() : undefined; _wrapNativeSuper = function _wrapNativeSuper(Class) { if (Class === null || !_isNativeFunction(Class)) return Class; if (typeof Class !== "function") { throw new TypeError("Super expression must either be null or a function"); } if (typeof _cache !== "undefined") { if (_cache.has(Class)) return _cache.get(Class); _cache.set(Class, Wrapper); } function Wrapper() { return _construct(Class, arguments, _getPrototypeOf(this).constructor); } Wrapper.prototype = Object.create(Class.prototype, { constructor: { value: Wrapper, enumerable: false, writable: true, configurable: true } }); return _setPrototypeOf(Wrapper, Class); }; return _wrapNativeSuper(Class); }

function _construct(Parent, args, Class) { if (_isNativeReflectConstruct()) { _construct = Reflect.construct; } else { _construct = function _construct(Parent, args, Class) { var a = [null]; a.push.apply(a, args); var Constructor = Function.bind.apply(Parent, a); var instance = new Constructor(); if (Class) _setPrototypeOf(instance, Class.prototype); return instance; }; } return _construct.apply(null, arguments); }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _isNativeFunction(fn) { return Function.toString.call(fn).indexOf("[native code]") !== -1; }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

// console.log(`%c\nREACHED DOM-MANIPULATION-MAIN.JS`, `color:lime;font-family:system-ui;font-size:1rem;-webkit-text-stroke: 1px black;font-weight:bold; border-bottom: solid 2px lime;`)

/* DOM-MANIPULATION START */
var ElementCollection = /*#__PURE__*/function (_Array) {
  _inherits(ElementCollection, _Array);

  var _super = _createSuper(ElementCollection);

  function ElementCollection() {
    _classCallCheck(this, ElementCollection);

    return _super.apply(this, arguments);
  }

  _createClass(ElementCollection, [{
    key: "ready",
    value: function ready(cb) {
      var isReady = this.some(function (e) {
        return e.readyState != null && e.readyState != "loading";
      });

      if (isReady) {
        cb();
      } else {
        this.on("DOMContentLoaded", cb);
      }

      return this;
    }
  }, {
    key: "on",
    value: function on(event, cbOrSelector, cb) {
      if (typeof cbOrSelector === "function") {
        this.forEach(function (e) {
          return e.addEventListener(event, cbOrSelector);
        });
      } else {
        this.forEach(function (elem) {
          elem.addEventListener(event, function (e) {
            if (e.target.matches(cbOrSelector)) cb(e);
          });
        });
      }

      return this;
    }
  }, {
    key: "next",
    value: function next() {
      return this.map(function (e) {
        return e.nextElementSibling;
      }).filter(function (e) {
        return e != null;
      });
    }
  }, {
    key: "prev",
    value: function prev() {
      return this.map(function (e) {
        return e.previousElementSibling;
      }).filter(function (e) {
        return e != null;
      });
    }
  }, {
    key: "removeClass",
    value: function removeClass(className) {
      this.forEach(function (e) {
        return e.classList.remove(className);
      });
      return this;
    }
  }, {
    key: "addClass",
    value: function addClass(className) {
      this.forEach(function (e) {
        return e.classList.add(className);
      });
      return this;
    }
  }, {
    key: "css",
    value: function css(property, value) {
      var camelProp = property.replace(/(-[a-z])/, function (g) {
        return g.replace("-", "").toUpperCase();
      });
      this.forEach(function (e) {
        return e.style[camelProp] = value;
      });
      return this;
    }
  }]);

  return ElementCollection;
}( /*#__PURE__*/_wrapNativeSuper(Array));
/* DOM-MANIPULATION END */

/* AJAX START */


exports.ElementCollection = ElementCollection;

var AjaxPromise = /*#__PURE__*/function () {
  function AjaxPromise(promise) {
    _classCallCheck(this, AjaxPromise);

    this.promise = promise;
  }

  _createClass(AjaxPromise, [{
    key: "done",
    value: function done(cb) {
      this.promise = this.promise.then(function (data) {
        cb(data);
        return data;
      });
      return this;
    }
  }, {
    key: "fail",
    value: function fail(cb) {
      this.promise = this.promise.catch(cb);
      return this;
    }
  }, {
    key: "always",
    value: function always(cb) {
      this.promise = this.promise.finally(cb);
      return this;
    }
  }]);

  return AjaxPromise;
}();

exports.AjaxPromise = AjaxPromise;

function getEl(param) {
  if (typeof param === "string" || param instanceof String) {
    return _construct(ElementCollection, _toConsumableArray(document.querySelectorAll(param)));
  } else {
    return new ElementCollection(param);
  }
}

getEl.get = function (_ref) {
  var url = _ref.url,
      _ref$data = _ref.data,
      data = _ref$data === void 0 ? {} : _ref$data,
      _ref$success = _ref.success,
      success = _ref$success === void 0 ? function () {} : _ref$success,
      dataType = _ref.dataType;
  var queryString = Object.entries(data).map(function (_ref2) {
    var _ref3 = _slicedToArray(_ref2, 2),
        key = _ref3[0],
        value = _ref3[1];

    return "".concat(key, "=").concat(value);
  }).join("&");
  return new AjaxPromise(fetch("".concat(url, "?").concat(queryString), {
    method: "GET",
    headers: {
      "Content-Type": dataType
    }
  }).then(function (res) {
    if (res.ok) {
      return res.json();
    } else {
      throw new Error(res.status);
    }
  }).then(function (data) {
    success(data);
    return data;
  }));
};
/* AJAX END */
},{}],"../public/logic/dom-manipulation.js":[function(require,module,exports) {
"use strict";

var _domManipulationMain = require("./dom-manipulation-main");

/* 


DOM-MANIPULATION ASSETS


    Templates

        console.log CSS
        console.log(`%c<ENTER_CONSOLE_LOG_DATA_HERE>`, `color:lightskyblue;font-family:system-ui;font-size:1.3rem;-webkit-text-stroke: 1px black;font-weight:bold`)
        console.log("hi %c", "background: url('../assets/img/check.png') 0 0 no-repeat; padding-left: 20px;");


    Notes



    Refrences


    Other





*/

/* DOM-MANIPULATION JS BEGIN */
// console.log(`%c\n\n\n(Defered)`, `color:orangered;font-family:system-ui;font-size:1rem;-webkit-text-stroke: 0px black;font-weight:regular`)
// console.log(`%c\nREACHED DOM-MANIPULATION.JS\n\n\n`, `color:lime;font-family:system-ui;font-size:1rem;-webkit-text-stroke: 1px black;font-weight:bold; border-bottom: solid 2px lime;`)

/* 
    SpreadJS Selectors (REPLACES: document.getElementBy[Id, ClassName, TagName]('') & document.[querySelector, querySelctorAll]('') )

    getEl()
*/
// Imports
// SpreadApp Containers & Logic
var backstageEl = (0, _domManipulationMain.getEl)('#spreadAppBackstage')[0];
var spreadAppEl = (0, _domManipulationMain.getEl)('#spreadApp')[0];
var ON_OFF = (0, _domManipulationMain.getEl)('#ON_OFF_CONTROLS')[0];
ON_OFF.addEventListener('click', function (e) {
  spreadAppEl.classList.toggle('on');
  spreadAppEl.classList.toggle('off');
});
/* DOM-MANIPULATION JS END */

var imageArray = [];
var imageDataEl = (0, _domManipulationMain.getEl)("#spreadAppData")[0];
var imageBackstageEl = (0, _domManipulationMain.getEl)("#spreadAppBackstageImg")[0];
var allImages = (0, _domManipulationMain.getEl)("img");
allImages.forEach(function (img, index) {
  var imageData = "".concat(allImages[index].getAttribute('src'));
  var imageElSrc = img.getAttribute('src');
  imageArray.push(imageElSrc);
}); // imageDataEl.appendChild(imageElArray)

imageArray.forEach(function (img, index) {
  var imageEl = document.createElement('div');
  imageEl.classList.add('image-data');
  imageEl.setAttribute("data-backstage-image", "".concat(index));
  var imageElContainer = document.createElement('div');
  imageElContainer.setAttribute("data-backstage-image-container", "".concat(index));
  imageEl.innerText = img;
  imageDataEl.appendChild(imageEl);
});
var allImagesData = (0, _domManipulationMain.getEl)('.image-data');
allImagesData.forEach(function (imgData, index) {
  imgData.addEventListener('click', function (e) {
    var parentContainer = (0, _domManipulationMain.getEl)('.image-data');
    parentContainer.forEach(function (parent) {
      var parentIndex = parseInt(parent.getAttribute('data-backstage-image'));

      if (parentIndex == index) {
        var currentImageIndex = parseInt(imgData.getAttribute('data-backstage-image'));

        if (currentImageIndex == index) {
          var imgContainer = document.createElement('img');
          imgContainer.setAttribute('data-image-id', "image__".concat(index));
          imgContainer.setAttribute('id', "image__".concat(index));
          imgContainer.setAttribute('src', imgData.innerText);
          imgContainer.classList.add('backstage-image');
          parent.appendChild(imgContainer);
          imgContainer.addEventListener('click', function (e) {
            var imgContainerAttr = imgContainer.getAttribute('data-image-id');
            var imgToRemove = (0, _domManipulationMain.getEl)("#".concat(imgContainerAttr));
            parent.remove(imgToRemove);
          });
        }
      }
    });
  });
});
/* 
getEl(document).ready(function () {
    getEl(document).on("click", ".next", function () {
        const currentImg = getEl(".active")
        currentImg.forEach((img, index) => {
        })
        const nextImg = currentImg.next()

        if (nextImg.length) {
            currentImg.removeClass("active").css("z-index", -10)
            nextImg.addClass("active").css("z-index", 10)
        }
    })

    getEl(".prev").on("click", function () {
        const currentImg = getEl(".active")
        const prevImg = currentImg.prev()

        if (prevImg.length) {
            currentImg.removeClass("active").css("z-index", -10)
            prevImg.addClass("active").css("z-index", 10)
        }
    })
})

getEl.get({
    url: "https://hub.dummyapis.com/employee?noofRecords=10&idStarts=1001",
    success: data => {
        let dataEl = getEl('#apiData')[0]
        data.forEach(item => {

            let itemEl = document.createElement('div')
            itemEl.classList.add('array-item')
            let itemName = document.createElement('p')
            itemName.innerText = `${item.firstName} ${item.lastName}`
            itemEl.appendChild(itemName)
            let itemEmail = document.createElement('a')
            itemEmail.setAttribute('href', `mailto:${item.email}`)
            itemEmail.innerText = item.email
            itemEl.appendChild(itemEmail)

            dataEl.appendChild(itemEl)
        })
    },
})
    .done(data => console.table(data))
    .fail(e => console.error("Fail", e))
    .always(() => console.log("Always"))
 */
},{"./dom-manipulation-main":"../public/logic/dom-manipulation-main.js"}],"../../node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "61774" + '/');

  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);

          if (didAccept) {
            handled = true;
          }
        }
      }); // Enable HMR for CSS by default.

      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });

      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ??? Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] ????  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">????</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }

  if (checkedAssets[id]) {
    return;
  }

  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}

function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }
}
},{}]},{},["../../node_modules/parcel-bundler/src/builtins/hmr-runtime.js","../public/logic/dom-manipulation.js"], null)
//# sourceMappingURL=/dom-manipulation.446ea3a6.js.map