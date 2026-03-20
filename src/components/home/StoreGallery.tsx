import { Section, SectionHeader } from '@/components/layout/Section'
import { GalleryGrid } from '@/components/ui/GalleryGrid'
import { Link } from '@tanstack/react-router'

export function StoreGallery() {
  return (
    <Section variant="paper">
      <SectionHeader
        title="Inside Our Stores"
        subtitle="Clean, stocked, and ready for you, day or night."
        action={
          <Link
            to="/stores"
            className="text-sm font-semibold text-accent-600 hover:text-accent-700 transition-colors"
          >
            Find a Store
          </Link>
        }
        align="left"
      />
      <GalleryGrid />
    </Section>
  )
}
