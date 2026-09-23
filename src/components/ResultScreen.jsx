import { useState } from 'react'
import PlayerForm from './PlayerForm'
import LivesIndicator from './LivesIndicator'
import {
  saveRanking,
  validateIdentity,
  normalizeEmail,
  getRankingErrorMessage,
} from '../lib/ranking'

const STATUS_STYLES = {
  success: 'border-emerald-200 bg-emerald-50 text-emerald-800',
  error: 'border-rose-200 bg-rose-50 text-rose-800',
  info: 'border-sky-200 bg-sky-50 text-sky-800',
}

export default function ResultScreen({
  score,
  totalQuestions,
  lives,
  maxLives = 3,
  player,
  onPlayerChange,
  onRestart,
  onSaved,
}) {
  const [status, setStatus] = useState('idle') // idle | saving
  const [feedback, setFeedback] = useState(null) // { type: 'success' | 'error' | 'info', message }
  const [formErrors, setFormErrors] = useState({})

  const identityKnown = Boolean(player.name.trim() && player.email.trim())
  const [showForm, setShowForm] = useState(!identityKnown)

  const handleFieldChange = (next) => {
    onPlayerChange(next)
    setFormErrors({})
    if (feedback?.type === 'error') setFeedback(null)
  }

  const handleSave = async () => {
    if (status === 'saving') return

    const errors = validateIdentity(player)
    if (Object.keys(errors).length > 0) {
      setFormErrors(errors)
      setShowForm(true)
      setFeedback({
        type: 'error',
        message: 'Completa tu nombre y correo para guardar el puntaje.',
      })
      return
    }

    setStatus('saving')
    setFeedback(null)

    try {
      const result = await saveRanking({
        name: player.name,
        email: player.email,
        score,
        totalQuestions,
        livesLeft: lives,
      })

      // Éxito: salimos al inicio con un notice de confirmación.
      onSaved?.({
        type: result.status === 'kept' ? 'info' : 'success',
        message: `${result.message} (${normalizeEmail(player.email)})`,
      })
    } catch (error) {
      // Error de Firestore / red / config: quedamos en la pantalla y
      // mostramos el mensaje para que pueda reintentar.
      setStatus('idle')
      setFeedback({
        type: 'error',
        message: getRankingErrorMessage(error),
      })
      if (error?.formErrors) {
        setFormErrors(error.formErrors)
        setShowForm(true)
      }
    }
  }

  const percentage = Math.round((score / totalQuestions) * 100)

  return (
    <div className="flex min-h-screen items-center justify-center bg-slate-50 px-4 py-8">
      <div className="w-full max-w-md">
        <div className="animate-fade-in-up rounded-2xl border border-slate-200 bg-white p-8 text-center shadow-sm">
          <span className="inline-flex rounded-full bg-emerald-100 px-3 py-1 text-xs font-semibold text-emerald-700">
            Quiz completado
          </span>
          <h1 className="mt-3 text-3xl font-bold text-slate-800">
            ¡Buen trabajo!
          </h1>

          <div className="mt-4 flex items-center justify-center gap-4">
            <p className="text-lg text-slate-500">
              <span className="animate-pop text-4xl font-bold text-slate-800">{score}</span>{' '}
              / {totalQuestions} puntos ({percentage}%)
            </p>
          </div>

          <div className="mt-3 flex items-center justify-center gap-2 text-sm text-slate-500">
            <span>Vidas restantes:</span>
            <LivesIndicator lives={lives} maxLives={maxLives} />
          </div>

          <div className="mt-6 border-t border-slate-100 pt-6 text-left">
            <div className="mb-3 flex items-center justify-between">
              <h2 className="text-sm font-semibold uppercase tracking-wide text-slate-500">
                Guardar en el ranking
              </h2>
              {identityKnown && !showForm && (
                <button
                  type="button"
                  onClick={() => setShowForm(true)}
                  className="text-xs font-semibold text-sky-600 hover:text-sky-700"
                >
                  Editar datos
                </button>
              )}
            </div>

            {identityKnown && !showForm && (
              <>
                <div className="rounded-lg border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-600">
                  <p>
                    <span className="font-semibold text-slate-800">
                      {player.name.trim()}
                    </span>
                  </p>
                  <p className="truncate">{normalizeEmail(player.email)}</p>
                </div>

                <button
                  type="button"
                  onClick={handleSave}
                  disabled={status === 'saving'}
                  className="mt-4 w-full rounded-lg bg-emerald-600 px-6 py-3 font-semibold text-white transition-colors hover:bg-emerald-700 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-60"
                >
                  {status === 'saving' ? 'Guardando...' : 'Guardar ranking y salir'}
                </button>
              </>
            )}

            {showForm && (
              <PlayerForm
                name={player.name}
                email={player.email}
                errors={formErrors}
                onChange={handleFieldChange}
                onSubmit={handleSave}
                submitLabel="Guardar ranking y salir"
                submitting={status === 'saving'}
              />
            )}

            {feedback && (
              <div
                role="alert"
                className={`mt-4 animate-fade-in-up animate-duration-fast rounded-lg border p-4 text-sm ${
                  STATUS_STYLES[feedback.type] ?? STATUS_STYLES.error
                }`}
              >
                <p className="font-semibold">
                  {feedback.type === 'success' && '¡Guardado!'}
                  {feedback.type === 'info' && 'Registro conservado'}
                  {feedback.type === 'error' && 'No se pudo guardar'}
                </p>
                <p className="mt-1">{feedback.message}</p>
              </div>
            )}

          </div>

          <div className="mt-6 border-t border-slate-100 pt-6">
            <button
              type="button"
              onClick={onRestart}
              className="w-full rounded-lg bg-slate-800 px-6 py-3 font-semibold text-white transition-colors hover:bg-slate-900 focus:outline-none focus:ring-2 focus:ring-slate-500 focus:ring-offset-2"
            >
              Repetir quiz
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
