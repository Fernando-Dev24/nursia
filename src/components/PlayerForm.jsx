const inputClass = (hasError) =>
  `w-full rounded-lg border px-4 py-3 text-sm text-slate-800 placeholder-slate-400 transition-colors focus:outline-none focus:ring-2 ${
    hasError
      ? 'border-rose-400 bg-rose-50/50 focus:border-rose-500 focus:ring-rose-300'
      : 'border-slate-200 bg-white hover:border-slate-300 focus:border-emerald-500 focus:ring-emerald-300'
  }`

export default function PlayerForm({
  name,
  email,
  errors = {},
  onChange,
  onSubmit,
  submitLabel = 'Guardar ranking y salir',
  submitting = false,
}) {
  const handleChange = (field) => (event) => {
    onChange({ name, email, [field]: event.target.value })
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    if (submitting) return
    onSubmit()
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="text-left">
      <label className="block" htmlFor="player-name">
        <span className="text-sm font-semibold text-slate-700">Nombre</span>
        <input
          id="player-name"
          type="text"
          autoComplete="name"
          value={name}
          onChange={handleChange('name')}
          placeholder="Ej. Ana López"
          disabled={submitting}
          aria-invalid={Boolean(errors.name)}
          className={`mt-1.5 ${inputClass(Boolean(errors.name))}`}
        />
      </label>
      {errors.name && (
        <p className="mt-1.5 text-xs font-medium text-rose-600" role="alert">
          {errors.name}
        </p>
      )}

      <label className="mt-4 block" htmlFor="player-email">
        <span className="text-sm font-semibold text-slate-700">Correo</span>
        <input
          id="player-email"
          type="email"
          autoComplete="email"
          value={email}
          onChange={handleChange('email')}
          placeholder="Ej. ana@correo.com"
          disabled={submitting}
          aria-invalid={Boolean(errors.email)}
          className={`mt-1.5 ${inputClass(Boolean(errors.email))}`}
        />
      </label>
      {errors.email && (
        <p className="mt-1.5 text-xs font-medium text-rose-600" role="alert">
          {errors.email}
        </p>
      )}

      <p className="mt-3 text-xs text-slate-400">
        Usamos tu correo como identificador único del ranking: si repites el
        quiz con el mismo correo, se conservará tu mejor puntaje.
      </p>

      <button
        type="submit"
        disabled={submitting}
        className="mt-4 flex w-full items-center justify-center gap-2 rounded-lg bg-emerald-600 px-6 py-3 font-semibold text-white transition-colors hover:bg-emerald-700 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-60"
      >
        {submitting && (
          <span
            aria-hidden="true"
            className="h-4 w-4 animate-spin rounded-full border-2 border-white/40 border-t-white"
          />
        )}
        {submitting ? 'Guardando…' : submitLabel}
      </button>
    </form>
  )
}
