import {App} from "./app"
// import "./swiper.d"
import {Swiper, Pagination, Navigation, Keyboard} from 'swiper/dist/js/swiper.esm.js'

Swiper.use([Pagination, Navigation, Keyboard])

App.domReady(() => {
	new Swiper(".n-advantages .advantage-list", {
		// effect: "fade",
		// fadeEffect: {
		// 	crossFade: true
		// },
		slidesPerView: 3,
		spaceBetween: 70,
		direction: "vertical",
		loop: true,
		pagination: {
			el: '.swiper-pagination',
			type: 'fraction',
			renderFraction(currentClass?: string, totalClass?: string){
				return `<span class="${currentClass}"></span> - 
					<span class="${totalClass}"></span>`;
			}
		},
		navigation: {
			prevEl: ".swiper-button-prev",
			nextEl: ".swiper-button-next",
		},
		keyboard: {
			enabled: true,
			onlyInViewport: true,
		},
		breakpoints: {
			1700: {
				spaceBetween: 50
			},
			1500: {
				spaceBetween: 40
			},
			1200: {
				direction: "horizontal",
				slidesPerColumn: 2,
				loop: false,
				spaceBetween: 20
			},
			1000: {
				direction: "horizontal",
				slidesPerColumn: 2,
				loop: false,
				slidesPerView: 2,
				spaceBetween: 20
			},
			660: {
				direction: "horizontal",
				slidesPerColumn: 1,
				loop: false,
				slidesPerView: 1,
				spaceBetween: 20
			}
		}
	})
})