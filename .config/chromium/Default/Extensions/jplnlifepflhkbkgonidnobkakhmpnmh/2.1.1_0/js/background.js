/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 117);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */,
/* 1 */,
/* 2 */
/***/ (function(module, exports) {

// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
var global = module.exports = typeof window != 'undefined' && window.Math == Math
  ? window : typeof self != 'undefined' && self.Math == Math ? self
  // eslint-disable-next-line no-new-func
  : Function('return this')();
if (typeof __g == 'number') __g = global; // eslint-disable-line no-undef


/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(2);
var core = __webpack_require__(12);
var hide = __webpack_require__(8);
var redefine = __webpack_require__(23);
var ctx = __webpack_require__(26);
var PROTOTYPE = 'prototype';

var $export = function (type, name, source) {
  var IS_FORCED = type & $export.F;
  var IS_GLOBAL = type & $export.G;
  var IS_STATIC = type & $export.S;
  var IS_PROTO = type & $export.P;
  var IS_BIND = type & $export.B;
  var target = IS_GLOBAL ? global : IS_STATIC ? global[name] || (global[name] = {}) : (global[name] || {})[PROTOTYPE];
  var exports = IS_GLOBAL ? core : core[name] || (core[name] = {});
  var expProto = exports[PROTOTYPE] || (exports[PROTOTYPE] = {});
  var key, own, out, exp;
  if (IS_GLOBAL) source = name;
  for (key in source) {
    // contains in native
    own = !IS_FORCED && target && target[key] !== undefined;
    // export native or passed
    out = (own ? target : source)[key];
    // bind timers to global for call from export context
    exp = IS_BIND && own ? ctx(out, global) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
    // extend global
    if (target) redefine(target, key, out, type & $export.U);
    // export
    if (exports[key] != out) hide(exports, key, exp);
    if (IS_PROTO && expProto[key] != out) expProto[key] = out;
  }
};
global.core = core;
// type bitmap
$export.F = 1;   // forced
$export.G = 2;   // global
$export.S = 4;   // static
$export.P = 8;   // proto
$export.B = 16;  // bind
$export.W = 32;  // wrap
$export.U = 64;  // safe
$export.R = 128; // real proto method for `library`
module.exports = $export;


/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

// Thank's IE8 for his funny defineProperty
module.exports = !__webpack_require__(11)(function () {
  return Object.defineProperty({}, 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

var store = __webpack_require__(25)('wks');
var uid = __webpack_require__(24);
var Symbol = __webpack_require__(2).Symbol;
var USE_SYMBOL = typeof Symbol == 'function';

var $exports = module.exports = function (name) {
  return store[name] || (store[name] =
    USE_SYMBOL && Symbol[name] || (USE_SYMBOL ? Symbol : uid)('Symbol.' + name));
};

$exports.store = store;


/***/ }),
/* 6 */
/***/ (function(module, exports) {

module.exports = function (it) {
  if (typeof it != 'function') throw TypeError(it + ' is not a function!');
  return it;
};


/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.13 ToObject(argument)
var defined = __webpack_require__(29);
module.exports = function (it) {
  return Object(defined(it));
};


/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__(9);
var createDesc = __webpack_require__(22);
module.exports = __webpack_require__(4) ? function (object, key, value) {
  return dP.f(object, key, createDesc(1, value));
} : function (object, key, value) {
  object[key] = value;
  return object;
};


/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__(13);
var IE8_DOM_DEFINE = __webpack_require__(35);
var toPrimitive = __webpack_require__(17);
var dP = Object.defineProperty;

exports.f = __webpack_require__(4) ? Object.defineProperty : function defineProperty(O, P, Attributes) {
  anObject(O);
  P = toPrimitive(P, true);
  anObject(Attributes);
  if (IE8_DOM_DEFINE) try {
    return dP(O, P, Attributes);
  } catch (e) { /* empty */ }
  if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported!');
  if ('value' in Attributes) O[P] = Attributes.value;
  return O;
};


/***/ }),
/* 10 */
/***/ (function(module, exports) {

module.exports = function (it) {
  return typeof it === 'object' ? it !== null : typeof it === 'function';
};


/***/ }),
/* 11 */
/***/ (function(module, exports) {

module.exports = function (exec) {
  try {
    return !!exec();
  } catch (e) {
    return true;
  }
};


/***/ }),
/* 12 */
/***/ (function(module, exports) {

var core = module.exports = { version: '2.6.5' };
if (typeof __e == 'number') __e = core; // eslint-disable-line no-undef


/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(10);
module.exports = function (it) {
  if (!isObject(it)) throw TypeError(it + ' is not an object!');
  return it;
};


/***/ }),
/* 14 */
/***/ (function(module, exports) {

var hasOwnProperty = {}.hasOwnProperty;
module.exports = function (it, key) {
  return hasOwnProperty.call(it, key);
};


/***/ }),
/* 15 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return createApplyListener; });
function createApplyListener(fn) {
  return (app, api) => {
    fn(app, api.addListener.bind(api));
  };
}

/***/ }),
/* 16 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return MessageType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return LATEST_TIMESTAMP_FILE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return RULESET_FILE_TEMPLATE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return LAST_UPDATED_KEY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return LAST_TIMESTAMP_KEY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "j", function() { return STORAGE_TEMPLATE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return STORAGE_COUNT_KEY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "k", function() { return channels; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return COUNTER_LIMIT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return PART_SIZE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ALARM_NAME; });
// ======================================== //
//                Messaging                 //
// ======================================== //
const MessageType = {
  EXTRACT_REQ: 'extract',
  EXTRACT_RES: 'extract_response'
}; // ======================================== //
//                  Files                   //
// ======================================== //

const LATEST_TIMESTAMP_FILE = 'eff.default.ruleset.timestamp';
const RULESET_FILE_TEMPLATE = 'eff.default.ruleset.latest.gz'; // ======================================== //
//               Storage Keys               //
// ======================================== //

const STORAGE_PREFIX = 'https-upgrade';
const LAST_UPDATED_KEY = `${STORAGE_PREFIX}::last-updated`;
const LAST_TIMESTAMP_KEY = `${STORAGE_PREFIX}::last-timestamp`;
const STORAGE_TEMPLATE = `${STORAGE_PREFIX}::%s`;
const STORAGE_COUNT_KEY = `${STORAGE_PREFIX}::storage-count`; // ======================================== //
//                 Channels                 //
// ======================================== //

const channels = [{
  name: 'default',
  urlPrefix: 'https://s3.amazonaws.com/privateinternetaccess/'
}]; // ======================================== //
//                  General                 //
// ======================================== //

const COUNTER_LIMIT = 6;
const PART_SIZE = 500;
const ALARM_NAME = 'PollHttpsRules';

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.1 ToPrimitive(input [, PreferredType])
var isObject = __webpack_require__(10);
// instead of the ES6 spec version, we didn't implement @@toPrimitive case
// and the second argument - flag - preferred type is a string
module.exports = function (it, S) {
  if (!isObject(it)) return it;
  var fn, val;
  if (S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  if (typeof (fn = it.valueOf) == 'function' && !isObject(val = fn.call(it))) return val;
  if (!S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  throw TypeError("Can't convert object to primitive value");
};


/***/ }),
/* 18 */
/***/ (function(module, exports) {

module.exports = false;


/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// Forced replacement prototype accessors methods
module.exports = __webpack_require__(18) || !__webpack_require__(11)(function () {
  var K = Math.random();
  // In FF throws only define methods
  // eslint-disable-next-line no-undef, no-useless-call
  __defineSetter__.call(null, K, function () { /* empty */ });
  delete __webpack_require__(2)[K];
});


/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

// to indexed object, toObject with fallback for non-array-like ES3 strings
var IObject = __webpack_require__(65);
var defined = __webpack_require__(29);
module.exports = function (it) {
  return IObject(defined(it));
};


/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(10);
var document = __webpack_require__(2).document;
// typeof document.createElement is 'object' in old IE
var is = isObject(document) && isObject(document.createElement);
module.exports = function (it) {
  return is ? document.createElement(it) : {};
};


/***/ }),
/* 22 */
/***/ (function(module, exports) {

module.exports = function (bitmap, value) {
  return {
    enumerable: !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable: !(bitmap & 4),
    value: value
  };
};


/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(2);
var hide = __webpack_require__(8);
var has = __webpack_require__(14);
var SRC = __webpack_require__(24)('src');
var $toString = __webpack_require__(59);
var TO_STRING = 'toString';
var TPL = ('' + $toString).split(TO_STRING);

__webpack_require__(12).inspectSource = function (it) {
  return $toString.call(it);
};

(module.exports = function (O, key, val, safe) {
  var isFunction = typeof val == 'function';
  if (isFunction) has(val, 'name') || hide(val, 'name', key);
  if (O[key] === val) return;
  if (isFunction) has(val, SRC) || hide(val, SRC, O[key] ? '' + O[key] : TPL.join(String(key)));
  if (O === global) {
    O[key] = val;
  } else if (!safe) {
    delete O[key];
    hide(O, key, val);
  } else if (O[key]) {
    O[key] = val;
  } else {
    hide(O, key, val);
  }
// add fake Function#toString for correct work wrapped methods / constructors with methods like LoDash isNative
})(Function.prototype, TO_STRING, function toString() {
  return typeof this == 'function' && this[SRC] || $toString.call(this);
});


/***/ }),
/* 24 */
/***/ (function(module, exports) {

var id = 0;
var px = Math.random();
module.exports = function (key) {
  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
};


/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

var core = __webpack_require__(12);
var global = __webpack_require__(2);
var SHARED = '__core-js_shared__';
var store = global[SHARED] || (global[SHARED] = {});

(module.exports = function (key, value) {
  return store[key] || (store[key] = value !== undefined ? value : {});
})('versions', []).push({
  version: core.version,
  mode: __webpack_require__(18) ? 'pure' : 'global',
  copyright: '© 2019 Denis Pushkarev (zloirock.ru)'
});


/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

// optional / simple context binding
var aFunction = __webpack_require__(6);
module.exports = function (fn, that, length) {
  aFunction(fn);
  if (that === undefined) return fn;
  switch (length) {
    case 1: return function (a) {
      return fn.call(that, a);
    };
    case 2: return function (a, b) {
      return fn.call(that, a, b);
    };
    case 3: return function (a, b, c) {
      return fn.call(that, a, b, c);
    };
  }
  return function (/* ...args */) {
    return fn.apply(that, arguments);
  };
};


/***/ }),
/* 27 */
/***/ (function(module, exports) {

var toString = {}.toString;

module.exports = function (it) {
  return toString.call(it).slice(8, -1);
};


/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.15 ToLength
var toInteger = __webpack_require__(37);
var min = Math.min;
module.exports = function (it) {
  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
};


/***/ }),
/* 29 */
/***/ (function(module, exports) {

// 7.2.1 RequireObjectCoercible(argument)
module.exports = function (it) {
  if (it == undefined) throw TypeError("Can't call method on  " + it);
  return it;
};


/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.9 / 15.2.3.2 Object.getPrototypeOf(O)
var has = __webpack_require__(14);
var toObject = __webpack_require__(7);
var IE_PROTO = __webpack_require__(31)('IE_PROTO');
var ObjectProto = Object.prototype;

module.exports = Object.getPrototypeOf || function (O) {
  O = toObject(O);
  if (has(O, IE_PROTO)) return O[IE_PROTO];
  if (typeof O.constructor == 'function' && O instanceof O.constructor) {
    return O.constructor.prototype;
  } return O instanceof Object ? ObjectProto : null;
};


/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

var shared = __webpack_require__(25)('keys');
var uid = __webpack_require__(24);
module.exports = function (key) {
  return shared[key] || (shared[key] = uid(key));
};


/***/ }),
/* 32 */
/***/ (function(module, exports) {

module.exports = {};


/***/ }),
/* 33 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
const TIMED_OUT = Symbol('timed out');
/**
 * Schedule a promise to reject after "time" ms
 *
 * @param {number} time timeout before rejecting promise
 */

function wait(time) {
  return new Promise((_, reject) => {
    setTimeout(() => {
      reject(TIMED_OUT);
    }, time);
  });
}
/**
 * Add a timeout to a promise
 *
 * The resulting promise will reject if the timeout expires before
 * the given promise resolves/rejects
 *
 * @template T
 *
 * @param {Promise<T>} promise Given promise
 * @param {number} timeout Amount of time
 *
 * @returns {Promise<T>} wrapped promise
 */


function addTimeout(promise, timeout) {
  return Promise.race([promise, wait(timeout)]);
}
/**
 * Get a result from a request, be it with or without a timeout
 *
 * @param {Promise<Response>} request The pending result of fetch request
 * @param {number} [timeout] Possible timeout on request
 *
 * @throws {Response} if response is not ok
 * @throws {Symbol} if timeout expires
 * @throws {Error} if generic error occurs
 */


async function getResult(request, timeout) {
  let result;

  if (timeout > 0) {
    result = await addTimeout(request, timeout);
  } else {
    result = await request;
  }

  if (!result.ok) {
    throw result;
  }

  return result;
}
/**
 * Augment the provided error with cause and ok
 *
 * NOTE: Will fail to augment cyclic errors
 */


function augmentError(error, cause) {
  try {
    return Object.assign(error, {
      cause
    });
  } catch (_) {
    return Object.assign(JSON.parse(JSON.stringify(error, Object.getOwnPropertyNames(error))), {
      cause
    });
  }
}
/**
 * Add a cause to failed requests
 *
 * @param {Error|Response|Symbol} err thrown error from fetch request
 */


function addCause(err) {
  let errWithCause;

  if (err === TIMED_OUT) {
    errWithCause = augmentError(new Error('timeout occurred'), 'timeout');
  } else if (err.ok === false) {
    errWithCause = augmentError(err, 'status');
  } else if (!window.navigator.onLine) {
    errWithCause = augmentError(err, 'offline');
  } else {
    errWithCause = augmentError(err, 'error');
  }

  return errWithCause;
}
/**
 * Get opts for fetch, allowing each method to have
 * unique defaults, and assigning logical defaults
 * if no other value is provided
 *
 * Logical defaults are currently based on Chrome's
 * default values
 *
 * @param {*} methodOpts Opts defined for method
 * @param {*} clientOpts Opts defined by user
 */


function getOpts(methodOpts, clientOpts) {
  const {
    method
  } = methodOpts;

  if (!method) {
    throw new Error('methodOpts must contain method');
  }

  const mode = clientOpts.mode || methodOpts.mode;
  const credentials = clientOpts.credentials || methodOpts.credentials;
  const cache = clientOpts.cache || methodOpts.cache || 'default';
  const redirect = clientOpts.redirect || methodOpts.redirect || 'follow';
  const referrer = clientOpts.referrer || methodOpts.referrer || 'client';
  const integrity = clientOpts.integrity || methodOpts.integrity;
  const defaultHeaders = methodOpts.headers || {};
  const clientHeaders = clientOpts.headers || {};
  const headers = Object.assign({}, defaultHeaders, clientHeaders);
  const {
    body
  } = clientOpts;
  return {
    mode,
    body,
    credentials,
    cache,
    redirect,
    referrer,
    integrity,
    headers,
    method
  };
}
/**
 * Create a http request method utilizing native fetch api
 *
 * @param {*} methodOpts Optionally set logical defaults for the method
 */


function createMethod(methodOpts = {}) {
  return async (url, clientOpts = {}) => {
    if (!url) {
      throw new Error('must provide url for http requests');
    } // extract timeout (not native fetch opt)


    const {
      timeout
    } = clientOpts;
    const opts = getOpts(methodOpts, clientOpts);
    const request = fetch(url, opts);

    try {
      // Await is important here in order to catch rejected promise
      return await getResult(request, timeout);
    } catch (err) {
      throw addCause(err);
    }
  };
}
/**
 * Utility for making http requests
 */


const http = {
  get: createMethod({
    method: 'GET'
  }),
  head: createMethod({
    method: 'HEAD'
  }),
  post: createMethod({
    method: 'POST'
  })
};
/* harmony default export */ __webpack_exports__["a"] = (http);

/***/ }),
/* 34 */,
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = !__webpack_require__(4) && !__webpack_require__(11)(function () {
  return Object.defineProperty(__webpack_require__(21)('div'), 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

// 7.2.2 IsArray(argument)
var cof = __webpack_require__(27);
module.exports = Array.isArray || function isArray(arg) {
  return cof(arg) == 'Array';
};


/***/ }),
/* 37 */
/***/ (function(module, exports) {

// 7.1.4 ToInteger
var ceil = Math.ceil;
var floor = Math.floor;
module.exports = function (it) {
  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
};


/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

// 22.1.3.31 Array.prototype[@@unscopables]
var UNSCOPABLES = __webpack_require__(5)('unscopables');
var ArrayProto = Array.prototype;
if (ArrayProto[UNSCOPABLES] == undefined) __webpack_require__(8)(ArrayProto, UNSCOPABLES, {});
module.exports = function (key) {
  ArrayProto[UNSCOPABLES][key] = true;
};


/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

var pIE = __webpack_require__(64);
var createDesc = __webpack_require__(22);
var toIObject = __webpack_require__(20);
var toPrimitive = __webpack_require__(17);
var has = __webpack_require__(14);
var IE8_DOM_DEFINE = __webpack_require__(35);
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
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

var $export = __webpack_require__(3);
var defined = __webpack_require__(29);
var fails = __webpack_require__(11);
var spaces = __webpack_require__(71);
var space = '[' + spaces + ']';
var non = '\u200b\u0085';
var ltrim = RegExp('^' + space + space + '*');
var rtrim = RegExp(space + space + '*$');

var exporter = function (KEY, exec, ALIAS) {
  var exp = {};
  var FORCE = fails(function () {
    return !!spaces[KEY]() || non[KEY]() != non;
  });
  var fn = exp[KEY] = FORCE ? exec(trim) : spaces[KEY];
  if (ALIAS) exp[ALIAS] = fn;
  $export($export.P + $export.F * FORCE, 'String', exp);
};

// 1 -> String#trimLeft
// 2 -> String#trimRight
// 3 -> String#trim
var trim = exporter.trim = function (string, TYPE) {
  string = String(defined(string));
  if (TYPE & 1) string = string.replace(ltrim, '');
  if (TYPE & 2) string = string.replace(rtrim, '');
  return string;
};

module.exports = exporter;


/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

var document = __webpack_require__(2).document;
module.exports = document && document.documentElement;


/***/ }),
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.14 / 15.2.3.14 Object.keys(O)
var $keys = __webpack_require__(81);
var enumBugKeys = __webpack_require__(43);

module.exports = Object.keys || function keys(O) {
  return $keys(O, enumBugKeys);
};


/***/ }),
/* 43 */
/***/ (function(module, exports) {

// IE 8- don't enum bug keys
module.exports = (
  'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'
).split(',');


/***/ }),
/* 44 */
/***/ (function(module, exports, __webpack_require__) {

var def = __webpack_require__(9).f;
var has = __webpack_require__(14);
var TAG = __webpack_require__(5)('toStringTag');

module.exports = function (it, tag, stat) {
  if (it && !has(it = stat ? it : it.prototype, TAG)) def(it, TAG, { configurable: true, value: tag });
};


/***/ }),
/* 45 */,
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// https://tc39.github.io/proposal-flatMap/#sec-Array.prototype.flatMap
var $export = __webpack_require__(3);
var flattenIntoArray = __webpack_require__(60);
var toObject = __webpack_require__(7);
var toLength = __webpack_require__(28);
var aFunction = __webpack_require__(6);
var arraySpeciesCreate = __webpack_require__(61);

$export($export.P, 'Array', {
  flatMap: function flatMap(callbackfn /* , thisArg */) {
    var O = toObject(this);
    var sourceLen, A;
    aFunction(callbackfn);
    sourceLen = toLength(O.length);
    A = arraySpeciesCreate(O, 0);
    flattenIntoArray(A, O, O, sourceLen, 0, 1, callbackfn, arguments[1]);
    return A;
  }
});

__webpack_require__(38)('flatMap');


