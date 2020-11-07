const Getlanguage = window.navigator.userLanguage || window.navigator.language;
if (window.location.href === "https://saro.website/index.html"){
    this.Getlanguage  === "en-GB";
}
else if(Getlanguage  === "ja"){
    window.open("https://saro.website/jp/index.html", "_self");
}
else if(Getlanguage  === "ko"){
    window.open("https://saro.website/kr/index.html", "_self");
}
else if(Getlanguage  === "zh"){
    window.open("https://saro.website/ch/index.html", "_self")
}
else if(Getlanguage  === "vi"){
    window.open("https://saro.website/ch/index.html", "_self")
}

