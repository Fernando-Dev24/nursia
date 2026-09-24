const NOTICE_STYLES = {
  success: 'border-success/40 bg-success/10 text-success',
  info: 'border-accent/40 bg-accent/10 text-accent-foreground',
}

export default function WelcomeScreen({
  totalQuestions,
  maxLives,
  notice,
  onStart,
  onViewRanking,
}) {
  return (
    <div className="game-shell">
      <div className="w-full max-w-xl">
        <div className="game-card animate-fade-in-up p-6 sm:p-10 text-center">
          {notice && (
            <div
              className={`mb-6 animate-fade-in-down rounded-xl border-2 p-4 text-sm font-semibold ${
                NOTICE_STYLES[notice.type] ?? NOTICE_STYLES.info
              }`}
              role="status"
            >
              {notice.message}
            </div>
          )}

          <img
            src="/logo-full.png"
            alt="Logo Feria de Logros Escolar"
            className="mx-auto mb-2 max-h-36 w-auto object-contain sm:max-h-44"
          />

          <span className="game-pill mb-4 bg-accent text-accent-foreground">
            Feria de Logros Escolar
          </span>
          <h1 className="text-3xl font-black uppercase tracking-tight text-primary sm:text-4xl">
            ¡Bienvenidos!
          </h1>
          <p className="mt-3 text-sm text-muted-foreground sm:text-base">
            Quiz interactivo sobre atención de pacientes en emergencias médicas.
            Responde {totalQuestions} preguntas: conocimiento general y casos
            clínicos.
          </p>

          <div className="mt-6 flex items-center justify-center gap-2 rounded-2xl border-2 border-warning/50 bg-warning/10 px-4 py-3 text-sm font-bold text-warning">
            <span aria-hidden="true">♥ ♥ ♥</span>
            <span>
              Tienes {maxLives} vidas, cada error descuenta una
            </span>
          </div>

          <div className="mt-8 flex flex-col gap-3">
            <button
              type="button"
              onClick={onStart}
              className="game-btn game-btn-accent w-full text-base"
            >
              Comenzar partida
            </button>
            <button
              type="button"
              onClick={onViewRanking}
              className="game-btn game-btn-light w-full"
            >
              Ver ranking histórico
            </button>
          </div>

          <p className="mt-6 text-xs text-muted-foreground">
            Completa las {totalQuestions} preguntas para guardar tu puntaje en
            el ranking. También puedes practicar sin registrarte.
          </p>
        </div>
      </div>
    </div>
  )
}