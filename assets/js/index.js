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
    case "en":
    case "en-GB":
    case "en-US":
    case "vi":
    default:
      break;
    case "ja":
      window.open("https://saro.website/jp/index.html", "_self");
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
  }
}

//Detectig language przy użyciu switch i case

//by Robert Michalski
