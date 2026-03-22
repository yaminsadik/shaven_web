import { Link } from '@tanstack/react-router'
import { Section, SectionHeader } from '@/components/layout/Section'
import { DeviceMockup } from '@/components/ui/DeviceMockup'
import { appFeatures } from '@/data/appFeatures'

export function AppTeaser() {
  return (
    <Section dark className="relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,rgba(232,163,23,0.06),transparent_55%)]" />
      <div className="relative grid items-center gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
        <div>
          <SectionHeader
            title="Get the 7th Heaven App"
            subtitle="Clip deals, track points, and pay at the pump from one place."
            align="left"
          />
          <div className="space-y-3 sm:space-y-4">
            {appFeatures.slice(0, 3).map((f, index) => (
              <div
                key={f.id}
                className={`flex items-start gap-4 rounded-2xl border border-white/8 bg-white/4 p-4 ${
                  index === 2 ? 'hidden sm:flex' : ''
                }`}
              >
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-accent-400/10">
                  <f.icon className="h-5 w-5 text-accent-400" />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-white">{f.title}</h4>
                  <p className="mt-0.5 text-sm text-blue-100/60">{f.description}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-6 flex flex-col gap-3 xs:flex-row">
            <Link
              to="/app"
              className="inline-flex min-h-11 items-center justify-center rounded-full gradient-accent px-6 py-3 text-sm font-semibold text-brand-900 shadow-lg shadow-accent-400/20 transition-shadow hover:shadow-accent-400/35"
            >
              See app features
            </Link>
            <Link
              to="/rewards"
              className="inline-flex min-h-11 items-center justify-center rounded-full border border-white/20 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-white/10"
            >
              Join rewards
            </Link>
          </div>
          <p className="mt-3 text-xs text-blue-100/45">App store links will go live when the app launches.</p>
        </div>
        <div className="hidden justify-center lg:flex lg:justify-end">
          <DeviceMockup className="scale-[0.94] lg:scale-100" />
        </div>
      </div>
    </Section>
  )
}
