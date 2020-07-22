export default {
	props: {
		citiesList: {
			type: Array,
			default: []
		},
		curCityId: {
			type: Number,
			default: 0
		}
	},
	data: () => ({
		citySearchInput: ""
	}),
	created(){
		for (const city of this.citiesList)
			console.log(city.name);
	},
	mounted(){
		window.citySelect = this;
	},
	methods: {
		showCityPopup(){
			$.fancybox.open({
				touch: false,
				src: "#city"
			});
		},
		selectCity(city){
			if (city.id == this.curCityId)
				return;

			location.href = city.href;
		}
	},
	computed: {
		cities(){
			return this.citiesList.filter(city => ~city.name.toLowerCase().indexOf(this.citySearchInput.toLowerCase()));
		},
		curCity(){
			return this.citiesList.filter(city => city.id == this.curCityId)[0];
		}
	},
	template: '\
		<div>\
			<div @click="showCityPopup" class="h-city">\
				<div class="h-city__icon">\
					<svg width="10" height="14" viewBox="0 0 10 14" fill="none" xmlns="http://www.w3.org/2000/svg">\
						<path d="M5.00029 7.21656C3.75317 7.21656 2.74109 6.20869 2.74109 4.96532C2.74109 3.72078 3.75317 2.71349 5.00029 2.71349C6.24742 2.71349 7.2595 3.72136 7.2595 4.96532C7.2595 6.2081 6.24742 7.21656 5.00029 7.21656ZM5.00029 0C2.23859 0 0 2.23084 0 4.98339C0 7.58321 2.26451 10.9368 3.77673 12.5695C4.34168 13.1787 4.99971 14 4.99971 14C4.99971 14 5.70663 13.174 6.31281 12.5468C7.82386 10.9822 10 7.84086 10 4.98339C10 2.23084 7.76141 0 5.00029 0Z" fill="#FF6600"/>\
					</svg>\
				</div>\
				<div class="h-city__name">\
					{{ curCity.name }}\
				</div>\
			</div>\
			<div class="city-select__popup">\
				<div id="city" class="scity-popup">\
					<div class="scity-popup__title">Выберите ваш город</div>\
					<div class="scity-popup__content">\
						<div class="scity-popup__content-search">\
							<div class="scity-search">\
								<div class="scity-search__input">\
									<div class="default-input">\
										<input v-model="citySearchInput" type="search" placeholder="Поиск" class="default-input__input"/>\
									</div>\
								</div>\
							</div>\
						</div>\
						<div class="scity-popup__content-list">\
							<ul class="cp-list">\
								<li \
									v-for="(city, key) in cities" \
									:key="key" \
									class="cp-list__item" \
									:class="{\'cp-list__item--active\': city.id == curCityId, \'cp-list__item--marked\': city.marked}"\
									@click="selectCity(city)"\
								>\
									{{ city.name }}\
								</li>\
								<li sсlass="cp-list__no-results" v-if="!cities.length">Поиск не дал результатов</li>\
							</ul>\
						</div>\
					</div>\
				</div>\
			</div>\
		</div>\
	'
}