$(function() {

	// slick
		var $mainSlider = $('.main-slider').slick({
			fade: true,
			dots: true,
			// arrows: false,
			autoplay: true,
			autoplaySpeed: 7000
		});

		$('.main-slider').on('init', function( slick){
			console.log('init');
		});

		function mainSliderArrowsPosCalc() {
			var $th = $('.main-slider'),
			 		$prev = $th.find('.slick-prev'),
					$next = $th.find('.slick-next'),
					$cont = $th.find('.container').first(),
					contWidth = $cont.width(),
					winWidth = $(window).width();

					prevLeft = (winWidth - contWidth)/2;
					nextLeft = contWidth + prevLeft - 33;

					$prev.offset({top:"auto", left: prevLeft});
					$next.offset({top:"auto", left: nextLeft});

					console.log(prevLeft);
					console.log(nextLeft);
		}
		if(screen.width > 1200){
			mainSliderArrowsPosCalc(); 
		}

		$(window).resize(function() {
			if(screen.width > 1200){
				mainSliderArrowsPosCalc();
				
			}
		});

		$('.card-slider__display').slick({
			fade: true,
			arrows: false
		});

		$('.card-slider__nav').slick({

			 slidesToShow: 4,
 			 slidesToScroll: 1,
 			 // centerMode: true,
 			 //   centerPadding: '20px',
  			asNavFor: '.card-slider__display',
  			focusOnSelect: true
		});
	// end of slick

	// cart-counter
		$('.card-counter__button').click(function(e) {
			var $th = $(this),
				$thCount = $th.closest('.card-counter__count')
								.find('.card-counter__field'),
				thCountVal = +$($thCount).val();

			console.log($th.hasClass('card-counter__minus'));
			if($th.hasClass('card-counter__minus')){
				
				thCountVal -= 1;
			}else{
				thCountVal += 1;
			}

			if(thCountVal < 0) thCountVal = 0;

			$thCount.val(thCountVal);

		});
	// end cart-counter

	// tooltipster
		$('.tooltip').tooltipster({
			trigger: 'custom',
			triggerOpen: {
				 	mouseenter: true,
				 	tap: true
				 },
			triggerClose: {
				 	click: true,
				 	mouseleave: true,
				 	tap: true
				 },
			arrow: false,
			side: ['bottom', 'right'],
			interactive: true,
			contentCloning: true,
			// distance: [10, 10],
			functionReady: function(instance, helper) {
					
					helper.tooltip.classList.add('colors-tip');
				},
			functionPosition: function(instance, helper, position){
				 		if(screen.width > 1100){
					 		var posYHelper = helper.origin.getBoundingClientRect().top,
					 			posXHelper = helper.origin.getBoundingClientRect().left,
					 			originWidth = helper.origin.offsetWidth;
					 			console.log(originWidth);
					 		
				 			position.coord.top = posYHelper + 5;
				 			position.coord.left = posXHelper + originWidth +10;
				 			
				 		}
				 	return position;
				 },
		});

		var validTooltip = $('.input-tooltip').tooltipster({
			trigger: 'custom'
		});

		$('body').click(function(e) {
			console.log('body');
			if(!$(e.target).hasClass('digit')){
				console.log('!hasClass');
				validTooltip.tooltipster('close');
				$('input.digit').removeClass('input-error');
			}
		});
	// end tooltipster

	// equal height
		$('.about-content__item, .collection-item, .catalog-item').matchHeight();
	// end equal height

	// validation
		$('.gracie-form').each(function(ind, elem) {
			console.log(ind);
			window.validation.init({
					container: $(elem),
					fieldSelector: 'input[name="phone"]',
					submitSelector: 'button'
					// submitHandler: function () {
					// 	alert('Валидация первой формы прошла успешно!');
					// }
				});

		});
	// end of validation

	//Chrome Smooth Scroll
	try {
		$.browserSelector();
		if($("html").hasClass("chrome")) {
			$.smoothScroll();
		}
	} catch(err) {

	};

	$("img, a").on("dragstart", function(event) { event.preventDefault(); });
	
});

// $(window).load(function() {

// 	$(".loader_inner").fadeOut();
// 	$(".loader").delay(400).fadeOut("slow");

// });
