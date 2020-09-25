const searching_menu = $('.searching_menu'),
	mobile_nav = $('.mobile_nav');

$('#go_top').click(function() {
	$('html, body').animate({scrollTop: 0},500);
	return false;
});

$('.toggle_mobile_nav').click(function() {
	if (mobile_nav.is(':visible')) {
		mobile_nav.fadeOut(150);
	}
	else {
		mobile_nav.fadeTo(150, 0.95);
	}
});

$('.toggle_searching_menu').click(function() {
	if (searching_menu.is(':visible')) {
		searching_menu.fadeOut(150);
	}
	else {
		searching_menu.fadeTo(150, 0.95);
	}
});