<<<<<<< HEAD
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

/***/ "./src/ts/about.ts":
/*!*************************!*\
  !*** ./src/ts/about.ts ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(/*! ./app */ "./src/ts/app.ts"), __webpack_require__(/*! gsap */ "./node_modules/gsap/index.js")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, app_1, gsap_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    app_1.App.domReady(function () {
        var circles = document.querySelectorAll(".front-circle, .middle-circle, .inner-circle");
        if (!circles.length)
            return;
        gsap_1.TweenLite.set(circles, {
            transformOrigin: "center"
        });
        mapPulse(circles);
        app_1.App.each('.cw-item__img path', function (el) {
            el.style.strokeDasharray = el.getTotalLength() + ', ' + el.getTotalLength();
            el.style.strokeDashoffset = el.getTotalLength().toString();
        });
    });
    var mapPulse = function (circles) {
        gsap_1.TweenLite.to(circles, 2, {
            scale: 1.1,
            onComplete: function () {
                gsap_1.TweenLite.to(circles, 2, {
                    scale: 1,
                    onComplete: function () {
                        mapPulse(circles);
                    }
                });
            }
        });
    };
    app_1.App.domReady(function () {
        var map = document.querySelector("#russia-map");
        if (!map)
            return;
        gsap_1.TweenLite.set(map, {
            transformOrigin: "center",
            scale: .1,
            opacity: 0
        });
        var mapPoints = map.querySelectorAll("ellipse, circle");
        if (!mapPoints.length)
            return;
        var showMap = function () {
            gsap_1.TweenLite.to(map, .7, {
                scale: 1,
                opacity: 1,
                onComplete: function () {
                    app_1.App.each(mapPoints, function (el, i) {
                        gsap_1.TweenLite.to(el, .2, {
                            opacity: 1,
                            delay: !i ? i : parseFloat("." + i)
                        });
                    });
                }
            });
        };
        app_1.App.each(mapPoints, function (el) {
            gsap_1.TweenLite.set(el, {
                opacity: 0
            });
        });
        if (window.isScrolledIntoView(map))
            showMap();
        window.addEventListener("scroll", function () {
            if (window.isScrolledIntoView(map))
                showMap();
        });
        window.addEventListener("resize", function () {
            if (window.isScrolledIntoView(map))
                showMap();
        });
    });
    app_1.App.domReady(function () {
        var leftDecor = document.querySelector(".about__decors-left"), rightDecor = document.querySelector(".about__decors-right");
        if (!leftDecor || !rightDecor)
            return;
        var imgBlock = document.querySelector(".about__img");
        var animateElements = function () {
            if (!imgBlock)
                return;
            if (window.scrollY >= parseInt(getComputedStyle(imgBlock).height) / 1.9) {
                gsap_1.TweenLite.to(leftDecor, .2, {
                    opacity: 1
                });
                gsap_1.TweenLite.to(rightDecor, .2, {
                    opacity: 1
                });
            }
            else {
                gsap_1.TweenLite.to(leftDecor, .2, {
                    opacity: 0
                });
                gsap_1.TweenLite.to(rightDecor, .2, {
                    opacity: 0
                });
            }
            gsap_1.TweenLite.to(leftDecor, 1, {
                y: -(window.scrollY / window.innerHeight * 190) + "px"
            });
            gsap_1.TweenLite.to(rightDecor, 1.5, {
                y: -(window.scrollY / window.innerHeight * 160) + "px"
            });
        };
        animateElements();
        window.addEventListener("resize", animateElements);
        window.addEventListener("scroll", animateElements);
    });
    app_1.App.domReady(function () {
        var parallaxBlocksX = document.querySelectorAll(".bottom-decor"), parallaxBlocksXY = document.querySelectorAll(".top-decor, .left-decor"), topBlock = document.querySelector(".about-img");
        if (!parallaxBlocksX.length || !topBlock)
            return;
        topBlock.addEventListener("mousemove", function (e) {
            var pos = {
                x: 0,
                y: 0,
            };
            pos.x = (e.pageX - topBlock.clientWidth / 2) * -1 / 55;
            pos.y = (e.pageY - topBlock.clientHeight / 2) * -1 / 55;
            gsap_1.TweenLite.to(parallaxBlocksX, 2, {
                x: pos.x,
            });
            gsap_1.TweenLite.to(parallaxBlocksXY, 2, {
                x: pos.x,
                y: pos.y
            });
        });
    });
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),

/***/ "./src/ts/addresses.ts":
/*!*****************************!*\
  !*** ./src/ts/addresses.ts ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(/*! ./app */ "./src/ts/app.ts"), __webpack_require__(/*! swiper/dist/js/swiper.esm */ "./node_modules/swiper/dist/js/swiper.esm.js"), __webpack_require__(/*! gsap */ "./node_modules/gsap/index.js")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, app_1, swiper_esm_1, gsap_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    swiper_esm_1.Swiper.use([swiper_esm_1.Lazy, swiper_esm_1.EffectFade]);
    app_1.App.domReady(function () {
        new app_1.EventListener(".address__top").add("click", function (el) {
            var $this = new app_1.Element(el).closest(".address");
            if ($this.hasClass("active")) {
                $this.removeClass("active");
            }
            else {
                new app_1.Element(".address.active").removeClass("active");
                $this.addClass("active");
                initiallizeVariantsSlider(el.closest(".address").querySelector(".active .address-slider:not(.swiper-container-initialized)"));
                window.animateScroll($this.els[0].offsetTop - 15);
            }
        });
        initiallizeVariantsSlider(document.querySelector(".address.active .active .address-slider:not(.swiper-container-initialized)"));
    });
    app_1.App.domReady(function () {
        new app_1.EventListener(".address-detail__btn .gray-arrow-btn").add("click", function (el) {
            var tab = el.closest(".address-tabs__tab"), index = tab.getAttribute("data-id"), $tab = new app_1.Element(tab);
            if ($tab.hasClass("active"))
                return;
            $tab.closest(".address__content").find(".active").removeClass("active");
            $tab.addElement($tab.closest(".address__content").find(".address-desc[data-id=\"" + index + "\"]")).addClass("active");
            initiallizeVariantsSlider(document.querySelector(".address.active .active .address-slider:not(.swiper-container-initialized)"));
            if (window.matchMedia("(max-width: 1200px)").matches)
                window.animateScroll($tab.closest(".address__content").find(".address-desc[data-id=\"" + index + "\"]").els[0].offsetTop - 20);
        });
    });
    var initiallizeVariantsSlider = function (slider) {
        if (!slider)
            return;
        var prev = slider.querySelector(".swiper-button-prev"), next = slider.querySelector(".swiper-button-next");
        new swiper_esm_1.Swiper(slider, {
            effect: "fade",
            loop: true,
            navigation: {
                prevEl: prev,
                nextEl: next,
            },
            cubeEffect: {
                slideShadows: false,
            },
            lazy: {
                loadPrevNext: true,
                loadPrevNextAmount: 1
            },
        });
    };
    app_1.App.domReady(function () {
        if (window.matchMedia("(min-width: 1000px)").matches)
            app_1.App.each(".adr-counter__number", function (el) {
                var counter = { count: 0 };
                el.style.width = getComputedStyle(el).width;
                gsap_1.TweenLite.to(el, 2, {
                    opacity: 1
                });
                gsap_1.TweenLite.to(counter, 10, {
                    count: "+=" + el.innerText,
                    onUpdate: function () {
                        el.innerText = Math.ceil(counter.count).toString();
                    }
                });
            });
        else
            gsap_1.TweenLite.set(".adr-counter__number", {
                opacity: 1
            });
    });
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),

