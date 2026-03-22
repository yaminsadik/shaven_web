import { useState } from 'react'
import { X } from 'lucide-react'

const DISMISSED_KEY = '7h-urgency-strip-dismissed'

const items = [
  '⚡ 86¢ Fountain Drink — Today Only',
  '🔥 Buy 2 Get 1 Hot Dogs',
  '⏰ Coffee $1 — Expires Tonight',
  '💥 50% OFF Taquitos — 3 hrs left',
  '🎯 ZYN 2/$13.99 — Members Only',
  '🔥 Marlboro +500 Bonus Points',
]

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

  const doubled = [...items, ...items]

  return (
    <div className="h-8 overflow-hidden bg-gradient-to-r from-amber-900/60 to-amber-800/40 relative border-t border-amber-700/20">
      <div className="urgency-marquee flex items-center h-full whitespace-nowrap">
        {doubled.map((text, i) => (
          <span
            key={i}
            className="inline-block px-8 text-xs font-medium text-amber-200"
          >
            {text}
          </span>
        ))}
      </div>
      <button
        onClick={dismiss}
        className="absolute right-2 top-1/2 -translate-y-1/2 p-1 text-amber-300/60 hover:text-amber-100 transition-colors"
        aria-label="Dismiss deal ticker"
      >
        <X className="w-3.5 h-3.5" />
      </button>

      <style>{`
        @keyframes marquee-scroll {
          from { transform: translateX(0); }
          to   { transform: translateX(-50%); }
        }
        .urgency-marquee {
          animation: marquee-scroll 30s linear infinite;
        }
      `}</style>
    </div>
  )
}
