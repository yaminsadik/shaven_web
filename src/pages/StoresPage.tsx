import { Section, SectionHeader } from '@/components/layout/Section'
import { CTABanner } from '@/components/ui/CTABanner'
import { MapPin, Clock, Phone, Navigation } from 'lucide-react'
import { motion } from 'framer-motion'

const mockStores = [
  {
    id: 1,
    name: '7th Heaven — Kirksville',
    address: '1810 N Baltimore St, Kirksville, MO 63501',
    hours: 'Open 24/7',
    phone: '(660) 665-1234',
    amenities: ['Gas', 'ATM', 'Hot Food', 'Car Wash'],
    gas: true,
  },
  {
    id: 2,
    name: '7th Heaven — Macon',
    address: '404 Vine St, Macon, MO 63552',
    hours: 'Open 24/7',
    phone: '(660) 385-5678',
    amenities: ['Gas', 'Hot Food', 'Money Orders'],
    gas: true,
  },
  {
    id: 3,
    name: '7th Heaven — Trenton',
    address: '1101 E 9th St, Trenton, MO 64683',
    hours: 'Open 24/7',
    phone: '(660) 359-9012',
    amenities: ['Gas', 'ATM', 'Hot Food', 'Money Orders', 'Propane'],
    gas: true,
  },
  {
    id: 4,
    name: '7th Heaven — Chillicothe',
    address: '905 Washington St, Chillicothe, MO 64601',
    hours: 'Open 24/7',
    phone: '(660) 646-3456',
    amenities: ['Gas', 'ATM', 'Hot Food', 'Car Wash', 'Propane'],
    gas: true,
  },
]

export function StoresPage() {
  return (
    <>
      {/* Hero — brand gradient */}
      <section className="relative pt-32 pb-16 md:pt-40 md:pb-20 gradient-brand">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <div className="mx-auto w-16 h-16 rounded-2xl bg-accent-400/20 flex items-center justify-center mb-6">
            <MapPin className="w-8 h-8 text-accent-400" />
          </div>
          <h1 className="section-heading text-4xl sm:text-5xl md:text-6xl text-white">
            Find a Store
          </h1>
          <p className="mt-4 text-lg text-blue-200/70 max-w-xl mx-auto">
            Gas, food, drinks, and everything you need. Find the closest location and stop in.
          </p>
        </div>
      </section>

      {/* Map Placeholder */}
      <Section>
        <div className="rounded-3xl overflow-hidden bg-brand-700/30 border border-brand-500/20 aspect-[21/9] flex items-center justify-center">
          <div className="text-center">
            <MapPin className="w-12 h-12 text-blue-200/30 mx-auto mb-3" />
            <p className="text-blue-200/40 font-medium">Interactive Map Coming Soon</p>
            <p className="text-xs text-blue-200/30 mt-1">Google Maps or Mapbox integration placeholder</p>
          </div>
        </div>
      </Section>

      {/* Store List */}
      <Section dark>
        <SectionHeader title="Our Locations" subtitle="All stores open 24/7 in North Missouri." />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5 max-w-4xl mx-auto">
          {mockStores.map((store, i) => (
            <motion.div
              key={store.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="glass-card rounded-2xl p-6 hover:border-accent-400/20 transition-colors"
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h3 className="font-bold text-white">{store.name}</h3>
                  <p className="text-sm text-blue-200/50 mt-1">{store.address}</p>
                  <div className="mt-3 flex flex-wrap gap-3 text-xs text-blue-200/40">
                    <span className="flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5" />
                      {store.hours}
                    </span>
                    <span className="flex items-center gap-1">
                      <Phone className="w-3.5 h-3.5" />
                      {store.phone}
                    </span>
                  </div>
                  <div className="mt-3 flex flex-wrap gap-1.5">
                    {store.amenities.map((a) => (
                      <span key={a} className="text-xs px-2 py-0.5 rounded-full bg-brand-600/50 text-blue-200/50 border border-brand-500/20">
                        {a}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="text-right shrink-0">
                  <button className="flex items-center gap-1 text-xs text-blue-200/50 hover:text-accent-400 transition-colors">
                    <Navigation className="w-3 h-3" />
                    Directions
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </Section>

      <Section>
        <CTABanner
          title="Open a 7th Heaven Near You"
          subtitle="Interested in franchise opportunities? Let's talk."
          buttonText="Learn More"
          buttonHref="/#contact"
          variant="dark"
        />
      </Section>
    </>
  )
}
