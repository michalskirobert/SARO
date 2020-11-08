const language = document.querySelectorAll("html");
const audio = document.querySelectorAll(".audio");
const playBtn = document.querySelectorAll(".sound");

for(let i = 0; i < language.length; i++){
  if(language[i].lang === "en"){
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
      audio[play].onended = () => {  //ta funkcja nam pozwoli wrócić do poprzedniej ikonki z głośnikiem, moglibyśmy użyć promisy, ale to najlepszy sposób (moim zdaniem) /Robert
        item.src = "./assets/img/icons/speaker.svg";
      };
    });
  });
}else {
  audio,
  playBtn.forEach((item, play) => {
    item.addEventListener("click", () => {
      if (audio[play].paused) {
        audio[play].currentTime = 0;
        audio[play].play();
        item.src = "./../assets/img/icons/speaker--muted.svg";
      } else {
        audio[play].pause();
        item.src = "./../assets/img/icons/speaker.svg";
      }
      audio[play].onended = () => {
        item.src = "./../assets/img/icons/speaker.svg";
      };
    });
  });
}
}

//Robert Michalski