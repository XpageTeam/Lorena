import {App, Element, EventListener} from "./app"

App.domReady(() => {
	new EventListener(".default-input__input--file").add("change", (el: HTMLInputElement) => {
		const parent = el.closest(".default-input--file"),
			fileNameField = parent.querySelector(".default-input__label--file");

		if (el.files.length){
			let names = [];

			for (let i = 0; i < el.files.length; i++)
				names.push(el.files[i].name)

			fileNameField.setAttribute("data-text", names.join(", "))
		}else{
			fileNameField.setAttribute("data-text", "Файл не выбран")
		}
	})
})