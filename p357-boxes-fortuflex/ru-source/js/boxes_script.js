"use strict";
var par = location.hash.slice(1).split("~"),
  parl = par.length;
if ((parl > 2 && (isp = par[4].replace(/\+/g, " ")), "vibrate" in navigator))
  var vibr = 1;
else vibr = 0;
var count = 1;
$(function () {
  $(".try").click(function () {
    if (count < 2)
      $(this).attr("src", "./images/opened_box2.png"),
        count++,
        setTimeout(function () {
          (document.getElementById("success02").className += " animate"),
            (document.getElementById("successtip02").className +=
              " animateSuccessTip"),
            (document.getElementById("modal02").className += " visible");
          document.getElementById("cntVal");
          document.querySelector(".sweet-overlay").style.display = "block";
        }, 800);
    else {
      var e = document.getElementById("discount");
      $(this).replaceWith(e),
        $(e).addClass("show"),
        setTimeout(function () {
          resultWrapper.style.display = "block";
        }, 1e3),
        setTimeout(function () {
          $("#boxes").slideUp(), $(".order_block").slideDown(), start_timer();
        }, 3500);
    }
  });
});
var counter = 1;
function hidemodal01() {
  vibr > 0 && navigator.vibrate(70);
  document.getElementById("modal01").classList.remove("visible"),
    (document.querySelector(".sweet-overlay").style.display = "none");
}
function hidemodal02() {
  vibr > 0 && navigator.vibrate(70);
  document.getElementById("modal02").classList.remove("visible"),
    (document.querySelector(".sweet-overlay").style.display = "none");
}
$(document).ready(function () {
  $("#update").on("click", function () {
    1 == counter &&
      (counter++,
      $("#cntVal").html(function (e, t) {
        return +t - 1;
      }));
  });
});
var resultWrapper = document.querySelector(".spin-result-wrapper"),
  wheel = document.querySelector(".wheel-img"),
  link = new URL(window.location.href);
function spin() {
  wheel.classList.contains("rotated") ||
    (wheel.classList.add("super-rotation"),
    setTimeout(function () {
      resultWrapper.style.display = "block";
    }, 8e3),
    setTimeout(function () {
      $(".spin-wrapper").slideUp(),
        $(".order_block").slideDown(),
        start_timer();
    }, 1e4),
    wheel.classList.add("rotated"));
}
$(function () {
  $("a[href^='#']").click(function () {
    var e = $(this).attr("href");
    return $("html, body").animate({ scrollTop: $(e).offset().top + "px" }), !1;
  }),
    $(
      'input[value="Узнать подробнее"], input[value="Принять участие в розыгрыше"]'
    ).click(function () {
      $(".eeee, .fadepopup").css("display", "none");
    });
});
var closePopup = document.querySelector(".close-popup");
$(".close-popup, .pop-up-button").click(function (e) {
  e.preventDefault(), $(".spin-result-wrapper").fadeOut();
  var t = $("#roulette").offset().top;
  $("body,html").animate({ scrollTop: t }, 800);
});
var intr,
  time = 600;
function start_timer() {
  intr = setInterval(tick, 1e3);
}
function tick() {
  time -= 1;
  var e = Math.floor(time / 60),
    t = time - 60 * e;
  0 == e && 0 == t && clearInterval(intr),
    (t = t >= 10 ? t : "0" + t),
    (e = e >= 10 ? e : "0" + e),
    $("#min").html(e),
    $("#sec").html(t);
}
$(".ord_button").on("click", function () {
  $(".screenLock .msg .close").trigger("click");
});