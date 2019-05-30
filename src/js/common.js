import $ from "jquery"
// import is from "is_js"
import stringEffect from "./stringAnimate.js"
import "./select2.js"

window.$ = $;
window.jQuery = $;

try{
	document.addEventListener("DOMContentLoaded", e => {
		require("./jquery.fancybox.js")
		let isFancyboxCssRequired = false;

		$(".fancybox").fancybox({
			trapFocus: false,
			touch: false,
			loop: true,
			buttons: ["fullscreen", "slideShow", "close"],
			beforeShow(){
				if (!isFancyboxCssRequired){
					require("../css/jquery.fancybox.css")
					isFancyboxCssRequired = true
				}
			},
			beforeClose(instance, slide){

			},
			image: {
				preload: true,
			},
			transitionEffect: "slide",
		})
		
		$(".main-slide__title-title").each((i, el) => {
			new stringEffect({
				selector: el,
			});
		});

		$("select:not(.no-selectize)").each(function(){
			$(this).select2({
				minimumResultsForSearch: Infinity,
				placeholder: $(this).data("placeholder"),
				templateResult: selectionTemplate,
				templateSelection: selectionTemplate
			})
		})

		$(".address-slider__slide").fancybox({
			trapFocus: false,
			touch: false,
			loop: true,
			buttons: ["fullscreen", "slideShow", "close"],
			beforeShow(){
				if (!isFancyboxCssRequired){
					require("../css/jquery.fancybox.css")
					isFancyboxCssRequired = true
				}
			},
			beforeClose(instance, slide){
				const slider = document.querySelector(".address.active .address-slider");

				if (!slider)
					return

				slider.swiper.slideTo(slide.index)
			},
			image: {
				preload: true,
			},
		})

		/** Клик по вариантам исполнения в адаптив */
		$(".variants-plates__one").click(function(){
			if (!window.matchMedia("(max-width: 1000px)").matches)
				return

			const index = $(this).index(),
				$variantsContainer = $(this).closest(".variants-list");

			$variantsContainer.find(`.variants-slider__slide:eq(${index})`).click()
		})
	})
}catch(e){
	console.log(e)
}

try{
	document.addEventListener("DOMContentLoaded", e => {
		const body = document.body;

		$(window).on("load scroll touchmove resize", function(){
			if (body.scrollHeight > 2000 && !document.querySelector(".scroller")){
				$("body").append('<div class="scroller"><div class="scroller__progress"></div></div>')
			}

			$(".scroller__progress").width((window.scrollY / (body.scrollHeight - window.innerHeight) * 100) + "%")
		})
	})
}catch(e){
	console.log(e)
}

const selectionTemplate = state => {
	if(!state.element)
		return

	const count = state.element.getAttribute("data-count");

	if (count)
		return $(`<span class='option__text'>${state.text} </span><span class='option__count'> /&nbsp;&nbsp;${count}</span>`)
	else
		return state.text
}