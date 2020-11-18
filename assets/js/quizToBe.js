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
    document.getElementById("numberCorrect").innerHTML = "&rarr;You got " + correct + " correct.";
}