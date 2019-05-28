import {App} from "./app"
// import "./swiper.d"
import {Swiper, EffectFade, Pagination, Navigation} from 'swiper/dist/js/swiper.esm.js'

Swiper.use([EffectFade, Pagination, Navigation])

App.domReady(() => {
	new Swiper(".advantages-slider", {
		effect: "fade",
		// fadeEffect: {
		// 	crossFade: true
		// },
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
		}
	})
})