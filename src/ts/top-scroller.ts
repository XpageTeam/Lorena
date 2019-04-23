import {App, Element} from "./app"

App.domReady(()=>{
	new scroller()
})

class scroller{
	private _el: Element
	private _progress: Element

	get el(){
		return this._el
	}
	set el(el: Element){
		this._el = el
	}

	get progress(){
		return this._progress
	}
	set progress(el: Element){
		this._progress = el
	}

	constructor(){
		const scroller = document.createElement("div"),
			progress = document.createElement("div");

		App.wrap(progress, scroller)

		console.log(scroller)

		// this.el = new Element(scroller).addClass("scroller")
		// this.progress = new Element(progress).addClass("scroller__progress")

	}
}