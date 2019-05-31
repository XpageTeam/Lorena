import {App, Element, EventListener} from "./app"

App.domReady(() => {
	if (!document.querySelector(".rev-list.load--more_list"))
		return

	makeEvent()
 
	// создаём экземпляр MutationObserver
	const observer = new MutationObserver(function(mutations) {
	  mutations.forEach(function(mutation) {
	    makeEvent()
	  })
	});
	 
	// конфигурация нашего observer:
	const config = { attributes: false, childList: true, characterData: false };
	 
	// передаём в качестве аргументов целевой элемент и его конфигурацию
	observer.observe(document.querySelector(".rev-list.load--more_list"), config)
	 
	// позже можно остановить наблюдение
	// observer.disconnect()
})

const makeEvent = () => {
	new EventListener(".rev-more a").add("click", (el: HTMLElement, e: Event) => {
		const $this = new Element(el).closest(".review");

		e.preventDefault()
		if ($this.hasClass("js__opened")){
			$this.removeClass("js__opened")

			$this.find(".rev-more a").text("Читать весь отзыв")
		}else{
			new Element(".review.js__opened").removeClass("js__opened").find(".rev-more a").text("Читать весь отзыв")
			$this.addClass("js__opened")
			$this.find(".rev-more a").text("Свернуть отзыв")
		}

		el.blur()

	})
}