import {App} from "./app"
import {Swiper, Lazy, Keyboard, Scrollbar} from "swiper/dist/js/swiper.esm"

Swiper.use([Lazy, Keyboard, Scrollbar])

App.domReady(() => {
	const partnersSlider = new Swiper(".partners-slider", {
		slidesPerColumn: getSlidesPerColumn(),
		slidesPerView: 3,
		freeMode: true,
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
				slidesPerView: 12
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
			}
		}
	})

	// window.addEventListener("resize", function(){
	// 	partnersSlider
	// })
})

const getSlidesPerColumn = (): number => {
	const screenHeight = window.innerHeight;

	if (screenHeight >= 1200)
		return 3
	else if (screenHeight >= 650)
		return 2
	else 
		return 1
}