import {Swiper, Lazy} from 'swiper/dist/js/swiper.esm.js'

Swiper.use([Lazy])

document.addEventListener("DOMContentLoaded", e => {
	;(function(){
		const mainSlider = new Swiper(".main-slider", {
			loop: true,
			lazy: {
				loadPrevNext: true,
			},
		})
	})()
})