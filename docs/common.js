(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["common"],{

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

/***/ "./src/ts/app.ts":
/*!***********************!*\
  !*** ./src/ts/app.ts ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var App = (function () {
        function App() {
        }
        App.domReady = function (callback) {
            try {
                document.addEventListener("DOMContentLoaded", callback);
            }
            catch (e) {
                throw Error(e);
            }
        };
        App.getElements = function (selector) {
            var elements = document.querySelectorAll(selector);
            return elements.length ? elements : [];
        };
        App.getElement = function (selector) {
            var element = document.querySelector(selector);
            return element;
        };
        App.elementsGetter = function (selector) {
            return App.transformNodeListToArray(document.querySelectorAll(selector));
        };
        App.transformNodeListToArray = function (list) {
            try {
                return Array.prototype.slice.call(list);
            }
            catch (e) {
                throw Error(e);
                return [];
            }
        };
        App.wrap = function (selector, wrapper) {
            var localWrapper;
            if (typeof wrapper == "string")
                localWrapper = document.createElement(wrapper);
            else if (wrapper instanceof HTMLElement)
                localWrapper = wrapper;
            App.each(selector, function (el, i) {
                localWrapper.innerHTML = el.outerHTML;
                el.parentNode.replaceChild(localWrapper, el);
            });
        };
        App.each = function (elements, callback) {
            if (!callback) {
                console.error("Callback does not exists in yours 'each'");
                return;
            }
            if (typeof elements == "string")
                elements = App.transformNodeListToArray(App.getElements(elements));
            var i = 0;
            for (var _i = 0, elements_1 = elements; _i < elements_1.length; _i++) {
                var el = elements_1[_i];
                callback(el, i);
                i++;
            }
        };
        return App;
    }());
    exports.App = App;
    var Element = (function () {
        function Element(selector) {
            this._length = 0;
            if (!selector)
                this.els = [];
            else if (typeof selector == "string")
                this.els = App.elementsGetter(selector);
            else if (selector instanceof HTMLElement)
                this.els = [selector];
            else if (selector instanceof NodeList)
                this.els = App.transformNodeListToArray(selector);
            else if (selector instanceof Array && (selector[0] instanceof HTMLElement || !selector.length))
                this.els = selector;
            else if (selector instanceof Element)
                this.els = selector.els;
            else
                throw Error("Invalid selector: " + selector);
        }
        Object.defineProperty(Element.prototype, "els", {
            get: function () {
                return this._els;
            },
            set: function (elements) {
                this._els = elements;
                this._length = elements.length || 0;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Element.prototype, "length", {
            get: function () {
                return this._length;
            },
            enumerable: true,
            configurable: true
        });
        Element.prototype.addElement = function (element) {
            if (typeof element == "string")
                this.els = this.els.concat(App.elementsGetter(element));
            else if (element instanceof Element)
                this.els = this.els.concat(element.els);
            else if (element instanceof HTMLElement)
                this.els = this.els.concat(element);
            else if (element instanceof NodeList)
                this.els = this.els.concat(App.transformNodeListToArray(element));
            else if (element instanceof Array && (element[0] instanceof HTMLElement || !element.length))
                this.els = this.els.concat(element);
            else
                throw Error("Invalid selector: " + element);
            return this;
        };
        Element.prototype.is = function (selector) {
            var element;
            if (typeof selector == "string")
                element = App.elementsGetter(selector);
            else if (selector instanceof HTMLElement)
                element = [selector];
            return this.els[0] == element[0];
        };
        Element.prototype.has = function (selector) {
            var searchElements;
            if (typeof selector == "string")
                searchElements = App.elementsGetter(selector);
            else if (selector instanceof HTMLElement)
                searchElements = [selector];
            else if (selector instanceof Element)
                searchElements = selector._els;
            else if (selector instanceof NodeList)
                searchElements = App.transformNodeListToArray(selector);
            else if (selector instanceof Array && (selector[0] instanceof HTMLElement || !selector.length))
                searchElements = selector;
            else
                throw Error("Invalid selector: " + selector);
            var isFinded = false;
            for (var _i = 0, _a = this.els; _i < _a.length; _i++) {
                var el = _a[_i];
                for (var _b = 0, searchElements_1 = searchElements; _b < searchElements_1.length; _b++) {
                    var target = searchElements_1[_b];
                    if (el.contains(target)) {
                        isFinded = true;
                        break;
                    }
                }
                if (isFinded)
                    return true;
            }
            return false;
        };
        Element.prototype.addClass = function (className) {
            App.each(this.els, function (el) {
                el.classList.add(className);
            });
            return this;
        };
        Element.prototype.removeClass = function (className) {
            App.each(this.els, function (el) {
                el.classList.remove(className);
            });
            return this;
        };
        Element.prototype.toggleClass = function (className, callback) {
            if (callback === void 0) { callback = function () { }; }
            App.each(this.els, function (el) {
                if (el.classList.contains(className)) {
                    el.classList.remove(className);
                    callback(false);
                }
                else {
                    el.classList.add(className);
                    callback(true);
                }
            });
            return this;
        };
        Element.prototype.hasClass = function (targetClass) {
            for (var _i = 0, _a = this.els; _i < _a.length; _i++) {
                var el = _a[_i];
                if (el.classList.contains(targetClass))
                    return true;
            }
            return false;
        };
        Element.prototype.find = function (selector) {
            var searchingElements = new Array();
            App.each(this.els, function (el) {
                var findedElements = el.querySelectorAll(selector);
                if (!findedElements.length)
                    return;
                for (var _i = 0, _a = App.transformNodeListToArray(findedElements); _i < _a.length; _i++) {
                    var el_1 = _a[_i];
                    searchingElements.push(el_1);
                }
            });
            return new Element(searchingElements);
        };
        Element.prototype.closest = function (selector) {
            var searchingElements = new Element();
            App.each(this.els, function (el) {
                var findedElements = el.closest(selector);
                if (!findedElements)
                    return;
                searchingElements.addElement(findedElements);
            });
            return searchingElements;
        };
        return Element;
    }());
    exports.Element = Element;
    var EventListener = (function (_super) {
        __extends(EventListener, _super);
        function EventListener() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        EventListener.prototype.add = function (event, callback, options) {
            App.each(this.els, function (el, i) {
                el.addEventListener(event, function (event) {
                    callback(this, event, i);
                }, options);
            });
            return this;
        };
        EventListener.prototype.trigger = function (event) {
            App.each(this.els, function (el) {
                var evt = document.createEvent("HTMLEvents");
                evt.initEvent(event, false, true);
                el.dispatchEvent(evt);
            });
            return this;
        };
        return EventListener;
    }(Element));
    exports.EventListener = EventListener;
    var mobileMenu = (function () {
        function mobileMenu(settings) {
            this._state = false;
            this._error = false;
            this.menuActiveClass = "js__opened";
            this.bodyActiveClass = "js__menu-opened";
            this.body = App.getElement("body");
            this._settings = settings;
            this.burger = App.getElement(settings.burger);
            this.menu = App.getElement(settings.menu);
            this.bindEvents();
        }
        Object.defineProperty(mobileMenu.prototype, "error", {
            set: function (text) {
                this._error = true;
                console.error(text + ". \u041C\u0435\u043D\u044E \u043D\u0435 \u0440\u0430\u0431\u043E\u0442\u0430\u0435\u0442");
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(mobileMenu.prototype, "state", {
            get: function () {
                return this._state;
            },
            set: function (newState) {
                this._state = newState;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(mobileMenu.prototype, "menu", {
            get: function () {
                return this._menu;
            },
            set: function (el) {
                if (!(el instanceof HTMLElement))
                    this.error = "Меню не найдено";
                else
                    this._menu = el;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(mobileMenu.prototype, "burger", {
            get: function () {
                return this._burger;
            },
            set: function (el) {
                if (!(el instanceof HTMLElement))
                    this.error = "Бургер не найден";
                else
                    this._burger = el;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(mobileMenu.prototype, "settings", {
            get: function () {
                return this._settings;
            },
            enumerable: true,
            configurable: true
        });
        mobileMenu.prototype.openMenu = function () {
            if (!window.matchMedia(this.settings.media).matches)
                return;
            if (this.settings.fixBody) {
                this.body.style.top = -window.pageYOffset + "px";
                this.body.style.position = "fixed";
            }
            this.burger.classList.add("js__active");
            this.menu.classList.add(this.menuActiveClass);
            this.body.classList.add(this.bodyActiveClass);
            this.state = true;
            return this;
        };
        mobileMenu.prototype.closeMenu = function () {
            if (!window.matchMedia(this.settings.media).matches || !this.state)
                return;
            var top = 0;
            if (this.settings.fixBody) {
                top = Math.abs(parseInt(this.body.style.top));
                this.body.style.top = "";
                this.body.style.position = "";
            }
            this.burger.classList.remove("js__active");
            this.menu.classList.remove(this.menuActiveClass);
            this.body.classList.remove(this.bodyActiveClass);
            if (this.settings.fixBody)
                window.scrollTo(0, top);
            this.state = false;
            return this;
        };
        mobileMenu.prototype.toggleMenu = function () {
            if (!window.matchMedia(this.settings.media).matches)
                return;
            if (this.state)
                this.closeMenu();
            else
                this.openMenu();
            return this;
        };
        mobileMenu.prototype.bindEvents = function () {
            var _this = this;
            document.addEventListener("click", function (event) {
                var target = new Element(event.target);
                if (!target.is(_this.burger)
                    && !new Element(_this.burger).has(target)
                    && !target.is(_this.menu)
                    && !new Element(_this.menu).has(target))
                    _this.closeMenu();
            });
            new EventListener(this.burger).add("click", function (el) {
                _this.toggleMenu();
            });
        };
        return mobileMenu;
    }());
    exports.MobileMenu = mobileMenu;
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
            var parentEl = new app_1.Element(el).closest(".h-menu__item--have-sub").addClass("js__submenu-opened");
            sideMenu.addClass("js__submenu-opened");
            event.preventDefault();
        });
        new app_1.EventListener(".h-submenu__close").add("click", function (el, event) {
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

},[["./src/ts/common.ts","runtime","vendors"]]]);
//# sourceMappingURL=common.js.map