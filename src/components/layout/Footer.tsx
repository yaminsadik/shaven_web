import { Link } from '@tanstack/react-router'
import { StoreLocatorStrip } from './StoreLocatorStrip'
import { Instagram, Twitter, Facebook, Youtube } from 'lucide-react'

const footerLinks = {
  'Get To Know Us': [
    { label: 'About 7th Heaven', href: '/', placeholder: true as const },
    { label: 'Blog', href: '/', placeholder: true as const },
    { label: 'Careers', href: '/', placeholder: true as const },
    { label: 'Newsroom', href: '/', placeholder: true as const },
  ],
  'Franchise Info': [
    { label: 'Our Business Model', href: 'mailto:franchise@7thheaven.com' },
    { label: 'Franchise Process', href: 'mailto:franchise@7thheaven.com' },
    { label: 'Franchising for Veterans', href: 'mailto:franchise@7thheaven.com' },
  ],
  'How Can We Help?': [
    { label: 'Contact Us', href: 'mailto:hello@7thheaven.com' },
    { label: 'Feedback', href: 'mailto:feedback@7thheaven.com' },
    { label: 'New Vendor Information', href: '/', placeholder: true as const },
    { label: 'Vendor Guidelines', href: '/', placeholder: true as const },
    { label: 'Financial Services', href: '/', placeholder: true as const },
    { label: 'Business Fuel Cards', href: '/', placeholder: true as const },
  ],
  Download: [
    { label: '7th Heaven App', href: '/app' },
    { label: 'Delivery App', href: '/app' },
    { label: 'Fuel Pay App', href: '/app' },
  ],
}

const legalLinks = [
  'Terms & Conditions',
  'Privacy Notice',
  'FAQs',
  'Accessibility',
  'Your Privacy Choices',
]

const socialLinks = [
  { icon: Facebook, label: 'Facebook' },
  { icon: Instagram, label: 'Instagram' },
  { icon: Twitter, label: 'Twitter' },
  { icon: Youtube, label: 'YouTube' },
]

function FooterColumnLink({
  label,
  href,
  placeholder,
}: {
  label: string
  href: string
  placeholder?: boolean
}) {
  const classInert = 'text-sm text-blue-200/25 cursor-default'
  const classLink = 'text-sm text-blue-200/50 hover:text-accent-400 transition-colors'

  if (placeholder) {
    return (
      <span className={classInert} title="Coming soon">
        {label}
      </span>
    )
  }
  if (href.startsWith('mailto:')) {
    return (
      <a href={href} className={classLink}>
        {label}
      </a>
    )
  }
  return (
    <Link to={href} className={classLink}>
      {label}
    </Link>
  )
}

export function Footer() {
  return (
    <>
      <StoreLocatorStrip />
      <footer className="bg-brand-900 border-t border-brand-600/20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 md:py-16">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-8 md:gap-6">
            {Object.entries(footerLinks).map(([title, links]) => (
              <div key={title} className="min-w-0">
                <h3 className="section-heading text-sm text-white mb-4">{title}</h3>
                <ul className="space-y-2.5">
                  {links.map((link) => (
                    <li key={link.label}>
                      <FooterColumnLink
                        label={link.label}
                        href={link.href}
                        placeholder={'placeholder' in link ? link.placeholder : undefined}
                      />
                    </li>
                  ))}
                </ul>
              </div>
            ))}

            <div className="col-span-2 md:col-span-1 flex flex-col items-start md:items-end justify-start pt-2 md:pt-0">
              <Link to="/" className="flex flex-col items-start md:items-end gap-2 group">
                <img src="/media/logo.png" alt="7th Heaven" className="w-16 h-16 rounded-xl object-contain" />
                <span className="section-heading text-sm text-white/90 group-hover:text-accent-300 transition-colors hidden md:block">
                  7th Heaven
                </span>
              </Link>
            </div>
          </div>

          <div className="mt-12 pt-8 border-t border-brand-600/20">
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
              <div className="flex flex-wrap items-center gap-x-3 gap-y-2">
                {legalLinks.map((link, i) => (
                  <span key={link} className="inline-flex items-center gap-3">
                    <span className="text-xs text-blue-200/25 cursor-default" title="Coming soon">
                      {link}
                    </span>
                    {i < legalLinks.length - 1 && <span className="text-blue-200/15 hidden sm:inline">|</span>}
                  </span>
                ))}
              </div>
              <div className="flex items-center gap-3">
                {socialLinks.map((social) => (
                  <span
                    key={social.label}
                    title="Social profiles coming soon"
                    className="w-9 h-9 rounded-full bg-brand-700 flex items-center justify-center text-blue-200/30 cursor-not-allowed opacity-70"
                    aria-label={`${social.label} (coming soon)`}
                  >
                    <social.icon className="w-4 h-4" aria-hidden />
                  </span>
                ))}
              </div>
            </div>

            <p className="mt-6 text-xs text-blue-200/25">
              © {new Date().getFullYear()} 7th Heaven Convenience Stores, Inc. All rights reserved.
              7TH HEAVEN, Heaven Rewards, and the store design are registered trademarks.
            </p>
          </div>
        </div>
      </footer>
    </>
  )
}
