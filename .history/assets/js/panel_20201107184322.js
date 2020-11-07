const acc = document.getElementsByClassName("lesson");

for (let i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    const panel;
    panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
}


const btnDialogue = document.getElementsByClassName("dialogue");

for (let i = 0; i < btnDialogue.length; i++) {
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

for (let i = 0; i < buttonMusic.length; i++) {
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

for (let i = 0; i < buttonMovies.length; i++) {
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

for (let i = 0; i < buttonGames.length; i++) {
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

for (let i = 0; i < buttonSeries.length; i++) {
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