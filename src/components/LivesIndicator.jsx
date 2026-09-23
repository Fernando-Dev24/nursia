export default function LivesIndicator({ lives, maxLives = 3 }) {
  const total = Math.max(1, maxLives)

  return (
    <div
      key={lives}
      className={`flex items-center gap-1 ${
        lives < total ? 'animate-shake animate-duration-fast' : ''
      }`}
      role="status"
      aria-label={`${lives} de ${total} vidas restantes`}
    >
      {Array.from({ length: total }).map((_, index) => (
        <span
          key={index}
          aria-hidden="true"
          className={`text-base leading-none transition-colors ${
            index < lives ? 'text-rose-500' : 'text-slate-300'
          }`}
        >
          ♥
        </span>
      ))}
      <span className="ml-1 text-xs font-semibold text-slate-500">
        {lives} {lives === 1 ? 'vida' : 'vidas'}
      </span>
    </div>
  )
}
