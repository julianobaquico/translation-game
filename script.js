const questions = [
    {
      english: "The park is located >between< the library and the school.",
      portuguese: "O parque está localizado ___ a biblioteca e a escola.",
      answer: "entre",
      audio: "audio/1.mp3" 
    },
    {
      english: "She is a very good singer.",
      portuguese: "Ela é uma ___ cantora.",
      answer: "boa",
      audio: "audio/audio2.mp3" 
    },
    // Adicione mais perguntas aqui
  ];
  
  let currentQuestion = 0;
  
  function loadQuestion() {
    const questionData = questions[currentQuestion];
    document.getElementById("question").textContent = questionData.english;
    document.getElementById("translation").textContent = questionData.portuguese;
  
    // Limpa a resposta e o resultado
    document.getElementById("answer").value = "";
    document.getElementById("result").textContent = "";
  }
  
  function checkAnswer() {
    const answer = document.getElementById("answer").value;
    const questionData = questions[currentQuestion];
    const resultElement = document.getElementById("result");
  
    if (answer.toLowerCase() === questionData.answer) {
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