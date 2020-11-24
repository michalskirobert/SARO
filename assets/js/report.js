function report() {
  const translationMap = {
    en: {
      language: "English",
      title: "Report page",
      category: {
        bug: "bug",
        pgdsw: "page doesn't work",
        pwd: "problem with desplaying",
        other: "other",
      },
      additional: "*Additional informations name, email are not requested",
      issue: "if another, what is it?",
      describe: "Describe your problem or give your feedback here",
      name: "Name",
      email: "Email",
      send: "send",
    },
    ja: {
      language: "日本語",
      title: "レポート",
      category: {
        bug: "バグ",
        pgdsw: "ページがうまく動かない",
        pwd: "指定したページが一致しな",
        other: "その他",
      },
      additional: "以下の内容をご記入下さい。(任意)",
      issue: "「その他」を選んだ方は、内容をご記入下さい?",
      describe: "発生している状況やフィードバックをご記入下さい",
      name: "お名前",
      email: "メールアドレス",
      send: "送信",
    },
    zh: {
      language: "中文",
      title: "问题反馈",
      category: {
        bug: "问题",
        pgdsw: "页面 没 有 反应",
        pwd: "页面 显示 错误",
        other: "其他",
      },
      additional: "附加 信息， 不 需要<",
      issue: "如果 是其他问题， 是 什 么？",
      describe: "在这里描述下 你的 问题 或 反馈",
      name: "名字",
      email: "邮件",
      send: "发送",
    },
  };

  const reportWindow = document.getElementById("reportWindow");
  const pageName = window.location.pathname;
  const language = document.querySelector("html").lang;
  let codeBlock = "";
  let lang = "";

  if (language === "en") {
    lang = "en";
  } else if (language === "ja") {
    lang = "ja";
  } else if (language === "zh") {
    lang = "zh";
  }

  codeBlock = `
  <div class="report__base" id="myReport">
  <span id="close" onclick="showOld()">&times;</span>
  <div class="report__content" id="report01">
  <h3>${translationMap[lang].title}</h3>
  <form method="post" action="https://saro.website/report.php" class="report__form">
  <input name="lang" value="${translationMap[lang].language}" style="display: none;">
  <input name="language" value="${language}" style="display: none;">
  <input name="page" value="${pageName}" style="display: none;">
  <select name="category" id="category" required>
  <option value="${translationMap[lang]["category"].bug}">${translationMap[lang]["category"].bug}</option>
  <option value="${translationMap[lang]["category"].pgdsw}">${translationMap[lang]["category"].pgdsw}</option>
  <option value="${translationMap[lang]["category"].pwd}">${translationMap[lang]["category"].pwd}</option>
  <option value="${translationMap[lang]["category"].other}">${translationMap[lang]["category"].other}</option></select>
  <input type="text" name="other" id="other" class="issue" placeholder="${translationMap[lang].issue}">
  <textarea name="describe" id="describe" cols="30" rows="10" placeholder="${translationMap[lang].describe}" required></textarea>
  <i>${translationMap[lang].additional}</i>
  <div class="form__label__left">
  <input type="text" name="name" id="name" class="issue" placeholder="${translationMap[lang].name}">
  <input type="email" name="email" id="email" class="issue" placeholder="${translationMap[lang].email}">
  <input type="submit" class="button__black" value="${translationMap[lang].send}">
  </form>
  </div>
  </div>
  </div>`;
  reportWindow.innerHTML = codeBlock;
}

function showOld() {
  document.getElementById("myReport").style.display = "none";
}
