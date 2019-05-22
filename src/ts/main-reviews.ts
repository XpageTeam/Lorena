import {Swiper, Lazy, EffectFade, Navigation} from 'swiper/dist/js/swiper.esm.js'
import {App} from "./app"

Swiper.use([Lazy, EffectFade, Navigation])

App.domReady(() => {
	App.each(".main-reviews", function(el: HTMLElement){
		const prevEl: HTMLElement = el.querySelector(".swiper-button-prev"),
			nextEl: HTMLElement = el.querySelector(".swiper-button-next"),
			slider: HTMLElement = el.querySelector(".reviews-slider");

		new Swiper(slider, {
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
		})
	})
})