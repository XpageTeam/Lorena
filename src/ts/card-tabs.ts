import { EventListener } from "./app";

document.addEventListener("DOMContentLoaded", () => {
	// const tabs = document.querySelectorAll(".card-tabs__tabs-tab");

	// if (!tabs.length) return;

	// tabs.forEach((tab: HTMLElement) => {
	// 	туц 
	// });

	new EventListener(".card-tabs__tabs-tab").add("click", function(el: HTMLElement, e: Event) {
		if (el.classList.contains("active")) return;

		const targetTab = el,
			targetTabID = el.getAttribute("data-id"),
			targetTabContent = document.querySelector(`.ct-content__item[data-id="${targetTabID}"]`);

		const curActiveTab = document.querySelector(".card-tabs__tabs-tab.active"),
			curActiveTabID = curActiveTab.getAttribute("data-id"),
			curTabContent = document.querySelector(`.ct-content__item[data-id="${curActiveTabID}"]`);

		curActiveTab.classList.remove("active");
		curTabContent.classList.remove("active");

		targetTab.classList.add("active");
		targetTabContent.classList.add("active");
	});

	new EventListener(".features__row--marked").add("click", function(el: HTMLElement, e: Event){
		el.classList.toggle("js__opened");
	});
});