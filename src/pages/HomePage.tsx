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
      {/* 1. Hero — brand gradient full-bleed */}
      <HeroSection />
      <CategoryStrip />
      <PromoSection />
      {/* 3. Featured food/content — accent bg */}
      <SignatureFood />
      {/* 4. Brand values — dark bg */}
      <BrandValues />
      {/* 5. Rewards — light bg */}
      <RewardsSection />
      {/* 6. App teaser — dark bg */}
      <AppTeaser />
      {/* 7. Inside 7th Heaven articles — dark bg */}
      <InsideSection />
      {/* 8. Store gallery — light bg */}
      <StoreGallery />
      {/* 9. Adult teaser — dark bg */}
      <AdultTeaser />
      {/* 10. Social links */}
      <SocialSection />
      {/* 11. Final CTA */}
      <Section>
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
