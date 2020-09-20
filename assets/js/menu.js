const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-list");
const links = document.querySelectorAll(".nav-list li");

hamburger.addEventListener("click", () => {
  if (navLinks.classList.toggle("open")){
}else{
}
  links.forEach(link => {
    link.classList.toggle("fade");
  });
});

function goBack() {
  window.history.back();
}

if(navigator.connection &&
  navigator.connection.type === 'cellular' &&
  navigator.connection.downlinkMax <= 0.115) {
}

