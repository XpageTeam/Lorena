import Cookies from "js-cookie";
import $ from "jquery";

document.addEventListener("DOMContentLoaded", function(){

	if (
		!Cookies.get("home-popup-visible")
		&& document.querySelector("#popup-size")
	)

		setTimeout(() => {
			
			$.fancybox.open({
				src: "#popup-size",
				afterShow(){
					Cookies.set("home-popup-visible", "true");
				},
				// afterClose(){
				// 	Cookies.set("home-popup-visible", "true");
				// }
			});

			// const popupLink = document.querySelector(".popup-size a");
			// const fancyboxClose = document.querySelector(".fancybox-close-small");

			// popupLink.addEventListener("click", () => {
			// 	console.log(1)
			// 	Cookies.set("home-popup-visible", "true");
			// });

			// fancyboxClose.addEventListener("click", () => {
			// 	Cookies.set("home-popup-visible", "true");
			// })
		}, 300)
});