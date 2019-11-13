import {App, Element, EventListener} from "./app";

const moreRevLinkSelector = ".rev-more a";

App.domReady(() => {
	if (!document.querySelector(".rev-list.load--more_list"))
		return

	const moreRevLinks = App.transformNodeListToArray(
		document.querySelectorAll(moreRevLinkSelector)
	);

	for (const moreLink of moreRevLinks)
		makeEvent(moreLink);
 
	// создаём экземпляр MutationObserver
	const observer = new MutationObserver(function(mutations) {
	  mutations.forEach(function(mutation) {
		  const addedNodes = App.transformNodeListToArray(mutation.addedNodes);

		  for (const node of addedNodes)
		  	makeEvent(node.querySelector(moreRevLinkSelector));
	  })
	});
	 
	// конфигурация нашего observer:
	const config = { childList: true };
	 
	// передаём в качестве аргументов целевой элемент и его конфигурацию
	observer.observe(document.querySelector(".rev-list.load--more_list"), config)
	 
	// позже можно остановить наблюдение
	// observer.disconnect()
})

const makeEvent = (selector: HTMLElement) => {
	new EventListener(selector).add("click", (el: HTMLElement, e: Event) => {
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