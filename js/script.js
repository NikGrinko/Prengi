$(document).ready(function () {
    $('.section-contacts__burger').click(function (event) {
        $('.section-contacts__wrapper-adaptability').toggleClass('active');

    });
    $('.section-contacts__burger').click(function (event) {
        $('.section-contacts__burger-item').toggleClass('section-contacts__burger-item_active');

    });
});

$(document).ready(function () {
    $('.carousel__inner').slick({
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        adaptiveHeight: true,
        prevArrow: '<button type="button" class="slick-prev"><img src="img/section-presentation/Rounded_Rectangle_7_copy_3.png"></img></button>',
        nextArrow: '<button type="button" class="slick-next"><img src="img/section-presentation/Rounded_Rectangle_7_copy.png"></img></button>',
        responsive: [
            {
                breakpoint: 768,
                settings: {

                    arrows: false
                }
            }

        ]

    });

});
