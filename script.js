/* Reescrevendo completamente o JavaScript para o tema espacial/futurista */
let currentSector = 1
let currentQuestion = 1
const questionsPerSector = 5
let totalPoints = 0
let energyLevel = 10
let isTransitioning = false

const missionSectors = [
  {
    title: "SETOR ALFA: Básico",
    description: "Detecte o uso básico da crase:",
    briefing: "Analisando frases simples...",
    difficulty: "FÁCIL",
    questions: [
      {
        terminals: ["Vou a escola.", "Vou à escola.", "Vou na escola.", "Vou para escola."],
        correctTerminal: 2,
        analysis: "Use crase: 'a' + 'a escola' = 'à escola'.",
      },
      {
        terminals: [
          "Deu o livro a menina.",
          "Deu o livro à menina.",
          "Deu o livro da menina.",
          "Deu o livro para menina.",
        ],
        correctTerminal: 2,
        analysis: "Use crase: 'a' + 'a menina' = 'à menina'.",
      },
      {
        terminals: ["Chegou a casa.", "Chegou à casa.", "Chegou na casa.", "Chegou para casa."],
        correctTerminal: 2,
        analysis: "Use crase: 'a' + 'a casa' = 'à casa'.",
      },
      {
        terminals: ["Falou a mãe.", "Falou à mãe.", "Falou com mãe.", "Falou para mãe."],
        correctTerminal: 2,
        analysis: "Use crase: 'a' + 'a mãe' = 'à mãe'.",
      },
      {
        terminals: ["Foi a cidade.", "Foi à cidade.", "Foi na cidade.", "Foi para cidade."],
        correctTerminal: 2,
        analysis: "Use crase: 'a' + 'a cidade' = 'à cidade'.",
      },
    ],
  },
  {
    title: "SETOR BETA: Intermediário",
    description: "Identifique quando NÃO usar crase:",
    briefing: "Analisando casos sem crase...",
    difficulty: "MÉDIO",
    questions: [
      {
        terminals: ["Vou à casa dele.", "Vou a casa dele.", "Vou na casa dele.", "Vou para casa dele."],
        correctTerminal: 2,
        analysis: "SEM crase: 'casa dele' (não tem artigo 'a').",
      },
      {
        terminals: ["Falou à Maria.", "Falou a Maria.", "Falou com Maria.", "Falou para Maria."],
        correctTerminal: 2,
        analysis: "SEM crase: nomes próprios não levam artigo.",
      },
      {
        terminals: [
          "Deu o presente à ela.",
          "Deu o presente a ela.",
          "Deu o presente para ela.",
          "Deu o presente dela.",
        ],
        correctTerminal: 2,
        analysis: "SEM crase: pronomes pessoais não levam artigo.",
      },
      {
        terminals: ["Chegou à uma hora.", "Chegou a uma hora.", "Chegou em uma hora.", "Chegou numa hora."],
        correctTerminal: 2,
        analysis: "SEM crase: 'uma' já é artigo indefinido.",
      },
      {
        terminals: [
          "Voltou à terra natal.",
          "Voltou a terra natal.",
          "Voltou para terra natal.",
          "Voltou na terra natal.",
        ],
        correctTerminal: 1,
        analysis: "COM crase: 'a' + 'a terra' = 'à terra'.",
      },
    ],
  },
  {
    title: "SETOR GAMMA: Avançado",
    description: "Casos especiais de crase:",
    briefing: "Analisando locuções...",
    difficulty: "DIFÍCIL",
    questions: [
      {
        terminals: [
          "Saiu a procura de trabalho.",
          "Saiu à procura de trabalho.",
          "Saiu em procura de trabalho.",
          "Saiu para procura de trabalho.",
        ],
        correctTerminal: 2,
        analysis: "Locução: 'à procura de' sempre com crase.",
      },
      {
        terminals: [
          "Ficou a frente da casa.",
          "Ficou à frente da casa.",
          "Ficou na frente da casa.",
          "Ficou em frente da casa.",
        ],
        correctTerminal: 2,
        analysis: "Locução: 'à frente de' sempre com crase.",
      },
      {
        terminals: ["Vendeu à vista.", "Vendeu a vista.", "Vendeu em vista.", "Vendeu na vista."],
        correctTerminal: 1,
        analysis: "Locução: 'à vista' sempre com crase.",
      },
      {
        terminals: ["Chegou à tempo.", "Chegou a tempo.", "Chegou em tempo.", "Chegou no tempo."],
        correctTerminal: 2,
        analysis: "SEM crase: 'a tempo' é masculino.",
      },
      {
        terminals: ["Ficou a espera.", "Ficou à espera.", "Ficou na espera.", "Ficou em espera."],
        correctTerminal: 2,
        analysis: "Locução: 'à espera' sempre com crase.",
      },
    ],
  },
  {
    title: "SETOR DELTA: Expert",
    description: "Horas e lugares:",
    briefing: "Analisando horas e locais...",
    difficulty: "MUITO DIFÍCIL",
    questions: [
      {
        terminals: ["Chegou a 8 horas.", "Chegou às 8 horas.", "Chegou nas 8 horas.", "Chegou em 8 horas."],
        correctTerminal: 2,
        analysis: "Horas: sempre 'às' com crase.",
      },
      {
        terminals: ["Viajou à França.", "Viajou a França.", "Viajou para França.", "Viajou na França."],
        correctTerminal: 1,
        analysis: "País feminino: 'à França' com crase.",
      },
      {
        terminals: ["Foi à Bahia.", "Foi a Bahia.", "Foi para Bahia.", "Foi na Bahia."],
        correctTerminal: 1,
        analysis: "Estado feminino: 'à Bahia' com crase.",
      },
      {
        terminals: ["Voltou à Brasília.", "Voltou a Brasília.", "Voltou para Brasília.", "Voltou em Brasília."],
        correctTerminal: 2,
        analysis: "SEM crase: 'Brasília' não aceita artigo.",
      },
      {
        terminals: ["Saiu a 1 hora.", "Saiu à 1 hora.", "Saiu na 1 hora.", "Saiu em 1 hora."],
        correctTerminal: 2,
        analysis: "Hora específica: 'à 1 hora' com crase.",
      },
    ],
  },
  {
    title: "SETOR ÔMEGA: Master",
    description: "Casos complexos:",
    briefing: "Analisando casos avançados...",
    difficulty: "EXTREMO",
    questions: [
      {
        terminals: ["Saiu as pressas.", "Saiu às pressas.", "Saiu com pressas.", "Saiu em pressas."],
        correctTerminal: 2,
        analysis: "Locução feminina plural: 'às pressas'.",
      },
      {
        terminals: ["Ficou a deriva.", "Ficou à deriva.", "Ficou em deriva.", "Ficou na deriva."],
        correctTerminal: 2,
        analysis: "Locução feminina: 'à deriva'.",
      },
      {
        terminals: [
          "Trabalha as escondidas.",
          "Trabalha às escondidas.",
          "Trabalha em escondidas.",
          "Trabalha nas escondidas.",
        ],
        correctTerminal: 2,
        analysis: "Locução feminina plural: 'às escondidas'.",
      },
      {
        terminals: ["Refere-se a mulher.", "Refere-se à mulher.", "Refere-se da mulher.", "Refere-se para mulher."],
        correctTerminal: 2,
        analysis: "Específico: 'à mulher' (determinada).",
      },
      {
        terminals: ["Chegou as 14 horas.", "Chegou às 14 horas.", "Chegou nas 14 horas.", "Chegou em 14 horas."],
        correctTerminal: 2,
        analysis: "Horas: sempre 'às 14 horas'.",
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
    consoleTitle.textContent = "SISTEMA: OPERAÇÃO BEM-SUCEDIDA"
    resultAnalysis.className = "result-analysis success"
    resultAnalysis.textContent = "PROTOCOLO EXECUTADO COM SUCESSO"
  } else {
    statusIndicator.className = "status-indicator error"
    consoleTitle.textContent = "SISTEMA: ERRO DETECTADO"
    resultAnalysis.className = "result-analysis error"
    resultAnalysis.textContent = "FALHA NA EXECUÇÃO DO PROTOCOLO"
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
      <h2 class="game-over-title">MISSÃO FALHADA</h2>
      <p class="game-over-message">Energia esgotada... Sistemas em colapso...</p>
      <div class="static-effect"></div>
      <button onclick="restartMission()" class="restart-btn">REINICIAR SISTEMAS</button>
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
  energyLevel = 10
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
