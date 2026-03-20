import { Link } from '@tanstack/react-router'
import { ArrowRight } from 'lucide-react'

interface CTABannerProps {
  title: string
  subtitle?: string
  buttonText: string
  buttonHref: string
  variant?: 'brand' | 'dark'
}

export function CTABanner({
  title,
  subtitle,
  buttonText,
  buttonHref,
  variant = 'brand',
}: CTABannerProps) {
  return (
    <div
      className={`rounded-3xl p-8 sm:p-12 text-center ${
        variant === 'brand'
          ? 'gradient-accent'
          : 'bg-brand-700/50 border border-brand-500/20'
      }`}
    >
      <h3 className="text-2xl sm:text-3xl font-bold text-white">{title}</h3>
      {subtitle && <p className="mt-2 text-white/80 max-w-lg mx-auto">{subtitle}</p>}
      <Link
        to={buttonHref}
        className={`inline-flex items-center gap-2 mt-6 px-6 py-3 rounded-full font-semibold transition-all ${
          variant === 'brand'
            ? 'bg-brand-700 text-white hover:bg-brand-600 shadow-lg'
            : 'gradient-accent text-brand-900 hover:shadow-lg hover:shadow-accent-400/25'
        }`}
      >
        {buttonText}
        <ArrowRight className="w-4 h-4" />
      </Link>
    </div>
  )
}
