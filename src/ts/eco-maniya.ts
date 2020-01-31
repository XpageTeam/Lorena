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

window.addEventListener("load", function(){
	this.document.body.classList.add("eco-loaded");
});

App.domReady(() => {
	const toSliders = App.transformNodeListToArray(document.querySelectorAll(".to-slider")),
		sliderArray: Array<Swiper> = [],
		starter = document.querySelector(".tos-starter__img") as HTMLElement,
		sliderBtns = App.transformNodeListToArray(document.querySelectorAll(".answer-btn"));

	if (!toSliders.length) return;

	// const slidesCount = toSliders[0].querySelectorAll(".swiper-slide").length;

	for (const slider of toSliders){		
		sliderArray.push(new Swiper(slider, {
			slidesPerView: 1,
			direction: "vertical",
			noSwiping: true,
			allowTouchMove: false,
			simulateTouch: false,
			speed: 1000,
		}));
	}

	if (!starter) return;

	let selectedAnswers = 0,
		yesAnswers = 0,
		canTurnStarter = false;

	const toLevelBtn = document.querySelector(".turn-on__button .default-btn") as HTMLElement,
		curCounter = document.querySelector(".to-counter__current") as HTMLElement;

	let stupidCounter = 0;
	starter.addEventListener("click", async function(){
		if (selectedAnswers == 9){
			toLevelBtn.click();

			return;
		}

		if (!canTurnStarter){
			stupidCounter++;

			if (stupidCounter >= 3){
				window.get$(".turn-on__notice").stop().fadeIn(300);

				setTimeout(function(){
					window.get$(".turn-on__notice").fadeOut(300);
				}, 1500)
			}

			window.get$(".to-sliders").removeClass("js__highlighting");

			setTimeout(function(){
				window.get$(".to-sliders").addClass("js__highlighting")
			},100)

			return;
		}

		canTurnStarter = false;
		
		window.get$(".turn-on__notice").fadeOut(300);
		stupidCounter = 0;
		
		if (sliderArray[0].isEnd)
			return;

		// starterTurnCounter++;

		this.classList.add("js__active");

		for (const btn of sliderBtns)
			btn.classList.remove("selected");

		// curCounter.innerText = (starterTurnCounter * 3).toString();

		// selectedAnswers = 0;
		toLevelBtn.classList.remove("js__visible");
		window.get$(".eco-maniya__level").fadeOut(100);

		// let i = 0;
		// for await (const slider of sliderArray){
		// 	const promise = new Promise((resolve, reject) => {

		// 		setTimeout(() => {
		// 			function setRandomInt(){
		// 				const randomNumber = randomInt(0, slidesCount);

		// 				if (!targetSlidesArray.includes(randomNumber) && slider.activeIndex != randomNumber){
		// 					targetSlidesArray[i] = randomNumber;
		// 					i++;
		// 				}else
		// 					setRandomInt()
		// 			}

		// 			setRandomInt();

		// 			resolve();
		// 		}, 50);
		// 	});

		// 	await promise;
		// }

		setTimeout(async () => {
			this.classList.remove("js__active");
			
			for await (const slider of sliderArray){
				const promise = new Promise((resolve, reject) => {

					setTimeout(() => {
						slider.slideNext();

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
			
			// if (selectedAnswers == 3)
			// 	toLevelBtn.classList.add("js__visible");
			// else
			// 	toLevelBtn.classList.remove("js__visible");

			curCounter.innerText = selectedAnswers.toString();

			if (selectedAnswers
				== parseInt((document.querySelector(".to-counter__total") as HTMLElement).innerText.split(" ")[2]))
				toLevelBtn.classList.add("js__visible");

			if (selectedAnswers % 3 == 0)
				canTurnStarter = true;
		});

	toLevelBtn.addEventListener("click", function(){
		window.get$(".eco-maniya__level").fadeIn(100);

		window.get$("html, body").animate({
			scrollTop: window.get$(".eco-maniya__level").offset().top
				 - window.get$("header").height()
		}, 300)

		const levelBlocks = App.transformNodeListToArray(document.querySelectorAll(".eco-level"));

		for (const level of levelBlocks){
			// console.log(parseInt(level.getAttribute("data-min")), yesAnswers, parseInt(level.getAttribute("data-max")));
			
			if (parseInt(level.getAttribute("data-min")) <= yesAnswers && parseInt(level.getAttribute("data-max")) >= yesAnswers){
				window.get$(level).show();
				break;
			}
		}

		// window.get$(`.eco-level:not([data-level='${yesAnswers}'])`).hide();

		// window.get$(`.eco-level[data-level='${yesAnswers}']`).show();
	})
});