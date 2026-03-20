import { Link } from '@tanstack/react-router'
import { ArrowRight } from 'lucide-react'

interface CTABannerProps {
  title: string
  subtitle?: string
  buttonText: string
  buttonHref: string
  variant?: 'brand' | 'dark'
}

function isExternalHref(href: string) {
  return href.startsWith('http://') || href.startsWith('https://') || href.startsWith('mailto:')
}

export function CTABanner({
  title,
  subtitle,
  buttonText,
  buttonHref,
  variant = 'brand',
}: CTABannerProps) {
  const btnClass = `inline-flex items-center gap-2 mt-6 px-6 py-3.5 min-h-11 rounded-full font-semibold transition-all ${
    variant === 'brand'
      ? 'bg-brand-700 text-white hover:bg-brand-600 shadow-lg'
      : 'gradient-accent text-brand-900 hover:shadow-lg hover:shadow-accent-400/25'
  }`

  const button = isExternalHref(buttonHref) ? (
    <a href={buttonHref} className={btnClass}>
      {buttonText}
      <ArrowRight className="w-4 h-4" />
    </a>
  ) : (
    <Link to={buttonHref} className={btnClass}>
      {buttonText}
      <ArrowRight className="w-4 h-4" />
    </Link>
  )

  return (
    <div
      className={`rounded-3xl p-8 sm:p-12 text-center ${
        variant === 'brand'
          ? 'gradient-accent'
          : 'bg-brand-700/50 border border-brand-500/20'
      }`}
    >
      <h3 className="section-heading text-2xl sm:text-3xl text-white">{title}</h3>
      {subtitle && <p className="mt-2 text-white/80 max-w-lg mx-auto">{subtitle}</p>}
      {button}
    </div>
  )
}
