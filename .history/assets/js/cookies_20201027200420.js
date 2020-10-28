const language = document.querySelectorAll("html");
const cookieContainer = document.querySelector(".cookie-container");
const cookieButton = document.querySelector(".cookie-btn");
const cookiesContainer = document.createElement("div");
cookiesContainer.setAttribute("class", "cookies__container");
const cookiesCont = document.createElement("p");
const newBtn = document.createElement("button");

cookieButton.addEventListener("click", () => {
  cookieContainer.classList.remove("active");
  localStorage.setItem("cookieBannerDisplayed", "true");
});

setTimeout(() => {
  if (!localStorage.getItem("cookieBannerDisplayed")) {
    cookieContainer.classList.add("active");
  }
}, 2000);

cookiesContainer.appendChild(cookiesCont);
cookiesContainer.appendChild(newBtn);
document.body.appendChild(cookiesContainer);

for(var i = 0; i < language.length; i++){
if (language[i].lang === "en") {
  cookiesCont.innerHTML = `
We use cookies in this website to give you the best experience on our
site and show you relevant ads. To find out more, read our
<a href="https://saro.website/learnmore">privacy policy</a> and <a href="https://saro.website/learnmore">cookie policy</a>.`;
  newBtn.innerHTML = "I understood";

} if (language[i].lang === "ja") {
  cookiesCont.innerHTML = `当サイトは、お客様により良いサービスを提供するため、Cookieを使用しています。これには、ユーザーに合わせたコンテンツと広告が含まれます。 詳細については、<a href="https://saro.website/learnmore#japanese" target="_blank"> ここをクリック してください</a>`;
  newBtn.innerHTML = "I understood";
}
}
