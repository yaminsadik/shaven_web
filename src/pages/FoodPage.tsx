import { Section, SectionHeader } from '@/components/layout/Section'
import { MediaCard } from '@/components/ui/MediaCard'
import { CTABanner } from '@/components/ui/CTABanner'
import { signatureFood, foodPageItems } from '@/data/food'
import { motion } from 'framer-motion'

export function FoodPage() {
  return (
    <>
      {/* Hero: full-bleed image with overlay */}
      <section className="relative pt-32 pb-16 md:pt-40 md:pb-20 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1626645738196-c2a7c87a8f58?w=1920&q=80"
            alt="Food"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-surface-900/80 via-surface-900/60 to-surface-900" />
        </div>
        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="section-heading text-4xl sm:text-5xl md:text-6xl text-white">
            Hot Food, All Day
          </h1>
          <p className="mt-4 text-lg text-blue-200/70 max-w-xl mx-auto">
            Roller grill, fried chicken, pizza, breakfast, made fresh in store. Not your average gas station food.
          </p>
        </div>
      </section>

      {/* Signature food: grid */}
      <Section variant="paper">
        <SectionHeader title="The Good Stuff" subtitle="The items people actually come in for." />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
          {signatureFood.map((item) => (
            <MediaCard
              key={item.id}
              image={item.image}
              title={item.title}
              description={item.description}
              tag={item.tag}
              aspectRatio="square"
            />
          ))}
        </div>
      </Section>

      {/* Menu categories: glass card grid */}
      <Section dark>
        <SectionHeader title="Full Menu & Prices" subtitle="What's hot and what it costs. Simple." />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {foodPageItems.map((category, ci) => (
            <motion.div
              key={category.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: ci * 0.1 }}
              className="glass-card rounded-2xl p-6 sm:p-8"
            >
              <h3 className="text-xl font-bold text-white mb-4">{category.category}</h3>
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