/***/ }),
/* 47 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $export = __webpack_require__(3);
var aFunction = __webpack_require__(6);
var toObject = __webpack_require__(7);
var fails = __webpack_require__(11);
var $sort = [].sort;
var test = [1, 2, 3];

$export($export.P + $export.F * (fails(function () {
  // IE8-
  test.sort(undefined);
}) || !fails(function () {
  // V8 bug
  test.sort(null);
  // Old WebKit
}) || !__webpack_require__(63)($sort)), 'Array', {
  // 22.1.3.25 Array.prototype.sort(comparefn)
  sort: function sort(comparefn) {
    return comparefn === undefined
      ? $sort.call(toObject(this))
      : $sort.call(toObject(this), aFunction(comparefn));
  }
});


/***/ }),
/* 48 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $export = __webpack_require__(3);
var toObject = __webpack_require__(7);
var aFunction = __webpack_require__(6);
var $defineProperty = __webpack_require__(9);

// B.2.2.2 Object.prototype.__defineGetter__(P, getter)
__webpack_require__(4) && $export($export.P + __webpack_require__(19), 'Object', {
  __defineGetter__: function __defineGetter__(P, getter) {
    $defineProperty.f(toObject(this), P, { get: aFunction(getter), enumerable: true, configurable: true });
  }
});


/***/ }),
/* 49 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $export = __webpack_require__(3);
var toObject = __webpack_require__(7);
var aFunction = __webpack_require__(6);
var $defineProperty = __webpack_require__(9);

// B.2.2.3 Object.prototype.__defineSetter__(P, setter)
__webpack_require__(4) && $export($export.P + __webpack_require__(19), 'Object', {
  __defineSetter__: function __defineSetter__(P, setter) {
    $defineProperty.f(toObject(this), P, { set: aFunction(setter), enumerable: true, configurable: true });
  }
});


/***/ }),
/* 50 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $export = __webpack_require__(3);
var toObject = __webpack_require__(7);
var toPrimitive = __webpack_require__(17);
var getPrototypeOf = __webpack_require__(30);
var getOwnPropertyDescriptor = __webpack_require__(39).f;

// B.2.2.4 Object.prototype.__lookupGetter__(P)
__webpack_require__(4) && $export($export.P + __webpack_require__(19), 'Object', {
  __lookupGetter__: function __lookupGetter__(P) {
    var O = toObject(this);
    var K = toPrimitive(P, true);
    var D;
    do {
      if (D = getOwnPropertyDescriptor(O, K)) return D.get;
    } while (O = getPrototypeOf(O));
  }
});


/***/ }),
/* 51 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $export = __webpack_require__(3);
var toObject = __webpack_require__(7);
var toPrimitive = __webpack_require__(17);
var getPrototypeOf = __webpack_require__(30);
var getOwnPropertyDescriptor = __webpack_require__(39).f;

// B.2.2.5 Object.prototype.__lookupSetter__(P)
__webpack_require__(4) && $export($export.P + __webpack_require__(19), 'Object', {
  __lookupSetter__: function __lookupSetter__(P) {
    var O = toObject(this);
    var K = toPrimitive(P, true);
    var D;
    do {
      if (D = getOwnPropertyDescriptor(O, K)) return D.set;
    } while (O = getPrototypeOf(O));
  }
});


/***/ }),
/* 52 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// https://github.com/tc39/proposal-promise-finally

var $export = __webpack_require__(3);
var core = __webpack_require__(12);
var global = __webpack_require__(2);
var speciesConstructor = __webpack_require__(66);
var promiseResolve = __webpack_require__(67);

$export($export.P + $export.R, 'Promise', { 'finally': function (onFinally) {
  var C = speciesConstructor(this, core.Promise || global.Promise);
  var isFunction = typeof onFinally == 'function';
  return this.then(
    isFunction ? function (x) {
      return promiseResolve(C, onFinally()).then(function () { return x; });
    } : onFinally,
    isFunction ? function (e) {
      return promiseResolve(C, onFinally()).then(function () { throw e; });
    } : onFinally
  );
} });


/***/ }),
/* 53 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(69)('asyncIterator');


/***/ }),
/* 54 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// https://github.com/sebmarkbage/ecmascript-string-left-right-trim
__webpack_require__(40)('trimLeft', function ($trim) {
  return function trimLeft() {
    return $trim(this, 1);
  };
}, 'trimStart');


/***/ }),
/* 55 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// https://github.com/sebmarkbage/ecmascript-string-left-right-trim
__webpack_require__(40)('trimRight', function ($trim) {
  return function trimRight() {
    return $trim(this, 2);
  };
}, 'trimEnd');


/***/ }),
/* 56 */
/***/ (function(module, exports, __webpack_require__) {

// ie9- setTimeout & setInterval additional parameters fix
var global = __webpack_require__(2);
var $export = __webpack_require__(3);
var userAgent = __webpack_require__(72);
var slice = [].slice;
var MSIE = /MSIE .\./.test(userAgent); // <- dirty ie9- check
var wrap = function (set) {
  return function (fn, time /* , ...args */) {
    var boundArgs = arguments.length > 2;
    var args = boundArgs ? slice.call(arguments, 2) : false;
    return set(boundArgs ? function () {
      // eslint-disable-next-line no-new-func
      (typeof fn == 'function' ? fn : Function(fn)).apply(this, args);
    } : fn, time);
  };
};
$export($export.G + $export.B + $export.F * MSIE, {
  setTimeout: wrap(global.setTimeout),
  setInterval: wrap(global.setInterval)
});


/***/ }),
/* 57 */
/***/ (function(module, exports, __webpack_require__) {

var $export = __webpack_require__(3);
var $task = __webpack_require__(73);
$export($export.G + $export.B, {
  setImmediate: $task.set,
  clearImmediate: $task.clear
});


/***/ }),
/* 58 */
/***/ (function(module, exports, __webpack_require__) {

var $iterators = __webpack_require__(75);
var getKeys = __webpack_require__(42);
var redefine = __webpack_require__(23);
var global = __webpack_require__(2);
var hide = __webpack_require__(8);
var Iterators = __webpack_require__(32);
var wks = __webpack_require__(5);
var ITERATOR = wks('iterator');
var TO_STRING_TAG = wks('toStringTag');
var ArrayValues = Iterators.Array;

var DOMIterables = {
  CSSRuleList: true, // TODO: Not spec compliant, should be false.
  CSSStyleDeclaration: false,
  CSSValueList: false,
  ClientRectList: false,
  DOMRectList: false,
  DOMStringList: false,
  DOMTokenList: true,
  DataTransferItemList: false,
  FileList: false,
  HTMLAllCollection: false,
  HTMLCollection: false,
  HTMLFormElement: false,
  HTMLSelectElement: false,
  MediaList: true, // TODO: Not spec compliant, should be false.
  MimeTypeArray: false,
  NamedNodeMap: false,
  NodeList: true,
  PaintRequestList: false,
  Plugin: false,
  PluginArray: false,
  SVGLengthList: false,
  SVGNumberList: false,
  SVGPathSegList: false,
  SVGPointList: false,
  SVGStringList: false,
  SVGTransformList: false,
  SourceBufferList: false,
  StyleSheetList: true, // TODO: Not spec compliant, should be false.
  TextTrackCueList: false,
  TextTrackList: false,
  TouchList: false
};

for (var collections = getKeys(DOMIterables), i = 0; i < collections.length; i++) {
  var NAME = collections[i];
  var explicit = DOMIterables[NAME];
  var Collection = global[NAME];
  var proto = Collection && Collection.prototype;
  var key;
  if (proto) {
    if (!proto[ITERATOR]) hide(proto, ITERATOR, ArrayValues);
    if (!proto[TO_STRING_TAG]) hide(proto, TO_STRING_TAG, NAME);
    Iterators[NAME] = ArrayValues;
    if (explicit) for (key in $iterators) if (!proto[key]) redefine(proto, key, $iterators[key], true);
  }
}


/***/ }),
/* 59 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(25)('native-function-to-string', Function.toString);


/***/ }),
/* 60 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// https://tc39.github.io/proposal-flatMap/#sec-FlattenIntoArray
var isArray = __webpack_require__(36);
var isObject = __webpack_require__(10);
var toLength = __webpack_require__(28);
var ctx = __webpack_require__(26);
var IS_CONCAT_SPREADABLE = __webpack_require__(5)('isConcatSpreadable');

function flattenIntoArray(target, original, source, sourceLen, start, depth, mapper, thisArg) {
  var targetIndex = start;
  var sourceIndex = 0;
  var mapFn = mapper ? ctx(mapper, thisArg, 3) : false;
  var element, spreadable;

  while (sourceIndex < sourceLen) {
    if (sourceIndex in source) {
      element = mapFn ? mapFn(source[sourceIndex], sourceIndex, original) : source[sourceIndex];

      spreadable = false;
      if (isObject(element)) {
        spreadable = element[IS_CONCAT_SPREADABLE];
        spreadable = spreadable !== undefined ? !!spreadable : isArray(element);
      }

      if (spreadable && depth > 0) {
        targetIndex = flattenIntoArray(target, original, element, toLength(element.length), targetIndex, depth - 1) - 1;
      } else {
        if (targetIndex >= 0x1fffffffffffff) throw TypeError();
        target[targetIndex] = element;
      }

      targetIndex++;
    }
    sourceIndex++;
  }
  return targetIndex;
}

module.exports = flattenIntoArray;


/***/ }),
/* 61 */
/***/ (function(module, exports, __webpack_require__) {

// 9.4.2.3 ArraySpeciesCreate(originalArray, length)
var speciesConstructor = __webpack_require__(62);

module.exports = function (original, length) {
  return new (speciesConstructor(original))(length);
};


/***/ }),
/* 62 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(10);
var isArray = __webpack_require__(36);
var SPECIES = __webpack_require__(5)('species');

module.exports = function (original) {
  var C;
  if (isArray(original)) {
    C = original.constructor;
    // cross-realm fallback
    if (typeof C == 'function' && (C === Array || isArray(C.prototype))) C = undefined;
    if (isObject(C)) {
      C = C[SPECIES];
      if (C === null) C = undefined;
    }
  } return C === undefined ? Array : C;
};


/***/ }),
/* 63 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var fails = __webpack_require__(11);

module.exports = function (method, arg) {
  return !!method && fails(function () {
    // eslint-disable-next-line no-useless-call
    arg ? method.call(null, function () { /* empty */ }, 1) : method.call(null);
  });
};


/***/ }),
/* 64 */
/***/ (function(module, exports) {

exports.f = {}.propertyIsEnumerable;


/***/ }),
/* 65 */
/***/ (function(module, exports, __webpack_require__) {

// fallback for non-array-like ES3 and non-enumerable old V8 strings
var cof = __webpack_require__(27);
// eslint-disable-next-line no-prototype-builtins
module.exports = Object('z').propertyIsEnumerable(0) ? Object : function (it) {
  return cof(it) == 'String' ? it.split('') : Object(it);
};


/***/ }),
/* 66 */
/***/ (function(module, exports, __webpack_require__) {

// 7.3.20 SpeciesConstructor(O, defaultConstructor)
var anObject = __webpack_require__(13);
var aFunction = __webpack_require__(6);
var SPECIES = __webpack_require__(5)('species');
module.exports = function (O, D) {
  var C = anObject(O).constructor;
  var S;
  return C === undefined || (S = anObject(C)[SPECIES]) == undefined ? D : aFunction(S);
};


/***/ }),
/* 67 */
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__(13);
var isObject = __webpack_require__(10);
var newPromiseCapability = __webpack_require__(68);

module.exports = function (C, x) {
  anObject(C);
  if (isObject(x) && x.constructor === C) return x;
  var promiseCapability = newPromiseCapability.f(C);
  var resolve = promiseCapability.resolve;
  resolve(x);
  return promiseCapability.promise;
};


/***/ }),
/* 68 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// 25.4.1.5 NewPromiseCapability(C)
var aFunction = __webpack_require__(6);

function PromiseCapability(C) {
  var resolve, reject;
  this.promise = new C(function ($$resolve, $$reject) {
    if (resolve !== undefined || reject !== undefined) throw TypeError('Bad Promise constructor');
    resolve = $$resolve;
    reject = $$reject;
  });
  this.resolve = aFunction(resolve);
  this.reject = aFunction(reject);
}

module.exports.f = function (C) {
  return new PromiseCapability(C);
};


/***/ }),
/* 69 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(2);
var core = __webpack_require__(12);
var LIBRARY = __webpack_require__(18);
var wksExt = __webpack_require__(70);
var defineProperty = __webpack_require__(9).f;
module.exports = function (name) {
  var $Symbol = core.Symbol || (core.Symbol = LIBRARY ? {} : global.Symbol || {});
  if (name.charAt(0) != '_' && !(name in $Symbol)) defineProperty($Symbol, name, { value: wksExt.f(name) });
};


/***/ }),
/* 70 */
/***/ (function(module, exports, __webpack_require__) {

exports.f = __webpack_require__(5);


/***/ }),
/* 71 */
/***/ (function(module, exports) {

module.exports = '\x09\x0A\x0B\x0C\x0D\x20\xA0\u1680\u180E\u2000\u2001\u2002\u2003' +
  '\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u202F\u205F\u3000\u2028\u2029\uFEFF';


/***/ }),
/* 72 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(2);
var navigator = global.navigator;

module.exports = navigator && navigator.userAgent || '';


/***/ }),
/* 73 */
/***/ (function(module, exports, __webpack_require__) {

var ctx = __webpack_require__(26);
var invoke = __webpack_require__(74);
var html = __webpack_require__(41);
var cel = __webpack_require__(21);
var global = __webpack_require__(2);
var process = global.process;
var setTask = global.setImmediate;
var clearTask = global.clearImmediate;
var MessageChannel = global.MessageChannel;
var Dispatch = global.Dispatch;
var counter = 0;
var queue = {};
var ONREADYSTATECHANGE = 'onreadystatechange';
var defer, channel, port;
var run = function () {
  var id = +this;
  // eslint-disable-next-line no-prototype-builtins
  if (queue.hasOwnProperty(id)) {
    var fn = queue[id];
    delete queue[id];
    fn();
  }
};
var listener = function (event) {
  run.call(event.data);
};
// Node.js 0.9+ & IE10+ has setImmediate, otherwise:
if (!setTask || !clearTask) {
  setTask = function setImmediate(fn) {
    var args = [];
    var i = 1;
    while (arguments.length > i) args.push(arguments[i++]);
    queue[++counter] = function () {
      // eslint-disable-next-line no-new-func
      invoke(typeof fn == 'function' ? fn : Function(fn), args);
    };
    defer(counter);
    return counter;
  };
  clearTask = function clearImmediate(id) {
    delete queue[id];
  };
  // Node.js 0.8-
  if (__webpack_require__(27)(process) == 'process') {
    defer = function (id) {
      process.nextTick(ctx(run, id, 1));
    };
  // Sphere (JS game engine) Dispatch API
  } else if (Dispatch && Dispatch.now) {
    defer = function (id) {
      Dispatch.now(ctx(run, id, 1));
    };
  // Browsers with MessageChannel, includes WebWorkers
  } else if (MessageChannel) {
    channel = new MessageChannel();
    port = channel.port2;
    channel.port1.onmessage = listener;
    defer = ctx(port.postMessage, port, 1);
  // Browsers with postMessage, skip WebWorkers
  // IE8 has postMessage, but it's sync & typeof its postMessage is 'object'
  } else if (global.addEventListener && typeof postMessage == 'function' && !global.importScripts) {
    defer = function (id) {
      global.postMessage(id + '', '*');
    };
    global.addEventListener('message', listener, false);
  // IE8-
  } else if (ONREADYSTATECHANGE in cel('script')) {
    defer = function (id) {
      html.appendChild(cel('script'))[ONREADYSTATECHANGE] = function () {
        html.removeChild(this);
        run.call(id);
      };
    };
  // Rest old browsers
  } else {
    defer = function (id) {
      setTimeout(ctx(run, id, 1), 0);
    };
  }
}
module.exports = {
  set: setTask,
  clear: clearTask
};


/***/ }),
/* 74 */
/***/ (function(module, exports) {

// fast apply, http://jsperf.lnkit.com/fast-apply/5
module.exports = function (fn, args, that) {
  var un = that === undefined;
  switch (args.length) {
    case 0: return un ? fn()
                      : fn.call(that);
    case 1: return un ? fn(args[0])
                      : fn.call(that, args[0]);
    case 2: return un ? fn(args[0], args[1])
                      : fn.call(that, args[0], args[1]);
    case 3: return un ? fn(args[0], args[1], args[2])
                      : fn.call(that, args[0], args[1], args[2]);
    case 4: return un ? fn(args[0], args[1], args[2], args[3])
                      : fn.call(that, args[0], args[1], args[2], args[3]);
  } return fn.apply(that, args);
};


/***/ }),
/* 75 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var addToUnscopables = __webpack_require__(38);
var step = __webpack_require__(76);
var Iterators = __webpack_require__(32);
var toIObject = __webpack_require__(20);

// 22.1.3.4 Array.prototype.entries()
// 22.1.3.13 Array.prototype.keys()
// 22.1.3.29 Array.prototype.values()
// 22.1.3.30 Array.prototype[@@iterator]()
module.exports = __webpack_require__(77)(Array, 'Array', function (iterated, kind) {
  this._t = toIObject(iterated); // target
  this._i = 0;                   // next index
  this._k = kind;                // kind
// 22.1.5.2.1 %ArrayIteratorPrototype%.next()
}, function () {
  var O = this._t;
  var kind = this._k;
  var index = this._i++;
  if (!O || index >= O.length) {
    this._t = undefined;
    return step(1);
  }
  if (kind == 'keys') return step(0, index);
  if (kind == 'values') return step(0, O[index]);
  return step(0, [index, O[index]]);
}, 'values');

// argumentsList[@@iterator] is %ArrayProto_values% (9.4.4.6, 9.4.4.7)
Iterators.Arguments = Iterators.Array;

addToUnscopables('keys');
addToUnscopables('values');
addToUnscopables('entries');


/***/ }),
/* 76 */
/***/ (function(module, exports) {

module.exports = function (done, value) {
  return { value: value, done: !!done };
};


/***/ }),
/* 77 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var LIBRARY = __webpack_require__(18);
var $export = __webpack_require__(3);
var redefine = __webpack_require__(23);
var hide = __webpack_require__(8);
var Iterators = __webpack_require__(32);
var $iterCreate = __webpack_require__(78);
var setToStringTag = __webpack_require__(44);
var getPrototypeOf = __webpack_require__(30);
var ITERATOR = __webpack_require__(5)('iterator');
var BUGGY = !([].keys && 'next' in [].keys()); // Safari has buggy iterators w/o `next`
var FF_ITERATOR = '@@iterator';
var KEYS = 'keys';
var VALUES = 'values';

var returnThis = function () { return this; };

module.exports = function (Base, NAME, Constructor, next, DEFAULT, IS_SET, FORCED) {
  $iterCreate(Constructor, NAME, next);
  var getMethod = function (kind) {
    if (!BUGGY && kind in proto) return proto[kind];
    switch (kind) {
      case KEYS: return function keys() { return new Constructor(this, kind); };
      case VALUES: return function values() { return new Constructor(this, kind); };
    } return function entries() { return new Constructor(this, kind); };
  };
  var TAG = NAME + ' Iterator';
  var DEF_VALUES = DEFAULT == VALUES;
  var VALUES_BUG = false;
  var proto = Base.prototype;
  var $native = proto[ITERATOR] || proto[FF_ITERATOR] || DEFAULT && proto[DEFAULT];
  var $default = $native || getMethod(DEFAULT);
  var $entries = DEFAULT ? !DEF_VALUES ? $default : getMethod('entries') : undefined;
  var $anyNative = NAME == 'Array' ? proto.entries || $native : $native;
  var methods, key, IteratorPrototype;
  // Fix native
  if ($anyNative) {
    IteratorPrototype = getPrototypeOf($anyNative.call(new Base()));
    if (IteratorPrototype !== Object.prototype && IteratorPrototype.next) {
      // Set @@toStringTag to native iterators
      setToStringTag(IteratorPrototype, TAG, true);
      // fix for some old engines
      if (!LIBRARY && typeof IteratorPrototype[ITERATOR] != 'function') hide(IteratorPrototype, ITERATOR, returnThis);
    }
  }
  // fix Array#{values, @@iterator}.name in V8 / FF
  if (DEF_VALUES && $native && $native.name !== VALUES) {
    VALUES_BUG = true;
    $default = function values() { return $native.call(this); };
  }
  // Define iterator
  if ((!LIBRARY || FORCED) && (BUGGY || VALUES_BUG || !proto[ITERATOR])) {
    hide(proto, ITERATOR, $default);
  }
  // Plug for library
  Iterators[NAME] = $default;
  Iterators[TAG] = returnThis;
  if (DEFAULT) {
    methods = {
      values: DEF_VALUES ? $default : getMethod(VALUES),
      keys: IS_SET ? $default : getMethod(KEYS),
      entries: $entries
    };
    if (FORCED) for (key in methods) {
      if (!(key in proto)) redefine(proto, key, methods[key]);
    } else $export($export.P + $export.F * (BUGGY || VALUES_BUG), NAME, methods);
  }
  return methods;
};


/***/ }),
/* 78 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var create = __webpack_require__(79);
var descriptor = __webpack_require__(22);
var setToStringTag = __webpack_require__(44);
var IteratorPrototype = {};

// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
__webpack_require__(8)(IteratorPrototype, __webpack_require__(5)('iterator'), function () { return this; });

module.exports = function (Constructor, NAME, next) {
  Constructor.prototype = create(IteratorPrototype, { next: descriptor(1, next) });
  setToStringTag(Constructor, NAME + ' Iterator');
};


/***/ }),
/* 79 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
var anObject = __webpack_require__(13);
var dPs = __webpack_require__(80);
var enumBugKeys = __webpack_require__(43);
var IE_PROTO = __webpack_require__(31)('IE_PROTO');
var Empty = function () { /* empty */ };
var PROTOTYPE = 'prototype';

// Create object with fake `null` prototype: use iframe Object with cleared prototype
var createDict = function () {
  // Thrash, waste and sodomy: IE GC bug
  var iframe = __webpack_require__(21)('iframe');
  var i = enumBugKeys.length;
  var lt = '<';
  var gt = '>';
  var iframeDocument;
  iframe.style.display = 'none';
  __webpack_require__(41).appendChild(iframe);
  iframe.src = 'javascript:'; // eslint-disable-line no-script-url
  // createDict = iframe.contentWindow.Object;
  // html.removeChild(iframe);
  iframeDocument = iframe.contentWindow.document;
  iframeDocument.open();
  iframeDocument.write(lt + 'script' + gt + 'document.F=Object' + lt + '/script' + gt);
  iframeDocument.close();
  createDict = iframeDocument.F;
  while (i--) delete createDict[PROTOTYPE][enumBugKeys[i]];
  return createDict();
};

module.exports = Object.create || function create(O, Properties) {
  var result;
  if (O !== null) {
    Empty[PROTOTYPE] = anObject(O);
    result = new Empty();
    Empty[PROTOTYPE] = null;
    // add "__proto__" for Object.getPrototypeOf polyfill
    result[IE_PROTO] = O;
  } else result = createDict();
  return Properties === undefined ? result : dPs(result, Properties);
};


