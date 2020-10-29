var acc = document.getElementsByClassName("lesson");
var i;
var panel;

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


var btnDialogue = document.getElementsByClassName("dialogue");
var i;

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

var buttonMusic = document.getElementsByClassName("buttonMusic");
var i;

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

var buttonMovies = document.getElementsByClassName("buttonMovies");
var i;

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

var buttonGames = document.getElementsByClassName("buttonGames");
var i;

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

var buttonSeries = document.getElementsByClassName("buttonSeries");
var i;

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