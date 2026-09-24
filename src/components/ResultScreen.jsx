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
  success: 'border-success/40 bg-success/10 text-slate-900',
  error: 'border-destructive/30 bg-destructive/5 text-destructive',
  info: 'border-accent/40 bg-accent/10 text-slate-900',
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

      onSaved?.({
        type: result.status === 'kept' ? 'info' : 'success',
        message: `${result.message} (${normalizeEmail(player.email)})`,
      })
    } catch (error) {
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
    <div className="game-shell">
      <div className="w-full max-w-md">
        <div className="game-card animate-fade-in-up p-8 text-center">
          <div className="overflow-hidden rounded-2xl bg-gradient-to-br from-primary via-secondary to-primary p-6 text-white shadow-inner">
            <span className="game-pill mb-3 bg-accent text-accent-foreground">
              Quiz completado
            </span>
            <h1 className="text-3xl font-black uppercase tracking-tight">
              ¡Buen trabajo!
            </h1>

            <div className="mt-4 flex items-end justify-center gap-1.5">
              <span className="animate-pop text-6xl font-black leading-none text-accent">
                {score}
              </span>
              <span className="pb-1 text-lg font-bold text-white/70">
                /{totalQuestions}
              </span>
            </div>
            <p className="mt-2 text-sm font-semibold uppercase tracking-widest text-white/70">
              {percentage}% de aciertos
            </p>
          </div>

          <div className="mt-4 flex items-center justify-center gap-2 text-sm font-semibold text-slate-500">
            <span>Vidas restantes:</span>
            <LivesIndicator lives={lives} maxLives={maxLives} />
          </div>

          <div className="mt-4 border-t-2 border-border pt-6 text-left">
            <div className="mb-3 flex items-center justify-between">
              <h2 className="text-xs font-black uppercase tracking-widest text-slate-500">
                Guardar en el ranking
              </h2>
              {identityKnown && !showForm && (
                <button
                  type="button"
                  onClick={() => setShowForm(true)}
                  className="game-btn game-btn-light px-3 py-1.5 text-xs"
                >
                  Editar datos
                </button>
              )}
            </div>

            {identityKnown && !showForm && (
              <>
                <div className="rounded-xl border-2 border-border bg-slate-50 px-4 py-3 text-sm text-slate-600">
                  <p>
                    <span className="font-bold text-slate-900">
                      {player.name.trim()}
                    </span>
                  </p>
                  <p className="truncate">{normalizeEmail(player.email)}</p>
                </div>

                <button
                  type="button"
                  onClick={handleSave}
                  disabled={status === 'saving'}
                  className="game-btn game-btn-accent mt-4 w-full"
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
                className={`mt-4 animate-fade-in-up animate-duration-fast rounded-xl border-2 p-4 text-sm ${
                  STATUS_STYLES[feedback.type] ?? STATUS_STYLES.error
                }`}
              >
                <p className="font-black uppercase tracking-wide">
                  {feedback.type === 'success' && '¡Guardado!'}
                  {feedback.type === 'info' && 'Registro conservado'}
                  {feedback.type === 'error' && 'No se pudo guardar'}
                </p>
                <p className="mt-1">{feedback.message}</p>
              </div>
            )}
          </div>

          <div className="mt-4 border-t-2 border-border pt-6">
            <button
              type="button"
              onClick={onRestart}
              className="game-btn game-btn-primary w-full"
            >
              Repetir quiz
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}