/***/ }),
/* 80 */
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__(9);
var anObject = __webpack_require__(13);
var getKeys = __webpack_require__(42);

module.exports = __webpack_require__(4) ? Object.defineProperties : function defineProperties(O, Properties) {
  anObject(O);
  var keys = getKeys(Properties);
  var length = keys.length;
  var i = 0;
  var P;
  while (length > i) dP.f(O, P = keys[i++], Properties[P]);
  return O;
};


/***/ }),
/* 81 */
/***/ (function(module, exports, __webpack_require__) {

var has = __webpack_require__(14);
var toIObject = __webpack_require__(20);
var arrayIndexOf = __webpack_require__(82)(false);
var IE_PROTO = __webpack_require__(31)('IE_PROTO');

module.exports = function (object, names) {
  var O = toIObject(object);
  var i = 0;
  var result = [];
  var key;
  for (key in O) if (key != IE_PROTO) has(O, key) && result.push(key);
  // Don't enum bug & hidden keys
  while (names.length > i) if (has(O, key = names[i++])) {
    ~arrayIndexOf(result, key) || result.push(key);
  }
  return result;
};


/***/ }),
/* 82 */
/***/ (function(module, exports, __webpack_require__) {

// false -> Array#indexOf
// true  -> Array#includes
var toIObject = __webpack_require__(20);
var toLength = __webpack_require__(28);
var toAbsoluteIndex = __webpack_require__(83);
module.exports = function (IS_INCLUDES) {
  return function ($this, el, fromIndex) {
    var O = toIObject($this);
    var length = toLength(O.length);
    var index = toAbsoluteIndex(fromIndex, length);
    var value;
    // Array#includes uses SameValueZero equality algorithm
    // eslint-disable-next-line no-self-compare
    if (IS_INCLUDES && el != el) while (length > index) {
      value = O[index++];
      // eslint-disable-next-line no-self-compare
      if (value != value) return true;
    // Array#indexOf ignores holes, Array#includes - not
    } else for (;length > index; index++) if (IS_INCLUDES || index in O) {
      if (O[index] === el) return IS_INCLUDES || index || 0;
    } return !IS_INCLUDES && -1;
  };
};


/***/ }),
/* 83 */
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(37);
var max = Math.max;
var min = Math.min;
module.exports = function (index, length) {
  index = toInteger(index);
  return index < 0 ? max(index + length, 0) : min(index, length);
};


/***/ }),
/* 84 */,
/* 85 */,
/* 86 */,
/* 87 */,
/* 88 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _helpers_applyListener__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(15);
/*
  *** WARNING ***
  This event handler is always active. It could be run while a direct connection is being
  used, while another proxy extension is active, or while the Private Internet Access
  extension is active.

  Being unaware of this could introduce serious bugs that compromise the security of the
  extension.

*/


function onError(app) {
  const basename = filename => {
    return filename.split('/').slice(-1);
  };

  return e => {
    const {
      filename,
      lineno,
      message
    } = e; // NOTE: This will catch any 'dead object' asynchronous bugs while the view is hanging.

    try {
      app.logger.debug(`javascript error at ${basename(filename)}:${lineno}: ${message}`);
    } catch (err) {
      // eslint-disable-next-line no-console
      console.log(err);
    }
  };
}

/* harmony default export */ __webpack_exports__["a"] = (Object(_helpers_applyListener__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])((app, addListener) => {
  addListener(onError(app));
}));

/***/ }),
/* 89 */,
/* 90 */,
/* 91 */,
/* 92 */,
/* 93 */,
/* 94 */,
/* 95 */,
/* 96 */,
/* 97 */,
/* 98 */,
/* 99 */,
/* 100 */,
/* 101 */,
/* 102 */,
/* 103 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {function getFormattedBrowser() {
  const browser = "chrome";
  const [firstChar] = browser;
  const tail = browser.slice(1);
  return firstChar.toLocaleUpperCase() + tail;
}

/* harmony default export */ __webpack_exports__["a"] = (function () {
  const self = Object.assign(Object.create(null), {
    name: "public",
    version: "2.1.1",
    date: new Date("Mon, 20 May 2019 19:44:56 GMT"),
    debug: "production" !== 'production',
    coupon: "PIACHROME",
    gitcommit: process.env.COMMIT_HASH,
    gitbranch: process.env.GIT_BRANCH,
    browser: getFormattedBrowser()
  });
  return Object.freeze(self);
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(118)))

/***/ }),
/* 104 */,
/* 105 */,
/* 106 */,
/* 107 */,
/* 108 */,
/* 109 */,
/* 110 */,
/* 111 */,
/* 112 */,
/* 113 */,
/* 114 */,
/* 115 */,
/* 116 */,
/* 117 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(143);


/***/ }),
/* 118 */
/***/ (function(module, exports) {

// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout () {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
} ())
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch(e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch(e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }


}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }



}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) { return [] }

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };


/***/ }),
/* 119 */,
/* 120 */,
/* 121 */,
/* 122 */,
/* 123 */,
/* 124 */,
/* 125 */,
/* 126 */,
/* 127 */,
/* 128 */,
/* 129 */,
/* 130 */,
/* 131 */,
/* 132 */,
/* 133 */,
/* 134 */,
/* 135 */,
/* 136 */,
/* 137 */,
/* 138 */,
/* 139 */,
/* 140 */,
/* 141 */,
/* 142 */,
/* 143 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es7.array.flat-map.js
var es7_array_flat_map = __webpack_require__(46);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.array.sort.js
var es6_array_sort = __webpack_require__(47);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es7.object.define-getter.js
var es7_object_define_getter = __webpack_require__(48);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es7.object.define-setter.js
var es7_object_define_setter = __webpack_require__(49);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es7.object.lookup-getter.js
var es7_object_lookup_getter = __webpack_require__(50);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es7.object.lookup-setter.js
var es7_object_lookup_setter = __webpack_require__(51);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es7.promise.finally.js
var es7_promise_finally = __webpack_require__(52);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es7.symbol.async-iterator.js
var es7_symbol_async_iterator = __webpack_require__(53);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es7.string.trim-left.js
var es7_string_trim_left = __webpack_require__(54);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es7.string.trim-right.js
var es7_string_trim_right = __webpack_require__(55);

// EXTERNAL MODULE: ./node_modules/core-js/modules/web.timers.js
var web_timers = __webpack_require__(56);

// EXTERNAL MODULE: ./node_modules/core-js/modules/web.immediate.js
var web_immediate = __webpack_require__(57);

// EXTERNAL MODULE: ./node_modules/core-js/modules/web.dom.iterable.js
var web_dom_iterable = __webpack_require__(58);

// CONCATENATED MODULE: ./src/js/util/storage.js
class Storage {
  constructor(app) {
    this.app = app; // bindings

    this.hasItem = this.hasItem.bind(this);
    this.getItem = this.getItem.bind(this);
    this.setItem = this.setItem.bind(this);
    this.removeItem = this.removeItem.bind(this); // init

    this.stores = {
      [Storage.MEMORY]: window.sessionStorage,
      [Storage.LOCAL]: window.localStorage
    };
  }
  /*------------------------------------------*/

  /*                Public                    */

  /*------------------------------------------*/


  hasItem(key, store = Storage.LOCAL) {
    if (Storage.validateStoreAndKey({
      store,
      key
    })) {
      const item = this.getItem(key, store);
      return item !== null;
    }

    throw Storage.createOperationError('has');
  }

  getItem(key, store = Storage.LOCAL) {
    if (Storage.validateStoreAndKey({
      store,
      key
    })) {
      return this.stores[store].getItem(key);
    }

    throw Storage.createOperationError('get');
  }

  setItem(key, value, store = Storage.LOCAL) {
    if (Storage.validateStoreAndKey({
      store,
      key
    })) {
      let newValue = value;

      if (typeof newValue === 'undefined' || newValue === null) {
        newValue = '';
      }

      this.stores[store].setItem(key, newValue);
    } else {
      throw Storage.createOperationError('set');
    }
  }

  removeItem(key, store = Storage.LOCAL) {
    if (Storage.validateStoreAndKey({
      store,
      key
    })) {
      this.stores[store].removeItem(key);
    } else {
      throw Storage.createOperationError('remove');
    }
  }
  /*------------------------------------------*/

  /*                Static                    */

  /*------------------------------------------*/


  static validateStore(store) {
    switch (store) {
      case Storage.LOCAL:
      case Storage.MEMORY:
        return true;

      default:
        debug(`no such store type: ${store}`);
        return false;
    }
  }

  static validateKey(key) {
    const type = typeof key;
    const isString = type === 'string';
    const isEmpty = isString && !key;

    if (!isString || isEmpty) {
      let msg = 'key must be a valid string. ';

      if (!isString) {
        msg += `was: ${type}`;
      } else {
        msg += 'was: empty string';
      }

      debug(msg);
      return false;
    }

    return true;
  }

  static validateStoreAndKey({
    store,
    key
  }) {
    return Storage.validateStore(store) && Storage.validateKey(key);
  }

  static createOperationError(operation) {
    // Refer to errors thrown in validateStore or validateKey
    return new Error(`could not ${operation} item, see above error for more information`);
  }

}

Storage.LOCAL = 'localStorage';
Storage.MEMORY = 'memoryStorage';
/* harmony default export */ var util_storage = (Storage);
// CONCATENATED MODULE: ./src/js/helpers/reportError.js
function reportError(...args) {
  const [name] = args;

  const act = err => {
    let errorMessage;

    if (typeof err === 'string') {
      errorMessage = err;
    } else {
      errorMessage = JSON.stringify(err, Object.getOwnPropertyNames(err));
    }

    debug(`${name}: ${errorMessage}`);
  };

  if (args.length > 1) {
    const err = args[1];
    return act(err);
  }

  return act;
}

/* harmony default export */ var helpers_reportError = (reportError);
// CONCATENATED MODULE: ./src/js/util/settings.js

/* Types

  interface AppSetting {
    settingDefault: boolean;
    settingID: string;
  }

  interface ContentSetting extends AppSetting {
    clearSetting(): void;
    applySetting(): void;
    isApplied(): boolean;
  }

  interface ChromeSetting extends ApiSetting {
    isApplied(): boolean;
    isControllable(): boolean;
  }

  type ApiSetting = ContentSetting | ChromeSetting;
*/

const ApplicationIDs = {
  BLOCK_PLUGINS: 'blockplugins',
  BLOCK_UTM: 'blockutm',
  BLOCK_FBCLID: 'blockfbclid',
  MACE_PROTECTION: 'maceprotection',
  DEBUG_MODE: 'debugmode',
  REMEMBER_ME: 'rememberme',
  DARK_THEME: 'darkTheme',
  HTTPS_UPGRADE: 'httpsUpgrade'
};

class settings_Settings {
  constructor(app) {
    // properties
    this.app = app;
    this.appDefaults = settings_Settings.appDefaults; // bindings

    this.init = this.init.bind(this);
    this.hasItem = this.hasItem.bind(this);
    this.getItem = this.getItem.bind(this);
    this.setItem = this.setItem.bind(this);
    this.toggle = this.toggle.bind(this);
    this.getControllable = this.getControllable.bind(this);
    this.enabled = this.enabled.bind(this);
  }
  /* App Getters */


  get storage() {
    return this.app.util.storage;
  }

  get proxy() {
    return this.app.proxy;
  }

  get logger() {
    return this.app.logger;
  }

  get contentSettings() {
    return this.app.contentsettings;
  }

  get chromeSettings() {
    return this.app.chromesettings;
  }

  get regionlist() {
    return this.app.util.regionlist;
  }
  /* Transformations */


  get apiSettings() {
    return [...Object.values(this.contentSettings), ...Object.values(this.chromeSettings)];
  }

  get allSettings() {
    return [...this.appDefaults, ...this.apiSettings];
  }

  get appIDs() {
    return this.appDefaults.map(setting => {
      return setting.settingID;
    });
  }

  get apiIDs() {
    return this.apiSettings.map(setting => {
      return setting.settingID;
    });
  }

  get settingIDs() {
    return this.allSettings.map(setting => {
      return setting.settingID;
    });
  }

  getInternalApiSetting(settingID) {
    return this.apiSettings.find(setting => {
      return setting.settingID === settingID;
    });
  }

  existsApplicationSetting(settingID) {
    return Boolean(this.appDefaults.find(setting => {
      return setting.settingID === settingID;
    }));
  }

  validID(settingID) {
    if (!this.settingIDs.includes(settingID)) {
      debug(`invalid settingID: ${settingID}`);
      return false;
    }

    return true;
  }

  toggleSetting(settingID) {
    const newValue = !this.getItem(settingID);
    this.setItem(settingID, newValue);
    return newValue;
  }
  /**
   * Toggle application setting (side effects handled here)
   *
   * @param {string} settingID id of setting
   *
   * @returns {boolean} new value of setting
   */


  toggleApplicationSetting(settingID) {
    const newValue = this.toggleSetting(settingID);

    switch (settingID) {
      case ApplicationIDs.MACE_PROTECTION:
        if (this.app.proxy.enabled()) {
          this.app.proxy.enable().catch(helpers_reportError('settings.js'));
        }

        break;

      case ApplicationIDs.DEBUG_MODE:
        if (!newValue) {
          this.logger.removeEntries();
        }

        break;

      default:
        break;
    }

    return newValue;
  }
  /**
   * Toggle API Setting (side effects handled by setting)
   *
   * @param {ApiSetting} setting Api Setting to toggle
   *
   * @returns {Promise<boolean>} new value of setting;
   */


  async toggleApiSetting(setting) {
    const toggle = setting.isApplied() ? setting.clearSetting : setting.applySetting;

    try {
      await toggle.call(setting);
    } catch (_) {
      debug(`failed to toggle setting: ${setting.settingID}`);
    }

    const newValue = setting.isApplied();
    this.setItem(setting.settingID, newValue);
    return newValue;
  }

  enabled() {
    const {
      app: {
        util: {
          user
        }
      }
    } = this;
    return user.getLoggedIn();
  }
  /**
   * Initialize the setting values
   *
   * @returns {void}
   */


  init() {
    this.allSettings.forEach(setting => {
      if (!this.hasItem(setting.settingID)) {
        this.setItem(setting.settingID, setting.settingDefault);
      }
    });
  }
  /**
   * Toggle the specified setting
   *
   * @param {string} settingID ID for setting
   *
   * @returns {Promise<boolean>} New value of setting
   *
   * @throws {Error} if settingID is not valid
   */


  async toggle(settingID) {
    // Look for setting in application settings
    if (this.existsApplicationSetting(settingID)) {
      return this.toggleApplicationSetting(settingID);
    }

    const apiSetting = this.getInternalApiSetting(settingID);

    if (apiSetting) {
      return this.toggleApiSetting(apiSetting);
    } // No such setting


    throw new Error(`settings.js: no such setting: ${settingID}`);
  }
  /**
   * Determine whether the setting exists yet
   *
   * @param {string} settingID ID for setting
   *
   * @returns {boolean} whether setting exists in storage
   *
   * @throws {Error} if settingID is not valid
   */


  hasItem(settingID) {
    if (this.validID(settingID)) {
      return this.storage.hasItem(`settings:${settingID}`);
    }

    throw new Error('settings.js: cannot perform hasItem without valid settingID');
  }
  /**
   * Get the specified setting value
   *
   * @param {string} settingID ID for setting
   *
   * @returns {boolean} value of setting
   *
   * @throws {Error} if settingID is not valid
   */


  getItem(settingID) {
    if (this.validID(settingID)) {
      return this.storage.getItem(`settings:${settingID}`) === 'true';
    }

    throw new Error('settings.js: cannot perform get without valid settingID');
  }
  /**
   * Set the value of specified setting
   *
   * @param {string} settingID ID of setting
   * @param {boolean} value new value for setting
   *
   * @throws {Error} if settingID is not valid
   *
   * @returns {void}
   */


  setItem(settingID, value) {
    if (this.validID(settingID)) {
      const newValue = String(value) === 'true';
      this.storage.setItem(`settings:${settingID}`, newValue);
    } else {
      throw new Error('settings.js: cannot perform set without valid settingID');
    }
  }

  getAvailable(settingID) {
    if (this.validID(settingID)) {
      if (Object.values(ApplicationIDs).includes(settingID)) {
        return true;
      }

      if (this.apiIDs.includes(settingID)) {
        const setting = this.getApiSetting(settingID);

        if (typeof setting.isAvailable === 'function') {
          return setting.isAvailable();
        }

        return true;
      }

      return true;
    }

    throw new Error('settings.js: cannot get available w/o valid settingID');
  }
  /**
   * Determine whether specified setting is controllable by user
   *
   * @param {string} settingID ID for setting
   *
   * @returns {boolean} Whether the setting is controllable by user
   *
   * @throws {Error} if settingID is not valid
   */


  getControllable(settingID) {
    if (this.validID(settingID)) {
      if (this.apiIDs.includes(settingID)) {
        const setting = this.getInternalApiSetting(settingID); // Chromesettings have function

        if (typeof setting.isControllable === 'function') {
          return setting.isControllable();
        }

        return true;
      } // By default controllable is true


      return true;
    }

    throw new Error('settings.js: cannot get controllable without valid settingID');
  }
  /**
   * Get the actual setting for specified API settingID
   *
   * @param {string} settingID ID of setting
   *
   * @returns {ApiSetting} setting corresponding to settingID
   *
   * @throws {Error} if settingID is not valid API setting
   */


  getApiSetting(settingID) {
    if (!this.validID(settingID)) {
      throw new Error('invalid settingID');
    } else if (this.apiIDs.includes(settingID)) {
      return this.apiSettings.find(s => {
        return s.settingID === settingID;
      });
    } else {
      throw new Error('settings.js: getApiSetting requires settingID for ApiSetting, not AppSetting');
    }
  }
  /**
   * Default values for Application Settings
   *
   * Also used as list of acceptable application settingID's
   */


  static get appDefaults() {
    return [{
      settingID: ApplicationIDs.BLOCK_PLUGINS,
      settingDefault: true
      /* TODO: unused until a bug in chrome is fixed. */

    }, {
      settingID: ApplicationIDs.BLOCK_UTM,
      settingDefault: true
    }, {
      settingID: ApplicationIDs.BLOCK_FBCLID,
      settingDefault: true
    }, {
      settingID: ApplicationIDs.MACE_PROTECTION,
      settingDefault: true
    }, {
      settingID: ApplicationIDs.DEBUG_MODE,
      settingDefault: false
    }, {
      settingID: ApplicationIDs.REMEMBER_ME,
      settingDefault: true
    }, {
      settingID: ApplicationIDs.DARK_THEME,
      settingDefault: true
    }, {
      settingID: ApplicationIDs.HTTPS_UPGRADE,
      settingDefault: true
    }];
  }

}

/* harmony default export */ var util_settings = (settings_Settings);
// CONCATENATED MODULE: ./src/js/util/icon.js
function Icon(app) {
  const greenRobots = {
    16: '/images/icons/icon16.png',
    32: '/images/icons/icon32.png',
    48: '/images/icons/icon48.png',
    64: '/images/icons/icon64.png',
    128: '/images/icons/icon128.png'
  };
  const redRobots = {
    16: '/images/icons/icon16red.png',
    32: '/images/icons/icon32red.png',
    48: '/images/icons/icon48red.png',
    64: '/images/icons/icon64red.png',
    128: '/images/icons/icon128red.png'
  };

  const newCanvasCtx = image => {
    const canvas = document.createElement('canvas');
    canvas.width = image.width;
    canvas.height = image.height;
    return canvas.getContext('2d');
  };

  const newImage = imagePath => {
    return new Promise((resolve, reject) => {
      const image = new Image();
      image.src = imagePath;

      image.onload = () => {
        return resolve(image);
      };

      image.onerror = reject;
    });
  };

  const drawImage = (ctx, image, x = 0, y = 0) => {
    ctx.drawImage(image, x, y, image.width, image.height);
    return ctx;
  };

  const drawBorder = (ctx, map) => {
    const {
      width,
      height,
      color,
      lineWidth
    } = map;
    ctx.strokeStyle = color;
    ctx.lineWidth = lineWidth;
    ctx.strokeRect(0, 0, width, height);
  };

  const drawFlagOnto = (ctx, flag) => {
    const fctx = drawImage(newCanvasCtx(flag), flag);
    drawBorder(fctx, {
      lineWidth: 1,
      height: flag.height,
      width: flag.width,
      color: '#000000'
    });
    const image = fctx.getImageData(0, 0, flag.width, flag.height);
    ctx.putImageData(image, 0, flag.width - flag.width * (9 / 16));
  };

  const getFlagPath = (regionISO, size) => {
    return `/images/flags/${regionISO}_icon_${size}.png`;
  };

  const getFlagUrl = (regionISO, size) => {
    return `https://www.privateinternetaccess.com/images/flags/icons/${regionISO}_icon_${size}px.png`;
  };

  const generateIcon = async (imageData, size, region) => {
    let flag = null;
    const images = imageData;
    const robot = await newImage(greenRobots[size]);
    const ctx = drawImage(newCanvasCtx(robot), robot);

    try {
      flag = await newImage(getFlagPath(region.iso, size));
    } catch (e) {
      try {
        flag = await newImage(getFlagUrl(region.iso, size));
      } catch (err) {
        debug(`icon.js: flag icon failed`);
      }
    }

    if (flag) {
      drawFlagOnto(ctx, flag);
    }

    images[size] = ctx.getImageData(0, 0, robot.width, robot.height);
  };

  const generateErrorIcon = async (imageData, size) => {
    const images = imageData;
    const redrobot = await newImage(redRobots[size]);
    const ctx = drawImage(newCanvasCtx(redrobot), redrobot);
    images[size] = ctx.getImageData(0, 0, redrobot.width, redrobot.height);
  };

  this.online = async () => {
    const imageData = {};
    const imagePromises = [];
    const region = app.util.regionlist.getSelectedRegion();
    Object.keys(greenRobots).forEach(size => {
      imagePromises.push(generateIcon(imageData, size, region));
    });
    Promise.all(imagePromises).then(() => {
      if (region && app.proxy.enabled()) {
        chrome.browserAction.setIcon({
          imageData
        });
        debug('icon.js: set icon online');
        this.updateTooltip();
      } else {
        debug('icon.js: ignore set icon online, not online');
      }
    });
  };

  this.offline = async () => {
    const imageData = {};
    const imagePromises = [];
    Object.keys(greenRobots).forEach(size => {
      imagePromises.push(generateErrorIcon(imageData, size));
    });
    Promise.all(imagePromises).then(() => {
      if (!app.proxy.enabled()) {
        chrome.browserAction.setIcon({
          imageData
        });
        debug('icon.js: set icon offline');
        this.updateTooltip();
      } else {
        debug('icon.js: ignore set icon offline, we\'re online');
      }
    });
  };

  this.updateTooltip = () => {
    let title;
    const {
      proxy,
      buildinfo
    } = app;
    const {
      regionlist,
      user
    } = app.util;
    const region = regionlist.getSelectedRegion();

    if (region && proxy.enabled()) {
      title = t('YouAreConnectedTo', {
        region: region.localizedName()
      });
    } else {
      title = user.getLoggedIn() ? t('YouAreNotConnected') : 'Private Internet Access';
    } // Badge


    chrome.browserAction.setTitle({
      title
    });

    const badgeInfo = (() => {
      switch (buildinfo.name) {
        case 'beta':
          return {
            text: buildinfo.name,
            color: '#FF0000'
          };

        case 'dev':
        case 'e2e':
        case 'qa':
          return {
            text: buildinfo.name,
            color: '#0198E1'
          };

        default:
          return null;
      }
    })();

    if (badgeInfo) {
      if (region && proxy.enabled()) {
        chrome.browserAction.setBadgeText({
          text: ''
        });
      } else {
        const {
          text,
          color
        } = badgeInfo;
        chrome.browserAction.setBadgeText({
          text
        });
        chrome.browserAction.setBadgeBackgroundColor({
          color
        });
      }
    }

    debug(`icon.js: tooltip updated`);
  };

  return this;
}
// EXTERNAL MODULE: ./src/js/helpers/http.js
var http = __webpack_require__(33);

