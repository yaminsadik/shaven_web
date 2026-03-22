import { Link, useParams } from '@tanstack/react-router'
import { Section, SectionHeader } from '@/components/layout/Section'
import { PromoCard } from '@/components/ui/PromoCard'
import { CTABanner } from '@/components/ui/CTABanner'
import { categoryPages } from '@/data/categoryPages'
import { motion } from 'framer-motion'
import { ArrowLeft, ShieldCheck, Tag } from 'lucide-react'

export function CategoryDetailPage() {
  const { slug } = useParams({ strict: false }) as { slug: string }
  const page = categoryPages[slug]

  if (!page) {
    return (
      <section className="pt-40 pb-20 text-center">
        <div className="mx-auto max-w-7xl px-4">
          <h1 className="text-4xl font-bold text-white mb-4">Page Not Found</h1>
          <p className="text-blue-200/50 mb-8">We couldn't find a category matching "{slug}".</p>
          <Link to="/" className="inline-flex items-center gap-2 px-6 py-3 rounded-full gradient-accent text-brand-900 font-semibold">
            Go Home
          </Link>
        </div>
      </section>
    )
  }

  const is21Plus = page.section === '21-plus'

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden pt-24 pb-12 sm:pt-32 sm:pb-16 md:pt-40 md:pb-20">
        <div className="absolute inset-0">
          <img
            src={page.heroImage}
            alt={page.title}
            className="w-full h-full object-cover"
          />
          <div className={`absolute inset-0 bg-gradient-to-b ${page.gradient} opacity-80`} />
          <div className="absolute inset-0 bg-gradient-to-t from-surface-900 via-transparent to-transparent" />
        </div>
        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Link
            to={page.backLink.href}
            className="mb-6 inline-flex items-center gap-1.5 text-sm text-white/60 transition-colors hover:text-white"
          >
            <ArrowLeft className="w-4 h-4" />
            {page.backLink.label}
          </Link>

          {is21Plus && (
            <div className="flex items-center gap-2 mb-4">
              <ShieldCheck className="w-5 h-5 text-purple-400" />
              <span className="px-2.5 py-0.5 text-xs font-bold uppercase tracking-wider rounded-full bg-purple-600/30 text-purple-300 border border-purple-500/20">
                21+ Section
              </span>
            </div>
          )}

          <h1 className="section-heading text-4xl sm:text-5xl md:text-6xl text-white">
            {page.title}
          </h1>
          <p className="mt-4 text-lg text-white/70 max-w-xl">
            {page.subtitle}
          </p>
        </div>
      </section>

      {/* Promo banners */}
      {page.promos.length > 0 && (
        <Section dark>
          <div className={`grid gap-4 md:gap-5 ${page.promos.length > 1 ? 'grid-cols-1 md:grid-cols-2' : 'grid-cols-1 max-w-2xl mx-auto'}`}>
            {page.promos.map((promo) => (
              <PromoCard
                key={promo.title}
                title={promo.title}
                description={promo.description}
                badge={promo.badge}
                color={promo.color}
                ctaText="View Deal"
                ctaHref="/deals"
              />
            ))}
          </div>
        </Section>
      )}

      {/* Products grid */}
      <Section>
        <SectionHeader
          title={page.section === 'deals' ? 'Current Deals' : page.section === 'rewards' ? 'How It Works' : 'What We Carry'}
          subtitle={page.section === 'deals' ? 'Available now at all locations.' : page.section === 'rewards' ? 'Simple, rewarding, free.' : 'Available in-store. Prices may vary by location.'}
          align="left"
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5">
          {page.products.map((product, i) => (
            <motion.div
              key={product.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="group relative overflow-hidden rounded-2xl bg-surface-900 border border-brand-500/10 hover:border-accent-400/20 transition-colors"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-surface-900 via-surface-900/20 to-transparent" />
              </div>
              {product.badge && (
                <span className="absolute top-3 left-3 px-2.5 py-0.5 text-xs font-bold rounded-full bg-accent-400/90 text-brand-900">
                  {product.badge}
                </span>
              )}
              <div className="p-4">
                <div className="flex items-start justify-between gap-2">
                  <h3 className="text-base font-bold text-white">{product.name}</h3>
                  {product.price && (
                    <span className="shrink-0 text-sm font-semibold text-accent-400">{product.price}</span>
                  )}
                </div>
                <p className="mt-1.5 text-xs text-blue-200/50 line-clamp-2">{product.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Placeholder: More coming soon */}
      <Section dark>
        <div className="text-center max-w-2xl mx-auto">
          <div className="glass-card rounded-2xl p-6 sm:p-10">
            <Tag className="w-8 h-8 text-accent-400 mx-auto mb-4" />
            <h3 className="text-xl font-bold text-white mb-2">More Products Coming Soon</h3>
            <p className="text-sm text-blue-200/50 leading-relaxed">
              We're adding more items, prices, and real-time availability to this page.
              Check back soon or visit your nearest store for the full selection.
            </p>
            <div className="mt-6 inline-flex items-center gap-3 px-5 py-2.5 rounded-full bg-brand-700/50 border border-brand-500/20 text-blue-200/60">
              <div className="w-2 h-2 rounded-full bg-accent-400 animate-pulse" />
              <span className="text-xs font-medium">Placeholder — Full Catalog In Development</span>
            </div>
          </div>
        </div>
      </Section>

      {/* CTA */}
      <Section>
        <CTABanner
          title={is21Plus ? 'Find a Store with Your Favorites' : 'Stop In Today'}
          subtitle={is21Plus ? 'Check availability and prices at your nearest 7th Heaven.' : 'Hot food, cold drinks, and great deals — find a store near you.'}
          buttonText="Find Store"
          buttonHref="/stores"
        />
      </Section>
    </>
  )
}
