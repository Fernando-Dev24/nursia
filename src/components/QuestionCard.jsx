import LivesIndicator from './LivesIndicator'

const DIFFICULTY_STYLES = {
  easy: 'bg-emerald-100 text-emerald-700',
  medium: 'bg-amber-100 text-amber-700',
  hard: 'bg-rose-100 text-rose-700',
}

const DIFFICULTY_LABELS = {
  easy: 'Fácil',
  medium: 'Media',
  hard: 'Difícil',
}

function getOptionClass(optionIndex, selected, question) {
  const base =
    'w-full rounded-lg border px-4 py-3 text-left font-medium transition-colors focus:outline-none'

  if (selected === null) {
    return `${base} border-slate-200 bg-white text-slate-700 hover:border-slate-400 hover:bg-slate-50`
  }

  if (optionIndex === question.correctAnswer) {
    return `${base} border-emerald-500 bg-emerald-50 text-emerald-800`
  }

  if (optionIndex === selected) {
    return `${base} border-rose-500 bg-rose-50 text-rose-800`
  }

  return `${base} border-slate-200 bg-white text-slate-400`
}

export default function QuestionCard({
  question,
  questionIndex,
  totalQuestions,
  selected,
  lives,
  maxLives,
  onSelect,
  onNext,
}) {
  const isLast = questionIndex === totalQuestions - 1
  const answered = selected !== null
  const isCorrect = answered && selected === question.correctAnswer
  const outOfLives = lives <= 0

  const nextLabel = outOfLives
    ? 'Continuar'
    : isLast
      ? 'Ver resultado'
      : 'Siguiente pregunta'

  return (
    <div className="flex min-h-screen items-center justify-center bg-slate-50 px-4 py-8">
      <div className="w-full max-w-2xl animate-slide-in-right animate-duration-normal">
        <div className="mb-4 flex flex-wrap items-center justify-between gap-3 text-sm font-medium text-slate-500">
          <div className="flex items-center gap-4">
            <span>
              Pregunta{' '}
              <span className="font-bold text-slate-700">
                {questionIndex + 1}
              </span>{' '}
              de {totalQuestions}
            </span>
            <LivesIndicator lives={lives} maxLives={maxLives} />
          </div>
          <div className="flex items-center gap-2">
            {question.type === 'clinic' && (
              <span className="rounded-full bg-sky-100 px-3 py-1 text-xs font-semibold text-sky-700">
                Caso Clínico
              </span>
            )}
            <span className="rounded-full bg-slate-200 px-3 py-1 text-xs font-semibold text-slate-700">
              {question.category}
            </span>
            <span
              className={`rounded-full px-3 py-1 text-xs font-semibold ${DIFFICULTY_STYLES[question.difficulty]}`}
            >
              {DIFFICULTY_LABELS[question.difficulty]}
            </span>
          </div>
        </div>

        <div className="rounded-2xl bg-white p-8 shadow-sm border border-slate-200">
          <h2 className="text-2xl font-bold text-slate-800">{question.question}</h2>

          <div className="mt-6 flex flex-col gap-3">
            {question.options.map((option, index) => (
              <button
                key={index}
                type="button"
                disabled={answered}
                onClick={() => onSelect(index)}
                className={getOptionClass(index, selected, question)}
              >
                <span className="mr-3 inline-flex h-6 w-6 items-center justify-center rounded-full bg-slate-100 text-xs font-bold text-slate-600">
                  {String.fromCharCode(65 + index)}
                </span>
                {option}
              </button>
            ))}
          </div>

          {answered && (
            <div
              className={`mt-6 animate-fade-in-up animate-duration-fast rounded-lg border p-4 ${
                isCorrect
                  ? 'border-emerald-200 bg-emerald-50 text-emerald-800'
                  : 'border-rose-200 bg-rose-50 text-rose-800'
              }`}
            >
              <p className="font-semibold">
                {isCorrect ? '¡Correcto!' : 'Incorrecto'}
              </p>
              {!isCorrect && (
                <>
                  <p className="mt-1 text-sm">
                    La respuesta correcta es:{' '}
                    {question.options[question.correctAnswer]}
                  </p>
                  <p className="mt-2 text-sm font-semibold">
                    {outOfLives
                      ? 'Perdiste tu última vida: no te quedan más intentos.'
                      : `−1 vida · te quedan ${lives} ${
                          lives === 1 ? 'vida' : 'vidas'
                        }`}
                  </p>
                </>
              )}
            </div>
          )}

          {answered && (
            <button
              type="button"
              onClick={onNext}
              className="mt-6 w-full rounded-lg bg-slate-800 px-6 py-3 font-semibold text-white transition-colors hover:bg-slate-900 focus:outline-none focus:ring-2 focus:ring-slate-500 focus:ring-offset-2"
            >
              {nextLabel}
            </button>
          )}
        </div>
      </div>
    </div>
  )
}