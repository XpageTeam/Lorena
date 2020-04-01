import $ from "jquery"

document.addEventListener("DOMContentLoaded", e => {



		var list = document.querySelectorAll('.upload');

		if(list.length){

			window.observer = new Array();

			for (const ls of list){
				window.observer.push(new MutationObserver(function(mutations) {
				    mutations.forEach(function(mutation) {
				     let input = mutation.addedNodes[0].querySelector(".forms-input-cont--file .forms__input--file");

				     console.log(mutation, input)

				     if (input)
				     	input.addEventListener("change", InputFileChange);
				    });
				}));
				  
				window.observer[window.observer.length -1].observe(ls, {
				  	attributes: false, 
				  	childList: true, 
				  	subtree: true,
				  	characterData: false
				})
			}
		  	
		}


		if(!$('div').hasClass('upload-gallery')){
			$("body").on("change", ".forms__input--file", function(e){

				var value = $(this)[0].files[0].name,
					inputHasFile = $(this).next('input[type="text"]').val(value);

				if(inputHasFile.length){
					$(this).nextAll('.default-input__label-img').remove();
				}
			});

		}



    

		$("body").on("change", ".upload-gallery .forms__input--file", function(e){
			var time = +new Date();
			var $this = $(this);
			var getName = $(this).closest('.forms__input-cont--multiple').find('.default-input__img').siblings('.imagesFoto').attr("name");

			var value = $(this)[0].files[0].name,
				inputHasFile = $(this).next('input[type="text"]').val(value);

			if(inputHasFile.length){

				$('.upload-gallery .forms__input-cont--multiple').prepend('<div class="forms__input-cont forms-input-cont--file" data-el-id="'+time+'">\
						<input class="forms__input forms__input--file" name="'+getName+'" type="file" id="'+time+'" accept="image" data-el-id="'+time+'">\
						<input class="forms__input forms__input--file-support" readonly="" type="text">\
						<label class="forms__label--file default-input__label-img" for="'+time+'">Выбрать изображение</label>\
					</div>');
			}
		});



		// $('.save_edit_projects').click(function(){
		// 	$(this).closest('.lc-company__data').toggleClass('readonly');

		// })




		window.InputFileChange = function () {
		  if (this.files[0]) {
			var photoName = $(this)[0].files[0].name;

		  	var dataId = this.closest('div').getAttribute("data-el-id");

		    var fr = new FileReader(),
		    	$shopBlock = $(this).closest(".upload-gallery");

		    console.log($shopBlock)

		    fr.addEventListener("load", e => {
				let $photos = $shopBlock.find('.upload-load-photo');

	    		$photos.append("<div class='photo' data-el-id='"+dataId+"'>\
					<img src='"+fr.result+"' />\
					<div class='photo-title'>'"+photoName+"'</div>\
					<div class='photo-del'>Удалить фото</div>\
	    			</div>")
		    }, false);

		    fr.readAsDataURL(this.files[0]);
		  }
		};

		$('body').on('click', ".photo-del", function(){

			var $this = $(this);
			var elId = $this.closest('.photo').attr("data-el-id");

			$this.closest('.upload-gallery').find('.forms__input-cont--multiple .forms-input-cont--file[data-el-id="'+elId+'"]').remove();
			
			$this.closest('.photo').remove();


		})



		if(!$(".upload__item-el--photo input[type='file']").length)
			return 

			const fileInputs = document.querySelectorAll(".upload__item-el--photo input[type='file']");

			for (const fileInput of fileInputs)
				fileInput.addEventListener("change", InputFileChange);


			// $("body").on("click", ".upload__item-el--photo .input-del", function(){
			// 	let $this = $(this).closest(".forms-input-cont--file"),
			// 		$cont = $(this).closest(".upload__item-el--photo"),
			// 		index = $this.index();

			// 	console.log(index, $this)
			// 	console.log($cont)

			// 	$cont.nextAll(".upload-load-photo").find("img:eq("+index+")").remove()
			// })



		// $("body").on("click", ".js__input-del, .input-del", function(){

		// 	var $this = $(this);

		// 	$this.closest('.forms__input-cont').remove();
			
		// })

	

	

});