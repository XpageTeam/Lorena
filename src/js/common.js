import $ from "jquery"
import is from "is_js"
import stringEffect from "./stringAnimate.js"
import "./select2.js"
import Cookies from "js-cookie";

window.$ = $;
window.jQuery = $;
window.Cookies = Cookies;
window.is = is;

window.get$ = function(el){
	return $(el)
}

window.animateScroll = function(offset = 20){
	$("html, body").animate({
		scrollTop: (document.body.classList.contains("main") || document.body.classList.contains("tovar")) ? 
			(window.matchMedia("(max-width: 1200px)").matches ? offset - parseInt(getComputedStyle(document.querySelector(".head")).height) - 40 : offset) 
		: offset - parseInt(getComputedStyle(document.querySelector(".head")).height)
	})
}

window.isScrolledIntoView = elem =>{
    var docViewTop = $(window).scrollTop();
    var docViewBottom = docViewTop + window.innerHeight;

    var elemTop = $(elem).offset().top;
    var elemBottom = elemTop + 10;

    return ((elemBottom <= docViewBottom) && (elemTop >= docViewTop));
}

window.moveCareerForm = function(appendTo){
	// $("#form-about-career select.select2-hidden-accessible").select2('destroy');

	// const $cloneForm = $("#form-about-career").clone();

	// $("#form-about-career").remove();

	// $(appendTo).append($cloneForm)

	// $("#form-about-career select").each(function(){
	// 	if (!is.touchDevice()){
	// 		$(this).removeClass("select2-hidden-accessible")
	// 		$(this).select2({
	// 			minimumResultsForSearch: Infinity,
	// 			placeholder: $(this).data("placeholder"),
	// 			templateResult: selectionTemplate,
	// 			templateSelection: selectionTemplate
	// 		})
	// 		// $(this).on("select2:select", function(e){
	// 		// 	const parentFormVue = e.currentTarget.__vue__ || false;

	// 		// 	if (!parentFormVue)
	// 		// 		return

	// 		// 	parentVue['set '+e.currentTarget.getAttribute("data-v-model")](e.currentTarget.value)
	// 		// })
	// 	}else
	// 		$(this).addClass("selectized")
	// })
	
	appendTo.appendChild(document.createElement("div"));

	$(appendTo).find("div").replaceWith($("#form-about-career"))
}

window.reinitSelect2 = function(formId, vue = false){
	$(`${formId} .select2-container`).remove()
	$(`${formId} select`).each(function(){
		if (!is.touchDevice()){
			$(this).removeClass("select2-hidden-accessible")

			const self = this;

			$(this).select2({
				minimumResultsForSearch: Infinity,
				placeholder: $(this).data("placeholder"),
				templateResult: selectionTemplate,
				templateSelection: selectionTemplate,
				language: {
					noResults(){
						return $(self).attr("data-v-model") == 'selectShop' ? "Сначала выберите город" : "Нет информации для отображения"
					}
				}
			})

			if (vue)
				$(this).on("select2:select", function(e){
					vue[e.currentTarget.getAttribute("data-v-model")] = e.currentTarget.value
				})
		}else
			$(this).addClass("selectized")
	})
}

;(function() {

  // проверяем поддержку
  if (!Element.prototype.matches) {

    // определяем свойство
    Element.prototype.matches = Element.prototype.matchesSelector ||
      Element.prototype.webkitMatchesSelector ||
      Element.prototype.mozMatchesSelector ||
      Element.prototype.msMatchesSelector;

  }

})();

(function() {

  // проверяем поддержку
  if (!Element.prototype.closest) {

    // реализуем
    Element.prototype.closest = function(css) {
      var node = this;

      while (node) {
        if (node.matches(css)) return node;
        else node = node.parentElement;
      }
      return null;
    };
  }

})();

const checScrollIntoView = () => {
	$(".about-text__desc:not(.js__show), .cw-item:not(.js__show), \
		.mission:not(.js__show), .timeline:not(.js__show)").each(function(){
		if (isScrolledIntoView(this))
			$(this).addClass("js__show")
	})
};

