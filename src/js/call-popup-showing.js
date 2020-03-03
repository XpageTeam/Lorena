/**
 * Здесь вызывается кслик по кнопке 
 * "заказать звонок" (фиксированая кнопка справа снизу)
*/

import Cookies from "js-cookie";

document.addEventListener("DOMContentLoaded", () => {
	const formId = "#popup-callorder";

	if (!Cookies.get("isCallPopupShowed")){
		const targetBtn = document.querySelector(`.btn-fix[href='${formId}']`);

		if (!targetBtn || !document.querySelector(formId)) return;

		const callPopupShowingTimeout = setInterval(() => {
			$.fancybox.open({
				src: formId,
				afterClose(){
					Cookies.set("isCallPopupShowed", "1", {expires: 30});
				}
			});
		}, 30000);

		targetBtn.addEventListener("click", function(){
			clearTimeout(callPopupShowingTimeout);
		});
	}
});