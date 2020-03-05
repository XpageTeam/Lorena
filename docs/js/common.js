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

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(/*! ./app */ "./src/ts/app.ts"), __webpack_require__(/*! gsap */ "./node_modules/gsap/index.js"), __webpack_require__(/*! gsap */ "./node_modules/gsap/index.js")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, app_1, gsap_1, gsap_2) {
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
    var msgDirection;
    (function (msgDirection) {
        msgDirection[msgDirection["toMe"] = 0] = "toMe";
        msgDirection[msgDirection["fromMe"] = 1] = "fromMe";
    })(msgDirection || (msgDirection = {}));
    ;
    app_1.App.domReady(function () {
        var msgPosition = {
            top: window.get$(".a-messages").offset().top + window.get$(".message").height() / 2,
            left: window.get$(".a-messages").offset().left + window.get$(".message").width() / 2
        }, fakeCursor = document.querySelector(".about-img__messages-cursor"), chatMessages = [];
        chatMessages.push({
            direction: msgDirection.toMe,
            text: "Вау! Крутая кухня! Где купила?",
        });
        chatMessages.push({
            direction: msgDirection.fromMe,
            text: "Делала на заказ в Lorena кухни!",
        });
        chatMessages.push({
            direction: msgDirection.toMe,
            text: "А покажи поближе?",
        });
        chatMessages.push({
            direction: msgDirection.fromMe,
            src: "/local/templates/lorena/video/review/video-review.mp4",
            poster: "/local/templates/lorena/video/review/poster.jpg"
        });
        chatMessages.push({
            direction: msgDirection.fromMe,
            text: "Кликни, посмотри 😉",
        });
        chatMessages.push({
            direction: msgDirection.toMe,
            text: "Хочу кухню как у тебя! 🙏",
        });
        if (!fakeCursor)
            return;
        gsap_1.TweenLite.to(fakeCursor, 3, {
            top: msgPosition.top,
            left: msgPosition.left,
            ease: gsap_2.Power4.easeInOut,
            delay: 1.5,
            onStart: function () {
                document.body.classList.add("js__hide-cursor");
            },
            onComplete: function () {
                gsap_1.TweenLite.to(fakeCursor, .1, {
                    scale: .6,
                    onComplete: function () {
                        gsap_1.TweenLite.to(fakeCursor, .1, {
                            scale: 1,
                            onComplete: function () {
                                document.body.classList.remove("js__hide-cursor");
                                document.body.classList.add("js__show-chat");
                                startChat(chatMessages);
                            }
                        });
                    }
                });
            }
        });
    });
    function startChat(messagesArray) {
        var chatInterval, msgCounter = 0, chatMesage;
        showMessage(messagesArray[msgCounter].direction, messagesArray[msgCounter].text);
        msgCounter++;
        chatMesage = function () {
            if (messagesArray.length - 2 == msgCounter) {
                clearInterval(chatInterval);
                showChatDots(messagesArray[msgCounter].direction);
                chatInterval = setTimeout(function () {
                    hideDots();
                    showMessage(messagesArray[msgCounter].direction, messagesArray[msgCounter].text);
                    msgCounter++;
                }, 1500);
                var isMessageShowed_1 = false, nextMessageTimeout_1;
                document.querySelector(".chat-msg__video")
                    .addEventListener("click", function (e) {
                    var self = this;
                    e.preventDefault();
                    window.$.fancybox.open({
                        src: self.getAttribute("href"),
                        afterClose: function () {
                            self.classList.add("js__watched");
                            clearTimeout(nextMessageTimeout_1);
                            if (!isMessageShowed_1) {
                                showChatDots(messagesArray[msgCounter].direction);
                                setTimeout(function () {
                                    hideDots();
                                    showMessage(messagesArray[msgCounter].direction, messagesArray[msgCounter].text);
                                }, 2000);
                            }
                        }
                    });
                });
                nextMessageTimeout_1 = setTimeout(function () {
                    isMessageShowed_1 = true;
                    showChatDots(messagesArray[msgCounter].direction);
                    setTimeout(function () {
                        hideDots();
                        showMessage(messagesArray[msgCounter].direction, messagesArray[msgCounter].text);
                    }, 2000);
                }, 3000);
            }
            else {
                showChatDots(messagesArray[msgCounter].direction);
                chatInterval = setTimeout(function () {
                    hideDots();
                    if (messagesArray[msgCounter].text)
                        showMessage(messagesArray[msgCounter].direction, messagesArray[msgCounter].text);
                    else {
                        showVideo(messagesArray[msgCounter]);
                    }
                    msgCounter++;
                    chatMesage();
                }, 2000);
            }
        };
        chatMesage();
    }
    function showVideo(video) {
        var msgContainer = getMsgContainer(video.direction);
        msgContainer.innerHTML = "<div class=\"chat-msg\">\n\t\t\t\t\t\t\t\t<a href=\"" + video.src + "\" class=\"chat-msg__video\">\n\t\t\t\t\t\t\t\t\t<img class=\"chat-msg__video-img\" src=\"" + video.poster + "\" />\n\t\t\t\t\t\t\t\t\t<div class=\"chat-msg__video-btn\">\n\t\t\t\t\t\t\t\t\t\t<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"115\" height=\"115\" viewBox=\"0 0 115 115\" fill=\"none\">\n\t\t\t\t\t\t\t\t\t\t\t<circle cx=\"57.6103\" cy=\"57.6101\" r=\"55.5\" transform=\"rotate(-90 57.6103 57.6101)\" stroke=\"#272727\" stroke-width=\"3\"/>\n\t\t\t\t\t\t\t\t\t\t\t<path d=\"M113.5 58C113.5 88.6395 88.4403 113.5 57.5 113.5C26.5597 113.5 1.5 88.6395 1.5 58C1.5 27.3605 26.5597 2.5 57.5 2.5C88.4403 2.5 113.5 27.3605 113.5 58Z\" stroke=\"#FF6600\" stroke-width=\"3\"/>\n\t\t\t\t\t\t\t\t\t\t</svg>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t</div>";
        instertMessage(msgContainer);
        var line = document.querySelector(".chat-msg__video-btn path");
    }
    function showChatDots(direction) {
        var dostMessage = getMsgContainer(direction);
        dostMessage.innerHTML = '<div class="chat-msg">'
            + '<div class="chat-msg__dots">'
            + '<div class="msg-dot"></div>'
            + '<div class="msg-dot"></div>'
            + '<div class="msg-dot"></div>'
            + '</div>'
            + '</div>';
        instertMessage(dostMessage);
    }
    function hideDots() {
        var chatContainer = document.querySelector(".about-chat__list");
        if (!chatContainer)
            return;
        var dotsContainer = window.get$(".chat-msg__dots");
        if (!dotsContainer)
            return;
        dotsContainer.closest(".about-chat__list-item").remove();
    }
    function showMessage(direction, text) {
        var msgContainer = getMsgContainer(direction);
        msgContainer.innerHTML = "<div class=\"chat-msg\">\n\t\t\t\t\t\t\t\t<div class=\"chat-msg__text\">" + text + "</div>\n\t\t\t\t\t\t\t</div>";
        instertMessage(msgContainer);
    }
    function instertMessage(messageEl) {
        var chatContainer = document.querySelector(".about-chat__list");
        if (!chatContainer)
            return;
        chatContainer.appendChild(messageEl);
        window.$(chatContainer).animate({
            scrollTop: 10000
        }, 1000);
    }
    function getMsgContainer(direction) {
        var dostMessage = document.createElement("div");
        dostMessage.classList.add("about-chat__list-item");
        dostMessage.classList.add("about-chat__list-item--" +
            (direction == msgDirection.fromMe
                ? "from"
                : "to"));
        return dostMessage;
    }
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

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(/*! ./app */ "./src/ts/app.ts"), __webpack_require__(/*! swiper/dist/js/swiper.esm.js */ "./node_modules/swiper/dist/js/swiper.esm.js"), __webpack_require__(/*! ./tovar */ "./src/ts/tovar.ts"), __webpack_require__(/*! ./timeline */ "./src/ts/timeline.ts"), __webpack_require__(/*! ./standart-page */ "./src/ts/standart-page.ts"), __webpack_require__(/*! ./addresses */ "./src/ts/addresses.ts"), __webpack_require__(/*! ./partners */ "./src/ts/partners.ts"), __webpack_require__(/*! ./career */ "./src/ts/career.ts"), __webpack_require__(/*! ./forms */ "./src/ts/forms.ts"), __webpack_require__(/*! ./reviews */ "./src/ts/reviews.ts"), __webpack_require__(/*! ./advantages */ "./src/ts/advantages.ts"), __webpack_require__(/*! ./nav-scrolling */ "./src/ts/nav-scrolling.ts"), __webpack_require__(/*! ./about */ "./src/ts/about.ts"), __webpack_require__(/*! ./eco-maniya */ "./src/ts/eco-maniya.ts")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, app_1, swiper_esm_js_1) {
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
        if (document.querySelectorAll('.main-stock__slider').length) {
            var stockSwiper = new swiper_esm_js_1.Swiper('.main-stock__slider', {
                spaceBetween: 26,
                loop: true,
                navigation: {
                    nextEl: '.main-stock .swiper-button-next',
                    prevEl: '.main-stock .swiper-button-prev',
                },
            });
        }
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

/***/ "./src/ts/eco-maniya.ts":
/*!******************************!*\
  !*** ./src/ts/eco-maniya.ts ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(/*! ./app */ "./src/ts/app.ts"), __webpack_require__(/*! swiper/dist/js/swiper.esm.js */ "./node_modules/swiper/dist/js/swiper.esm.js"), __webpack_require__(/*! ./loader */ "./src/ts/loader.ts")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, app_1, swiper_esm_js_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    swiper_esm_js_1.Swiper.use([swiper_esm_js_1.Navigation, swiper_esm_js_1.Autoplay, swiper_esm_js_1.Keyboard]);
    app_1.App.domReady(function () {
        var ecoSlider = document.querySelector(".es-slider");
        if (!ecoSlider)
            return;
        new swiper_esm_js_1.Swiper(ecoSlider, {
            slidesPerView: 4,
            spaceBetween: 45,
            loop: true,
            keyboard: {
                enabled: true,
                onlyInViewport: true
            },
            navigation: {
                prevEl: ecoSlider.querySelector(".swiper-button-prev"),
                nextEl: ecoSlider.querySelector(".swiper-button-next")
            },
            breakpoints: {
                1000: {
                    slidesPerView: 3,
                    spaceBetween: 20
                },
                660: {
                    slidesPerView: 1,
                    spaceBetween: 20
                }
            }
        });
    });
    window.addEventListener("load", function () {
        this.document.body.classList.add("eco-loaded");
    });
    app_1.App.domReady(function () {
        var toSliders = app_1.App.transformNodeListToArray(document.querySelectorAll(".to-slider")), sliderArray = [], starter = document.querySelector(".tos-starter"), sliderBtns = app_1.App.transformNodeListToArray(document.querySelectorAll(".answer-btn"));
        if (!toSliders.length)
            return;
        for (var _i = 0, toSliders_1 = toSliders; _i < toSliders_1.length; _i++) {
            var slider = toSliders_1[_i];
            sliderArray.push(new swiper_esm_js_1.Swiper(slider, {
                slidesPerView: 1,
                direction: "vertical",
                noSwiping: true,
                allowTouchMove: false,
                simulateTouch: false,
                speed: 1000,
            }));
        }
        if (!starter)
            return;
        var selectedAnswers = 0, yesAnswers = 0, canTurnStarter = false;
        var toLevelBtn = document.querySelector(".turn-on__button .default-btn"), curCounter = document.querySelector(".to-counter__current");
        var stupidCounter = 0;
        starter.addEventListener("click", function () {
            return __awaiter(this, void 0, void 0, function () {
                var _this = this;
                return __generator(this, function (_a) {
                    if (selectedAnswers == 9) {
                        this.querySelector(".tos-starter__img").classList.add("js__active");
                        starter.classList.remove("js__highlight");
                        setTimeout(function () {
                            _this.querySelector(".tos-starter__img").classList.remove("js__active");
                            toLevelBtn.click();
                        }, 300);
                        return [2];
                    }
                    if (!canTurnStarter) {
                        stupidCounter++;
                        if (stupidCounter >= 3) {
                            window.get$(".turn-on__notice").stop().fadeIn(300);
                            setTimeout(function () {
                                window.get$(".turn-on__notice").fadeOut(300);
                            }, 1500);
                        }
                        window.get$(".to-sliders").removeClass("js__highlighting");
                        setTimeout(function () {
                            window.get$(".to-sliders").addClass("js__highlighting");
                        }, 100);
                        return [2];
                    }
                    canTurnStarter = false;
                    window.get$(".turn-on__notice").fadeOut(300);
                    return [2];
                });
            });
        });
        var _loop_1 = function (btn) {
            btn.addEventListener("click", function () {
                var targetSlider = this.closest(".to-sliders__item").querySelector(".to-slider").swiper;
                var anotherBtn;
                if (this.classList.contains("answer-btn--yes")) {
                    yesAnswers++;
                    anotherBtn = btn.closest(".to-answers").querySelector(".answer-btn--no");
                }
                else {
                    anotherBtn = btn.closest(".to-answers").querySelector(".answer-btn--yes");
                    if (anotherBtn.classList.contains("selected"))
                        yesAnswers--;
                }
                if (!anotherBtn.classList.contains("selected") && !targetSlider.el.classList.contains("js__ended")) {
                    selectedAnswers++;
                    if (targetSlider.isEnd) {
                        targetSlider.el.classList.add("js__ended");
                        if (selectedAnswers == 9) {
                            starter.classList.add("js__highlight");
                        }
                    }
                }
                else {
                    anotherBtn.classList.remove("selected");
                }
                curCounter.innerText = selectedAnswers.toString();
                if (targetSlider.isEnd) {
                    targetSlider.el.classList.add("js__ended");
                }
                targetSlider.slideNext();
            });
        };
        for (var _a = 0, sliderBtns_1 = sliderBtns; _a < sliderBtns_1.length; _a++) {
            var btn = sliderBtns_1[_a];
            _loop_1(btn);
        }
        toLevelBtn.addEventListener("click", function () {
            window.get$(".eco-maniya__level").fadeIn(100);
            window.get$("html, body").animate({
                scrollTop: window.get$(".eco-maniya__level").offset().top
                    - window.get$("header").height()
            }, 300);
            var levelBlocks = app_1.App.transformNodeListToArray(document.querySelectorAll(".eco-level"));
            for (var _i = 0, levelBlocks_1 = levelBlocks; _i < levelBlocks_1.length; _i++) {
                var level = levelBlocks_1[_i];
                console.log(parseInt(level.getAttribute("data-min")), yesAnswers, parseInt(level.getAttribute("data-max")), yesAnswers);
                if (parseInt(level.getAttribute("data-min")) <= yesAnswers && parseInt(level.getAttribute("data-max")) >= yesAnswers) {
                    window.get$(level).show();
                    break;
                }
            }
        });
    });
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

