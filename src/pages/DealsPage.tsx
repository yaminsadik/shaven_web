import { Section, SectionHeader } from '@/components/layout/Section'
import { PromoCard } from '@/components/ui/PromoCard'
import { CTABanner } from '@/components/ui/CTABanner'
import { promotions, seasonalSpecials } from '@/data/promotions'
import { motion } from 'framer-motion'
import { Calendar } from 'lucide-react'

export function DealsPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-16 md:pt-40 md:pb-20 gradient-brand">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="section-heading text-4xl sm:text-5xl md:text-6xl text-white">
            Deals & Promotions
          </h1>
          <p className="mt-4 text-lg text-blue-200/70 max-w-xl mx-auto">
            Combo deals, fuel discounts, and member specials. Save every time you stop in.
          </p>
        </div>
      </section>

      {/* Current Deals: 2-col grid */}
      <Section variant="paper">
        <SectionHeader title="Current Deals" subtitle="Available now at all locations." />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5">
          {promotions.map((p) => (
            <PromoCard key={p.id} {...p} ctaText="Get Deal" ctaHref="/stores" />
          ))}
        </div>
      </Section>

      {/* Seasonal */}
      <Section dark>
        <SectionHeader title="Seasonal Specials" subtitle="Limited-time stuff. Grab it while it lasts." />
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6 max-w-5xl mx-auto">
          {seasonalSpecials.map((s, i) => (
            <motion.div
              key={s.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="glass-card rounded-2xl p-6 sm:p-8"
            >
              <h3 className="section-heading text-lg sm:text-xl text-white">{s.title}</h3>
              <p className="mt-2 text-sm text-blue-200/50">{s.description}</p>
              <div className="mt-4 flex items-center gap-2 text-xs text-blue-200/30">
                <Calendar className="w-3.5 h-3.5" />
                Valid through {s.validUntil}
              </div>
            </motion.div>
          ))}
        </div>
      </Section>

      <Section variant="paper">
        <CTABanner
          title="Rewards Members Save More"
          subtitle="Sign up free and start getting member-only prices and bonus point deals."
          buttonText="Join Free"
          buttonHref="/rewards"
        />
      </Section>
    </>
  )
}
