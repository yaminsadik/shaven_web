import { useState } from 'react'
import { Section, SectionHeader } from '@/components/layout/Section'
import { AgeGateModal } from '@/components/ui/AgeGateModal'
import { CTABanner } from '@/components/ui/CTABanner'
import { useUIStore } from '@/store/uiStore'
import { adultCategories, adultPromos } from '@/data/adult'
import { MediaCard } from '@/components/ui/MediaCard'
import { motion } from 'framer-motion'
import { ShieldCheck, Calendar } from 'lucide-react'
import { useNavigate } from '@tanstack/react-router'

export function AdultPage() {
  const { ageGateAccepted } = useUIStore()
  const navigate = useNavigate()
  const [showAllCategories, setShowAllCategories] = useState(false)
  const [showAllPromos, setShowAllPromos] = useState(false)

  if (!ageGateAccepted) {
    return <AgeGateModal onDecline={() => navigate({ to: '/' })} />
  }

  return (
    <>
      <section className="relative bg-gradient-to-b from-purple-900/30 via-surface-900 to-surface-900 pt-24 pb-12 sm:pt-32 sm:pb-16 md:pt-40 md:pb-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl text-left sm:text-center sm:mx-auto">
            <div className="mb-6 flex items-center gap-2 sm:justify-center">
              <ShieldCheck className="w-6 h-6 text-purple-400" />
              <span className="px-2.5 py-0.5 text-xs font-bold uppercase tracking-wider rounded-full bg-purple-600/30 text-purple-300 border border-purple-500/20">
                21+ Section
              </span>
            </div>
            <h1 className="section-heading text-4xl text-white sm:text-5xl md:text-6xl">
              Beer, Wine & Liquor
            </h1>
            <p className="mt-4 text-base text-blue-100/75 sm:text-lg">
              Walk-in beer cave, cold singles, 30-racks, wine, and liquor. Always cold, always stocked.
            </p>
          </div>
        </div>
      </section>

      <Section variant="paper">
        <SectionHeader title="Browse by Category" subtitle="Start with the section you want, then drill into the brands and weekly savings." align="left" />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5">
          {adultCategories.map((cat, index) => (
            <div key={cat.id} className={index >= 6 && !showAllCategories ? 'hidden md:block' : ''}>
              <MediaCard
                image={cat.image}
                title={cat.title}
                description={cat.description}
                href={cat.href}
                aspectRatio="portrait"
              />
            </div>
          ))}
        </div>
        {adultCategories.length > 6 && (
          <div className="mt-5 md:hidden">
            <button
              type="button"
              onClick={() => setShowAllCategories((value) => !value)}
              className="inline-flex min-h-11 items-center justify-center rounded-full border border-slate-300 bg-white px-5 py-2.5 text-sm font-semibold text-brand-800"
            >
              {showAllCategories ? 'Show fewer categories' : `Show ${adultCategories.length - 6} more categories`}
            </button>
          </div>
        )}
      </Section>

      <Section dark>
        <SectionHeader title="This Week's Deals" subtitle="New specials every week. Check in-store for availability." align="left" />
        <div className="grid grid-cols-1 xs:grid-cols-2 xl:grid-cols-3 gap-4 md:gap-6 max-w-5xl mx-auto">
          {adultPromos.map((promo, i) => (
            <motion.div
              key={promo.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className={`glass-card rounded-2xl border-purple-500/10 p-5 transition-colors hover:border-purple-500/20 ${
                i >= 4 && !showAllPromos ? 'hidden md:block' : ''
              }`}
            >
              <span className="inline-block mb-3 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider rounded-full bg-purple-600/30 text-purple-300">
                {promo.badge}
              </span>
              <h3 className="text-lg font-bold text-white">{promo.title}</h3>
              <p className="mt-2 text-sm text-blue-200/50">{promo.description}</p>
            </motion.div>
          ))}
        </div>
        {adultPromos.length > 4 && (
          <div className="mt-5 md:hidden">
            <button
              type="button"
              onClick={() => setShowAllPromos((value) => !value)}
              className="inline-flex min-h-11 items-center justify-center rounded-full border border-purple-500/30 px-5 py-2.5 text-sm font-semibold text-white"
            >
              {showAllPromos ? 'Show fewer savings' : `Show ${adultPromos.length - 4} more savings`}
            </button>
          </div>
        )}
      </Section>

      <Section variant="paper">
        <div className="text-center max-w-2xl mx-auto">
          <div className="rounded-2xl p-6 sm:p-8 border border-slate-200 bg-white/90 shadow-sm">
            <Calendar className="w-6 h-6 text-slate-400 mx-auto mb-3" />
            <p className="text-sm text-slate-600 leading-relaxed">
              Product availability varies by location and is subject to local and state regulations.
              Must be 21 years of age or older to purchase alcohol products. Please drink responsibly.
              Don't drink and drive.
            </p>
          </div>
        </div>
      </Section>

      <Section dark>
        <CTABanner
          title="Find a Store with Your Favorites"
          subtitle="Check availability at your nearest 7th Heaven."
          buttonText="Find Store"
          buttonHref="/stores"
          variant="dark"
        />
      </Section>
    </>
  )
}
