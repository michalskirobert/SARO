//components
import { quizToBeMap } from "./data/quizToBeMap.js";

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
  const language = document.querySelector("html").lang;
  let lang = "";
  let correct = 0;

  switch (language) {
    case "ja":
      lang = "ja";
      break;
    case "zh":
      lang = "zh";
      break;
    default:
      lang = "en";
      break;
  }

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

  let messages = [
    quizToBeMap[lang].message1,
    quizToBeMap[lang].message2,
    quizToBeMap[lang].message3,
    quizToBeMap[lang].message4,
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
  document.getElementById(
    "numberCorrect"
  ).innerHTML = `&rarr; ${quizToBeMap[lang].got} ${correct} ${quizToBeMap[lang].correct}`;
}

document
  .querySelector("#submitButton")
  .addEventListener("click", () => check());

//made by Anna

//  Poprawiłem trochę i zrobiłem mapowanie,
//  nad tym testem trzeba jeszcze poprawcować
//  np zamiast korzystać z ifów najlpiej zrobić jeden if sprawdzający correct z obiektu.
// PS, używaj label z inputami :)
// -- Robert
