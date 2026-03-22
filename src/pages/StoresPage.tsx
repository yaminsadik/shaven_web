import { useState } from 'react'
import { Section, SectionHeader } from '@/components/layout/Section'
import { CTABanner } from '@/components/ui/CTABanner'
import { MapPin, Clock, Phone, Navigation, Fuel, Utensils, Search } from 'lucide-react'
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

function normalizePhone(phone: string) {
  return phone.replace(/\D/g, '')
}

function directionsHref(address: string) {
  return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address)}`
}

export function StoresPage() {
  const [zip, setZip] = useState('')

  return (
    <>
      <section className="relative gradient-brand pt-24 pb-12 sm:pt-32 sm:pb-16 md:pt-40 md:pb-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl text-left sm:text-center sm:mx-auto">
            <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-accent-400/20 sm:mx-auto">
              <MapPin className="w-8 h-8 text-accent-400" />
            </div>
            <h1 className="section-heading text-4xl text-white sm:text-5xl md:text-6xl">
              Find a Store
            </h1>
            <p className="mt-4 text-base text-blue-100/75 sm:text-lg">
              Gas, food, drinks, and everything you need. Find the closest location and get there in one tap.
            </p>
          </div>
        </div>
      </section>

      <Section variant="paper">
        <div className="grid lg:grid-cols-5 gap-6 lg:gap-8 items-stretch">
          <div className="order-2 lg:order-1 lg:col-span-3 min-h-[220px] sm:min-h-[260px] lg:min-h-[300px] rounded-3xl overflow-hidden bg-gradient-to-br from-brand-600/15 to-surface-900/5 border border-slate-200 flex flex-col items-center justify-center p-8 text-center">
            <MapPin className="w-12 h-12 text-brand-600/50 mx-auto mb-3" />
            <p className="section-heading text-lg text-brand-800">Map coming soon</p>
            <p className="text-sm text-slate-600 mt-2 max-w-sm">
              We&apos;re connecting live maps so you can search by ZIP and get directions in one tap.
            </p>
          </div>
          <div className="order-1 lg:order-2 lg:col-span-2 flex flex-col gap-4">
            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <label htmlFor="store-zip" className="text-xs font-bold uppercase tracking-wider text-slate-500">
                Find by ZIP
              </label>
              <div className="mt-2 flex flex-col gap-2 sm:flex-row">
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
                  className="min-h-11 shrink-0 rounded-xl bg-brand-700 px-4 py-3 text-sm font-semibold text-white transition-colors hover:bg-brand-600 sm:min-w-[7rem]"
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
        <SectionHeader title="Our Locations" subtitle="All stores open 24/7 in North Missouri." align="left" />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5 max-w-5xl mx-auto">
          {mockStores.map((store, i) => (
            <motion.div
              key={store.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="glass-card rounded-2xl p-5 sm:p-6 hover:border-accent-400/20 transition-colors"
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
              </div>
              <div className="mt-4 grid grid-cols-2 gap-2">
                <a
                  href={`tel:${normalizePhone(store.phone)}`}
                  className="inline-flex min-h-11 items-center justify-center gap-2 rounded-full border border-brand-400/30 px-4 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-white/8"
                >
                  <Phone className="h-4 w-4" />
                  Call
                </a>
                <a
                  href={directionsHref(store.address)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex min-h-11 items-center justify-center gap-2 rounded-full gradient-accent px-4 py-2.5 text-sm font-semibold text-brand-900"
                >
                  <Navigation className="h-4 w-4" />
                  Directions
                </a>
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
