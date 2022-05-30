window.addEventListener('DOMContentLoaded', () => {
  const timer = document.querySelector('.timer');

  const timerFooter = document.querySelector('.timer-bottom');

  function timerInit(wrapper) {
    const hourseCount = wrapper.querySelector('.timer-hours');
    const minutesCount = wrapper.querySelector('.timer-minutes');
    const secondsCount = wrapper.querySelector('.timer-seconds');

    let time = (Number(hourseCount.dataset.timerHours * 60 * 60) + Number(minutesCount.dataset.timerMinutes * 60) + Number(secondsCount.dataset.timerSeconds))  ;

    let hourse;
    let minutes; 
    let seconds ;
    let intervalTimer = setInterval(() => {
       hourse = Math.floor(time / 60 / 60);
       hourse = hourse.toString().split("");
       
       minutes = Math.floor(time / 60) - (hourse * 60);
       minutes = minutes.toString().split("");
       
       seconds = Math.floor(time % 60);
       console.log(seconds);
       seconds = seconds.toString().split("");
       console.log(seconds);
      hourseCount.innerHTML = hourse < 10 
      ? `<div class="count-item">0</div> <div class="count-item">${hourse}</div>` 
      : `<div class="count-item">${hourse[0]}</div> <div class="count-item">${hourse[1]}</div>`;

      minutesCount.innerHTML = minutes < 10 
      ? `<div class="count-item">0</div> <div class="count-item">${minutes[0]}</div> `  
      : `<div class="count-item">${minutes[0]}</div> <div class="count-item">${minutes[1]}</div>`;

      secondsCount.innerHTML = seconds < 10 
      ? `<div class="count-item">0</div> <div  class="count-item">${seconds}</div>` 
      : `<div class="count-item">${seconds[0]}</div> <div class="count-item">${seconds[1]}</div>`;
      time--;

      if (time < 0) {
        clearInterval(intervalTimer);
      }

    }, 1000)
    
  }

  timerInit(timer);
  timerInit(timerFooter);
});
 
  $(window).on("load", function(){
    $(".owl-carousel").owlCarousel({
      items: 1,
      loop: true,
      autoHeight: true,
      smartSpeed: 300,
      mouseDrag: true,
      touchDrag: true,
      pullDrag: false,
      nav: true,
      navText: ""
    });
  });