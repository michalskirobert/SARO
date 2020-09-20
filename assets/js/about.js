var button = document.getElementsByClassName("button__black");
var i;

for (i = 0; i < button.length; i++) {
  button[i].addEventListener("click", () => {
    window.open("./contact.html", "_self")
  });
}