const questions = [
  {
    english: "The park is located <b>between</b> the library and the school.",
    portuguese: "O parque está localizado _____ a biblioteca e a escola.",
    answer: "entre", 
    audio: "audio/1.mp3" 
  },
  {
    english: "The website has a <b>responsive</b> layout.",
    portuguese: "O site possui um layout _____.",
    answer: "responsivo", 
    audio: "audio/1.mp3" 
  },
  // Adicione mais perguntas aqui
];

let currentQuestion = 0;

function loadQuestion() {
  const questionData = questions[currentQuestion];
  document.getElementById("question").innerHTML = questionData.english; // Usando innerHTML
  document.getElementById("translation").textContent = questionData.portuguese;

  // Limpa a resposta e o resultado
  document.getElementById("answer").value = "";
  document.getElementById("result").textContent = "";
}

// Função para verificar a resposta
function verificarResposta(respostaUsuario, respostaCorreta) {
  return respostaCorreta.toLowerCase() === respostaUsuario.toLowerCase(); // Comparando diretamente com a string
}

function checkAnswer() {
  const answer = document.getElementById("answer").value;
  const questionData = questions[currentQuestion];
  const resultElement = document.getElementById("result");

  if (verificarResposta(answer, questionData.answer)) {
    resultElement.textContent = "Correto!";
  } else {
    resultElement.textContent = "Incorreto. A resposta correta é: " + questionData.answer;
  }

  // Cria o botão "Próximo"
  const nextButton = document.createElement("button");
  nextButton.textContent = "Próximo";
  nextButton.addEventListener("click", () => {
    currentQuestion++;
    if (currentQuestion < questions.length) {
      loadQuestion();
    } else {
      resultElement.textContent = "Fim do Jogo!";
      nextButton.remove();
    }
    nextButton.remove();
  });
  resultElement.appendChild(nextButton);
}

// Botão de ouvir
const audioButton = document.getElementById("audio-button");
audioButton.addEventListener("click", () => {
  const questionData = questions[currentQuestion];
  const audio = new Audio(questionData.audio);
  audio.play();
});

// Botão de verificar
document.getElementById("check-button").addEventListener("click", checkAnswer);

loadQuestion();