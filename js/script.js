
$(function() {
const targetElement = document.querySelector(".header-mobile__menu");
 //burger menu
 $('.header-mobile__ico').click(function(event) {
 	$('.header-mobile__menu').fadeIn();
 	bodyScrollLock.disableBodyScroll(targetElement);

 });
 $('.header-mobile__close').click(function(event) {
 	$('.header-mobile__menu').fadeOut();
 	bodyScrollLock.enableBodyScroll(targetElement);
 });

 //пункты меню в мобильном меню
 $('.header-mobile__item.main').click(function(event) {
 	$(this).find('ul').slideToggle();
 	if ($(this).find('.header-mobile__plus').text() == '+') {
 		$(this).find('.header-mobile__plus').text('-').css('color', '#fff');
 	}
 	else {
 		$(this).find('.header-mobile__plus').text('+').css('color', '#4c4c4c');
 	}
 });
	

	//slider
	$('#bannerSlider').slick({
		arrows: false,
		dots: true,
	});


//tabs
if (window.innerWidth < 1280) {

}
else {
	$.ionTabs("#tabs_1", {
		type: "storage", // hash, storage или none
	});
}



//card-slider действие при добавлении в корзину в мобилке поп-ап в пк корзина справа выезжает
$('.card-slider__list').find('img').click(function (e) {
	e.preventDefault();
	var thes = $(this);
	var src = $(this).attr('src');
	$(this).parent().siblings('.card-slider__current').find('img').fadeOut('200', function() {
		thes.parent().siblings('.card-slider__current').find('img').attr('src', src);
	});
	$(this).parent().siblings('.card-slider__current').find('img').fadeIn('200');
});

//cart
$('.button').on('click', function(event) {
	event.preventDefault();
	if (window.innerWidth < 1280) {
		$('.modal-bg').fadeIn();
		$('#modalAddToCart').fadeIn();

	}
	else {
		$('.main-cart').css('transform', 'translateX(0)');
	}
});

$('.modal-close').click(function(event) {
	$('.modal-bg').fadeOut();
	$('.modal-add').fadeOut();
});


//mobile slider sales on index
if (window.innerWidth < 1280) {
	$('.ycont--sales').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: false,
		 // autoplay: true,
		 // infinite: false,
	});
}

//card карточка товара в мобилке открытие пунктов
$('.card-mobile-list__item').click(function(event) {
	$(this).next().slideToggle();
	if ($(this).find('span').text() == '+') {
		$(this).find('span').text('-');
	}
	else {
		$(this).find('span').text('+');
	}
	
});

//фильтрация выбор
$('.catalog-find__p, .catalog-color__item').click(function(event) {
	$(this).toggleClass('active');
});

$('.main-catalog-mob__mini ').click(function(event) {
	$(this).toggleClass('active');
});




});