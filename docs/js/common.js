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
/******/ 		"common": 0
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
/******/ 	deferredModules.push(["./src/ts/common.ts","js/vendors","js/xpage"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/ssr-window/dist/ssr-window.esm.js":
/*!********************************************************!*\
  !*** ./node_modules/ssr-window/dist/ssr-window.esm.js ***!
  \********************************************************/
/*! exports provided: window, document */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "window", function() { return win; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "document", function() { return doc; });
/**
 * SSR Window 1.0.1
 * Better handling for window object in SSR environment
 * https://github.com/nolimits4web/ssr-window
 *
 * Copyright 2018, Vladimir Kharlampidi
 *
 * Licensed under MIT
 *
 * Released on: July 18, 2018
 */
var doc = (typeof document === 'undefined') ? {
  body: {},
  addEventListener: function addEventListener() {},
  removeEventListener: function removeEventListener() {},
  activeElement: {
    blur: function blur() {},
    nodeName: '',
  },
  querySelector: function querySelector() {
    return null;
  },
  querySelectorAll: function querySelectorAll() {
    return [];
  },
  getElementById: function getElementById() {
    return null;
  },
  createEvent: function createEvent() {
    return {
      initEvent: function initEvent() {},
    };
  },
  createElement: function createElement() {
    return {
      children: [],
      childNodes: [],
      style: {},
      setAttribute: function setAttribute() {},
      getElementsByTagName: function getElementsByTagName() {
        return [];
      },
    };
  },
  location: { hash: '' },
} : document; // eslint-disable-line

var win = (typeof window === 'undefined') ? {
  document: doc,
  navigator: {
    userAgent: '',
  },
  location: {},
  history: {},
  CustomEvent: function CustomEvent() {
    return this;
  },
  addEventListener: function addEventListener() {},
  removeEventListener: function removeEventListener() {},
  getComputedStyle: function getComputedStyle() {
    return {
      getPropertyValue: function getPropertyValue() {
        return '';
      },
    };
  },
  Image: function Image() {},
  Date: function Date() {},
  screen: {},
  setTimeout: function setTimeout() {},
  clearTimeout: function clearTimeout() {},
} : window; // eslint-disable-line




/***/ }),

/***/ "./src/ts/addresses.ts":
/*!*****************************!*\
  !*** ./src/ts/addresses.ts ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(/*! ./app */ "./src/ts/app.ts"), __webpack_require__(/*! swiper/dist/js/swiper.esm */ "./node_modules/swiper/dist/js/swiper.esm.js")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, app_1, swiper_esm_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    swiper_esm_1.Swiper.use([swiper_esm_1.Lazy, swiper_esm_1.EffectFade]);
    app_1.App.domReady(function () {
        new app_1.EventListener(".gray-arrow-btn").add("click", function (el) {
            new app_1.Element(".gray-arrow-btn").closest(".address").removeClass("active");
            new app_1.Element(el).closest(".address").addClass("active");
            initiallizeVariantsSlider(el.closest(".address").querySelector(".address-slider:not(.swiper-container-initialized)"));
        });
        initiallizeVariantsSlider(document.querySelector(".address.active .address-slider:not(.swiper-container-initialized)"));
    });
    var initiallizeVariantsSlider = function (slider) {
        if (!slider)
            return;
        new swiper_esm_1.Swiper(slider, {
            effect: "fade",
            cubeEffect: {
                slideShadows: false,
            },
            lazy: {
                loadPrevNext: true,
                loadPrevNextAmount: 1
            },
        });
    };
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),

