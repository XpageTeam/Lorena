import $ from "jquery"
// import is from "is_js"
import stringEffect from "../js/stringAnimate.js"
import "select2/dist/js/select2.js"


window.$ = $;
window.jQuery = $;

try{
	document.addEventListener("DOMContentLoaded", e => {
		// require("./jquery.fancybox.js")
		// require("../css/jquery.fancybox.css")
		
		$(".main-slide__title-title").each((i, el) => {
			new stringEffect({
				selector: el,
			});
		});

		$("select:not(.no-selectize)").each(function(){
			const $this = $(this);

			$this.select2({
				placeholder: $this.data("placeholder") || "",
				templateResult: selectionTemplate,
				templateSelection: selectionTemplate
			})
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