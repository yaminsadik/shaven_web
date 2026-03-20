import { HeroSection } from '@/components/home/HeroSection'
import { CategoryStrip } from '@/components/home/CategoryStrip'
import { PromoSection } from '@/components/home/PromoSection'
import { SignatureFood } from '@/components/home/SignatureFood'
import { BrandValues } from '@/components/home/BrandValues'
import { RewardsSection } from '@/components/home/RewardsSection'
import { AppTeaser } from '@/components/home/AppTeaser'
import { InsideSection } from '@/components/home/InsideSection'
import { StoreGallery } from '@/components/home/StoreGallery'
import { AdultTeaser } from '@/components/home/AdultTeaser'
import { SocialSection } from '@/components/home/SocialSection'
import { CTABanner } from '@/components/ui/CTABanner'
import { Section } from '@/components/layout/Section'

export function HomePage() {
  return (
    <>
      {/* 1. Hero: brand gradient full-bleed */}
      <HeroSection />
      {/* 2. Category shortcuts: paper stripe */}
      <CategoryStrip />
      {/* 3. Promo cards: dark bg */}
      <PromoSection />
      {/* 4. Featured food: accent bg */}
      <SignatureFood />
      {/* 5. Brand values: dark bg */}
      <BrandValues />
      {/* 6. Rewards: paper stripe */}
      <RewardsSection />
      {/* 7. App teaser: dark bg */}
      <AppTeaser />
      {/* 8. Inside 7th Heaven: dark bg */}
      <InsideSection />
      {/* 9. Store gallery: paper stripe */}
      <StoreGallery />
      {/* 10. Adult teaser: dark bg */}
      <AdultTeaser />
      {/* 11. Social: paper stripe */}
      <SocialSection />
      {/* 12. Final CTA */}
      <Section variant="paper">
        <CTABanner
          title="Stop In Today"
          subtitle="Gas up, grab something hot, and earn rewards. Find a 7th Heaven near you."
          buttonText="Find a Store"
          buttonHref="/stores"
        />
      </Section>
    </>
  )
}
