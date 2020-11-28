const language = document.querySelector("html").lang;
const audio = document.querySelectorAll(".audio");
const playBtn = document.querySelectorAll(".sound");
let path = "";

(function () {
  if (language !== "en") {
    path = "./../";
  } else {
    path = "./";
  }
  audio,
    playBtn.forEach((item, play) => {
      item.addEventListener("click", () => {
        if (audio[play].paused) {
          audio[play].currentTime = 0;
          audio[play].play();
          item.src = `${path}assets/img/icons/speaker--muted.svg`;
        } else {
          audio[play].pause();
          item.src = `${path}assets/img/icons/speaker.svg`;
        }
        audio[play].onended = () => {
          //ta funkcja nam pozwoli wrócić do poprzedniej ikonki z głośnikiem.
          item.src = `${path}assets/img/icons/speaker.svg`;
        };
      });
    });
})();

//Robert Michalski
