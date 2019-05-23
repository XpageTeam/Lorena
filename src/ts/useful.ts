import {App, Element, EventListener} from "./app"

App.domReady(() => {
	const titles = new Element(".useful-item__title");

	new EventListener(titles).add("click", (el: HTMLElement) => {
		titles.closest(".useful-item").removeClass("active")

		new Element(el).closest(".useful-item").addClass("active")
	})
})