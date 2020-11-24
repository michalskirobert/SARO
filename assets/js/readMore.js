const dots = document.querySelectorAll(".dots");
const moreText = document.querySelectorAll(".more");
const btnText = document.querySelectorAll(".button__default");
const langRead = document.querySelectorAll("html");

for (var i = 0; i < langRead.length; i++) {
  if (langRead[i].lang === "en") {
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
  } else if (langRead[i].lang === "ja") {
    dots,
      moreText,
      btnText.forEach(function (item, index) {
        btnText[index].addEventListener("click", () => {
          if (dots[index].style.display === "none") {
            dots[index].style.display = "block";
            btnText[index].innerHTML = "さらに読む";
            moreText[index].style.display = "none";
          } else {
            dots[index].style.display = "none";
            btnText[index].innerHTML = "隠す";
            moreText[index].style.display = "block";
          }
        });
      });
  } else if (langRead[i].lang === "zh") {
    dots,
      moreText,
      btnText.forEach(function (item, index) {
        btnText[index].addEventListener("click", () => {
          if (dots[index].style.display === "none") {
            dots[index].style.display = "block";
            btnText[index].innerHTML = "更多";
            moreText[index].style.display = "none";
          } else {
            dots[index].style.display = "none";
            btnText[index].innerHTML = "少读";
            moreText[index].style.display = "block";
          }
        });
      });
  }
}

//by Robert Michalski
