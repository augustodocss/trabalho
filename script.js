/* Reescrevendo completamente o JavaScript para o tema espacial/futurista */
let currentSector = 1
let currentQuestion = 1
const questionsPerSector = 5
let totalPoints = 0
let energyLevel = 3
let isTransitioning = false

const missionSectors = [
  {
    title: "primeira fase",
    description: "",
    briefing: "",
    difficulty: "",
    questions: [
      {
        terminals: [
          "Vou a escola todos os dias.",
          "Vou à escola todos os dias.",
          "Vou para escola todos os dias.",
          "Vou na escola todos os dias.",
        ],
        correctTerminal: 2,
        analysis: "Crase obrigatória: preposição 'a' + artigo 'a' = 'à escola'.",
      },
      {
        terminals: ["Chegou a casa cedo.", "Chegou à casa cedo.", "Chegou em casa cedo.", "Chegou para casa cedo."],
        correctTerminal: 2,
        analysis: "Crase obrigatória: 'a' + 'a casa' = 'à casa'.",
      },
      {
        terminals: [
          "Refere-se a pessoa conhecida.",
          "Refere-se à pessoa conhecida.",
          "Refere-se para pessoa conhecida.",
          "Refere-se sobre pessoa conhecida.",
        ],
        correctTerminal: 2,
        analysis: "Crase obrigatória: 'a' + 'a pessoa' = 'à pessoa'.",
      },
      {
        terminals: [
          "Deu o livro a menina.",
          "Deu o livro à menina.",
          "Deu o livro para menina.",
          "Deu o livro da menina.",
        ],
        correctTerminal: 2,
        analysis: "Crase obrigatória: 'a' + 'a menina' = 'à menina'.",
      },
      {
        terminals: [
          "Voltou a cidade natal.",
          "Voltou à cidade natal.",
          "Voltou para cidade natal.",
          "Voltou na cidade natal.",
        ],
        correctTerminal: 2,
        analysis: "Crase obrigatória: 'a' + 'a cidade' = 'à cidade'.",
      },
    ],
  },
  {
    title: "nivel médio",
    description: "",
    briefing: "",
    difficulty: "",
    questions: [
      {
        terminals: [
          "Ficou a frente da casa esperando.",
          "Ficou à frente da casa esperando.",
          "Ficou na frente da casa esperando.",
          "Ficou em frente da casa esperando.",
        ],
        correctTerminal: 2,
        analysis: "Locução prepositiva feminina: 'à frente de' sempre com crase.",
      },
      {
        terminals: [
          "Saiu a procura de emprego.",
          "Saiu à procura de emprego.",
          "Saiu em procura de emprego.",
          "Saiu para procura de emprego.",
        ],
        correctTerminal: 2,
        analysis: "Locução prepositiva: 'à procura de' sempre com crase.",
      },
      {
        terminals: [
          "Chegou a tempo da reunião.",
          "Chegou à tempo da reunião.",
          "Chegou em tempo da reunião.",
          "Chegou no tempo da reunião.",
        ],
        correctTerminal: 1,
        analysis: "SEM crase: 'a tempo' é locução adverbial masculina.",
      },
      {
        terminals: [
          "Ficou a espera do resultado.",
          "Ficou à espera do resultado.",
          "Ficou na espera do resultado.",
          "Ficou em espera do resultado.",
        ],
        correctTerminal: 2,
        analysis: "Locução prepositiva: 'à espera de' sempre com crase.",
      },
      {
        terminals: [
          "Vendeu a prazo o produto.",
          "Vendeu à prazo o produto.",
          "Vendeu em prazo o produto.",
          "Vendeu no prazo o produto.",
        ],
        correctTerminal: 1,
        analysis: "SEM crase: 'a prazo' é locução adverbial masculina.",
      },
    ],
  },
  {
    title: "nivel dificil",
    description: "",
    briefing: "",
    difficulty: "",
    questions: [
      {
        terminals: [
          "Dirigiu-se a Sua Excelência.",
          "Dirigiu-se à Sua Excelência.",
          "Ambas as opções A e B estão corretas.",
          "Dirigiu-se para Sua Excelência.",
        ],
        correctTerminal: 3,
        analysis: "Crase facultativa antes de pronomes de tratamento femininos.",
      },
      {
        terminals: [
          "Entregou a sua irmã o presente.",
          "Entregou à sua irmã o presente.",
          "Ambas as opções A e B estão corretas.",
          "Entregou para sua irmã o presente.",
        ],
        correctTerminal: 3,
        analysis: "Crase facultativa antes de pronomes possessivos femininos.",
      },
      {
        terminals: [
          "Referia-se a dona Maria sempre.",
          "Referia-se à dona Maria sempre.",
          "Ambas as opções A e B estão corretas.",
          "Referia-se para dona Maria sempre.",
        ],
        correctTerminal: 3,
        analysis: "Crase facultativa antes de nomes próprios femininos precedidos de 'dona'.",
      },
      {
        terminals: [
          "Obedece a minha mãe sempre.",
          "Obedece à minha mãe sempre.",
          "Ambas as opções A e B estão corretas.",
          "Obedece para minha mãe sempre.",
        ],
        correctTerminal: 3,
        analysis: "Crase facultativa: pronome possessivo feminino 'minha'.",
      },
      {
        terminals: [
          "Dirigiu-se a senhora ministra.",
          "Dirigiu-se à senhora ministra.",
          "Ambas as opções A e B estão corretas.",
          "Dirigiu-se para senhora ministra.",
        ],
        correctTerminal: 3,
        analysis: "Crase facultativa antes de 'senhora' + cargo feminino.",
      },
    ],
  },
  {
    title: "nivel expert",
    description: "",
    briefing: "",
    difficulty: "",
    questions: [
      {
        terminals: [
          "Viajou a França no verão.",
          "Viajou à França no verão.",
          "Viajou para França no verão.",
          "Viajou na França no verão.",
        ],
        correctTerminal: 2,
        analysis: "Crase obrigatória: país feminino com artigo 'a França'.",
      },
      {
        terminals: [
          "Retornou a Brasília ontem.",
          "Retornou à Brasília ontem.",
          "Retornou para Brasília ontem.",
          "Retornou em Brasília ontem.",
        ],
        correctTerminal: 1,
        analysis: "SEM crase: 'Brasília' não aceita artigo (vem DE Brasília).",
      },
      {
        terminals: [
          "Mudou-se a Bahia definitivamente.",
          "Mudou-se à Bahia definitivamente.",
          "Mudou-se para Bahia definitivamente.",
          "Mudou-se na Bahia definitivamente.",
        ],
        correctTerminal: 2,
        analysis: "Crase obrigatória: estado feminino com artigo 'a Bahia'.",
      },
      {
        terminals: [
          "Chegou a Roma pela manhã.",
          "Chegou à Roma pela manhã.",
          "Chegou para Roma pela manhã.",
          "Chegou em Roma pela manhã.",
        ],
        correctTerminal: 1,
        analysis: "SEM crase: 'Roma' não aceita artigo (vem DE Roma).",
      },
      {
        terminals: [
          "Voou a Alemanha rapidamente.",
          "Voou à Alemanha rapidamente.",
          "Voou para Alemanha rapidamente.",
          "Voou na Alemanha rapidamente.",
        ],
        correctTerminal: 2,
        analysis: "Crase obrigatória: país feminino com artigo 'a Alemanha'.",
      },
    ],
  },
  {
    title: "setor impossivel",
    description: "",
    briefing: "",
    difficulty: "",
    questions: [
      {
        terminals: [
          "Referia-se a mulher do comandante.",
          "Referia-se à mulher do comandante.",
          "Referia-se a uma mulher do comandante.",
          "Referia-se aquela mulher do comandante.",
        ],
        correctTerminal: 2,
        analysis: "Crase especifica: 'à mulher' (determinada) vs 'a uma mulher' (indeterminada).",
      },
      {
        terminals: [
          "Vendeu a vista o apartamento.",
          "Vendeu à vista o apartamento.",
          "Vendeu a prazo o apartamento.",
          "Vendeu em vista o apartamento.",
        ],
        correctTerminal: 2,
        analysis: "Locução adverbial feminina: 'à vista' sempre com crase.",
      },
      {
        terminals: [
          "Saiu as pressas de casa.",
          "Saiu às pressas de casa.",
          "Saiu com pressas de casa.",
          "Saiu em pressas de casa.",
        ],
        correctTerminal: 2,
        analysis: "Locução adverbial feminina plural: 'às pressas' sempre com crase.",
      },
      {
        terminals: [
          "Ficou a deriva no oceano.",
          "Ficou à deriva no oceano.",
          "Ficou em deriva no oceano.",
          "Ficou na deriva no oceano.",
        ],
        correctTerminal: 2,
        analysis: "Locução adverbial feminina: 'à deriva' sempre com crase.",
      },
      {
        terminals: [
          "Trabalha as escondidas sempre.",
          "Trabalha às escondidas sempre.",
          "Trabalha em escondidas sempre.",
          "Trabalha nas escondidas sempre.",
        ],
        correctTerminal: 2,
        analysis: "Locução adverbial feminina plural: 'às escondidas' sempre com crase.",
      },
    ],
  },
]

