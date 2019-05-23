import {App, Element, EventListener} from "./app"
import {Swiper, Lazy, EffectFade} from "swiper/dist/js/swiper.esm"

Swiper.use([Lazy, EffectFade])

App.domReady(() => {
	new EventListener(".gray-arrow-btn").add("click", (el: HTMLElement) => {
		new Element(".gray-arrow-btn").closest(".address").removeClass("active")

		new Element(el).closest(".address").addClass("active")

		initiallizeVariantsSlider(el.closest(".address").querySelector(".address-slider:not(.swiper-container-initialized)"))
	})

	initiallizeVariantsSlider(document.querySelector(".address.active .address-slider:not(.swiper-container-initialized)"))
})

const initiallizeVariantsSlider = (slider: HTMLElement) => {
	if (!slider)
		return

	new Swiper(slider, {
		effect: "fade",
		cubeEffect: {
		    slideShadows: false,
		},
		lazy: {
			loadPrevNext: true,
			loadPrevNextAmount: 1
		},
	})
}