import { App } from "./app";
import {Swiper, Navigation, Autoplay, Keyboard} from 'swiper/dist/js/swiper.esm.js'

Swiper.use([Navigation, Autoplay, Keyboard]);

App.domReady(() => {
	const ecoSlider = document.querySelector(".es-slider");

	if (!ecoSlider) return;

	new Swiper(ecoSlider as HTMLElement, {
		slidesPerView: 4,
		spaceBetween: 45,
		loop: true,
		keyboard: {
			enabled: true,
			onlyInViewport: true
		},
		navigation: {
			prevEl: ecoSlider.querySelector(".swiper-button-prev") as HTMLElement,
			nextEl: ecoSlider.querySelector(".swiper-button-next") as HTMLElement
		}
	});
});