var modal = document.getElementById("myModal");

var img = $(".myImg");
var modalImg = $("#img01");
var captionText = document.getElementById("caption");
$(".myImg").click(function () {
  modal.style.display = "block";
  var newSrc = this.src;
  modalImg.attr("src", newSrc);
  captionText.innerHTML = this.alt;
});

var span = document.getElementsByClassName("close")[0];

span.onclick = function () {
  modal.style.display = "none";
};

//by Robert Michalski
