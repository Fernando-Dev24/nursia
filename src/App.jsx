import { useState } from 'react'
import WelcomeScreen from './components/WelcomeScreen'
import QuestionCard from './components/QuestionCard'
import { buildQuiz, QUIZ_SIZE } from './data/questions'

export default function App() {
  const [view, setView] = useState('welcome')
  const [quiz, setQuiz] = useState([])
  const [currentIndex, setCurrentIndex] = useState(0)
  const [selected, setSelected] = useState(null)
  const [score, setScore] = useState(0)

  const question = quiz[currentIndex]
  const isFinished = currentIndex >= quiz.length

  const handleStart = () => {
    const questions = buildQuiz()
    setQuiz(questions)
    setCurrentIndex(0)
    setSelected(null)
    setScore(0)
    setView('quiz')
  }

  const handleSelect = (optionIndex) => {
    if (selected !== null) return
    setSelected(optionIndex)
    if (optionIndex === question.correctAnswer) {
      setScore((prev) => prev + 1)
    }
  }

  const handleNext = () => {
    setSelected(null)
    setCurrentIndex((prev) => prev + 1)
  }

  if (view === 'welcome') {
    return (
      <WelcomeScreen
        totalQuestions={QUIZ_SIZE}
        onStart={handleStart}
      />
    )
  }

  if (isFinished) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-slate-50 px-4">
        <div className="w-full max-w-md rounded-2xl border border-slate-200 bg-white p-8 text-center shadow-sm">
          <h1 className="text-3xl font-bold text-slate-800">¡Quiz terminado!</h1>
          <p className="mt-2 text-lg text-slate-500">
            Obtuviste {score} de {quiz.length} puntos.
          </p>
          <p className="mt-4 text-sm text-slate-400">
            (Pantalla de resultado final y ranking disponibles en la próxima
            entrega.)
          </p>
          <button
            type="button"
            onClick={handleStart}
            className="mt-6 w-full rounded-lg bg-slate-800 px-6 py-3 font-semibold text-white transition-colors hover:bg-slate-900"
          >
            Volver a jugar
          </button>
        </div>
      </div>
    )
  }

  return (
    <QuestionCard
      question={question}
      questionIndex={currentIndex}
      totalQuestions={quiz.length}
      selected={selected}
      onSelect={handleSelect}
      onNext={handleNext}
    />
  )
}