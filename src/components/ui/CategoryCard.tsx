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
        className="group relative overflow-hidden rounded-2xl aspect-[4/3] cursor-pointer"
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
        <div className="relative z-10 h-full flex flex-col items-center justify-center text-center p-4">
          <div className="w-14 h-14 rounded-2xl bg-white/15 backdrop-blur-sm flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
            <Icon className="w-7 h-7 text-white" />
          </div>
          <h3 className="section-heading text-base sm:text-lg text-white">{title}</h3>
          <p className="text-xs text-white/70 mt-0.5">{subtitle}</p>
        </div>
      </motion.div>
    </Link>
  )
}
