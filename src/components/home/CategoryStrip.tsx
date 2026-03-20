import { Section, SectionHeader } from '@/components/layout/Section'
import { CategoryCard } from '@/components/ui/CategoryCard'
import { homeCategories } from '@/data/categories'

export function CategoryStrip() {
  return (
    <Section>
      <SectionHeader
        title="Everything Under One Roof"
        subtitle="Gas, food, drinks, snacks, and cold beer — all in one stop."
      />
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
        {homeCategories.map((cat) => (
          <CategoryCard key={cat.id} {...cat} />
        ))}
      </div>
    </Section>
  )
}
