import {Swiper, Lazy, EffectFade, Navigation} from 'swiper/dist/js/swiper.esm.js'
import {App} from "./app"

Swiper.use([Lazy, EffectFade, Navigation])

App.domReady(() => {
	/** Костыль, добавляющий кнопки для навигации слайдера с отзывами в адаптиве карточки товара */

	let prevBtn: HTMLElement, nextBtn: HTMLElement;

	;(function(){
		const slider = document.querySelector(".main-reviews__slider .reviews-slider");

		if (!slider)
			return

		if (slider.querySelector(".swiper-button-prev"))
			return


		prevBtn = document.createElement("div"),
		nextBtn = document.createElement("div");

		prevBtn.classList.add("swiper-button-prev")
		nextBtn.classList.add("swiper-button-next")

		slider.append(prevBtn)
		slider.append(nextBtn)
	})()


	/** Конец костыля */

	App.each(".main-reviews", function(el: HTMLElement){
		const prevEl: HTMLElement = el.querySelector(".reviews-counter__arrows .swiper-button-prev") || el.querySelector(".swiper-button-prev"),
			nextEl: HTMLElement = el.querySelector(".reviews-counter__arrows .swiper-button-next") || el.querySelector(".swiper-button-next"),
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
			breakpoints: {
				1000: {
					navigation: {
						prevEl: prevBtn || prevEl,
						nextEl: nextBtn || nextEl
					}
				}
			}
		})
	})
})