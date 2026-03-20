import { Link } from '@tanstack/react-router'
import { MapPin, ArrowRight } from 'lucide-react'

export function StoreLocatorStrip() {
  return (
    <div className="bg-brand-600/50 border-t border-brand-500/20">
      <Link
        to="/stores"
        className="group mx-auto max-w-7xl flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 px-4 sm:px-6 lg:px-8 py-5"
      >
        <div className="flex items-center gap-3">
          <MapPin className="w-5 h-5 text-accent-300 shrink-0" />
          <div>
            <span className="block text-base font-semibold text-white">Store locator</span>
            <span className="text-sm text-blue-100/60">Gas, hot food, rewards. Find hours and directions.</span>
          </div>
        </div>
        <span className="inline-flex items-center gap-2 text-sm font-semibold text-accent-300 sm:text-white group-hover:text-accent-300 transition-colors">
          Open map
          <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
        </span>
      </Link>
    </div>
  )
}
