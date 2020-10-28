const language = document.querySelectorAll("html");
const cookieContainer = document.querySelector(".cookie-container");
const cookieButton = document.querySelector(".cookie-btn");
const cookiesContainer = document.createElement("div");
cookiesContainer.setAttribute("class", "cookie-container");
const cookiesCont = document.createElement("p");
const newBtn = document.createElement("button");
newBtn.setAttribute("class", "cookie-btn");


cookiesContainer.appendChild(cookiesCont);
cookiesContainer.appendChild(newBtn);
document.body.appendChild(cookiesContainer);

cookieButton.addEventListener("click", () => {
  cookieContainer.classList.remove("active");
  localStorage.setItem("cookieBannerDisplayed", "true");
});

setTimeout(() => {
  if (!localStorage.getItem("cookieBannerDisplayed")) {
    cookieContainer.classList.add("active");
  }
}, 2000);

for(var i = 0; i < language.length; i++){
if (language[i].lang === "en") {
  cookiesCont.innerHTML = `
  We use cookies to understand how you use our site and to improve your experience. This includes personalizing content and advertising.
  By continuing to use our site, you accept our use of cookies, revised,
  <a href="https://saro.website/learnmore" target="_blank">Privacy Policy and Terms of Use</a>
   Our website is free of charged so why we need to add some ads to keep our domain and hosting.
   <a href="https://policies.google.com/technologies/cookies?hl=en-US" target="_blank">Learn more about cookies</a>`;

  newBtn.innerHTML = "I understood";

} if (language[i].lang === "ja") {
  cookiesCont.innerHTML = `当サイトは、お客様により良いサービスを提供するため、Cookieを使用しています。
  これには、ユーザーに合わせたコンテンツと広告が含まれます。 詳細については、
  <a href="https://saro.website/learnmore#japanese" target="_blank">ここをクリック してください</a> 当サイトを引き続きご利用いただく際は、
  Cookieの使用、改訂されたプライバシーポリシーおよび利用規約に同意いただいたものとみなします。Cookieについて詳しくは
  <a href="https://support.google.com/accounts/answer/61416?co=GENIE.Platform%3DDesktop&hl=ja" target="_blank">こちら</a>`;

  newBtn.innerHTML = "分かりました";
}
}
