$(document).ready(function () {
    new Swiper ('.offer .swiper-container', {
		navigation: {
		  nextEl: '.swiper-button-next',
		  prevEl: '.swiper-button-prev',
		},
		slidesPerView: 'auto',
		spaceBetween: 60,
		centeredSlides: true
	});
  
	  new Swiper ('.promo .swiper-container', {
		navigation: {
		  nextEl: '.swiper-button-next',
		  prevEl: '.swiper-button-prev',
		},
		slidesPerView: 'auto',
		centeredSlides: true,
		loop: true,
		loopedSlides: 5,
	});

	var galleryThumbs = new Swiper('.quest-desc__gallery-thumbs', {
		spaceBetween: 10,
		slidesPerView: 4,
		freeMode: true,
		observer: true,
		observeParents: true,
		watchSlidesVisibility: true,
		watchSlidesProgress: true,
	  });
	new Swiper('.quest-desc__gallery-top', {
		spaceBetween: 10,
		effect: 'fade',
		observer: true,
		observeParents: true,
		thumbs: {
		  swiper: galleryThumbs
		}
	});

	var quests = [
		{
			'quest-desc__title': 'Бункер Сталина',
			'quest-desc__subtitle': 'Начало 50-х годов прошлого века, вы — в секретном Бункере Сталина, на который случайно наткнулись в бесконечных туннелях метро. Место очень интересное, но, не в силах сдержать любопытство, вы решаете зайти и узнать, что за секреты запрятаны так глубоко под землей? Но дверь неожиданно закрывается, и лучше вам скорее найти выход до прихода караула...',
			'genre': 'Исторический, Приключение, Военный, Семейный, Антуражный',
			'address': 'г. Волгоград, ул. Рокоссовского, 30<br>(вход со стороны ул. Чапаева)',
			'rating': '<a href="https://xn--80addag2buct.xn--b1acdcqi5ci.xn--p1ai/quest/55b643eaa7aaa4160432936e" target="_blank"><img class="btnrt" title="Отзывы на квест &laquo;Бункер Сталина&raquo; INSIDE в Волгограде" src="https://xn--80addag2buct.xn--b1acdcqi5ci.xn--p1ai/images/rating/55b643eaa7aaa4160432936e.png" alt="Отзывы на квест &laquo;Бункер Сталина&raquo; INSIDE в Волгограде" width="102px" /></a>',
			'frame': '<iframe src="https://xn--b1acdcqi5ci.xn--p1ai/api/smart_widget/581b3205b2cecdc1652d5ebf/redirect" frameborder="no" style="margin: 0px; width: 920px; max-width: 100%; height: 1964px;" scrolling="no" align="center"></iframe>'
		},
		{
			'quest-desc__title': 'Хроники Нарнии',
			'quest-desc__subtitle': 'Злая королева захватила власть, и в Нарнии наступила вечная зима. Вам необходимо вернуть меч Всевластия королю и развеять злые чары!',
			'genre': 'Сказа, Фильмы, Приключение, Зима, Антуражный',
			'address': 'г. Волгоград, ул. Рокоссовского, 30<br>(вход со стороны ул. Чапаева)',
			'rating': '<a title="Квест Хроники Нарнии отзывы" href="https://квестгид.рф/quest/hroniki-narnii-1" target="_blank"><img class="btnrt" src="https://квестгид.рф/images/rating/568289d9e272781823683f0b.png" alt="Рейтинг квеста Хроники Нарнии" width="102px" height="38px" /></a>',
			'frame': '<iframe src="https://xn--b1acdcqi5ci.xn--p1ai/api/smart_widget/576bff4ddbb199df145c0753/redirect" frameborder="no" style="margin: 0px; width: 920px; max-width: 100%; height: 1964px;" scrolling="no" align="center"></iframe>',
		},
		{
			'quest-desc__title': 'Властелин Колец',
			'quest-desc__subtitle': 'Тысячелетия назад злобный чародей Саурон выковал Кольцо всевластия, потом утратил его, и сейчас жаждет получить обратно. А это обернётся гибелью мира, ибо, овладев Кольцом, Саурон станет всесилен. Вы должны помещать Саурону и Путь у вас только один: отнести кольцо в Тёмное царство и бросить в жерло вулкана, в огне которого оно было некогда выковано.',
			'genre': 'Сказа, Фильмы, Приключение, Антуражный, Семейный',
			'address': 'г. Волгоград, ул.КИМ, корп. Б<br>(вход напротив трамвайного кольца)',
			'rating': '',
			'frame': '<iframe src="https://xn--b1acdcqi5ci.xn--p1ai/api/smart_widget/5a22be5f151efc146fe64580/redirect" frameborder="no" style="margin: 0px; width: 920px; max-width: 100%; height: 1964px;" scrolling="no" align="center"></iframe>',
		},
		{
			'quest-desc__title': 'Проект «Кома»',
			'quest-desc__subtitle': 'Проект «Кома» на протяжении многих лет занимается изучением неизвестных возможностей человеческого мозга. Вы в состве первой экспериментльной группы должны проникнуть в сознание женщины, которая после жуткого происшествия чудом осталась жива, но впала в кому. Ваша задача выяснить что с ней произошло, помочь ей вспомнить все и выйти из комы.',
			'genre': 'Психологический, Детектив, Сложный',
			'address': 'г. Волгоград, ул.КИМ, корп. Б<br>(вход напротив трамвайного кольца)',
			'rating': '',
			'frame': '<iframe src="https://xn--b1acdcqi5ci.xn--p1ai/api/smart_widget/5a83fcbaae24f157545d505a/redirect" frameborder="no" style="margin: 0px; width: 920px; max-width: 100%; height: 1964px;" scrolling="no" align="center"></iframe>',
		},
		{
			'quest-desc__title': 'Тайна Анабель',
			'quest-desc__subtitle': 'В городе происходит мистическая череда исчезновений. И что самое удивительное, пропадают дети из одного класса! Один за одним. Что это проклятие? Или чей-то злой умысел? Но поговаривают, что всему виной странная девочка Аннабель. Вы группа журналистов, решившие во всем разобраться и проследить за ней. Но что-то пошло не так....',
			'genre': 'Фильмы, Хоррор, Детектив, Для детей',
			'address': 'г. Волгоград, ул.КИМ, корп. Б<br>(вход напротив трамвайного кольца)',
			'rating': '',
			'frame': '<iframe src="https://xn--b1acdcqi5ci.xn--p1ai/api/smart_widget/5a44a4a0d756b76136d971d4/redirect" frameborder="no" style="margin: 0px; width: 920px; max-width: 100%; height: 1964px;" scrolling="no" align="center"></iframe>',
		},
	]

	$('.swiper-slide__button').click(function() {
		var questNumber = $(this).attr('quest');
		$('#quest-desc .swiper-slide').each(function(index) {
			$(this).attr('style', $(this).attr('style').replace(/description\/./, `description/${questNumber}`));
		});
		var selectedQuest = quests[questNumber-1];
		for (let key in selectedQuest) {
			$(`#quest-desc .${key}`).html(selectedQuest[key]);
			if (key === 'rating') {
				if (selectedQuest[key]) {
					$(`.rating-name`).show();
				} else {
					$(`.rating-name`).hide();
				}
			}
		}
		$('#quest-desc').show();
	});

	$("input[name='phone']").mask("+7-(999)-999-99-99");
	$("input[name='phone']").bind("paste", function(e){
		// access the clipboard using the api
		var pastedData = e.originalEvent.clipboardData.getData('text');
		if (pastedData.length === 11 && pastedData[0] === '8') {
			$("input[name='phone']").val('+7' + pastedData.substr(1));
		}
	});
	$(".btn-test-scroll").on("click", function (event) {
		var id = $(this).attr('href'), top = $(id).offset().top;
		$('body,html').animate({scrollTop: top}, 800);
	});

	$(".btn-wrap-main").on("click", function (event) {
		var top = $('#test').offset().top;
		$('body,html').animate({scrollTop: top}, 800);
	});

	var inst = {
		items: 8,
		per_row: 4
	}	

	if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
		inst = {
			items: 2,
			per_row: 1
		}		
	}

	$.instagramFeed({
		'username': 'kvestinside',
		'container': ".instagram__feed",
		'display_profile': false,
		'display_biography': false,
		'display_gallery': true,
		'callback': null,
		'styling': false,
		'items': inst.items,
		'items_per_row': inst.per_row,
		'margin': 1 
	});

	$( ".range-slider-area" ).slider({
		range: true,
		min: 2,
		max: 20,
		values: [6, 15],
		slide: function( event, ui ) {
		  $('.range-start').attr('value', `от ${ui.values[0]}`);
		  $('.range-end').attr('value', `до ${ui.values[1]}`);
		},
		create: function() {
		  $('.range-start').attr('value', 'от 6');
		  $('.range-end').attr('value', 'до 15');
		}
	});
});