import { Link } from '@tanstack/react-router'
import { motion } from 'framer-motion'

interface PromoCardProps {
  title: string
  description: string
  badge?: string
  promoCode?: string
  image?: string
  color?: string
  ctaText?: string
  ctaHref?: string
}

export function PromoCard({
  title,
  description,
  badge,
  promoCode,
  image,
  color = 'from-brand-600 to-brand-800',
  ctaText,
  ctaHref,
}: PromoCardProps) {
  return (
    <motion.div
      whileHover={{ y: -3, scale: 1.01 }}
      transition={{ duration: 0.2 }}
      className="group relative flex h-full min-h-[13.5rem] overflow-hidden rounded-2xl sm:min-h-[15rem]"
    >
      {image && (
        <img
          src={image}
          alt={title}
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          loading="lazy"
        />
      )}
      {image && <div className="absolute inset-0 bg-gradient-to-t from-surface-900/95 via-surface-900/45 to-surface-900/10" />}
      <div className={`absolute inset-0 bg-gradient-to-r ${color} ${image ? 'opacity-70' : 'opacity-100'}`} />
      <div className="relative z-10 flex w-full flex-col justify-end p-5 sm:p-8">
        {badge && (
          <span className="inline-block w-fit mb-3 px-2.5 py-1 text-xs font-bold rounded-full bg-white/20 backdrop-blur-sm text-white border border-white/10">
            {badge}
          </span>
        )}
        <h3 className="section-heading text-xl text-white sm:text-2xl">{title}</h3>
        <p className="mt-1.5 text-sm text-white/80 max-w-sm">{description}</p>
        {promoCode && (
          <div className="mt-3 inline-flex w-fit items-center gap-2 px-3 py-1.5 rounded-lg bg-white/15 backdrop-blur-sm border border-white/10">
            <span className="text-xs text-white/60">Use code:</span>
            <span className="text-sm font-bold text-white tracking-wider">{promoCode}</span>
          </div>
        )}
        {ctaText && ctaHref && (
          <Link
            to={ctaHref}
            className="mt-4 inline-flex w-fit items-center gap-2 px-5 py-2.5 rounded-full bg-white text-brand-900 text-sm font-semibold hover:bg-white/90 transition-colors shadow-lg"
          >
            {ctaText}
          </Link>
        )}
      </div>
    </motion.div>
  )
}
