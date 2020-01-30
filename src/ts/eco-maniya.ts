import { App } from "./app";
import {Swiper, Navigation, Autoplay, Keyboard} from 'swiper/dist/js/swiper.esm.js'
import randomInt from "./functions/randomInt";
import { promises } from "fs";

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
		},
		breakpoints: {
			1000: {
				slidesPerView: 3,
				spaceBetween: 20
			},
			660: {
				slidesPerView: 2,
				spaceBetween: 20
			}
		}
	});
});

App.domReady(() => {
	const toSliders = App.transformNodeListToArray(document.querySelectorAll(".to-slider")),
		sliderArray: Array<Swiper> = [],
		starter = document.querySelector(".tos-starter__img") as HTMLElement,
		sliderBtns = App.transformNodeListToArray(document.querySelectorAll(".answer-btn"));

	if (!toSliders.length) return;

	const slidesCount = toSliders[0].querySelectorAll(".swiper-slide").length;

	let counter = 0;

	for (const slider of toSliders){		
		sliderArray.push(new Swiper(slider, {
			slidesPerView: 1,
			initialSlide: counter,
			direction: "vertical",
			noSwiping: true,
			allowTouchMove: false,
			simulateTouch: false,
			loop: true,
			speed: 1000,
		}));

		counter++;
	}

	if (!starter) return;

	let targetSlidesArray: Array<number> = [],
		selectedAnswers = 0,
		yesAnswers = 0;

	const toLevelBtn = document.querySelector(".turn-on__button .default-btn") as HTMLElement;

	starter.addEventListener("click", async function(){
		this.classList.add("js__active");

		for (const btn of sliderBtns)
			btn.classList.remove("selected");

		selectedAnswers = 0;
		yesAnswers = 0;
		toLevelBtn.classList.remove("js__visible");
		window.get$(".eco-maniya__level").fadeOut(100);

		let i = 0;
		for await (const slider of sliderArray){
			const promise = new Promise((resolve, reject) => {

				setTimeout(() => {
					function setRandomInt(){
						const randomNumber = randomInt(0, slidesCount);

						if (!targetSlidesArray.includes(randomNumber) && slider.activeIndex != randomNumber){
							targetSlidesArray[i] = randomNumber;
							i++;
						}else
							setRandomInt()
					}

					setRandomInt();

					resolve();
				}, 50);
			});

			await promise;
		}

		setTimeout(async () => {
			this.classList.remove("js__active");
			
			let i = 0;
			for await (const targetSlideNumber of targetSlidesArray){
				const promise = new Promise((resolve, reject) => {

					setTimeout(() => {
						const slider = sliderArray[i];

						slider.slideToLoop(targetSlidesArray[i]);

						i++;

						resolve();
					}, 200)
				});

				await promise;
			}
		}, 400);
	});

	for (const btn of sliderBtns)
		btn.addEventListener("click", function(){
			if (this.classList.contains("selected")) return;

			let anotherBtn;



			if (this.classList.contains("answer-btn--yes")){
				yesAnswers++;
				anotherBtn = btn.closest(".to-answers").querySelector(".answer-btn--no");
			}else{
				anotherBtn = btn.closest(".to-answers").querySelector(".answer-btn--yes");

				if (anotherBtn.classList.contains("selected"))
					yesAnswers--;
			}

			if (!anotherBtn.classList.contains("selected"))
				selectedAnswers++;
			else{
				anotherBtn.classList.remove("selected");
			}

			this.classList.add("selected")
			
			if (selectedAnswers == 3)
				toLevelBtn.classList.add("js__visible");
			else
				toLevelBtn.classList.remove("js__visible");
		});

	toLevelBtn.addEventListener("click", function(){
		window.get$(".eco-maniya__level").fadeIn(100);

		window.get$("html, body").animate({
			scrollTop: window.get$(".eco-maniya__level").offset().top
				 - window.get$("header").height()
		}, 300)

		window.get$(`.eco-level:not([data-level='${yesAnswers}'])`).hide();

		window.get$(`.eco-level[data-level='${yesAnswers}']`).show();
	})
});