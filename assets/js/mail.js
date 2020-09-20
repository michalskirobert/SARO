

function sendMail() {
  var email = document.getElementById("email").value;
  var name = document.getElementById("name").value;
  var msg = document.getElementById("message").value;
  var language = document.getElementsByTagName("html");
  var lang = document.getElementById("language").value;
  var response = grecaptcha.getResponse();

  for (var i = 0; i < language.length; i++) {
    if (language[i].lang === "en") {
      var successMsg =
        "Your message has been sent. <br /> Thank you. <br /> You also have received <br> confirmation via email.";
      var failMsg = "Mail coudln't be sent. <br /> Please try again.";
      var failCaptcha = "Check captcha :) <br> unless you are a robot 🤖";
      var captchaIssue =
        "It's just captcha issue... <br> please contact us by sending report about it";
    } else if (language[i].lang === "ja") {
      var successMsg =
        "メッセージが送信されました。 <br /> お問い合わせありがとうございます。 <br /> ご記入いただいたメールアドレス宛に、<br> 確認メールを送信しております。";
      var failMsg =
        "メールを送信できませんでした。<br /> 内容をご確認の上、<br> 再度お試し下さい。";
      var failCaptcha =
        "キャプチャーをご確認下さい。<br> ご確認いただけない場合は、<br> お客様のアカウントは <br> ロボットとみなします🤖";
      var captchaIssue =
        "キャプチャーに問題が発生しています。<br> レポート機能から、<br> こちらの内容の報告をお願い致します。";
    }
  }

  // if(name === ""){
  //   document.getElementById("name").classList.add("nameFail");
  // }else if (msg === ""){

  // }else if (email === ""){

  // }

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
