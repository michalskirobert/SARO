const questions = [
  {
    id: 1,
    question: "Which group contains only consonants (spółgłoski)?",
    choiceA: "O, e, a, i, y",
    choiceB: "P, b, t, s, h",
    choiceC: "A, k, u, d, h",
    correct: "B",
  },
  {
    id: 2,
    question: "Which group contains only vowels (samogłoski)?",
    choiceA: "O, e, a, i, y",
    choiceB: "P, b, t, s, h",
    choiceC: "A, k, u, d, h",
    correct: "A",
  },
  {
    id: 3,
    question: "Which word is spoken? <jajko>",
    choiceA: "Jajko",
    choiceB: "Dom",
    choiceC: "Igła",
    correct: "A",
  },
  {
    id: 4,
    question: "Which word is spoken? <wino>",
    choiceA: "Mama",
    choiceB: "But",
    choiceC: "Wino",
    correct: "C",
  },
  {
    id: 5,
    question: "Which word is spoken? <rzeka>",
    choiceA: "Rzeka",
    choiceB: "Zima",
    choiceC: "Żaba",
    correct: "B",
  },
  {
    id: 6,
    question: "Which word is spoken? <cisza>",
    choiceA: "Ćma",
    choiceB: "Cisza",
    choiceC: "Góra",
    correct: "A",
  },
  {
    id: 7,
    question:
      "Which part of a sentence/speech does declension apply to? (two answers are correct!)",
    choiceA: "Verb",
    choiceB: "Adjective",
    choiceC: "Noun",
    correct: "B",
  },
  {
    id: 8,
    question: "How many cases are there in Polish language?",
    choiceA: "5",
    choiceB: "6",
    choiceC: "7",
    correct: "B" && "C",
  },
  {
    id: 9,
    question:
      "„To jest mój komputer” (this is my computer) – which case is used for „komputer”?",
    choiceA: "Accusative (biernik)",
    choiceB: "Nominative (mianownik)",
    choiceC: "Instrumental (narzędnik)",
    correct: "C",
  },
  {
    id: 10,
    question:
      "„W torbie nie ma telefonu” (there is no phone in the bag) – which case is used for „telefon”?",
    choiceA: "Genitive (dopełniacz)",
    choiceB: "Locative (miejscownik)",
    choiceC: "Vocative (wołacz)",
    correct: "B",
  },
  {
    id: 11,
    question:
      "„W torbie nie ma telefonu” (there is no phone in the bag) – which case is used for „torba”?",
    choiceA: "Genitive (dopełniacz)",
    choiceB: "Locative (miejscownik)",
    choiceC: "Vocative (wołacz)",
    correct: "A",
  },
  {
    id: 12,
    question: "What is basic word order in a Polish sentence?",
    choiceA: "SOV (subject – object – verb)",
    choiceB: "OSV (object – subject– verb) ",
    choiceC: "SVO (subject – verb – object)",
    correct: "B",
  },
  {
    id: 13,
    question:
      "Usually where do we put an information about time in a Polish sentence?",
    choiceA: "At the beginning",
    choiceB: "In the middle",
    choiceC: "At the end",
    correct: "A",
  },
  {
    id: 14,
    question:
      "Is it correct to say „Mieszkam w Polsce” instead of „Ja mieszkam w Polsce”?",
    choiceA: "Yes",
    choiceB: "No",
    choiceC: " ",
    correct: "A",
  },
  {
    id: 15,
    question:
      "„To jest mój komputer” (this is my computer) – which case is used for „komputer”?",
    choiceA: "Accusative (biernik)",
    choiceB: "Nominative (mianownik)",
    choiceC: "Instrumental (narzędnik)",
    correct: "A",
  },
  {
    id: 16,
    question: `Is there any difference in meaning between these two questions?
            „Czy (ty) mieszkasz w Polsce?”
            „(Ty) mieszkasz w Polsce?”`,
    choiceA: "Yes",
    choiceB: "No",
    choiceC: " ",
    correct: "B",
  },
  {
    id: 17,
    question:
      "There are two ways to form a yes/no question for the sentence below: Ona jest studentką. Which two questions are correct?",
    choiceA: "Jest ona studentką?",
    choiceB: "Czy ona jest studentką?",
    choiceC: "Ona jest studentką?",
    correct: "B" && "C",
  },
  {
    id: 18,
    question: "What questions does an adjective answer?",
    choiceA: "When? At what time?",
    choiceB: "What? Who?",
    choiceC: "What (kind of)? Which? Which one? Whose?",
    correct: "C",
  },
  {
    id: 19,
    question:
      "There is a small mouse – mysz (feminine) in Polish. How would you describe it?",
    choiceA: "Mały mysz",
    choiceB: "Mała mysz",
    choiceC: "Małe mysz",
    correct: "B",
  },
  {
    id: 20,
    question:
      "You live in a big house – dom (masculine). How would you describe it?      ",
    choiceA: "Duży dom",
    choiceB: "Duża dom",
    choiceC: "Duże dom",
    correct: "A",
  },
  {
    id: 21,
    question:
      "You just cleaned a window – okno (neuter). How would you say „a clean window”?",
    choiceA: "Czysty okno",
    choiceB: "Czysta okno",
    choiceC: "Czyste okno",
    correct: "C",
  },
  {
    id: 22,
    question: "How many basic noun grammatical genders are there in Polish?",
    choiceA: "3",
    choiceB: "4",
    choiceC: "5",
    correct: "A",
  },
  {
    id: 23,
    question:
      "„Mały samochód” – a small car. Can you figure out what is the grammatical gender of samochód?",
    choiceA: "Masculine",
    choiceB: "Feminine",
    choiceC: "Neuter",
    correct: "A",
  },
  {
    id: 24,
    question:
      "„Słodkie ciasto” – a sweet cake. Can you figure out what is the grammatical gender of ciasto?",
    choiceA: "Masculine",
    choiceB: "Feminine",
    choiceC: "Neuter",
    correct: "C",
  },
  {
    id: 25,
    question:
      "„Dobra kawa” – a good coffee. Can you figure out what is the grammatical gender of coffee?      ",
    choiceA: "Masculine",
    choiceB: "Feminine",
    choiceC: "Neuter",
    correct: "B",
  },
];

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
      ? "Good job! You passed :)"
      : scorePerCent >= 60
      ? "Not bad :) you're in good shape! Passed!"
      : scorePerCent >= 40
      ? "You need to little more study. Not passed."
      : scorePerCent >= 20
      ? "F"
      : "Try again.. Not passed";

  scoreDiv.innerHTML = "<img src=" + img + ">";
  scoreDiv.innerHTML += "<p>" + text + "<br>" + scorePerCent + "%</p>";
  document
    .querySelectorAll(".choice")
    .forEach((item) => (item.style.zIndex = "-1"));
}
