import { useState } from 'react'
import WelcomeScreen from './components/WelcomeScreen'
import QuestionCard from './components/QuestionCard'
import GameOverScreen from './components/GameOverScreen'
import ResultScreen from './components/ResultScreen'
import { buildQuiz, QUIZ_SIZE } from './data/questions'

const MAX_LIVES = 3

export default function App() {
  const [view, setView] = useState('welcome')
  const [quiz, setQuiz] = useState([])
  const [currentIndex, setCurrentIndex] = useState(0)
  const [selected, setSelected] = useState(null)
  const [score, setScore] = useState(0)
  const [lives, setLives] = useState(MAX_LIVES)
  const [player, setPlayer] = useState({ name: '', email: '' })
  const [notice, setNotice] = useState(null)

  const question = quiz[currentIndex]

  const resetRun = () => {
    setQuiz(buildQuiz())
    setCurrentIndex(0)
    setSelected(null)
    setScore(0)
    setLives(MAX_LIVES)
    setNotice(null)
    setView('quiz')
  }

  const handleStart = () => resetRun()

  const handleSelect = (optionIndex) => {
    if (selected !== null) return
    setSelected(optionIndex)
    if (optionIndex === question.correctAnswer) {
      setScore((prev) => prev + 1)
    } else {
      // Regla de negocio: cada incorrecta descuenta una vida.
      setLives((prev) => Math.max(0, prev - 1))
    }
  }

  const handleNext = () => {
    setSelected(null)

    const nextIndex = currentIndex + 1

    // Completó las 10 preguntas: mostramos el resultado (aunque perdió su
    // última vida en la última pregunta, sí terminó el juego).
    if (nextIndex >= quiz.length) {
      setView('result')
      return
    }

    // Sin vidas y quedan preguntas: cortamos el quiz.
    if (lives <= 0) {
      setView('gameover')
      return
    }

    setCurrentIndex(nextIndex)
  }

  const resetRunToWelcome = () => {
    setQuiz([])
    setCurrentIndex(0)
    setSelected(null)
    setScore(0)
    setLives(MAX_LIVES)
    setView('welcome')
  }

  const handleSaved = (savedNotice) => {
    // "Guardar ranking y salir": volvemos al inicio con el feedback visual.
    setNotice(savedNotice)
    resetRunToWelcome()
  }

  if (view === 'welcome') {
    return (
      <WelcomeScreen
        totalQuestions={QUIZ_SIZE}
        maxLives={MAX_LIVES}
        notice={notice}
        onStart={handleStart}
      />
    )
  }

  if (view === 'gameover') {
    return (
      <GameOverScreen
        score={score}
        totalQuestions={quiz.length || QUIZ_SIZE}
        answered={currentIndex + 1}
        maxLives={MAX_LIVES}
        onRetry={resetRun}
        onHome={() => {
          setNotice(null)
          resetRunToWelcome()
        }}
      />
    )
  }

  if (view === 'result') {
    return (
      <ResultScreen
        score={score}
        totalQuestions={quiz.length}
        lives={lives}
        maxLives={MAX_LIVES}
        player={player}
        onPlayerChange={setPlayer}
        onRestart={resetRun}
        onSaved={handleSaved}
      />
    )
  }

  if (!question) {
    return null
  }

  return (
    <QuestionCard
      key={currentIndex}
      question={question}
      questionIndex={currentIndex}
      totalQuestions={quiz.length}
      selected={selected}
      lives={lives}
      maxLives={MAX_LIVES}
      onSelect={handleSelect}
      onNext={handleNext}
    />
  )
}
