import * as $ from "jquery"
// import is from "is_js"w

// import "selectize/dist/js/selectize.min.js"

// import "slick-carousel"
// import "./standart-page.js"
// import "./main-page.js"

// import "./forms.js"

interface projectWindow extends Window{
	$: any
	jQuery: any
}

declare let window: projectWindow

window.$ = $;
window.jQuery = $;


// let scrollTimeout;

document.addEventListener("DOMContentLoaded", e => {
	
})