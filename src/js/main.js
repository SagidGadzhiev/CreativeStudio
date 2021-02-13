new WOW(
    {
        boxClass:     'wow',
        animateClass: 'animated',
        offset:       0,
        mobile:       true,
        live:         true,
    }).init();
$(document).ready(function(){
        $(".owl-carousel").owlCarousel({
                items: 1,
                loop: false,
                nav: true,
        });
        $(window).scroll(function () {
                if ($(this).scrollTop() > 700){
                        $('.upBtn').fadeIn(3000)
                }else{
                        $('.upBtn').fadeOut()
                }
                if ($(this).scrollTop() < 700){
                        $('.downBtn').fadeIn(3000)
                }else{
                        $('.downBtn').fadeOut()
                }
        });
});

$(document).ready(function () {
        $('.contact-content__form-label').on('click', function () {
                $(this).addClass('active').siblings().removeClass('active');
        });
        $('.burger-menu').on('click', function () {
                $('.burger-menu').toggleClass('active');
                $('.header-nav').toggleClass('active');
        });
        $('.worksFadeMenu').on('click', function () {
                $('.worksFadeMenu').toggleClass('active');
                $('.works-nav').toggleClass('active');
        });
});