

( function( $ ) {
	$('#mastmenu .menu-item > a').click(function() {
		$('body').removeClass('site-navigation-active');
		$('.main-navigation.active').removeClass('active');
		$('.menu-toggle.active').removeClass('active');
	})
} )( jQuery );
