import { useState } from 'react'
import { Link } from '@tanstack/react-router'
import { Section, SectionHeader } from '@/components/layout/Section'
import { MediaCard } from '@/components/ui/MediaCard'
import { CTABanner } from '@/components/ui/CTABanner'
import { signatureFood, foodPageItems } from '@/data/food'
import { motion } from 'framer-motion'
import { ArrowRight, ChevronDown } from 'lucide-react'

export function FoodPage() {
  const [openCategory, setOpenCategory] = useState(foodPageItems[0]?.category ?? '')

  return (
    <>
      <section className="relative overflow-hidden pt-24 pb-12 sm:pt-32 sm:pb-16 md:pt-40 md:pb-20">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1626645738196-c2a7c87a8f58?w=1920&q=80"
            alt="Food"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-surface-900/80 via-surface-900/60 to-surface-900" />
        </div>
        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl text-left sm:text-center sm:mx-auto">
            <span className="inline-flex rounded-full border border-white/15 bg-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-blue-100/80">
              Fresh in store
            </span>
            <h1 className="section-heading mt-5 text-4xl text-white sm:text-5xl md:text-6xl">
              Hot Food, All Day
            </h1>
            <p className="mt-4 text-base text-blue-100/75 sm:text-lg">
              Roller grill, fried chicken, pizza, breakfast, plus quick drink runs when you need them.
            </p>
            <div className="mt-6 flex flex-wrap gap-2 sm:justify-center">
              {[
                { label: 'Coffee', href: '/category/coffee' },
                { label: 'Fountain & Slushies', href: '/category/fountain-slushies' },
                { label: 'Energy Drinks', href: '/category/energy-drinks' },
              ].map((link) => (
                <Link
                  key={link.href}
                  to={link.href}
                  className="inline-flex min-h-10 items-center rounded-full border border-white/15 bg-white/10 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-white/16"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Section variant="paper">
        <SectionHeader title="The Good Stuff" subtitle="The items people actually come in for." align="left" />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
          {signatureFood.map((item) => (
            <MediaCard
              key={item.id}
              image={item.image}
              title={item.title}
              description={item.description}
              tag={item.tag}
              href={item.href}
              aspectRatio="square"
            />
          ))}
        </div>
      </Section>

      <Section dark>
        <SectionHeader title="Full Menu & Prices" subtitle="What's hot and what it costs, without making mobile users scan a wall of text." align="left" />
        <div className="space-y-3 md:hidden">
          {foodPageItems.map((category) => {
            const isOpen = openCategory === category.category

            return (
              <div key={category.category} className="overflow-hidden rounded-2xl border border-brand-500/15 bg-brand-700/35">
                <button
                  type="button"
                  onClick={() => setOpenCategory(isOpen ? '' : category.category)}
                  className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left"
                  aria-expanded={isOpen}
                >
                  <div>
                    <h3 className="text-lg font-bold text-white">{category.category}</h3>
                    <p className="mt-1 text-xs text-blue-100/45">{category.items.length} items</p>
                  </div>
                  <ChevronDown className={`h-4 w-4 text-blue-100/55 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
                </button>
                {isOpen && (
                  <div className="space-y-3 border-t border-brand-500/15 px-5 py-4">
                    {category.items.map((item) => (
                      <div key={item.name} className="rounded-2xl bg-brand-900/35 px-4 py-3">
                        <div className="flex items-start justify-between gap-3">
                          <div className="min-w-0">
                            <p className="text-sm font-semibold text-white">{item.name}</p>
                            {item.badge && (
                              <span className="mt-2 inline-flex rounded-full gradient-accent px-2 py-0.5 text-[10px] font-bold text-white">
                                {item.badge}
                              </span>
                            )}
                          </div>
                          <span className="price-text shrink-0 text-base text-accent-400">{item.price}</span>
                        </div>
                      </div>
                    ))}
                    <Link
                      to={category.href}
                      className="inline-flex items-center gap-2 text-sm font-semibold text-accent-300"
                    >
                      View category
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                  </div>
                )}
              </div>
            )
          })}
        </div>
        <div className="hidden grid-cols-1 gap-6 md:grid md:grid-cols-2 md:gap-8">
          {foodPageItems.map((category, ci) => (
            <motion.div
              key={category.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: ci * 0.1 }}
              className="glass-card rounded-2xl p-6 sm:p-8"
            >
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-bold text-white">{category.category}</h3>
                <Link
                  to={category.href}
                  className="flex items-center gap-1 text-xs font-semibold text-accent-400 hover:text-accent-300 transition-colors"
                >
                  View All
                  <ArrowRight className="w-3 h-3" />
                </Link>
              </div>
              <div className="space-y-3">
                {category.items.map((item) => (
                  <div
                    key={item.name}
                    className="flex items-center justify-between py-2 border-b border-brand-500/10 last:border-0"
                  >
                    <div className="flex items-center gap-3">
                      <span className="text-sm text-blue-100">{item.name}</span>
                      {item.badge && (
                        <span className="px-2 py-0.5 text-[10px] font-bold rounded-full gradient-accent text-white">
                          {item.badge}
                        </span>
                      )}
                    </div>
                    <span className="price-text text-base text-accent-400">{item.price}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </Section>

      <Section variant="paper">
        <CTABanner
          title="Hungry? Find Your Store"
          subtitle="Hot food ready now at a 7th Heaven near you."
          buttonText="Find Store"
          buttonHref="/stores"
        />
      </Section>
    </>
  )
}