// CONCATENATED MODULE: ./src/js/util/regionlist.js

const OVERRIDE_KEY = 'regionlist::override';

class regionlist_RegionList {
  constructor(app) {
    // bindings
    this.testHost = this.testHost.bind(this);
    this.testPort = this.testPort.bind(this);
    this.getPotentialRegions = this.getPotentialRegions.bind(this);
    this.getPotentialHosts = this.getPotentialHosts.bind(this);
    this.getPotentialPorts = this.getPotentialPorts.bind(this);
    this.initialOverrideRegions = this.initialOverrideRegions.bind(this);
    this.addOverrideRegion = this.addOverrideRegion.bind(this);
    this.updateOverrideRegion = this.updateOverrideRegion.bind(this);
    this.removeOverrideRegion = this.removeOverrideRegion.bind(this);
    this.getOverrideArray = this.getOverrideArray.bind(this);
    this.updateRegion = this.updateRegion.bind(this);
    this.getRegion = this.getRegion.bind(this);
    this.hasRegions = this.hasRegions.bind(this);
    this.hasRegion = this.hasRegion.bind(this);
    this.getIsAuto = this.getIsAuto.bind(this);
    this.setIsAuto = this.setIsAuto.bind(this);
    this.getFastestRegion = this.getFastestRegion.bind(this);
    this.getAutoRegion = this.getAutoRegion.bind(this);
    this.setAutoRegion = this.setAutoRegion.bind(this);
    this.getRegions = this.getRegions.bind(this);
    this.toArray = this.toArray.bind(this);
    this.isSelectedRegion = this.isSelectedRegion.bind(this);
    this.getSelectedRegion = this.getSelectedRegion.bind(this);
    this.setSelectedRegion = this.setSelectedRegion.bind(this);
    this.sync = this.sync.bind(this);
    this.setFavoriteRegion = this.setFavoriteRegion.bind(this); // init

    this.app = app;
    this.storage = this.app.util.storage;
    this.normalRegions = {};
    this.overrideRegions = this.initialOverrideRegions(this.storage); // set isAuto property based on localStorage

    const isAutoString = this.app.util.storage.getItem('autoRegion');
    const region = this.app.util.storage.getItem('region');

    if (isAutoString === 'true') {
      this.isAuto = true;
    } else if (!isAutoString && !region) {
      this.isAuto = true;
    } else {
      this.isAuto = false;
    } // poll for new regions every 30 minutes


    chrome.alarms.create('PollRegionList', {
      delayInMinutes: 30,
      periodInMinutes: 60
    });
  } // ---------------------- Auth Tests --------------------- //

  /**
   * Test to see if the provided host is potentially used w/ active proxy
   *
   * @param {string} host The host to test
   */


  testHost(host) {
    return this.getPotentialHosts().includes(host);
  }
  /**
   * Test to see if the provided port is potentially used w/ active proxy
   *
   * @param {number} port The port to test
   */


  testPort(port) {
    return this.getPotentialPorts().includes(port);
  }

  getPotentialRegions() {
    let regions;
    const {
      util: {
        storage
      }
    } = this.app;
    const fromStorage = storage.getItem('region');
    const fromMemory = this.getRegions();

    if (fromStorage) {
      const storageRegion = JSON.parse(fromStorage);
      regions = Object.assign({}, fromMemory, {
        [storageRegion.id]: storageRegion
      });
    } else {
      regions = fromMemory;
    }

    return Object.values(regions);
  }
  /**
   * Get a list of hosts that are potentially being used for the active proxy connection
   */


  getPotentialHosts() {
    return this.getPotentialRegions().map(r => {
      return r.host;
    });
  }
  /**
   * Get a list of ports that are potentially being used for the active proxy connection
   */


  getPotentialPorts() {
    const {
      util: {
        settings
      }
    } = this.app;
    const key = settings.getItem('maceprotection') ? 'macePort' : 'port';
    return this.getPotentialRegions().map(r => {
      return r[key];
    });
  } // -------------------- Override Regions ----------------------- //


  initialOverrideRegions() {
    let overrideRegions;
    const fromStorage = this.storage.getItem(OVERRIDE_KEY);

    if (fromStorage) {
      overrideRegions = {};
      const fromStorageMap = JSON.parse(fromStorage);
      Object.keys(fromStorageMap).forEach(id => {
        overrideRegions[id] = regionlist_RegionList.localize(fromStorageMap[id]);
      });
    } else {
      overrideRegions = {};
      this.storage.setItem(OVERRIDE_KEY, JSON.stringify(overrideRegions));
    }

    return overrideRegions;
  }
  /**
   * Add a new override region
   */


  addOverrideRegion({
    name,
    host,
    port
  }) {
    try {
      const region = regionlist_RegionList.createOverrideRegion({
        name,
        host,
        port
      });
      this.updateOverrideRegion(region);
    } catch (err) {
      const msg = err.message || err;
      debug(msg);
      throw err;
    }
  }

  updateOverrideRegion(region) {
    if (!region.override || !region.id) {
      throw new Error('invalid region');
    }

    this.overrideRegions[region.id] = region;
    this.storage.setItem(OVERRIDE_KEY, JSON.stringify(this.overrideRegions));
  }
  /**
   * Remove an existing override region by name
   */


  removeOverrideRegion(name) {
    let wasSelected = false;
    const id = regionlist_RegionList.createOverrideID(name);
    const region = this.overrideRegions[id];
    delete this.overrideRegions[id];

    if (region && region.active) {
      wasSelected = true;
      let toSelect = this.getFastestRegion();

      if (!toSelect) {
        [toSelect] = this.getRegions();
      }

      if (toSelect) {
        this.setSelectedRegion(this.getFastestRegion().id);
      }
    }

    this.storage.setItem(OVERRIDE_KEY, JSON.stringify(this.overrideRegions));
    return wasSelected;
  }
  /**
   * Retrieve an array of override regions
   */


  getOverrideArray() {
    return Object.values(this.overrideRegions);
  } // --------------------- General ---------------------- //


  updateRegion(region) {
    if (region.override) {
      this.updateOverrideRegion(region);
    } else {
      this.normalRegions[region.id] = region;
    }
  }

  getRegion(id) {
    return this.getRegions()[id];
  }
  /**
   * Returns whether there are regions in memory
   */


  hasRegions() {
    return !!this.toArray().length;
  }

  hasRegion(id) {
    return !!this.getRegion(id);
  }
  /**
   * Returns the isAuto flag, this determines whether the extension is in 'auto' mode
   */


  getIsAuto() {
    return this.isAuto;
  }
  /**
   * Sets the given value to isAuto and saves that value to localStorage
   */


  setIsAuto(value) {
    this.isAuto = value;
    this.app.util.storage.setItem('autoRegion', value);
  }
  /**
   * Calculates the fastest region given current latency times.
   * Can return undefined if no regions exists.
   */


  getFastestRegion() {
    if (!this.hasRegions()) {
      return undefined;
    }

    const regions = this.toArray();
    const {
      regionsorter
    } = this.app.util;
    const sorted = regionsorter.latencySort(regions);
    return sorted[0];
  }
  /**
   * Returns the 'auto' region, the fastest region based on latency
   */


  getAutoRegion() {
    return this.autoRegion;
  }
  /**
   * Sets autoRegion to an immutable copy of given region value.
   */


  setAutoRegion(region) {
    this.autoRegion = Object.assign({}, region);
  }

  getRegions() {
    return Object.assign({}, this.normalRegions, this.overrideRegions);
  }
  /**
   * Iterates through the regionMap and sets the active property to false for all regions.
   */


  clearActive() {
    this.toArray().forEach(currentRegion => {
      const thisRegion = currentRegion;
      thisRegion.active = false;
    });
  }

  toArray() {
    return Object.values(this.getRegions());
  }

  isSelectedRegion(region) {
    if (!this.getSelectedRegion()) {
      return false;
    }

    return this.getSelectedRegion().id === region.id;
  }
  /*
    NOTE: we keep an on-disk copy of the last selected region,
    incase this method is called when the region list has
    not synced.
  */


  getSelectedRegion() {
    let selectedRegion;
    let storageRegion; // check if auto region is used

    if (this.getIsAuto()) {
      selectedRegion = this.getAutoRegion();
    } // look for active region in memory


    if (!selectedRegion) {
      selectedRegion = this.toArray().find(region => {
        return region.active;
      });
    } // look for active region in localStorage


    if (!selectedRegion) {
      storageRegion = this.storage.getItem('region');
    }

    if (!selectedRegion && storageRegion) {
      try {
        selectedRegion = regionlist_RegionList.localize(JSON.parse(storageRegion));
      } catch (_) {
        /* noop */
      }
    } // selectedRegion can be undefined if there are no regions


    return selectedRegion;
  }

  setSelectedRegion(id) {
    let selectedRegion;

    const clearRegion = r => {
      this.updateRegion(Object.assign({}, r, {
        active: false
      }));
    };

    const activeRegions = this.toArray().filter(r => {
      return r.active;
    });
    activeRegions.forEach(clearRegion);

    if (id === 'auto') {
      this.setIsAuto(true);
      selectedRegion = this.getAutoRegion();
    } else {
      this.setIsAuto(false);
      selectedRegion = this.getRegion(id);

      if (!selectedRegion) {
        throw new Error(`no such region with id ${id}`);
      } // Set new region active


      this.updateRegion(Object.assign({}, selectedRegion, {
        active: true
      }));
    }

    this.storage.setItem('region', JSON.stringify(selectedRegion));
  }

  async sync() {
    const {
      util: {
        storage,
        bypasslist,
        latencymanager
      }
    } = this.app; // keep track of current favorite regions

    let favoriteRegions = storage.getItem('favoriteregions');

    if (favoriteRegions) {
      favoriteRegions = favoriteRegions.split(',');
    } else {
      favoriteRegions = [];
    }

    regionlist_RegionList.debug('start sync');

    try {
      // get latest regions from server
      const url = 'https://www.privateinternetaccess.com/api/client/services/https';
      const response = await http["a" /* default */].get(url, {
        timeout: 5000
      });
      const json = await response.json(); // clear current region data

      this.normalRegions = {}; // replace with new data from server

      Object.keys(json).forEach(regionID => {
        const region = regionlist_RegionList.createNormalRegion(regionID, json[regionID]);

        if (favoriteRegions.includes(region.id)) {
          region.isFavorite = true;
        }

        this.normalRegions[region.id] = region;
      }); // update bypasslist with new dns records

      bypasslist.updatePingGateways(); // update region latency

      await latencymanager.run(); // set new auto region

      this.setAutoRegion(this.getFastestRegion()); // if auto mode and proxy is on, just connect to the new auto region

      if (this.getIsAuto() && this.app.proxy.enabled()) {
        await this.app.proxy.enable();
      }

      regionlist_RegionList.debug('sync ok');
      return response;
    } catch (err) {
      regionlist_RegionList.debug('sync error', err);
      return err;
    }
  }
  /**
   * Toggle whether or not the provided region is favorited
   *
   * @param {*|string} region Provided region to toggle
   */


  setFavoriteRegion(region) {
    const {
      util: {
        storage
      }
    } = this.app; // Get regionID

    let regionID = '';

    if (typeof region === 'string') {
      regionID = region;
    } else {
      regionID = region.id;
    } // Determine current value of isFavorite


    let isFavorite = false;
    const memRegion = this.toArray().find(r => {
      return r.id === regionID;
    });
    ({
      isFavorite
    } = memRegion); // get current favorite regions from storage

    let currentFavs = storage.getItem('favoriteregions');

    if (currentFavs) {
      currentFavs = currentFavs.split(',');
    } else {
      currentFavs = [];
    } // update favorite regions in storage


    if (!isFavorite) {
      currentFavs.push(regionID);
      const favs = [...new Set(currentFavs)];
      storage.setItem('favoriteregions', favs.join(','));
    } else {
      currentFavs = currentFavs.filter(fav => {
        return fav !== regionID;
      });
      storage.setItem('favoriteregions', currentFavs.join(','));
    } // Update in memory region


    const newRegion = Object.assign({}, memRegion, {
      isFavorite: !isFavorite
    });
    this.updateRegion(newRegion);
  } // --------------------- Static ---------------------- //


  static createOverrideID(name) {
    return `override::${name.trim().toLowerCase()}`.replace(' ', '_');
  }

  static localize(region) {
    const localized = Object.assign({}, region, {
      localizedName() {
        if (localized.id.includes('override::')) {
          return localized.name;
        }

        const name = t(localized.id);
        return name.length > 0 ? name : localized.name;
      }

    });
    return localized;
  }

  static createOverrideRegion({
    name,
    host,
    port
  }) {
    if (!name) {
      throw new Error('name must not be empty');
    }

    if (!host) {
      throw new Error('host must not be empty');
    }

    if (typeof port !== 'number') {
      throw new Error('port must be a number');
    }

    if (port < 0 || port > 65535) {
      throw new Error('invalid port range');
    }

    const lowerCaseName = name.toLowerCase();
    return regionlist_RegionList.localize({
      id: regionlist_RegionList.createOverrideID(lowerCaseName),
      override: true,
      name: lowerCaseName,
      host,
      port,
      ping: host,
      macePort: port,
      iso: 'OR',
      scheme: 'https',
      active: false,
      latency: 'PENDING',
      offline: false,
      isFavorite: true,
      flag: 'images/flags/override_icon_64.png'
    });
  }

  static createNormalRegion(regionID, region) {
    return regionlist_RegionList.localize({
      scheme: 'https',
      id: regionID,
      ping: region.ping,
      name: region.name,
      iso: region.iso,
      host: region.dns,
      port: region.port,
      macePort: region.mace,
      flag: `/images/flags/${region.iso}_icon_64.png`,
      active: false,
      latency: 'PENDING',
      offline: false,
      isFavorite: false,
      override: false
    });
  }

  static debug(msg, err) {
    const debugMsg = `regionlist.js: ${msg}`;
    debug(debugMsg);

    if (err) {
      const errMsg = `regionlist.js error: ${JSON.stringify(err, Object.getOwnPropertyNames(err))}`;
      debug(errMsg);
    }

    return new Error(debugMsg);
  }

}

/* harmony default export */ var util_regionlist = (regionlist_RegionList);
// CONCATENATED MODULE: ./src/js/helpers/compare.js
const ERROR = 'ERROR';
const PENDING = 'PENDING';

function byLatency(a, b) {
  if (a < 0) {
    return 1;
  }

  if (b < 0) {
    return -1;
  }

  if (a === ERROR) {
    return 1;
  }

  if (b === ERROR) {
    return -1;
  }

  if (a === PENDING) {
    return 1;
  }

  if (b === PENDING) {
    return -1;
  }

  return a - b;
}


// CONCATENATED MODULE: ./src/js/util/regionsorter.js


class regionsorter_RegionSorter {
  constructor(app) {
    this.app = app;
    this.nameSort = this.nameSort.bind(this);
    this.latencySort = this.latencySort.bind(this);
  } // eslint-disable-next-line class-methods-use-this


  nameSort(regions) {
    return regions.sort((a, b) => {
      return a.name.localeCompare(b.name);
    });
  } // eslint-disable-next-line class-methods-use-this


  latencySort(regions) {
    return regions.sort((a, b) => {
      return byLatency(a.latency, b.latency);
    });
  }

}

/* harmony default export */ var regionsorter = (regionsorter_RegionSorter);
// CONCATENATED MODULE: ./src/js/util/user.js

const USERNAME_KEY = 'form:username';
const PASSWORD_KEY = 'form:password';
const LOGGED_IN_KEY = 'loggedIn';
const REMEMBER_ME_KEY = 'rememberme';
const AUTH_TOKEN_KEY = 'authToken';
const AUTH_TIMEOUT = 5000;
const AUTH_ENDPOINT = 'https://www.privateinternetaccess.com/api/client/v2/token';
const ACCOUNT_ENDPOINT = 'https://www.privateinternetaccess.com/api/client/v2/account';

class user_User {
  constructor(app) {
    // bindings
    this.getLoggedIn = this.getLoggedIn.bind(this);
    this.setLoggedIn = this.setLoggedIn.bind(this);
    this.getRememberMe = this.getRememberMe.bind(this);
    this.setRememberMe = this.setRememberMe.bind(this);
    this.getUsername = this.getUsername.bind(this);
    this.setUsername = this.setUsername.bind(this);
    this.getPassword = this.getPassword.bind(this);
    this.getAuthToken = this.getAuthToken.bind(this);
    this.setAuthToken = this.setAuthToken.bind(this);
    this.setAccount = this.setAccount.bind(this);
    this.updateAccount = this.updateAccount.bind(this);
    this.auth = this.auth.bind(this);
    this.logout = this.logout.bind(this);
    this.init = this.init.bind(this); // init

    this.app = app;
    this.authTimeout = 5000; // handle getting account info from localStorage

    this.account = undefined;
    const accountString = this.storage.getItem('account');

    if (accountString) {
      try {
        this.account = JSON.parse(accountString);
      } catch (err) {
        /* noop */
      }
    } // get credentials and loggedIn from storage


    const {
      util: {
        storage
      }
    } = app;
    this.username = storage.getItem(USERNAME_KEY) || '';
    this.authToken = storage.getItem(AUTH_TOKEN_KEY) || ''; // init loggedIn, user#setLoggedIn relies on app to be initialized

    this.loggedIn = storage.getItem(LOGGED_IN_KEY) === String(true);
  }
  /* ------------------------------------ */

  /*              Getters                 */

  /* ------------------------------------ */


  get storage() {
    return this.app.util.storage;
  }

  get settings() {
    return this.app.util.settings;
  }

  get icon() {
    return this.app.util.icon;
  }

  get proxy() {
    return this.app.proxy;
  }

  async init() {
    const {
      util: {
        storage
      }
    } = this.app;
    const password = storage.getItem(PASSWORD_KEY) || null; // If credentials exists and loggedIn, re-auth using token
    // NOTE: This should be removed after all users are no longer using the old auth system

    if (password && this.username && this.getLoggedIn()) {
      try {
        await this.auth(this.username, password);
      } catch (_) {
        this.setLoggedIn(false);
      }
    } else {
      // call setLoggedIn to setup other modules relying on user
      this.setLoggedIn(this.getLoggedIn());
    } // clear legacy password


    this.password = null;
    storage.removeItem(PASSWORD_KEY);
  }

  getLoggedIn() {
    return this.loggedIn;
  }

  setLoggedIn(value) {
    const {
      app: {
        util: {
          settingsmanager
        }
      }
    } = this;
    this.loggedIn = value;
    this.storage.setItem(LOGGED_IN_KEY, value);

    if (value) {
      settingsmanager.enable();
    } else {
      settingsmanager.disable();
    }
  }

  getRememberMe() {
    return this.settings.getItem(REMEMBER_ME_KEY);
  }

  setRememberMe(rememberMe) {
    let username = '';

    if (rememberMe) {
      username = this.getUsername();
    } // update username and rememberMe in localStorage


    this.storage.setItem(USERNAME_KEY, username);
    this.settings.setItem(REMEMBER_ME_KEY, Boolean(rememberMe));
  }

