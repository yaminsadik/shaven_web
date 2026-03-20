import { Section } from '@/components/layout/Section'
import { Link } from '@tanstack/react-router'
import { Beer, ArrowRight } from 'lucide-react'

export function AdultTeaser() {
  return (
    <Section dark className="!py-12 md:!py-16">
      <div className="glass-card rounded-3xl p-8 sm:p-10 md:p-12 flex flex-col md:flex-row items-center gap-6 md:gap-10 border-purple-500/10">
        <div className="shrink-0">
          <div className="w-16 h-16 rounded-2xl bg-purple-600/20 flex items-center justify-center">
            <Beer className="w-8 h-8 text-purple-400" />
          </div>
        </div>
        <div className="flex-1 text-center md:text-left">
          <div className="flex items-center justify-center md:justify-start gap-2 mb-2">
            <span className="px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider rounded-full bg-purple-600/30 text-purple-300 border border-purple-500/20">
              21+ Only
            </span>
          </div>
          <h3 className="text-xl sm:text-2xl font-bold text-white">
            Cold Beer Cave, Wine & Liquor
          </h3>
          <p className="mt-2 text-sm text-blue-200/50 max-w-md">
            Walk-in beer cave, cold singles, 30-racks, wine, liquor, and hard seltzers.
            Always stocked, always cold.
          </p>
        </div>
        <div className="shrink-0">
          <Link
            to="/21-plus"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-purple-600 hover:bg-purple-500 text-white font-semibold transition-colors"
          >
            See What's Cold
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </Section>
  )
}
