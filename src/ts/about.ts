import {App, EventListener} from "./app"
import {TweenLite} from "gsap"
import {Power4} from "gsap";

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
			y: -(window.scrollY / window.innerHeight * 190) + "px"
		})

		TweenLite.to(rightDecor, 1.5, {
			y: -(window.scrollY / window.innerHeight * 160) + "px"
		})
	};

	animateElements()

	window.addEventListener("resize", animateElements)
	window.addEventListener("scroll", animateElements)
})


/** Параллакс картинок в верхнем блоке */

App.domReady(() => {
  let parallaxBlocksX = document.querySelectorAll(".bottom-decor"),
  	  parallaxBlocksXY = document.querySelectorAll(".top-decor, .left-decor"),
      topBlock = document.querySelector(".about-img");

  if (!parallaxBlocksX.length || !topBlock)
    return

  topBlock.addEventListener("mousemove", (e: MouseEvent) => {
    let pos = {
      x: 0,
      y: 0,
    };

    pos.x = (e.pageX - topBlock.clientWidth / 2) * -1 / 55;
    pos.y = (e.pageY - topBlock.clientHeight / 2) * -1 / 55;

    TweenLite.to(parallaxBlocksX, 2, {
    	x: pos.x,
    })

    TweenLite.to(parallaxBlocksXY, 2, {
    	x: pos.x,
    	y: pos.y
    })

    // parallax.style.backgroundPosition = pos.x+"px "+pos.y+"px"
  });
})

/**
 * ! пользовательский чат в отзывах
 */

enum msgDirection{
	toMe,
	fromMe
};

interface msgVideo{
	direction: msgDirection,
	src: string,
	poster: string
}

interface msg{
	direction: msgDirection,
	text: string
}

App.domReady(() => {
	const msgPosition = {
		top: window.get$(".a-messages").offset().top + window.get$(".message").height() / 2,
		left: window.get$(".a-messages").offset().left + window.get$(".message").width() / 2
	},
		fakeCursor = document.querySelector(".about-img__messages-cursor"),
		chatMessages: Array<msg | msgVideo> = [];

	chatMessages.push({
		direction: msgDirection.toMe,
		text: "Дорогая, ты что-то купила?",
	});
	chatMessages.push({
		direction: msgDirection.fromMe,
		text: "Да дорогой, я купила кухню в Lorena кухни",
	});
	chatMessages.push({
		direction: msgDirection.toMe,
		text: "Почему именно Lorena кухни?",
	});
	chatMessages.push({
		direction: msgDirection.fromMe,
		text: "Я посмотрела отзыв - это любовь!",
	});
	chatMessages.push({
		direction: msgDirection.fromMe,
		src: "/video/video.mp4",
		poster: "/img/photos/chat-video-poster.jpg"
	});

	if (!fakeCursor)
		return;

	TweenLite.to(fakeCursor, 3, {
		top: msgPosition.top,
		left: msgPosition.left,
		ease: Power4.easeInOut,
		delay: 1.5,
		onStart(){
			document.body.classList.add("js__hide-cursor");
		},
		onComplete(){
			TweenLite.to(fakeCursor, .1, {
				scale: .6,
				onComplete(){
					TweenLite.to(fakeCursor, .1, {
						scale: 1,
						onComplete(){
							document.body.classList.remove("js__hide-cursor");
							document.body.classList.add("js__show-chat");

							startChat(chatMessages);
						}
					});
				}
			});
		}
	});
});

function startChat(messagesArray:  Array<msg | msgVideo>){
	showChatDots(messagesArray[0].direction);
}

function showChatDots(direction: msgDirection){
	const dostMessage = getMsgContainer(direction);

	dostMessage.innerHTML = '<div class="chat-msg">'
                            +'<div class="chat-msg__dost">'
                              +'<div class="msg-dot"></div>'
                              +'<div class="msg-dot"></div>'
                              +'<div class="msg-dot"></div>'
                            +'</div>'
						  +'</div>';

	instertMessage(dostMessage);
}

function instertMessage(messageEl: HTMLDivElement){
	const chatContainer = document.querySelector(".about-chat__list") as HTMLDivElement;

	if (!chatContainer) return;

	chatContainer.appendChild(messageEl);
}

function getMsgContainer(direction: msgDirection): HTMLDivElement{
	const dostMessage = document.createElement("div");

	dostMessage.classList.add("about-chat__list-item");
	dostMessage.classList.add("about-chat__list-item--"+
		(direction == msgDirection.fromMe 
		? "from"
		: "to"));

	return dostMessage
}

 /* конец кода чата в отзывах */