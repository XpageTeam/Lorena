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
/******/ 		"main-page": 0
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
/******/ 	deferredModules.push(["./src/ts/main-page.ts","js/vendors","js/xpage"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/ts/main-page.ts":
/*!*****************************!*\
  !*** ./src/ts/main-page.ts ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(/*! ./main-slider */ "./src/ts/main-slider.ts"), __webpack_require__(/*! ./main-reviews */ "./src/ts/main-reviews.ts")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
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
        var prevBtn, nextBtn;
        ;
        (function () {
            var slider = document.querySelector(".main-reviews__slider .reviews-slider");
            if (!slider)
                return;
            if (slider.querySelector(".swiper-button-prev"))
                return;
            prevBtn = document.createElement("div"),
                nextBtn = document.createElement("div");
            prevBtn.classList.add("swiper-button-prev");
            nextBtn.classList.add("swiper-button-next");
            slider.append(prevBtn);
            slider.append(nextBtn);
        })();
        app_1.App.each(".main-reviews", function (el) {
            var prevEl = el.querySelector(".reviews-counter__arrows .swiper-button-prev") || el.querySelector(".swiper-button-prev"), nextEl = el.querySelector(".reviews-counter__arrows .swiper-button-next") || el.querySelector(".swiper-button-next"), slider = el.querySelector(".reviews-slider");
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
                breakpoints: {
                    1000: {
                        navigation: {
                            prevEl: prevBtn || prevEl,
                            nextEl: nextBtn || nextEl
                        }
                    }
                }
            });
        });
    });
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),

