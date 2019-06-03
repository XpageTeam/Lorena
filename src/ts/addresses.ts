import {App, Element, EventListener} from "./app"
import {Swiper, Lazy, EffectFade} from "swiper/dist/js/swiper.esm"
import {TweenLite} from "gsap"

Swiper.use([Lazy, EffectFade])

App.domReady(() => {
	new EventListener(".address__top").add("click", (el: HTMLElement) => {

		const $this = new Element(el).closest(".address");

		if ($this.hasClass("active")){
			$this.removeClass("active")
		}else{
			new Element(".address.active").removeClass("active")
			$this.addClass("active")
			initiallizeVariantsSlider(el.closest(".address").querySelector(".active .address-slider:not(.swiper-container-initialized)"))
		}

	})

	initiallizeVariantsSlider(document.querySelector(".address.active .active .address-slider:not(.swiper-container-initialized)"))
})

App.domReady(() => {
	new EventListener(".address-detail__btn .gray-arrow-btn").add("click", (el: HTMLElement) => {
		const tab = el.closest(".address-tabs__tab"),
			index = tab.getAttribute("data-id"),
			$tab = new Element(tab);

		if ($tab.hasClass("active"))
			return

		$tab.closest(".address__content").find(".active").removeClass("active")

		$tab.addElement($tab.closest(".address__content").find(`.address-desc[data-id="${index}"]`)).addClass("active")

		initiallizeVariantsSlider(document.querySelector(".address.active .active .address-slider:not(.swiper-container-initialized)"))
	})
})

const initiallizeVariantsSlider = (slider: HTMLElement) => {
	if (!slider)
		return

	new Swiper(slider, {
		effect: "fade",
		cubeEffect: {
		    slideShadows: false,
		},
		lazy: {
			loadPrevNext: true,
			loadPrevNextAmount: 1
		},
	})
};

App.domReady(() => {
	App.each(".adr-counter__number", (el: HTMLElement) => {
		let counter = {count: 0};

		el.style.width = getComputedStyle(el).width

		TweenLite.to(el, 2, {
			opacity: 1
		})		

		TweenLite.to(counter, 10, {
			count: `+=${el.innerText}`,
			onUpdate(){
				el.innerText = Math.ceil(counter.count).toString()
			}
		})
	})

})