try{
	document.addEventListener("DOMContentLoaded", e => {
		require("./jquery.fancybox.js")
		require("../css/jquery.fancybox.css")

		checScrollIntoView()

		$(window).scroll("scroll resize", checScrollIntoView)

		$(".fancybox").fancybox({
			trapFocus: false,
			touch: false,
			loop: true,
			buttons: ["fullscreen", "slideShow", "close", "thumbs"],
			image: {
				preload: true,
			},
			transitionEffect: "slide",
		})

		$(".fancybox-map").fancybox({
			trapFocus: false,
			touch: false,
			buttons: ["fullscreen", "close"],
			beforeShow(){
				$("body").addClass("js__fancybox-map")
			},
			afterClose(){
				$("body").removeClass("js__fancybox-map")
			}
		})
		
		$(".main-slide__title-title, \
			.for-about .about-img__text-title,\
			.for-about .adr-text__title,\
			.for-about .mission-desc__title-title").each((i, el) => {
			new stringEffect({
				selector: el,
			});
		});

		$("select:not(.no-selectize)").each(function(){
			if (!is.touchDevice()){
				const self = this;
				$(this).select2({
					minimumResultsForSearch: Infinity,
					placeholder: $(this).data("placeholder"),
					templateResult: selectionTemplate,
					templateSelection: selectionTemplate,
					language: {
						noResults(){
							return $(self).attr("data-v-model") == 'selectShop' ? "Сначала выберите город" : "Нет информации для отображения"
						}
					}
				})
				// $(this).on("select2:select", function(e){
				// 	const parentFormVue = e.currentTarget.__vue__ || false;

				// 	if (!parentFormVue)
				// 		return

				// 	parentVue['set '+e.currentTarget.getAttribute("data-v-model")](e.currentTarget.value)
				// })
			}else
				$(this).addClass("selectized")
		})

		$(".address-slider__slide").fancybox({
			trapFocus: false,
			touch: false,
			loop: true,
			buttons: ["fullscreen", "slideShow", "close"],
			beforeClose(instance, slide){
				const slider = document.querySelector(".address.active .address-slider");

				if (!slider)
					return

				slider.swiper.slideTo(slide.index)
			},
			image: {
				preload: true,
			},
		})

		$(".career-slider__slide").fancybox({
			trapFocus: false,
			touch: false,
			loop: true,
			buttons: ["fullscreen", "slideShow", "close"],
			beforeClose(instance, slide){
				
			},
			image: {
				preload: true,
			},
		})

		/** Клик по вариантам исполнения в адаптив */
		$(".variants-plates__one").click(function(){
			if (!window.matchMedia("(max-width: 1000px)").matches)
				return

			const index = $(this).index(),
				$variantsContainer = $(this).closest(".variants-list");

			$variantsContainer.find(`.variants-slider__slide:eq(${index})`).click()
		})
	})
}catch(e){
	console.log(e)
}

try{
	document.addEventListener("DOMContentLoaded", e => {
		const body = document.body;

		if ($(".bx-yandex-map").length)
			$("html").addClass("js__iframe-map")

		$(window).on("load scroll touchmove resize", function(){
			if (body.scrollHeight > 2000 && !document.querySelector(".scroller")){
				$("body").append('<div class="scroller"><div class="scroller__progress"></div></div>')
			}

			$(".scroller__progress").width((window.scrollY / (body.scrollHeight - window.innerHeight) * 100) + "%")
		})
	})

	/** Перенос одиночного пунку меню футера в предыдущий столбец */
	$(".f-menu__item--title:first-child:last-child").each(function(i){
		if (i > 0)
			return

		const $cloned = $(this).clone();

		$(this).closest(".f-menu").next(".f-menu").append($cloned)

		$(this).closest(".f-menu").remove()
	})

	/** Сраный IE */
	if (is.ie())
		$("picture").each(function(){
			const $this = $(this);

			const src = $this.find("source:first-child").attr("data-srcset") || $this.find("source:first-child").attr("srcset");

			$this.find("img").attr("src", src)
		})

}catch(e){
	console.log(e)
}

const selectionTemplate = state => {
	if(!state.element)
		return

	const count = state.element.getAttribute("data-count");

	if (count)
		return $(`<span class='option__text'>${state.text} </span><span class='option__count'> /&nbsp;&nbsp;${count}</span>`)
	else
		return state.text
}

document.addEventListener("DOMContentLoaded", e => {
	$("body").removeClass("loading").addClass("loaded")
})