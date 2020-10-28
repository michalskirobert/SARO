const cookiesContainer = document.createElement("div");
cookiesContainer.setAttribute("class", "cookies__container");
const cookiesCont = document.createElement("p");
cookiesCont.setAttribute("class", "chujCiDoMordy");
cookiesCont.textContent = "Hello World";
const newBtn = document.createElement("button");
newBtn.setAttribute("class", "cipka");

document.body.appendChild(cookiesCont);
document.body.appendChild(newBtn);
document.body.appendChild(cookiesContainer);

const cookieContainer = document.querySelector(".cookie-container");
const cookieButton = document.querySelector(".cookie-btn");

cookieButton.addEventListener("click", () => {
  cookieContainer.classList.remove("active");
  localStorage.setItem("cookieBannerDisplayed", "true");
});

setTimeout(() => {
  if (!localStorage.getItem("cookieBannerDisplayed")) {
    cookieContainer.classList.add("active");
  }
}, 2000);
