$(document).ready(function () {
  var t = document.querySelector(".wheel-img");
  $(".cursor-text").on("click", function (e) {
    $(this).off(e),
      t.classList.contains("rotated") ||
        (t.classList.add("super-rotation"),
        setTimeout(function () {
          $(".spin-wrapper").slideUp(),
            $(".order_block").slideDown(),
            start_timer();
        }, 7500),
        t.classList.add("rotated"));
  }),
    $(".main__link").on("touchend, click", function (t) {
      t.preventDefault(),
        $("body,html").animate({ scrollTop: $(".toform").offset().top }, 800);
    }),
    $(".ac_footer a, .ac_gdpr_fix a").unbind("click");
});
let intr,
  time = 3600;
function start_timer() {
  intr = setInterval(tick, 1e3);
}
function tick() {
  time -= 1;
  let t = Math.floor(time / 60),
    e = time - 60 * t;
  0 == t && 0 == e && clearInterval(intr),
    (e = e >= 10 ? e : "0" + e),
    (document.getElementById("#min").innerHTML = t),
    (document.getElementById("#sec").innerHTML = e);
}
$("[name='phone']").on("input", function () {
  $(this).val(
    $(this)
      .val()
      .replace(/[A-Za-zА-Яа-яЁё]/, "")
  );
}),
  $("[name='name']").on("input", function () {
    $(this).val($(this).val().replace(/[0-9]/, ""));
  });
