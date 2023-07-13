let currentQuestionIndex = 0;
score = 0;
const questionElement = document.getElementById("question");
const answerElements = document.getElementById("answers");
const resultElement = document.getElementById("result");
const scoreElement = document.getElementById("score");

function fetchQuestions() {
  fetch("http://localhost:3000/api/perguntas")
  .then(response => response.json())
  .then(data => {
    questions = data.questions;
    console.log(questions)
    showQuestions(questions[currentQuestionIndex]);
  })
}
function showQuestions(question) {
  questionElement.innerText = question.question;
  answerElements.innerHTML = "";

  question.answers.forEach(answer => {
    const li = document.createElement("li");
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.name = "answer";
    checkbox.value = answer.correct;
    checkbox.addEventListener("click", checkAnswer);

    li.appendChild(checkbox);
    li.appendChild(document.createTextNode(answer.text));
    answerElements.appendChild(li);
  });
}

function checkAnswer(event) {
  const selectedAnswer = event.target;
  const isCorrect = selectedAnswer.value === "true";

  if (isCorrect) {
    resultElement.innerText = "Resposta correta!";
    resultElement.className = "correct";
    score += 100;
  } else {
    resultElement.innerText = "Resposta incorreta!";
    resultElement.className = "incorrect";
  }

  scoreElement.innerText = `Pontuação: ${score}`;

  setTimeout(nextQuestion, 1000);
}

function nextQuestion() {
  currentQuestionIndex++;

  if (currentQuestionIndex < questions.length) {
    showQuestions(questions[currentQuestionIndex]);
  } else {
    questionElement.innerText = "Parabéns! Você terminou o jogo!";
    answerElements.innerHTML = "";
    resultElement.innerText = "";
  }
}

fetchQuestions();
