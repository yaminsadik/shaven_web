import { useState, useEffect, useRef } from 'react'
import { Link, useLocation } from '@tanstack/react-router'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, MapPin, User, ChevronDown, Beer } from 'lucide-react'
import { useUIStore } from '@/store/uiStore'

const foodLinks = [
  { label: 'Fried Chicken', href: '/food' },
  { label: 'Pizza', href: '/food' },
  { label: 'Roller Grill', href: '/food' },
  { label: 'Breakfast', href: '/food' },
  { label: 'Fountain Drinks', href: '/food' },
  { label: 'Snacks', href: '/food' },
]

const drinksLinks = [
  { label: 'Coffee', href: '/food' },
  { label: 'Fountain & Slushies', href: '/food' },
  { label: 'Energy Drinks', href: '/food' },
  { label: 'Beer & Wine', href: '/21-plus' },
  { label: 'Bottled Water', href: '/food' },
  { label: 'Cold Pressed Juices', href: '/food' },
]

const rewardsLinks = [
  { label: 'Membership', href: '/rewards' },
  { label: 'Rewards Tiers', href: '/rewards' },
  { label: 'Fuel Savings', href: '/rewards' },
  { label: 'Mobile Checkout', href: '/app' },
  { label: 'Rewards Card', href: '/rewards' },
  { label: 'Community Discounts', href: '/deals' },
]

interface MegaMenuData {
  links: { label: string; href: string }[]
}

const navItems: {
  label: string
  href: string
  megaMenu?: MegaMenuData
}[] = [
  { label: 'Food', href: '/food', megaMenu: { links: foodLinks } },
  { label: 'Drinks', href: '/food', megaMenu: { links: drinksLinks } },
  { label: 'Rewards', href: '/rewards', megaMenu: { links: rewardsLinks } },
  { label: 'Deals', href: '/deals' },
  { label: 'Get the App', href: '/app' },
]

export function Navbar() {
  const { mobileMenuOpen, toggleMobileMenu, closeMobileMenu } = useUIStore()
  const [scrolled, setScrolled] = useState(false)
  const [activeMega, setActiveMega] = useState<string | null>(null)
  const megaTimeoutRef = useRef<ReturnType<typeof setTimeout> | undefined>(undefined)
  const location = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    closeMobileMenu()
    setActiveMega(null)
  }, [location.pathname, closeMobileMenu])

  const handleMegaEnter = (label: string) => {
    clearTimeout(megaTimeoutRef.current)
    setActiveMega(label)
  }

  const handleMegaLeave = () => {
    megaTimeoutRef.current = setTimeout(() => setActiveMega(null), 150)
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled || activeMega
          ? 'bg-brand-700/95 backdrop-blur-lg shadow-lg shadow-black/30 border-b border-brand-500/20'
          : 'bg-transparent'
      }`}
    >
      <nav className="mx-auto max-w-7xl flex items-center justify-between px-4 sm:px-6 lg:px-8 h-16 md:h-20">
        <Link to="/" className="flex items-center gap-2.5 group" aria-label="Home">
          <img src="/media/logo.png" alt="7th Heaven" className="w-9 h-9 rounded-lg object-contain" />
          <span className="section-heading text-lg tracking-tight text-white group-hover:text-accent-300 transition-colors hidden sm:block">
            7th Heaven
          </span>
        </Link>

        <div className="hidden lg:flex items-center gap-0.5">
          {navItems.map((item) => (
            <div
              key={item.label}
              className="relative"
              onMouseEnter={() => item.megaMenu && handleMegaEnter(item.label)}
              onMouseLeave={handleMegaLeave}
            >
              <Link
                to={item.href}
                className={`flex items-center gap-1 px-3.5 py-2 text-sm font-medium transition-colors rounded-lg hover:bg-white/5 ${
                  activeMega === item.label
                    ? 'text-accent-300'
                    : 'text-blue-100/80 hover:text-accent-300'
                }`}
              >
                {item.label}
                {item.megaMenu && (
                  <ChevronDown className={`w-3.5 h-3.5 transition-transform ${activeMega === item.label ? 'rotate-180' : ''}`} />
                )}
              </Link>
            </div>
          ))}
        </div>

        <div className="hidden lg:flex items-center gap-3">
          <Link
            to="/stores"
            className="flex items-center gap-1.5 text-sm font-medium text-blue-100/80 hover:text-accent-300 transition-colors"
          >
            <MapPin className="w-4 h-4" />
            Find Store
          </Link>
          <Link
            to="/rewards"
            className="flex items-center gap-1.5 p-2 text-blue-100/80 hover:text-accent-300 transition-colors rounded-full hover:bg-white/5"
          >
            <User className="w-5 h-5" />
          </Link>
        </div>

        <button
          onClick={toggleMobileMenu}
          className="lg:hidden p-2 text-blue-100 hover:text-white"
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </nav>

      {/* Mega menu dropdown */}
      <AnimatePresence>
        {activeMega && (
          <motion.div
            initial={{ opacity: 0, y: -4 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -4 }}
            transition={{ duration: 0.15 }}
            className="hidden lg:block absolute left-0 right-0 bg-brand-700/98 backdrop-blur-xl border-b border-brand-500/20"
            onMouseEnter={() => {
              clearTimeout(megaTimeoutRef.current)
            }}
            onMouseLeave={handleMegaLeave}
          >
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8">
              <div className="grid grid-cols-3 gap-x-16 gap-y-3">
                {navItems
                  .find((i) => i.label === activeMega)
                  ?.megaMenu?.links.map((link) => (
                    <Link
                      key={link.label}
                      to={link.href}
                      className="section-heading text-lg md:text-xl text-white hover:text-accent-300 transition-colors py-1"
                    >
                      {link.label}
                    </Link>
                  ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="lg:hidden bg-brand-700/98 backdrop-blur-xl border-t border-brand-500/20 overflow-hidden"
          >
            <div className="px-4 py-4 space-y-1">
              {navItems.map((item) => (
                <Link
                  key={item.label}
                  to={item.href}
                  className="block px-4 py-3 text-base font-medium text-blue-100 hover:text-accent-300 hover:bg-white/5 rounded-lg transition-colors"
                >
                  {item.label}
                </Link>
              ))}
              <Link
                to="/21-plus"
                className="flex items-center gap-2 px-4 py-3 text-base font-medium text-purple-200 hover:text-purple-100 hover:bg-purple-500/15 rounded-lg border border-purple-500/25 transition-colors"
              >
                <Beer className="w-5 h-5 shrink-0 opacity-90" />
                Beer, wine &amp; more (21+)
              </Link>
              <div className="pt-3 flex flex-col gap-2 border-t border-brand-500/20 mt-2">
                <Link
                  to="/stores"
                  className="flex items-center justify-center gap-2 px-4 py-3 text-sm font-medium text-blue-100 border border-brand-400/30 rounded-full hover:border-accent-400 transition-colors"
                >
                  <MapPin className="w-4 h-4" />
                  Find Store
                </Link>
                <Link
                  to="/rewards"
                  className="flex items-center justify-center gap-2 px-4 py-3 text-sm font-semibold rounded-full gradient-accent text-brand-900"
                >
                  <User className="w-4 h-4" />
                  My Account
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
