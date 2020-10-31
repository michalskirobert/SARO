//reportJS by Robert Michalski

function report() {
  var reportWindow = document.getElementById("reportWindow");
  var pageName = window.location.pathname;
  var language = document.getElementsByTagName("html");

  for (var i = 0; i < language.length; i++) {

 if(language[i].lang === "en"){

  var codeBlock = `
    <div class="report__base" id="myReport">
    <span id="close" onclick="showOld()">&times;</span>
    <div class="report__content" id="report01">
    <h3>Report page</h3>
    <form method="post" action="https://saro.website/report.php" class="report__form">
    <input name="language" id="language" value="${language[i].lang}" style="display: none;">
    <input name="page" id="page" value="${pageName}" style="display: none;">
    <input name="lang" id="lang" value="English" style="display: none;">
    <label for="category">Category</label>
    <select name="category" id="category" required>
    <option value="Bug">Bug</option>
    <option value="Page does not work">Page does not work</option>
    <option value="Problem with displying">Page displays incorrectly</option>
    <option value="other">Other</option></select>
    <label for="other">if other, what is it?</label>
    <input type="text" name="other" id="other" class="issue" placeholder="Write if there is another case">
    <label for="describe">Describe your issue or feedback here</label> 
    <textarea name="describe" id="describe" cols="30" rows="10" placeholder="Describe the bug or issue" required></textarea>
    <br>
    <b>Additional informations, not requested</b> <br>
    <div class="form__label__left">
    <label for="name">Name</label> 
    <input type="text" name="name" id="name" class="issue" placeholder="your name here">
    <label for="name">Email</label>
    <input type="email" name="email" id="email" class="issue" placeholder="your e-mail here"> 
    <input type="submit" class="button__black" value="Send">
    </form>
    </div>
    </div>
    </div>`;
  }else if(language[i].lang === "ja"){

    var codeBlock = `
    <div class="report__base" id="myReport">
    <span id="close" onclick="showOld()">&times;</span>
    <div class="report__content" id="report01">
    <h3>レポート</h3>
    <form method="post" action="https://saro.website/report.php" class="report__form">
    <input name="language" id="language" value="${language[i].lang}" style="display: none;">
    <input name="page" id="page" value="${pageName}" style="display: none;">
    <input name="lang" id="lang" value="Japanese" style="display: none;">
    <label for="category">カテゴリー</label>
    <select name="category" id="category" required>
    <option value="Bug">バグ</option>
    <option value="Page does not work">ページがうまく動かない</option>
    <option value="Problem with displying">指定したページが一致しな</option>
    <option value="other">その他</option></select>
    <label for="other">「その他」を選んだ方は、内容をご記入下さい?</label>
    <input type="text" name="other" id="other" class="issue">
    <label for="describe">発生している状況やフィードバックをご記入下さい</label> 
    <textarea name="describe" id="describe" cols="30" rows="10" required></textarea>
    <br>
    <b>以下の内容をご記入下さい。(任意)</b> <br>
    <div class="form__label__left">
    <label for="name">お名前</label> 
    <input type="text" name="name" id="name" class="issue">
    <label for="name">メールアドレス</label>
    <input type="email" name="email" id="email" class="issue"> 
    <input type="submit" class="button__black" value="送信">
    </form>
    </div>
    </div>
    </div>`;
  }
  reportWindow.innerHTML = codeBlock;
}
}

function showOld() {
  document.getElementById("myReport").style.display = "none";
}
