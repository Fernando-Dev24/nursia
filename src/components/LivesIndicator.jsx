const TONE_STYLES = {
  hud: {
    container: 'bg-white/10 border border-white/20 rounded-xl px-3 py-2',
    heart: 'text-rose-400',
    empty: 'text-white/25',
    label: 'text-white/90',
  },
  card: {
    container: 'bg-rose-50 border border-rose-200 rounded-xl px-3 py-2',
    heart: 'text-rose-500',
    empty: 'text-rose-300',
    label: 'text-rose-700',
  },
}

export default function LivesIndicator({ lives, maxLives = 3, tone = 'card' }) {
  const total = Math.max(1, maxLives)
  const styles = TONE_STYLES[tone] ?? TONE_STYLES.card

  return (
    <div
      key={lives}
      className={`flex shrink-0 items-center gap-2 ${styles.container} ${
        lives < total ? 'animate-shake animate-duration-fast' : ''
      }`}
      role="status"
      aria-label={`${lives} de ${total} vidas restantes`}
    >
      <div className="flex items-center gap-0.5">
        {Array.from({ length: total }).map((_, index) => (
          <span
            key={index}
            aria-hidden="true"
            className={`text-base leading-none ${
              index < lives ? styles.heart : styles.empty
            }`}
          >
            ♥
          </span>
        ))}
      </div>
      <span className={`text-xs font-black uppercase tracking-wide ${styles.label}`}>
        {lives} {lives === 1 ? 'vida' : 'vidas'}
      </span>
    </div>
  )
}