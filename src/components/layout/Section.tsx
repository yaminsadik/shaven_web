/* eslint-disable react-refresh/only-export-components */
import { createContext, useContext, type ReactNode } from 'react'
import { motion } from 'framer-motion'

export type SectionTone = 'onDark' | 'onPaper'

const SectionToneContext = createContext<SectionTone>('onDark')

export function useSectionTone() {
  return useContext(SectionToneContext)
}

type SectionVariant = 'dark' | 'light' | 'accent' | 'brand' | 'paper'

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
  paper: 'bg-paper-50 border-y border-slate-200/70',
}

function toneForSection(variant: SectionVariant | undefined): SectionTone {
  if (variant === 'paper') return 'onPaper'
  return 'onDark'
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
  const resolvedVariant: SectionVariant | undefined = variant ?? (dark ? 'dark' : undefined)
  const bg = resolvedVariant
    ? variantClasses[resolvedVariant]
    : dark
      ? variantClasses.dark
      : variantClasses.light

  const tone = toneForSection(resolvedVariant)

  return (
    <SectionToneContext.Provider value={tone}>
      <motion.section
        id={id}
        initial={{ opacity: 0, y: 32 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className={`
        ${padded ? 'px-4 sm:px-6 lg:px-8 py-12 md:py-20 lg:py-24' : ''}
        ${bg}
        ${className}
      `}
      >
        <div className={padded && !fullBleed ? 'mx-auto max-w-7xl' : ''}>{children}</div>
      </motion.section>
    </SectionToneContext.Provider>
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
  align?: 'left' | 'center' | 'right'
  action?: ReactNode
}) {
  const tone = useSectionTone()
  const titleCls =
    tone === 'onPaper'
      ? 'section-heading text-3xl sm:text-4xl md:text-5xl text-brand-800'
      : 'section-heading text-3xl sm:text-4xl md:text-5xl text-white'
  const subtitleCls =
    tone === 'onPaper'
      ? 'mt-3 text-base sm:text-lg text-slate-600 max-w-2xl'
      : 'mt-3 text-base sm:text-lg text-blue-100/65 max-w-2xl'

  return (
    <div className={`mb-8 md:mb-12 ${align === 'center' ? 'text-center' : align === 'right' ? 'text-right' : ''}`}>
      <div className={`flex items-end justify-between ${align === 'center' ? 'flex-col items-center gap-4' : align === 'right' ? 'flex-col items-end gap-4' : 'gap-4'}`}>
        <div>
          <h2 className={titleCls}>{title}</h2>
          {subtitle && <p className={subtitleCls}>{subtitle}</p>}
        </div>
        {action && <div className="shrink-0">{action}</div>}
      </div>
    </div>
  )
}