function startMission() {
  document.getElementById("launch-screen").style.display = "none"
  document.getElementById("mission-area").style.display = "block"
  initializeHUD()
  loadSector()
}

function initializeHUD() {
  updateHUD()
  setTimeout(() => {
    document.getElementById("progress-beam").style.width = "0%"
  }, 500)
}

function loadSector() {
  if (currentSector > missionSectors.length) {
    completeMission()
    return
  }

  currentQuestion = 1
  showSectorTransition()
}

function showSectorTransition() {
  if (isTransitioning) return
  isTransitioning = true

  const transition = document.getElementById("sector-transition")
  const sector = missionSectors[currentSector - 1]

  document.getElementById("sector-title").textContent = `${sector.title} - ${sector.difficulty}`
  document.getElementById("sector-description").textContent = `${sector.briefing} Questões: ${questionsPerSector}`

  transition.style.display = "flex"

  const loadingFill = document.querySelector(".loading-fill")
  loadingFill.style.width = "0%"

  setTimeout(() => {
    loadingFill.style.width = "100%"
  }, 500)

  setTimeout(() => {
    transition.style.display = "none"
    displayChallenge()
    isTransitioning = false
  }, 3500)
}

function displayChallenge() {
  const sector = missionSectors[currentSector - 1]
  const question = sector.questions[currentQuestion - 1]

  document.getElementById("challenge-title").textContent =
    `${sector.title} - Questão ${currentQuestion}/${questionsPerSector}`
  document.getElementById("challenge-brief").textContent = sector.description

  const shuffledAnswers = shuffleAnswers(question.terminals, question.correctTerminal)

  for (let i = 1; i <= 4; i++) {
    const terminal = document.getElementById(`terminal-${i}`)
    const answerText = document.getElementById(`answer-${i}`)

    terminal.className = "terminal"
    terminal.onclick = () => selectTerminal(i)

    typewriterEffect(answerText, shuffledAnswers.answers[i - 1], i * 200)
  }

  question.shuffledCorrectPosition = shuffledAnswers.newCorrectPosition

  resetTerminalStates()
}

