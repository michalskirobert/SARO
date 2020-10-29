const audio = document.querySelectorAll(".audio");
const playBtn = document.querySelectorAll(".sound");

audio,
  playBtn.forEach((item, play) => {
    item.addEventListener("click", () => {
      if (audio[play].paused) {
        audio[play].currentTime = 0;
        audio[play].play();
        item.src = "./assets/img/icons/speaker--muted.svg";
      } else {
        audio[play].pause();
        item.src = "./assets/img/icons/speaker.svg";
      }
      audio[play].onended = () => {  //ta funkcja nam pozwoli wrócić do poprzedniej ikonki z głośnikiem, moglibyśmy użyć promisy, ale to najlepszy sposób (moim zdaniem);
        item.src = "./assets/img/icons/speaker.svg";
      };
    });
  });

//Robert Michalski