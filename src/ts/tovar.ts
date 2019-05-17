import {App} from "./app"
import {Swiper, Lazy, EffectFade, Keyboard} from "swiper/dist/js/swiper.esm"

Swiper.use([Lazy, EffectFade, Keyboard])

App.domReady(() => {

	new Swiper(".tovar-sliders__big", {
		effect: "fade",
		lazy: {
			loadPrevNext: true,
		},
		keyboard: {
			enabled: true,
			onlyInViewport: true,
		}
	})
})