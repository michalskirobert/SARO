function check() {
  const question1 = document.quiz.question1.value;
  const question2 = document.quiz.question2.value;
  const question3 = document.quiz.question3.value;
  const question4 = document.quiz.question4.value;
  const question5 = document.quiz.question5.value;
  const question6 = document.quiz.question6.value;
  const question7 = document.quiz.question7.value;
  const question8 = document.quiz.question8.value;
  const question9 = document.quiz.question9.value;
  const question10 = document.quiz.question10.value;
  let correct = 0;

  if (question1 == "2") {
    correct++;
  }
  if (question2 == "1") {
    correct++;
  }
  if (question3 == "3") {
    correct++;
  }
  if (question4 == "3") {
    correct++;
  }
  if (question5 == "1") {
    correct++;
  }
  if (question6 == "Ja jestem") {
    correct++;
  }
  if (question7 == "On jest") {
    correct++;
  }
  if (question8 == "Oni są" || question8 == "Oni sa") {
    correct++;
  }
  if (question9 == "One są" || question9 == "One sa") {
    correct++;
  }
  if (question10 == "Ja jestem") {
    correct++;
  }

  let range = 0;
  let messages = [
    " 残念！もっと勉強しよう◎ ",
    " もっと出来るはず！頑張ろう！",
    " すごい！よく頑張りました！",
    " 全問正解！完璧です！",
  ];

  if (correct == 0) {
    range = 0;
  }
  if (correct > 0 && correct < 7) {
    range = 1;
  }
  if (correct > 6 && correct < 10) {
    range = 2;
  }
  if (correct == 10) {
    range = 3;
  }

  document.getElementById("afterSubmit").style.visibility = "visible";
  document.getElementById("messages").innerHTML = messages[range];
  document.getElementById("numberCorrect").innerHTML =
    "&rarr;　点数: " + correct + "/10";
}
