$(document).ready(function() {
	/* mobile nav*/
	$('.menu-icon').click(function() {
		var icon = $(this);

		if( $('.mobile-nav').hasClass('open') ) {
			$('.mobile-nav').removeClass('open');
		} else {
			$('.mobile-nav').addClass('open');
		}
	});

	$('.mobile-nav').click(function() {
		$('.mobile-nav').removeClass('open');
	});

	$('.top').click(function() {
		$('html, body').animate({ scrollTop: "0px" }, 1000);
	});
});