import "./tovar"
import "./timeline"
import "./standart-page"
import "./useful"
import "./addresses"
import "./partners"
import "./career"
import "./forms"
import "./reviews"
import "./advantages"
import "./nav-scrolling"
import {App, Element, MobileMenu, EventListener} from "./app"

const adaptiveMedia = "(max-width: 1200px)";

App.domReady(() => {
	new MobileMenu({
		burger: ".head__burger",
		menu: ".side-menu",
		menuActiveClass: "js__opened",
		bodyActiveClass: "js__menu__opened",
		ignoreWarnings: false,
		fixBody: true,
		media: adaptiveMedia
	})

	const sideMenu = new Element(".side-menu");

	new EventListener(".h-menu__item--have-sub > a").add("click", (el: HTMLElement, event: Event) => {
		if (!window.matchMedia(adaptiveMedia).matches)
			return

		const parentEl = new Element(el).closest(".h-menu__item--have-sub").addClass("js__submenu-opened")
		sideMenu.addClass("js__submenu-opened")

		event.preventDefault()
	})

	new EventListener(".h-submenu__close").add("click", (el: HTMLElement, event: Event) => {
		if (!window.matchMedia(adaptiveMedia).matches)
			return
		
		const parentEl = new Element(el).closest(".h-menu__item--have-sub").removeClass("js__submenu-opened")
		sideMenu.removeClass("js__submenu-opened")

		event.preventDefault()
	})
})