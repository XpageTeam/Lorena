import {App} from "./app"
import {Swiper, Lazy, Keyboard} from "swiper/dist/js/swiper.esm"

Swiper.use([Lazy, Keyboard])

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
	})
})