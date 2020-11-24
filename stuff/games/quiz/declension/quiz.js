// select all elements
const start = document.getElementById("start");
const quiz = document.getElementById("quiz");
const question = document.getElementById("question");
const qImg = document.getElementById("qImg");
const choiceA = document.getElementById("A");
const choiceB = document.getElementById("B");
const choiceC = document.getElementById("C");
const counter = document.getElementById("counter");
const timeGauge = document.getElementById("timeGauge");
const progress = document.getElementById("progress");
const scoreDiv = document.getElementById("scoreContainer");

// create our questions
let questions = [
  {
    question: 'It answers on "kto co"',
    choiceA: "Dopełniacz",
    choiceB: "Mianownik",
    choiceC: "Celownik",
    correct: "B",
  },
  {
    question: '"Jadę samochodem", in this sentence which declension was used?',
    choiceA: "Narzędnik",
    choiceB: "Biernik",
    choiceC: "Miejscownik",
    correct: "A",
  },
  {
    question: '"To jest mój telefon" - answers on?',
    choiceA: "Kto, co?",
    choiceB: "Kogo, czego?",
    choiceC: "O kim, oczym?",
    correct: "C",
  },
  {
    question: "on what Celownik answers?",
    choiceA: "Komu, Czemu? (Komu dajesz prezent?)",
    choiceB: "Kogo, co? (widzę)",
    choiceC: "Oczym, O kim? (myślę)",
    correct: "A",
  },
  {
    question: "Kogo zaprosiłaś dzisiaj na kolację?",
    choiceA: "Celownik",
    choiceB: "Narzędnik",
    choiceC: "Biernik",
    correct: "C",
  },
  {
    question: '"Czym jedziesz na wakację?"',
    choiceA: "Mianownik",
    choiceB: "Celownik",
    choiceC: "Narzędnik",
    correct: "C",
  },
  {
    question: '"O kim myślisz?"',
    choiceA: "Wołacz",
    choiceB: "Miejscownik",
    choiceC: "Biernik",
    correct: "B",
  },
  {
    question: 'is correct "Komu, czemu - narzędnik"?',
    choiceA: "yes",
    choiceB: "no",
    choiceC: "Pass..",
    correct: "B",
  },
  {
    question: "With whom did you go last night?",
    choiceA: "Narzędnik",
    choiceB: "Mianownik",
    choiceC: "Miejscownik",
    correct: "A",
  },
];

// create some variables

const lastQuestion = questions.length - 1;
let runningQuestion = 0;
let count = 0;
const questionTime = 10; // 10s
const gaugeWidth = 150; // 150px
const gaugeUnit = gaugeWidth / questionTime;
let TIMER;
let score = 0;

// render a question
function renderQuestion() {
  let q = questions[runningQuestion];

  question.innerHTML = "<p>" + q.question + "</p>";
  choiceA.innerHTML = q.choiceA;
  choiceB.innerHTML = q.choiceB;
  choiceC.innerHTML = q.choiceC;
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
  if (answer == questions[runningQuestion].correct) {
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
  const scorePerCent = Math.round((100 * score) / questions.length);

  // choose the image based on the scorePerCent
  let img =
    scorePerCent >= 80
      ? "img/5.png"
      : scorePerCent >= 60
      ? "img/4.png"
      : scorePerCent >= 40
      ? "img/3.png"
      : scorePerCent >= 20
      ? "img/2.png"
      : "img/1.png";
  let text =
    scorePerCent >= 80
      ? "A+"
      : scorePerCent >= 60
      ? "B+"
      : scorePerCent >= 40
      ? "C+"
      : scorePerCent >= 20
      ? "F"
      : "not passed";

  scoreDiv.innerHTML = "<img src=" + img + ">";
  scoreDiv.innerHTML += "<p>" + text + "<br>" + scorePerCent + "%</p>";
}
