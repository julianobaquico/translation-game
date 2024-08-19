const questions = [
  {
    english: "The menu sits <b>between</b> the header and footer.",
    portuguese: "O menu fica _____ o cabeçalho e o rodapé.",
    answers: ["entre"],
    audio: "audio/between.mp3",
    dica: "DICA: Outra forma de dizer isso serio (no meio do ...)."
  },
  {
    english: "The app <b>gives</b> users options.",
    portuguese: "O aplicativo _____ opções aos usuários.",
    answers: ["fornece", "dá", "da", "oferece"],
    audio: "audio/gives.mp3",
    dica: "DICA: Outras opções para traduzir 'gives' nesse contexto são (dá, fornece ou oferece)."
  },
  // ... Adicione mais perguntas aqui
];

let currentQuestion = 0;
let showingResult = false; 

function loadQuestion() {
  const questionData = questions[currentQuestion];
  document.getElementById("question").innerHTML = questionData.english;
  document.getElementById("translation").textContent = questionData.portuguese;
  document.getElementById("answer").value = ""; 
  document.getElementById("result").textContent = ""; 
  document.getElementById("dica").textContent = ""; 

  // Esconde o botão "Próximo"
  document.getElementById("next-button").style.display = "none";
  
  // Mostra a pergunta e esconde o resultado
  document.getElementById("card").style.display = "block"; 
  showingResult = false;
  
  // Mostra todos os elementos da pergunta
  document.getElementById("question").style.display = "block";
  document.getElementById("translation").style.display = "block";
  document.getElementById("answer").style.display = "block";
  document.getElementById("check-button").style.display = "block";
  document.getElementById("audio-button").style.display = "block"; // Mostra o botão "Ouvir"
}

function verificarResposta(respostaUsuario, respostasCorretas) {
  return respostasCorretas.some(respostaCorreta => 
    respostaCorreta.toLowerCase() === respostaUsuario.toLowerCase()
  );
}

function checkAnswer() {
  const answer = document.getElementById("answer").value;
  const questionData = questions[currentQuestion];
  const resultElement = document.getElementById("result");
  const dicaElement = document.getElementById("dica");
  const nextButton = document.getElementById("next-button");

  if (verificarResposta(answer, questionData.answers)) {
    resultElement.textContent = "Correto!";
    dicaElement.textContent = questionData.dica;
  } else {
    resultElement.textContent = 
      "Incorreto. As respostas corretas são: " + questionData.answers.join(", "); 
  }

  // Mostra o resultado e esconde a pergunta (mesmo se a resposta estiver errada)
  document.getElementById("question").style.display = "none";
  document.getElementById("translation").style.display = "none";
  document.getElementById("answer").style.display = "none";
  document.getElementById("check-button").style.display = "none";
  document.getElementById("audio-button").style.display = "none"; // Esconde o botão "Ouvir"

  // Mostra o botão "Próximo" em qualquer caso
  nextButton.style.display = "block"; 
  showingResult = true; 
}

// Botão de ouvir
const audioButton = document.getElementById("audio-button");
audioButton.addEventListener("click", () => {
  const questionData = questions[currentQuestion];
  const audio = new Audio(questionData.audio);
  audio.play();
});

// Botão de verificar
const checkButton = document.getElementById("check-button");
checkButton.addEventListener("click", checkAnswer);

// Botão de próximo
const nextButton = document.getElementById("next-button");
nextButton.addEventListener("click", () => {
  currentQuestion++;
  if (currentQuestion < questions.length) {
    loadQuestion();
  } else {
    document.getElementById("result").textContent = "Fim do Jogo!";
    nextButton.style.display = "none";
  }
});

loadQuestion();