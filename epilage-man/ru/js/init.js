$(function(){
    $('a[href^="#"]').click(function (){
        var elementClick = $(this).attr("href");
        var destination = $(elementClick).offset().top - 60;
        jQuery("html:not(:animated), body:not(:animated)").animate({scrollTop: destination}, 800);
        return false;
    });
    $('.slider-rev').slick({
      infinite: true,
      vertical: true,
      autoplay: false,
      dots: false,
      arrows: false,
      fade: false,
      speed: 300,
      slidesToShow: 3,
      prevArrow: '<span data-role="none" class="slick-prev animate" aria-label="Previous" tabindex="0" role="button"></span>',
      nextArrow: '<span data-role="none" class="slick-next animate" aria-label="Next" tabindex="0" role="button"></span>',
      responsive: [
        {
          breakpoint: 959,
          settings: {
            vertical: false,
            adaptiveHeight: true,
            arrows: true,
            dots: true,
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    });  
});
 