function play() {
  const map = {
    en: {
      path: "./../../",
    },
    diffLang: {
      path: "./../../../",
    },
  };

  const audio = document.querySelectorAll(".audio");
  const playBtn = document.querySelectorAll(".sound");
  const isLang = document.querySelector("html").lang;
  let setLang = "";

  if (isLang === "en") {
    setLang = "en";
  } else {
    setLang = "diffLang";
  }

  audio,
    playBtn.forEach((item, play) => {
      if (audio[play].paused) {
        audio[play].currentTime = 0;
        audio[play].play();
        item.src = `${map[setLang].path}assets/img/icons/speaker--muted.svg`;
      } else {
        audio[play].pause();
        item.src = `${map[setLang].path}assets/img/icons/speaker.svg`;
      }
      audio[play].onended = () => {
        //ta funkcja nam pozwoli wrócić do poprzedniej ikonki z głośnikiem, moglibyśmy użyć promisy, ale to najlepszy sposób (moim zdaniem) /Robert
        item.src = `${map[setLang].path}assets/img/icons/speaker.svg`;
      };
    });
}
