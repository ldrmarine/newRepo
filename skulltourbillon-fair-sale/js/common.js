var reviews = new Swiper(".reviews__slider", {
  autoHeight: true,
  pagination: {
    el: ".reviews__pag",
    clickable: true
  },
  spaceBetween: 40
});

window.onload = function() {
  const audioComment = document.querySelectorAll(".audio__comment");
  const audioItem = document.querySelectorAll(".audio__item");
  const audioInfo = document.querySelectorAll(".audio__info");
  const audioBtn = document.querySelectorAll('.audio__control');
  const progress = document.querySelectorAll('.audio__progress');

  let isPlay = false;
  let index = Number;

  function setMetaAudio (c) { // определение текущего времени воспроизведения
    audioInfo[c].innerText = Math.floor((audioItem[c].duration - audioItem[c].currentTime) / 60) + ': ' + ('0' + Math.round((audioItem[c].duration - audioItem[c].currentTime) % 60)).slice(-2);
  };

  audioItem.forEach((item, i)=> {
    setMetaAudio(i)
    item.addEventListener('loadedmetadata', function() {
      setMetaAudio(i)
    });
  });
  let setWidthAudio = function () { // назначаем ширину элементов в соответствии с длительностью трека
    let arr = [];
    for (let i = 0; i < audioItem.length; i++) {
      arr.push(audioItem[i].duration)
    }
    let min = Math.min.apply(null, arr);
    let max = Math.max.apply(null, arr);
    let med = Math.round(max - min);
      for (let j = 0; j < audioComment.length; j++) {
        audioComment[j].style.width = 40 + (audioItem[j].duration - min) * 10 / med + '%'
      }
    
  }
  setInterval(() => {
    setWidthAudio()
  }, 500);

  function setProgress (c) { // прогрессбар
    let progresPercent =  100 / audioItem[c].duration * audioItem[c].currentTime;
    progress[c].style.width = progresPercent + '%'
  };

  function playMusic(c) { // запуск конкретного трека
    isPlay = true;
    audioItem[c].play();
    audioBtn[c].classList.add('play')
    let progressInterval = setInterval(() => {
      if (!isPlay) clearInterval(progressInterval)
      setMetaAudio (c);
      setProgress (c);
    }, 100);
  };
  function stopMusic() { // остановка всех треков
    for (let i = 0; i < audioComment.length; i++) {
      isPlay = false;
      audioItem[i].pause();
      audioBtn[i].classList.remove('play');
    }
  }
  for (let i = 0; i < audioComment.length; i++) {
    audioBtn[i].addEventListener('click', function () {
      if (index !== i) { // если включен трек, который сейчас не воспроизводится, то остальные отключаются
        stopMusic();
        playMusic(i);
        audioItem.forEach(function(item) { // обнуляем прогресс воспроизведения на ранее запущенных треках
          item.currentTime = 0;
        });
        index = i;
      } else {
        isPlay ? stopMusic() : playMusic(i); // ставим паузу, при повторном нажатии на трек
      };
    })
  }
}

