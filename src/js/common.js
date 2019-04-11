import $ from "jquery"
// import is from "is_js"
import stringEffect from "../js/stringAnimate.js"


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
})