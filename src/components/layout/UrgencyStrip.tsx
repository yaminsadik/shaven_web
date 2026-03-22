import { useState } from 'react'
import { X } from 'lucide-react'

const DISMISSED_KEY = '7h-urgency-strip-dismissed'

const text =
  '⚡ 86¢ Fountain Drink — Today Only  \u00a0\u00a0·\u00a0\u00a0  🔥 Buy 2 Get 1 Hot Dogs  \u00a0\u00a0·\u00a0\u00a0  ⏰ Coffee $1 — Expires Tonight  \u00a0\u00a0·\u00a0\u00a0  💥 50% OFF Taquitos — 3 hrs left  \u00a0\u00a0·\u00a0\u00a0  🎯 ZYN 2/$13.99 — Members Only  \u00a0\u00a0·\u00a0\u00a0  🔥 Marlboro +500 Bonus Points  \u00a0\u00a0\u00a0\u00a0\u00a0\u00a0'

export function UrgencyStrip() {
  const [visible, setVisible] = useState(() => {
    if (typeof window === 'undefined') return false
    return !window.sessionStorage.getItem(DISMISSED_KEY)
  })

  if (!visible) return null

  const dismiss = () => {
    setVisible(false)
    sessionStorage.setItem(DISMISSED_KEY, '1')
  }

  return (
    <div
      className="h-8 overflow-hidden bg-gradient-to-r from-amber-900/60 to-amber-800/40 relative border-t border-amber-700/20"
      style={{ transform: 'translateZ(0)', isolation: 'isolate' }}
    >
      <div className="urgency-track h-full flex items-center whitespace-nowrap">
        <span className="urgency-item text-xs font-medium text-amber-200">{text}</span>
        <span className="urgency-item text-xs font-medium text-amber-200" aria-hidden>{text}</span>
      </div>

      <button
        onClick={dismiss}
        className="absolute right-2 top-1/2 -translate-y-1/2 p-1 text-amber-300/60 hover:text-amber-100 transition-colors"
        aria-label="Dismiss deal ticker"
      >
        <X className="w-3.5 h-3.5" />
      </button>

      <style>{`
        @keyframes urgency-scroll {
          from { transform: translate3d(0, 0, 0); }
          to   { transform: translate3d(-50%, 0, 0); }
        }
        .urgency-track {
          width: max-content;
          animation: urgency-scroll 35s linear infinite;
          will-change: transform;
          backface-visibility: hidden;
        }
      `}</style>
    </div>
  )
}
