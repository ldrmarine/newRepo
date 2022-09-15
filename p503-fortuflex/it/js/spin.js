var resultWrapper = document.querySelector(".spin-result-wrapper"),
  wheel = document.querySelector(".wheel-img");
$(".wheel-cursor").on("touchend, click", function (e) {
  e.preventDefault(),
    $(this).off("click"),
    wheel.classList.contains("rotated")
      ? (resultWrapper.style.display = "block")
      : (wheel.classList.add("super-rotation"),
        setTimeout(function () {
          resultWrapper.style.display = "block";
        }, 8e3),
        setTimeout(function () {
          $(".spin-wrapper").slideUp(), $(".order_block").slideDown();
          var e = new Date().getTime() + 6e5;
          $("#clock")
            .countdown(e, { elapse: !0 })
            .on("update.countdown", function (e) {
              var t = $(this);
              e.elapsed
                ? t.html("<span>00</span> : <span>00</span>")
                : t.html(e.strftime("<span>%M</span> : <span>%S</span>"));
            });
        }, 1e4),
        wheel.classList.add("rotated"));
});
var closePopup = document.querySelector(".close-popup");
$(".close-popup, .pop-up-button").click(function (e) {
  e.preventDefault(), $(".spin-result-wrapper").fadeOut();
  var t = $(".scroll").offset().top;
  $("body,html").animate({ scrollTop: t }, 800);
}),
  $("a, nav span").on("touchend, click", function (e) {
    e.preventDefault(),
      $("body,html").animate(
        { scrollTop: $(".scroll").offset().top - 20 },
        400
      );
  }),
  $(".ac_footer a, .ac_gdpr_fix a").unbind("click");
  setTimeout(function () {
    $(".spin-wrapper").slideUp(), $(".order_block").slideDown();
    var e = (new Date().getTime() + 6e5) * 6 ;
    $("#clock")
      .countdown(e, { elapse: !0 })
      .on("update.countdown", function (e) {
        var t = $(this);
        e.elapsed
          ? t.html("<span>00</span> : <span>00</span>")
          : t.html(e.strftime("<span>%M</span> : <span>%S</span>"));
      });
  }, 0)