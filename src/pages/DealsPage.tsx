import { Link } from '@tanstack/react-router'
import { Section, SectionHeader } from '@/components/layout/Section'
import { PromoCard } from '@/components/ui/PromoCard'
import { CTABanner } from '@/components/ui/CTABanner'
import { promotions, seasonalSpecials } from '@/data/promotions'
import { motion } from 'framer-motion'
import { Calendar, ArrowRight } from 'lucide-react'

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

      {/* Deal type quick links */}
      <Section>
        <SectionHeader title="Browse Deals" subtitle="Find exactly what you're looking for." />
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 md:gap-4">
          {[
            { label: '🔥 Flash Deals', href: '/category/flash-deals' },
            { label: '⭐ Featured', href: '/category/featured-deals' },
            { label: '🤝 Combos', href: '/category/combo-deals' },
            { label: '💰 Everyday Value', href: '/category/everyday-value' },
            { label: '🎟️ Coupons', href: '/category/coupons' },
            { label: '📅 Limited Time', href: '/category/limited-time' },
          ].map((d) => (
            <Link
              key={d.href}
              to={d.href}
              className="glass-card rounded-xl p-4 text-center hover:border-accent-400/20 transition-colors group"
            >
              <span className="text-sm font-bold text-white group-hover:text-accent-300 transition-colors">{d.label}</span>
            </Link>
          ))}
        </div>
      </Section>

      {/* Current Deals: 2-col grid */}
      <Section variant="paper">
        <SectionHeader title="Current Deals" subtitle="Available now at all locations." />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5">
          {promotions.map((p) => (
            <PromoCard key={p.id} {...p} />
          ))}
        </div>
      </Section>

      {/* Category deals */}
      <Section>
        <SectionHeader title="Deals by Category" subtitle="Save on what you buy most." />
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 md:gap-4">
          {[
            { label: '🍕 Hot Food', href: '/category/hot-food-deals' },
            { label: '☕ Drinks', href: '/category/drinks-deals' },
            { label: '🍿 Snacks', href: '/category/snacks-deals' },
            { label: '🥐 Bakery', href: '/category/bakery-deals' },
            { label: '⛽ Fuel', href: '/category/fuel-savings' },
          ].map((d) => (
            <Link
              key={d.href}
              to={d.href}
              className="glass-card rounded-xl p-5 text-center hover:border-accent-400/20 transition-colors group"
            >
              <span className="block text-lg mb-1">{d.label.split(' ')[0]}</span>
              <span className="text-sm font-bold text-white group-hover:text-accent-300 transition-colors">{d.label.split(' ').slice(1).join(' ')}</span>
              <ArrowRight className="w-4 h-4 text-blue-200/30 mx-auto mt-2 group-hover:text-accent-400 transition-colors" />
            </Link>
          ))}
        </div>
      </Section>

      {/* Seasonal */}
      <Section dark>
        <SectionHeader title="Seasonal Specials" subtitle="Limited-time stuff. Grab it while it lasts." />
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6 max-w-5xl mx-auto">
          {seasonalSpecials.map((s, i) => (
            <Link key={s.id} to={s.href}>
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
