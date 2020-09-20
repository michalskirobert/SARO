//here you go again...

  function sendMail() {
    var email = document.getElementById("email").value;
    var name = document.getElementById("name").value;
    var surname = document.getElementById("surname").value;
    var age = document.getElementById("age").value;
    var phone = document.getElementById("phone").value;
    var message = document.getElementById("message").value;
    var gender = document.querySelector('input[name="gender"]:checked').value;
    var offerLanguage = document.getElementById("language").value;
    var nativeLanguage = document.getElementById("nativeLanguage").value;
    var anotherLanguage = document.getElementById("anotherLanguage").value;
    var policy = document.getElementById("accepted").value;

    var successMsg = "Your message has been sent. <br /> Thank you. <br /> You also have received confirmation via email.";
    var failMsg = "Mail coudln't be sent. <br /> Please try again.";
    var failCaptcha = "Check captcha :) unless you are a robot 🤖";
    var captchaIssue = "It's just captcha issue... <br> please contact us by sending report";
  
      //captcha valid..
      if (grecaptcha === undefined) {
        document.getElementById("ajaxResponseSuccess").style.display = "none";
        document.getElementById("ajaxResponseFail").style.display = "block";
        document.getElementById("ajaxResponseFail").innerHTML = captchaIssue;
        return failCaptcha;
      }
  
      var response = grecaptcha.getResponse();
  
      if (!response) {
        document.getElementById("ajaxResponseSuccess").style.display = "none";
        document.getElementById("ajaxResponseFail").style.display = "block";
        document.getElementById("ajaxResponseFail").innerHTML = failCaptcha;
        return captchaIssue;
      }

      var formdata = new FormData();
      formdata.append("email", email);
      formdata.append("name", name);
      formdata.append("surname", surname);
      formdata.append("age", age);
      formdata.append("phone", phone);
      formdata.append("gender", gender);
      formdata.append("message", message);
      formdata.append("offerLanguage", offerLanguage);
      formdata.append("nativeLanguage", nativeLanguage);
      formdata.append("anotherLanguage", anotherLanguage);
      formdata.append("accepted", policy);

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
    xhttp.open("POST", "send.php", true);
    xhttp.send(formdata);
  }