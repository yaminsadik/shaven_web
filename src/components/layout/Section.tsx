import { type ReactNode } from 'react'
import { motion } from 'framer-motion'

type SectionVariant = 'dark' | 'light' | 'accent' | 'brand'

interface SectionProps {
  children: ReactNode
  className?: string
  id?: string
  variant?: SectionVariant
  dark?: boolean
  padded?: boolean
  fullBleed?: boolean
}

const variantClasses: Record<SectionVariant, string> = {
  dark: 'bg-surface-900',
  light: 'bg-surface-800',
  accent: 'bg-accent-600/10',
  brand: 'bg-brand-600/10',
}

export function Section({
  children,
  className = '',
  id,
  variant,
  dark,
  padded = true,
  fullBleed = false,
}: SectionProps) {
  const bg = variant ? variantClasses[variant] : dark ? 'bg-surface-900' : 'bg-surface-800'

  return (
    <motion.section
      id={id}
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={`
        ${padded ? 'px-4 sm:px-6 lg:px-8 py-16 md:py-24' : ''}
        ${bg}
        ${className}
      `}
    >
      <div className={padded && !fullBleed ? 'mx-auto max-w-7xl' : ''}>{children}</div>
    </motion.section>
  )
}

export function SectionHeader({
  title,
  subtitle,
  align = 'center',
  action,
}: {
  title: string
  subtitle?: string
  align?: 'left' | 'center'
  action?: ReactNode
}) {
  return (
    <div className={`mb-10 md:mb-14 ${align === 'center' ? 'text-center' : ''}`}>
      <div className={`flex items-end justify-between ${align === 'center' ? 'flex-col items-center gap-4' : 'gap-4'}`}>
        <div>
          <h2 className="section-heading text-3xl sm:text-4xl md:text-5xl text-white">
            {title}
          </h2>
          {subtitle && (
            <p className="mt-3 text-base sm:text-lg text-blue-200/50 max-w-2xl">{subtitle}</p>
          )}
        </div>
        {action && <div className="shrink-0">{action}</div>}
      </div>
    </div>
  )
}
