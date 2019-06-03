import {Swiper, Keyboard, Navigation} from 'swiper/dist/js/swiper.esm.js'
import {App} from "./app"

Swiper.use([Keyboard, Navigation])

App.domReady(() => {
	;(function(){
		App.each(".time-line__item", (el: HTMLElement, i: number) => {
			if (i > 1)
				el.style.opacity = (1 / i).toString()
		})
	})//()

	new Swiper(".time-line", {
		slidesPerView: 4,
		// freeMode: true,
		loop: true,
		navigation: {
			prevEl: ".mission-desc__title-arrows .swiper-button-prev",
			nextEl: ".mission-desc__title-arrows .swiper-button-next"
		},
		keyboard: {
			enabled: true,
			onlyInViewport: true,
		}
	})
})