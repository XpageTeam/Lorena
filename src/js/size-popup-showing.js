import Cookies from "js-cookie";
import $ from "jquery";

document.addEventListener("DOMContentLoaded", function(){

	if (
		!Cookies.get("home-popup-visible-new")
		&& document.querySelector("#popup-size")
	)

		setTimeout(() => {
			
			$.fancybox.open({
				src: "#popup-size",
				afterShow(){
					Cookies.set("home-popup-visible-new", "1");
				}
			});
		}, 300);
	else{
		let visibleCounter = parseInt(Cookies.get("home-popup-visible-new"));

		Cookies.remove("home-popup-visible-new", {path: ""});

		if (visibleCounter < 4){
			visibleCounter++;
			Cookies.set("home-popup-visible-new", visibleCounter);
		}
	}
});