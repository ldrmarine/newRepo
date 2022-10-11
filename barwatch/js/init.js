$(function () {

  $('a[href^="#"]').click(function () {
    var elementClick = $(this).attr("href");
    var destination = $(elementClick).offset().top;
    jQuery("html:not(:animated), body:not(:animated)").animate({
      scrollTop: destination
    }, 800);
    return false;
  });

  $('.slider-cont').slick({
    infinite: true,
    autoplay: true,
    autoplaySpeed: 3000,
    adaptiveHeight: false,
    dots: false,
    arrows: true,
    fade: false,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: '<span data-role="none" class="slick-prev animate" aria-label="Previous" tabindex="0" role="button"></span>',
    nextArrow: '<span data-role="none" class="slick-next animate" aria-label="Next" tabindex="0" role="button"></span>'
  });

  $('.rev-block-v1 .rev-cont').slick({
    infinite: true,
    autoplay: false,
    adaptiveHeight: true,
    dots: false,
    arrows: true,
    fade: false,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: '<span data-role="none" class="slick-prev animate" aria-label="Previous" tabindex="0" role="button"></span>',
    nextArrow: '<span data-role="none" class="slick-next animate" aria-label="Next" tabindex="0" role="button"></span>'
  });


});
$('.cl-open').on('click', function () {
  $('#menu_popup').toggleClass('hidden');
});
$('.menu_link').on('click', function () {
  $('#menu_popup').addClass('hidden');
})
$(document).ready(function(){

  $('.feedback').click(function() {
      $('.popup-window').removeClass('hidden');
  });
  $('.close-popup').click(function() {
      $('.popup-window').addClass('hidden');
  });
  $('body').click(function(evt){
      if ((!evt.target.closest('.popup-window'))&&(!evt.target.closest('.feedback'))) {
          $('.popup-window').addClass('hidden');
      } 
  });

});