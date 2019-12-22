$(document).ready(function(){
  $(".owl-carousel").owlCarousel();
});
$('.news-slider').owlCarousel({
    loop:true,
    margin: 5,
    autoplay: true,
    mouseDrag: true,
    nav: true,
    dots: false,
    responsive:{
        0:{
            items:1
        },
        500:{
            items:2
        },
        950:{
        	items:3
        }
    }
});
$('.partners-slider').owlCarousel({
    loop:true,
    margin: 5,
    autoplay: true,
    mouseDrag: true,
    nav: true,
    dots: false,
    responsive:{
        600:{
            items:3
        },
        740:{
            items:5
        },
        1000:{
            items:6
        }
    }
});
$('.reviews-slider').owlCarousel({
    items: 1,
    loop:true,
    margin: 0,
    autoplay: false,
    mouseDrag: true,
    nav: true,
    dots: false,
});

// burger menu

jQuery(document).ready(function() {
	var burgerBtn = $('.nav__burger-btn');

	burgerBtn.click(function() {
		if (burgerBtn.hasClass('open')) {
			burgerBtn.removeClass('open');
			$('.nav').removeClass('open');
			$('.nav__menu-container').removeClass('open');
		}else {
			burgerBtn.addClass('open');
			$('.nav').addClass('open');
			$('.nav__menu-container').addClass('open');
		}
	});
});

// modal
jQuery(document).ready(function() {
    var modalOpenBtn = $("#modal-open");
    var modalCloseBtn = $("#modal-close");
    var modal = $(".modal");

    modalOpenBtn.click(function(){
        modal.removeClass('hidden');
    });
    modalCloseBtn.click(function() {
        modal.addClass('hidden');
    });
});
