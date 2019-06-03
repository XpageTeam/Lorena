import {App} from "./app"
import {Swiper, Lazy, Keyboard, Scrollbar, Navigation} from "swiper/dist/js/swiper.esm"

Swiper.use([Lazy, Keyboard, Scrollbar, Navigation])

App.domReady(() => {
	const partnersSlider = new Swiper(".partners-slider", {
		slidesPerColumn: getSlidesPerColumn(),
		slidesPerView: "auto",
		freeMode: true,
		roundLengths: true,
		navigation: {
			prevEl: ".partners-text__text-arrows .swiper-button-prev",
			nextEl: ".partners-text__text-arrows .swiper-button-next"
		},
		lazy: {
			loadPrevNext: true,
			loadPrevNextAmount: 1000 //слайдер криво подгружает
		},
		keyboard: {
			enabled: true,
			onlyInViewport: true,
		},
		scrollbar: {
			el: '.swiper-scrollbar',
			draggable: true,
		},
		breakpoints: {
			5000: {
				slidesPerView: 6
			},
			4000: {
				slidesPerView: 10
			},
			3500: {
				slidesPerView: 8
			},
			3100: {
				slidesPerView: 6
			},
			2600: {
				slidesPerView: 5
			},
			2300: {
				slidesPerView: 4
			},
			2000: {
				slidesPerView: 3
			},
			1700: {
				slidesPerView: 2
			},
			1100: {
				slidesPerView: 1
			},
			1000: {
				slidesPerView: 3
			},
			660: {
				slidesPerView: 2
			},
			400: {
				slidesPerView: 1
			}
		}
	})

	setSlidesHeight(document.querySelectorAll(".partner"))

	window.addEventListener("resize", function(){
		setSlidesHeight(document.querySelectorAll(".partner"))
	})
})

const getSlidesPerColumn = (): number => {
	const screenHeight = window.innerHeight,
		screenWidth = window.innerWidth;

	if (screenHeight >= 1200)
		return 2
	else if (screenWidth < 660)
		return 1
	else if (screenHeight >= 650)
		return 2
	else 
		return 1
},
setSlidesHeight = (slides: NodeList): void => {
	App.each(slides, (el: HTMLElement) => {
		el.style.height = getComputedStyle(el).width
	})
}