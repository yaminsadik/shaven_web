import { Section, SectionHeader } from '@/components/layout/Section'
import { Link } from '@tanstack/react-router'
import { motion } from 'framer-motion'

const articles = [
  {
    id: 'espresso',
    title: 'What is Espresso?',
    image: 'https://images.unsplash.com/photo-1461023058943-07fcbe16d735?w=600&q=80',
    bgColor: 'bg-emerald-700',
    href: '/food',
  },
  {
    id: 'coffee-beans',
    title: 'Taste The Difference: Types of Coffee Beans and Roasts',
    image: 'https://images.unsplash.com/photo-1447933601403-0c6688de566e?w=600&q=80',
    bgColor: 'bg-brand-600',
    href: '/food',
  },
  {
    id: 'latte',
    title: 'What is A Latte? Enjoy One Today!',
    image: 'https://images.unsplash.com/photo-1534778101976-62847782c213?w=600&q=80',
    bgColor: 'bg-sky-700',
    href: '/food',
  },
  {
    id: 'seasonal',
    title: 'The Pumpkin Somethin\'',
    image: 'https://images.unsplash.com/photo-1570197571499-166b36435e9f?w=600&q=80',
    bgColor: 'bg-amber-700',
    href: '/food',
  },
]

export function InsideSection() {
  return (
    <Section dark>
      <SectionHeader
        title="Inside 7th Heaven"
        action={
          <Link
            to="/food"
            className="text-sm font-semibold text-accent-400 hover:text-accent-300 transition-colors"
          >
            View All
          </Link>
        }
        align="left"
      />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5">
        {articles.map((article, i) => (
          <motion.div
            key={article.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08 }}
          >
            <Link to={article.href} className="group block">
              <div className={`relative aspect-square rounded-2xl overflow-hidden ${article.bgColor}`}>
                <img
                  src={article.image}
                  alt={article.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
              </div>
              <h3 className="mt-3 text-sm font-bold text-white line-clamp-2 group-hover:text-accent-300 transition-colors">
                {article.title}
              </h3>
              <span className="mt-1 text-xs font-semibold text-accent-400 group-hover:text-accent-300 transition-colors">
                Read More
              </span>
            </Link>
          </motion.div>
        ))}
      </div>
    </Section>
  )
}
