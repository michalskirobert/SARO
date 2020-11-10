
  "use strict";
  const Getlanguage =
    window.navigator.userLanguage || window.navigator.language;
  switch (Getlanguage) {
    case "en":
    case "en-GB":
    case "en-US":
    break;
    case "ja":
      window.open("/jp/index.html", "_self");
      break;
    case "ko":
    case "ko-kr":
      window.open("/ko/index.html", "_self");
      break;
    case "zh":
    case "zh-CN":
    case "zh-TW":
    case "zh-HK":
    case "zh-sg":
      window.open("/ch/index.html", "_self");
      break;
    case "vi":
    default:
      window.open("/index", "_self");
      break;
  }


//Detectig language przy użyciu switch i case