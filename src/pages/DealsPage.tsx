import { useState } from 'react'
import { Link } from '@tanstack/react-router'
import { Section, SectionHeader } from '@/components/layout/Section'
import { PromoCard } from '@/components/ui/PromoCard'
import { CTABanner } from '@/components/ui/CTABanner'
import { promotions, seasonalSpecials } from '@/data/promotions'
import { motion } from 'framer-motion'
import { Calendar, ArrowRight } from 'lucide-react'

const dealTypeLinks = [
  { label: '🔥 Flash Deals', href: '/category/flash-deals' },
  { label: '⭐ Featured', href: '/category/featured-deals' },
  { label: '🤝 Combos', href: '/category/combo-deals' },
  { label: '💰 Everyday Value', href: '/category/everyday-value' },
  { label: '🎟️ Coupons', href: '/category/coupons' },
  { label: '📅 Limited Time', href: '/category/limited-time' },
]

const dealCategoryLinks = [
  { label: '🍕 Hot Food', href: '/category/hot-food-deals' },
  { label: '☕ Drinks', href: '/category/drinks-deals' },
  { label: '🍿 Snacks', href: '/category/snacks-deals' },
  { label: '🥐 Bakery', href: '/category/bakery-deals' },
  { label: '⛽ Fuel', href: '/category/fuel-savings' },
]

export function DealsPage() {
  const [showAllPromos, setShowAllPromos] = useState(false)
  const [showAllSeasonal, setShowAllSeasonal] = useState(false)

  return (
    <>
      <section className="relative gradient-brand pt-24 pb-12 sm:pt-32 sm:pb-16 md:pt-40 md:pb-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl text-left sm:text-center sm:mx-auto">
            <span className="inline-flex rounded-full border border-white/15 bg-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-blue-100/80">
              Save every stop
            </span>
            <h1 className="section-heading mt-5 text-4xl text-white sm:text-5xl md:text-6xl">
              Deals & Promotions
            </h1>
            <p className="mt-4 text-base text-blue-100/75 sm:text-lg">
              Combo deals, fuel discounts, drink specials, and member-only offers without making mobile users hunt for them.
            </p>
          </div>
        </div>
      </section>

      <Section>
        <SectionHeader title="Browse Deals" subtitle="Jump straight to the kind of savings you want." align="left" />
        <div className="flex gap-3 overflow-x-auto pb-2 scrollbar-none md:grid md:grid-cols-3 lg:grid-cols-6 md:overflow-visible md:pb-0">
          {dealTypeLinks.map((d) => (
            <Link
              key={d.href}
              to={d.href}
              className="glass-card min-h-11 min-w-max rounded-full px-4 py-3 text-center transition-colors group hover:border-accent-400/20 md:min-w-0 md:rounded-xl md:p-4"
            >
              <span className="text-sm font-bold text-white group-hover:text-accent-300 transition-colors">{d.label}</span>
            </Link>
          ))}
        </div>
      </Section>

      <Section variant="paper">
        <SectionHeader title="Current Deals" subtitle="Available now at all locations." align="left" />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5">
          {promotions.map((p, index) => (
            <div key={p.id} className={index >= 2 && !showAllPromos ? 'hidden md:block' : ''}>
              <PromoCard {...p} />
            </div>
          ))}
        </div>
        {promotions.length > 2 && (
          <div className="mt-5 md:hidden">
            <button
              type="button"
              onClick={() => setShowAllPromos((value) => !value)}
              className="inline-flex min-h-11 items-center justify-center rounded-full border border-slate-300 bg-white px-5 py-2.5 text-sm font-semibold text-brand-800"
            >
              {showAllPromos ? 'Show fewer current deals' : `Show ${promotions.length - 2} more current deals`}
            </button>
          </div>
        )}
      </Section>

      <Section>
        <SectionHeader title="Deals by Category" subtitle="Save on what you buy most." align="left" />
        <div className="flex gap-3 overflow-x-auto pb-2 scrollbar-none md:grid md:grid-cols-3 lg:grid-cols-5 md:overflow-visible md:pb-0">
          {dealCategoryLinks.map((d) => (
            <Link
              key={d.href}
              to={d.href}
              className="glass-card min-w-[11rem] rounded-2xl p-5 text-center transition-colors group hover:border-accent-400/20 md:min-w-0 md:rounded-xl"
            >
              <span className="block text-lg mb-1">{d.label.split(' ')[0]}</span>
              <span className="text-sm font-bold text-white group-hover:text-accent-300 transition-colors">{d.label.split(' ').slice(1).join(' ')}</span>
              <ArrowRight className="w-4 h-4 text-blue-200/30 mx-auto mt-2 group-hover:text-accent-400 transition-colors" />
            </Link>
          ))}
        </div>
      </Section>

      <Section dark>
        <SectionHeader title="Seasonal Specials" subtitle="Limited-time stuff. Grab it while it lasts." align="left" />
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6 max-w-5xl mx-auto">
          {seasonalSpecials.map((s, i) => (
            <Link key={s.id} to={s.href} className={i >= 2 && !showAllSeasonal ? 'hidden md:block' : ''}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="glass-card rounded-2xl p-6 sm:p-8 hover:border-accent-400/20 transition-colors group"
              >
                <h3 className="section-heading text-lg sm:text-xl text-white group-hover:text-accent-300 transition-colors">{s.title}</h3>
                <p className="mt-2 text-sm text-blue-200/50">{s.description}</p>
                <div className="mt-4 flex items-center gap-2 text-xs text-blue-200/30">
                  <Calendar className="w-3.5 h-3.5" />
                  Valid through {s.validUntil}
                </div>
              </motion.div>
            </Link>
          ))}
        </div>
        {seasonalSpecials.length > 2 && (
          <div className="mt-5 md:hidden">
            <button
              type="button"
              onClick={() => setShowAllSeasonal((value) => !value)}
              className="inline-flex min-h-11 items-center justify-center rounded-full border border-brand-400/30 px-5 py-2.5 text-sm font-semibold text-white"
            >
              {showAllSeasonal ? 'Show fewer seasonal deals' : `Show ${seasonalSpecials.length - 2} more seasonal deals`}
            </button>
          </div>
        )}
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
