import randomInt from "./functions/randomInt";
import { App } from "./app";
import {TweenLite} from "gsap";

window.addEventListener("load", () => {
	const loadStepsCount = randomInt(4, 10), // Количество шагов в загрузчике
		// loadingTime = randomInt(1, 4), // Время работы загрузчика
		progressBg = App.getElement(".el-loader__loader-progress");

	if (!progressBg) return;

	let progressCounter = progressBg.getAttribute("data-counter");
	

	let loadPercentsForSteps: number[] = new Array(loadStepsCount), // Массив процентов загрузки для каждого шага
		timeForSteps: number[] = new Array(loadStepsCount); // Время прохода каждого шага
	
	// последний элемент всегда 100
	loadPercentsForSteps[loadPercentsForSteps.length - 1] = 100
	timeForSteps[timeForSteps.length - 1] = .2

	for (let i = 0; i < loadPercentsForSteps.length - 1; i++){
		
		loadPercentsForSteps[i] = (i > 0 
            ? randomInt(
                loadPercentsForSteps[i - 1] + 1,
                parseInt((100 / loadStepsCount * i).toString())
            )
            : randomInt(
                parseInt(progressCounter),
                parseInt((100 / loadStepsCount).toString())
            )
        )

		timeForSteps[i] = 7.5 / (loadStepsCount - 1)
	}
	

	let curStep = 0;
	const loadingAnimate = (step: number, time: number) => {
		curStep++;
        
		TweenLite.to(progressBg, time, {
			scaleX: step / 100,
			onComplete(){
				if (curStep < loadStepsCount)
					loadingAnimate(loadPercentsForSteps[curStep], timeForSteps[curStep])
				else{
					document.body.classList.remove("loading")
					document.body.classList.add("loaded")
				}
			}
		})
	};

	loadingAnimate(loadPercentsForSteps[0], timeForSteps[0])
})