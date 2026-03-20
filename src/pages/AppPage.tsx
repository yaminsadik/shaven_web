import { Section, SectionHeader } from '@/components/layout/Section'
import { DeviceMockup } from '@/components/ui/DeviceMockup'
import { appFeatures } from '@/data/appFeatures'
import { motion } from 'framer-motion'
import { Download } from 'lucide-react'

export function AppPage() {
  return (
    <>
      {/* Hero: split layout with device mockup */}
      <section className="relative pt-32 pb-16 md:pt-40 md:pb-20 gradient-brand overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,rgba(232,163,23,0.06),transparent_50%)]" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            <div>
              <h1 className="section-heading text-4xl sm:text-5xl md:text-6xl text-white">
                The{' '}
                <span className="text-accent-400">7th Heaven App</span>
              </h1>
              <p className="mt-5 text-lg text-blue-200/70 max-w-lg">
                Track rewards, clip deals, pay at the pump, and find your nearest store.
                Everything you need for a faster stop.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <span
                  className="inline-flex items-center gap-2 px-6 py-3.5 min-h-11 rounded-full bg-white/10 border border-white/20 text-blue-100/80 font-semibold cursor-not-allowed"
                  title="App Store link coming soon"
                >
                  <Download className="w-5 h-5 shrink-0" />
                  iOS: coming soon
                </span>
                <span
                  className="inline-flex items-center gap-2 px-6 py-3.5 min-h-11 rounded-full border border-white/15 text-blue-200/50 font-semibold cursor-not-allowed"
                  title="Google Play link coming soon"
                >
                  <Download className="w-5 h-5 shrink-0" />
                  Android: coming soon
                </span>
              </div>
              <p className="mt-3 text-sm text-blue-200/40">Store links will go live when the app launches.</p>
            </div>
            <div className="flex justify-center">
              <DeviceMockup />
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <Section variant="paper">
        <SectionHeader
          title="What the App Does"
          subtitle="Makes your stop quicker and saves you money. That's it."
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8 max-w-5xl mx-auto">
          {appFeatures.map((f, i) => (
            <motion.div
              key={f.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06 }}
              className="rounded-2xl p-6 sm:p-8 border border-slate-200 bg-white shadow-sm group hover:border-accent-400/50 transition-colors"
            >
              <div className="w-12 h-12 rounded-xl gradient-accent flex items-center justify-center mb-4 shadow-lg shadow-accent-400/20">
                <f.icon className="w-6 h-6 text-white" />
              </div>
              <h3 className="section-heading text-lg text-brand-800">{f.title}</h3>
              <p className="mt-2 text-sm text-slate-600 leading-relaxed">{f.description}</p>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Coming Soon */}
      <Section dark>
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="section-heading text-3xl sm:text-4xl text-white">
            Web App Coming Soon
          </h2>
          <p className="mt-4 text-blue-200/50">
            We're building a web version so you can check rewards, browse deals,
            and manage your account from any browser. Coming soon.
          </p>
          <div className="mt-8 inline-flex items-center gap-3 px-6 py-3 rounded-full bg-brand-700/50 border border-brand-500/20 text-blue-200/60">
            <div className="w-2 h-2 rounded-full bg-accent-400 animate-pulse" />
            <span className="text-sm font-medium">In Development</span>
          </div>
        </div>
      </Section>
    </>
  )
}
