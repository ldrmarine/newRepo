let doors = document.querySelectorAll(".door"),
  doorSales = document.querySelectorAll(".door__sales"),
  doorWrapper = document.querySelector(".door__wrapper"),
  spinResultWrapper = document.querySelector(".spin-result-wrapper"),
  orderBlock = document.querySelector(".lead-form-box"),
  orderBlockForm = document.querySelector(".order_block_form"),
  door1 = document.getElementById("door__1"),
  door2 = document.getElementById("door__2"),
  door3 = document.getElementById("door__3"),
  doorSale1 = document.getElementById("door__sales1"),
  doorSale2 = document.getElementById("door__sales2"),
  doorSale3 = document.getElementById("door__sales3");
doors.forEach(function (o) {
  o.addEventListener("click", openDoor);
});
var closePopup = document.querySelector(".close-popup");
function openDoor(o) {
  o.currentTarget.classList.add("open"),
    setTimeout(function () {
      (spinResultWrapper.style.display = "block"),
        (orderBlock.style.display = "block"),
        (doorWrapper.style.display = "none"),
        start_timer && start_timer();
    }, 3500),
    doorSales.forEach(function (o) {
      door1.classList.contains("open")
        ? ((doorSale1.innerHTML = "50%"),
          (doorSale2.innerHTML = "10%"),
          (doorSale3.innerHTML = "25%"))
        : door2.classList.contains("open")
        ? ((doorSale2.innerHTML = "50%"),
          (doorSale1.innerHTML = "25%"),
          (doorSale3.innerHTML = "10%"))
        : door3.classList.contains("open") &&
          ((doorSale1.innerHTML = "10%"),
          (doorSale3.innerHTML = "50%"),
          (doorSale2.innerHTML = "25%"));
    });
  for (let o = 0; o < doors.length; o++)
    doors[o].classList.contains("open") ||
      setTimeout(function () {
        doors[o].classList.add("open");
      }, 2e3);
  for (let o = 0; o < doors.length; o++)
    doors[o].removeEventListener("click", openDoor);
}
$(".pop-up-button").click(function (o) {
  $(".spin-result-wrapper").fadeOut(), o.preventDefault();
  var e = $("#roulette").offset().top;
  $("body,html").animate({ scrollTop: e }, 400);
}),
  $(".close-popup, .pop-up-button").click(function (o) {
    o.preventDefault(), $(".spin-result-wrapper").fadeOut();
  });
var intr,
  time = 3600;
function start_timer() {
  intr = setInterval(tick, 1e3);
}
function tick() {
  time -= 1;
  var o = Math.floor(time / 60),
    e = time - 60 * o;
  0 == o && 0 == e && clearInterval(intr),
    (e = e >= 10 ? e : "0" + e),
    (o = o >= 10 ? o : "0" + o),
    $("#min").html(o),
    $("#sec").html(e);
}
start_timer();