/***/ "./src/ts/career.ts":
/*!**************************!*\
  !*** ./src/ts/career.ts ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(/*! ./app */ "./src/ts/app.ts"), __webpack_require__(/*! swiper/dist/js/swiper.esm */ "./node_modules/swiper/dist/js/swiper.esm.js")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, app_1, swiper_esm_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    swiper_esm_1.Swiper.use([swiper_esm_1.Lazy, swiper_esm_1.Keyboard, swiper_esm_1.Navigation]);
    app_1.App.domReady(function () {
        new swiper_esm_1.Swiper(".career-slider", {
            slidesPerView: 3,
            loop: true,
            spaceBetween: 32,
            lazy: {
                loadPrevNext: true,
                loadPrevNextAmount: 3
            },
            keyboard: {
                enabled: true,
                onlyInViewport: true,
            },
            navigation: {
                nextEl: '.career-slider__arrows .swiper-button-next',
                prevEl: '.career-slider__arrows .swiper-button-prev',
            },
        });
    });
    app_1.App.domReady(function () {
        var vacancyList = new app_1.Element(".vacancy__title");
        new app_1.EventListener(vacancyList).add("click", function (el) {
            vacancyList.closest(".vacancy").removeClass("js__opened");
            new app_1.Element(el).closest(".vacancy").addClass("js__opened");
        });
    });
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),

/***/ "./src/ts/common.ts":
/*!**************************!*\
  !*** ./src/ts/common.ts ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(/*! ./app */ "./src/ts/app.ts"), __webpack_require__(/*! ./tovar */ "./src/ts/tovar.ts"), __webpack_require__(/*! ./timeline */ "./src/ts/timeline.ts"), __webpack_require__(/*! ./standart-page */ "./src/ts/standart-page.ts"), __webpack_require__(/*! ./useful */ "./src/ts/useful.ts"), __webpack_require__(/*! ./addresses */ "./src/ts/addresses.ts"), __webpack_require__(/*! ./partners */ "./src/ts/partners.ts"), __webpack_require__(/*! ./career */ "./src/ts/career.ts")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, app_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var adaptiveMedia = "(max-width: 1200px)";
    app_1.App.domReady(function () {
        new app_1.MobileMenu({
            burger: ".head__burger",
            menu: ".side-menu",
            menuActiveClass: "js__opened",
            bodyActiveClass: "js__menu__opened",
            ignoreWarnings: false,
            fixBody: true,
            media: adaptiveMedia
        });
        var sideMenu = new app_1.Element(".side-menu");
        new app_1.EventListener(".h-menu__item--have-sub > a").add("click", function (el, event) {
            if (!window.matchMedia(adaptiveMedia).matches)
                return;
            var parentEl = new app_1.Element(el).closest(".h-menu__item--have-sub").addClass("js__submenu-opened");
            sideMenu.addClass("js__submenu-opened");
            event.preventDefault();
        });
        new app_1.EventListener(".h-submenu__close").add("click", function (el, event) {
            if (!window.matchMedia(adaptiveMedia).matches)
                return;
            var parentEl = new app_1.Element(el).closest(".h-menu__item--have-sub").removeClass("js__submenu-opened");
            sideMenu.removeClass("js__submenu-opened");
            event.preventDefault();
        });
    });
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),

/***/ "./src/ts/main-reviews.ts":
/*!********************************!*\
  !*** ./src/ts/main-reviews.ts ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(/*! swiper/dist/js/swiper.esm.js */ "./node_modules/swiper/dist/js/swiper.esm.js"), __webpack_require__(/*! ./app */ "./src/ts/app.ts")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, swiper_esm_js_1, app_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    swiper_esm_js_1.Swiper.use([swiper_esm_js_1.Lazy, swiper_esm_js_1.EffectFade, swiper_esm_js_1.Navigation]);
    app_1.App.domReady(function () {
        app_1.App.each(".main-reviews", function (el) {
            var prevEl = el.querySelector(".swiper-button-prev"), nextEl = el.querySelector(".swiper-button-next"), slider = el.querySelector(".reviews-slider");
            new swiper_esm_js_1.Swiper(slider, {
                effect: "fade",
                navigation: {
                    prevEl: prevEl,
                    nextEl: nextEl
                },
                lazy: {
                    loadPrevNext: true,
                    loadPrevNextAmount: 3,
                    loadOnTransitionStart: true
                },
            });
        });
    });
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),

