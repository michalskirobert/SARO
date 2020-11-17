const languageCookie = document.querySelectorAll("html");
const cookiesContainer = document.createElement("div");
cookiesContainer.setAttribute("class", "cookie-container");
const cookiesCont = document.createElement("p");
const newBtn = document.createElement("button");
newBtn.setAttribute("class", "cookie-btn");
const cookieContainer = document.querySelector(".cookie-container");
const cookieButton = document.querySelector(".cookie-btn");

cookiesContainer.appendChild(cookiesCont);
cookiesContainer.appendChild(newBtn);
document.body.appendChild(cookiesContainer);

document.querySelector(".cookie-btn").addEventListener("click", () => {
  cookiesContainer.classList.remove("active");
  localStorage.setItem("cookieBannerDisplayed", "true");
});

setTimeout(() => {
  if (!localStorage.getItem("cookieBannerDisplayed")) {
    cookiesContainer.classList.add("active");
  }
}, 2000);

for (var i = 0; i < languageCookie.length; i++) {
  if (languageCookie[i].lang === "en") {
    cookiesCont.innerHTML = `
  We use cookies to understand how you use our site and to improve your experience. This includes personalizing content and advertising.
  By continuing to use our site, you accept our use of cookies, revised,
  <a href="https://saro.website/learnmore" target="_blank">Privacy Policy and Terms of Use</a>
   Our website is free of charged so why we need to add some ads to keep our domain and hosting.
   <a href="https://policies.google.com/technologies/cookies?hl=en-US" target="_blank">Learn more about cookies</a>`;

    newBtn.innerHTML = "I understood";
  } else if (languageCookie[i].lang === "ja") {
    cookiesCont.innerHTML = `当サイトは、お客様により良いサービスを提供するため、Cookieを使用しています。
  これには、ユーザーに合わせたコンテンツと広告が含まれます。 詳細については、
  <a href="https://saro.website/learnmore#japanese" target="_blank">ここをクリック してください</a> 当サイトを引き続きご利用いただく際は、
  Cookieの使用、改訂されたプライバシーポリシーおよび利用規約に同意いただいたものとみなします。Cookieについて詳しくは
  <a href="https://support.google.com/accounts/answer/61416?co=GENIE.Platform%3DDesktop&hl=ja" target="_blank">こちら</a>`;

    newBtn.innerHTML = "分かりました";
  } else if (languageCookie[i].lang === "zh") {
    cookiesCont.innerHTML = `我们使用cookies为了了解您使用我们网站的方式及改善您的体验。这包括内容和广告个性化。通过继续看我们网站，您同意我们cookies用法而看过
  <a href="https://saro.website/learnmore" target="_blank">隐私权政策和使用条款</a>
  我们网站是免费的，因此我们需要加上一些广告，让我们网站保持网域名称与网站托管。 关于cookies
   <a href="https://policies.google.com/technologies/cookies?hl=zh-Hs" target="_blank">了解更多</a>`;

    newBtn.innerHTML = "知道了";
  }
}

//by Robert Michalski
