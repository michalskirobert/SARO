const cookiesContainer = document.createElement("div");
const cookiesCont = document.createElement("p");
const newBtn = document.createElement("button");

cookiesContainer.setAttribute("class", "cookies__container");

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
