import { useState } from 'react'
import { Section, SectionHeader } from '@/components/layout/Section'
import { CTABanner } from '@/components/ui/CTABanner'
import { MapPin, Clock, Phone, Navigation, Fuel, Utensils, Search } from 'lucide-react'
import { motion } from 'framer-motion'

const mockStores = [
  { id: 1, name: '7th Heaven #12, Main & Oak', address: '1200 Main St, Springfield', hours: '24/7', phone: '(555) 700-0001', distance: '0.8 mi', gas: true },
  { id: 2, name: '7th Heaven #34, Highway 9', address: '4501 Highway 9, Springfield', hours: '24/7', phone: '(555) 700-0002', distance: '2.3 mi', gas: true },
  { id: 3, name: '7th Heaven #18, College Ave', address: '890 College Ave, Springfield', hours: '5 AM - 1 AM', phone: '(555) 700-0003', distance: '3.1 mi', gas: true },
  { id: 4, name: '7th Heaven #45, Industrial Blvd', address: '3200 Industrial Blvd, Springfield', hours: '24/7', phone: '(555) 700-0004', distance: '5.6 mi', gas: true },
]

export function StoresPage() {
  const [zip, setZip] = useState('')

  return (
    <>
      {/* Hero: brand gradient */}
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

      {/* Map + locator tools */}
      <Section variant="paper">
        <div className="grid lg:grid-cols-5 gap-6 lg:gap-8 items-stretch">
          <div className="lg:col-span-3 min-h-[220px] sm:min-h-[260px] lg:min-h-[300px] rounded-3xl overflow-hidden bg-gradient-to-br from-brand-600/15 to-surface-900/5 border border-slate-200 flex flex-col items-center justify-center p-8 text-center">
            <MapPin className="w-12 h-12 text-brand-600/50 mx-auto mb-3" />
            <p className="section-heading text-lg text-brand-800">Map coming soon</p>
            <p className="text-sm text-slate-600 mt-2 max-w-sm">
              We&apos;re connecting live maps so you can search by ZIP and get directions in one tap.
            </p>
          </div>
          <div className="lg:col-span-2 flex flex-col gap-4">
            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <label htmlFor="store-zip" className="text-xs font-bold uppercase tracking-wider text-slate-500">
                Find by ZIP
              </label>
              <div className="mt-2 flex gap-2">
                <div className="relative flex-1">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                  <input
                    id="store-zip"
                    type="text"
                    inputMode="numeric"
                    autoComplete="postal-code"
                    placeholder="e.g. 65802"
                    value={zip}
                    onChange={(e) => setZip(e.target.value.replace(/\D/g, '').slice(0, 5))}
                    className="w-full rounded-xl border border-slate-200 bg-paper-50 py-3 pl-10 pr-3 text-sm text-brand-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-accent-400/40"
                  />
                </div>
                <button
                  type="button"
                  className="shrink-0 rounded-xl bg-brand-700 px-4 py-3 text-sm font-semibold text-white hover:bg-brand-600 transition-colors min-h-11"
                >
                  Search
                </button>
              </div>
              <p className="mt-2 text-xs text-slate-500">Demo field: results use sample list below.</p>
            </div>
            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm flex-1">
              <p className="text-xs font-bold uppercase tracking-wider text-slate-500">At every stop</p>
              <ul className="mt-3 space-y-3">
                <li className="flex items-center gap-3 text-sm text-slate-700">
                  <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-accent-400/15 text-accent-700">
                    <Fuel className="w-4 h-4" />
                  </span>
                  Quality fuel, pay-at-the-pump ready
                </li>
                <li className="flex items-center gap-3 text-sm text-slate-700">
                  <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-brand-100 text-brand-800">
                    <Utensils className="w-4 h-4" />
                  </span>
                  Hot food, drinks, and cooler stocked daily
                </li>
              </ul>
            </div>
          </div>
        </div>
      </Section>

      {/* Store List */}
      <Section dark>
        <SectionHeader title="Nearby Locations" subtitle="Based on your area." />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5 max-w-5xl mx-auto">
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
                  <span className="price-text text-base text-accent-400">{store.distance}</span>
                  <button
                    type="button"
                    className="mt-2 flex items-center justify-end gap-1 text-xs text-blue-200/50 hover:text-accent-400 transition-colors w-full"
                  >
                    <Navigation className="w-3 h-3" />
                    Directions
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </Section>

      <Section variant="paper">
        <CTABanner
          title="Open a 7th Heaven Near You"
          subtitle="Interested in franchise opportunities? Let's talk."
          buttonText="Learn More"
          buttonHref="mailto:franchise@7thheaven.com"
          variant="dark"
        />
      </Section>
    </>
  )
}
