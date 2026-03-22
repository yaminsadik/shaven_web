import { HeroSection } from '@/components/home/HeroSection'
import { CategoryStrip } from '@/components/home/CategoryStrip'
import { PromoSection } from '@/components/home/PromoSection'
import { SignatureFood } from '@/components/home/SignatureFood'
import { RewardsSection } from '@/components/home/RewardsSection'
import { AppTeaser } from '@/components/home/AppTeaser'
import { AdultTeaser } from '@/components/home/AdultTeaser'

export function HomePage() {
  return (
    <>
      {/* 1. Hero: brand gradient full-bleed */}
      <HeroSection />
      {/* 2. Category shortcuts */}
      <CategoryStrip />
      {/* 3. Promo cards: dark bg */}
      <PromoSection />
      {/* 4. App teaser: moved up — primary conversion goal */}
      <AppTeaser />
      {/* 5. Rewards: paper stripe */}
      <RewardsSection />
      {/* 6. Featured food: accent bg */}
      <SignatureFood />
      {/* 7. Adult teaser: dark bg */}
      <AdultTeaser />
    </>
  )
}
