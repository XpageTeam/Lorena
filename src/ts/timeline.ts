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
		},
		on: {
			transitionStart: setOpacity
		},
		breakpoints: {
			1000: {
				slidesPerView: 2
			},
			660: {
				slidesPerView: 1
			}
		}
	})

	setOpacity()
})

const setOpacity = () => {
	const mainSlide: HTMLElement = document.querySelector(".time-line .swiper-slide-next");
	let stopEach = false;

	App.each(".time-line .swiper-slide", (el: HTMLDivElement) => {
		if (stopEach)
			return

		el.style.opacity = "1"

		if (el.classList.contains("swiper-slide-next"))
			stopEach = true
	})

	const slides: any[] = [mainSlide];

	for (let i = 0; i < 4; i++)
		slides.push(slides[i].previousElementSibling)

	slides.reverse()

	for (let i = slides.length - 1; i >= 0; i--){
		slides[i].style.opacity = (!(slides.length - 1 == i) ? i / slides.length : 1).toString()
	}

};