/***/ "./src/ts/partners.ts":
/*!****************************!*\
  !*** ./src/ts/partners.ts ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(/*! ./app */ "./src/ts/app.ts"), __webpack_require__(/*! swiper/dist/js/swiper.esm */ "./node_modules/swiper/dist/js/swiper.esm.js")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, app_1, swiper_esm_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    swiper_esm_1.Swiper.use([swiper_esm_1.Lazy, swiper_esm_1.Keyboard, swiper_esm_1.Scrollbar]);
    app_1.App.domReady(function () {
        var partnersSlider = new swiper_esm_1.Swiper(".partners-slider", {
            slidesPerColumn: getSlidesPerColumn(),
            slidesPerView: 3,
            freeMode: true,
            lazy: {
                loadPrevNext: true,
                loadPrevNextAmount: 1000
            },
            keyboard: {
                enabled: true,
                onlyInViewport: true,
            },
            scrollbar: {
                el: '.swiper-scrollbar',
                draggable: true,
            },
            breakpoints: {
                5000: {
                    slidesPerView: 12
                },
                4000: {
                    slidesPerView: 10
                },
                3500: {
                    slidesPerView: 8
                },
                3100: {
                    slidesPerView: 6
                },
                2600: {
                    slidesPerView: 5
                },
                2300: {
                    slidesPerView: 4
                },
                2000: {
                    slidesPerView: 3
                },
                1700: {
                    slidesPerView: 2
                }
            }
        });
    });
    var getSlidesPerColumn = function () {
        var screenHeight = window.innerHeight;
        if (screenHeight >= 1200)
            return 3;
        else if (screenHeight >= 650)
            return 2;
        else
            return 1;
    };
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),

/***/ "./src/ts/standart-page.ts":
/*!*********************************!*\
  !*** ./src/ts/standart-page.ts ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(/*! ./app */ "./src/ts/app.ts"), __webpack_require__(/*! swiper */ "./node_modules/swiper/dist/js/swiper.esm.bundle.js")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, app_1, swiper_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    app_1.App.domReady(function () {
        var tableWrap = document.createElement("div"), tableWrapTrack = document.createElement("div"), shadows = {
            right: document.createElement("div"),
            left: document.createElement("div"),
        };
        shadows.right.classList.add("table-wrap__shadow");
        shadows.right.classList.add("table-wrap__shadow--right");
        shadows.left.classList.add("table-wrap__shadow");
        shadows.left.classList.add("table-wrap__shadow--left");
        tableWrap.classList.add("table-wrap");
        tableWrapTrack.classList.add("table-wrap__track");
        app_1.App.wrap(".text-page > table", tableWrapTrack);
        app_1.App.wrap(".table-wrap__track", tableWrap);
        app_1.App.each(".table-wrap", function (el) {
            el.insertBefore(shadows.left, el.querySelector("*:first-child"));
            el.insertBefore(shadows.right, null);
        });
        app_1.App.each(".table-wrap__track", function (track) {
            if (track.scrollWidth > track.clientWidth) {
                var wrap = track.closest(".table-wrap");
                var shadows_1 = {
                    right: wrap.querySelector(".table-wrap__shadow--right")
                };
                setShadowOpacity(shadows_1.right, track.scrollWidth - track.clientWidth);
            }
            new app_1.EventListener(track).add("scroll", function (el) {
                var wrap = el.closest(".table-wrap");
                var shadows = {
                    left: wrap.querySelector(".table-wrap__shadow--left"),
                    right: wrap.querySelector(".table-wrap__shadow--right")
                };
                setShadowOpacity(shadows.right, el.scrollWidth - el.clientWidth - el.scrollLeft);
                setShadowOpacity(shadows.left, el.scrollLeft);
            });
        });
    });
    app_1.App.domReady(function () {
        app_1.App.each(".standart-slider", function (el) {
            var prevEl = el.querySelector(".swiper-button-prev"), nextEl = el.querySelector(".swiper-button-next"), pagination = el.querySelector(".swiper-pagination");
            new swiper_1.default(el, {
                loop: true,
                a11y: false,
                lazy: {
                    loadPrevNext: true,
                    loadOnTransitionStart: true,
                    loadPrevNextAmount: 3
                },
                navigation: {
                    prevEl: prevEl,
                    nextEl: nextEl
                },
                breakpoints: {
                    660: {
                        navigation: {},
                        pagination: {
                            el: pagination,
                            type: "bullets",
                            dynamicBullets: true,
                            dynamicMainBullets: 3
                        }
                    }
                }
            });
        });
    });
    var setShadowOpacity = function (element, scrollWidth, offsetWidth) {
        if (offsetWidth === void 0) { offsetWidth = 80; }
        element.style.opacity = (scrollWidth / offsetWidth <= 1 ? scrollWidth / offsetWidth : 1).toString();
    };
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),

