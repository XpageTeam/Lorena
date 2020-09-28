import "./tovar"
import "./timeline"
import "./standart-page"
// import "./useful"
import "./addresses"
import "./partners"
import "./career"
import "./forms"
import "./reviews"
import "./advantages"
import "./nav-scrolling"
import "./about"
import "./card-tabs"
import "./card-slider"


import "./eco-maniya"


// import "./fake-design"


import {App, Element, MobileMenu, EventListener} from "./app"
import {Swiper, Navigation, EffectFade, Pagination} from "swiper/dist/js/swiper.esm.js";

// Swiper.use([Navigation, Pagination, Scrollbar]);

const adaptiveMedia = "(max-width: 1200px)";

declare global {
    interface Window {
    	animateScroll: Function; 
    	isScrolledIntoView: Function; 
		get$: any;
		$: any;
		Cookies: any,
		is: any,
    }
}

function checkWindowScrollForHeaderFix(header: HTMLElement){
	if (window.scrollY > 5)
		header.classList.add("js__scrolled");
	else
		header.classList.remove("js__scrolled");
}

App.domReady(() => {
	const header = document.querySelectorAll(".main .head, .tovar .head, .constructor .head");

	if (header.length == 0)
		return;

	checkWindowScrollForHeaderFix(header[0] as HTMLElement);

	document.addEventListener("scroll", function(){
		checkWindowScrollForHeaderFix(header[0] as HTMLElement);
	});
});

App.domReady(() => {
	new MobileMenu({
		burger: ".head__burger",
		menu: ".side-menu",
		menuActiveClass: "js__opened",
		bodyActiveClass: "js__menu__opened",
		ignoreWarnings: false,
		fixBody: true,
		media: adaptiveMedia
	});

	const catalogFilter = new MobileMenu({
		burger: ".catalog-filter__mobile-btn .default-btn",
		menu: ".catalog-filter__filter",
		menuActiveClass: "js__opened",
		bodyActiveClass: "js__filter-opened",
		ignoreWarnings: true,
		fixBody: true,
		media: adaptiveMedia
	});

	window.$("body").on("click", ".filter__close", catalogFilter.closeMenu.bind(catalogFilter));

	const sideMenu = new Element(".side-menu");

	new EventListener(".h-menu__item--have-sub > a").add("click", (el: HTMLElement, event: Event) => {
		if (!window.matchMedia(adaptiveMedia).matches)
			return

		const parentEl = new Element(el).closest(".h-menu__item--have-sub").addClass("js__submenu-opened")
		sideMenu.addClass("js__submenu-opened")

		event.preventDefault()
	})

	new EventListener(".h-submenu__close").add("click", (el: HTMLElement, event: Event) => {
		if (!window.matchMedia(adaptiveMedia).matches)
			return
		
		const parentEl = new Element(el).closest(".h-menu__item--have-sub").removeClass("js__submenu-opened")
		sideMenu.removeClass("js__submenu-opened")

		event.preventDefault()
	})

	new EventListener(".main-slide__title-btn").add("click", (el: HTMLElement, e: Event) => {
		const target: HTMLElement = document.querySelector(".main-about__cont");

		window.animateScroll(target.offsetTop - 100)

		e.preventDefault()
	});


	if(document.querySelectorAll('.main-stock__slider').length){
		let stockSwiper = new Swiper('.main-stock__slider', {
			spaceBetween: 26,
			autoplay: true,
			loop: true,
			navigation: {
		        nextEl: '.main-stock .swiper-button-next',
		        prevEl: '.main-stock .swiper-button-prev',
		    },
		});
	}

	if(document.querySelectorAll('.os-slider').length){
		var osSlider = new Swiper('.os-slider .swiper-list', {
			slidesPerView: 3,
			spaceBetween: 30,
			centeredSlides: true,
			navigation: {
				nextEl: '.os-slider .swiper-button-next',
				prevEl: '.os-slider .swiper-button-prev',
			},
			breakpoints: {
				640: {
					slidesPerView: 2,
				},
				320: {
				  slidesPerView: 2,
				  spaceBetween: 20,
				  centeredSlides: false,
				},
			}
			
		});
	}


})

// App.domReady(() => {
// 	new Element(".f-menu__item--title:first-child:last-child").closest(".f-menu").prev(".f-menu")
// })

App.domReady(() => {
	;(function(){
		const scrollTopBtn = document.createElement("div");

		scrollTopBtn.innerText = "вверх"

		scrollTopBtn.classList.add("to-top-btn")

		if (document.querySelector(".tovar-arrows"))
			scrollTopBtn.classList.add("js__tovar-btns-cutch")

		new EventListener(scrollTopBtn).add("click", (el: HTMLElement) => {
			window.animateScroll(0)
		})

		document.body.appendChild(scrollTopBtn)
	})()

	setToTopVisibility()

	window.addEventListener("resize", setToTopVisibility)
	window.addEventListener("scroll", setToTopVisibility)
})

const setToTopVisibility = (): void => {
	const scrollBtn = document.querySelector(".to-top-btn");

	if (!scrollBtn)
		return

	if (window.scrollY >= 600)
		scrollBtn.classList.add("js__visible")
	else
		scrollBtn.classList.remove("js__visible")
}