  getUsername() {
    return this.username || '';
  }

  setUsername(username) {
    this.username = username.trim();

    if (this.getRememberMe()) {
      this.storage.setItem(USERNAME_KEY, this.username);
    }
  }

  getPassword() {
    return this.password || '';
  }

  getAuthToken() {
    return this.authToken || '';
  }

  setAuthToken(authToken) {
    this.authToken = authToken;
    this.storage.setItem(AUTH_TOKEN_KEY, authToken);
  }

  setAccount(account) {
    if (!account) {
      return;
    }

    this.account = account;
    delete this.account.email;
    this.storage.setItem('account', JSON.stringify(account));
  }

  updateAccount() {
    debug('user.js: start account info');
    const headers = {
      Authorization: `Token ${this.authToken}`
    };
    return http["a" /* default */].get(ACCOUNT_ENDPOINT, {
      headers
    }).then(res => {
      debug('user.js: account info ok');
      return res.json();
    }).then(body => {
      this.setAccount(body);
      return body;
    }).catch(res => {
      debug(`user.js: account info error, ${res.cause}`);
    });
  }

  auth(rawUsername, password) {
    const username = rawUsername.trim();
    const body = JSON.stringify({
      username,
      password
    });
    const headers = {
      'Content-Type': 'application/json'
    };
    const options = {
      headers,
      body,
      timeout: AUTH_TIMEOUT
    };
    return http["a" /* default */].post(AUTH_ENDPOINT, options).then(res => {
      return res.json();
    }).then(resBody => {
      // set user as authenticated
      this.setAuthToken(resBody.token);
      this.setLoggedIn(true);
      this.icon.updateTooltip(); // update account information

      this.updateAccount();
      return resBody;
    }).catch(res => {
      this.setLoggedIn(false);
      throw res;
    });
  }

  logout(cb) {
    /* FIXME: remove callback for promise chaining. */
    return this.proxy.disable().then(() => {
      this.setLoggedIn(false);
      this.setAuthToken(null);
      this.icon.updateTooltip();

      if (cb) {
        cb();
      }
    });
  }

}

/* harmony default export */ var user = (user_User);
// CONCATENATED MODULE: ./src/js/util/bypasslist.js
class BypassList {
  constructor(app) {
    // Bindings
    this.init = this.init.bind(this);
    this.generatePingGateways = this.generatePingGateways.bind(this);
    this.updatePingGateways = this.updatePingGateways.bind(this);
    this.isRuleEnabled = this.isRuleEnabled.bind(this);
    this.popularRulesByName = this.popularRulesByName.bind(this);
    this.visibleSize = this.visibleSize.bind(this);
    this.restartProxy = this.restartProxy.bind(this);
    this.getUserRules = this.getUserRules.bind(this);
    this.setUserRules = this.setUserRules.bind(this);
    this.addUserRule = this.addUserRule.bind(this);
    this.removeUserRule = this.removeUserRule.bind(this);
    this.enablePopularRule = this.enablePopularRule.bind(this);
    this.disablePopularRule = this.disablePopularRule.bind(this);
    this.enabledPopularRules = this.enabledPopularRules.bind(this);
    this.toArray = this.toArray.bind(this);
    this.saveRulesToFile = this.saveRulesToFile.bind(this);
    this.importRules = this.importRules.bind(this);
    this.spawnImportTab = this.spawnImportTab.bind(this); // Init

    this.app = app;
    this.storage = app.util.storage;
    this.storageKeys = {
      userrk: 'bypasslist:customlist',
      poprk: 'bypasslist:popularrules'
    };
    this.enabledRules = new Map([['privatenetworks', ['0.0.0.0/8', '10.0.0.0/8', '127.0.0.0/8', '169.254.0.0/16', '192.168.0.0/16', '172.16.0.0/12', '::1', 'localhost', '*.local']], ['pinggateways', this.generatePingGateways()], [this.storageKeys.userrk, []], [this.storageKeys.poprk, []]]);
    this.netflixBypassRules = ['https://netflix.com', 'https://*.netflix.com', 'https://*.nflxvideo.net', 'https://*.nflximg.net'];
    this.huluBypassRules = ['https://*.hulu.com', 'https://*.hulustream.com'];
    this.popularRules = Object.freeze(new Map([['netflix', this.netflixBypassRules], ['hulu', this.huluBypassRules]]));
  }

  static trimUserRules(rules) {
    return rules.map(e => {
      return e.trim();
    }).filter(e => {
      return e.length > 0;
    });
  }

  init() {
    const {
      userrk,
      poprk
    } = this.storageKeys;

    if (this.storage.hasItem(userrk) && this.storage.getItem(userrk).length > 0) {
      this.setUserRules(this.storage.getItem(userrk).split(','));
    }

    if (this.storage.hasItem(poprk) && this.storage.getItem(poprk).length > 0) {
      this.storage.getItem(poprk).split(',').forEach(name => {
        return this.enablePopularRule(name);
      });
    }
  }

  generatePingGateways() {
    const {
      util: {
        regionlist
      }
    } = this.app;
    const http = regionlist.toArray().map(r => {
      return `http://${r.host}:8888`;
    });
    const https = regionlist.toArray().map(r => {
      return `https://${r.host}:8888`;
    });
    return http.concat(https);
  }

  updatePingGateways() {
    this.enabledRules.set('pinggateways', this.generatePingGateways());

    if (this.app.proxy.enabled()) {
      this.app.proxy.enable();
    }
  }

  isRuleEnabled(ruleName) {
    return this.enabledRules.has(ruleName);
  }

  popularRulesByName() {
    return Array.from(this.popularRules.keys());
  }

  visibleSize() {
    return this.getUserRules().length + this.enabledPopularRules().length;
  }

  async restartProxy(cb = () => {}) {
    const {
      proxy
    } = this.app;

    if (!proxy) {
      throw new Error(debug('proxy not ready'));
    }

    if (proxy.enabled()) {
      await proxy.enable().then(cb);
    } else {
      await Promise.resolve(cb());
    }
  }

  getUserRules() {
    return BypassList.trimUserRules(Array.from(this.enabledRules.get(this.storageKeys.userrk)));
  }

  setUserRules(rules) {
    this.storage.setItem(this.storageKeys.userrk, BypassList.trimUserRules(Array.from(rules)).join(','));
    this.enabledRules.set(this.storageKeys.userrk, rules);
    return this.getUserRules();
  }

  addUserRule(string, restartProxy = false) {
    let userString = string;

    if (userString.endsWith('/')) {
      userString = string.substring(0, string.length - 1);
    }

    const userRules = this.getUserRules();
    userRules.push(userString);
    this.setUserRules([...new Set(userRules)]);

    if (restartProxy) {
      this.restartProxy();
    }
  }

  removeUserRule(string, restartProxy = false) {
    let userString = string;

    if (userString.endsWith('/')) {
      userString = string.substring(0, string.length - 1);
    }

    const rules = this.getUserRules();
    this.setUserRules(rules.filter(e => {
      return e !== userString;
    }));

    if (restartProxy) {
      this.restartProxy();
    }
  }

  enablePopularRule(name, restartProxy = true) {
    if (!this.popularRulesByName().includes(name)) {
      return Promise.reject(new Error(`${name} is not a valid popular rule`));
    }

    if (this.enabledPopularRules().includes(name)) {
      return Promise.resolve();
    }

    return new Promise(resolve => {
      const complete = () => {
        this.storage.setItem(this.storageKeys.poprk, this.enabledPopularRules().join(','));
        debug(`bypasslist: added ${name}`);
        resolve();
      };

      this.enabledRules.set(name, this.popularRules.get(name));

      if (restartProxy) {
        this.restartProxy(complete);
      } else {
        complete();
      }
    });
  }

  disablePopularRule(name, restartProxy = true) {
    if (!this.popularRulesByName().includes(name)) {
      return Promise.reject(new Error(`${name} is not a valid popular rule`));
    }

    return new Promise((resolve, reject) => {
      const complete = () => {
        this.storage.setItem(this.storageKeys.poprk, this.enabledPopularRules().join(','));
        resolve();
        debug(`bypasslist: removed ${name}`);
      };

      if (this.enabledRules.has(name)) {
        this.enabledRules.delete(name);

        if (restartProxy) {
          this.restartProxy(complete);
        } else {
          complete();
        }
      } else {
        reject(new Error('rule not found'));
      }
    });
  }

  enabledPopularRules() {
    const enabledRulesByName = Array.from(this.enabledRules.keys());
    const popularRulesByName = this.popularRulesByName();
    return popularRulesByName.filter(name => {
      return enabledRulesByName.includes(name);
    });
  }

  toArray() {
    const rules = [...Array.from(this.enabledRules.values())];
    return [].concat(...rules.map(r => {
      return typeof r === 'function' ? r() : r;
    }));
  }
  /**
   * Create a file containing the current ruleset and download it on client
   *
   * @returns {void}
   */


  saveRulesToFile() {
    // Due to a bug in chromium, the chrome.downloads API will crash the browser
    // if used on the background script, present in Chromium 70 (unknown fix target).
    // Gitlab issue: https://codex.londontrustmedia.com/extension/pia_chrome/issues/81
    // Chromium bug: https://bugs.chromium.org/p/chromium/issues/detail?id=892133&can=1&q=extension%20downloads&colspec=ID%20Pri%20M%20Stars%20ReleaseBlock%20Component%20Status%20Owner%20Summary%20OS%20Modified
    throw new Error('bypasslist.js: saveRulesToFile not available.'); // const payload = JSON.stringify({
    //   popularRules: this.enabledPopularRules(),
    //   userRules: this.getUserRules(),
    // });
    // const file = new File('application/json', [payload]);
    // file.download('bypass-rules.json');
  }
  /**
   * Import the specified rule sets into the application
   *
   * @param {object} rules Set of rules to import
   * @returns {void}
   */


  importRules({
    userRules,
    popularRules
  }) {
    const importRuleSet = (importedRules, getRules, enableRule, disableRule) => {
      if (Array.isArray(importedRules)) {
        // Disable rules not in importedRules
        getRules().forEach(rule => {
          if (!importedRules.includes(rule)) {
            disableRule(rule);
          }
        }); // Enable importedRules

        importedRules.forEach(enableRule);
      } // Disable all rules
      else if (typeof importedRules === 'undefined') {
          getRules().forEach(disableRule);
        } else {
          debug('rule set is invalid type, expected array');
        }
    };

    try {
      importRuleSet(userRules, this.getUserRules, name => {
        return this.addUserRule(name, false);
      }, name => {
        return this.removeUserRule(name, false);
      });
      importRuleSet(popularRules, this.enabledPopularRules, name => {
        return this.enablePopularRule(name, false);
      }, name => {
        return this.disablePopularRule(name, false);
      });
      this.restartProxy();
    } catch (err) {
      debug(`failed to update rules with error: ${err}`);
    }
  }
  /**
   * Create a new popup window for importing rules file
   *
   * @returns {Promise<void>}
   */


  spawnImportTab() {
    // eslint-disable-line class-methods-use-this
    chrome.tabs.create({
      url: chrome.runtime.getURL('html/popups/importrules.html')
    });
  }

}
// CONCATENATED MODULE: ./src/js/util/latencymanager.js


/**
 * LatencyManager
 * ==============
 *
 * Responsible for managing the `latency` field for regions.
 *
 * "round" - record RTT for single request to region
 * "test" -  perform ${ROUNDS} rounds consecutively
 * "run" - perform ${MAX_CONCURRENT} tests concurrently
 */

class latencymanager_LatencyManager {
  static get MAX_CONCURRENT() {
    return 24;
  }

  static get ROUNDS() {
    return 3;
  }

  constructor(app) {
    this.app = app;
    this.run = this.run.bind(this);
  }

  get regionlist() {
    return this.app.util.regionlist;
  }
  /**
   * Runs the latency tests
   *
   * @return {Promise} resolves when tests complete
   */


  async run() {
    const {
      regionlist
    } = this;
    const start = performance.now();
    const queue = regionlist.toArray();
    const tests = latencymanager_LatencyManager.array(latencymanager_LatencyManager.MAX_CONCURRENT).map(() => {
      return latencymanager_LatencyManager.runTest({
        queue,
        regionlist
      });
    });
    await Promise.all(tests);
    const end = performance.now();
    const duration = Math.floor(end - start);
    debug(`latencymanager.js: finished latency tests in ${duration}ms`);
  }

  static async round(region) {
    try {
      const start = performance.now();
      await http["a" /* default */].head(`http://${region.ping}:8888/ping.txt`);
      const end = performance.now();
      const duration = Math.floor(end - start);
      return duration;
    } catch (err) {
      return 'ERROR';
    }
  }

  static async runTest({
    queue,
    regionlist
  }) {
    const region = queue.pop();
    if (!region) return Promise.resolve();
    const results = [];

    for (let i = 0; i < latencymanager_LatencyManager.ROUNDS; i++) {
      // eslint-disable-next-line no-await-in-loop
      results.push((await latencymanager_LatencyManager.round(region)));
    }

    const latency = results.sort(byLatency).shift();
    regionlist.updateRegion({ ...region,
      latency
    });
    return latencymanager_LatencyManager.runTest({
      queue,
      regionlist
    });
  }

  static array(size) {
    return [...Array(size)];
  }

}

/* harmony default export */ var util_latencymanager = (latencymanager_LatencyManager);
// EXTERNAL MODULE: ./src/js/util/buildinfo.js
var buildinfo = __webpack_require__(103);

// CONCATENATED MODULE: ./src/js/util/logger.js
class Logger {
  constructor(app) {
    this.app = app;
    this.entries = [];
    this.MAX_LOG_SIZE = 200;
    this.listeners = new Map([['NewMessage', []]]); // bindings

    this.debug = this.debug.bind(this);
    this.getEntries = this.getEntries.bind(this);
    this.removeEntries = this.removeEntries.bind(this);
    this.addEventListener = this.addEventListener.bind(this);
    this.removeEventListener = this.removeEventListener.bind(this);
    this.stringify = this.stringify.bind(this);
  }

  debug(message, condition) {
    if (this.app.util.settings.getItem('debugmode') && (!condition || condition())) {
      // remove extraneous entries
      while (this.entries.length >= this.MAX_LOG_SIZE) {
        this.entries.shift();
      } // add this error to the debug log


      this.entries.push([new Date().toISOString(), this.stringify(message)]); // update any UIs with new debug messages

      this.listeners.get('NewMessage').forEach(listener => {
        // try calling functions bound to 'NewMessage'
        try {
          listener(this.stringify(message));
        }
        /**
         * NOTE: This will catch a bug where if the the user is on the debug log view
         * and resizes the window, the browser will kill the extension without giving
         * the extension enough time to clear out the functions tied to the debug log.
         */
        catch (err) {
          this.removeEventListener('NewMessage', listener);
        }
      });
    }

    return message;
  }

  getEntries() {
    return Array.from(this.entries).reverse();
  }

  removeEntries() {
    this.entries = [];
  }

  addEventListener(event, listener) {
    this.listeners.get(event).push(listener);
  }

  removeEventListener(event, listener) {
    const currentListeners = this.listeners.get(event);
    const filteredListeners = currentListeners.filter(item => {
      return item !== listener;
    });
    this.listeners.set(event, filteredListeners);
  }

  stringify(message) {
    if (typeof message === 'string') {
      return message;
    }

    return JSON.stringify(message);
  }

}
// CONCATENATED MODULE: ./src/js/util/counter.js
/* harmony default export */ var counter = (function () {
  const self = this;
  const table = {};

  self.get = member => {
    return table[member] || 0;
  };

  self.inc = member => {
    table[member] = (table[member] || 0) + 1;
  };

  self.del = member => {
    delete table[member];
  };

  return self;
});
// CONCATENATED MODULE: ./src/js/util/settingsmanager.js
function clear(csettings) {
  Object.values(csettings).filter(s => {
    return s.isAvailable ? s.isAvailable() : true;
  }).filter(s => {
    return !s.alwaysActive;
  }).forEach(s => {
    s.clearSetting();
  });
}

function apply(csettings, settings) {
  Object.values(csettings).filter(s => {
    return s.isAvailable ? s.isAvailable() : true;
  }).filter(s => {
    return settings.getItem(s.settingID);
  }).forEach(s => {
    s.applySetting();
  });
}

class SettingsMananger {
  constructor(app) {
    this.app = app;
    this.enable = this.enable.bind(this);
    this.reapply = this.reapply.bind(this);
    this.disable = this.disable.bind(this);
  }

  enable() {
    const {
      app: {
        util: {
          settings
        },
        chromesettings,
        contentsettings
      }
    } = this;
    apply(contentsettings, settings);
    apply(chromesettings, settings);
  }
  /*
     The purpose of this function is to deal with a Chrome bug where when one content setting
     is cleared, all other content settings are also cleared! (eg camera.clear() will clear
     microphone too). The property `microphone.isApplied()` will still be true but
     `camera.isApplied()` won't, so it can be used to determine if the setting should be
     reapplied again or not.
      Link to Chrome Bug: https://bugs.chromium.org/p/chromium/issues/detail?id=700404#c18
     This issue has been fixed in Chrome on Sept 21 2018.
     Will keep this method around until at lesat 5 versions have passed.
     Current Chrome Version: Version 69.0.3497.100 (Official Build) (64-bit)
      After 5 versions have passed, add conditional code to only run the reapply method if the
     version detected is older than Chrome version 71 (assume fix lands in that build).
  */


  reapply(contentsettings) {
    const {
      app: {
        util: {
          settings
        }
      }
    } = this;
    const enabled = settings.enabled();
    Object.values(contentsettings).filter(s => {
      return s.isAvailable ? s.isAvailable() : true;
    }).filter(s => {
      return s.isApplied();
    }).filter(s => {
      return enabled || s.alwaysActive;
    }).forEach(s => {
      s.applySetting();
    });
  }

  disable() {
    const {
      app: {
        contentsettings,
        chromesettings
      }
    } = this;
    clear(chromesettings);
    clear(contentsettings);
    this.reapply(contentsettings);
  }

}

/* harmony default export */ var settingsmanager = (SettingsMananger);
// CONCATENATED MODULE: ./src/js/util/errorinfo.js
/* harmony default export */ var errorinfo = (function () {
  const errorMap = new Map();

  const generateID = () => {
    let errorID = '';

    for (let i = 0; i < 3; i++) {
      errorID += Math.random().toString(36);
    }

    return errorID;
  };

  this.set = (errorName, url) => {
    const errorID = generateID();
    errorMap.set(errorID, [errorName, url]);
    return errorID;
  };

  this.get = errorID => {
    return errorMap.get(errorID) || [];
  };

  this.delete = errorID => {
    const deleted = errorMap.delete(errorID);

    if (deleted) {
      debug(`errorinfo.js: delete ${errorID}`);
    } else {
      debug(`errorinfo.js: miss ${errorID}`);
    }

    return deleted;
  };

  return this;
});
// CONCATENATED MODULE: ./src/js/util/i18n.js

function i18n(app) {
  let acceptedLocales;
  const translations = new Map([]);
  const rerouteMap = new Map([['pt', 'pt_BR']]);

  const detectBrowserLocale = () => {
    let locale = chrome.i18n.getUILanguage().replace(/-/g, '_');

    if (this.languageMap.has(locale)) {
      return locale;
    }

    locale = locale.slice(0, 2);
    return rerouteMap.get(locale) || locale;
  };

  const detectLocale = () => {
    const {
      storage
    } = app.util;
    const storageLocale = storage.getItem('locale');
    const locale = storageLocale || detectBrowserLocale();

    if (acceptedLocales.includes(locale)) {
      return locale;
    }

    return undefined;
  };

  this.languageMap = new Map([['en', 'English'], ['de', 'Deutsch'], ['fr', 'Français'], ['ru', 'Русский'], ['it', 'Italiano'], ['nl', 'Nederlands'], ['tr', 'Türkçe'], ['pl', 'Polski'], ['pt_BR', 'Português (Brasil)'], ['ja', '日本語'], ['es', 'Español (México)'], ['da', 'Dansk'], ['th', 'ไทย'], ['zh_TW', '繁體中文'], ['zh_CN', '简体中文'], ['ar', 'ةيبرعلا'], ['ko', '한국어']]);
  acceptedLocales = Array.from(this.languageMap.keys());
  this.domainMap = new Map([['en', 'www.privateinternetaccess.com'], ['nl', 'nld.privateinternetaccess.com'], ['fr', 'fra.privateinternetaccess.com'], ['ru', 'rus.privateinternetaccess.com'], ['it', 'ita.privateinternetaccess.com'], ['ko', 'kor.privateinternetaccess.com'], ['no', 'nor.privateinternetaccess.com'], ['pl', 'pol.privateinternetaccess.com'], ['es', 'mex.privateinternetaccess.com'], ['ar', 'ara.privateinternetaccess.com'], ['th', 'tha.privateinternetaccess.com'], ['tr', 'tur.privateinternetaccess.com'], ['ja', 'jpn.privateinternetaccess.com'], ['da', 'dnk.privateinternetaccess.com'], ['de', 'deu.privateinternetaccess.com'], ['pt_BR', 'bra.privateinternetaccess.com'], ['zh_CN', 'chi.privateinternetaccess.com'], ['zh_TW', 'cht.privateinternetaccess.com']]);
  let worker = null;

  this.worker = () => {
    return worker;
  };

  this.defaultLocale = 'en';
  this.locale = detectLocale() || this.defaultLocale;

  this.domain = () => {
    return this.domainMap.get(this.locale) || this.domainMap.get('en');
  };

  this.t = (key, variables = {}) => {
    let message = translations.get(key) || chrome.i18n.getMessage(key);
    Object.keys(variables).forEach(varKey => {
      message = message.replace(new RegExp(`%{${varKey}}`, 'g'), variables[varKey]);
    });
    return message;
  };

  window.t = this.t;

  this.changeLocale = locale => {
    const {
      icon
    } = app.util;

    if (!acceptedLocales.includes(locale)) {
      return new Promise((_, reject) => {
        reject();
      });
    }

    worker = http["a" /* default */].get(`chrome-extension://${chrome.runtime.id}/_locales/${locale}/messages.json`).then(async res => {
      const json = await res.json();
      translations.clear();
      Object.keys(json).forEach(key => {
        translations.set(key, json[key].message);
      });
      this.locale = locale;
      icon.updateTooltip();
      worker = null;
      return locale;
    }).catch(res => {
      worker = null;
      throw res;
    });
    return worker;
  };

  this.changeLocale(this.locale).catch(() => {
    debug(`i18n: error setting locale "${this.locale}"`);

    if (this.locale !== this.defaultLocale) {
      this.changeLocale(this.defaultLocale).then(() => {
        debug(`i18n: fell back to default locale: ${this.defaultLocale}`);
      }).catch(() => {
        debug(`i18n: fall back to default locale(${this.defaultLocale}) failed`);
      });
    }
  });
  return this;
}
// CONCATENATED MODULE: ./src/js/util/platforminfo.js
/* harmony default export */ var platforminfo = (function (app) {
  this.os = undefined;
  this.arch = undefined;
  this.naclArch = undefined;
  this.ready = false;

  this.isWindows = () => {
    return this.os === "win";
  };

  this.lineEnding = () => {
    return this.isWindows() ? "\r\n" : "\n";
  };

  chrome.runtime.getPlatformInfo(details => {
    this.os = details.os;
    this.arch = details.arch;
    this.naclArch = details.nacl_arch;
    this.ready = true;
  });
  return this;
});
// EXTERNAL MODULE: ./src/js/data/https-upgrade.js
var https_upgrade = __webpack_require__(16);

