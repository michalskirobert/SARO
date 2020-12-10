const dots = document.querySelectorAll(".dots");
const moreText = document.querySelectorAll(".more");
const btnText = document.querySelectorAll(".button__default");
const langRead = document.querySelector("html").lang;
let lang = "";

const langMap = {
  en: {
    readMore: "Read more",
    readLess: "Read less",
  },

  ja: {
    readMore: "さらに読む",
    readLess: "隠す",
  },
  zh: {
    readMore: "更多",
    readLess: "收起",
  },
  vi: {
    readMore: "Xem thêm",
    readLess: "Ẩn",
  },
};

switch (langRead) {
  case "ja":
    lang = "ja";
    break;
  case "zh":
    lang = "zh";
    break;
  case "vi":
    lang = "vi";
    break;
  case "ko":
    lang = "ko";
    break;
  default:
    lang = "en";
    break;
}

dots,
  moreText,
  btnText.forEach(function (item, index) {
    btnText[index].addEventListener("click", () => {
      if (dots[index].style.display === "none") {
        dots[index].style.display = "block";
        btnText[index].innerHTML = `${langMap[lang].readMore}`;
        moreText[index].style.display = "none";
      } else {
        dots[index].style.display = "none";
        btnText[index].innerHTML = `${langMap[lang].readLess}`;
        moreText[index].style.display = "block";
      }
    });
  });

//by Robert Michalski