/***/ "./src/ts/timeline.ts":
/*!****************************!*\
  !*** ./src/ts/timeline.ts ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(/*! ./app */ "./src/ts/app.ts")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, app_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    app_1.App.domReady(function () {
        ;
        (function () {
            app_1.App.each(".time-line__item", function (el, i) {
                if (i > 1)
                    el.style.opacity = (1 / i).toString();
            });
        })();
    });
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),

/***/ "./src/ts/tovar.ts":
/*!*************************!*\
  !*** ./src/ts/tovar.ts ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(/*! ./app */ "./src/ts/app.ts"), __webpack_require__(/*! swiper/dist/js/swiper.esm */ "./node_modules/swiper/dist/js/swiper.esm.js"), __webpack_require__(/*! ./main-reviews */ "./src/ts/main-reviews.ts")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, app_1, swiper_esm_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    swiper_esm_1.Swiper.use([swiper_esm_1.Lazy, swiper_esm_1.EffectFade, swiper_esm_1.EffectCube, swiper_esm_1.Keyboard]);
    app_1.App.domReady(function () {
        new app_1.EventListener(".tovar-tabs__tab").add("click", function (el, event) {
            var id = el.getAttribute("href").replace("#", ""), targetBlock = new app_1.Element("#" + id);
            new app_1.Element(".variants-list.active, .tovar-tabs__tab.active").removeClass("active");
            new app_1.Element(el).addClass("active");
            targetBlock.addClass("active");
            initiallizeVariantsSlider(document.querySelector(".variants-list.active .variants-slider:not(.swiper-container-initialized)"));
            event.preventDefault();
        });
        initiallizeVariantsSlider(document.querySelector(".variants-list.active .variants-slider:not(.swiper-container-initialized)"));
    });
    app_1.App.domReady(function () {
        var mainSlider = new swiper_esm_1.Swiper(".tovar-sliders__big", {
            effect: "fade",
            lazy: {
                loadPrevNext: true,
            },
            keyboard: {
                enabled: true,
                onlyInViewport: true,
            }
        });
        new app_1.EventListener(".thumbs-slider__slide").add("click", function (el, event, i) {
            mainSlider.slideTo(i);
        });
    });
    var initiallizeVariantsSlider = function (slider) {
        if (!slider)
            return;
        var thisSlider = new swiper_esm_1.Swiper(slider, {
            effect: "cube",
            cubeEffect: {
                slideShadows: false,
            },
            lazy: {
                loadPrevNext: true,
                loadPrevNextAmount: 2
            },
        });
        bindNav(thisSlider, slider.closest(".variants-list"));
    }, bindNav = function (slider, el) {
        var plates = new app_1.Element(el).find(".variants-plates__one");
        if (!plates.length)
            return;
        new app_1.EventListener(plates).add("click", function (el, event, i) {
            plates.removeClass("active");
            el.classList.add("active");
            slider.slideTo(i);
        });
    };
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),

/***/ "./src/ts/useful.ts":
/*!**************************!*\
  !*** ./src/ts/useful.ts ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(/*! ./app */ "./src/ts/app.ts")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, app_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    app_1.App.domReady(function () {
        var titles = new app_1.Element(".useful-item__title");
        new app_1.EventListener(titles).add("click", function (el) {
            titles.closest(".useful-item").removeClass("active");
            new app_1.Element(el).closest(".useful-item").addClass("active");
        });
    });
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ })

/******/ });
//# sourceMappingURL=common.js.map