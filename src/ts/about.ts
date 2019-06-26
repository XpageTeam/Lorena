import {App, EventListener} from "./app"
import {TweenLite} from "gsap"

/** Пульсирование кругов под свг - картой */

App.domReady(() => {
	const circles = document.querySelectorAll(".front-circle, .middle-circle, .inner-circle");

	if (!circles.length)
		return

	TweenLite.set(circles, {
		transformOrigin: "center"
	})

	mapPulse(circles)

	App.each('.cw-item__img path', (el: SVGPathElement) => {
		el.style.strokeDasharray = el.getTotalLength()+', '+ el.getTotalLength()
		el.style.strokeDashoffset = el.getTotalLength().toString()
	})
})

const mapPulse = (circles: NodeList): void => {
	TweenLite.to(circles, 2, {
		scale: 1.1,
		onComplete(){
			TweenLite.to(circles, 2, {
				scale: 1,
				onComplete(){
					mapPulse(circles)
				}
			})
		}
	})
}
/** !Конец кругов под картой */

/** Анимированое появление карты */
App.domReady(() => {
	const map = document.querySelector("#russia-map");

	if (!map)
		return

	TweenLite.set(map, {
		transformOrigin: "center",
		scale: .1,
		opacity: 0
	})

	const mapPoints = map.querySelectorAll("ellipse, circle");

	if (!mapPoints.length)
		return

	const showMap = () => {
		TweenLite.to(map, .7, {
			scale: 1,
			opacity: 1,
			onComplete(){
				App.each(mapPoints, (el: SVGElement, i: number) => {
					TweenLite.to(el, .2, {
						opacity: 1,
						delay: !i ? i : parseFloat(`.${i}`)
					})
				})
			}
		})
	};

	App.each(mapPoints, (el: SVGElement) => {
		TweenLite.set(el, {
			opacity: 0
		})
	})

	if (window.isScrolledIntoView(map))
		showMap()

	window.addEventListener("scroll", () => {
		if (window.isScrolledIntoView(map))
			showMap()
	})

	window.addEventListener("resize", () => {
		if (window.isScrolledIntoView(map))
			showMap()
	})
})

/** Параллакс боковых элементов на странице */

App.domReady(() => {
	const leftDecor = document.querySelector(".about__decors-left"),
		rightDecor = document.querySelector(".about__decors-right");

	if (!leftDecor || !rightDecor)
		return

	const imgBlock = document.querySelector(".about__img");

	const animateElements = () => {

		if (!imgBlock)
			return

		

		if (window.scrollY >= parseInt(getComputedStyle(imgBlock).height) / 1.9){
			TweenLite.to(leftDecor, .2, {
				opacity: 1
			})

			TweenLite.to(rightDecor, .2, {
				opacity: 1
			})
		}else{
			TweenLite.to(leftDecor, .2, {
				opacity: 0
			})

			TweenLite.to(rightDecor, .2, {
				opacity: 0
			})
		}

		TweenLite.to(leftDecor, 1, {
			y: -(window.scrollY / window.innerHeight * 100) + "px"
		})

		TweenLite.to(rightDecor, 1.5, {
			y: -(window.scrollY / window.innerHeight * 30) + "px"
		})
	};

	animateElements()

	window.addEventListener("resize", animateElements)
	window.addEventListener("scroll", animateElements)
})


// /** Ховер точек городов на карте */
// App.domReady(() => {
// 	const mapCities = document.querySelectorAll('circle[fill="#FF6600"], ellipse[fill="#FF6600"]');

// 	if (!mapCities.length)
// 		return

// 	App.each(mapCities, (el: HTMLElement) => {
// 		const transform = el.getAttribute("transform");


// 		if (!transform)
// 			TweenLite.set(el, {
// 				transformOrigin: "center"
// 			})
// 		else{
// 			let transformArray = transform.replace("rotate(", "").replace(")", "").split(" ");

// 			TweenLite.set(el, {
// 				transformOrigin: `123px 123px`
// 			})
// 		}
// 	})

// 	new EventListener(mapCities).add("mouseover", (el: HTMLElement) => {
// 		TweenLite.to(el, .3, {
// 			scale: 1.1
// 		})
// 	})
// 	new EventListener(mapCities).add("mouseout", (el: HTMLElement) => {
// 		TweenLite.to(el, .3, {
// 			scale: 1
// 		})
// 	})
// })