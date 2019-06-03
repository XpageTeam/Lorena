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