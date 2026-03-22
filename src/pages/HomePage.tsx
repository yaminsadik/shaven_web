import { HeroSection } from '@/components/home/HeroSection'
import { CategoryStrip } from '@/components/home/CategoryStrip'
import { PromoSection } from '@/components/home/PromoSection'
import { SignatureFood } from '@/components/home/SignatureFood'
import { RewardsSection } from '@/components/home/RewardsSection'
import { AppTeaser } from '@/components/home/AppTeaser'
import { AdultTeaser } from '@/components/home/AdultTeaser'
import { MobileStickyCTA } from '@/components/home/MobileStickyCTA'

export function HomePage() {
  return (
    <>
      <HeroSection />
      <CategoryStrip />
      <PromoSection />
      <RewardsSection />
      <AppTeaser />
      <SignatureFood />
      <AdultTeaser />
      <div className="h-24 sm:hidden" aria-hidden="true" />
      <MobileStickyCTA />
    </>
  )
}
