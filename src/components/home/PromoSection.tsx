import { Section, SectionHeader } from '@/components/layout/Section'
import { PromoCard } from '@/components/ui/PromoCard'
import { Link } from '@tanstack/react-router'
import { ArrowRight } from 'lucide-react'

const featuredPromos = [
  {
    id: 'delivery',
    title: 'Get $7 Off Your First Delivery Order',
    description: 'Order from the app and get it delivered to your door.',
    badge: 'Delivery',
    promoCode: '7HTREAT',
    image: '/media/promotions/delivery-web.jpg',
    color: 'from-brand-600 to-brand-800',
    ctaText: 'Order Now',
    ctaHref: '/app',
  },
  {
    id: 'fuel-pay',
    title: 'Pay at the Pump from Your Phone',
    description: 'Fuel up faster: start the pump in the app and go.',
    badge: 'Fuel Pay',
    image: '/media/promotions/fuel-web.jpg',
    color: 'from-surface-700 to-brand-900',
    ctaText: 'Download App',
    ctaHref: '/app',
  },
  {
    id: 'rewards-promo',
    title: 'Heaven Rewards: Start Earning Today',
    description: 'Get the 7th Heaven app and reap the rewards on every visit.',
    badge: 'Rewards',
    image: '/media/promotions/rewards-web.jpg',
    color: 'from-accent-600 to-accent-800',
    ctaText: 'Join Rewards',
    ctaHref: '/rewards',
  },
]

export function PromoSection() {
  return (
    <Section dark>
      <SectionHeader
        title="Ways to Save"
        subtitle="Start with the fastest wins, then dig into the full list of current offers."
        align="left"
        action={
          <Link
            to="/deals"
            className="inline-flex items-center gap-2 text-sm font-semibold text-accent-300 transition-colors hover:text-accent-200"
          >
            See all deals
            <ArrowRight className="h-4 w-4" />
          </Link>
        }
      />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5 items-stretch">
        {featuredPromos.map((p, index) => (
          <div key={p.id} className={index === 2 ? 'hidden md:block' : ''}>
            <PromoCard {...p} />
          </div>
        ))}
      </div>
    </Section>
  )
}
