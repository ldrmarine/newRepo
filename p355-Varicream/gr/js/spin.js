var resultWrapper = $(".spin-result-wrapper, .pop-up-window"),
  wheel = $(".wheel-img");
$(".spin_active").on("click", function (e) {
  $(this).off(e),
    wheel.hasClass("rotated")
      ? resultWrapper.css({ display: "block" })
      : (wheel.addClass("super-rotation"),
        setTimeout(function () {
          resultWrapper.css({ display: "block" });
        }, 8e3),
        setTimeout(function () {
          $(".spin-wrapper").slideUp(), $(".order_block").slideDown();
          
        }, 9500),
        wheel.addClass("rotated"));
}),
  $(document).keydown(function (e) {
    27 === e.keyCode && resultWrapper.fadeOut();
  }),
  $(".close-popup, .spin-result-wrapper").click(function () {
    resultWrapper.fadeOut();
  }),
  $("a").on("touchend, click", function (e) {
    e.preventDefault(),
      $("body,html").animate(
        { scrollTop: $(".scroll_to_form").offset().top },
        400
      );
  }),
  $(".ac_footer a, .ac_gdpr_fix a").unbind("click"),
  $("header, footer ul").hover(function () {
    $(this).toggleClass("active");
  }),
  $(".spoil_js").click(function () {
    $(".spoil").toggle();
  });
var popupShow = 1;
$("html").mouseleave(function () {
  1 === popupShow && ((popupShow = 0), $(".overlay, .popup").fadeIn());
}),
  $(document).keydown(function (e) {
    27 === e.keyCode && $(".overlay, .popup").fadeOut();
  }),
  $(".close, .overlay, .popup_btn").click(function () {
    $(".overlay, .popup").fadeOut();
  }),
  $('input[name="referrer"]').val(document.referrer);
const url = new URL(document.location.href);
$('input[name="clickid"]').val(url.searchParams.get("clickid"));
var e = new Date().getTime() + 6e5*6;
          $("#clock")
            .countdown(e, { elapse: !0 })
            .on("update.countdown", function (e) {
              var o = $(this);
              e.elapsed
                ? o.html("00:00")
                : o.html(e.strftime("<span>%M</span> : <span>%S</span>"));
            });