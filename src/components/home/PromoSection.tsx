import { Section } from '@/components/layout/Section'
import { PromoCard } from '@/components/ui/PromoCard'

const featuredPromos = [
  {
    id: 'delivery',
    title: 'Get $7 Off Your First Delivery Order',
    description: 'Order from the app and get it delivered to your door.',
    badge: 'Delivery',
    promoCode: '7HTREAT',
    image: 'https://images.unsplash.com/photo-1607082350899-7e105aa886ae?w=600&q=80',
    color: 'from-brand-600 to-brand-800',
    ctaText: 'Order Now',
    ctaHref: '/app',
  },
  {
    id: 'rewards-promo',
    title: 'Heaven Rewards — Start Earning Today',
    description: 'Get the 7th Heaven app and reap the rewards on every visit.',
    badge: 'Rewards',
    image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&q=80',
    color: 'from-accent-600 to-accent-800',
    ctaText: 'Get the App',
    ctaHref: '/rewards',
  },
]

export function PromoSection() {
  return (
    <Section dark>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5">
        {featuredPromos.map((p) => (
          <PromoCard key={p.id} {...p} />
        ))}
      </div>
    </Section>
  )
}
