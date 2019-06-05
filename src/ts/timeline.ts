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
		breakpoints: {
			1000: {
				slidesPerView: 2
			},
			660: {
				slidesPerView: 1
			}
		}
	})
})

// const setOpacity = () => {
// 	const mainSlide = document.querySelector(".time-line .swiper-slide-active");

// 	// App.each

// 	const slides = [mainSlide];

// 	for (let i = 0; i < 4; i++)
// 		slides.push(slides[i].previousElementSibling)

// 	for (let i = slides.length - 1; i > 0; i--)

// };