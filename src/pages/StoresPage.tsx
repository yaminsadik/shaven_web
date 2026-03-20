import { Section, SectionHeader } from '@/components/layout/Section'
import { CTABanner } from '@/components/ui/CTABanner'
import { MapPin, Clock, Phone, Navigation } from 'lucide-react'
import { motion } from 'framer-motion'

const mockStores = [
  { id: 1, name: '7th Heaven #12 — Main & Oak', address: '1200 Main St, Springfield', hours: '24/7', phone: '(555) 700-0001', distance: '0.8 mi', gas: true },
  { id: 2, name: '7th Heaven #34 — Highway 9', address: '4501 Highway 9, Springfield', hours: '24/7', phone: '(555) 700-0002', distance: '2.3 mi', gas: true },
  { id: 3, name: '7th Heaven #18 — College Ave', address: '890 College Ave, Springfield', hours: '5 AM – 1 AM', phone: '(555) 700-0003', distance: '3.1 mi', gas: true },
  { id: 4, name: '7th Heaven #45 — Industrial Blvd', address: '3200 Industrial Blvd, Springfield', hours: '24/7', phone: '(555) 700-0004', distance: '5.6 mi', gas: true },
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
        <SectionHeader title="Nearby Locations" subtitle="Based on your area." />
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
                </div>
                <div className="text-right shrink-0">
                  <span className="text-sm font-semibold text-accent-400">{store.distance}</span>
                  <button className="mt-2 flex items-center gap-1 text-xs text-blue-200/50 hover:text-accent-400 transition-colors">
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
