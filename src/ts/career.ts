import {App, Element, EventListener } from "./app"
import {Swiper, Lazy, Keyboard, Navigation} from "swiper/dist/js/swiper.esm"

Swiper.use([Lazy, Keyboard, Navigation])

App.domReady(() => {
	new Swiper(".career-slider", {
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
	})
})

App.domReady(() => {
	const vacancyList = new Element(".vacancy__title");

	new EventListener(vacancyList).add("click", (el: HTMLElement) => {
		vacancyList.closest(".vacancy").removeClass("js__opened")

		new Element(el).closest(".vacancy").addClass("js__opened")
	})
})