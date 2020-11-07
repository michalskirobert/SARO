const acc = document.getElementsByClassName("lesson");
const panel;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
}


const btnDialogue = document.getElementsByClassName("dialogue");

for (i = 0; i < btnDialogue.length; i++) {
  btnDialogue[i].addEventListener("click", function() {
    this.classList.toggle("active");
    panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
}

const buttonMusic = document.getElementsByClassName("buttonMusic");

for (i = 0; i < buttonMusic.length; i++) {
  buttonMusic[i].addEventListener("click", function() {
    this.classList.toggle("active");
    panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
}

const buttonMovies = document.getElementsByClassName("buttonMovies");

for (i = 0; i < buttonMovies.length; i++) {
  buttonMovies[i].addEventListener("click", function() {
    this.classList.toggle("active");
    panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
}

const buttonGames = document.getElementsByClassName("buttonGames");

for (i = 0; i < buttonGames.length; i++) {
  buttonGames[i].addEventListener("click", function() {
    this.classList.toggle("active");
    panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
}

const buttonSeries = document.getElementsByClassName("buttonSeries");

for (i = 0; i < buttonSeries.length; i++) {
  buttonSeries[i].addEventListener("click", function() {
    this.classList.toggle("active");
    panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
}