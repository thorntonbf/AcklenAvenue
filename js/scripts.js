$(document).ready(function() {

	$("#slideshow").css("overflow", "hidden");

	$("ul#slides").cycle({
		fx: 'fade',
		pause: 1,
		prev: '#prev',
		next: '#next'
	});

	$("#slideshow").hover(
	function() {
		$("ul#slide_nav").fadeIn();
	},
	function() {
		$("ul#slide_nav").fadeOut();
	});

});
