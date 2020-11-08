//name-checker JavaScript
function getName() {
  var name = document.getElementById("name").value;
  if (name.endsWith("a") && !name.match("Kosma") && !name.match("Kuba")) {
    result = document.getElementById("result").innerHTML =
      name + " is a female name";
  } else {
    result = document.getElementById("result").innerHTML =
      name + " is a male name";
  }
}

function getNameJapanese() {
  var name = document.getElementById("name").value;
  if (name.endsWith("a") && !name.match("Kosma") && !name.match("Kuba")) {
    result = document.getElementById("result").innerHTML =
      name + "という名前は女性です";
  } else {
    result = document.getElementById("result").innerHTML =
      name + "という名前は男性です";
  }
}

function getNameChinese() {
  var name = document.getElementById("name").value;
  if (name.endsWith("a") && !name.match("Kosma") && !name.match("Kuba")) {
    result = document.getElementById("result").innerHTML =
      name + " 是 女士";
  } else {
    result = document.getElementById("result").innerHTML =
      name + "という名前は男性です";
  }
}

//text to speech JQuery
$(function () {
  $("a.say").on("click", function (e) {
    e.preventDefault();
    var text = $('input[name="Text"]').val();
    var x = document.getElementById("speech");
    text = encodeURIComponent(text);
    console.log(text);
    var url =
      "https://translate.google.com/translate_tts?ie=UTF-8&q=" +
      text +
      "&tl=pl&client=gtx";
    $("audio").attr("src", url).get(0).play();
  });
});
