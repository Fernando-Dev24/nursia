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
    <div className="game-shell">
      <div className="w-full max-w-md">
        <div className="game-card animate-zoom-in p-8 text-center">
          <div className="mb-4 flex justify-center">
            <LivesIndicator lives={0} maxLives={maxLives} />
          </div>

          <span className="game-pill mb-3 border-2 border-destructive/30 bg-destructive/10 text-destructive">
            Sin vidas
          </span>
          <h1 className="text-3xl font-black uppercase tracking-tight text-slate-900">
            Fin del juego
          </h1>
          <p className="mt-3 text-sm text-slate-500">
            Te quedaste sin vidas. Llevabas{' '}
            <span className="font-bold text-slate-900">
              {score} de {totalQuestions}
            </span>{' '}
            puntos con {answered} {answered === 1 ? 'pregunta' : 'preguntas'}{' '}
            respondidas.
          </p>

          <div className="mt-5 inline-flex items-center gap-2 rounded-2xl border-2 border-accent/30 bg-accent/10 px-6 py-3">
            <span className="text-2xl font-black text-accent-foreground">
              {score}
            </span>
            <span className="text-xs font-black uppercase tracking-widest text-accent-foreground">
              puntos
            </span>
          </div>

          <p className="mt-4 text-sm text-slate-400">
            El ranking solo se guarda al completar las {totalQuestions}{' '}
            preguntas. ¡Inténtalo de nuevo!
          </p>

          <button
            type="button"
            onClick={onRetry}
            className="game-btn game-btn-accent mt-6 w-full text-base"
          >
            Reintentar quiz
          </button>
          <button
            type="button"
            onClick={onHome}
            className="game-btn game-btn-light mt-3 w-full"
          >
            Volver al inicio
          </button>
        </div>
      </div>
    </div>
  )
}