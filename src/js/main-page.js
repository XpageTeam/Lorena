import {Swiper, Lazy} from 'swiper/dist/js/swiper.esm.js'
import stringEffect from "./stringAnimate.js"

Swiper.use([Lazy])

document.addEventListener("DOMContentLoaded", e => {
	;(function(){
		const mainSlider = new Swiper(".main-slider", {
			loop: true,
			lazy: {
				loadPrevNext: true,
			},
			on: {
				lazyImageReady(slideEl, imageEl){
					slideEl.classList.add("js__lazy-ready")
				}
			}
		})
	})()

	$(".main-slide__title-title").each((i, el) => {
		const $this = $(el);

		new stringEffect({
			selector: $this,
			// afterFinish($el, count, options){
				// $el.closest(".text2__text").find(".text2__text-link").css({
				// 	"transition-delay": (count * options.timeStep) + "s",
				// 	transform: "translate3d(0, "+(options.transformStep * count)+"%, 0)"
				// })
			// }
		});
	});
})