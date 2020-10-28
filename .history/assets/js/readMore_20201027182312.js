function myFunction() {
  var dots = document.querySelectorAll(".dots");
  var moreText = document.querySelector(".more");
  var btnText = document.querySelector(".button__default");

for(var i = 0; i < dots.length; i++){
      if (dots[i].style.display === "none") {
        dots[i].style.display = "block";
        btnText[i].innerHTML = "Read more";
        moreText[i].style.display = "none";
      } else {
        dots[i].style.display = "none";
        btnText[i].innerHTML = "Read less";
        moreText[i].style.display = "block";
      }
}
}

function myFunctionJapanese() {
  var dots = document.getElementById("dots");
  var moreText = document.getElementById("more");
  var btnText = document.getElementById("myBtn");
  var body = document.getElementById("body");

  if (dots.style.display === "none") {
    dots.style.display = "block";
    btnText.innerHTML = "さらに読む";
    moreText.style.display = "none";
  } else {
    dots.style.display = "none";
    btnText.innerHTML = "隠す";
    moreText.style.display = "block";
  }
}
