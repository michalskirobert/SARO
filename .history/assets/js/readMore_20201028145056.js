const dots = document.querySelectorAll(".dots");
const moreText = document.querySelectorAll(".more");
const btnText = document.querySelectorAll(".button__default");
const language = document.querySelectorAll("html");

for (var i = 0; i < language.length; i++) {
  if (language.lang === "en") {
    dots,
      moreText,
      btnText.forEach(function (item, index) {
        btnText[index].addEventListener("click", () => {
          if (dots[index].style.display === "none") {
            dots[index].style.display = "block";
            btnText[index].innerHTML = "Read more";
            moreText[index].style.display = "none";
          } else {
            dots[index].style.display = "none";
            btnText[index].innerHTML = "Read less";
            moreText[index].style.display = "block";
          }
        });
      });
  } else if (language.lang === "ja") {
    dots,
      moreText,
      jpBtn.forEach(function (item, index) {
        jpBtn[index].addEventListener("click", () => {
          if (dots[index].style.display === "none") {
            dots[index].style.display = "block";
            jpBtn[index].innerHTML = "さらに読む";
            moreText[index].style.display = "none";
          } else {
            dots[index].style.display = "none";
            jpBtn[index].innerHTML = "隠す";
            moreText[index].style.display = "block";
          }
        });
      });
  }
}
