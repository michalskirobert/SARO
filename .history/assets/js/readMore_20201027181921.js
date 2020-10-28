function myFunction() {
  var dots = document.querySelectorAll(".dots");
  var moreText = document.querySelector(".more");
  var btnText = document.querySelector(".button__default");


  dots.forEach(function (item, index) {

      if (dots[index].style.display === "none") {
        dots[index].style.display = "block";
        btnText.innerHTML = "Read more";
        moreText.style.display = "none";
      } else {
        dots.style.display = "none";
        btnText.innerHTML = "Read less";
        moreText.style.display = "block";
      }
    });
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
