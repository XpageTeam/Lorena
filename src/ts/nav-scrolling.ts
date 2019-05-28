import {App, EventListener} from "./app"

interface Shadows {
	right: HTMLElement,
	left?: HTMLElement
}

App.domReady(() => {
	const shadows: Shadows = {
		right: document.createElement("div"),
		left: document.createElement("div"),
	};

	shadows.right.classList.add("title-menu__shadow")
	shadows.right.classList.add("title-menu__shadow--right")	

	shadows.left.classList.add("title-menu__shadow")
	shadows.left.classList.add("title-menu__shadow--left")

	App.each(".title-block__menu", (el: HTMLElement) => {
		el.insertBefore(shadows.left, el.querySelector("*:first-child"))
		el.insertBefore(shadows.right, null)
	})

	App.each(".title-menu", function(track: HTMLElement){
		if (track.scrollWidth > track.clientWidth){
			let wrap = track.closest(".title-block__menu");

			let shadows: Shadows = {
				right: wrap.querySelector(".title-menu__shadow--right")
			};

			setShadowOpacity(shadows.right, track.scrollWidth - track.clientWidth)
		}

		new EventListener(track).add("scroll", function(el: HTMLElement){
			let wrap = el.closest(".title-block__menu");

			let shadows: Shadows = {
				left: wrap.querySelector(".title-menu__shadow--left"),
				right: wrap.querySelector(".title-menu__shadow--right")
			};

			setShadowOpacity(shadows.right, el.scrollWidth - el.clientWidth - el.scrollLeft)
			setShadowOpacity(shadows.left, el.scrollLeft)
		})
	})
})

const setShadowOpacity = (element:HTMLElement, scrollWidth: number, offsetWidth: number = 80) => {
	element.style.opacity = (scrollWidth / offsetWidth <= 1 ? scrollWidth / offsetWidth : 1).toString()
}