// CONCATENATED MODULE: ./src/js/util/https-upgrade/rulesets.js
/* eslint no-restricted-syntax: 0 */

 // ======================================== //
//                 General                  //
// ======================================== //

/**
 * Get the default channel for rulesets
 */

function getDefaultChannel() {
  return https_upgrade["k" /* channels */].find(c => {
    return c.name === 'default';
  });
}
/**
 * Attempt to apply a ruleset to a url
 *
 * @returns {string|undefined}
 */

function applyRuleset(ruleset, url) {
  const {
    rule: rules,
    exclusions
  } = ruleset;

  if (!rules) {
    return undefined;
  }

  if (typeof exclusions !== 'undefined') {
    if (exclusions instanceof RegExp) {
      if (exclusions.test(url)) {
        debug(`https-upgrade/rulesets#applyRuleset: ${url} excluded`);
        return undefined;
      }
    } else {
      debug('https-upgrade/rulesets#applyRuleset: invalid exclusions');
      debug(`typeof exclusions: ${typeof exclusions}`);
      debug(`exclusions value: ${exclusions}`);
    }
  }

  let applied;
  return rules.find(rule => {
    if (rule.to === null || rule.from === null) {
      return false;
    }

    applied = url.replace(new RegExp(rule.from), rule.to);
    return applied === url ? false : applied;
  }) && applied;
}

async function debugTime(name, fn) {
  const start = performance.now();
  const res = await Promise.resolve(fn());
  const end = performance.now();
  const duration = Math.floor(end - start);
  debug(`https-upgrade: ${name} took ${duration}ms`);
  return res;
} // ======================================== //
//                  Stored                  //
// ======================================== //

/**
 * Retrieve the stored rulesets from storage.local
 *
 * Break into multiple operations to avoid locking up the background thread
 *
 * @returns {*} rulesets
 */


async function getStoredRulesets(storageCount) {
  // validate storageCount
  if (!storageCount || Number.isNaN(Number(storageCount))) {
    throw new Error('invalid storage count value');
  } // generate keys


  const storageKeys = Array.from(new Array(Number(storageCount)).keys()).map(i => {
    return https_upgrade["j" /* STORAGE_TEMPLATE */].replace('%s', i);
  }); // for each key, generate op to retrieve part from storage

  const ops = storageKeys.map(key => {
    return async () => {
      const part = await new Promise((resolve, reject) => {
        chrome.storage.local.get(key, data => {
          if (chrome.runtime.lastError) {
            reject(chrome.runtime.lastError);
          } else {
            resolve(data[key]);
          }
        });
      }); // yield to event loop

      await new Promise(resolve => {
        setTimeout(resolve, 5);
      });
      return part;
    };
  });
  return debugTime('stage e', async () => {
    // perform ops consecutively
    const parts = [];

    for (const op of ops) {
      // eslint-disable-next-line no-await-in-loop
      parts.push((await op()));
    }

    return parts;
  });
}
/**
 * Store the rulesets in storage.local
 *
 * Break up the operations to avoid locking up the background thread
 *
 * @returns {number} storageCount
 */

async function setStoredRulesets(parts, oldCount) {
  // create ops to push each part into storage
  const addOps = parts.map((part, i) => {
    return async () => {
      await new Promise((resolve, reject) => {
        chrome.storage.local.set({
          [https_upgrade["j" /* STORAGE_TEMPLATE */].replace('%s', i)]: part
        }, () => {
          if (chrome.runtime.lastError) {
            reject(chrome.runtime.lastError);
          } else {
            resolve();
          }
        });
      }); // yield to event loop

      await new Promise(resolve => {
        setTimeout(resolve, 5);
      });
    };
  });
  await debugTime('stage d', async () => {
    // delete excess parts in storage
    if (oldCount && Number(oldCount) > parts.length) {
      const keys = [...Array(Number(oldCount) - parts.length).keys()].map(i => {
        return i + parts.length;
      }).map(i => {
        return https_upgrade["j" /* STORAGE_TEMPLATE */].replace('%s', i);
      });
      await new Promise(resolve => {
        chrome.storage.local.remove(keys, () => {
          if (chrome.runtime.lastError) {
            const err = chrome.runtime.lastError;
            debug(`https-upgrade/rulesets#setStoredRulesets: failed to remove with "${err}"`);
          } else {
            resolve();
          }
        });
      });
    } // perform each add op consecutively


    for (const op of addOps) {
      // eslint-disable-next-line no-await-in-loop
      await op();
    }
  });
} // ======================================== //
//                  Hosted                  //
// ======================================== //

async function getTimestamp(channel) {
  const url = `${channel.urlPrefix}${https_upgrade["e" /* LATEST_TIMESTAMP_FILE */]}`;
  const res = await debugTime('stage a', () => {
    return http["a" /* default */].get(url);
  });

  if (!res.ok) {
    throw res;
  }

  const text = await res.text();
  const trimmed = text.trim();

  if (Number.isNaN(Number(trimmed))) {
    throw new Error('timestamp is not a number');
  }

  return trimmed;
}

async function getBuffer(channel) {
  const rulesFileUrl = `${channel.urlPrefix}${https_upgrade["h" /* RULESET_FILE_TEMPLATE */]}`;

  try {
    return await http["a" /* default */].get(rulesFileUrl).then(r => {
      return r.arrayBuffer();
    });
  } catch (err) {
    throw new Error('failed to fetch buffers');
  }
}
/**
 * Extract a compressed buffer
 *
 * Uses WebWorker because pako#inflate does not offer async API
 */


async function extract(rulesBuffer) {
  // Get url (same as ./worker.js file)
  const url = chrome.runtime.getURL('js/https-upgrade-worker.js');
  const worker = new Worker(url);
  const reqID = 0;
  return new Promise(resolve => {
    worker.addEventListener('message', e => {
      const {
        data: {
          payload,
          type
        }
      } = e;

      if (type === https_upgrade["f" /* MessageType */].EXTRACT_RES && payload.reqID === reqID) {
        const {
          extracted
        } = payload;
        worker.terminate();
        resolve(extracted);
      }
    });
    worker.postMessage({
      type: https_upgrade["f" /* MessageType */].EXTRACT_REQ,
      payload: {
        rulesBuffer,
        reqID
      }
    });
  });
}
/**
 * Fetch the rulesets from specified channel
 *
 * @returns {*} results
 * @returns {number} results.timestamp
 * @returns {*} results.rulesets
 */


async function getHostedRulesets(channel) {
  try {
    const buffer = await debugTime('stage b', () => {
      return getBuffer(channel);
    });
    let {
      rulesets
    } = await debugTime('stage c', () => {
      return extract(buffer);
    }); // Convert exclusions

    rulesets = rulesets.map(ruleset => {
      const {
        exclusion
      } = ruleset;

      if (Array.isArray(exclusion)) {
        return Object.assign({}, ruleset, {
          exclusions: new RegExp(exclusion.join('|')),
          exclusion: undefined
        });
      }

      if (exclusion) {
        debug('https-upgrade/index.js: failed to convert exclusion');
        debug(JSON.stringify(ruleset));
      }

      return ruleset;
    }); // break into parts

    const parts = [];

    while (rulesets.length) {
      parts.push(rulesets.splice(0, https_upgrade["g" /* PART_SIZE */]));
    }

    return parts;
  } catch (err) {
    debug(err.message || err.cause || err);
    throw err;
  }
} // ======================================== //
//                  Local                   //
// ======================================== //

/**
 * Convert list of rules to map of (target, ruleset) pairs
 *
 * @param {Array} parts
 *
 * @returns {Map}
 */

async function partsToTargetMap(parts) {
  const map = new Map();
  const ops = parts.map(part => {
    return async () => {
      part.forEach(ruleset => {
        if (!Array.isArray(ruleset.target)) {
          debug('https-rules: rule missing target array');
        } else {
          for (const target of ruleset.target) {
            if (!map.has(target)) {
              map.set(target, new Set());
            }

            map.get(target).add(ruleset);
          }
        }
      }); // yield to event loop (to prevent locking up background)
      // eslint-disable-next-line no-await-in-loop

      await new Promise(resolve => {
        setTimeout(resolve, 5);
      });
    };
  });
  await debugTime('stage f', async () => {
    for (const op of ops) {
      // eslint-disable-next-line no-await-in-loop
      await op();
    }
  });
  return map;
}
// CONCATENATED MODULE: ./src/js/util/https-upgrade/index.js
/* eslint no-restricted-syntax: 0 */


/**
 * HttpsUpgrade Class
 *
 * Will handle fetching & updating rulesets
 */

class https_upgrade_HttpsUpgrade {
  constructor(app) {
    // bind
    this.init = this.init.bind(this);
    this.enabled = this.enabled.bind(this);
    this.onAlarm = this.onAlarm.bind(this);
    this.attemptUpdate = this.attemptUpdate.bind(this);
    this.getPotentialRulesets = this.getPotentialRulesets.bind(this);
    this.onBeforeRequest = this.onBeforeRequest.bind(this);
    this.onCookieChanged = this.onCookieChanged.bind(this);
    this.onCompleted = this.onCompleted.bind(this);
    this.onErrorOccurred = this.onErrorOccurred.bind(this);
    this.onBeforeRedirect = this.onBeforeRedirect.bind(this); // init

    this.app = app;
    this.storage = app.util.storage;
    this.rulesets = new Map();
    this.rulesetsCache = new Map();
    this.counter = new Map();
    this.cookieCache = new Map();
    this.hrefBlacklist = new Set();
    this.updating = false;
    this.enabledTracker = false;
    this.upgradeToSecureAvailable = false;
    chrome.alarms.create(https_upgrade["a" /* ALARM_NAME */], {
      periodInMinutes: 30
    });
    this.initializing = this.init();
  }
  /**
   * Perform all necessary async initialization
   *
   * These operations could complete at ANY time after HttpsUpgrade
   * is instantiated, therefore the class must continue to function
   * properly before this has completed, and as it is completing
   *
   */


  async init() {
    const initOps = []; // break scope to allow constructor to complete

    await new Promise(resolve => {
      setTimeout(resolve, 0);
    });
    /*              Populate rules
     * The update is represented by 6 time consuming stages
     * A - Fetch the most recent timestamp
     * B - Fetch the corresponding rules to timestamp
     * C - Extract the rules
     * D - Store the rules in storage
     * E - Fetch rules from storage
     * F - Process the rules
     *
     * Some stages are skipped depending on whether or not the
     * rules are stored or whether the timestamp has changed
     */

    const op1 = (async () => {
      let fromLocation;
      const start = performance.now();
      let parts = await this.attemptUpdate();

      if (parts) {
        fromLocation = 'hosted';
      } else {
        fromLocation = 'stored';
        const storageCount = this.storage.getItem(https_upgrade["i" /* STORAGE_COUNT_KEY */]);
        parts = await getStoredRulesets(storageCount); // populate local rules (occurs in attemptUpdate)

        this.rulesetsCache.clear();
        this.rulesets = await partsToTargetMap(parts);
      } // calculate number of rules


      const numRules = parts.reduce((count, arr) => {
        return count + arr.length;
      }, 0); // debug info

      const end = performance.now();
      const duration = Math.floor(end - start);
      debug(`https-upgrade: populating ${numRules} ${fromLocation} rulesets took ${duration}ms`);
    })();

    initOps.push(op1);
    await Promise.all(initOps);
  }
  /**
   * Determine if the https-upgrade setting is enabled
   *
   * If this is not enabled, the various listeners should
   * not interfere/react when triggered. Also used for misc
   * cleanup after setting is disabled.
   */


  enabled() {
    const {
      app: {
        util: {
          settings
        }
      }
    } = this;
    const enabled = settings.getItem('httpsUpgrade') && settings.enabled();

    if (!enabled && this.enabledTracker) {
      this.counter.clear();
      this.cookieCache.clear();
    }

    this.enabledTracker = enabled;
    return enabled;
  }

  async onAlarm(alarm) {
    if (alarm.name === https_upgrade["a" /* ALARM_NAME */]) {
      await this.attemptUpdate();
    }

    return undefined;
  }
  /**
   * Attempt to fetch rulesets and store in persistent storage
   *
   * Will only update if the hosted timestamp has changed
   */


  async attemptUpdate() {
    if (this.updating) {
      debug('https-upgrade: cancelling update, update already in progress');
      return false;
    }

    const performUpdate = async (channel, timestamp) => {
      this.updating = true;

      try {
        debug('https-upgrade: updating rulesets');
        const oldCount = this.storage.getItem(https_upgrade["i" /* STORAGE_COUNT_KEY */]);
        const parts = await getHostedRulesets(channel);
        this.rulesetsCache.clear();
        this.rulesets = await partsToTargetMap(parts); // set STORAGE_COUNT_KEY
        // in the event that the browser is closed BEFORE the timestamp is
        // updated, we still want to successfully cleanup any potential space

        const {
          length: count
        } = parts;
        this.storage.setItem(https_upgrade["i" /* STORAGE_COUNT_KEY */], String(count)); // NOTE: if EU closes browser during this operation, we want
        // to always fetch the rulesets again

        await setStoredRulesets(parts, oldCount); // update timestamp only AFTER the operation completes successfully

        this.storage.setItem(https_upgrade["c" /* LAST_TIMESTAMP_KEY */], timestamp);
        this.storage.setItem(https_upgrade["i" /* STORAGE_COUNT_KEY */], String(count));
        this.storage.setItem(https_upgrade["d" /* LAST_UPDATED_KEY */], Date.now());
        this.updating = false;
        return parts;
      } catch (err) {
        this.updating = false;
        debug('https-upgrade: failed to update rulesets');
        debug(err.message || err);
        throw err;
      }
    };

    debug('https-upgrade: checking if update required');

    try {
      const channel = getDefaultChannel();
      const timestamp = await getTimestamp(channel);
      const lastTimestamp = this.storage.getItem(https_upgrade["c" /* LAST_TIMESTAMP_KEY */]);

      if (!lastTimestamp) {
        return performUpdate(channel, timestamp);
      }

      if (Number(timestamp) !== Number(lastTimestamp)) {
        return performUpdate(channel, timestamp);
      }

      debug('https-upgrade: postponing https update');
      return false;
    } catch (err) {
      debug('https-upgrade: failed to update');
      debug(err.message || err);
      throw err;
    }
  }
  /**
   * Fetch the rulesets that might apply to a specific domain
   */


  getPotentialRulesets(domain) {
    const isValidDomain = target => {
      if (target.length <= 0) {
        return false;
      }

      if (target.length > 255) {
        return false;
      }

      if (target.includes('..')) {
        return false;
      }

      return true;
    };

    const getRulesets = target => {
      let rulesets = this.rulesetsCache.get(target);

      if (!rulesets) {
        rulesets = this.rulesets.get(target);
        this.rulesetsCache.set(target, rulesets);
      }

      return rulesets;
    }; // example domain "x.y.z.domain.com"


    const results = new Set();

    if (isValidDomain(domain)) {
      // search for "x.y.z.domain.com"
      const exactMatches = getRulesets(domain);

      if (exactMatches) {
        exactMatches.forEach(exactMatch => {
          results.add(exactMatch);
        });
      } // search for
      // "*.y.z.domain.com"
      // "*.z.domain.com"
      // "*.domain.com"


      const splits = domain.split('.');

      if (splits.length > 2) {
        const root = splits.slice(-2).join('.');
        let subdomains = splits.slice(0, -2);
        subdomains.push('');

        while (subdomains.length > 1) {
          subdomains = subdomains.slice(1);
          const target = `*.${subdomains.join('.')}${root}`;
          const matches = getRulesets(target);

          if (matches) {
            matches.forEach(match => {
              results.add(match);
            });
          }
        }
      }
    } else {
      debug(`https-upgrade: invalid domain for rulesets "${domain}"`);
    }

    results.delete(undefined);
    return Array.from(results.values());
  }

  shouldSecureCookie(cookie) {
    let shouldSecure = false;
    let {
      domain
    } = cookie;

    if (this.cookieCache.size > 300) {
      this.cookieCache.delete(this.cookieCache.keys().next().value);
    }

    while (domain.charAt(0) === '.') {
      domain = domain.slice(1);
    }

    const potentialRules = this.getPotentialRulesets(domain); // check cache

    const cacheItem = this.cookieCache.get(domain);

    if (cacheItem) {
      shouldSecure = true;
    } // update cache
    else {
        const fakeUrl = `http://${domain}/${Math.random()}/${Math.random()}`;
        shouldSecure = !!potentialRules.find(ruleset => {
          if (applyRuleset(ruleset, fakeUrl)) {
            this.cookieCache.set(domain, true);
            return true;
          }

          return false;
        });

        if (!shouldSecure) {
          this.cookieCache.set(domain, false);
        }
      }

    if (!shouldSecure) {
      return false;
    }

    return potentialRules.filter(ruleset => {
      return ruleset.securecookie;
    }).find(ruleset => {
      return ruleset.securecookie.find(cr => {
        return !!(new RegExp(cr.host).test(cookie.domain) && new RegExp(cr.name).test(cookie.name));
      });
    });
  } // ======================================== //
  //                Listeners                 //
  // ======================================== //

  /**
   * Upgrade url to https if a matching rule is found
   */


  onBeforeRequest(details) {
    if (this.enabled()) {
      let username = '';
      let password = '';

      if (!details.url) {
        return undefined;
      }

      const url = new URL(details.url); // Strip trailing '.'

      while (url.hostname.endsWith('.') && url.hostname.length > 1) {
        url.hostname = url.hostname.slice(0, url.hostname.length - 1);
      }

      if (url.username || url.password) {
        ({
          username,
          password
        } = url);
        url.username = '';
        url.password = '';
      }

      if (this.hrefBlacklist.has(url.href)) {
        return undefined;
      }

      if (this.counter.get(details.requestId) >= https_upgrade["b" /* COUNTER_LIMIT */]) {
        debug(`https-upgrade: blacklisting href "${url.href}"`);
        this.hrefBlacklist.add(url.href);
        return undefined;
      }

      const [matchedRuleset] = this.getPotentialRulesets(url.hostname);

      if (matchedRuleset) {
        let upgradedUrl = applyRuleset(matchedRuleset, url.href);

        if (!upgradedUrl) {
          return undefined;
        }

        if (username || password) {
          const withCredentials = new URL(upgradedUrl);
          withCredentials.username = username;
          withCredentials.password = password;
          upgradedUrl = withCredentials.href;
        }

        if (this.upgradeToSecureAvailable && upgradedUrl === details.url.replace(/^http:/, 'https:')) {
          debug(`https-upgrade: upgrading ${details.url} using upgradeToSecure API`);
          return {
            upgradeToSecure: true
          };
        }

        debug(`https-upgrade: redirecting ${details.url} to ${upgradedUrl}`);
        return {
          redirectUrl: upgradedUrl
        };
      }
    }

    return undefined;
  }
  /**
   * Secure insecure cookies
   */


  onCookieChanged(details) {
    if (this.enabled()) {
      const {
        cookie
      } = details;

      if (!details.removed && !cookie.secure && this.shouldSecureCookie(cookie)) {
        debug(`https-upgrade: attempting to secure cookie: ${cookie.name}`);
        const secureCookie = Object.assign({
          name: cookie.name,
          value: cookie.value,
          path: cookie.path,
          httpOnly: cookie.httpOnly,
          expirationDate: cookie.expirationDate,
          storeId: cookie.storeId,
          secure: true
        }, cookie.hostOnly ? {} : {
          domain: cookie.domain
        }, // https://tools.ietf.org/html/draft-west-first-party-cookies
        cookie.sameSite ? {
          sameSite: cookie.sameSite
        } : {}, cookie.firstPartyDomain ? {
          firstPartyDomain: cookie.firstPartyDomain
        } : {}, cookie.domain.startsWith('.') ? {
          url: `https://www${cookie.domain}${cookie.path}`
        } : {
          url: `https://${cookie.domain}${cookie.path}`
        });
        chrome.cookies.set(secureCookie);
        debug(`https-upgrade: secured cookie "${cookie.name}" for "${cookie.domain}"`);
      }
    }
  }
  /**
   * Handle counter on request completion
   */


