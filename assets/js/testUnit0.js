const quizContainer = document.getElementById('testUnit0');
const resultsContainer = document.getElementById('results');
const submitButton = document.getElementById('submit');
let timer = document.getElementById('testTimer');

(function () {
    function buildTest() {
        const output = [];

        questions.forEach(
            (currentQuestion, questionNumber) => {
                const answers = [];

                for (letter in currentQuestion.answers) {

                    answers.push(
                        `<label>
                <input type="radio" name="question${questionNumber}" value="${letter}">
                ${letter} :
                ${currentQuestion.answers[letter]}
                </label>`
                    );
                }

                output.push(
                    `<div class="slide">
              <div class="question"> ${currentQuestion.question} </div>
              <div class="answers"> ${answers.join("")} </div>
            </div>`
                );
            }
        );

        quizContainer.innerHTML = output.join('');
    }


    function showResults() {

        const answerContainers = quizContainer.querySelectorAll('.answers');

        let numCorrect = 0;

        questions.forEach((currentQuestion, questionNumber) => {

            const answerContainer = answerContainers[questionNumber];
            const selector = `input[name=question${questionNumber}]:checked`;
            const userAnswer = (answerContainer.querySelector(selector) || {}).value;

            if (userAnswer === currentQuestion.correctAnswer) {
                numCorrect++;
                answerContainers[questionNumber].style.color = 'lightgreen';
            } else {
                answerContainers[questionNumber].style.color = 'red';
            };

            resultsContainer.innerHTML = `${numCorrect} out of ${questions.length}`;
        })
    }

    function showSlide(n) {
        slides[currentSlide].classList.remove('active-slide');
        slides[n].classList.add('active-slide');
        currentSlide = n;
        if (currentSlide === slides.length - 1) {
            nextButton.style.display = 'none';
            submitButton.style.display = 'inline-block';
        } else {
            nextButton.style.display = 'inline-block';
            submitButton.style.display = 'none';
        }
    }

    function timer() {
        let sec = 60;
        let time = setInterval(timer, 1000);
        document.getElementById('testTimer').innerHTML = sec + "sec left";
        sec--;
        if (sec == -1) {
            clearInterval(time);
            showNextSlide();
        }
    }

    function checkForm(formname)
{
if(formname.radiobuttonname.value == '') {
alert("Error: Please select a radio button!");
return false;
}
document.getElementById('submit').value='Please wait..';void(0);
return true;
}


    function showNextSlide() {
        showSlide(currentSlide + 1);
    }

    const questions = [{
            question: "Which group contains only consonants (spółgłoski)?",
            answers: {
                a: "O, e, a, i, y",
                b: "P, b, t, s, h",
                c: "A, k, u, d, h"
            },
            correct: "b"
        },
        {
            question: "Which group contains only vowels (samogłoski)?",
            answers: {
                a: "O, e, a, i, y",
                b: "P, b, t, s, h",
                c: "A, k, u, d, h"
            },
            correct: "a"
        },
        {
            question: "Which word is spoken? <jajko>",
            answers: {
                a: "Jajko",
                b: "Dom",
                c: "Igła"
            },
            correct: "a"
        },
        {
            question: "Which word is spoken? <wino>",
            answers: {
                a: "Mama",
                b: "But",
                c: "Wino"
            },
            correct: "c"
        },
        {
            question: "Which word is spoken? <światło>",
            answers: {
                a: "Hałas",
                b: "Światło",
                c: "Okno"
            },
            correct: "b"
        },
        {
            question: "Which word is spoken? <rzeka>",
            answers: {
                a: "Rzeka",
                b: "Zima",
                c: "Żaba"
            },
            correct: "a"
        },
        {
            question: "Which word is spoken? <cisza>",
            answers: {
                a: "Ćma",
                b: "Cisza",
                c: "Góra"
            },
            correct: "b"
        },
        {
            question: "Which part of a sentence/speech does declension apply to? (two answers are correct!)",
            answers: {
                a: "Verb",
                b: "Adjective",
                c: "Noun"
            },
            correct: "b",
            correct: "c"
        },
        {
            question: "How many cases are there in Polish language?",
            answers: {
                a: "5",
                b: "6",
                c: "7"
            },
            correct: "c"
        },
        {
            question: "„To jest mój komputer” (this is my computer) – which case is used for „komputer”?",
            answers: {
                a: "Accusative (biernik)",
                b: "Nominative (mianownik)",
                c: "Instrumental (narzędnik)"
            },
            correct: "b"
        },
        {
            question: "„W torbie nie ma telefonu” (there is no phone in the bag) – which case is used for „telefon”?",
            answers: {
                a: "Genitive (dopełniacz)",
                b: "Locative (miejscownik)",
                c: "Vocative (wołacz)"
            },
            correct: "a"
        },
        {
            question: "„W torbie nie ma telefonu” (there is no phone in the bag) – which case is used for „telefon”?",
            answers: {
                a: "Genitive (dopełniacz)",
                b: "Locative (miejscownik)",
                c: "Vocative (wołacz)"
            },
            correct: "a"
        },
        {
            question: "What is basic word order in a Polish sentence?",
            answers: {
                a: "SOV (subject – object – verb)",
                b: "OSV (object – subject– verb)",
                c: "SVO (subject – verb – object)"
            },
            correct: "b"
        },
        {
            question: "Usually where do we put an information about time in a Polish sentence?",
            answers: {
                a: "At the beginning",
                b: "In the middle",
                c: "At the end"
            },
            correct: "c"
        },
        {
            question: "Is it correct to say „Mieszkam w Polsce” instead of „Ja mieszkam w Polsce”?",
            answers: {
                a: "Yes",
                b: "No"
            },
            correct: "a"
        },
        {
            question: "Is there any difference in meaning between these two questions?  „Czy (ty) mieszkasz w Polsce?”  „(Ty) mieszkasz w Polsce?”",
            answers: {
                a: "Yes",
                b: "No"
            },
            correct: "a"
        },
        {
            question: "There are two ways to form a yes/no question for the sentence below: Ona jest studentką. Which two questions are correct?",
            answers: {
                a: "Jest ona studentką?",
                b: "Czy ona jest studentką?",
                c: "Ona jest studentką?"
            },
            correct: "b",
            correct: "c"
        },
        {
            question: "What questions does an adjective answer?",
            answers: {
                a: "When? At what time?",
                b: "What? Who?",
                c: "What (kind of)? Which? Which one? Whose?"
            },
            correct: "c"
        },
        {
            question: "There is a small mouse – mysz (feminine) in Polish. How would you describe it?",
            answers: {
                a: "Mały mysz",
                b: "Mała mysz",
                c: "Małe mysz"
            },
            correct: "b"
        },
        {
            question: "You live in a big house – dom (masculine). How would you describe it?",
            answers: {
                a: "Duży dom",
                b: "Duża dom",
                c: "Duże dom"
            },
            correct: "a"
        },
        {
            question: "You just cleaned a window – okno (neuter). How would you say „a clean window”?",
            answers: {
                a: "Czysty okno",
                b: "Czysta okno",
                c: "Czyste okno"
            },
            correct: "c"
        },
        {
            question: "How many basic noun grammatical genders are there in Polish?",
            answers: {
                a: "3",
                b: "4",
                c: "5"
            },
            correct: "a"
        },
        {
            question: "„Mały samochód” – a small car. Can you figure out what is the grammatical gender of samochód?",
            answers: {
                a: "Masculine",
                b: "Feminine",
                c: "Neuter"
            },
            correct: "a"
        },
        {
            question: "„Słodkie ciasto” – a sweet cake. Can you figure out what is the grammatical gender of ciasto?",
            answers: {
                a: "Masculine",
                b: "Feminine",
                c: "Neuter"
            },
            correct: "c"
        },
        {
            question: "„Dobra kawa” – a good coffee. Can you figure out what is the grammatical gender of coffee?",
            answers: {
                a: "Masculine",
                b: "Feminine",
                c: "Neuter"
            },
            corrrect: "b"
        }
    ];

    buildTest();


    const nextButton = document.getElementById("next");
    const slides = document.querySelectorAll(".slide");
    let currentSlide = 0;

    showSlide(currentSlide);

    submitButton.addEventListener('click', showResults);
    nextButton.addEventListener("click", showNextSlide);
})();