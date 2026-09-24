const inputClass = (hasError) =>
  `w-full rounded-xl border-2 px-4 py-3 text-sm text-slate-800 placeholder-slate-400 transition-colors focus:outline-none focus:ring-4 ${
    hasError
      ? 'border-destructive/40 bg-rose-50/40 focus:border-destructive focus:ring-destructive/20'
      : 'border-border bg-white hover:border-slate-300 focus:border-accent focus:ring-accent/20'
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
        <span className="text-xs font-black uppercase tracking-widest text-slate-500">
          Nombre
        </span>
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
        <p className="mt-1.5 text-xs font-bold text-destructive" role="alert">
          {errors.name}
        </p>
      )}

      <label className="mt-4 block" htmlFor="player-email">
        <span className="text-xs font-black uppercase tracking-widest text-slate-500">
          Correo
        </span>
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
        <p className="mt-1.5 text-xs font-bold text-destructive" role="alert">
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
        className="game-btn game-btn-accent mt-4 w-full"
      >
        {submitting && (
          <span
            aria-hidden="true"
            className="h-4 w-4 animate-spin rounded-full border-2 border-accent-foreground/30 border-t-accent-foreground"
          />
        )}
        {submitting ? 'Guardando…' : submitLabel}
      </button>
    </form>
  )
}