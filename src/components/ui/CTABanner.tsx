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
  const btnClass = `mt-6 inline-flex min-h-11 w-full items-center justify-center gap-2 rounded-full px-6 py-3.5 font-semibold transition-all sm:w-auto ${
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
      className={`rounded-3xl p-6 sm:p-10 md:p-12 ${
        variant === 'brand'
          ? 'gradient-accent'
          : 'bg-brand-700/50 border border-brand-500/20'
      }`}
    >
      <div className="flex flex-col items-start sm:items-center sm:text-center">
        <h3 className="section-heading text-2xl text-white sm:text-3xl">{title}</h3>
        {subtitle && <p className="mt-2 max-w-lg text-sm text-white/80 sm:text-base">{subtitle}</p>}
      </div>
      {button}
    </div>
  )
}