/***/ "./src/ts/main-slider.ts":
/*!*******************************!*\
  !*** ./src/ts/main-slider.ts ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(/*! swiper/dist/js/swiper.esm.js */ "./node_modules/swiper/dist/js/swiper.esm.js"), __webpack_require__(/*! ./app */ "./src/ts/app.ts"), __webpack_require__(/*! gsap */ "./node_modules/gsap/index.js")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, swiper_esm_js_1, app_1, gsap_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    swiper_esm_js_1.Swiper.use([swiper_esm_js_1.Lazy, swiper_esm_js_1.EffectFade]);
    app_1.App.domReady(function () {
        ;
        (function () {
            var slidesCount = document.querySelectorAll(".main-slide").length;
            var mainSlider;
            mainSlider = new swiper_esm_js_1.Swiper(".main-slider", {
                loop: slidesCount <= 1 ? false : true,
                effect: "fade",
                simulateTouch: false,
                followFinger: false,
                speed: 600,
                lazy: {
                    loadPrevNext: true,
                },
                on: {
                    lazyImageReady: function (slideEl, imageEl) {
                        slideEl.classList.add("js__lazy-ready");
                    },
                    init: function () {
                        if (window.get$(document.querySelector(".main-slider")).find(".swiper-slide-active video")[0])
                            startMainSliderVideo(window.get$(document.querySelector(".main-slider")).find(".swiper-slide-active video")[0], window.get$(document.querySelector(".main-slider")));
                        else
                            setTimeout(function () {
                                document.querySelector(".main-slider").swiper.slideNext();
                            }, 100);
                    }
                }
            });
            mainSlider.on("slideChangeTransitionEnd", function () {
                startMainSliderVideo(window.get$(mainSlider.el).find(".swiper-slide-active video")[0], window.get$(mainSlider.el));
            });
            swapVideosInMainSlider(window.get$(mainSlider.el));
        })();
        (function () {
            var wavesGroup = document.querySelectorAll(".waves circle");
            if (!wavesGroup.length)
                return;
            for (var _i = 0, wavesGroup_1 = wavesGroup; _i < wavesGroup_1.length; _i++) {
                var wave = wavesGroup_1[_i];
                gsap_1.TweenLite.set(wave, {
                    autoAlpha: 0,
                    transformOrigin: "center"
                });
            }
        })();
        (function () {
            var lines = document.querySelectorAll(".scene-dot > path");
            if (!lines.length)
                return;
            for (var _i = 0, lines_1 = lines; _i < lines_1.length; _i++) {
                var line = lines_1[_i];
                gsap_1.TweenLite.set(line, {
                    strokeDashoffset: line.getTotalLength(),
                    strokeDasharray: line.getTotalLength()
                });
            }
        })();
        (function () {
            var textAreas = document.querySelectorAll(".scene-dot .text");
            if (!textAreas.length)
                return;
            for (var _i = 0, textAreas_1 = textAreas; _i < textAreas_1.length; _i++) {
                var textArea = textAreas_1[_i];
                gsap_1.TweenLite.set(textArea, {
                    autoAlpha: 0
                });
            }
        })();
        (function () {
            var dots = document.querySelectorAll(".base-circle rect");
            if (!dots.length)
                return;
            for (var _i = 0, dots_1 = dots; _i < dots_1.length; _i++) {
                var dot = dots_1[_i];
                gsap_1.TweenLite.set(dot, {
                    rotationZ: 45,
                    transformOrigin: "center"
                });
            }
        })();
        (function () {
            var highlights = document.querySelectorAll(".highlight");
            if (!highlights.length)
                return;
            for (var _i = 0, highlights_1 = highlights; _i < highlights_1.length; _i++) {
                var highlight = highlights_1[_i];
                gsap_1.TweenLite.set(highlight, {
                    autoAlpha: 0
                });
            }
        })();
        (function () {
            var activeCircles = document.querySelectorAll(".active-circle");
            if (!activeCircles.length)
                return;
            for (var _i = 0, activeCircles_1 = activeCircles; _i < activeCircles_1.length; _i++) {
                var circle = activeCircles_1[_i];
                gsap_1.TweenLite.set(circle, {
                    autoAlpha: 0,
                    scale: 0,
                    transformOrigin: "center"
                });
            }
        })();
        (function () {
            var baseCircles = document.querySelectorAll(".base-circle");
            if (!baseCircles.length)
                return;
            for (var _i = 0, baseCircles_1 = baseCircles; _i < baseCircles_1.length; _i++) {
                var circle = baseCircles_1[_i];
                bindEventsOnSceneDot(circle);
            }
        })();
    });
    var bindEventsOnSceneDot = function (circle) {
        gsap_1.TweenLite.set(circle, {
            transformOrigin: "center"
        });
        var highlight = circle.querySelector(".highlight");
        circle.addEventListener("mouseenter", function (e) {
            gsap_1.TweenLite.to(highlight, 1, {
                autoAlpha: 1
            });
        });
        circle.addEventListener("mouseleave", function (e) {
            gsap_1.TweenLite.to(highlight, 1, {
                autoAlpha: 0
            });
        });
        circle.addEventListener("click", function (e) {
            var dot = circle.closest(".scene-dot"), activeCircle = dot.querySelector(".active-circle");
            if (dot.classList.contains("js__showed"))
                return;
            var waves = dot.querySelectorAll(".waves circle"), icon = dot.querySelector(".icon");
            gsap_1.TweenLite.to(circle, .5, {
                autoAlpha: 0,
                scale: 0
            });
            gsap_1.TweenLite.to(activeCircle, .5, {
                scale: 1,
                autoAlpha: 1,
                onComplete: function () {
                    gsap_1.TweenLite.to(icon, .3, {
                        opacity: 1
                    });
                    gsap_1.TweenLite.to(dot.querySelector("path"), .3, {
                        strokeDashoffset: 0,
                        onComplete: function () {
                            var textArea = dot.querySelector(".text");
                            gsap_1.TweenLite.to(textArea, .5, {
                                autoAlpha: 1
                            });
                        }
                    });
                }
            });
            var i = 0;
            for (var _i = 0, waves_1 = waves; _i < waves_1.length; _i++) {
                var wave = waves_1[_i];
                gsap_1.TweenLite.set(wave, {
                    autoAlpha: 1
                });
                gsap_1.TweenLite.to(wave, .7, {
                    delay: .12 * i,
                    scale: 2.1,
                    autoAlpha: 0,
                    onComplete: function () {
                        dot.classList.add("js__showed");
                    }
                });
                i++;
            }
        });
    };
    var swapVideosInMainSlider = function ($slider) {
        if (window.matchMedia("(min-width: 660px)").matches)
            $slider.find("video[data-desktop-src]").each(function () {
                var $this = window.get$(this);
                if ($this.attr("src") == $this.attr("data-desktop-src"))
                    return;
                $this.attr("autoplay", true);
                $this.attr("src", $this.attr("data-desktop-src"));
                $this.attr("poster", $this.attr("data-desktop-poster"));
            });
        else
            $slider.find("video[data-mobile-src]").each(function () {
                var $this = window.get$(this);
                if ($this.attr("src") == $this.attr("data-mobile-src"))
                    return;
                $this.attr("autoplay", true);
                $this.attr("src", $this.attr("data-mobile-src"));
                $this.attr("poster", $this.attr("data-mobile-poster"));
            });
    }, startMainSliderVideo = function (video, $slider) {
        $slider.find("video").each(function () {
            this.pause();
        });
        if (!video) {
            return;
        }
        video.addEventListener("ended", function () {
            $slider[0].swiper.slideNext();
        });
        video.play();
    };
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ })

/******/ });
//# sourceMappingURL=main-page.js.map