import { Section, SectionHeader } from '@/components/layout/Section'
import { DeviceMockup } from '@/components/ui/DeviceMockup'
import { appFeatures } from '@/data/appFeatures'
import { Link } from '@tanstack/react-router'
import { ArrowRight } from 'lucide-react'

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
            subtitle="Check your points, clip deals, and pay at the pump — right from your phone."
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
          <div className="mt-8">
            <Link
              to="/app"
              className="inline-flex items-center gap-2 text-accent-400 hover:text-accent-300 font-semibold transition-colors"
            >
              Learn More About the App
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </Section>
  )
}
