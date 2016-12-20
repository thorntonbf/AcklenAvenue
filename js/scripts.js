$(document).ready(function() {
	var $message = $('#la-message'),
		dayToStopShowing = new Date(2000,1,1),
		today = new Date();

	if ($message.length > 0) {
		var year = $message.attr('data-year'),
			day = $message.attr('data-day'),
			month = $message.attr('data-month');

		dayToStopShowing = new Date(day + " " + month + " " + year);
	}

	if (($message.length > 0) && (today < dayToStopShowing)) {
		$("body").leanModal({ top : 200, overlay : 0.4, closeButton: ".modal_close" });
		$("body").trigger("click");
		$("body").off("click");
	}

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
