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

//by Robert Michalski
