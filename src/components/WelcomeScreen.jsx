const NOTICE_STYLES = {
  success: 'border-emerald-200 bg-emerald-50 text-emerald-800',
  info: 'border-sky-200 bg-sky-50 text-sky-800',
}

export default function WelcomeScreen({ totalQuestions, maxLives, notice, onStart }) {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-slate-50 px-4 text-center">
      <div className="w-full max-w-xl animate-fade-in-up rounded-2xl bg-white p-10 shadow-sm border border-slate-200">
        {notice && (
          <div
            className={`mb-6 animate-fade-in-down rounded-lg border p-4 text-sm ${
              NOTICE_STYLES[notice.type] ?? NOTICE_STYLES.info
            }`}
            role="status"
          >
            {notice.message}
          </div>
        )}

        <span className="mb-4 inline-flex rounded-full bg-sky-100 px-3 py-1 text-xs font-semibold text-sky-700">
          Feria de Logros Escolar
        </span>
        <h1 className="text-3xl font-bold text-slate-800">Bienvenidos</h1>
        <p className="mt-3 text-slate-500">
          Quiz interactivo sobre atención de pacientes en emergencias médicas.
          Responde {totalQuestions} preguntas: conocimiento general y casos
          clínicos.
        </p>

        <div className="mt-6 flex items-center justify-center gap-2 rounded-lg border border-rose-100 bg-rose-50 px-4 py-3 text-sm font-medium text-rose-700">
          <span aria-hidden="true">♥ ♥ ♥</span>
          <span>
            Tienes {maxLives} vidas: cada respuesta incorrecta descuenta una
          </span>
        </div>

        <p className="mt-4 text-xs text-slate-400">
          Completa las {totalQuestions} preguntas para guardar tu puntaje en el
          ranking. También puedes practicar sin registrarte.
        </p>

        <button
          type="button"
          onClick={onStart}
          className="mt-8 w-full rounded-lg bg-emerald-600 px-6 py-3 font-semibold text-white transition-colors hover:bg-emerald-700 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2"
        >
          Comenzar
        </button>
      </div>
    </div>
  )
}
