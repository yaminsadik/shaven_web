import { Link } from '@tanstack/react-router'
import { MapPin } from 'lucide-react'

export function MobileStickyCTA() {
  return (
    <div className="pointer-events-none fixed inset-x-0 bottom-0 z-40 px-4 pb-[calc(env(safe-area-inset-bottom)+1rem)] sm:hidden">
      <div className="pointer-events-auto mx-auto max-w-md rounded-3xl border border-brand-500/20 bg-brand-800/95 p-3 shadow-2xl shadow-black/40 backdrop-blur-xl">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl bg-accent-400/15 text-accent-300">
            <MapPin className="h-5 w-5" />
          </div>
          <div className="min-w-0">
            <p className="text-sm font-semibold text-white">Find your nearest store</p>
            <p className="text-xs text-blue-100/60">24/7 fuel, hot food, and rewards nearby.</p>
          </div>
          <Link
            to="/stores"
            className="ml-auto inline-flex min-h-11 shrink-0 items-center rounded-full gradient-accent px-4 py-2 text-sm font-semibold text-brand-900"
          >
            Open map
          </Link>
        </div>
      </div>
    </div>
  )
}
