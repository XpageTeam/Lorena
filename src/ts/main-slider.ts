import {Swiper, Lazy, EffectFade} from 'swiper/dist/js/swiper.esm.js'

import {App} from "./app"
import {TweenLite} from "gsap"

Swiper.use([Lazy, EffectFade])

declare global {
	interface Element {
		swiper: Swiper
	}
}

App.domReady(() => {
	;(function(){
		const slidesCount = document.querySelectorAll(".main-slide").length;
		let mainSlider: Swiper;

		mainSlider = new Swiper(".main-slider", {
			loop: slidesCount <= 1 ? false : true,
			effect: "fade",
			simulateTouch: false,
			followFinger: false,
			speed: 600,
			// followFinger: slidesCount <= 1 ? false : true,
			// allowTouchMove: slidesCount <= 1 ? false : true,
			lazy: {
				loadPrevNext: true,
			},
			on: {
				lazyImageReady(slideEl?: HTMLElement, imageEl?: HTMLElement) {
					// if (!flag)
					// 	setTimeout(function(){
					// 		mainSlider.slideNext()
					// 	}, 2500)

					// flag = true;

					slideEl.classList.add("js__lazy-ready")
				},
				init(){
					if (window.get$(document.querySelector(".main-slider")).find(".swiper-slide-active video")[0])
						startMainSliderVideo(window.get$(document.querySelector(".main-slider")).find(".swiper-slide-active video")[0], window.get$(document.querySelector(".main-slider")))
					else
						setTimeout(function(){
							// console.log(document.querySelector(".main-slider").swiper)
							document.querySelector(".main-slider").swiper.slideNext()
						}, 4000)
				}
			}
		});

		mainSlider.on("slideChangeTransitionEnd", function(){
			startMainSliderVideo(window.get$(mainSlider.el).find(".swiper-slide-active video")[0], window.get$(mainSlider.el))
		})

		swapVideosInMainSlider(window.get$(mainSlider.el));
	})()


	;(function(){
		const wavesGroup : any = document.querySelectorAll(".waves circle");

		if (!wavesGroup.length)
			return

		for (var wave of wavesGroup)
			TweenLite.set(wave, {
				autoAlpha: 0,
				transformOrigin: "center"
			})
	})()

	;(function(){
		const lines: any = document.querySelectorAll(".scene-dot > path");

		if (!lines.length)
			return

		for (var line of lines)
			TweenLite.set(line, {
				strokeDashoffset: line.getTotalLength(),
				strokeDasharray: line.getTotalLength()
			})
	})()

	;(function(){
		const textAreas: any = document.querySelectorAll(".scene-dot .text");

		if (!textAreas.length)
			return

		for (var textArea of textAreas)
			TweenLite.set(textArea, {
				autoAlpha: 0
			})
	})()

	;(function(){
		const dots: any = document.querySelectorAll(".base-circle rect");

		if (!dots.length)
			return

		for (var dot of dots)
			TweenLite.set(dot, {
				rotationZ: 45,
				transformOrigin: "center"
			})
	})()

	;(function(){
		const highlights: any = document.querySelectorAll(".highlight");

		if (!highlights.length)
			return

		for (var highlight of highlights)
			TweenLite.set(highlight, {
				autoAlpha: 0
			})
	})()

	;(function(){
		const activeCircles: any = document.querySelectorAll(".active-circle");

		if (!activeCircles.length)
			return

		for (var circle of activeCircles)
			TweenLite.set(circle, {
				autoAlpha: 0,
				scale: 0,
				transformOrigin: "center"
			})
	})()

	;(function(){
		const baseCircles: any = document.querySelectorAll(".base-circle");

		if (!baseCircles.length)
			return

		for (var circle of baseCircles){
			TweenLite.set(circle, {
				transformOrigin: "center"
			})

			const highlight = circle.querySelector(".highlight");

			circle.addEventListener("mouseenter", (e: any) => {
				TweenLite.to(highlight, 1, {
					autoAlpha: 1
				})
			})

			circle.addEventListener("mouseleave", (e: any) => {
				TweenLite.to(highlight, 1, {
					autoAlpha: 0
				})
			})

			circle.addEventListener("click", (e: any) => {
				const dot = circle.closest(".scene-dot"),
					activeCircle = dot.querySelector(".active-circle");

				if (dot.classList.contains("js__showed"))
					return

				const waves = dot.querySelectorAll(".waves circle");

				TweenLite.to(circle, .5, {
					autoAlpha: 0,
					scale: 0
				})

				TweenLite.to(activeCircle, .5, {
					scale: 1,
					autoAlpha: 1,
					onComplete(){
						TweenLite.to(dot.querySelector("path"), .3, {
							strokeDashoffset: 0,
							onComplete(){
								const textArea = dot.querySelector(".text");

								TweenLite.to(textArea, .5, {
									autoAlpha: 1
								})
							}
						})
					}
				})

				let i = 0;
				for (var wave of waves){
					TweenLite.set(wave, {
						autoAlpha: 1
					})

					TweenLite.to(wave, .7, {
						delay: .12 * i,
						scale: 2.1,
						autoAlpha: 0,
						onComplete(){
							dot.classList.add("js__showed")
						}
					})
					i++
				}
			})
		}
	})()
})



const swapVideosInMainSlider = ($slider: any) => {
	if (window.matchMedia("(min-width: 660px)").matches)
		$slider.find("video[data-desktop-src]").each(function(){
			const $this = window.get$(this);

			if ($this.attr("src") == $this.attr("data-desktop-src"))
				return

			$this.attr("autoplay", true)
			$this.attr("src", $this.attr("data-desktop-src"))
			$this.attr("poster", $this.attr("data-desktop-poster"))
		})
	else
		$slider.find("video[data-mobile-src]").each(function(){
			const $this = window.get$(this);

			if ($this.attr("src") == $this.attr("data-mobile-src"))
				return

			$this.attr("autoplay", true)
			$this.attr("src", $this.attr("data-mobile-src"))
			$this.attr("poster", $this.attr("data-mobile-poster"))
		})
},
startMainSliderVideo = (video: HTMLVideoElement, $slider: any) => {
	$slider.find("video").each(function(){
		this.pause()
	})

	if (!video){
		// setTimeout(function(){
		// 	$slider[0].swiper.slideNext()
		// }, 2000)

		return
	}


	video.addEventListener("ended", function(){
		$slider[0].swiper.slideNext()
	})

	video.play()
}