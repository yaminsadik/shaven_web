import { useState } from 'react'
import { Link } from '@tanstack/react-router'
import { Section, SectionHeader } from '@/components/layout/Section'
import { CategoryCard } from '@/components/ui/CategoryCard'
import { homeCategories } from '@/data/categories'
import { ArrowRight } from 'lucide-react'

export function CategoryStrip() {
  const [showAllMobile, setShowAllMobile] = useState(false)

  return (
    <Section variant="paper">
      <SectionHeader
        title="Everything Under One Roof"
        subtitle="Hot food, drinks, fuel, and rewards without adding another stop."
        align="left"
        action={
          <Link
            to="/deals"
            className="hidden items-center gap-2 text-sm font-semibold text-brand-700 transition-colors hover:text-brand-900 sm:inline-flex"
          >
            Browse deals
            <ArrowRight className="h-4 w-4" />
          </Link>
        }
      />
      <div className="grid grid-cols-2 gap-3 sm:gap-4 md:grid-cols-3 lg:grid-cols-6">
        {homeCategories.map((cat, index) => (
          <div
            key={cat.id}
            className={index >= 6 && !showAllMobile ? 'hidden md:block' : ''}
          >
            <CategoryCard {...cat} />
          </div>
        ))}
      </div>
      <div className="mt-5 flex flex-wrap items-center gap-3 sm:hidden">
        {homeCategories.length > 6 && (
          <button
            type="button"
            onClick={() => setShowAllMobile((value) => !value)}
            className="inline-flex min-h-11 items-center justify-center rounded-full border border-slate-300 bg-white px-5 py-2.5 text-sm font-semibold text-brand-800 transition-colors hover:border-brand-400"
          >
            {showAllMobile ? 'Show fewer categories' : `Show ${homeCategories.length - 6} more categories`}
          </button>
        )}
        <Link
          to="/deals"
          className="inline-flex min-h-11 items-center gap-2 rounded-full px-1 text-sm font-semibold text-brand-800"
        >
          Browse deals
          <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    </Section>
  )
}
