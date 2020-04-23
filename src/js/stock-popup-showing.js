import Cookies from "js-cookie";
import $ from "jquery";

document.addEventListener("DOMContentLoaded", function(){
	if (
		!Cookies.get("stay-home-popup-showed")
		&& document.querySelector("#popup-stocks")
	)
		setTimeout(() => {
			$.fancybox.open({
				src: "#popup-stocks",
				beforeShow(){
					document.body.classList.add("js__stock-popup_showed");
				},
				afterClose(){
					document.body.classList.remove("js__stock-popup_showed");
					Cookies.set("stay-home-popup-showed", "true");
				}
			});

			const popupLink = document.querySelector(".popup-stocks__link");

			if (!popupLink) return;
			
			popupLink.addEventListener("click", () => {
				Cookies.set("stay-home-popup-showed", "true");
			});
		}, 300)

});