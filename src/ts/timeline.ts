import {Swiper, Keyboard, Navigation} from 'swiper/dist/js/swiper.esm.js'
import {App} from "./app"
import {TweenLite} from "gsap"

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
		loopedSlides: 4,
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


	;(function(){
		const timelineSlides = document.querySelectorAll(".time-line .time-line__item");

		if (!timelineSlides.length)
			return

		App.each(timelineSlides, (el: HTMLElement) => {
			TweenLite.set(el, {
				opacity: 0
			})
		})

		const timeline = document.querySelector(".time-line");
		timeline.classList.add("js__ready-for-animate")

		const showSlides = () => {
			timeline.classList.add("js__animating")

			App.each(timelineSlides, (el: HTMLElement, i: number) => {
				TweenLite.to(el, .3, {
					opacity: 1,
					delay: !i ? i : i / 3
				})
			})
		};



		if (window.isScrolledIntoView(timeline))
			showSlides()

		window.addEventListener("scroll", () => {
			if (window.isScrolledIntoView(timeline))
				showSlides()
		})

		window.addEventListener("resize", () => {
			if (window.isScrolledIntoView(timeline))
				showSlides()
		})
	})()
})


/** Тут задаётся прозрачность слайдам */
const setOpacity = () => {

	if (!document.querySelector(".time-line"))
		return
	
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