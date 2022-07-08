$(document).ready(function() {

    /* scroll */

    $("a[href^='#']").click(function() {
        var _href = $(this).attr("href");
        $("html, body").animate({
            scrollTop: $(_href).offset().top + "px"
        });
        return false;
    });
$(".callback-btn").click(function() {
    $(".callback-form").toggleClass("hide");
  });

  $(".show-callback").click(function() {
    $(".callback-form").removeClass("hide");
  });

  $(document).click(function(e) {
    if (
      $(e.target).closest($(".callback-form, .callback-btn, .show-callback"))
        .length > 0
    ) {
      return;
    }
    $(".callback-form").addClass("hide");
  });

  $('img[src="img/i-cross.svg"]').click(function() {
    $(".callback-form").addClass("hide");
  });
    /* timer */

    function update() {
        var Now = new Date(),
            Finish = new Date();
        Finish.setHours(23);
        Finish.setMinutes(59);
        Finish.setSeconds(59);
        if (Now.getHours() === 23 && Now.getMinutes() === 59 && Now.getSeconds === 59) {
            Finish.setDate(Finish.getDate() + 1);
        }
        var sec = Math.floor((Finish.getTime() - Now.getTime()) / 1000);
        var hrs = Math.floor(sec / 3600);
        sec -= hrs * 3600;
        var min = Math.floor(sec / 60);
        sec -= min * 60;
        $(".timer .hours").text(pad(hrs));
        $(".timer .minutes").text(pad(min));
        $(".timer .seconds").text(pad(sec));
        setTimeout(update, 200);
    }

    function pad(s) {
        return ('00' + s).substr(-2)
    }
    update();

    /* sliders */

    $(".owl-carousel").owlCarousel({
        items: 1,
        loop: true,
        smartSpeed: 300,
        mouseDrag: false,
        pullDrag: false,
        dots: false,
        nav: true,
        navText: ""
    });

});