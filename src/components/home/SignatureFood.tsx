import { Section, SectionHeader } from '@/components/layout/Section'
import { MediaCard } from '@/components/ui/MediaCard'
import { signatureFood } from '@/data/food'
import { Link } from '@tanstack/react-router'
import { ArrowRight } from 'lucide-react'

export function SignatureFood() {
  return (
    <Section variant="accent">
      <SectionHeader
        title="Hot Food. Ready Now."
        subtitle="Roller grill, fried chicken, pizza, and more — made fresh in store all day."
        action={
          <Link
            to="/food"
            className="inline-flex items-center gap-2 text-accent-400 hover:text-accent-300 font-semibold transition-colors text-sm"
          >
            See Full Menu
            <ArrowRight className="w-4 h-4" />
          </Link>
        }
        align="left"
      />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
        {signatureFood.slice(0, 3).map((item) => (
          <MediaCard
            key={item.id}
            image={item.image}
            title={item.title}
            description={item.description}
            tag={item.tag}
            href={item.href}
            aspectRatio="square"
          />
        ))}
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-5 mt-4 md:mt-5">
        {signatureFood.slice(3).map((item) => (
          <MediaCard
            key={item.id}
            image={item.image}
            title={item.title}
            description={item.description}
            tag={item.tag}
            href={item.href}
            aspectRatio="video"
          />
        ))}
      </div>
    </Section>
  )
}
