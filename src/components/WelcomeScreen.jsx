export default function WelcomeScreen({ totalQuestions, onStart }) {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-slate-50 px-4 text-center">
      <div className="w-full max-w-xl rounded-2xl bg-white p-10 shadow-sm border border-slate-200">
        <span className="mb-4 inline-flex rounded-full bg-sky-100 px-3 py-1 text-xs font-semibold text-sky-700">
          Feria de Logros Escolar
        </span>
        <h1 className="text-3xl font-bold text-slate-800">Bienvenidos</h1>
        <p className="mt-3 text-slate-500">
          Quiz interactivo sobre atención de pacientes en emergencias médicas.
          Responde {totalQuestions} preguntas: conocimiento general y casos
          clínicos.
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