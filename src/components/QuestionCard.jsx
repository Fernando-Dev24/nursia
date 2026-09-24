import LivesIndicator from './LivesIndicator'

const DIFFICULTY_STYLES = {
  easy: 'bg-success/15 text-success border-success/40',
  medium: 'bg-warning/15 text-warning border-warning/40',
  hard: 'bg-destructive/10 text-destructive border-destructive/30',
}

const DIFFICULTY_LABELS = {
  easy: 'Fácil',
  medium: 'Media',
  hard: 'Difícil',
}

function getOptionClass(optionIndex, selected, question) {
  const base = 'w-full rounded-xl border-2 px-4 py-3.5 text-left font-semibold transition-all duration-200 focus:outline-none focus:ring-4 focus:ring-accent/25'

  if (selected === null) {
    return `${base} border-border bg-white text-slate-800 hover:-translate-y-0.5 hover:border-accent hover:shadow-lg hover:shadow-accent/10`
  }

  if (optionIndex === question.correctAnswer) {
    return `${base} border-success bg-success/10 text-slate-800 shadow-lg shadow-success/10`
  }

  if (optionIndex === selected) {
    return `${base} border-destructive bg-destructive/5 text-slate-800`
  }

  return `${base} border-border bg-white text-slate-400 opacity-60`
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

  const progress = Math.round(
    ((questionIndex + (answered ? 1 : 0)) / totalQuestions) * 100,
  )

  const nextLabel = outOfLives
    ? 'Continuar'
    : isLast
      ? 'Ver resultado'
      : 'Siguiente pregunta'

  return (
    <div className="game-shell">
      <div className="w-full max-w-2xl">
        <div className="rounded-t-3xl border-2 border-b-0 border-accent/25 bg-primary px-4 pt-4 sm:px-6">
          <div className="flex items-center justify-between gap-3 pb-3">
            <div className="flex min-w-0 items-center gap-3">
              <img
                src="/logo.png"
                alt="Logo Feria de Logros Escolar"
                className="h-9 w-auto shrink-0 object-contain"
              />
              <div className="min-w-0">
                <p className="truncate text-sm font-black uppercase tracking-wide text-white">
                  Pregunta {questionIndex + 1} / {totalQuestions}
                </p>
                <div className="mt-1.5 h-2 w-full min-w-40 overflow-hidden rounded-full bg-white/15">
                  <div
                    className="h-full rounded-full bg-accent transition-[width] duration-500 ease-out"
                    style={{ width: `${progress}%` }}
                  />
                </div>
              </div>
            </div>
            <LivesIndicator lives={lives} maxLives={maxLives} tone="hud" />
          </div>
        </div>

        <div className="animate-slide-in-right animate-duration-normal rounded-b-3xl border-2 border-t-0 border-accent/25 bg-white p-5 shadow-[0_24px_60px_-24px_rgba(3,10,30,0.85)] sm:p-8">
          <div className="mb-4 flex flex-wrap items-center gap-2 text-xs font-semibold uppercase tracking-wide">
            {question.type === 'clinic' && (
              <span className="game-pill border-2 border-accent/40 bg-accent/10 text-accent-foreground">
                Caso Clínico
              </span>
            )}
            <span className="game-pill border-2 border-primary/15 bg-primary/10 text-primary">
              {question.category}
            </span>
            <span
              className={`game-pill border-2 ${DIFFICULTY_STYLES[question.difficulty]}`}
            >
              {DIFFICULTY_LABELS[question.difficulty]}
            </span>
          </div>

          <h2 className="text-lg font-bold leading-snug text-slate-800 sm:text-2xl">
            {question.question}
          </h2>

          <div className="mt-5 flex flex-col gap-2.5">
            {question.options.map((option, index) => (
              <button
                key={index}
                type="button"
                disabled={answered}
                onClick={() => onSelect(index)}
                className={getOptionClass(index, selected, question)}
              >
                <span className="mr-3 inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-slate-900 text-sm font-black text-accent">
                  {String.fromCharCode(65 + index)}
                </span>
                {option}
              </button>
            ))}
          </div>

          {answered && (
            <div
              className={`mt-5 animate-fade-in-up animate-duration-fast rounded-xl border-2 p-4 ${
                isCorrect
                  ? 'border-success/40 bg-success/10'
                  : 'border-destructive/30 bg-destructive/5'
              }`}
            >
              <p className="font-black uppercase tracking-wide text-slate-900">
                {isCorrect ? '¡Correcto!' : 'Incorrecto'}
              </p>
              {!isCorrect && (
                <>
                  <p className="mt-1 text-sm text-slate-600">
                    La respuesta correcta es:{' '}
                    <span className="font-bold text-slate-900">
                      {question.options[question.correctAnswer]}
                    </span>
                  </p>
                  <p className="mt-2 text-sm font-bold text-destructive">
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
              className="game-btn game-btn-accent mt-5 w-full text-base"
            >
              {nextLabel}
            </button>
          )}
        </div>
      </div>
    </div>
  )
}