/***/ "./src/ts/functions/randomInt.ts":
/*!***************************************!*\
  !*** ./src/ts/functions/randomInt.ts ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    function randomInt(min, max) {
        var rand = min - 0.5 + Math.random() * (max - min + 1);
        rand = Math.round(rand);
        return rand;
    }
    exports.default = randomInt;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),

/***/ "./src/ts/loader.ts":
/*!**************************!*\
  !*** ./src/ts/loader.ts ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(/*! ./functions/randomInt */ "./src/ts/functions/randomInt.ts"), __webpack_require__(/*! ./app */ "./src/ts/app.ts"), __webpack_require__(/*! gsap */ "./node_modules/gsap/index.js")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, randomInt_1, app_1, gsap_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    window.addEventListener("load", function () {
        var loadStepsCount = randomInt_1.default(4, 10), progressBg = app_1.App.getElement(".el-loader__loader-progress");
        if (!progressBg)
            return;
        var progressCounter = progressBg.getAttribute("data-counter");
        var loadPercentsForSteps = new Array(loadStepsCount), timeForSteps = new Array(loadStepsCount);
        loadPercentsForSteps[loadPercentsForSteps.length - 1] = 100;
        timeForSteps[timeForSteps.length - 1] = .2;
        for (var i = 0; i < loadPercentsForSteps.length - 1; i++) {
            loadPercentsForSteps[i] = (i > 0
                ? randomInt_1.default(loadPercentsForSteps[i - 1] + 1, parseInt((100 / loadStepsCount * i).toString()))
                : randomInt_1.default(parseInt(progressCounter), parseInt((100 / loadStepsCount).toString())));
            timeForSteps[i] = 7.5 / (loadStepsCount - 1);
        }
        var curStep = 0;
        var loadingAnimate = function (step, time) {
            curStep++;
            gsap_1.TweenLite.to(progressBg, time, {
                scaleX: step / 100,
                onComplete: function () {
                    if (curStep < loadStepsCount)
                        loadingAnimate(loadPercentsForSteps[curStep], timeForSteps[curStep]);
                    else {
                        document.body.classList.remove("loading");
                        document.body.classList.add("loaded");
                    }
                }
            });
        };
        loadingAnimate(loadPercentsForSteps[0], timeForSteps[0]);
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
    var moreRevLinkSelector = ".rev-more a";
    app_1.App.domReady(function () {
        if (!document.querySelector(".rev-list.load--more_list"))
            return;
        var moreRevLinks = app_1.App.transformNodeListToArray(document.querySelectorAll(moreRevLinkSelector));
        for (var _i = 0, moreRevLinks_1 = moreRevLinks; _i < moreRevLinks_1.length; _i++) {
            var moreLink = moreRevLinks_1[_i];
            makeEvent(moreLink);
        }
        var observer = new MutationObserver(function (mutations) {
            mutations.forEach(function (mutation) {
                var addedNodes = app_1.App.transformNodeListToArray(mutation.addedNodes);
                for (var _i = 0, addedNodes_1 = addedNodes; _i < addedNodes_1.length; _i++) {
                    var node = addedNodes_1[_i];
                    makeEvent(node.querySelector(moreRevLinkSelector));
                }
            });
        });
        var config = { childList: true };
        observer.observe(document.querySelector(".rev-list.load--more_list"), config);
    });
    var makeEvent = function (selector) {
        new app_1.EventListener(selector).add("click", function (el, e) {
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