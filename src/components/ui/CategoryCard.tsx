import { Link } from '@tanstack/react-router'
import { motion } from 'framer-motion'
import type { LucideIcon } from 'lucide-react'

interface CategoryCardProps {
  title: string
  subtitle: string
  icon: LucideIcon
  color: string
  href: string
  image?: string
}

export function CategoryCard({ title, subtitle, icon: Icon, color, href, image }: CategoryCardProps) {
  return (
    <Link to={href}>
      <motion.div
        whileHover={{ y: -6, scale: 1.02 }}
        transition={{ duration: 0.25 }}
        className="group relative aspect-[1.08] cursor-pointer overflow-hidden rounded-2xl sm:aspect-[4/3]"
      >
        {image && (
          <img
            src={image}
            alt={title}
            className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            loading="lazy"
          />
        )}
        <div className={`absolute inset-0 bg-gradient-to-br ${color} ${image ? 'opacity-70 group-hover:opacity-60' : ''} transition-opacity`} />
        <div className="relative z-10 flex h-full flex-col items-start p-3.5 text-left sm:items-center sm:justify-center sm:p-4 sm:text-center">
          <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-white/15 backdrop-blur-sm transition-transform group-hover:scale-110 sm:mb-3 sm:h-14 sm:w-14">
            <Icon className="h-5 w-5 text-white sm:h-7 sm:w-7" />
          </div>
          <div className="mt-auto sm:mt-0">
            <h3 className="section-heading text-base text-white sm:text-lg">{title}</h3>
            <p className="mt-0.5 max-w-[11rem] text-xs text-white/78 sm:max-w-none">{subtitle}</p>
          </div>
        </div>
      </motion.div>
    </Link>
  )
}