function shuffleAnswers(answers, correctIndex) {
  const shuffled = [...answers]
  const correctAnswer = answers[correctIndex - 1]

  // Embaralhar usando algoritmo Fisher-Yates
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]]
  }

  // Encontrar a nova posição da resposta correta
  const newCorrectPosition = shuffled.indexOf(correctAnswer) + 1

  return {
    answers: shuffled,
    newCorrectPosition: newCorrectPosition,
  }
}

function selectTerminal(terminalNumber) {
  const sector = missionSectors[currentSector - 1]
  const question = sector.questions[currentQuestion - 1]
  const isCorrect = terminalNumber === question.shuffledCorrectPosition

  for (let i = 1; i <= 4; i++) {
    const terminal = document.getElementById(`terminal-${i}`)
    terminal.classList.add("disabled")
    terminal.onclick = null
  }

  const selectedTerminal = document.getElementById(`terminal-${terminalNumber}`)

  if (isCorrect) {
    selectedTerminal.classList.add("correct")
    const pointsEarned = 50 + currentSector * 25
    totalPoints += pointsEarned
    updateHUD()
    updateProgress()

    setTimeout(() => {
      showSystemFeedback(true, question.analysis)
    }, 800)
  } else {
    selectedTerminal.classList.add("incorrect")
    energyLevel = Math.max(0, energyLevel - 1)
    updateHUD()

    setTimeout(() => {
      const correctTerminal = document.getElementById(`terminal-${question.shuffledCorrectPosition}`)
      correctTerminal.classList.add("correct")
    }, 600)

    setTimeout(() => {
      showSystemFeedback(
        false,
        `ERRO! Terminal correto: ${String.fromCharCode(64 + question.shuffledCorrectPosition)}. ${question.analysis}`,
      )
    }, 1200)
  }
}