  onCompleted(details) {
    if (this.enabled()) {
      const {
        requestId
      } = details;

      if (this.counter.has(requestId)) {
        this.counter.delete(requestId);
        debug(`https-upgrade: clearing count for ${requestId}`);
      }
    }
  }
  /**
   * Handle counter on request error
   */


  onErrorOccurred(details) {
    if (this.enabled()) {
      if (this.counter.has(details.requestId)) {
        this.counter.delete(details.requestId);
      }
    }
  }
  /**
   * Handle counter for redirects (prevent looping)
   */


  onBeforeRedirect(details) {
    if (this.enabled()) {
      if (details.redirectUrl.match(/^https?:\/\/.*/)) {
        const {
          requestId
        } = details;
        const oldCount = https_upgrade_HttpsUpgrade.parseCount(this.counter, requestId);
        this.counter.set(requestId, oldCount + 1);
        debug(`https-upgrade: increment count for ${requestId} to ${oldCount + 1}`);
      }
    }
  } // ======================================== //
  //                  Static                  //
  // ======================================== //


  static parseCount(counter, requestId) {
    const value = counter.get(requestId);

    if (typeof value === 'undefined') {
      return 0;
    }

    if (typeof value === 'number' && value >= 0) {
      return value;
    }

    debug(`https-upgrade: request count for ${requestId} invalid: ${value}`);
    return 0;
  }

}

/* harmony default export */ var util_https_upgrade = (https_upgrade_HttpsUpgrade);
// CONCATENATED MODULE: ./src/js/contentsettings/contentsetting.js
/*
   This object wraps a ContentSetting: https://developer.chrome.com/extensions/contentSettings#type-ContentSetting.
   Similar to but not the same as a ChromeSetting.
*/
/* harmony default export */ var contentsetting = (function (app, contentSetting) {
  const self = Object.create(null);
  const defaultSetRules = {
    primaryPattern: '<all_urls>',
    scope: 'regular'
  };
  const defaultClearRules = {
    scope: 'regular'
  };
  let applied;
  let ask;
  let blocked;
  let allowed;

  self.isApplied = () => {
    return applied;
  };

  self.isAsk = () => {
    return ask;
  };

  self.isBlocked = () => {
    return blocked;
  };

  self.isAllowed = () => {
    return allowed;
  };

  self._set = rules => {
    return new Promise((resolve, reject) => {
      contentSetting.set(Object.assign({}, defaultSetRules, rules), () => {
        if (chrome.runtime.lastError === undefined) {
          applied = true;
          ask = rules.setting === 'ask';
          blocked = rules.setting === 'block';
          allowed = rules.setting === 'allow';
          resolve();
        } else {
          reject(chrome.runtime.lastError);
        }
      });
    });
  };

  self._clear = (rules = {}) => {
    const {
      settingsmanager
    } = app.util;
    return new Promise((resolve, reject) => {
      contentSetting.clear(Object.assign({}, defaultClearRules, rules), () => {
        if (chrome.runtime.lastError === undefined) {
          blocked = false;
          allowed = false;
          ask = false;
          applied = false;
          settingsmanager.reapply(app.contentsettings);
          resolve();
        } else {
          reject(chrome.runtime.lastError);
        }
      });
    });
  };

  return self;
});
// CONCATENATED MODULE: ./src/js/contentsettings/microphone.js

/* harmony default export */ var microphone = (function (app) {
  const self = Object.create(contentsetting(app, chrome.contentSettings.microphone));
  self.settingID = 'blockmicrophone';
  self.settingDefault = true;

  self.applySetting = () => {
    return self._set({
      setting: 'block'
    }).then(() => {
      debug(`microphone.js: block ok`);
      return self;
    }).catch(error => {
      debug(`microphone.js: block failed (${error})`);
      return self;
    });
  };

  self.clearSetting = () => {
    return self._clear({}).then(() => {
      debug('microphone.js: unblock ok');
      return self;
    }).catch(error => {
      debug(`microphone.js: unblock failed (${error})`);
      return self;
    });
  };

  return self;
});
// CONCATENATED MODULE: ./src/js/contentsettings/camera.js

/* harmony default export */ var camera = (function (app) {
  const self = Object.create(contentsetting(app, chrome.contentSettings.camera));
  self.settingID = 'blockcamera';
  self.settingDefault = true;

  self.applySetting = () => {
    return self._set({
      setting: 'block'
    }).then(() => {
      debug(`camera.js: block ok`);
      return self;
    }).catch(error => {
      debug(`camera.js: block failed (${error})`);
      return self;
    });
  };

  self.clearSetting = () => {
    return self._clear({}).then(() => {
      debug('camera.js: unblock ok');
      return self;
    }).catch(error => {
      debug(`camera.js: unblock failed(${error})`);
      return self;
    });
  };

  return self;
});
// CONCATENATED MODULE: ./src/js/contentsettings/location.js

/* harmony default export */ var contentsettings_location = (function (app) {
  const self = Object.create(contentsetting(app, chrome.contentSettings.location));
  self.settingID = 'blocklocation';
  self.settingDefault = true;

  self.applySetting = () => {
    return self._set({
      setting: 'block'
    }).then(() => {
      debug(`location.js: block ok`);
      return self;
    }).catch(error => {
      debug(`location.js: block failed (${error})`);
      return self;
    });
  };

  self.clearSetting = () => {
    return self._clear({}).then(() => {
      debug('location.js: unblock ok');
      return self;
    }).catch(error => {
      debug(`location.js: unblock failed (${error})`);
      return self;
    });
  };

  return self;
});
// CONCATENATED MODULE: ./src/js/contentsettings/flash.js

/* harmony default export */ var flash = (function (app) {
  const self = Object.create(contentsetting(app, chrome.contentSettings.plugins));
  self.settingID = 'blockadobeflash';
  self.settingDefault = true;

  self.applySetting = () => {
    return self._set({
      setting: 'block',
      resourceIdentifier: {
        id: 'adobe-flash-player'
      }
    }).then(() => {
      debug(`flash.js: block ok`);
      return self;
    }).catch(error => {
      debug(`flash.js: block failed (${error})`);
      return self;
    });
  };

  self.clearSetting = () => {
    return self._clear({}).then(() => {
      debug('flash.js: unblock ok');
      return self;
    }).catch(error => {
      debug(`flash.js: unblock failed (${error})`);
      return self;
    });
  };

  return self;
});
// CONCATENATED MODULE: ./src/js/contentsettings/extension_notification.js

/* harmony default export */ var extension_notification = (function (app) {
  const defaultOptions = {
    icon: '/images/icons/icon64.png'
  };
  const self = Object.create(contentsetting(app, chrome.contentSettings.notifications));
  const {
    settings
  } = app.util;
  self.settingID = 'allowExtensionNotifications';
  self.settingDefault = true;
  self.alwaysActive = true;

  self.applySetting = () => {
    return self._set({
      setting: 'allow',
      primaryPattern: `*://${chrome.runtime.id}/*`
    }).then(() => {
      debug(`extensionNotification.js: allow ok`);
      return self;
    }).catch(error => {
      debug(`extensionNotification.js: allow failed (${error})`);
      return self;
    });
  };

  self.clearSetting = () => {
    return self._clear({}).then(() => {
      debug('extensionNotification.js: clear ok');
      return self;
    }).catch(error => {
      debug(`extensionNotification.js: clear failed (${error})`);
      return self;
    });
  };

  self.create = (title, options) => {
    if (!self.isAllowed()) {
      debug('extensionNotification.js: create failed (disabled).');
    } else {
      debug('extensionNotification.js: create notification');
      new Notification(title, Object.assign({}, defaultOptions, options));
    }
  };

  self.init = () => {
    if (!settings.hasItem(self.settingID) || settings.getItem(self.settingID)) {
      self.applySetting();
    }
  };

  return self;
});
// CONCATENATED MODULE: ./src/js/chromesettings/chromesetting.js
/*
   This object wraps a ChromeSetting: https://developer.chrome.com/extensions/types#type-ChromeSetting
   Similar to but not the same as a ContentSetting.
*/
class ChromeSetting {
  static get defaultSetOptions() {
    return {
      scope: 'regular'
    };
  }

  static get defaultGetOptions() {
    return {};
  }

  static get defaultClearOptions() {
    return {
      scope: 'regular'
    };
  }

  static get controlled() {
    return 'controlled_by_this_extension';
  }

  static get controllable() {
    return 'controllable_by_this_extension';
  }

  static get notControllable() {
    return 'not_controllable';
  }

  constructor(setting) {
    // bindings
    this.init = this.init.bind(this);
    this.getLevelOfControl = this.getLevelOfControl.bind(this);
    this.isControllable = this.isControllable.bind(this);
    this.isBlocked = this.isBlocked.bind(this);
    this.isApplied = this.isApplied.bind(this);
    this.onChange = this.onChange.bind(this);
    this.set = this.set.bind(this);
    this.get = this.get.bind(this);
    this.clear = this.clear.bind(this);
    this.createApplySetting = this.createApplySetting.bind(this);
    this.createClearSetting = this.createClearSetting.bind(this); // init

    this.setting = setting;
    this.levelOfControl = undefined;
    this.blocked = undefined;
    this.applied = undefined;
  }

  async init() {
    if (this.isAvailable()) {
      this.setting.onChange.addListener(this.onChange);
      await this.setting.get({}, this.onChange);
    } else {
      this.setLevelOfControl(ChromeSetting.notControllable);
      this.blocked = true;
    }
  }

  isAvailable() {
    return !!this.setting;
  } // eslint-disable-next-line class-methods-use-this


  onChange() {
    throw new Error('each chromesetting must implement it\'s own onChange listener');
  }
  /**
   * Get the current level of control
   *
   * @returns {string} current level of control
   */


  getLevelOfControl() {
    return this.levelOfControl;
  }

  setLevelOfControl(levelOfControl) {
    this.levelOfControl = levelOfControl;
  }
  /**
   * Determine whether the setting is controllable
   *
   * @returns {boolean} whether setting is controllable
   */


  isControllable() {
    return this.levelOfControl === undefined || this.levelOfControl === ChromeSetting.controlled || this.levelOfControl === ChromeSetting.controllable;
  }
  /**
   * Determine whether or not the setting is blocked
   *
   * @returns {boolean} whether setting is blocked
   */


  isBlocked() {
    return this.blocked;
  }

  setBlocked(blocked) {
    this.blocked = blocked;
  }
  /**
   * Determine whether or not setting is applied
   *
   * @returns {boolean} whether setting is applied
   */


  isApplied() {
    return this.applied;
  }
  /**
   * Set the info for the setting
   */


  set(options) {
    return new Promise((resolve, reject) => {
      if (this.isControllable()) {
        this.setting.set(Object.assign({}, ChromeSetting.defaultSetOptions, options), () => {
          if (chrome.runtime.lastError === undefined) {
            this.applied = true;
            resolve();
          } else {
            reject(chrome.runtime.lastError);
          }
        });
      } else {
        reject(new Error('extension cannot control this setting'));
      }
    });
  }
  /**
   * Get the current info for setting
   */


  get() {
    return new Promise((resolve, reject) => {
      if (!this.isAvailable()) {
        reject();
        return;
      }

      this.setting.get(ChromeSetting.defaultGetOptions, async details => {
        await this.onChange(details);

        if (chrome.runtime.lastError === undefined) {
          resolve(details);
        } else {
          reject(chrome.runtime.lastError);
        }
      });
    });
  }
  /**
   * Clear the info for the setting
   */


  clear(options) {
    return new Promise((resolve, reject) => {
      if (this.isControllable()) {
        this.setting.clear(Object.assign({}, ChromeSetting.defaultClearOptions, options || {}), () => {
          if (chrome.runtime.lastError === undefined) {
            this.applied = false;
            resolve();
          } else {
            reject(chrome.runtime.lastError);
          }
        });
      } else {
        reject(new Error('extension cannot control this setting'));
      }
    });
  }

  createApplySetting(value, name, action) {
    return async function applySetting() {
      try {
        await this.set({
          value
        });
        ChromeSetting.debug(name, `${action} ok`);
      } catch (err) {
        ChromeSetting.debug(name, `${action} failed`);
      }

      return this;
    }.bind(this);
  }

  createClearSetting(name, action) {
    return async function clearSetting() {
      try {
        await this.clear();
        ChromeSetting.debug(name, `${action} ok`);
      } catch (err) {
        ChromeSetting.debug(name, `${action} failed`);
      }

      return this;
    }.bind(this);
  }

  static debug(name, msg, err) {
    const debugMsg = `${name}.js: ${msg}`;
    debug(debugMsg);

    if (err) {
      const errMsg = `error: ${JSON.stringify(err, Object.getOwnPropertyNames(err))}`;
      debug(errMsg);
    }

    return new Error(debugMsg);
  }

}

/* harmony default export */ var chromesetting = (ChromeSetting);
// CONCATENATED MODULE: ./src/js/chromesettings/hyperlinkaudit.js


class hyperlinkaudit_HyperLinkAudit extends chromesetting {
  constructor() {
    super(chrome.privacy.websites.hyperlinkAuditingEnabled); // bindings

    this.onChange = this.onChange.bind(this); // functions

    this.applySetting = this.createApplySetting(false, 'hyperlinkaudit', 'block');
    this.clearSetting = this.createClearSetting('hyperlinkaudit', 'unblock'); // init

    this.settingID = 'blockhyperlinkaudit';
    this.settingDefault = true;
  }

  onChange(details) {
    this.setLevelOfControl(details.levelOfControl);
    this.setBlocked(details.value === false);
  }

}

/* harmony default export */ var hyperlinkaudit = (hyperlinkaudit_HyperLinkAudit);
// CONCATENATED MODULE: ./src/js/chromesettings/webrtc.js


class webrtc_WebRTCSetting extends chromesetting {
  constructor() {
    super(chrome.privacy.network.webRTCIPHandlingPolicy); // bindings

    this.init = this.init.bind(this);
    this.onChange = this.onChange.bind(this); // functions

    this.applySetting = this.createApplySetting('disable_non_proxied_udp', 'webrtc', 'block');
    this.clearSetting = this.createClearSetting('webrtc', 'unblock'); // init

    this.settingID = 'preventwebrtcleak';
    this.settingDefault = true;
  }

  init() {
    this.blockable = chrome.privacy.network.webRTCIPHandlingPolicy !== undefined;
    super.init();
  }

  onChange(details) {
    this.levelOfControl = details.levelOfControl;
    this.blocked = details.value === 'disable_non_proxied_udp';
  }

}

/* harmony default export */ var webrtc = (webrtc_WebRTCSetting);
// CONCATENATED MODULE: ./src/js/chromesettings/thirdpartycookies.js


class thirdpartycookies_ThirdPartyCookies extends chromesetting {
  constructor() {
    super(chrome.privacy.websites.thirdPartyCookiesAllowed); // bindings

    this.onChange = this.onChange.bind(this); // functions

    this.applySetting = this.createApplySetting(false, 'thirdpartycookies', 'block');
    this.clearSetting = this.createClearSetting('thirdpartycookies', 'unblock'); // init

    this.settingID = 'blockthirdpartycookies';
    this.settingDefault = true;
  } // eslint-disable-next-line class-methods-use-this


  onChange(details) {
    this.setLevelOfControl(details.levelOfControl);
    this.setBlocked(details.value === false);
  }

}

/* harmony default export */ var thirdpartycookies = (thirdpartycookies_ThirdPartyCookies);
// CONCATENATED MODULE: ./src/js/chromesettings/httpreferer.js


class httpreferer_HttpReferer extends chromesetting {
  constructor() {
    super(chrome.privacy.websites.referrersEnabled); // bindings

    this.onChange = this.onChange.bind(this); // functions

    this.applySetting = this.createApplySetting(false, 'httpreferer', 'block');
    this.clearSetting = this.createClearSetting('httpreferer', 'unblock'); // init

    this.settingID = 'blockreferer';
    this.settingDefault = true;
  }

  onChange(details) {
    this.setLevelOfControl(details.levelOfControl);
    this.setBlocked(details.value === false);
  }

}

/* harmony default export */ var httpreferer = (httpreferer_HttpReferer);
// CONCATENATED MODULE: ./src/js/chromesettings/networkprediction.js


class networkprediction_NetworkPrediction extends chromesetting {
  constructor() {
    super(chrome.privacy.network.networkPredictionEnabled); // bindings

    this.onChange = this.onChange.bind(this); // functions

    this.applySetting = this.createApplySetting(false, 'networkprediction', 'block');
    this.clearSetting = this.createClearSetting('networkprediction', 'unblock'); // init

    this.settingID = 'blocknetworkprediction';
    this.settingDefault = true;
  }

  onChange(details) {
    this.setLevelOfControl(details.levelOfControl);
    this.setBlocked(details.value === false);
  }

}

/* harmony default export */ var networkprediction = (networkprediction_NetworkPrediction);
// CONCATENATED MODULE: ./src/js/chromesettings/safebrowsing.js


class safebrowsing_SafeBrowsing extends chromesetting {
  constructor() {
    super(chrome.privacy.services.safeBrowsingEnabled); // bindings

    this.onChange = this.onChange.bind(this); // functions

    this.applySetting = this.createApplySetting(false, 'safebrowsing', 'block');
    this.clearSetting = this.createClearSetting('safebrowsing', 'unblock'); // init

    this.settingID = 'blocksafebrowsing';
    this.settingDefault = true;
  }

  onChange(details) {
    this.setLevelOfControl(details.levelOfControl);
    this.setBlocked(details.value === false);
  }

}

/* harmony default export */ var safebrowsing = (safebrowsing_SafeBrowsing);
// CONCATENATED MODULE: ./src/js/chromesettings/proxy.js


const ONLINE_KEY = 'online';

class proxy_BrowserProxy extends chromesetting {
  constructor(app) {
    super(chrome.proxy.settings); // bindings

    this.onChange = this.onChange.bind(this);
    this.settingsInMemory = this.settingsInMemory.bind(this);
    this.enabled = this.enabled.bind(this);
    this.readSettings = this.readSettings.bind(this);
    this.enable = this.enable.bind(this);
    this.disable = this.disable.bind(this);
    this.getEnabled = this.getEnabled.bind(this); // init

    this.app = app;
    this.settingID = 'proxy';
    this.areSettingsInMemory = false; // test data

    this.changing = false;
  }

  settingsInMemory() {
    return this.areSettingsInMemory;
  }

  getEnabled() {
    return this.getLevelOfControl() === chromesetting.controlled;
  }

  enabled() {
    return this.getEnabled();
  }

  async readSettings() {
    await this.get();
    proxy_BrowserProxy.debug('read settings');
    return this;
  }

  async enable() {
    this.changing = true;

    try {
      const {
        bypasslist,
        settings,
        regionlist
      } = this.app.util;
      const region = regionlist.getSelectedRegion();
      const port = settings.getItem('maceprotection') ? region.macePort : region.port;
      const proxyRule = proxy_BrowserProxy.createProxyRule(region, port);
      const value = {
        mode: 'fixed_servers',
        rules: {
          singleProxy: proxyRule,
          bypassList: bypasslist.toArray()
        }
      };
      await this.set({
        value
      }); // Make request immediately to force handshake to proxy server
      // Necessary because we cannot perform our side of handshake on
      // Chrome pages for security reasons

      http["a" /* default */].head('https://privateinternetaccess.com');
      proxy_BrowserProxy.debug('enabled');
      this.changing = false;
      return this;
    } catch (err) {
      this.changing = false;
      throw err;
    }
  }

  async disable() {
    this.changing = true;

    try {
      await this.clear();
      proxy_BrowserProxy.debug('disabled');
      this.changing = false;
      return this;
    } catch (err) {
      this.changing = false;
      throw err;
    }
  }

  onChange(details) {
    const {
      util: {
        storage,
        icon
      }
    } = this.app;
    this.setLevelOfControl(details.levelOfControl);
    this.setBlocked(false);

    if (this.getEnabled()) {
      icon.online();
      storage.setItem(ONLINE_KEY, String(true));
    } else {
      icon.offline();
      storage.setItem(ONLINE_KEY, String(false));
    } // eslint-disable-next-line no-param-reassign


    this.areSettingsInMemory = true;
  }

  static createProxyRule(region, port) {
    return {
      scheme: region.scheme,
      host: region.host,
      port
    };
  }

  static debug(msg, err) {
    return chromesetting.debug('proxy', msg, err);
  }

}

/* harmony default export */ var proxy = (proxy_BrowserProxy);
// CONCATENATED MODULE: ./src/js/chromesettings/autofill.js


class autofill_AutoFill extends chromesetting {
  constructor() {
    super(chrome.privacy.services.autofillEnabled); // bindings

    this.onChange = this.onChange.bind(this); // functions

    this.applySetting = this.createApplySetting(false, 'autofill', 'block');
    this.clearSetting = this.createClearSetting('autofill', 'unblock'); // init

    this.settingID = 'blockautofill';
    this.settingDefault = true;
  } // eslint-disable-next-line class-methods-use-this


  isAvailable() {
    return !chrome.privacy.services.autofillAddressEnabled && !chrome.privacy.services.autofillCreditCardEnabled;
  } // eslint-disable-next-line class-methods-use-this