/***/ "./src/ts/advantages.ts":
/*!******************************!*\
  !*** ./src/ts/advantages.ts ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(/*! ./app */ "./src/ts/app.ts"), __webpack_require__(/*! swiper/dist/js/swiper.esm.js */ "./node_modules/swiper/dist/js/swiper.esm.js")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, app_1, swiper_esm_js_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    swiper_esm_js_1.Swiper.use([swiper_esm_js_1.Pagination, swiper_esm_js_1.Navigation, swiper_esm_js_1.Keyboard, swiper_esm_js_1.Mousewheel]);
    app_1.App.domReady(function () {
        new swiper_esm_js_1.Swiper(".n-advantages .advantage-list", {
            mousewheel: true,
            slidesPerGroup: 3,
            slidesPerView: 3,
            spaceBetween: 70,
            direction: "vertical",
            loop: true,
            pagination: {
                el: '.swiper-pagination',
                type: 'fraction',
                renderFraction: function (currentClass, totalClass) {
                    return "<span class=\"" + currentClass + "\"></span> - \n\t\t\t\t\t<span class=\"" + totalClass + "\"></span>";
                }
            },
            navigation: {
                prevEl: ".swiper-button-prev",
                nextEl: ".swiper-button-next",
            },
            keyboard: {
                enabled: true,
                onlyInViewport: true,
            },
            breakpoints: {
                1700: {
                    spaceBetween: 50
                },
                1500: {
                    spaceBetween: 40
                },
                1200: {
                    direction: "horizontal",
                    slidesPerColumn: 2,
                    slidesPerGroup: 1,
                    loop: false,
                    spaceBetween: 20
                },
                1000: {
                    direction: "horizontal",
                    slidesPerColumn: 2,
                    slidesPerGroup: 1,
                    loop: false,
                    slidesPerView: 2,
                    spaceBetween: 20
                },
                660: {
                    direction: "horizontal",
                    slidesPerColumn: 1,
                    slidesPerGroup: 1,
                    loop: false,
                    slidesPerView: 1,
                    spaceBetween: 20
                }
            }
        });
    });
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
            breakpoints: {
                1000: {
                    slidesPerView: 2,
                    spaceBetween: 20,
                },
                660: {
                    slidesPerView: 1,
                    spaceBetween: 20,
                }
            }
        });
    });
    app_1.App.domReady(function () {
        var vacancyList = new app_1.Element(".vacancy__title");
        new app_1.EventListener(vacancyList).add("click", function (el) {
            var $this = new app_1.Element(el).closest(".vacancy");
            if ($this.hasClass("js__opened")) {
                $this.removeClass("js__opened");
            }
            else {
                new app_1.Element(".vacancy.js__opened").removeClass("js__opened");
                $this.addClass("js__opened");
                window.moveCareerForm($this.find(".vacancy-form").get(0).els[0]);
                new app_1.EventListener($this.find(".vacancy-form").get(0).els[0].querySelector(".default-input__input--file")).add("change", function (el) {
                    var parent = el.closest(".default-input--file"), fileNameField = parent.querySelector(".default-input__label--file");
                    if (el.files.length) {
                        var names = [];
                        for (var i = 0; i < el.files.length; i++)
                            names.push(el.files[i].name);
                        fileNameField.setAttribute("data-text", names.join(", "));
                    }
                    else {
                        fileNameField.setAttribute("data-text", "Файл не выбран");
                    }
                });
            }
        });
        new app_1.Element(".cities-list .city.active").closest(".cities-list__item").addClass("active");
        new app_1.EventListener(".cities-list .city").add("click", function (el, event) {
            var $this = new app_1.Element(el), index = el.getAttribute("data-id");
            event.preventDefault();
            if ($this.hasClass("active")) {
                if (window.matchMedia("(max-width: 660px)").matches)
                    $this.closest(".c-vacancy__cities").toggleClass("js__opened");
                return;
            }
            else if (window.matchMedia("(max-width: 660px)").matches)
                $this.closest(".c-vacancy__cities").removeClass("js__opened");
            new app_1.Element(".cities-list .city.active, .vacancy-list.active").addElement(".cities-list__item.active").removeClass("active");
            $this.addElement(".vacancy-list[data-id='" + index + "']").addElement($this.closest(".cities-list__item")).addClass("active");
        });
    });
    app_1.App.domReady(function () {
        var select = document.createElement("select"), areaForSelect = document.querySelector(".c-vacancy__cities");
        if (!areaForSelect)
            return;
        select.classList.add("city-select");
        app_1.App.each(".city", function (el) {
            var option = document.createElement("option");
            option.setAttribute("value", el.getAttribute("data-id"));
            option.innerText = el.innerText;
            if (el.classList.contains("active"))
                select.value = el.getAttribute("data-id");
            select.appendChild(option);
        });
        new app_1.EventListener(select).add("change", function (el) {
            var index = el.value;
            new app_1.Element(".cities-list .city.active, .vacancy-list.active").addElement(".cities-list__item.active").removeClass("active");
            new app_1.Element(".vacancy-list[data-id='" + index + "'], .city[data-id='" + index + "']").addElement(new app_1.Element(".city[data-id='" + index + "']").closest(".cities-list__item")).addClass("active");
        });
        areaForSelect.appendChild(select);
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

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(/*! ./app */ "./src/ts/app.ts"), __webpack_require__(/*! swiper/dist/js/swiper.esm.js */ "./node_modules/swiper/dist/js/swiper.esm.js"), __webpack_require__(/*! ./tovar */ "./src/ts/tovar.ts"), __webpack_require__(/*! ./timeline */ "./src/ts/timeline.ts"), __webpack_require__(/*! ./standart-page */ "./src/ts/standart-page.ts"), __webpack_require__(/*! ./addresses */ "./src/ts/addresses.ts"), __webpack_require__(/*! ./partners */ "./src/ts/partners.ts"), __webpack_require__(/*! ./career */ "./src/ts/career.ts"), __webpack_require__(/*! ./forms */ "./src/ts/forms.ts"), __webpack_require__(/*! ./reviews */ "./src/ts/reviews.ts"), __webpack_require__(/*! ./advantages */ "./src/ts/advantages.ts"), __webpack_require__(/*! ./nav-scrolling */ "./src/ts/nav-scrolling.ts"), __webpack_require__(/*! ./about */ "./src/ts/about.ts")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, app_1, swiper_esm_js_1) {
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
        new app_1.EventListener(".main-slide__title-btn").add("click", function (el, e) {
            var target = document.querySelector(".main-about__cont");
            window.animateScroll(target.offsetTop - 100);
            e.preventDefault();
        });
        var stockSwiper = new swiper_esm_js_1.Swiper('.main-stock__slider', {
            spaceBetween: 26,
            navigation: {
                nextEl: '.main-stock .swiper-button-next',
                prevEl: '.main-stock .swiper-button-prev',
            },
        });
    });
    app_1.App.domReady(function () {
        ;
        (function () {
            var scrollTopBtn = document.createElement("div");
            scrollTopBtn.innerText = "вверх";
            scrollTopBtn.classList.add("to-top-btn");
            if (document.querySelector(".tovar-arrows"))
                scrollTopBtn.classList.add("js__tovar-btns-cutch");
            new app_1.EventListener(scrollTopBtn).add("click", function (el) {
                window.animateScroll(0);
            });
            document.body.appendChild(scrollTopBtn);
        })();
        setToTopVisibility();
        window.addEventListener("resize", setToTopVisibility);
        window.addEventListener("scroll", setToTopVisibility);
    });
    var setToTopVisibility = function () {
        var scrollBtn = document.querySelector(".to-top-btn");
        if (!scrollBtn)
            return;
        if (window.scrollY >= 600)
            scrollBtn.classList.add("js__visible");
        else
            scrollBtn.classList.remove("js__visible");
    };
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),

