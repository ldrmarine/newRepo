

function setWithExpiry(key, value, ttl) {
  const now = new Date();
  const item = {
    value: value,
    expiry: now.getTime() + ttl,
  };
  localStorage.setItem(key, JSON.stringify(item));
}

$("#order_form").on("submit", function (e) {
  let formData = {
    name: name.value,
    phone: phone.value,
  };

  setWithExpiry("myKey", formData, 20000);
});

$(document).ready(function () {
  $("a[href^='#']").click(function () {
    var _href = $(this).attr("href");
    $("html, body").animate({ scrollTop: $(_href).offset().top + "px" });
    return false;
  });

  new Swiper(".swiper-container", {
    slidesPerView: 1.5,
    centeredSlides: true,
    spaceBetween: 30,
    loop: true,
  });
  new Swiper(".swiper", {
    slidesPerView: 1,
    centeredSlides: true,
    spaceBetween: 30,
    loop: true,
  });
});


