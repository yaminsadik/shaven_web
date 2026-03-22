import { Section, SectionHeader } from '@/components/layout/Section'
import { DeviceMockup } from '@/components/ui/DeviceMockup'
import { appFeatures } from '@/data/appFeatures'

export function AppTeaser() {
  return (
    <Section dark>
      <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
        <div className="order-2 lg:order-1 flex justify-center">
          <DeviceMockup />
        </div>
        <div className="order-1 lg:order-2">
          <SectionHeader
            title="Get the 7th Heaven App"
            subtitle="Check your points, clip deals, and pay at the pump from your phone."
            align="left"
          />
          <div className="space-y-4">
            {appFeatures.slice(0, 3).map((f) => (
              <div key={f.id} className="flex items-start gap-4">
                <div className="shrink-0 w-10 h-10 rounded-xl bg-accent-400/10 flex items-center justify-center">
                  <f.icon className="w-5 h-5 text-accent-400" />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-white">{f.title}</h4>
                  <p className="text-sm text-blue-200/50 mt-0.5">{f.description}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-8 flex flex-col xs:flex-row gap-3">
            <a
              href="https://apps.apple.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-5 py-3 rounded-xl bg-white text-brand-900 font-semibold text-sm hover:bg-white/90 transition-colors shadow-lg"
            >
              <svg className="w-6 h-6 shrink-0" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
              </svg>
              <span>
                <span className="block text-[10px] font-normal opacity-70 leading-none">Download on the</span>
                App Store
              </span>
            </a>
            <a
              href="https://play.google.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-5 py-3 rounded-xl bg-white text-brand-900 font-semibold text-sm hover:bg-white/90 transition-colors shadow-lg"
            >
              <svg className="w-6 h-6 shrink-0" viewBox="0 0 24 24" fill="currentColor">
                <path d="M3.18 23.76c.33.18.7.2 1.06.06l12.14-7.03-2.56-2.56-10.64 9.53zm-1.1-20.1A2.01 2.01 0 002 5v14c0 .67.33 1.26.84 1.63l.09.06 7.84-7.84v-.18L2.08 3.66zm17.12 8.28L16.7 9.8 14.1 12.4l2.6 2.6 2.52-1.46a1.43 1.43 0 000-2.6zM4.24.22a1.43 1.43 0 00-1.06.08l10.64 9.52 2.56-2.56L4.24.22z"/>
              </svg>
              <span>
                <span className="block text-[10px] font-normal opacity-70 leading-none">Get it on</span>
                Google Play
              </span>
            </a>
          </div>
        </div>
      </div>
    </Section>
  )
}