  onChange(details) {
    this.setLevelOfControl(details.levelOfControl);
    this.setBlocked(details.value === false);
  }

}

/* harmony default export */ var autofill = (autofill_AutoFill);
// CONCATENATED MODULE: ./src/js/chromesettings/autofillcreditcard.js


class autofillcreditcard_AutoFillCreditCard extends chromesetting {
  constructor() {
    super(chrome.privacy.services.autofillCreditCardEnabled); // bindings

    this.onChange = this.onChange.bind(this); // functions

    this.applySetting = this.createApplySetting(false, 'autofillcreditcard', 'block');
    this.clearSetting = this.createClearSetting('autofillcreditcard', 'unblock'); // init

    this.settingID = 'blockautofillcreditcard';

    if (localStorage.getItem('settings:blockautofill') === 'false') {
      this.settingDefault = false;
    } else {
      this.settingDefault = true;
    }
  }

  onChange(details) {
    this.setLevelOfControl(details.levelOfControl);
    this.setBlocked(details.value === false);
  }

}

/* harmony default export */ var autofillcreditcard = (autofillcreditcard_AutoFillCreditCard);
// CONCATENATED MODULE: ./src/js/chromesettings/autofilladdress.js


class autofilladdress_AutoFillAddress extends chromesetting {
  constructor() {
    super(chrome.privacy.services.autofillAddressEnabled); // bindings

    this.onChange = this.onChange.bind(this); // functions

    this.applySetting = this.createApplySetting(false, 'autofilladdress', 'block');
    this.clearSetting = this.createClearSetting('autofilladdress', 'unblock'); // init

    this.settingID = 'blockautofilladdress'; // If it exists, use value from old API

    if (localStorage.getItem('settings:blockautofill') === 'false') {
      this.settingDefault = false;
    } else {
      this.settingDefault = true;
    }
  }

  onChange(details) {
    this.setLevelOfControl(details.levelOfControl);
    this.setBlocked(details.value === false);
  }

}

/* harmony default export */ var autofilladdress = (autofilladdress_AutoFillAddress);
// EXTERNAL MODULE: ./src/js/helpers/applyListener.js
var applyListener = __webpack_require__(15);

// CONCATENATED MODULE: ./src/js/eventhandler/chrome/webrequest/onAuthRequired.js
/*
  *** WARNING ***
  This event handler is always active. It could be run while a direct connection is being
  used, while another proxy extension is active, or while the Private Internet Access
  extension is active.

  Being unaware of this could introduce serious bugs that compromise the security of the
  extension.

*/


function authenticate(app) {
  const hostR = /^https-[a-zA-Z0-9-]+\.privateinternetaccess\.com$/;

  const active = details => {
    const {
      proxy,
      util: {
        regionlist
      }
    } = app;
    const proxyEnabled = proxy.getEnabled();
    const isValidHost = regionlist.testHost(details.challenger.host);
    const isValidPort = regionlist.testPort(details.challenger.port);
    const isActive = proxyEnabled && details.isProxy && hostR.test(details.challenger.host) && isValidHost && isValidPort;
    debug('onauthrequired.js: testing if active');
    debug(`proxy enabled: ${proxyEnabled}`);
    debug(`isProxy: ${details.isProxy}`);
    debug(`challenger host: ${details.challenger.host}`);
    debug(`challenger port: ${details.challenger.port}`);
    debug(`possible hosts: ${JSON.stringify(regionlist.getPotentialHosts())}`);
    debug(`possible ports: ${JSON.stringify(regionlist.getPotentialPorts())}`);
    debug(`isActive: ${isActive}`);
    debug('onauthrequired.js: end test');
    return isActive;
  };

  return function handle(details) {
    try {
      debug('onauthrequired.js: servicing request for authentication');

      if (!active(details)) {
        return debug('onAuthRequired/1: refused.');
      }

      const {
        counter,
        user
      } = app.util;
      counter.inc(details.requestId);

      if (counter.get(details.requestId) > 1) {
        debug('onAuthRequired/1: failed.');
        counter.del(details.requestId);
        chrome.tabs.update({
          url: chrome.extension.getURL('html/errorpages/authfail.html')
        });
        user.logout();
        return {
          cancel: true
        };
      }

      if (user.getLoggedIn()) {
        debug('onAuthRequired/1: allowed.');
        const username = user.getUsername();
        const password = user.getPassword();
        const token = user.getAuthToken();
        let credentials = {
          cancel: true
        };

        if (username && password) {
          credentials = {
            authCredentials: {
              username,
              password
            }
          };
        } else if (token) {
          const tokenUser = token.substring(0, token.length / 2);
          const tokenPass = token.substring(token.length / 2);
          credentials = {
            authCredentials: {
              username: tokenUser,
              password: tokenPass
            }
          };
        }

        return credentials;
      }

      debug('onAuthRequired/1: user not logged in');
      user.logout();
      chrome.tabs.reload(details.tabId);
      return {
        cancel: true
      };
    } catch (err) {
      debug('onAuthRequired/1: refused due to error');
      debug(`error: ${JSON.stringify(err, Object.getOwnPropertyNames(err))}`);
      return {
        cancel: true
      };
    }
  };
}

/* harmony default export */ var onAuthRequired = (Object(applyListener["a" /* default */])((app, addListener) => {
  addListener(authenticate(app), {
    urls: ['<all_urls>']
  }, ['blocking']);
}));
// CONCATENATED MODULE: ./src/js/eventhandler/chrome/webrequest/onBeforeRedirect.js
/*
  *** WARNING ***
  This event handler is always active. It could be run while a direct connection is being
  used, while another proxy extension is active, or while the Private Internet Access
  extension is active.

  Being unaware of this could introduce serious bugs that compromise the security of the
  extension.

*/

/* harmony default export */ var onBeforeRedirect = (Object(applyListener["a" /* default */])((app, addListener) => {
  const {
    util: {
      httpsUpgrade
    }
  } = app;
  addListener(httpsUpgrade.onBeforeRedirect, {
    urls: ['https://*/*']
  });
}));
// CONCATENATED MODULE: ./src/js/eventhandler/chrome/webrequest/onBeforeRequest.js
/*
  *** WARNING ***
  This event handler is always active. It could be run while a direct connection is being
  used, while another proxy extension is active, or while the Private Internet Access
  extension is active.

  Being unaware of this could introduce serious bugs that compromise the security of the
  extension.

*/


function connFailRedirect(app) {
  const {
    util: {
      errorinfo
    }
  } = app;
  const connUrl = `chrome-extension://${chrome.runtime.id}/html/errorpages/connfail.html`;

  function isConnFailReload(url) {
    return connUrl === url.slice(0, connUrl.length) && url.slice(-7, url.length) === '#reload';
  }

  function getErrorUrl(errorID) {
    const url = errorinfo.get(errorID)[1];
    return url;
  }

  return details => {
    if (isConnFailReload(details.url)) {
      const url = new URL(details.url);
      const errorID = url.searchParams.get('id');
      const message = {
        id: errorID,
        request: 'RequestErrorDelete'
      };
      chrome.runtime.sendMessage(message);
      const redirectUrl = getErrorUrl(errorID);

      if (redirectUrl) {
        debug('connfail. try reload failed URL');
        return {
          redirectUrl
        };
      }
    }

    return undefined;
  };
}

function filterQueryParameters(app) {
  const {
    util: {
      settings
    }
  } = app;
  const filterLists = {
    blockutm: ['utm_source', 'utm_medium', 'utm_term', 'utm_content', 'utm_campaign'],
    blockfbclid: ['fbclid']
  };

  function containsFilterQueries(url, filterList) {
    return !!filterList.find(param => {
      return url.searchParams.has(param);
    });
  }

  function createFilteredUrl(url, filterList) {
    const copy = new URL(url);
    filterList.forEach(queryParam => {
      copy.searchParams.delete(queryParam);
    });
    return copy.toString();
  }

  function getFilterList() {
    return Object.keys(filterLists).filter(key => {
      return settings.getItem(key);
    }).map(key => {
      return filterLists[key];
    }).reduce((a, b) => {
      return [...a, ...b];
    });
  }

  return details => {
    if (settings.enabled()) {
      const filterList = getFilterList();
      const url = new URL(details.url);

      if (filterList.length && containsFilterQueries(url, filterList)) {
        const redirectUrl = createFilteredUrl(url, filterList);

        if (redirectUrl) {
          debug(`onbeforerequest.js: filtered ${JSON.stringify(filterList)}`);
          return {
            redirectUrl
          };
        }

        debug(`onbeforerequest.js: failed to filter ${JSON.stringify(filterList)}`);
      }
    }

    return undefined;
  };
}

/* harmony default export */ var onBeforeRequest = (Object(applyListener["a" /* default */])((app, addListener) => {
  const {
    util: {
      httpsUpgrade
    }
  } = app;
  addListener(connFailRedirect(app), {
    urls: ['<all_urls>']
  }, ['blocking']);
  addListener(httpsUpgrade.onBeforeRequest, {
    urls: ['*://*/*', 'ftp://*/*']
  }, ['blocking']);
  addListener(filterQueryParameters(app), {
    urls: ['<all_urls>']
  }, ['blocking']);
}));
// CONCATENATED MODULE: ./src/js/eventhandler/chrome/webrequest/onCompleted.js
/*
  *** WARNING ***
  This event handler is always active. It could be run while a direct connection is being
  used, while another proxy extension is active, or while the Private Internet Access
  extension is active.

  Being unaware of this could introduce serious bugs that compromise the security of the
  extension.

*/


function onCompleted(app) {
  return details => {
    const {
      util: {
        counter
      }
    } = app;

    if (counter.get(details.requestId) >= 1) {
      counter.del(details.requestId);
    }
  };
}

/* harmony default export */ var webrequest_onCompleted = (Object(applyListener["a" /* default */])((app, addListener) => {
  const {
    util: {
      httpsUpgrade
    }
  } = app;
  chrome.webRequest.onCompleted.addListener(httpsUpgrade.onCompleted, {
    urls: ['*://*/*']
  });
  addListener(onCompleted(app), {
    urls: ['<all_urls>']
  });
}));
// CONCATENATED MODULE: ./src/js/eventhandler/chrome/webrequest/onErrorOccurred.js
/*
  *** WARNING ***
  This event handler is always active. It could be run while a direct connection is being
  used, while another proxy extension is active, or while the Private Internet Access
  extension is active.

  Being unaware of this could introduce serious bugs that compromise the security of the
  extension.

*/


function openErrorPage(app) {
  const networkErrors = ['net::ERR_CONNECTION_RESET', 'net::ERR_PROXY_CONNECTION_FAILED', 'net::ERR_CONNECTION_TIMED_OUT'];
  const tabQueries = [{
    active: true,
    status: 'loading',
    url: ['http://*/*', 'https://*/*']
  }, {
    active: true,
    status: 'complete',
    url: ['http://*/*', 'https://*/*']
  }];
  return details => {
    const connectedToPIA = app.proxy.enabled();
    const errorOnMainFrame = details.type === 'main_frame';
    const catchableError = networkErrors.indexOf(details.error) > -1;

    if (!connectedToPIA || !errorOnMainFrame || !catchableError) {
      return {
        cancel: false
      };
    }

    tabQueries.forEach(query => {
      chrome.tabs.query(query, tabs => {
        tabs.forEach(tab => {
          if (tab.id === details.tabId) {
            const errorID = app.util.errorinfo.set(details.error, details.url);
            const errorPageURL = chrome.extension.getURL(`html/errorpages/connfail.html?id=${errorID}`);
            chrome.tabs.update(tab.id, {
              url: errorPageURL
            });
          }
        });
      });
    });
    debug(`connection error: ${details.error}`);
    return {
      cancel: true
    };
  };
}

/* harmony default export */ var onErrorOccurred = (Object(applyListener["a" /* default */])((app, addListener) => {
  addListener(openErrorPage(app), {
    urls: ['<all_urls>']
  });
}));
// CONCATENATED MODULE: ./src/js/eventhandler/chrome/runtime/onInstalled.js


function newVersionNotification(app) {
  const isNewVersion = (newVersionStr, oldVersionStr) => {
    const oldVersion = parseInt(oldVersionStr.replace(/\./g, ''));
    const newVersion = parseInt(newVersionStr.replace(/\./g, ''));
    return newVersion > oldVersion;
  };

  const notify = async details => {
    await app.util.i18n.worker();
    const {
      contentsettings
    } = app;
    const title = t('ExtensionUpdated');
    const body = t('WelcomeToNewVersion', {
      appVersion: `v${app.buildinfo.version}`
    });

    if (isNewVersion(app.buildinfo.version, details.previousVersion)) {
      contentsettings.extensionNotification.create(title, {
        body
      });
    }
  };

  return details => {
    if (details.reason === 'update') {
      notify(details);
    }
  };
}

/* harmony default export */ var onInstalled = (Object(applyListener["a" /* default */])((app, addListener) => {
  addListener(newVersionNotification(app));
}));
// CONCATENATED MODULE: ./src/js/eventhandler/chrome/runtime/onMessage.js
/*
  *** WARNING ***
  This event handler is always active. It could be run while a direct connection is being
  used, while another proxy extension is active, or while the Private Internet Access
  extension is active.

  Being unaware of this could introduce serious bugs that compromise the security of the
  extension.

*/


function initOnMessage(app) {
  return (msg, _sender, sendResponse) => {
    switch (msg.request) {
      case 'RequestErrorInfo':
        {
          const {
            errorinfo
          } = app.util;
          sendResponse(errorinfo.get(msg.id));
          break;
        }

      case 'RequestErrorDelete':
        {
          const {
            errorinfo
          } = app.util;
          errorinfo.delete(msg.id);
          break;
        }

      case 't':
        {
          const {
            i18n
          } = app.util;
          const m = i18n.t(msg.localeKey);
          sendResponse({
            m
          });
          break;
        }

      default:
        {
          break;
        }
    }
  };
}

/* harmony default export */ var onMessage = (Object(applyListener["a" /* default */])((app, addListener) => {
  addListener(initOnMessage(app));
}));
// CONCATENATED MODULE: ./src/js/eventhandler/chrome/runtime/onUpdateAvailable.js
/*
  *** WARNING ***
  This event handler is always active. It could be run while a direct connection is being
  used, while another proxy extension is active, or while the Private Internet Access
  extension is active.

  Being unaware of this could introduce serious bugs that compromise the security of the
  extension.

*/


function initReload(app) {
  return details => {
    const {
      proxy
    } = app;
    const {
      user
    } = app.util;

    if (user.inLocalStorage() || !user.getLoggedIn() && !proxy.enabled()) {
      chrome.runtime.reload();
    } else {
      debug(`onupdateavailable.js: v${details.version} will be installed when chrome restarts`);
    }
  };
}

/* harmony default export */ var onUpdateAvailable = (Object(applyListener["a" /* default */])((app, addListener) => {
  addListener(initReload(app));
}));
// CONCATENATED MODULE: ./src/js/eventhandler/chrome/cookies/onChanged.js
/*
  *** WARNING ***
  This event handler is always active. It could be run while a direct connection is being
  used, while another proxy extension is active, or while the Private Internet Access
  extension is active.

  Being unaware of this could introduce serious bugs that compromise the security of the
  extension.

*/

/* harmony default export */ var onChanged = (Object(applyListener["a" /* default */])((app, addListener) => {
  const {
    util: {
      httpsUpgrade
    }
  } = app;
  addListener(httpsUpgrade.onCookieChanged);
}));
// CONCATENATED MODULE: ./src/js/eventhandler/chrome/alarms/onAlarm.js
/*
  *** WARNING ***
  This event handler is always active. It could be run while a direct connection is being
  used, while another proxy extension is active, or while the Private Internet Access
  extension is active.

  Being unaware of this could introduce serious bugs that compromise the security of the
  extension.

*/


function initOnAlarm(app) {
  return function onAlarm(alarm) {
    switch (alarm.name) {
      case 'PollRegionList':
        app.util.regionlist.sync().then(() => {
          debug('onalarm.js: completed background poll of regions');
        }).catch(res => {
          debug(`onalarm.js: background poll of regions failed (${res.cause})`);
        });
        break;

      default:
        break;
    }
  };
}

/* harmony default export */ var onAlarm = (Object(applyListener["a" /* default */])((app, addListener) => {
  addListener(app.util.httpsUpgrade.onAlarm);
  addListener(initOnAlarm(app));
}));
// EXTERNAL MODULE: ./src/js/eventhandler/onError.js
var onError = __webpack_require__(88);

// CONCATENATED MODULE: ./src/js/eventhandler/eventhandler.js











/* harmony default export */ var eventhandler = (function (app) {
  const self = {};
  onAuthRequired(app, chrome.webRequest.onAuthRequired);
  onBeforeRedirect(app, chrome.webRequest.onBeforeRedirect);
  onBeforeRequest(app, chrome.webRequest.onBeforeRequest);
  webrequest_onCompleted(app, chrome.webRequest.onCompleted);
  onErrorOccurred(app, chrome.webRequest.onErrorOccurred);
  onInstalled(app, chrome.runtime.onInstalled);
  onMessage(app, chrome.runtime.onMessage);
  onUpdateAvailable(app, chrome.runtime.onUpdateAvailable);
  onChanged(app, chrome.cookies.onChanged);
  onAlarm(app, chrome.alarms.onAlarm);
  Object(onError["a" /* default */])(app, {
    addListener(listener) {
      window.addEventListener('error', listener);
    }

  });
  return self;
});
// CONCATENATED MODULE: ./src/js/background.js














































function isFrozen() {
  return true === true;
} // build background application (self)


const background_self = Object.create(null);

const deepFreeze = obj => {
  if (isFrozen()) {
    Object.keys(obj).forEach(p => {
      // eslint-disable-next-line no-param-reassign
      obj[p] = Object.freeze(obj[p]);
    });
  }

  return Object.freeze(obj);
}; // event handling and basic browser info gathering


background_self.frozen = isFrozen();
background_self.buildinfo = new buildinfo["a" /* default */](background_self);
background_self.logger = new Logger(background_self); // attach debugging to global scope

window.debug = background_self.logger.debug; // attach utility functions

background_self.util = Object.create(null);
background_self.util.platforminfo = new platforminfo(background_self);
background_self.util.icon = new Icon(background_self);
background_self.util.storage = new util_storage(background_self);
background_self.util.settings = new util_settings(background_self);
background_self.util.i18n = new i18n(background_self);
background_self.util.regionlist = new util_regionlist(background_self);
background_self.util.bypasslist = new BypassList(background_self);
background_self.util.counter = new counter(background_self);
background_self.util.user = new user(background_self);
background_self.util.latencymanager = new util_latencymanager(background_self);
background_self.util.regionsorter = new regionsorter(background_self);
background_self.util.settingsmanager = new settingsmanager(background_self);
background_self.util.errorinfo = new errorinfo(background_self);
background_self.util.httpsUpgrade = new util_https_upgrade(background_self);
background_self.util = Object.freeze(background_self.util);
/* self.proxy is a %{browser}Setting like self.chromesettings.* objects are. */

background_self.proxy = new proxy(background_self);
background_self.proxy.init();
background_self.util.bypasslist.init(); // setup event handler

background_self.eventhandler = new eventhandler(background_self); // attach browser specific functions

background_self.contentsettings = Object.create(null);
background_self.contentsettings.camera = new camera(background_self);
background_self.contentsettings.microphone = new microphone(background_self);
background_self.contentsettings.location = new contentsettings_location(background_self);
background_self.contentsettings.flash = new flash(background_self);
background_self.contentsettings.extensionNotification = new extension_notification(background_self); // attach chrome settings functions

background_self.chromesettings = Object.create(null);
background_self.chromesettings.networkprediction = new networkprediction(background_self);
background_self.chromesettings.httpreferer = new httpreferer(background_self);
background_self.chromesettings.hyperlinkaudit = new hyperlinkaudit(background_self);
background_self.chromesettings.webrtc = new webrtc(background_self);
background_self.chromesettings.thirdpartycookies = new thirdpartycookies(background_self);
background_self.chromesettings.safebrowsing = new safebrowsing(background_self); // new API starting w/ chrome 70

background_self.chromesettings.autofillcreditcard = new autofillcreditcard(background_self);
background_self.chromesettings.autofilladdress = new autofilladdress(background_self); // old API, remove after chrome 70 reaches general availability

background_self.chromesettings.autofill = new autofill(background_self); // Initialize all functions

const initSettings = settings => {
  return Object.values(settings).filter(setting => {
    return setting.init;
  }).forEach(setting => {
    return setting.init();
  });
};

initSettings(background_self.chromesettings);
initSettings(background_self.contentsettings);
background_self.util.settings.init(); // Freeze settings

background_self.contentsettings = deepFreeze(background_self.contentsettings); // check if regions are set

const {
  regionlist: background_regionlist
} = background_self.util;
background_regionlist.sync();
const {
  proxy: background_proxy,
  util: {
    user: background_user
  }
} = background_self;
Promise.resolve() // init user
.then(() => {
  return background_user.init();
}).then(() => {
  return background_proxy.readSettings();
}) // check if proxy is controllable
.then(() => {
  return background_proxy.isControllable();
})
/* NOTE: controllable handling here should be ported to firefox */
.then(async controllable => {
  const proxyOnline = background_self.util.storage.getItem('online') === 'true';

  if (background_user.getLoggedIn() && proxyOnline && controllable) {
    await background_proxy.enable();
  } else {
    await background_proxy.disable();
  }
}).catch(async err => {
  debug(err);
  await background_proxy.disable();
});
window.app = Object.freeze(background_self);
debug('background.js: initialized');

/***/ })
/******/ ]);
//# sourceMappingURL=background.js.map