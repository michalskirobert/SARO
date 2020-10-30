

function sendMail() {
  const email = document.getElementById("email").value;
  const name = document.getElementById("name").value;
  const msg = document.getElementById("message").value;
  const language = document.getElementsByTagName("html");
  const lang = document.getElementById("language").value;
  const msgVald = document.querySelector("#msgValid");
  const nameVald = document.querySelector("#nameValid");
  const emailVald = document.querySelector("#emailValid");
  const response = grecaptcha.getResponse();

  for (var i = 0; i < language.length; i++) {
    if (language[i].lang === "en") {
      const successMsg =
        "Your message has been sent. <br /> Thank you. <br /> You also have received <br> confirmation via email.";
      const failMsg = "Mail coudln't be sent. <br /> Please try again.";
      const failCaptcha = "Check captcha :) <br> unless you are a robot 🤖";
      const captchaIssue =
        "It's just captcha issue... <br> please contact us by sending report about it";
      const emailValid = "Email";
      const nameValid = "Name";
      const messageValid = "Message";

    } else if (language[i].lang === "ja") {
      const successMsg =
        "メッセージが送信されました。 <br /> お問い合わせありがとうございます。 <br /> ご記入いただいたメールアドレス宛に、<br> 確認メールを送信しております。";
      const failMsg =
        "メールを送信できませんでした。<br /> 内容をご確認の上、<br> 再度お試し下さい。";
      const failCaptcha =
        "キャプチャーをご確認下さい。<br> ご確認いただけない場合は、<br> お客様のアカウントは <br> ロボットとみなします🤖";
      const captchaIssue =
        "キャプチャーに問題が発生しています。<br> レポート機能から、<br> こちらの内容の報告をお願い致します。";
      const emailValid = "メールアドレス(必須)";
      const nameValid = "お名前(必須)";
      const messageValid = "メッセージ(必須)";
    }
  }
  if (name === "") {
    nameVald.innerHTML = `${nameValid} ✘`;
    nameVald.style.color = "#e91e63";
    document.querySelector("#name").style.border = "#e91e63;";
    document.querySelector("#name").focus();
    return false;

  } else {
    nameVald.style.color = "#52E5BA";
    nameVald.innerHTML = `${nameValid} ✓`;
    document.querySelector("#name").style.border = "1px solid #52E5BA";
  }

  if (email === "") {
    emailVald.innerHTML = `${emailValid} ✘`;
    emailVald.style.color = "#e91e63";
    document.querySelector("#email").style.border = "#e91e63;";
    document.querySelector("#email").focus();
    return false;

  }else {
    emailVald.style.color = "#52E5BA";
    emailVald.innerHTML = `${email} ✓`;
    document.querySelector("#email").style.border = "1px solid #52E5BA";
  }

  if (msg === "") {
    msgVald.innerHTML = `${messageValid} ✘`;
    msgVald.style.color = "#e91e63";
    document.querySelector("#email").style.border = "#e91e63;";
    document.querySelector("#email").focus();
    return false;

  }else {
    msgValid.style.color = "#52E5BA";
    msgValid.innerHTML = `${messageValid} ✓`;
    document.querySelector("#email").style.border = "1px solid #52E5BA";
  }


  //captcha valid..
  if (grecaptcha === undefined) {
    document.getElementById("ajaxResponseSuccess").style.display = "none";
    document.getElementById("ajaxResponseFail").style.display = "block";
    document.getElementById("ajaxResponseFail").innerHTML = captchaIssue;
    return failCaptcha;
  }

  if (!response) {
    document.getElementById("ajaxResponseSuccess").style.display = "none";
    document.getElementById("ajaxResponseFail").style.display = "block";
    document.getElementById("ajaxResponseFail").innerHTML = failCaptcha;
    return captchaIssue;
  }

  //sending to php

  const formdata = new FormData();
  formdata.append("email", email);
  formdata.append("name", name);
  formdata.append("message", msg);
  formdata.append("language", lang);

  const xhttp;
  xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      document.getElementById("ajaxResponseFail").style.display = "none";
      document.getElementById("ajaxResponseSuccess").style.display = "block";
      document.getElementById("ajaxResponseSuccess").innerHTML = successMsg;
    } else if (this.readyState == 4 && this.status != 200) {
      document.getElementById("ajaxResponseSuccess").style.display = "none";
      document.getElementById("ajaxResponseFail").style.display = "block";
      document.getElementById("ajaxResponseFail").innerHTML = failMsg;
    }
  };
  xhttp.open("POST", "https://saro.website/action.php", true);
  xhttp.send(formdata);
}

//I'm sorry for my code, but I'm not good at AJAX...
