
  "use strict";
  const Getlanguage =
    window.navigator.userLanguage || window.navigator.language;
  switch (Getlanguage) {
    case "en":
    case "en-GB":
    case "en-US":
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
    case "vi":
    default:
      window.open("https://saro.website/index", "_self");
      break;
  }


//Detectig language przy użyciu switch i case