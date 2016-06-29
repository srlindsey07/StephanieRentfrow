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

	$.fn.isOnScreen = function(){
	    var element = this.get(0);
	    var bounds = element.getBoundingClientRect();
	    return bounds.top < window.innerHeight && bounds.bottom > 0;
	}

	$(window).scroll(function() {
		var width = $(window).width();

		if ( $('.hero').isOnScreen() && width > 767 ) {
			$('.download').fadeOut(200);
		} 

		else if ( width <= 767 ) {
			$('.download').hide();
		}

		else {
			$('.download').fadeIn(200);
		}
	});

	$('.hero .arrow').click(function() {
		$('html, body').animate({
	        scrollTop: $("#synopsis").offset().top
	    }, 1000);
	});
});