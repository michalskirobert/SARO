

function sendMail() {
  var email = document.getElementById("email").value;
  var name = document.getElementById("name").value;
  var msg = document.getElementById("message").value;
  var language = document.getElementsByTagName("html");
  var lang = document.getElementById("language").value;
  var msgVald = document.querySelector("#msgValid");
  var nameVald = document.querySelector("#nameValid");
  var emailVald = document.querySelector("#emailValid");
  var response = grecaptcha.getResponse();

  for (let i = 0; i < language.length; i++) {
    if (language[i].lang === "en") {
      var successMsg =
        "Your message has been sent. <br /> Thank you. <br /> You also have received <br> confirmation via email.";
      var failMsg = "Mail coudln't be sent. <br /> Please try again.";
      var failCaptcha = "Check captcha :) <br> unless you are a robot 🤖";
      var captchaIssue =
        "It's just captcha issue... <br> please contact us by sending report about it";
      var emailValid = "Email";
      var nameValid = "Name";
      var messageValid = "Message";

    } else if (language[i].lang === "ja") {
      var successMsg =
        "メッセージが送信されました。 <br /> お問い合わせありがとうございます。 <br /> ご記入いただいたメールアドレス宛に、<br> 確認メールを送信しております。";
      var failMsg =
        "メールを送信できませんでした。<br /> 内容をご確認の上、<br> 再度お試し下さい。";
      var failCaptcha =
        "キャプチャーをご確認下さい。<br> ご確認いただけない場合は、<br> お客様のアカウントは <br> ロボットとみなします🤖";
      var captchaIssue =
        "キャプチャーに問題が発生しています。<br> レポート機能から、<br> こちらの内容の報告をお願い致します。";
      var emailValid = "メールアドレス(必須)";
      var nameValid = "お名前(必須)";
      var messageValid = "メッセージ(必須)";
    } else if (language[i].lang === "zh"){
      var successMsg =
      "你的 消息 已经 发送 成功。 <br /> 谢 谢。 <br /> 你 也 将 <br> 收到 我们的 确认邮件。";
    var failMsg = "邮件 不能 成功 发送。 <br /> 请 再试 一次";
    var failCaptcha = "检测 验证 :) <br> 除非 你 是 一个 机器人 🤖";
    var captchaIssue =
      "这 只是 验证 问题... <br> 请 通过 发送 报告 联系我们 并 加以 说明";
    var emailValid = "邮件";
    var nameValid = "名字";
    var messageValid = "Message";
    }
  }
  if (name === "") {
    nameVald.innerHTML = `${nameValid} ✘`;
    nameVald.style.color = "#DE0085";
    document.querySelector("#name").style.border = "#e91e63;";
    document.querySelector("#name").focus();
    return false;

  } else {
    nameVald.style.color = "#008F86";
    nameVald.innerHTML = `${nameValid} ✓`;
    document.querySelector("#name").style.border = "1px solid #52E5BA";
  }

  if (email === "") {
    emailVald.innerHTML = `${emailValid} ✘`;
    emailVald.style.color = "#DE0085";
    document.querySelector("#email").style.border = "#e91e63;";
    document.querySelector("#email").focus();
    return false;

  }else {
    emailVald.style.color = "#008F86";
    emailVald.innerHTML = `${email} ✓`;
    document.querySelector("#email").style.border = "1px solid #52E5BA";
  }

  if (msg === "") {
    msgVald.innerHTML = `${messageValid} ✘`;
    msgVald.style.color = "#DE0085";
    document.querySelector("#email").style.border = "#e91e63;";
    document.querySelector("#email").focus();
    return false;

  }else {
    msgValid.style.color = "#008F86";
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

  var formdata = new FormData();
  formdata.append("email", email);
  formdata.append("name", name);
  formdata.append("message", msg);
  formdata.append("language", lang);

  var xhttp;
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
