import {App, Element, EventListener} from "./app"

App.domReady(() => {
	new EventListener(".rev-more a").add("click", (el: HTMLElement, e: Event) => {
		const $this = new Element(el).closest(".review");

		if ($this.hasClass("js__opened")){
			$this.removeClass("js__opened")
		}else{
			new Element(".review.js__opened").removeClass("js__opened")
			$this.addClass("js__opened")
		}

		e.preventDefault()
	})
})