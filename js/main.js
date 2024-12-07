$(function() {
    $('.c-slider').slick({
        infinite: true,
        slidesToShow: 2,
        slidesToScroll: 1,
        draggable: false,
        arrows: false,
        responsive:[
            {
                breakpoint: 850,
                settings: {
                    slidesToShow:1,
                    slidesToScroll:1,
                }
            }
        ]
    });
    $('#arrow-right').on('click', function() {
        $('.c-slider').slick('slickNext');
    });
    $('#arrow-left').on('click', function() {
        $('.c-slider').slick('slickPrev');
    });
})

$(function() {
    $('.s-2').slick({
        infinite: true,
        slidesToShow: 2,
        slidesToScroll: 1,
        draggable: true,
        arrows: false,
        responsive:[
            {
                breakpoint: 920,
                settings: {
                    slidesToShow:1,
                    slidesToScroll:1,
                }
            }
        ]
    });
    $('#arrow-right-2').on('click', function() {
        $('.s-2').slick('slickNext');
    });
    $('#arrow-left-2').on('click', function() {
        $('.s-2').slick('slickPrev');
    });
})

$(function() {
    $('.s-3').slick({
        infinite: false,
        slidesToShow: 4,
        slidesToScroll: 1,
        draggable: true,
        arrows: false,
        responsive:[
            {
                breakpoint: 900,
                settings: {
                    slidesToShow:3,
                    slidesToScroll:1,
                    infinite: true,
                }
                
                
                
            }, 
            {
                breakpoint: 600,
                settings: {
                    slidesToShow:1,
                    slidesToScroll:1,
                    infinite: true,
                }   
            }
        ]
    });
    $('#arrow-right-3').on('click', function() {
        $('.s-3').slick('slickNext');
    });
    $('#arrow-left-3').on('click', function() {
        $('.s-3').slick('slickPrev');
    });
})


$(document).ready(function() {
	$('.header__burger').click(function(event) {
		$('.c-slider, .s-2, .s-3').toggleClass('active');
		$('body').toggleClass('lock');
	});
});