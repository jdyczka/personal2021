/* PAGE SCRIPTS */

	(function defer() {
		if (window.jQuery) {
			console.log('[jQuery loaded]');

			$(document).ready( function() {
				console.log('[document ready]');

				setArchSliderContentHeight();

				var $items =  $('.arch-slider li');
				var centralItem = ($items.length + 1)/2;
				var sliderLock = false;

				$('#zongler .arrow.left').on( 'click', function() {
					slideLeft( 1 );
				});
				$('#zongler .arrow.right').on( 'click', function() {
					slideRight( 1 );
				});

				$('#zongler .arch-slider li').on( 'click', function() {
					var spaces = parseInt( $(this).attr('id').replace( 'item-', '' ) ) - centralItem;
					if ( spaces < 0 ) {
						slideLeft( -spaces );
					} else {
						slideRight( spaces );
					}
				});

				$(document).on( 'keyup', function( e ) {
					switch( e.keyCode ) {
						case 37: slideLeft( 1 ); break;
						case 39: slideRight( 1 ); break;
					}
				});

				$(window).on( 'resize', function() {
					setArchSliderContentHeight();
				});



				function slideLeft( spaces ) {
					if ( !sliderLock ) {

						sliderLock = true;
						prepareForSlide();
						getSlideN().animate( {'margin-left': '-120%'}, 800 );

						if ( spaces == 1 ) {
							$('.arch-slider ul #item-' + $items.length ).addClass('back-to-start');
						}

						$items.each( function() {
							var n = parseInt( $(this).attr('id').replace( 'item-', '' ) );
							$(this).attr('id', 'item-' + (  ( n + spaces - 1 + $items.length) % $items.length + 1 ) );
						});
						
						getSlideN().css('margin-left', '120%')
						getSlideN().animate( {'margin-left': '0'}, 800 );

						unlockSlider();
					}
				}

				function slideRight( spaces ) {
					if ( !sliderLock ) {

						sliderLock = true;
						prepareForSlide();
						getSlideN().animate( {'margin-left': '120%'}, 800 );

						if ( spaces == 1 ) {
							$('.arch-slider ul #item-1').addClass('back-to-end');
						}
							
						$items.each( function() {
							var n = parseInt( $(this).attr('id').replace( 'item-', '' ) );
							$(this).attr('id', 'item-' + ( ( n - spaces - 1 + $items.length) % $items.length + 1 ) );
						});

						getSlideN().css('margin-left', '-120%')
						getSlideN().animate( {'margin-left': '0'}, 800 );

						unlockSlider();
					}
				}

				function prepareForSlide() {
					$('.arch-slider ul #item-' + (centralItem - 1) ).removeClass('next');
					$('.arch-slider ul #item-' + (centralItem + 1) ).removeClass('next');
					$('.arch-slider ul #item-' + $items.length ).removeClass('back-to-end');
					$('.arch-slider ul #item-1').removeClass('back-to-start');
					
					$('.arch-slider ul #item-' + centralItem ).addClass('next');
				}

				function unlockSlider() {
					$('.arch-slider ul li, .arch-slider-content .arch-slider-slide').promise().done( function() {
						sliderLock = false;
					});
				}

				function getSlideN() {
					return $( $('.arch-slider-content .arch-slider-slide').get( $('.arch-slider ul #item-' + centralItem).index() ) );
				}

				function setArchSliderContentHeight() {
					$('.arch-slider-content').css('height', 'auto');
					$('.arch-slider').css('min-height', 'auto');

					var maxH = 0;
					$('.arch-slider-content .arch-slider-slide').each( function() {
						maxH = ( maxH >= $(this).height() ? maxH : $(this).height() );
					});
					$('.arch-slider-content').css('height', maxH);
					if ( window.matchMedia('(min-width: 831px)').matches ) {
						$('.arch-slider').css( 'min-height', $('.arch-slider-row .content-col').outerHeight() );
					}			
				}
			});

		} else {
			setTimeout(function() {
				defer()
			}, 50);
		}
	})();
	/* PAGE SCRIPTS */