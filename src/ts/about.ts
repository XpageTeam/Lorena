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
	poster: string,
	text? : string
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
		text: "Вау! Крутая кухня! Где купила?",
	});
	chatMessages.push({
		direction: msgDirection.fromMe,
		text: "Делала на заказ в Lorena кухни!",
	});
	chatMessages.push({
		direction: msgDirection.toMe,
		text: "А покажи поближе?",
	});
	
	chatMessages.push({
		direction: msgDirection.fromMe,
		src: "video/video.mp4",
		poster: "img/photos/chat-video-poster.jpg"
	});

	chatMessages.push({
		direction: msgDirection.fromMe,
		text: "Кликни, посмотри 😉",
	});

	chatMessages.push({
		direction: msgDirection.toMe,
		text: "Хочу кухню как у тебя! 🙏",
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
	let chatInterval: NodeJS.Timeout,
		msgCounter = 0,
		chatMesage: Function;

	showMessage(
		messagesArray[msgCounter].direction, 
		messagesArray[msgCounter].text
	);
	msgCounter++;

	chatMesage = function(){
		if (messagesArray.length - 2 == msgCounter){
			clearInterval(chatInterval);
			
			showChatDots(messagesArray[msgCounter].direction);

			chatInterval = setTimeout(function(){
				hideDots();

				showMessage(
					messagesArray[msgCounter].direction, 
					messagesArray[msgCounter].text
				);

				msgCounter++;
			}, 1500)

			// msgCounter++;

			setTimeout(function(){
				let isMessageShowed = false,
					nextMessageTimeout: NodeJS.Timeout;

				document.querySelector(".chat-msg__video")
					.addEventListener("click", function(e: Event){
						const self = this;
						e.preventDefault();

						window.$.fancybox.open({
							src: self.getAttribute("href"),
							afterClose(){
								self.classList.add("js__watched");
								
								clearTimeout(nextMessageTimeout);

								if (!isMessageShowed){
									showChatDots(messagesArray[msgCounter].direction);

									setTimeout(function(){
										hideDots();
										showMessage(
											messagesArray[msgCounter].direction, 
											messagesArray[msgCounter].text
										);
									}, 2000)
								}
							}
						});
					});

				nextMessageTimeout = setTimeout(function(){
					isMessageShowed = true;

					showChatDots(messagesArray[msgCounter].direction);

					setTimeout(function(){
						hideDots();
						showMessage(
							messagesArray[msgCounter].direction, 
							messagesArray[msgCounter].text
						);
					}, 2000)
				}, 3000);
			}, 3000)			
		}else{
			showChatDots(messagesArray[msgCounter].direction);
			chatInterval = setTimeout(function(){
				hideDots();

				if (messagesArray[msgCounter].text)
					showMessage(
						messagesArray[msgCounter].direction, 
						messagesArray[msgCounter].text
					);
				else{
					showVideo(
						messagesArray[msgCounter] as msgVideo
					);
				}

				msgCounter++;

				chatMesage();
			}, 2000)
		}
	}

	chatMesage();
}

function showVideo(video: msgVideo){
	const msgContainer = getMsgContainer(video.direction);	

	msgContainer.innerHTML = `<div class="chat-msg">
								<a href="${video.src}" class="chat-msg__video">
									<img class="chat-msg__video-img" src="${video.poster}" />
									<div class="chat-msg__video-btn">
										<svg xmlns="http://www.w3.org/2000/svg" width="115" height="115" viewBox="0 0 115 115" fill="none">
											<circle cx="57.6103" cy="57.6101" r="55.5" transform="rotate(-90 57.6103 57.6101)" stroke="#272727" stroke-width="3"/>
											<path d="M113.5 58C113.5 88.6395 88.4403 113.5 57.5 113.5C26.5597 113.5 1.5 88.6395 1.5 58C1.5 27.3605 26.5597 2.5 57.5 2.5C88.4403 2.5 113.5 27.3605 113.5 58Z" stroke="#FF6600" stroke-width="3"/>
										</svg>
									</div>
								</a>
							</div>`;

	instertMessage(msgContainer);

	const line = document.querySelector(".chat-msg__video-btn path") as SVGPathElement;
}

function showChatDots(direction: msgDirection){
	const dostMessage = getMsgContainer(direction);

	dostMessage.innerHTML = '<div class="chat-msg">'
                            +'<div class="chat-msg__dots">'
                              +'<div class="msg-dot"></div>'
                              +'<div class="msg-dot"></div>'
                              +'<div class="msg-dot"></div>'
                            +'</div>'
						  +'</div>';

	instertMessage(dostMessage);
}

function hideDots(){
	const chatContainer = document.querySelector(".about-chat__list") as HTMLDivElement;

	if (!chatContainer) return;

	const dotsContainer = window.get$(".chat-msg__dots");

	if (!dotsContainer) return;

	dotsContainer.closest(".about-chat__list-item").remove();
}

function showMessage(direction: msgDirection, text: string){
	const msgContainer = getMsgContainer(direction);

	msgContainer.innerHTML = `<div class="chat-msg">
								<div class="chat-msg__text">${text}</div>
							</div>`;
	
	instertMessage(msgContainer);
}

function instertMessage(messageEl: HTMLDivElement){
	const chatContainer = document.querySelector(".about-chat__list") as HTMLDivElement;

	if (!chatContainer) return;

	chatContainer.appendChild(messageEl);

	window.$(chatContainer).animate({
		scrollTop: 10000
	}, 1000)
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