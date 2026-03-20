import { Link } from '@tanstack/react-router'
import { StoreLocatorStrip } from './StoreLocatorStrip'
import { Instagram, Twitter, Facebook, Youtube } from 'lucide-react'

const footerLinks = {
  'Get To Know Us': [
    { label: 'About 7th Heaven', href: '/#about' },
    { label: 'Blog', href: '/#blog' },
    { label: 'Careers', href: '/#careers' },
    { label: 'Newsroom', href: '/#press' },
  ],
  'Franchise Info': [
    { label: 'Our Business Model', href: '/#franchise' },
    { label: 'Franchise Process', href: '/#franchise' },
    { label: 'Franchising for Veterans', href: '/#franchise' },
  ],
  'How Can We Help?': [
    { label: 'Contact Us', href: '/#contact' },
    { label: 'Feedback', href: '/#feedback' },
    { label: 'New Vendor Information', href: '/#vendors' },
    { label: 'Vendor Guidelines', href: '/#vendors' },
    { label: 'Financial Services', href: '/#services' },
    { label: 'Business Fuel Cards', href: '/#fuel-cards' },
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
  { icon: Facebook, href: '#', label: 'Facebook' },
  { icon: Instagram, href: '#', label: 'Instagram' },
  { icon: Twitter, href: '#', label: 'Twitter' },
  { icon: Youtube, href: '#', label: 'YouTube' },
]

export function Footer() {
  return (
    <>
      <StoreLocatorStrip />
      <footer className="bg-brand-900 border-t border-brand-600/20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 md:py-16">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
            {Object.entries(footerLinks).map(([title, links]) => (
              <div key={title}>
                <h3 className="text-sm font-bold text-white mb-4">{title}</h3>
                <ul className="space-y-2.5">
                  {links.map((link) => (
                    <li key={link.label}>
                      <Link
                        to={link.href}
                        className="text-sm text-blue-200/40 hover:text-accent-400 transition-colors"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}

            {/* Logo column */}
            <div className="flex flex-col items-start md:items-end">
              <Link to="/" className="flex items-center gap-2">
                <img src="/media/logo.png" alt="7th Heaven" className="w-16 h-16 rounded-xl object-contain" />
              </Link>
            </div>
          </div>

          {/* Legal + social row */}
          <div className="mt-12 pt-8 border-t border-brand-600/20">
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
              <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
                {legalLinks.map((link, i) => (
                  <span key={link} className="flex items-center gap-4">
                    <a href="#" className="text-xs text-blue-200/30 hover:text-blue-200/60 transition-colors">
                      {link}
                    </a>
                    {i < legalLinks.length - 1 && (
                      <span className="text-blue-200/15">|</span>
                    )}
                  </span>
                ))}
              </div>
              <div className="flex items-center gap-3">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    className="w-9 h-9 rounded-full bg-brand-700 flex items-center justify-center text-blue-200/40 hover:bg-accent-500 hover:text-brand-900 transition-colors"
                    aria-label={social.label}
                  >
                    <social.icon className="w-4 h-4" />
                  </a>
                ))}
              </div>
            </div>

            <p className="mt-6 text-xs text-blue-200/20">
              © {new Date().getFullYear()} 7th Heaven Convenience Stores, Inc. All rights reserved.
              7TH HEAVEN, Heaven Rewards, and the store design are registered trademarks.
            </p>
          </div>
        </div>
      </footer>
    </>
  )
}
