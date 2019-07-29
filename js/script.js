
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
	$.ionTabs("#tabs_1", {
    type: "storage", // hash, storage или none
});


//card-slider
$('.card-slider__list').find('img').click(function (e) {
	e.preventDefault();
	var thes = $(this);
	var src = $(this).attr('src');
	$(this).parent().siblings('.card-slider__current').find('img').fadeOut('200', function() {
		thes.parent().siblings('.card-slider__current').find('img').attr('src', src);
	});
	$(this).parent().siblings('.card-slider__current').find('img').fadeIn('200');
});






});