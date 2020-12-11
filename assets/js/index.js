window.onload = () => {
  if (window.location.href !== "https://saro.website/index") {
    getLanguage();
  } else {
  }
};

function getLanguage() {
  "use strict";
  const userLanguage =
    window.navigator.userLanguage || window.navigator.language;

  switch (userLanguage) {
    case "vi":
    case "vi-vn":
      window.open("https://saro.website/vi/index.html", "_self");
      break;

    case "ja":
      break;

    case "ko":
    case "ko-kr":
      window.open("https://saro.website/ko/index.html", "_self");
      break;

    case "zh":
    case "zh-CN":
    case "zh-TW":
    case "zh-HK":
    case "zh-sg":
      window.open("https://saro.website/ch/index.html", "_self");
      break;

    default:
      window.open("https://saro.website/index.html", "_self");
      break;
  }
}

//Detectig language przy użyciu switch i case

//by Robert Michalski
