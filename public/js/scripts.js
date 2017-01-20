$(document).ready(function() {

/**
*	Boxes / Buttons
*/

	$('.box').fadeIn('slow');

	$('.box').mouseenter(function() {
		$(this).animate({
			height: '+=10px'
		});
		$(this).css('opacity', 1);
	});

	$('.box').mouseleave(function() {
		$(this).animate({
			height: '-=10px'
		});
		$(this).css('opacity', 0.5);
	});

	$('.box').click(function() {
		$(this).toggleClass('button-clicked');
	});

/**
*	Mario
*/

	$(document).keydown(function(key) {
		switch(parseInt(key.which, 10)) {
			case 37: // left
				$('#mario-error').html('');
				if (parseInt($('#mario-width').html(), 10) > 10) {
					$('#mario').animate({left: "-=10px"}, 'fast');
					$('#mario-width').html(parseInt($('#mario-width').html(), 10) - 10);
				} else {
					$('#mario-error').html('Can not move left');
				};
				break;
			case 38: // up
				$('#mario-error').html('');
				if (parseInt($('#mario-height').html(), 10) < 525) {
					$('#mario').animate({top: "-=10px"}, 'fast');
					$('#mario-height').html(parseInt($('#mario-height').html(), 10) + 10);
				} else {
					$('#mario-error').html('Can not move up');
				};
				break;
			case 39: // right
				$('#mario-error').html('');
				if (parseInt($('#mario-width').html(), 10) < 480) {
					$('#mario').animate({left: "+=10px"}, 'fast');
					$('#mario-width').html(parseInt($('#mario-width').html(), 10) + 10);
				} else {
					$('#mario-error').html('Can not move right');
				};
				break;
			case 40: // down
				$('#mario-error').html('');
				if (parseInt($('#mario-height').html(), 10) > 265) {
					$('#mario').animate({top: "+=10px"}, 'fast');
					$('#mario-height').html(parseInt($('#mario-height').html(), 10) - 10);
				} else {
					$('#mario-error').html('Can not move down');
				};
				break;
		}
	});

/**
*	Accordion
*/

	$('#accordion-menu').accordion();

});
