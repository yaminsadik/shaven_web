import { Section, SectionHeader } from '@/components/layout/Section'
import { DeviceMockup } from '@/components/ui/DeviceMockup'
import { appFeatures } from '@/data/appFeatures'
import { motion } from 'framer-motion'
import { Download } from 'lucide-react'

export function AppPage() {
  return (
    <>
      <section className="relative overflow-hidden gradient-brand pt-24 pb-12 sm:pt-32 sm:pb-16 md:pt-40 md:pb-20">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,rgba(232,163,23,0.06),transparent_50%)]" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-8 lg:grid-cols-2 lg:gap-16">
            <div className="max-w-2xl">
              <span className="inline-flex rounded-full border border-white/15 bg-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-blue-100/80">
                Mobile first
              </span>
              <h1 className="section-heading mt-5 text-4xl text-white sm:text-5xl md:text-6xl">
                The{' '}
                <span className="text-accent-400">7th Heaven App</span>
              </h1>
              <p className="mt-5 text-base text-blue-100/75 sm:text-lg">
                Track rewards, clip deals, pay at the pump, and find your nearest store.
                Everything you need for a faster stop.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                <span
                  className="inline-flex min-h-11 items-center justify-center gap-2 rounded-full border border-white/20 bg-white/10 px-6 py-3.5 font-semibold text-blue-100/80 cursor-not-allowed"
                  title="App Store link coming soon"
                >
                  <Download className="w-5 h-5 shrink-0" />
                  iOS: coming soon
                </span>
                <span
                  className="inline-flex min-h-11 items-center justify-center gap-2 rounded-full border border-white/15 px-6 py-3.5 font-semibold text-blue-200/50 cursor-not-allowed"
                  title="Google Play link coming soon"
                >
                  <Download className="w-5 h-5 shrink-0" />
                  Android: coming soon
                </span>
              </div>
              <p className="mt-3 text-sm text-blue-200/40">Store links will go live when the app launches.</p>
            </div>
            <div className="hidden justify-center lg:flex">
              <DeviceMockup />
            </div>
          </div>
        </div>
      </section>

      <Section variant="paper">
        <SectionHeader
          title="What the App Does"
          subtitle="Makes your stop quicker and saves you money. That's it."
          align="left"
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

      <Section dark>
        <div className="max-w-2xl mx-auto text-left sm:text-center">
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
