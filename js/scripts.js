$(document).ready(function() {
	var dayAfterChurch = new Date(2016,9,26),
		today = new Date();

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

	if (today < dayAfterChurch) {
		$("body").leanModal({ top : 200, overlay : 0.4, closeButton: ".modal_close" });
		$("body").trigger("click");
		$("body").off("click");
	}
});