import $ from "jquery"
// import is from "is_js"
import stringEffect from "../js/stringAnimate.js"
import "select2/dist/js/select2.js"


window.$ = $;
window.jQuery = $;

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
		})
	})
})