function showSystemFeedback(success, analysisData) {
  const feedbackSystem = document.getElementById("feedback-system")
  const statusIndicator = document.getElementById("status-indicator")
  const consoleTitle = document.getElementById("console-title")
  const resultAnalysis = document.getElementById("result-analysis")
  const explanationData = document.getElementById("explanation-data")

  if (success) {
    statusIndicator.className = "status-indicator success"
    consoleTitle.textContent = "voce acertou"
    resultAnalysis.className = "result-analysis success"
    resultAnalysis.textContent = ""
  } else {
    statusIndicator.className = "status-indicator error"
    consoleTitle.textContent = "voce errou"
    resultAnalysis.className = "result-analysis error"
    resultAnalysis.textContent = ""
  }

  explanationData.textContent = analysisData
  feedbackSystem.style.display = "flex"
}

function proceedToNext() {
  document.getElementById("feedback-system").style.display = "none"

  if (energyLevel <= 0) {
    showMissionFailed()
    return
  }

  if (currentQuestion < questionsPerSector) {
    currentQuestion++
    displayChallenge()
  } else {
    currentSector++
    loadSector()
  }
}

function updateHUD() {
  document.getElementById("current-level").textContent = `${currentSector}-${currentQuestion}`.padStart(4, "0")

  document.getElementById("score").textContent = totalPoints.toString().padStart(6, "0")

  const energyBars = document.querySelectorAll(".energy-bar")
  energyBars.forEach((bar, index) => {
    if (index < energyLevel) {
      bar.classList.add("active")
    } else {
      bar.classList.remove("active")
    }
  })
}

function updateProgress() {
  const totalQuestions = missionSectors.length * questionsPerSector
  const completedQuestions = (currentSector - 1) * questionsPerSector + currentQuestion
  const progressPercentage = (completedQuestions / totalQuestions) * 100
  document.getElementById("progress-beam").style.width = `${progressPercentage}%`

  const checkpoints = document.querySelectorAll(".checkpoint")
  checkpoints.forEach((checkpoint, index) => {
    if (index < currentSector) {
      checkpoint.classList.add("active")
    }
  })
}

function resetTerminalStates() {
  for (let i = 1; i <= 4; i++) {
    const terminal = document.getElementById(`terminal-${i}`)
    terminal.classList.remove("correct", "incorrect", "disabled")
  }
}