/***/ "./src/ts/forms.ts":
/*!*************************!*\
  !*** ./src/ts/forms.ts ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(/*! ./app */ "./src/ts/app.ts")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, app_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    app_1.App.domReady(function () {
        new app_1.EventListener(".default-input__input--file").add("change", function (el) {
            var parent = el.closest(".default-input--file"), fileNameField = parent.querySelector(".default-input__label--file");
            if (el.files.length) {
                var names = [];
                for (var i = 0; i < el.files.length; i++)
                    names.push(el.files[i].name);
                fileNameField.setAttribute("data-text", names.join(", "));
            }
            else {
                fileNameField.setAttribute("data-text", "Файл не выбран");
            }
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

/***/ "./src/ts/nav-scrolling.ts":
/*!*********************************!*\
  !*** ./src/ts/nav-scrolling.ts ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(/*! ./app */ "./src/ts/app.ts")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, app_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    app_1.App.domReady(function () {
        var shadows = {
            right: document.createElement("div"),
            left: document.createElement("div"),
        };
        shadows.right.classList.add("title-menu__shadow");
        shadows.right.classList.add("title-menu__shadow--right");
        shadows.left.classList.add("title-menu__shadow");
        shadows.left.classList.add("title-menu__shadow--left");
        app_1.App.each(".title-block__menu", function (el) {
            el.insertBefore(shadows.left, el.querySelector("*:first-child"));
            el.insertBefore(shadows.right, null);
        });
        app_1.App.each(".title-menu", function (track) {
            if (track.scrollWidth > track.clientWidth) {
                var wrap = track.closest(".title-block__menu");
                var shadows_1 = {
                    right: wrap.querySelector(".title-menu__shadow--right")
                };
                setShadowOpacity(shadows_1.right, track.scrollWidth - track.clientWidth);
            }
            new app_1.EventListener(track).add("scroll", function (el) {
                var wrap = el.closest(".title-block__menu");
                var shadows = {
                    left: wrap.querySelector(".title-menu__shadow--left"),
                    right: wrap.querySelector(".title-menu__shadow--right")
                };
                setShadowOpacity(shadows.right, el.scrollWidth - el.clientWidth - el.scrollLeft);
                setShadowOpacity(shadows.left, el.scrollLeft);
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

/***/ "./src/ts/partners.ts":
/*!****************************!*\
  !*** ./src/ts/partners.ts ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(/*! ./app */ "./src/ts/app.ts"), __webpack_require__(/*! swiper/dist/js/swiper.esm */ "./node_modules/swiper/dist/js/swiper.esm.js")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, app_1, swiper_esm_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    swiper_esm_1.Swiper.use([swiper_esm_1.Lazy, swiper_esm_1.Keyboard, swiper_esm_1.Scrollbar, swiper_esm_1.Navigation]);
    app_1.App.domReady(function () {
        var partnersSlider = new swiper_esm_1.Swiper(".partners-slider", {
            slidesPerColumn: getSlidesPerColumn(),
            slidesPerView: "auto",
            freeMode: true,
            roundLengths: true,
            navigation: {
                prevEl: ".partners-text__text-arrows .swiper-button-prev",
                nextEl: ".partners-text__text-arrows .swiper-button-next"
            },
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
                    slidesPerView: 6
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
                },
                1100: {
                    slidesPerView: 1
                },
                1000: {
                    slidesPerView: 3
                },
                660: {
                    slidesPerView: 2
                },
                400: {
                    slidesPerView: 1
                }
            }
        });
        window.addEventListener("resize", function () {
        });
    });
    var getSlidesPerColumn = function () {
        var screenHeight = window.innerHeight, screenWidth = window.innerWidth;
        if (screenHeight >= 1200)
            return 2;
        else if (screenWidth < 660)
            return 1;
        else if (screenHeight >= 650)
            return 2;
        else
            return 1;
    }, setSlidesHeight = function (slides) {
        app_1.App.each(slides, function (el) {
            el.style.height = getComputedStyle(el).width;
        });
    };
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),

/***/ "./src/ts/reviews.ts":
/*!***************************!*\
  !*** ./src/ts/reviews.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(/*! ./app */ "./src/ts/app.ts")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, app_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    app_1.App.domReady(function () {
        if (!document.querySelector(".rev-list.load--more_list"))
            return;
        makeEvent();
        var observer = new MutationObserver(function (mutations) {
            mutations.forEach(function (mutation) {
                makeEvent();
            });
        });
        var config = { attributes: false, childList: true, characterData: false };
        observer.observe(document.querySelector(".rev-list.load--more_list"), config);
    });
    var makeEvent = function () {
        new app_1.EventListener(".rev-more a").add("click", function (el, e) {
            var $this = new app_1.Element(el).closest(".review");
            e.preventDefault();
            if ($this.hasClass("js__opened")) {
                $this.removeClass("js__opened");
                $this.find(".rev-more a").text("Читать весь отзыв");
            }
            else {
                new app_1.Element(".review.js__opened").removeClass("js__opened").find(".rev-more a").text("Читать весь отзыв");
                $this.addClass("js__opened");
                $this.find(".rev-more a").text("Свернуть отзыв");
            }
            el.blur();
        });
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

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(/*! ./app */ "./src/ts/app.ts"), __webpack_require__(/*! swiper/dist/js/swiper.esm.js */ "./node_modules/swiper/dist/js/swiper.esm.js")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, app_1, swiper_esm_js_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    swiper_esm_js_1.Swiper.use([swiper_esm_js_1.Lazy, swiper_esm_js_1.Navigation]);
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
            new swiper_esm_js_1.Swiper(el, {
                loop: true,
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

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(/*! swiper/dist/js/swiper.esm.js */ "./node_modules/swiper/dist/js/swiper.esm.js"), __webpack_require__(/*! ./app */ "./src/ts/app.ts"), __webpack_require__(/*! gsap */ "./node_modules/gsap/index.js")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, swiper_esm_js_1, app_1, gsap_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    swiper_esm_js_1.Swiper.use([swiper_esm_js_1.Keyboard, swiper_esm_js_1.Navigation, swiper_esm_js_1.Autoplay]);
    app_1.App.domReady(function () {
        new swiper_esm_js_1.Swiper(".time-line", {
            slidesPerView: 4,
            loop: true,
            loopedSlides: 4,
            speed: 600,
            autoplay: {
                delay: 4000,
            },
            navigation: {
                prevEl: ".mission-desc__title-arrows .swiper-button-prev",
                nextEl: ".mission-desc__title-arrows .swiper-button-next"
            },
            keyboard: {
                enabled: true,
                onlyInViewport: true,
            },
            on: {
                transitionStart: setOpacity
            },
            breakpoints: {
                1000: {
                    slidesPerView: 2
                },
                660: {
                    slidesPerView: 1
                }
            }
        });
        setOpacity();
        (function () {
            var timelineSlides = document.querySelectorAll(".time-line .time-line__item");
            if (!timelineSlides.length)
                return;
            app_1.App.each(timelineSlides, function (el) {
                gsap_1.TweenLite.set(el, {
                    opacity: window.matchMedia("(min-width: 1000px)").matches ? 0 : 1
                });
            });
            var timeline = document.querySelector(".time-line");
            timeline.classList.add("js__ready-for-animate");
            if (!window.matchMedia("(min-width: 1000px)").matches) {
                timeline.classList.add("js__animating");
                return;
            }
            var showSlides = function () {
                timeline.classList.add("js__animating");
                app_1.App.each(timelineSlides, function (el, i) {
                    gsap_1.TweenLite.to(el, .3, {
                        opacity: 1,
                        delay: !i ? i : i / 3
                    });
                });
            };
            if (window.isScrolledIntoView(timeline))
                showSlides();
            window.addEventListener("scroll", function () {
                if (window.isScrolledIntoView(timeline))
                    showSlides();
            });
            window.addEventListener("resize", function () {
                if (window.isScrolledIntoView(timeline))
                    showSlides();
            });
        })();
    });
    var setOpacity = function () {
        if (!document.querySelector(".time-line"))
            return;
        var mainSlide = document.querySelector(".time-line .swiper-slide-next");
        var stopEach = false;
        app_1.App.each(".time-line .swiper-slide", function (el) {
            if (stopEach)
                return;
            el.style.opacity = "1";
            if (el.classList.contains("swiper-slide-next"))
                stopEach = true;
        });
        var slides = [mainSlide];
        for (var i = 0; i < 4; i++)
            slides.push(slides[i].previousElementSibling);
        slides.reverse();
        for (var i = slides.length - 1; i >= 0; i--) {
            slides[i].style.opacity = (!(slides.length - 1 == i) ? i / slides.length : 1).toString();
        }
    };
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
    swiper_esm_1.Swiper.use([swiper_esm_1.Lazy, swiper_esm_1.EffectFade, swiper_esm_1.Keyboard, swiper_esm_1.Navigation]);
    app_1.App.domReady(function () {
        app_1.App.each(".all-slider", function (el) {
            var prevEl = el.querySelector(".swiper-button-prev"), nextEl = el.querySelector(".swiper-button-next");
            new swiper_esm_1.Swiper(el.querySelector(".all-slider__slider"), {
                slidesPerView: 4,
                spaceBetween: 27,
                loop: true,
                lazy: {
                    loadPrevNext: true,
                },
                navigation: {
                    prevEl: prevEl,
                    nextEl: nextEl
                },
                keyboard: {
                    enabled: true,
                    onlyInViewport: true,
                },
                breakpoints: {
                    1400: {
                        slidesPerView: 3
                    },
                    1000: {
                        slidesPerView: 2
                    },
                    660: {
                        slidesPerView: 1
                    }
                }
            });
        });
    });
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
        var thumbs = new app_1.Element(".thumbs-slider__slide");
        var mainSlider = new swiper_esm_1.Swiper(".tovar-sliders__big", {
            effect: "fade",
            lazy: {
                loadPrevNext: true,
            },
            keyboard: {
                enabled: true,
                onlyInViewport: true,
            },
            on: {
                transitionStart: function () {
                    thumbs.removeClass("active");
                    thumbs.get(mainSlider.activeIndex).addClass("active");
                }
            }
        });
        new app_1.EventListener(thumbs).add("click", function (el, event, i) {
            mainSlider.slideTo(i);
        });
    });
    var initiallizeVariantsSlider = function (slider) {
        if (!slider)
            return;
        var thisSlider = new swiper_esm_1.Swiper(slider, {
            effect: "fade",
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
        plates.get(0).addClass("active");
        new app_1.EventListener(plates).add("click", function (el, event, i) {
            plates.removeClass("active");
            el.classList.add("active");
            slider.slideTo(i);
        });
    };
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ })

/******/ });
//# sourceMappingURL=common.js.map
=======
!function(e){function t(t){for(var n,o,s=t[0],l=t[1],d=t[2],u=0,p=[];u<s.length;u++)o=s[u],a[o]&&p.push(a[o][0]),a[o]=0;for(n in l)Object.prototype.hasOwnProperty.call(l,n)&&(e[n]=l[n]);for(c&&c(t);p.length;)p.shift()();return r.push.apply(r,d||[]),i()}function i(){for(var e,t=0;t<r.length;t++){for(var i=r[t],n=!0,s=1;s<i.length;s++){var l=i[s];0!==a[l]&&(n=!1)}n&&(r.splice(t--,1),e=o(o.s=i[0]))}return e}var n={},a={3:0},r=[];function o(t){if(n[t])return n[t].exports;var i=n[t]={i:t,l:!1,exports:{}};return e[t].call(i.exports,i,i.exports,o),i.l=!0,i.exports}o.m=e,o.c=n,o.d=function(e,t,i){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:i})},o.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var i=Object.create(null);if(o.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)o.d(i,n,function(t){return e[t]}.bind(null,n));return i},o.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="";var s=window.webpackJsonp=window.webpackJsonp||[],l=s.push.bind(s);s.push=t,s=s.slice();for(var d=0;d<s.length;d++)t(s[d]);var c=l;r.push([20,0,1]),i()}([,,,,,,,,,function(e,t,i){var n,a;n=[i,t,i(3),i(2)],void 0===(a=function(e,t,i,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),i.Swiper.use([i.Lazy,i.EffectFade,i.Navigation]),n.App.domReady(function(){var e,t,a;(a=document.querySelector(".main-reviews__slider .reviews-slider"))&&(a.querySelector(".swiper-button-prev")||(e=document.createElement("div"),t=document.createElement("div"),e.classList.add("swiper-button-prev"),t.classList.add("swiper-button-next"),a.append(e),a.append(t))),n.App.each(".main-reviews",function(n){var a=n.querySelector(".reviews-counter__arrows .swiper-button-prev")||n.querySelector(".swiper-button-prev"),r=n.querySelector(".reviews-counter__arrows .swiper-button-next")||n.querySelector(".swiper-button-next"),o=n.querySelector(".reviews-slider");new i.Swiper(o,{effect:"fade",navigation:{prevEl:a,nextEl:r},lazy:{loadPrevNext:!0,loadPrevNextAmount:3,loadOnTransitionStart:!0},breakpoints:{1000:{navigation:{prevEl:e||a,nextEl:t||r}}}})})})}.apply(t,n))||(e.exports=a)},,,,,,,,,,,function(e,t,i){var n,a;n=[i,t,i(2),i(21),i(22),i(24),i(25),i(26),i(27),i(28),i(29),i(30),i(31),i(32)],void 0===(a=function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),i.App.domReady(function(){new i.MobileMenu({burger:".head__burger",menu:".side-menu",menuActiveClass:"js__opened",bodyActiveClass:"js__menu__opened",ignoreWarnings:!1,fixBody:!0,media:"(max-width: 1200px)"});var e=new i.Element(".side-menu");new i.EventListener(".h-menu__item--have-sub > a").add("click",function(t,n){window.matchMedia("(max-width: 1200px)").matches&&(new i.Element(t).closest(".h-menu__item--have-sub").addClass("js__submenu-opened"),e.addClass("js__submenu-opened"),n.preventDefault())}),new i.EventListener(".h-submenu__close").add("click",function(t,n){window.matchMedia("(max-width: 1200px)").matches&&(new i.Element(t).closest(".h-menu__item--have-sub").removeClass("js__submenu-opened"),e.removeClass("js__submenu-opened"),n.preventDefault())}),new i.EventListener(".main-slide__title-btn").add("click",function(e,t){var i=document.querySelector(".main-about__cont");window.animateScroll(i.offsetTop-100),t.preventDefault()})}),i.App.domReady(function(){var e;(e=document.createElement("div")).innerText="вверх",e.classList.add("to-top-btn"),document.querySelector(".tovar-arrows")&&e.classList.add("js__tovar-btns-cutch"),new i.EventListener(e).add("click",function(e){window.animateScroll(0)}),document.body.appendChild(e),n(),window.addEventListener("resize",n),window.addEventListener("scroll",n)});var n=function(){var e=document.querySelector(".to-top-btn");e&&(window.scrollY>=600?e.classList.add("js__visible"):e.classList.remove("js__visible"))}}.apply(t,n))||(e.exports=a)},function(e,t,i){var n,a;n=[i,t,i(2),i(3),i(9)],void 0===(a=function(e,t,i,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),n.Swiper.use([n.Lazy,n.EffectFade,n.Keyboard,n.Navigation]),i.App.domReady(function(){i.App.each(".all-slider",function(e){var t=e.querySelector(".swiper-button-prev"),i=e.querySelector(".swiper-button-next");new n.Swiper(e.querySelector(".all-slider__slider"),{slidesPerView:4,spaceBetween:27,loop:!0,lazy:{loadPrevNext:!0},navigation:{prevEl:t,nextEl:i},keyboard:{enabled:!0,onlyInViewport:!0},breakpoints:{1400:{slidesPerView:3},1000:{slidesPerView:2},660:{slidesPerView:1}}})})}),i.App.domReady(function(){new i.EventListener(".tovar-tabs__tab").add("click",function(e,t){var n=e.getAttribute("href").replace("#",""),r=new i.Element("#"+n);new i.Element(".variants-list.active, .tovar-tabs__tab.active").removeClass("active"),new i.Element(e).addClass("active"),r.addClass("active"),a(document.querySelector(".variants-list.active .variants-slider:not(.swiper-container-initialized)")),t.preventDefault()}),a(document.querySelector(".variants-list.active .variants-slider:not(.swiper-container-initialized)"))}),i.App.domReady(function(){var e=new i.Element(".thumbs-slider__slide"),t=new n.Swiper(".tovar-sliders__big",{effect:"fade",lazy:{loadPrevNext:!0},keyboard:{enabled:!0,onlyInViewport:!0},on:{transitionStart:function(){e.removeClass("active"),e.get(t.activeIndex).addClass("active")}}});new i.EventListener(e).add("click",function(e,i,n){t.slideTo(n)})});var a=function(e){if(e){var t=new n.Swiper(e,{effect:"fade",lazy:{loadPrevNext:!0,loadPrevNextAmount:2}});r(t,e.closest(".variants-list"))}},r=function(e,t){var n=new i.Element(t).find(".variants-plates__one");n.length&&(n.get(0).addClass("active"),new i.EventListener(n).add("click",function(t,i,a){n.removeClass("active"),t.classList.add("active"),e.slideTo(a)}))}}.apply(t,n))||(e.exports=a)},function(e,t,i){var n,a;n=[i,t,i(3),i(2),i(7)],void 0===(a=function(e,t,i,n,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),i.Swiper.use([i.Keyboard,i.Navigation,i.Autoplay]),n.App.domReady(function(){new i.Swiper(".time-line",{slidesPerView:4,loop:!0,loopedSlides:4,speed:600,autoplay:{delay:4e3},navigation:{prevEl:".mission-desc__title-arrows .swiper-button-prev",nextEl:".mission-desc__title-arrows .swiper-button-next"},keyboard:{enabled:!0,onlyInViewport:!0},on:{transitionStart:r},breakpoints:{1000:{slidesPerView:2},660:{slidesPerView:1}}}),r(),function(){var e=document.querySelectorAll(".time-line .time-line__item");if(e.length){n.App.each(e,function(e){a.TweenLite.set(e,{opacity:window.matchMedia("(min-width: 1000px)").matches?0:1})});var t=document.querySelector(".time-line");if(t.classList.add("js__ready-for-animate"),window.matchMedia("(min-width: 1000px)").matches){var i=function(){t.classList.add("js__animating"),n.App.each(e,function(e,t){a.TweenLite.to(e,.3,{opacity:1,delay:t?t/3:t})})};window.isScrolledIntoView(t)&&i(),window.addEventListener("scroll",function(){window.isScrolledIntoView(t)&&i()}),window.addEventListener("resize",function(){window.isScrolledIntoView(t)&&i()})}else t.classList.add("js__animating")}}()});var r=function(){if(document.querySelector(".time-line")){var e=document.querySelector(".time-line .swiper-slide-next"),t=!1;n.App.each(".time-line .swiper-slide",function(e){t||(e.style.opacity="1",e.classList.contains("swiper-slide-next")&&(t=!0))});for(var i=[e],a=0;a<4;a++)i.push(i[a].previousElementSibling);for(i.reverse(),a=i.length-1;a>=0;a--)i[a].style.opacity=(i.length-1!=a?a/i.length:1).toString()}}}.apply(t,n))||(e.exports=a)},,function(e,t,i){var n,a;n=[i,t,i(2),i(3)],void 0===(a=function(e,t,i,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),n.Swiper.use([n.Lazy,n.Navigation]),i.App.domReady(function(){var e=document.createElement("div"),t=document.createElement("div"),n={right:document.createElement("div"),left:document.createElement("div")};n.right.classList.add("table-wrap__shadow"),n.right.classList.add("table-wrap__shadow--right"),n.left.classList.add("table-wrap__shadow"),n.left.classList.add("table-wrap__shadow--left"),e.classList.add("table-wrap"),t.classList.add("table-wrap__track"),i.App.wrap(".text-page > table",t),i.App.wrap(".table-wrap__track",e),i.App.each(".table-wrap",function(e){e.insertBefore(n.left,e.querySelector("*:first-child")),e.insertBefore(n.right,null)}),i.App.each(".table-wrap__track",function(e){if(e.scrollWidth>e.clientWidth){var t={right:e.closest(".table-wrap").querySelector(".table-wrap__shadow--right")};a(t.right,e.scrollWidth-e.clientWidth)}new i.EventListener(e).add("scroll",function(e){var t=e.closest(".table-wrap"),i={left:t.querySelector(".table-wrap__shadow--left"),right:t.querySelector(".table-wrap__shadow--right")};a(i.right,e.scrollWidth-e.clientWidth-e.scrollLeft),a(i.left,e.scrollLeft)})})}),i.App.domReady(function(){i.App.each(".standart-slider",function(e){var t=e.querySelector(".swiper-button-prev"),i=e.querySelector(".swiper-button-next"),a=e.querySelector(".swiper-pagination");new n.Swiper(e,{loop:!0,lazy:{loadPrevNext:!0,loadOnTransitionStart:!0,loadPrevNextAmount:3},navigation:{prevEl:t,nextEl:i},breakpoints:{660:{navigation:{},pagination:{el:a,type:"bullets",dynamicBullets:!0,dynamicMainBullets:3}}}})})});var a=function(e,t,i){void 0===i&&(i=80),e.style.opacity=(t/i<=1?t/i:1).toString()}}.apply(t,n))||(e.exports=a)},function(e,t,i){var n,a;n=[i,t,i(2),i(3),i(7)],void 0===(a=function(e,t,i,n,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),n.Swiper.use([n.Lazy,n.EffectFade]),i.App.domReady(function(){new i.EventListener(".address__top").add("click",function(e){var t=new i.Element(e).closest(".address");t.hasClass("active")?t.removeClass("active"):(new i.Element(".address.active").removeClass("active"),t.addClass("active"),r(e.closest(".address").querySelector(".active .address-slider:not(.swiper-container-initialized)")),window.animateScroll(t.els[0].offsetTop-15))}),r(document.querySelector(".address.active .active .address-slider:not(.swiper-container-initialized)"))}),i.App.domReady(function(){new i.EventListener(".address-detail__btn .gray-arrow-btn").add("click",function(e){var t=e.closest(".address-tabs__tab"),n=t.getAttribute("data-id"),a=new i.Element(t);a.hasClass("active")||(a.closest(".address__content").find(".active").removeClass("active"),a.addElement(a.closest(".address__content").find('.address-desc[data-id="'+n+'"]')).addClass("active"),r(document.querySelector(".address.active .active .address-slider:not(.swiper-container-initialized)")),window.matchMedia("(max-width: 1200px)").matches&&window.animateScroll(a.closest(".address__content").find('.address-desc[data-id="'+n+'"]').els[0].offsetTop-20))})});var r=function(e){if(e){var t=e.querySelector(".swiper-button-prev"),i=e.querySelector(".swiper-button-next");new n.Swiper(e,{effect:"fade",loop:!0,navigation:{prevEl:t,nextEl:i},cubeEffect:{slideShadows:!1},lazy:{loadPrevNext:!0,loadPrevNextAmount:1}})}};i.App.domReady(function(){window.matchMedia("(min-width: 1000px)").matches?i.App.each(".adr-counter__number",function(e){var t={count:0};e.style.width=getComputedStyle(e).width,a.TweenLite.to(e,2,{opacity:1}),a.TweenLite.to(t,10,{count:"+="+e.innerText,onUpdate:function(){e.innerText=Math.ceil(t.count).toString()}})}):a.TweenLite.set(".adr-counter__number",{opacity:1})})}.apply(t,n))||(e.exports=a)},function(e,t,i){var n,a;n=[i,t,i(2),i(3)],void 0===(a=function(e,t,i,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),n.Swiper.use([n.Lazy,n.Keyboard,n.Scrollbar,n.Navigation]),i.App.domReady(function(){new n.Swiper(".partners-slider",{slidesPerColumn:a(),slidesPerView:"auto",freeMode:!0,roundLengths:!0,navigation:{prevEl:".partners-text__text-arrows .swiper-button-prev",nextEl:".partners-text__text-arrows .swiper-button-next"},lazy:{loadPrevNext:!0,loadPrevNextAmount:1e3},keyboard:{enabled:!0,onlyInViewport:!0},scrollbar:{el:".swiper-scrollbar",draggable:!0},breakpoints:{5000:{slidesPerView:6},4000:{slidesPerView:10},3500:{slidesPerView:8},3100:{slidesPerView:6},2600:{slidesPerView:5},2300:{slidesPerView:4},2000:{slidesPerView:3},1700:{slidesPerView:2},1100:{slidesPerView:1},1000:{slidesPerView:3},660:{slidesPerView:2},400:{slidesPerView:1}}}),window.addEventListener("resize",function(){})});var a=function(){var e=window.innerHeight,t=window.innerWidth;return e>=1200?2:t<660?1:e>=650?2:1}}.apply(t,n))||(e.exports=a)},function(e,t,i){var n,a;n=[i,t,i(2),i(3)],void 0===(a=function(e,t,i,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),n.Swiper.use([n.Lazy,n.Keyboard,n.Navigation]),i.App.domReady(function(){new n.Swiper(".career-slider",{slidesPerView:3,loop:!0,spaceBetween:32,lazy:{loadPrevNext:!0,loadPrevNextAmount:3},keyboard:{enabled:!0,onlyInViewport:!0},navigation:{nextEl:".career-slider__arrows .swiper-button-next",prevEl:".career-slider__arrows .swiper-button-prev"},breakpoints:{1000:{slidesPerView:2,spaceBetween:20},660:{slidesPerView:1,spaceBetween:20}}})}),i.App.domReady(function(){var e=new i.Element(".vacancy__title");new i.EventListener(e).add("click",function(e){var t=new i.Element(e).closest(".vacancy");t.hasClass("js__opened")?t.removeClass("js__opened"):(new i.Element(".vacancy.js__opened").removeClass("js__opened"),t.addClass("js__opened"),window.moveCareerForm(t.find(".vacancy-form").get(0).els[0]),new i.EventListener(t.find(".vacancy-form").get(0).els[0].querySelector(".default-input__input--file")).add("change",function(e){var t=e.closest(".default-input--file").querySelector(".default-input__label--file");if(e.files.length){for(var i=[],n=0;n<e.files.length;n++)i.push(e.files[n].name);t.setAttribute("data-text",i.join(", "))}else t.setAttribute("data-text","Файл не выбран")}))}),new i.Element(".cities-list .city.active").closest(".cities-list__item").addClass("active"),new i.EventListener(".cities-list .city").add("click",function(e,t){var n=new i.Element(e),a=e.getAttribute("data-id");t.preventDefault(),n.hasClass("active")?window.matchMedia("(max-width: 660px)").matches&&n.closest(".c-vacancy__cities").toggleClass("js__opened"):(window.matchMedia("(max-width: 660px)").matches&&n.closest(".c-vacancy__cities").removeClass("js__opened"),new i.Element(".cities-list .city.active, .vacancy-list.active").addElement(".cities-list__item.active").removeClass("active"),n.addElement(".vacancy-list[data-id='"+a+"']").addElement(n.closest(".cities-list__item")).addClass("active"))})}),i.App.domReady(function(){var e=document.createElement("select"),t=document.querySelector(".c-vacancy__cities");t&&(e.classList.add("city-select"),i.App.each(".city",function(t){var i=document.createElement("option");i.setAttribute("value",t.getAttribute("data-id")),i.innerText=t.innerText,t.classList.contains("active")&&(e.value=t.getAttribute("data-id")),e.appendChild(i)}),new i.EventListener(e).add("change",function(e){var t=e.value;new i.Element(".cities-list .city.active, .vacancy-list.active").addElement(".cities-list__item.active").removeClass("active"),new i.Element(".vacancy-list[data-id='"+t+"'], .city[data-id='"+t+"']").addElement(new i.Element(".city[data-id='"+t+"']").closest(".cities-list__item")).addClass("active")}),t.appendChild(e))})}.apply(t,n))||(e.exports=a)},function(e,t,i){var n,a;n=[i,t,i(2)],void 0===(a=function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),i.App.domReady(function(){new i.EventListener(".default-input__input--file").add("change",function(e){var t=e.closest(".default-input--file").querySelector(".default-input__label--file");if(e.files.length){for(var i=[],n=0;n<e.files.length;n++)i.push(e.files[n].name);t.setAttribute("data-text",i.join(", "))}else t.setAttribute("data-text","Файл не выбран")})})}.apply(t,n))||(e.exports=a)},function(e,t,i){var n,a;n=[i,t,i(2)],void 0===(a=function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),i.App.domReady(function(){if(document.querySelector(".rev-list.load--more_list")){for(var e=0,t=i.App.transformNodeListToArray(document.querySelectorAll(".rev-more a"));e<t.length;e++){var a=t[e];n(a)}new MutationObserver(function(e){e.forEach(function(e){for(var t=0,a=i.App.transformNodeListToArray(e.addedNodes);t<a.length;t++){var r=a[t];n(r.querySelector(".rev-more a"))}})}).observe(document.querySelector(".rev-list.load--more_list"),{childList:!0})}});var n=function(e){new i.EventListener(e).add("click",function(e,t){var n=new i.Element(e).closest(".review");t.preventDefault(),n.hasClass("js__opened")?(n.removeClass("js__opened"),n.find(".rev-more a").text("Читать весь отзыв")):(new i.Element(".review.js__opened").removeClass("js__opened").find(".rev-more a").text("Читать весь отзыв"),n.addClass("js__opened"),n.find(".rev-more a").text("Свернуть отзыв")),e.blur()})}}.apply(t,n))||(e.exports=a)},function(e,t,i){var n,a;n=[i,t,i(2),i(3)],void 0===(a=function(e,t,i,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),n.Swiper.use([n.Pagination,n.Navigation,n.Keyboard,n.Mousewheel]),i.App.domReady(function(){new n.Swiper(".n-advantages .advantage-list",{mousewheel:!0,slidesPerGroup:3,slidesPerView:3,spaceBetween:70,direction:"vertical",loop:!0,pagination:{el:".swiper-pagination",type:"fraction",renderFraction:function(e,t){return'<span class="'+e+'"></span> - \n\t\t\t\t\t<span class="'+t+'"></span>'}},navigation:{prevEl:".swiper-button-prev",nextEl:".swiper-button-next"},keyboard:{enabled:!0,onlyInViewport:!0},breakpoints:{1700:{spaceBetween:50},1500:{spaceBetween:40},1200:{direction:"horizontal",slidesPerColumn:2,slidesPerGroup:1,loop:!1,spaceBetween:20},1000:{direction:"horizontal",slidesPerColumn:2,slidesPerGroup:1,loop:!1,slidesPerView:2,spaceBetween:20},660:{direction:"horizontal",slidesPerColumn:1,slidesPerGroup:1,loop:!1,slidesPerView:1,spaceBetween:20}}})})}.apply(t,n))||(e.exports=a)},function(e,t,i){var n,a;n=[i,t,i(2)],void 0===(a=function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),i.App.domReady(function(){var e={right:document.createElement("div"),left:document.createElement("div")};e.right.classList.add("title-menu__shadow"),e.right.classList.add("title-menu__shadow--right"),e.left.classList.add("title-menu__shadow"),e.left.classList.add("title-menu__shadow--left"),i.App.each(".title-block__menu",function(t){t.insertBefore(e.left,t.querySelector("*:first-child")),t.insertBefore(e.right,null)}),i.App.each(".title-menu",function(e){if(e.scrollWidth>e.clientWidth){var t={right:e.closest(".title-block__menu").querySelector(".title-menu__shadow--right")};n(t.right,e.scrollWidth-e.clientWidth)}new i.EventListener(e).add("scroll",function(e){var t=e.closest(".title-block__menu"),i={left:t.querySelector(".title-menu__shadow--left"),right:t.querySelector(".title-menu__shadow--right")};n(i.right,e.scrollWidth-e.clientWidth-e.scrollLeft),n(i.left,e.scrollLeft)})})});var n=function(e,t,i){void 0===i&&(i=80),e.style.opacity=(t/i<=1?t/i:1).toString()}}.apply(t,n))||(e.exports=a)},function(e,t,i){var n,a;n=[i,t,i(2),i(7)],void 0===(a=function(e,t,i,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),i.App.domReady(function(){var e=document.querySelectorAll(".front-circle, .middle-circle, .inner-circle");e.length&&(n.TweenLite.set(e,{transformOrigin:"center"}),a(e),i.App.each(".cw-item__img path",function(e){e.style.strokeDasharray=e.getTotalLength()+", "+e.getTotalLength(),e.style.strokeDashoffset=e.getTotalLength().toString()}))});var a=function(e){n.TweenLite.to(e,2,{scale:1.1,onComplete:function(){n.TweenLite.to(e,2,{scale:1,onComplete:function(){a(e)}})}})};i.App.domReady(function(){var e=document.querySelector("#russia-map");if(e){n.TweenLite.set(e,{transformOrigin:"center",scale:.1,opacity:0});var t=e.querySelectorAll("ellipse, circle");if(t.length){var a=function(){n.TweenLite.to(e,.7,{scale:1,opacity:1,onComplete:function(){i.App.each(t,function(e,t){n.TweenLite.to(e,.2,{opacity:1,delay:t?parseFloat("."+t):t})})}})};i.App.each(t,function(e){n.TweenLite.set(e,{opacity:0})}),window.isScrolledIntoView(e)&&a(),window.addEventListener("scroll",function(){window.isScrolledIntoView(e)&&a()}),window.addEventListener("resize",function(){window.isScrolledIntoView(e)&&a()})}}}),i.App.domReady(function(){var e=document.querySelector(".about__decors-left"),t=document.querySelector(".about__decors-right");if(e&&t){var i=document.querySelector(".about__img"),a=function(){i&&(window.scrollY>=parseInt(getComputedStyle(i).height)/1.9?(n.TweenLite.to(e,.2,{opacity:1}),n.TweenLite.to(t,.2,{opacity:1})):(n.TweenLite.to(e,.2,{opacity:0}),n.TweenLite.to(t,.2,{opacity:0})),n.TweenLite.to(e,1,{y:-window.scrollY/window.innerHeight*190+"px"}),n.TweenLite.to(t,1.5,{y:-window.scrollY/window.innerHeight*160+"px"}))};a(),window.addEventListener("resize",a),window.addEventListener("scroll",a)}}),i.App.domReady(function(){var e=document.querySelectorAll(".bottom-decor"),t=document.querySelectorAll(".top-decor, .left-decor"),i=document.querySelector(".about-img");e.length&&i&&i.addEventListener("mousemove",function(a){var r={x:0,y:0};r.x=-1*(a.pageX-i.clientWidth/2)/55,r.y=-1*(a.pageY-i.clientHeight/2)/55,n.TweenLite.to(e,2,{x:r.x}),n.TweenLite.to(t,2,{x:r.x,y:r.y})})})}.apply(t,n))||(e.exports=a)}]);
>>>>>>> 5f0de2e65a54db0a6935ed61d2afaef3c6ba7c57
