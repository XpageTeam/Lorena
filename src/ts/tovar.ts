import {App, Element, EventListener} from "./app"
import "./main-reviews"
import {Swiper, Lazy, EffectFade, EffectCube, Keyboard} from "swiper/dist/js/swiper.esm"

Swiper.use([Lazy, EffectFade, EffectCube, Keyboard])

App.domReady(() => {
	/** Переключение табов */
	new EventListener(".tovar-tabs__tab").add("click", (el: HTMLElement, event: Event) => {
		const id = el.getAttribute("href").replace("#", ""),
			targetBlock = new Element(`#${id}`);

		new Element(".variants-list.active, .tovar-tabs__tab.active").removeClass("active")

		new Element(el).addClass("active")

		targetBlock.addClass("active")

		initiallizeVariantsSlider(document.querySelector(".variants-list.active .variants-slider:not(.swiper-container-initialized)"))

		event.preventDefault()
	})

	/* Первоначальная инициализация активного слайдера */
	initiallizeVariantsSlider(document.querySelector(".variants-list.active .variants-slider:not(.swiper-container-initialized)"))
})

App.domReady(() => {
	/** Инициализация верхнего слайдера в карточке */
	const mainSlider = new Swiper(".tovar-sliders__big", {
		effect: "fade",
		lazy: {
			loadPrevNext: true,
		},
		keyboard: {
			enabled: true,
			onlyInViewport: true,
		}
	})

	new EventListener(".thumbs-slider__slide").add("click", (el: HTMLElement, event: Event, i: number) => {
		mainSlider.slideTo(i)
	})
})

/** Инициализация слайдеров */
const initiallizeVariantsSlider = (slider: HTMLElement) => {
	if (!slider)
		return

	const thisSlider = new Swiper(slider, {
		effect: "cube",
		cubeEffect: {
		    slideShadows: false,
		},
		lazy: {
			loadPrevNext: true,
			loadPrevNextAmount: 2
		},
	})

	bindNav(thisSlider, slider.closest(".variants-list"))
}, bindNav = (slider: Swiper, el: any) => {
	const plates = new Element(el).find(".variants-plates__one");

	if (!plates.length)
		return

	new EventListener(plates).add("click", (el: HTMLElement, event: any, i: number) => {
		plates.removeClass("active")
		el.classList.add("active")
		slider.slideTo(i)
	}) 
};