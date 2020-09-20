var language = window.navigator.userLanguage || window.navigator.language;
if (window.location.href === "https://saro.website/index.html"){
    this.language === "en-GB";
}
else if(language === "ja"){
    window.open("https://saro.website/jp/index.html", "_self");
}
else if(language === "ko"){
    window.open("https://saro.website/kr/index.html", "_self");
}
else if(language === "zh"){
    window.open("https://saro.website/ch/index.html", "_self")
}
else if(language === "vi"){
    window.open("https://saro.website/ch/index.html", "_self")
}

