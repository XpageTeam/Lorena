(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main-page"],{

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
            var mainSlider = new swiper_esm_js_1.Swiper(".main-slider", {
                loop: true,
                effect: "fade",
                speed: 600,
                lazy: {
                    loadPrevNext: true,
                },
                on: {
                    lazyImageReady: function (slideEl, imageEl) {
                        slideEl.classList.add("js__lazy-ready");
                    }
                }
            });
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
            var _loop_1 = function () {
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
                    var waves = dot.querySelectorAll(".waves circle");
                    gsap_1.TweenLite.to(circle, .5, {
                        autoAlpha: 0,
                        scale: 0
                    });
                    gsap_1.TweenLite.to(activeCircle, .5, {
                        scale: 1,
                        autoAlpha: 1,
                        onComplete: function () {
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
            for (var _i = 0, baseCircles_1 = baseCircles; _i < baseCircles_1.length; _i++) {
                var circle = baseCircles_1[_i];
                _loop_1();
            }
        })();
    });
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ })

},[["./src/ts/main-page.ts","runtime","vendors"]]]);
//# sourceMappingURL=main-page.js.map