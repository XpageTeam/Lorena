/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/ 		return result;
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"base": 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
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
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push(["./src/js/common.js","js/vendors"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/common.js":
/*!**************************!*\
  !*** ./src/js/common.js ***!
  \**************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _js_stringAnimate_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../js/stringAnimate.js */ "./src/js/stringAnimate.js");
/* harmony import */ var select2_dist_js_select2_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! select2/dist/js/select2.js */ "./node_modules/select2/dist/js/select2.js");
/* harmony import */ var select2_dist_js_select2_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(select2_dist_js_select2_js__WEBPACK_IMPORTED_MODULE_2__);
 // import is from "is_js"



window.$ = jquery__WEBPACK_IMPORTED_MODULE_0___default.a;
window.jQuery = jquery__WEBPACK_IMPORTED_MODULE_0___default.a;

try {
  document.addEventListener("DOMContentLoaded", function (e) {
    __webpack_require__(/*! ./jquery.fancybox.js */ "./src/js/jquery.fancybox.js");

    __webpack_require__(/*! ../css/jquery.fancybox.css */ "./src/css/jquery.fancybox.css");

    jquery__WEBPACK_IMPORTED_MODULE_0___default()(".fancybox").fancybox({
      trapFocus: false,
      touch: false,
      loop: true,
      buttons: ["fullscreen", "slideShow", "close"],
      beforeClose: function beforeClose(instance, slide) {},
      image: {
        preload: true
      },
      transitionEffect: "slide"
    });
    jquery__WEBPACK_IMPORTED_MODULE_0___default()(".main-slide__title-title").each(function (i, el) {
      new _js_stringAnimate_js__WEBPACK_IMPORTED_MODULE_1__["default"]({
        selector: el
      });
    });
    jquery__WEBPACK_IMPORTED_MODULE_0___default()("select:not(.no-selectize)").each(function () {
      jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).select2({
        placeholder: jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).data("placeholder") || "",
        templateResult: selectionTemplate,
        templateSelection: selectionTemplate
      });
    });
    jquery__WEBPACK_IMPORTED_MODULE_0___default()(".address-slider__slide").fancybox({
      trapFocus: false,
      touch: false,
      loop: true,
      buttons: ["fullscreen", "slideShow", "close"],
      beforeClose: function beforeClose(instance, slide) {
        var slider = document.querySelector(".address.active .address-slider");
        if (!slider) return;
        slider.swiper.slideTo(slide.index);
      },
      image: {
        preload: true
      }
    });
    /** Клик по вариантам исполнения в адаптив */

    jquery__WEBPACK_IMPORTED_MODULE_0___default()(".variants-plates__one").click(function () {
      if (!window.matchMedia("(max-width: 1000px)").matches) return;
      var index = jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).index(),
          $variantsContainer = jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).closest(".variants-list");
      $variantsContainer.find(".variants-slider__slide:eq(".concat(index, ")")).click();
    });
  });
} catch (e) {
  console.log(e);
}

try {
  document.addEventListener("DOMContentLoaded", function (e) {
    var body = document.body;
    jquery__WEBPACK_IMPORTED_MODULE_0___default()(window).on("load scroll touchmove resize", function () {
      if (body.scrollHeight > 2000 && !document.querySelector(".scroller")) {
        jquery__WEBPACK_IMPORTED_MODULE_0___default()("body").append('<div class="scroller"><div class="scroller__progress"></div></div>');
      }

      jquery__WEBPACK_IMPORTED_MODULE_0___default()(".scroller__progress").width(window.scrollY / (body.scrollHeight - window.innerHeight) * 100 + "%");
    });
  });
} catch (e) {
  console.log(e);
}

var selectionTemplate = function selectionTemplate(state) {
  if (!state.element) return;
  var count = state.element.getAttribute("data-count");
  if (count) return jquery__WEBPACK_IMPORTED_MODULE_0___default()("<span class='option__text'>".concat(state.text, " </span><span class='option__count'> /&nbsp;&nbsp;").concat(count, "</span>"));else return state.text;
};

/***/ })

/******/ });
//# sourceMappingURL=base.js.map