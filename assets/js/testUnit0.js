import questions from "./data/dataUnit0.js";
import unit0 from "./data/translationUnit0.js";

// select all elements
const start = document.getElementById("start");
const quiz = document.getElementById("quiz");
const question = document.getElementById("question");
const choiceA = document.getElementById("A");
const choiceB = document.getElementById("B");
const choiceC = document.getElementById("C");
const counter = document.getElementById("counter");
const timeGauge = document.getElementById("timeGauge");
const progress = document.getElementById("progress");
const scoreDiv = document.getElementById("scoreContainer");
const language = document.querySelector("html").lang;
let lang = "";

//detecting language
if (language === "en") {
  lang = "en";
} else if (language === "ja") {
  lang = "ja";
}

//addEvent listeners to buttons
choiceA.addEventListener("click", () => checkAnswer("A"));
choiceB.addEventListener("click", () => checkAnswer("B"));
choiceC.addEventListener("click", () => checkAnswer("C"));

// create some variables

const lastQuestion = questions[lang].length - 1;
let runningQuestion = 0;
let count = 0;
const questionTime = 10; // 10s
const gaugeWidth = 150; // 150px
const gaugeUnit = gaugeWidth / questionTime;
let TIMER;
let score = 0;

// render a question
function renderQuestion() {
  let q = questions[lang][runningQuestion];

  question.innerHTML = '<p lang="pl">' + q.question + "</p>";
  choiceA.innerHTML = `<p lang="pl">${q.choiceA}</p>`;
  choiceB.innerHTML = `<p lang="pl">${q.choiceB}</p>`;
  choiceC.innerHTML = `<p lang="pl">${q.choiceC}</p>`;
}

start.addEventListener("click", startQuiz);

// start quiz
function startQuiz() {
  start.style.display = "none";
  renderQuestion();
  quiz.style.display = "block";
  renderProgress();
  renderCounter();
  TIMER = setInterval(renderCounter, 1000); // 1000ms = 1s
}

// render progress
function renderProgress() {
  for (let qIndex = 0; qIndex <= lastQuestion; qIndex++) {
    progress.innerHTML += "<div class='prog' id=" + qIndex + "></div>";
  }
}

// counter render

function renderCounter() {
  if (count <= questionTime) {
    counter.innerHTML = count;
    timeGauge.style.width = count * gaugeUnit + "px";
    count++;
  } else {
    count = 0;
    // change progress color to red
    answerIsWrong();
    if (runningQuestion < lastQuestion) {
      runningQuestion++;
      renderQuestion();
    } else {
      // end the quiz and show the score
      clearInterval(TIMER);
      scoreRender();
    }
  }
}

// checkAnwer

function checkAnswer(answer) {
  if (answer == questions[lang][runningQuestion].correct) {
    // answer is correct
    score++;
    // change progress color to green
    answerIsCorrect();
  } else {
    // answer is wrong
    // change progress color to red
    answerIsWrong();
  }
  count = 0;
  if (runningQuestion < lastQuestion) {
    runningQuestion++;
    renderQuestion();
  } else {
    // end the quiz and show the score
    clearInterval(TIMER);
    scoreRender();
  }
}

// answer is correct
function answerIsCorrect() {
  document.getElementById(runningQuestion).style.backgroundColor = "#0f0";
}

// answer is Wrong
function answerIsWrong() {
  document.getElementById(runningQuestion).style.backgroundColor = "#f00";
}

// score render
function scoreRender() {
  scoreDiv.style.display = "block";

  // calculate the amount of question percent answered by the user
  const scorePerCent = Math.round((100 * score) / questions[lang].length);

  // choose the image based on the scorePerCent
  let img =
    scorePerCent >= 80
      ? "./../../stuff/games/quiz/declension/img/5.png"
      : scorePerCent >= 60
      ? "./../../stuff/games/quiz/declension/img/4.png"
      : scorePerCent >= 40
      ? "./../../stuff/games/quiz/declension/img/3.png"
      : scorePerCent >= 20
      ? "./../../stuff/games/quiz/declension/img/2.png"
      : "./../../stuff/games/quiz/declension/img/1.png";
  let text =
    scorePerCent >= 80
      ? `${unit0[lang].passed}`
      : scorePerCent >= 60
      ? `${unit0[lang].notBad}`
      : scorePerCent >= 40
      ? `${unit0[lang].notPassed}`
      : scorePerCent >= 20
      ? `${unit0[lang].bad}`
      : `${unit0[lang].verBad}`;

  scoreDiv.innerHTML = "<img src=" + img + ">";
  scoreDiv.innerHTML += "<p>" + text + "<br>" + scorePerCent + "%</p>";
  document
    .querySelectorAll(".choice")
    .forEach((item) => (item.style.zIndex = "-1"));
}
