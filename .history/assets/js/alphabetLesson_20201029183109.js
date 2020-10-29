const audio = document.querySelectorAll(".audio");
const playBtn = document.querySelectorAll(".sound");

audio,
  playBtn.forEach((item, play) => {
    item.addEventListener("click", () => {
      if (audio[play].paused) {
        audio[play].currentTime = 0;
        audio[play].play();
        playBtn[play].src = "./assets/img/icons/speaker--muted.svg";
      } else {
        audio[play].pause();
        playBtn[play].src = "./assets/img/icons/speaker.svg";
      }
      audio[play].onended = () => {
        playBtn[play].src = "./assets/img/icons/speaker.svg";
      };
    });
  });

//Robert Michalski