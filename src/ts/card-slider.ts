import {Swiper, Navigation, Autoplay, Pagination} from 'swiper/dist/js/swiper.esm';

Swiper.use([Navigation, Autoplay, Pagination]);

document.addEventListener("DOMContentLoaded", function(){
	document.querySelectorAll(".hit-slider").forEach((item: HTMLElement) => {
		new Swiper(item.querySelector(".hit-slider__slider") as HTMLElement, {
			slidesPerView: 4,
			autoplay: true,
			spaceBetween: 44,
			navigation: {
				prevEl: item.querySelector(".swiper-button-prev") as HTMLElement,
				nextEl: item.querySelector(".swiper-button-next") as HTMLElement
			}
		});
	});
});