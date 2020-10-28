const audio = document.querySelectorAll(".audio");
const playBtn = document.querySelectorAll(".sound");

audioPrevious, audio, playBtn.forEach((item, play) => {
playBtn[play].addEventListener("click", () => {

    if (audio[play].paused) {
      audio[play].currentTime = 0;
      audio[play].play();
      playBtn[play].src='./assets/img/icons/Bebo.png';
    } else {
      audio[play].pause();
      playBtn[play].src='./assets/img/icons/speaker.png';
    }

});
});