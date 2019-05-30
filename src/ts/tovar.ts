import {App, Element, EventListener} from "./app"
import "./main-reviews"
import {Swiper, Lazy, EffectFade, Keyboard, Navigation} from "swiper/dist/js/swiper.esm"

Swiper.use([Lazy, EffectFade, Keyboard, Navigation])

App.domReady(() => {
	/** Слайдер всех предложений в карточке */
	App.each(".all-slider", (el: any) => {
		const prevEl: HTMLElement = el.querySelector(".swiper-button-prev"),
			nextEl: HTMLElement = el.querySelector(".swiper-button-next");

		new Swiper(el.querySelector(".all-slider__slider"), {
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
		})
	})
})

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
	const thumbs = new Element(".thumbs-slider__slide");

	/** Инициализация верхнего слайдера в карточке */
	const mainSlider = new Swiper(".tovar-sliders__big", {
		effect: "fade",
		lazy: {
			loadPrevNext: true,
		},
		keyboard: {
			enabled: true,
			onlyInViewport: true,
		},
		on: {
			transitionStart(){
				thumbs.removeClass("active")

				thumbs.get(mainSlider.activeIndex).addClass("active")
			}
		}
	})

	new EventListener(thumbs).add("click", (el: HTMLElement, event: Event, i: number) => {
		mainSlider.slideTo(i)
	})
})

/** Инициализация слайдеров */
const initiallizeVariantsSlider = (slider: HTMLElement) => {
	if (!slider)
		return

	const thisSlider = new Swiper(slider, {
		effect: "fade",
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