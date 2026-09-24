import { useEffect, useState } from 'react'
import { getRankings, getRankingErrorMessage } from '../lib/ranking'

const STATUS_STYLES = {
  error: 'border-destructive/30 bg-destructive/5 text-destructive',
}

const MEDAL_STYLES = {
  1: 'bg-warning text-white',
  2: 'bg-slate-300 text-slate-800',
  3: 'bg-orange-300 text-white',
}

function formatTimestamp(millis) {
  if (!millis) return '—'
  return new Date(millis).toLocaleString('es-MX', {
    dateStyle: 'short',
    timeStyle: 'short',
  })
}

export default function RankingScreen({ onBack }) {
  const [email, setEmail] = useState('')
  const [data, setData] = useState(null)
  const [status, setStatus] = useState('loading') // loading | ready | error
  const [error, setError] = useState(null)
  const [searching, setSearching] = useState(false)

  const loadRankings = async (targetEmail) => {
    setStatus('loading')
    setError(null)
    try {
      const result = await getRankings({ email: targetEmail })
      setData(result)
      setStatus('ready')
      return result
    } catch (err) {
      setError(getRankingErrorMessage(err))
      setStatus('error')
      return null
    }
  }

  useEffect(() => {
    loadRankings()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const handleSearch = async (event) => {
    event.preventDefault()
    if (searching) return
    setSearching(true)
    await loadRankings(email)
    setSearching(false)
  }

  const rows = data?.top ?? []
  const player = data?.player ?? null

  return (
    <div className="game-shell">
      <div className="w-full max-w-3xl">
        <div className="game-card animate-fade-in-up p-5 sm:p-8">
          <div className="flex flex-wrap items-start justify-between gap-4">
            <div className="flex items-start gap-4">
              <img
                src="/logo.png"
                alt="Logo Feria de Logros Escolar"
                className="h-12 w-auto shrink-0 object-contain"
              />
              <div>
                <span className="game-pill mb-2 bg-accent text-accent-foreground">
                  Ranking histórico
                </span>
                <h1 className="text-2xl font-black uppercase tracking-tight text-primary sm:text-3xl">
                  Top 50 jugadores
                </h1>
                <p className="mt-1 text-xs text-muted-foreground sm:text-sm">
                  Los mejores puntajes de todos los tiempos. Los empates se
                  resuelven por orden de registro.
                </p>
              </div>
            </div>
            <button
              type="button"
              onClick={onBack}
              className="game-btn game-btn-light px-4 py-2 text-xs"
            >
              Volver al inicio
            </button>
          </div>

          <form
            onSubmit={handleSearch}
            noValidate
            className="mt-6 flex flex-col gap-3 sm:flex-row"
          >
            <label className="flex-1" htmlFor="ranking-email">
              <span className="sr-only">Correo del jugador</span>
              <input
                id="ranking-email"
                type="email"
                autoComplete="email"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                placeholder="Consulta tu puesto: ana@correo.com"
                disabled={searching}
                className="w-full rounded-xl border-2 border-border bg-white px-4 py-3 text-sm text-slate-800 placeholder-slate-400 transition-colors hover:border-slate-300 focus:border-accent focus:outline-none focus:ring-4 focus:ring-accent/20"
              />
            </label>
            <button
              type="submit"
              disabled={searching || status === 'loading'}
              className="game-btn game-btn-accent"
            >
              {searching ? 'Buscando…' : 'Ver mi puesto'}
            </button>
          </form>

          {error && (
            <div
              role="alert"
              className={`mt-4 animate-fade-in-up rounded-xl border-2 p-4 text-sm ${
                STATUS_STYLES.error
              }`}
            >
              <p className="font-black uppercase tracking-wide">
                No se pudo cargar el ranking
              </p>
              <p className="mt-1">{error}</p>
              <button
                type="button"
                onClick={() => loadRankings(email)}
                className="mt-3 font-bold text-destructive underline underline-offset-2 hover:text-destructive"
              >
                Reintentar
              </button>
            </div>
          )}

          {status === 'loading' && (
            <div
              className="mt-8 flex flex-col items-center gap-3 py-10 text-slate-400"
              role="status"
            >
              <span
                aria-hidden="true"
                className="h-8 w-8 animate-spin rounded-full border-4 border-slate-200 border-t-accent"
              />
              <p className="text-sm">Cargando ranking…</p>
            </div>
          )}

          {status === 'ready' && data && (
            <>
              <div className="mt-4 text-xs font-bold uppercase tracking-widest text-slate-400">
                {data.total} {data.total === 1 ? 'jugador' : 'jugadores'} ·{' '}
                mostrando los mejores {rows.length}
              </div>

              <div className="mt-3 overflow-hidden rounded-2xl border-2 border-border">
                {rows.length === 0 && (
                  <p className="px-4 py-8 text-center text-sm text-slate-400">
                    Aún no hay jugadores en el ranking.
                  </p>
                )}
                {rows.map((row) => {
                  const isPlayer = player && row.email === player.email
                  return (
                    <div
                      key={row.email}
                      className={`flex items-center gap-3 border-t border-slate-100 px-4 py-3 transition-colors first:border-t-0 ${
                        isPlayer ? 'bg-accent/10' : row.position % 2 === 0 ? 'bg-white' : 'bg-slate-50/60'
                      }`}
                    >
                      <span
                        className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-xl text-sm font-black ${
                          MEDAL_STYLES[row.position] ??
                          'bg-slate-100 text-slate-500'
                        }`}
                      >
                        {row.position}
                      </span>
                      <div className="min-w-0 flex-1">
                        <p className="flex flex-wrap items-center gap-2 font-bold text-slate-800">
                          {row.name || '—'}
                          {isPlayer && (
                            <span className="game-pill bg-accent text-accent-foreground">
                              Tú
                            </span>
                          )}
                        </p>
                        <p className="truncate text-xs text-slate-400">
                          {row.email}
                        </p>
                      </div>
                      <div className="shrink-0 text-right">
                        <p className="text-lg font-black leading-tight text-primary">
                          {row.score}
                        </p>
                        <p className="text-[10px] font-semibold uppercase text-slate-400">
                          {formatTimestamp(row.createdAt)}
                        </p>
                      </div>
                    </div>
                  )
                })}
              </div>

              <div className="mt-6 border-t-2 border-border pt-5">
                <h2 className="text-xs font-black uppercase tracking-widest text-slate-500">
                  Tu posición
                </h2>

                {!data.email ? (
                  <p className="mt-2 text-sm text-slate-400">
                    Ingresa tu correo arriba y presiona «Ver mi puesto» para ver
                    en qué lugar quedaste.
                  </p>
                ) : !player ? (
                  <div className="mt-3 rounded-xl border-2 border-destructive/30 bg-destructive/5 px-4 py-4 text-sm text-slate-600">
                    <p className="font-bold text-slate-900">{data.email}</p>
                    <p className="mt-1">
                      Este correo no tiene un puntaje registrado en el ranking.
                    </p>
                  </div>
                ) : (
                  <div className="mt-3 flex flex-col gap-3 rounded-2xl border-2 border-accent/40 bg-accent/10 p-4 sm:flex-row sm:items-center sm:justify-between">
                    <div className="min-w-0">
                      <p className="font-bold text-slate-900">{player.name}</p>
                      <p className="truncate text-xs text-slate-500">
                        {player.email}
                      </p>
                      <p className="mt-1 text-sm text-slate-700">
                        Puesto{' '}
                        <span className="text-xl font-black text-accent-foreground">
                          #{player.position}
                        </span>{' '}
                        de {data.total}{' '}
                        {data.total === 1 ? 'jugador' : 'jugadores'} ·{' '}
                        <span className="font-black">
                          {player.score} puntos
                        </span>
                        {player.position > 50 && ' (fuera del top 50)'}
                      </p>
                      <p className="mt-1 text-xs text-slate-400">
                        Registrado: {formatTimestamp(player.createdAt)}
                      </p>
                    </div>
                    <span
                      className={`shrink-0 self-start rounded-2xl px-5 py-3 text-3xl font-black sm:self-auto ${
                        player.position <= 3
                          ? MEDAL_STYLES[player.position]
                          : 'bg-primary text-white'
                      }`}
                    >
                      #{player.position}
                    </span>
                  </div>
                )}
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  )
}