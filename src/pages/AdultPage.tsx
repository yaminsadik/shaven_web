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

  if (!ageGateAccepted) {
    return <AgeGateModal onDecline={() => navigate({ to: '/' })} />
  }

  return (
    <>
      {/* Hero: purple gradient */}
      <section className="relative pt-32 pb-16 md:pt-40 md:pb-20 bg-gradient-to-b from-purple-900/30 via-surface-900 to-surface-900">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <div className="mx-auto flex items-center justify-center gap-2 mb-6">
            <ShieldCheck className="w-6 h-6 text-purple-400" />
            <span className="px-2.5 py-0.5 text-xs font-bold uppercase tracking-wider rounded-full bg-purple-600/30 text-purple-300 border border-purple-500/20">
              21+ Section
            </span>
          </div>
          <h1 className="section-heading text-4xl sm:text-5xl md:text-6xl text-white">
            Beer, Wine & Liquor
          </h1>
          <p className="mt-4 text-lg text-blue-200/70 max-w-xl mx-auto">
            Walk-in beer cave, cold singles, 30-racks, wine, and liquor.
            Always cold, always stocked.
          </p>
        </div>
      </section>

      {/* Categories: portrait cards */}
      <Section variant="paper">
        <SectionHeader title="Browse by Category" />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5">
          {adultCategories.map((cat) => (
            <MediaCard
              key={cat.id}
              image={cat.image}
              title={cat.title}
              description={cat.description}
              href={cat.href}
              aspectRatio="portrait"
            />
          ))}
        </div>
      </Section>

      {/* Promos: glass card grid */}
      <Section dark>
        <SectionHeader title="This Week's Deals" subtitle="New specials every week. Check in-store for availability." />
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-6 max-w-4xl mx-auto">
          {adultPromos.map((promo, i) => (
            <motion.div
              key={promo.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="glass-card rounded-2xl p-6 border-purple-500/10 hover:border-purple-500/20 transition-colors"
            >
              <span className="inline-block mb-3 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider rounded-full bg-purple-600/30 text-purple-300">
                {promo.badge}
              </span>
              <h3 className="text-lg font-bold text-white">{promo.title}</h3>
              <p className="mt-2 text-sm text-blue-200/50">{promo.description}</p>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Disclaimer */}
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
