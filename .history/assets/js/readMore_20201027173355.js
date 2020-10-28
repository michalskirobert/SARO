function myFunction() {
    var dots = document.querySelectorAll(".dots");
    var moreText = document.querySelectorAll(".more");
    var btnText = document.querySelectorAll(".content > button");


    dots, moreText, btnText.forEach(function (item, index) {
    if (item[index].style.display === "none") {
      item[index].style.display = "block";
      item[index].innerHTML = "Read more";
      item[index].style.display = "none";
    } else {
      dots[index].style.display = "none";
      btnText[index].innerHTML = "Read less";
      moreText[index].style.display = "block";
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