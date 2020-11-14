function check() {
  var question1 = document.quiz.question1.value;
  var question2 = document.quiz.question2.value;
  var question3 = document.quiz.question3.value;
  var question4 = document.quiz.question4.value;
  var question5 = document.quiz.question5.value;
  var question6 = document.quiz.question6.value;
  var question7 = document.quiz.question7.value;
  var question8 = document.quiz.question8.value;
  var question9 = document.quiz.question9.value;
  var question10 = document.quiz.question10.value;
  var correct = 0;

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
    "You need to study more!",
    "You can do better!",
    "That's fine but keep trying!",
    "Awesome!",
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
    "&rarr;you got " + correct + " correct.";
}