function completeMission() {
  document.getElementById("mission-area").style.display = "none"
  document.getElementById("mission-complete").style.display = "flex"
  document.getElementById("final-score").textContent = totalPoints.toString().padStart(6, "0")

  setTimeout(() => {
    const energyBurst = document.querySelector(".energy-burst")
    energyBurst.style.animation = "energyBurst 2s ease-out infinite"
  }, 500)
}

function showMissionFailed() {
  const gameOverOverlay = document.createElement("div")
  gameOverOverlay.id = "game-over-overlay"
  gameOverOverlay.innerHTML = `
    <div class="game-over-content">
      <div class="sad-robot">😢</div>
      <h2 class="game-over-title">VOLTE AO INICIO </h2>
      <p class="game-over-message">sua energia acabou</p>
      <div class="static-effect"></div>
      <button onclick="restartMission()" class="restart-btn">REINICIAR JOGO</button>
    </div>
  `

  const style = document.createElement("style")
  style.textContent = `
    #game-over-overlay {
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: linear-gradient(45deg, #000, #1a1a2e, #16213e);
      display: flex;
      align-items: center;
      justify-content: center;
      z-index: 1000;
      animation: fadeInSad 2s ease-in;
    }
    
    .game-over-content {
      text-align: center;
      color: #ff4757;
      animation: glitchSad 0.5s infinite alternate;
    }
    
    .sad-robot {
      font-size: 4rem;
      margin-bottom: 1rem;
      animation: shakeSad 1s infinite;
    }
    
    .game-over-title {
      font-size: 3rem;
      margin-bottom: 1rem;
      text-shadow: 0 0 20px #ff4757;
    }
    
    .game-over-message {
      font-size: 1.2rem;
      margin-bottom: 2rem;
      opacity: 0.8;
    }
    
    .static-effect {
      width: 100%;
      height: 2px;
      background: linear-gradient(90deg, transparent, #ff4757, transparent);
      animation: staticMove 0.1s infinite;
      margin: 1rem 0;
    }
    
    .restart-btn {
      padding: 1rem 2rem;
      background: linear-gradient(45deg, #ff4757, #ff3742);
      border: none;
      color: white;
      font-size: 1.1rem;
      cursor: pointer;
      border-radius: 5px;
      transition: all 0.3s;
    }
    
    .restart-btn:hover {
      transform: scale(1.05);
      box-shadow: 0 0 20px #ff4757;
    }
    
    @keyframes fadeInSad {
      from { opacity: 0; }
      to { opacity: 1; }
    }
    
    @keyframes glitchSad {
      0% { transform: translateX(0); }
      100% { transform: translateX(2px); }
    }
    
    @keyframes shakeSad {
      0%, 100% { transform: translateY(0); }
      50% { transform: translateY(-5px); }
    }
    
    @keyframes staticMove {
      0% { transform: translateX(-100%); }
      100% { transform: translateX(100%); }
    }
  `

  document.head.appendChild(style)
  document.body.appendChild(gameOverOverlay)
}

function restartMission() {
  const gameOverOverlay = document.getElementById("game-over-overlay")
  if (gameOverOverlay) {
    gameOverOverlay.remove()
  }

  currentSector = 1
  currentQuestion = 1
  totalPoints = 0
  energyLevel = 3
  isTransitioning = false

  document.getElementById("mission-complete").style.display = "none"
  document.getElementById("mission-area").style.display = "none"
  document.getElementById("launch-screen").style.display = "flex"

  document.getElementById("progress-beam").style.width = "0%"
  const checkpoints = document.querySelectorAll(".checkpoint")
  checkpoints.forEach((checkpoint) => checkpoint.classList.remove("active"))

  updateHUD()
}

function typewriterEffect(element, text, delay) {
  setTimeout(() => {
    element.textContent = ""
    let index = 0

    const typeInterval = setInterval(() => {
      if (index < text.length) {
        element.textContent += text.charAt(index)
        index++
      } else {
        clearInterval(typeInterval)
      }
    }, 30)
  }, delay)
}

document.addEventListener("DOMContentLoaded", () => {
  updateHUD()
})
