import {Swiper, Lazy, Autoplay, Pagination, Keyboard, Navigation} from 'swiper/dist/js/swiper.esm.js'
import { App } from './app';

Swiper.use([Lazy, Autoplay, Pagination, Keyboard, Navigation]);

App.domReady(() => {
	new Swiper(".ms", {
		keyboard: {
			enabled: true,
			onlyInViewport: true
		},
		lazy: {
			loadOnTransitionStart: true,
			loadPrevNext: true,
		},
		autoplay: {
			delay: 5000,
			disableOnInteraction: false,
		},
		loop: true,
		pagination: {
			el: ".ms__counter-content .swiper-pagination",
			type: "fraction"
		},
		navigation: {
			prevEl: ".ms__counter-content .swiper-button-prev",
			nextEl: ".ms__counter-content .swiper-button-next"
		}
	});
});