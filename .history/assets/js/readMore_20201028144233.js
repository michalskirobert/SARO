const dots = document.querySelectorAll(".dots");
const moreText = document.querySelectorAll(".more");
const btnText = document.querySelectorAll(".button__default");
const jpBtn = document.querySelectorAll("html:lang(ja) .button__default");

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

    dots,
    moreText,
    jpBtn.forEach(function (item, index){
    jpBtn[index].addEventListener("click", () => {
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
  });})
