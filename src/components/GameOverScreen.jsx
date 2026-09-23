import LivesIndicator from './LivesIndicator'

export default function GameOverScreen({
  score,
  totalQuestions,
  answered,
  maxLives = 3,
  onRetry,
  onHome,
}) {
  return (
    <div className="flex min-h-screen items-center justify-center bg-slate-50 px-4">
      <div className="w-full max-w-md animate-zoom-in rounded-2xl border border-slate-200 bg-white p-8 text-center shadow-sm">
        <div className="mb-4 flex justify-center">
          <LivesIndicator lives={0} maxLives={maxLives} />
        </div>

        <span className="inline-flex rounded-full bg-rose-100 px-3 py-1 text-xs font-semibold text-rose-700">
          Sin vidas
        </span>
        <h1 className="mt-3 text-3xl font-bold text-slate-800">
          Fin del juego
        </h1>
        <p className="mt-2 text-slate-500">
          Te quedaste sin vidas. Llevabas{' '}
          <span className="font-semibold text-slate-700">
            {score} de {totalQuestions}
          </span>{' '}
          puntos con {answered} {answered === 1 ? 'pregunta' : 'preguntas'}{' '}
          respondidas.
        </p>
        <p className="mt-4 text-sm text-slate-400">
          El ranking solo se guarda al completar las {totalQuestions} preguntas.
          ¡Intentalo de nuevo!
        </p>

        <button
          type="button"
          onClick={onRetry}
          className="mt-6 w-full rounded-lg bg-slate-800 px-6 py-3 font-semibold text-white transition-colors hover:bg-slate-900 focus:outline-none focus:ring-2 focus:ring-slate-500 focus:ring-offset-2"
        >
          Reintentar quiz
        </button>
        <button
          type="button"
          onClick={onHome}
          className="mt-3 w-full rounded-lg border border-slate-200 px-6 py-3 font-semibold text-slate-600 transition-colors hover:bg-slate-50 focus:outline-none focus:ring-2 focus:ring-slate-300 focus:ring-offset-2"
        >
          Volver al inicio
        </button>
      </div>
    </div>
  )
}
