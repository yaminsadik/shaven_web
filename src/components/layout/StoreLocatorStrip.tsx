import { Link } from '@tanstack/react-router'
import { MapPin, ArrowRight } from 'lucide-react'

export function StoreLocatorStrip() {
  return (
    <div className="bg-brand-600/40">
      <Link
        to="/stores"
        className="group mx-auto max-w-7xl flex items-center justify-between px-4 sm:px-6 lg:px-8 py-5"
      >
        <div className="flex items-center gap-3">
          <MapPin className="w-5 h-5 text-white" />
          <span className="text-base font-semibold text-white">Store Locator</span>
        </div>
        <ArrowRight className="w-5 h-5 text-white group-hover:translate-x-1 transition-transform" />
      </Link>
    </div>
  )
}
