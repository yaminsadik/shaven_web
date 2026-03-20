import { Section, SectionHeader } from '@/components/layout/Section'
import { motion } from 'framer-motion'
import { Fuel, UtensilsCrossed, Gift, Clock } from 'lucide-react'

const values = [
  {
    icon: Fuel,
    title: 'Gas & Go',
    description: 'Competitive fuel prices every day. Fill up and get back on the road fast.',
  },
  {
    icon: UtensilsCrossed,
    title: 'Hot Food Anytime',
    description: 'Roller grill, fried chicken, pizza by the slice — real food when you need it.',
  },
  {
    icon: Gift,
    title: 'Rewards That Add Up',
    description: 'Earn points on gas, snacks, drinks — everything. Cash them in for free stuff.',
  },
  {
    icon: Clock,
    title: 'Always Open',
    description: 'Open early, open late, open holidays. We\'re here when other places aren\'t.',
  },
]

export function BrandValues() {
  return (
    <Section dark>
      <SectionHeader
        title="Why People Pick 7th Heaven"
        subtitle="It's the stop you know won't let you down."
      />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
        {values.map((v, i) => (
          <motion.div
            key={v.title}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="text-center group"
          >
            <div className="mx-auto w-14 h-14 rounded-2xl bg-accent-400/10 flex items-center justify-center mb-4 group-hover:bg-accent-400/20 transition-colors">
              <v.icon className="w-7 h-7 text-accent-400" />
            </div>
            <h3 className="text-lg font-bold text-white">{v.title}</h3>
            <p className="mt-2 text-sm text-blue-200/50 leading-relaxed">{v.description}</p>
          </motion.div>
        ))}
      </div>
    </Section>
  )
}
