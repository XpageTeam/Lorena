!function(e){function t(t){for(var i,a,s=t[0],l=t[1],c=t[2],u=0,p=[];u<s.length;u++)a=s[u],o[a]&&p.push(o[a][0]),o[a]=0;for(i in l)Object.prototype.hasOwnProperty.call(l,i)&&(e[i]=l[i]);for(d&&d(t);p.length;)p.shift()();return r.push.apply(r,c||[]),n()}function n(){for(var e,t=0;t<r.length;t++){for(var n=r[t],i=!0,s=1;s<n.length;s++){var l=n[s];0!==o[l]&&(i=!1)}i&&(r.splice(t--,1),e=a(a.s=n[0]))}return e}var i={},o={3:0},r=[];function a(t){if(i[t])return i[t].exports;var n=i[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,a),n.l=!0,n.exports}a.m=e,a.c=i,a.d=function(e,t,n){a.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},a.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,t){if(1&t&&(e=a(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(a.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)a.d(n,i,function(t){return e[t]}.bind(null,i));return n},a.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return a.d(t,"a",t),t},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},a.p="";var s=window.webpackJsonp=window.webpackJsonp||[],l=s.push.bind(s);s.push=t,s=s.slice();for(var c=0;c<s.length;c++)t(s[c]);var d=l;r.push([21,0,1]),n()}([,,,,,,,,,function(e,t,n){var i,o;i=[n,t,n(3),n(2)],void 0===(o=function(e,t,n,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),n.Swiper.use([n.Lazy,n.EffectFade,n.Navigation]),i.App.domReady(function(){var e,t,o;(o=document.querySelector(".main-reviews__slider .reviews-slider"))&&(o.querySelector(".swiper-button-prev")||(e=document.createElement("div"),t=document.createElement("div"),e.classList.add("swiper-button-prev"),t.classList.add("swiper-button-next"),o.append(e),o.append(t))),i.App.each(".main-reviews",function(i){var o=i.querySelector(".reviews-counter__arrows .swiper-button-prev")||i.querySelector(".swiper-button-prev"),r=i.querySelector(".reviews-counter__arrows .swiper-button-next")||i.querySelector(".swiper-button-next"),a=i.querySelector(".reviews-slider");new n.Swiper(a,{effect:"fade",navigation:{prevEl:o,nextEl:r},lazy:{loadPrevNext:!0,loadPrevNextAmount:3,loadOnTransitionStart:!0},breakpoints:{1000:{navigation:{prevEl:e||o,nextEl:t||r}}}})})})}.apply(t,i))||(e.exports=o)},,,,,,,,,,,,function(e,t,n){var i,o;i=[n,t,n(2),n(3),n(22),n(23),n(25),n(26),n(27),n(28),n(29),n(30),n(31),n(32),n(33),n(34)],void 0===(o=function(e,t,n,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),n.App.domReady(function(){new n.MobileMenu({burger:".head__burger",menu:".side-menu",menuActiveClass:"js__opened",bodyActiveClass:"js__menu__opened",ignoreWarnings:!1,fixBody:!0,media:"(max-width: 1200px)"});var e=new n.Element(".side-menu");new n.EventListener(".h-menu__item--have-sub > a").add("click",function(t,i){window.matchMedia("(max-width: 1200px)").matches&&(new n.Element(t).closest(".h-menu__item--have-sub").addClass("js__submenu-opened"),e.addClass("js__submenu-opened"),i.preventDefault())}),new n.EventListener(".h-submenu__close").add("click",function(t,i){window.matchMedia("(max-width: 1200px)").matches&&(new n.Element(t).closest(".h-menu__item--have-sub").removeClass("js__submenu-opened"),e.removeClass("js__submenu-opened"),i.preventDefault())}),new n.EventListener(".main-slide__title-btn").add("click",function(e,t){var n=document.querySelector(".main-about__cont");window.animateScroll(n.offsetTop-100),t.preventDefault()}),document.querySelectorAll(".main-stock__slider").length&&new i.Swiper(".main-stock__slider",{spaceBetween:26,loop:!0,navigation:{nextEl:".main-stock .swiper-button-next",prevEl:".main-stock .swiper-button-prev"}})}),n.App.domReady(function(){var e;(e=document.createElement("div")).innerText="вверх",e.classList.add("to-top-btn"),document.querySelector(".tovar-arrows")&&e.classList.add("js__tovar-btns-cutch"),new n.EventListener(e).add("click",function(e){window.animateScroll(0)}),document.body.appendChild(e),o(),window.addEventListener("resize",o),window.addEventListener("scroll",o)});var o=function(){var e=document.querySelector(".to-top-btn");e&&(window.scrollY>=600?e.classList.add("js__visible"):e.classList.remove("js__visible"))}}.apply(t,i))||(e.exports=o)},function(e,t,n){var i,o;i=[n,t,n(2),n(3),n(9)],void 0===(o=function(e,t,n,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),i.Swiper.use([i.Lazy,i.EffectFade,i.Keyboard,i.Navigation]),n.App.domReady(function(){n.App.each(".all-slider",function(e){var t=e.querySelector(".swiper-button-prev"),n=e.querySelector(".swiper-button-next");new i.Swiper(e.querySelector(".all-slider__slider"),{slidesPerView:4,spaceBetween:27,loop:!0,lazy:{loadPrevNext:!0},navigation:{prevEl:t,nextEl:n},keyboard:{enabled:!0,onlyInViewport:!0},breakpoints:{1400:{slidesPerView:3},1000:{slidesPerView:2},660:{slidesPerView:1}}})})}),n.App.domReady(function(){new n.EventListener(".tovar-tabs__tab").add("click",function(e,t){var i=e.getAttribute("href").replace("#",""),r=new n.Element("#"+i);new n.Element(".variants-list.active, .tovar-tabs__tab.active").removeClass("active"),new n.Element(e).addClass("active"),r.addClass("active"),o(document.querySelector(".variants-list.active .variants-slider:not(.swiper-container-initialized)")),t.preventDefault()}),o(document.querySelector(".variants-list.active .variants-slider:not(.swiper-container-initialized)"))}),n.App.domReady(function(){var e=new n.Element(".thumbs-slider__slide"),t=new i.Swiper(".tovar-sliders__big",{effect:"fade",lazy:{loadPrevNext:!0},keyboard:{enabled:!0,onlyInViewport:!0},on:{transitionStart:function(){e.removeClass("active"),e.get(t.activeIndex).addClass("active")}}});new n.EventListener(e).add("click",function(e,n,i){t.slideTo(i)})});var o=function(e){if(e){var t=new i.Swiper(e,{effect:"fade",lazy:{loadPrevNext:!0,loadPrevNextAmount:2}});r(t,e.closest(".variants-list"))}},r=function(e,t){var i=new n.Element(t).find(".variants-plates__one");i.length&&(i.get(0).addClass("active"),new n.EventListener(i).add("click",function(t,n,o){i.removeClass("active"),t.classList.add("active"),e.slideTo(o)}))}}.apply(t,i))||(e.exports=o)},function(e,t,n){var i,o;i=[n,t,n(3),n(2),n(4)],void 0===(o=function(e,t,n,i,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),n.Swiper.use([n.Keyboard,n.Navigation,n.Autoplay]),i.App.domReady(function(){new n.Swiper(".time-line",{slidesPerView:4,loop:!0,loopedSlides:4,speed:600,autoplay:{delay:4e3},navigation:{prevEl:".mission-desc__title-arrows .swiper-button-prev",nextEl:".mission-desc__title-arrows .swiper-button-next"},keyboard:{enabled:!0,onlyInViewport:!0},on:{transitionStart:r},breakpoints:{1000:{slidesPerView:2},660:{slidesPerView:1}}}),r(),function(){var e=document.querySelectorAll(".time-line .time-line__item");if(e.length){i.App.each(e,function(e){o.TweenLite.set(e,{opacity:window.matchMedia("(min-width: 1000px)").matches?0:1})});var t=document.querySelector(".time-line");if(t.classList.add("js__ready-for-animate"),window.matchMedia("(min-width: 1000px)").matches){var n=function(){t.classList.add("js__animating"),i.App.each(e,function(e,t){o.TweenLite.to(e,.3,{opacity:1,delay:t?t/3:t})})};window.isScrolledIntoView(t)&&n(),window.addEventListener("scroll",function(){window.isScrolledIntoView(t)&&n()}),window.addEventListener("resize",function(){window.isScrolledIntoView(t)&&n()})}else t.classList.add("js__animating")}}()});var r=function(){if(document.querySelector(".time-line")){var e=document.querySelector(".time-line .swiper-slide-next"),t=!1;i.App.each(".time-line .swiper-slide",function(e){t||(e.style.opacity="1",e.classList.contains("swiper-slide-next")&&(t=!0))});for(var n=[e],o=0;o<4;o++)n.push(n[o].previousElementSibling);for(n.reverse(),o=n.length-1;o>=0;o--)n[o].style.opacity=(n.length-1!=o?o/n.length:1).toString()}}}.apply(t,i))||(e.exports=o)},,function(e,t,n){var i,o;i=[n,t,n(2),n(3)],void 0===(o=function(e,t,n,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),i.Swiper.use([i.Lazy,i.Navigation]),n.App.domReady(function(){var e=document.createElement("div"),t=document.createElement("div"),i={right:document.createElement("div"),left:document.createElement("div")};i.right.classList.add("table-wrap__shadow"),i.right.classList.add("table-wrap__shadow--right"),i.left.classList.add("table-wrap__shadow"),i.left.classList.add("table-wrap__shadow--left"),e.classList.add("table-wrap"),t.classList.add("table-wrap__track"),n.App.wrap(".text-page > table",t),n.App.wrap(".table-wrap__track",e),n.App.each(".table-wrap",function(e){e.insertBefore(i.left,e.querySelector("*:first-child")),e.insertBefore(i.right,null)}),n.App.each(".table-wrap__track",function(e){if(e.scrollWidth>e.clientWidth){var t={right:e.closest(".table-wrap").querySelector(".table-wrap__shadow--right")};o(t.right,e.scrollWidth-e.clientWidth)}new n.EventListener(e).add("scroll",function(e){var t=e.closest(".table-wrap"),n={left:t.querySelector(".table-wrap__shadow--left"),right:t.querySelector(".table-wrap__shadow--right")};o(n.right,e.scrollWidth-e.clientWidth-e.scrollLeft),o(n.left,e.scrollLeft)})})}),n.App.domReady(function(){n.App.each(".standart-slider",function(e){var t=e.querySelector(".swiper-button-prev"),n=e.querySelector(".swiper-button-next"),o=e.querySelector(".swiper-pagination");new i.Swiper(e,{loop:!0,lazy:{loadPrevNext:!0,loadOnTransitionStart:!0,loadPrevNextAmount:3},navigation:{prevEl:t,nextEl:n},breakpoints:{660:{navigation:{},pagination:{el:o,type:"bullets",dynamicBullets:!0,dynamicMainBullets:3}}}})})});var o=function(e,t,n){void 0===n&&(n=80),e.style.opacity=(t/n<=1?t/n:1).toString()}}.apply(t,i))||(e.exports=o)},function(e,t,n){var i,o;i=[n,t,n(2),n(3),n(4)],void 0===(o=function(e,t,n,i,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),i.Swiper.use([i.Lazy,i.EffectFade]),n.App.domReady(function(){new n.EventListener(".address__top").add("click",function(e){var t=new n.Element(e).closest(".address");t.hasClass("active")?t.removeClass("active"):(new n.Element(".address.active").removeClass("active"),t.addClass("active"),r(e.closest(".address").querySelector(".active .address-slider:not(.swiper-container-initialized)")),window.animateScroll(t.els[0].offsetTop-15))}),r(document.querySelector(".address.active .active .address-slider:not(.swiper-container-initialized)"))}),n.App.domReady(function(){new n.EventListener(".address-detail__btn .gray-arrow-btn").add("click",function(e){var t=e.closest(".address-tabs__tab"),i=t.getAttribute("data-id"),o=new n.Element(t);o.hasClass("active")||(o.closest(".address__content").find(".active").removeClass("active"),o.addElement(o.closest(".address__content").find('.address-desc[data-id="'+i+'"]')).addClass("active"),r(document.querySelector(".address.active .active .address-slider:not(.swiper-container-initialized)")),window.matchMedia("(max-width: 1200px)").matches&&window.animateScroll(o.closest(".address__content").find('.address-desc[data-id="'+i+'"]').els[0].offsetTop-20))})});var r=function(e){if(e){var t=e.querySelector(".swiper-button-prev"),n=e.querySelector(".swiper-button-next");new i.Swiper(e,{effect:"fade",loop:!0,navigation:{prevEl:t,nextEl:n},cubeEffect:{slideShadows:!1},lazy:{loadPrevNext:!0,loadPrevNextAmount:1}})}};n.App.domReady(function(){window.matchMedia("(min-width: 1000px)").matches?n.App.each(".adr-counter__number",function(e){var t={count:0};e.style.width=getComputedStyle(e).width,o.TweenLite.to(e,2,{opacity:1}),o.TweenLite.to(t,10,{count:"+="+e.innerText,onUpdate:function(){e.innerText=Math.ceil(t.count).toString()}})}):o.TweenLite.set(".adr-counter__number",{opacity:1})})}.apply(t,i))||(e.exports=o)},function(e,t,n){var i,o;i=[n,t,n(2),n(3)],void 0===(o=function(e,t,n,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),i.Swiper.use([i.Lazy,i.Keyboard,i.Scrollbar,i.Navigation]),n.App.domReady(function(){new i.Swiper(".partners-slider",{slidesPerColumn:o(),slidesPerView:"auto",freeMode:!0,roundLengths:!0,navigation:{prevEl:".partners-text__text-arrows .swiper-button-prev",nextEl:".partners-text__text-arrows .swiper-button-next"},lazy:{loadPrevNext:!0,loadPrevNextAmount:1e3},keyboard:{enabled:!0,onlyInViewport:!0},scrollbar:{el:".swiper-scrollbar",draggable:!0},breakpoints:{5000:{slidesPerView:6},4000:{slidesPerView:10},3500:{slidesPerView:8},3100:{slidesPerView:6},2600:{slidesPerView:5},2300:{slidesPerView:4},2000:{slidesPerView:3},1700:{slidesPerView:2},1100:{slidesPerView:1},1000:{slidesPerView:3},660:{slidesPerView:2},400:{slidesPerView:1}}}),window.addEventListener("resize",function(){})});var o=function(){var e=window.innerHeight,t=window.innerWidth;return e>=1200?2:t<660?1:e>=650?2:1}}.apply(t,i))||(e.exports=o)},function(e,t,n){var i,o;i=[n,t,n(2),n(3)],void 0===(o=function(e,t,n,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),i.Swiper.use([i.Lazy,i.Keyboard,i.Navigation]),n.App.domReady(function(){new i.Swiper(".career-slider",{slidesPerView:3,loop:!0,spaceBetween:32,lazy:{loadPrevNext:!0,loadPrevNextAmount:3},keyboard:{enabled:!0,onlyInViewport:!0},navigation:{nextEl:".career-slider__arrows .swiper-button-next",prevEl:".career-slider__arrows .swiper-button-prev"},breakpoints:{1000:{slidesPerView:2,spaceBetween:20},660:{slidesPerView:1,spaceBetween:20}}})}),n.App.domReady(function(){var e=new n.Element(".vacancy__title");new n.EventListener(e).add("click",function(e){var t=new n.Element(e).closest(".vacancy");t.hasClass("js__opened")?t.removeClass("js__opened"):(new n.Element(".vacancy.js__opened").removeClass("js__opened"),t.addClass("js__opened"),window.moveCareerForm(t.find(".vacancy-form").get(0).els[0]),new n.EventListener(t.find(".vacancy-form").get(0).els[0].querySelector(".default-input__input--file")).add("change",function(e){var t=e.closest(".default-input--file").querySelector(".default-input__label--file");if(e.files.length){for(var n=[],i=0;i<e.files.length;i++)n.push(e.files[i].name);t.setAttribute("data-text",n.join(", "))}else t.setAttribute("data-text","Файл не выбран")}))}),new n.Element(".cities-list .city.active").closest(".cities-list__item").addClass("active"),new n.EventListener(".cities-list .city").add("click",function(e,t){var i=new n.Element(e),o=e.getAttribute("data-id");t.preventDefault(),i.hasClass("active")?window.matchMedia("(max-width: 660px)").matches&&i.closest(".c-vacancy__cities").toggleClass("js__opened"):(window.matchMedia("(max-width: 660px)").matches&&i.closest(".c-vacancy__cities").removeClass("js__opened"),new n.Element(".cities-list .city.active, .vacancy-list.active").addElement(".cities-list__item.active").removeClass("active"),i.addElement(".vacancy-list[data-id='"+o+"']").addElement(i.closest(".cities-list__item")).addClass("active"))})}),n.App.domReady(function(){var e=document.createElement("select"),t=document.querySelector(".c-vacancy__cities");t&&(e.classList.add("city-select"),n.App.each(".city",function(t){var n=document.createElement("option");n.setAttribute("value",t.getAttribute("data-id")),n.innerText=t.innerText,t.classList.contains("active")&&(e.value=t.getAttribute("data-id")),e.appendChild(n)}),new n.EventListener(e).add("change",function(e){var t=e.value;new n.Element(".cities-list .city.active, .vacancy-list.active").addElement(".cities-list__item.active").removeClass("active"),new n.Element(".vacancy-list[data-id='"+t+"'], .city[data-id='"+t+"']").addElement(new n.Element(".city[data-id='"+t+"']").closest(".cities-list__item")).addClass("active")}),t.appendChild(e))})}.apply(t,i))||(e.exports=o)},function(e,t,n){var i,o;i=[n,t,n(2)],void 0===(o=function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),n.App.domReady(function(){new n.EventListener(".default-input__input--file").add("change",function(e){var t=e.closest(".default-input--file").querySelector(".default-input__label--file");if(e.files.length){for(var n=[],i=0;i<e.files.length;i++)n.push(e.files[i].name);t.setAttribute("data-text",n.join(", "))}else t.setAttribute("data-text","Файл не выбран")})})}.apply(t,i))||(e.exports=o)},function(e,t,n){var i,o;i=[n,t,n(2)],void 0===(o=function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),n.App.domReady(function(){if(document.querySelector(".rev-list.load--more_list")){for(var e=0,t=n.App.transformNodeListToArray(document.querySelectorAll(".rev-more a"));e<t.length;e++){var o=t[e];i(o)}new MutationObserver(function(e){e.forEach(function(e){for(var t=0,o=n.App.transformNodeListToArray(e.addedNodes);t<o.length;t++){var r=o[t];i(r.querySelector(".rev-more a"))}})}).observe(document.querySelector(".rev-list.load--more_list"),{childList:!0})}});var i=function(e){new n.EventListener(e).add("click",function(e,t){var i=new n.Element(e).closest(".review");t.preventDefault(),i.hasClass("js__opened")?(i.removeClass("js__opened"),i.find(".rev-more a").text("Читать весь отзыв")):(new n.Element(".review.js__opened").removeClass("js__opened").find(".rev-more a").text("Читать весь отзыв"),i.addClass("js__opened"),i.find(".rev-more a").text("Свернуть отзыв")),e.blur()})}}.apply(t,i))||(e.exports=o)},function(e,t,n){var i,o;i=[n,t,n(2),n(3)],void 0===(o=function(e,t,n,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),i.Swiper.use([i.Pagination,i.Navigation,i.Keyboard,i.Mousewheel]),n.App.domReady(function(){new i.Swiper(".n-advantages .advantage-list",{mousewheel:!0,slidesPerGroup:3,slidesPerView:3,spaceBetween:70,direction:"vertical",loop:!0,pagination:{el:".swiper-pagination",type:"fraction",renderFraction:function(e,t){return'<span class="'+e+'"></span> - \n\t\t\t\t\t<span class="'+t+'"></span>'}},navigation:{prevEl:".swiper-button-prev",nextEl:".swiper-button-next"},keyboard:{enabled:!0,onlyInViewport:!0},breakpoints:{1700:{spaceBetween:50},1500:{spaceBetween:40},1200:{direction:"horizontal",slidesPerColumn:2,slidesPerGroup:1,loop:!1,spaceBetween:20},1000:{direction:"horizontal",slidesPerColumn:2,slidesPerGroup:1,loop:!1,slidesPerView:2,spaceBetween:20},660:{direction:"horizontal",slidesPerColumn:1,slidesPerGroup:1,loop:!1,slidesPerView:1,spaceBetween:20}}})})}.apply(t,i))||(e.exports=o)},function(e,t,n){var i,o;i=[n,t,n(2)],void 0===(o=function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),n.App.domReady(function(){var e={right:document.createElement("div"),left:document.createElement("div")};e.right.classList.add("title-menu__shadow"),e.right.classList.add("title-menu__shadow--right"),e.left.classList.add("title-menu__shadow"),e.left.classList.add("title-menu__shadow--left"),n.App.each(".title-block__menu",function(t){t.insertBefore(e.left,t.querySelector("*:first-child")),t.insertBefore(e.right,null)}),n.App.each(".title-menu",function(e){if(e.scrollWidth>e.clientWidth){var t={right:e.closest(".title-block__menu").querySelector(".title-menu__shadow--right")};i(t.right,e.scrollWidth-e.clientWidth)}new n.EventListener(e).add("scroll",function(e){var t=e.closest(".title-block__menu"),n={left:t.querySelector(".title-menu__shadow--left"),right:t.querySelector(".title-menu__shadow--right")};i(n.right,e.scrollWidth-e.clientWidth-e.scrollLeft),i(n.left,e.scrollLeft)})})});var i=function(e,t,n){void 0===n&&(n=80),e.style.opacity=(t/n<=1?t/n:1).toString()}}.apply(t,i))||(e.exports=o)},function(e,t,n){var i,o;i=[n,t,n(2),n(4),n(4)],void 0===(o=function(e,t,n,i,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),n.App.domReady(function(){var e=document.querySelectorAll(".front-circle, .middle-circle, .inner-circle");e.length&&(i.TweenLite.set(e,{transformOrigin:"center"}),a(e),n.App.each(".cw-item__img path",function(e){e.style.strokeDasharray=e.getTotalLength()+", "+e.getTotalLength(),e.style.strokeDashoffset=e.getTotalLength().toString()}))});var r,a=function(e){i.TweenLite.to(e,2,{scale:1.1,onComplete:function(){i.TweenLite.to(e,2,{scale:1,onComplete:function(){a(e)}})}})};function s(e){var t=document.querySelector(".about-chat__list");t&&t.appendChild(e)}function l(e){var t=document.createElement("div");return t.classList.add("about-chat__list-item"),t.classList.add("about-chat__list-item--"+(e==r.fromMe?"from":"to")),t}n.App.domReady(function(){var e=document.querySelector("#russia-map");if(e){i.TweenLite.set(e,{transformOrigin:"center",scale:.1,opacity:0});var t=e.querySelectorAll("ellipse, circle");if(t.length){var o=function(){i.TweenLite.to(e,.7,{scale:1,opacity:1,onComplete:function(){n.App.each(t,function(e,t){i.TweenLite.to(e,.2,{opacity:1,delay:t?parseFloat("."+t):t})})}})};n.App.each(t,function(e){i.TweenLite.set(e,{opacity:0})}),window.isScrolledIntoView(e)&&o(),window.addEventListener("scroll",function(){window.isScrolledIntoView(e)&&o()}),window.addEventListener("resize",function(){window.isScrolledIntoView(e)&&o()})}}}),n.App.domReady(function(){var e=document.querySelector(".about__decors-left"),t=document.querySelector(".about__decors-right");if(e&&t){var n=document.querySelector(".about__img"),o=function(){n&&(window.scrollY>=parseInt(getComputedStyle(n).height)/1.9?(i.TweenLite.to(e,.2,{opacity:1}),i.TweenLite.to(t,.2,{opacity:1})):(i.TweenLite.to(e,.2,{opacity:0}),i.TweenLite.to(t,.2,{opacity:0})),i.TweenLite.to(e,1,{y:-window.scrollY/window.innerHeight*190+"px"}),i.TweenLite.to(t,1.5,{y:-window.scrollY/window.innerHeight*160+"px"}))};o(),window.addEventListener("resize",o),window.addEventListener("scroll",o)}}),n.App.domReady(function(){var e=document.querySelectorAll(".bottom-decor"),t=document.querySelectorAll(".top-decor, .left-decor"),n=document.querySelector(".about-img");e.length&&n&&n.addEventListener("mousemove",function(o){var r={x:0,y:0};r.x=-1*(o.pageX-n.clientWidth/2)/55,r.y=-1*(o.pageY-n.clientHeight/2)/55,i.TweenLite.to(e,2,{x:r.x}),i.TweenLite.to(t,2,{x:r.x,y:r.y})})}),function(e){e[e.toMe=0]="toMe",e[e.fromMe=1]="fromMe"}(r||(r={})),n.App.domReady(function(){var e={top:window.get$(".a-messages").offset().top+window.get$(".message").height()/2,left:window.get$(".a-messages").offset().left+window.get$(".message").width()/2},t=document.querySelector(".about-img__messages-cursor"),n=[];n.push({direction:r.toMe,text:"Дорогая, ты что-то купила?"}),n.push({direction:r.fromMe,text:"Да дорогой, я купила кухню в Lorena кухни"}),n.push({direction:r.toMe,text:"Почему именно Lorena кухни?"}),n.push({direction:r.fromMe,text:"Я посмотрела отзыв - это любовь!"}),n.push({direction:r.fromMe,src:"video/video.mp4",poster:"img/photos/chat-video-poster.jpg"}),t&&i.TweenLite.to(t,3,{top:e.top,left:e.left,ease:o.Power4.easeInOut,delay:1.5,onStart:function(){document.body.classList.add("js__hide-cursor")},onComplete:function(){i.TweenLite.to(t,.1,{scale:.6,onComplete:function(){i.TweenLite.to(t,.1,{scale:1,onComplete:function(){var e,t,i,o;document.body.classList.remove("js__hide-cursor"),document.body.classList.add("js__show-chat"),e=n,o=0,(i=function(){var n;e.length==o?(clearInterval(t),setTimeout(function(){window.is.desktop()&&window.get$(".chat-msg__video").trigger("click")},3e3)):((n=l(e[o].direction)).innerHTML='<div class="chat-msg"><div class="chat-msg__dots"><div class="msg-dot"></div><div class="msg-dot"></div><div class="msg-dot"></div></div></div>',s(n),t=setTimeout(function(){var t,n,r;!function(){if(document.querySelector(".about-chat__list")){var e=window.get$(".chat-msg__dots");e&&e.closest(".about-chat__list-item").remove()}}(),e[o].text?(t=e[o].direction,n=e[o].text,(r=l(t)).innerHTML='<div class="chat-msg">\n\t\t\t\t\t\t\t\t<div class="chat-msg__text">'+n+"</div>\n\t\t\t\t\t\t\t</div>",s(r)):function(e){var t=l(e.direction);t.innerHTML='<div class="chat-msg">\n\t\t\t\t\t\t\t\t<a href="'+e.src+'" class="chat-msg__video" data-fancybox>\n\t\t\t\t\t\t\t\t\t<img class="chat-msg__video-img" src="'+e.poster+'" />\n\t\t\t\t\t\t\t\t\t<div class="chat-msg__video-btn">\n\t\t\t\t\t\t\t\t\t\t<svg xmlns="http://www.w3.org/2000/svg" width="115" height="115" viewBox="0 0 115 115" fill="none">\n\t\t\t\t\t\t\t\t\t\t\t<circle cx="57.6103" cy="57.6101" r="55.5" transform="rotate(-90 57.6103 57.6101)" stroke="#272727" stroke-width="3"/>\n\t\t\t\t\t\t\t\t\t\t\t<path d="M113.5 58C113.5 88.6395 88.4403 113.5 57.5 113.5C26.5597 113.5 1.5 88.6395 1.5 58C1.5 27.3605 26.5597 2.5 57.5 2.5C88.4403 2.5 113.5 27.3605 113.5 58Z" stroke="#FF6600" stroke-width="3"/>\n\t\t\t\t\t\t\t\t\t\t</svg>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t</div>',s(t),document.querySelector(".chat-msg__video-btn path")}(e[o]),o++,i()},2e3))})()}})}})}})})}.apply(t,i))||(e.exports=o)},function(e,t,n){var i,o,r=this&&this.__awaiter||function(e,t,n,i){return new(n||(n=Promise))(function(o,r){function a(e){try{l(i.next(e))}catch(e){r(e)}}function s(e){try{l(i.throw(e))}catch(e){r(e)}}function l(e){e.done?o(e.value):new n(function(t){t(e.value)}).then(a,s)}l((i=i.apply(e,t||[])).next())})},a=this&&this.__generator||function(e,t){var n,i,o,r,a={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return r={next:s(0),throw:s(1),return:s(2)},"function"==typeof Symbol&&(r[Symbol.iterator]=function(){return this}),r;function s(r){return function(s){return function(r){if(n)throw new TypeError("Generator is already executing.");for(;a;)try{if(n=1,i&&(o=2&r[0]?i.return:r[0]?i.throw||((o=i.return)&&o.call(i),0):i.next)&&!(o=o.call(i,r[1])).done)return o;switch(i=0,o&&(r=[2&r[0],o.value]),r[0]){case 0:case 1:o=r;break;case 4:return a.label++,{value:r[1],done:!1};case 5:a.label++,i=r[1],r=[0];continue;case 7:r=a.ops.pop(),a.trys.pop();continue;default:if(!(o=(o=a.trys).length>0&&o[o.length-1])&&(6===r[0]||2===r[0])){a=0;continue}if(3===r[0]&&(!o||r[1]>o[0]&&r[1]<o[3])){a.label=r[1];break}if(6===r[0]&&a.label<o[1]){a.label=o[1],o=r;break}if(o&&a.label<o[2]){a.label=o[2],a.ops.push(r);break}o[2]&&a.ops.pop(),a.trys.pop();continue}r=t.call(e,a)}catch(e){r=[6,e],i=0}finally{n=o=0}if(5&r[0])throw r[1];return{value:r[0]?r[1]:void 0,done:!0}}([r,s])}}},s=this&&this.__asyncValues||function(e){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var t,n=e[Symbol.asyncIterator];return n?n.call(e):(e="function"==typeof __values?__values(e):e[Symbol.iterator](),t={},i("next"),i("throw"),i("return"),t[Symbol.asyncIterator]=function(){return this},t);function i(n){t[n]=e[n]&&function(t){return new Promise(function(i,o){!function(e,t,n,i){Promise.resolve(i).then(function(t){e({value:t,done:n})},t)}(i,o,(t=e[n](t)).done,t.value)})}}};i=[n,t,n(2),n(3)],void 0===(o=function(e,t,n,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),i.Swiper.use([i.Navigation,i.Autoplay,i.Keyboard]),n.App.domReady(function(){var e=document.querySelector(".es-slider");e&&new i.Swiper(e,{slidesPerView:4,spaceBetween:45,loop:!0,keyboard:{enabled:!0,onlyInViewport:!0},navigation:{prevEl:e.querySelector(".swiper-button-prev"),nextEl:e.querySelector(".swiper-button-next")},breakpoints:{1000:{slidesPerView:3,spaceBetween:20},660:{slidesPerView:1,spaceBetween:20}}})}),window.addEventListener("load",function(){this.document.body.classList.add("eco-loaded")}),n.App.domReady(function(){var e=n.App.transformNodeListToArray(document.querySelectorAll(".to-slider")),t=[],o=document.querySelector(".tos-starter__img"),l=n.App.transformNodeListToArray(document.querySelectorAll(".answer-btn"));if(e.length){for(var c=0,d=e;c<d.length;c++){var u=d[c];t.push(new i.Swiper(u,{slidesPerView:1,direction:"vertical",noSwiping:!0,allowTouchMove:!1,simulateTouch:!1,speed:1e3}))}if(o){var p=0,v=0,w=!1,f=document.querySelector(".turn-on__button .default-btn"),m=document.querySelector(".to-counter__current"),_=0;o.addEventListener("click",function(){return r(this,void 0,void 0,function(){var e,n,i=this;return a(this,function(o){if(9==p)return document.querySelector(".eco-level[style*='block']")||f.click(),[2];if(!w)return++_>=3&&(window.get$(".turn-on__notice").stop().fadeIn(300),setTimeout(function(){window.get$(".turn-on__notice").fadeOut(300)},1500)),window.get$(".to-sliders").removeClass("js__highlighting"),setTimeout(function(){window.get$(".to-sliders").addClass("js__highlighting")},100),[2];if(w=!1,window.get$(".turn-on__notice").fadeOut(300),_=0,t[0].isEnd)return[2];for(this.classList.add("js__active"),e=0,n=l;e<n.length;e++)n[e].classList.remove("selected");return f.classList.remove("js__visible"),window.get$(".eco-maniya__level").fadeOut(100),setTimeout(function(){return r(i,void 0,void 0,function(){var e,n,i,o,r,l;return a(this,function(a){switch(a.label){case 0:this.classList.remove("js__active"),a.label=1;case 1:a.trys.push([1,7,8,13]),i=s(t),a.label=2;case 2:return[4,i.next()];case 3:return(o=a.sent()).done?[3,6]:(r=o.value,[4,new Promise(function(e,t){setTimeout(function(){r.slideNext(),e()},200)})]);case 4:a.sent(),a.label=5;case 5:return[3,2];case 6:return[3,13];case 7:return l=a.sent(),e={error:l},[3,13];case 8:return a.trys.push([8,,11,12]),o&&!o.done&&(n=i.return)?[4,n.call(i)]:[3,10];case 9:a.sent(),a.label=10;case 10:return[3,12];case 11:if(e)throw e.error;return[7];case 12:return[7];case 13:return[2]}})})},400),[2]})})});for(var y=function(e){e.addEventListener("click",function(){var t;this.classList.contains("selected")||(this.classList.contains("answer-btn--yes")?(v++,t=e.closest(".to-answers").querySelector(".answer-btn--no")):(t=e.closest(".to-answers").querySelector(".answer-btn--yes")).classList.contains("selected")&&v--,t.classList.contains("selected")?t.classList.remove("selected"):p++,this.classList.add("selected"),m.innerText=p.toString(),p==parseInt(document.querySelector(".to-counter__total").innerText.split(" ")[2])&&f.classList.add("js__visible"),p%3==0&&(w=!0))})},h=0,b=l;h<b.length;h++)y(b[h]);f.addEventListener("click",function(){window.get$(".eco-maniya__level").fadeIn(100),window.get$("html, body").animate({scrollTop:window.get$(".eco-maniya__level").offset().top-window.get$("header").height()},300);for(var e=0,t=n.App.transformNodeListToArray(document.querySelectorAll(".eco-level"));e<t.length;e++){var i=t[e];if(parseInt(i.getAttribute("data-min"))<=v&&parseInt(i.getAttribute("data-max"))>=v){window.get$(i).show();break}}})}}})}.apply(t,i))||(e.exports=o)}]);