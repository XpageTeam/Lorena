import {App, Element, EventListener } from "./app"
import {Swiper, Lazy, Keyboard, Navigation} from "swiper/dist/js/swiper.esm"

Swiper.use([Lazy, Keyboard, Navigation])

declare global {
    interface Window {moveCareerForm: Function; }
}

App.domReady(() => {
	new Swiper(".career-slider", {
		slidesPerView: 3,
		loop: true,
		spaceBetween: 32,
		lazy: {
			loadPrevNext: true,
			loadPrevNextAmount: 3
		},
		keyboard: {
			enabled: true,
			onlyInViewport: true,
		},
		navigation: {
			nextEl: '.career-slider__arrows .swiper-button-next',
			prevEl: '.career-slider__arrows .swiper-button-prev',
		},
		breakpoints: {
			1000: {
				slidesPerView: 2,
				spaceBetween: 20,
			},
			660: {
				slidesPerView: 1,
				spaceBetween: 20,
			}
		}
	})
})

App.domReady(() => {
	const vacancyList = new Element(".vacancy__title");

	new EventListener(vacancyList).add("click", (el: HTMLElement) => {
		const $this = new Element(el).closest(".vacancy");

		if ($this.hasClass("js__opened")){
			$this.removeClass("js__opened")
		}else{
			new Element(".vacancy.js__opened").removeClass("js__opened")
			$this.addClass("js__opened")

			window.moveCareerForm($this.find(".vacancy-form").get(0).els[0])

			new EventListener($this.find(".vacancy-form").get(0).els[0].querySelector(".default-input__input--file")).add("change", (el: HTMLInputElement) => {
				const parent = el.closest(".default-input--file"),
					fileNameField = parent.querySelector(".default-input__label--file");

				if (el.files.length){
					let names = [];

					for (let i = 0; i < el.files.length; i++)
						names.push(el.files[i].name)

					fileNameField.setAttribute("data-text", names.join(", "))
				}else{
					fileNameField.setAttribute("data-text", "Файл не выбран")
				}
			})
		}
	})

	new Element(".cities-list .city.active").closest(".cities-list__item").addClass("active")

	new EventListener(".cities-list .city").add("click", (el: HTMLElement, event: Event) => {
		const $this = new Element(el),
			index = el.getAttribute("data-id")

		event.preventDefault()

		if ($this.hasClass("active")){
			if (window.matchMedia("(max-width: 660px)").matches)
				$this.closest(".c-vacancy__cities").toggleClass("js__opened")
			return
		}else if (window.matchMedia("(max-width: 660px)").matches)
			$this.closest(".c-vacancy__cities").removeClass("js__opened")

		new Element(".cities-list .city.active, .vacancy-list.active").addElement(".cities-list__item.active").removeClass("active")

		$this.addElement(`.vacancy-list[data-id='${index}']`).addElement($this.closest(".cities-list__item")).addClass("active")

	})
})