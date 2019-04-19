import {Swiper, Lazy, EffectFade} from 'swiper/dist/js/swiper.esm.js'

import {App} from "./app"
import {TweenLite} from "gsap"

Swiper.use([Lazy, EffectFade])

App.domReady(() => {
	;(function(){
		// let flag: boolean = false;

		const mainSlider: Swiper = new Swiper(".main-slider", {
			loop: true,
			effect: "fade",
			speed: 600,
			// followFinger: false,
			// allowTouchMove: false,
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
				}
			}
		});
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