import { useState, useEffect, useRef } from 'react'
import { Link, useLocation } from '@tanstack/react-router'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, MapPin, User, ChevronDown, ShieldCheck } from 'lucide-react'
import { useUIStore } from '@/store/uiStore'
import { UrgencyStrip } from '@/components/layout/UrgencyStrip'

// --- Link data for simple mega-menus ---

const foodLinks = [
  { label: 'Fried Chicken', href: '/category/fried-chicken' },
  { label: 'Pizza', href: '/category/pizza' },
  { label: 'Roller Grill', href: '/category/roller-grill' },
  { label: 'Breakfast', href: '/category/breakfast' },
  { label: 'Fountain Drinks', href: '/category/fountain-drinks' },
  { label: 'Snacks', href: '/category/snacks' },
]

const drinksLinks = [
  { label: 'Coffee', href: '/category/coffee' },
  { label: 'Fountain & Slushies', href: '/category/fountain-slushies' },
  { label: 'Energy Drinks', href: '/category/energy-drinks' },
  { label: 'Beer & Wine', href: '/category/beer' },
  { label: 'Bottled Water', href: '/category/bottled-water' },
  { label: 'Cold Pressed Juices', href: '/category/cold-pressed-juices' },
]

const rewardsLinks = [
  { label: 'Membership', href: '/category/membership' },
  { label: 'Rewards Tiers', href: '/category/rewards-tiers' },
  { label: 'Fuel Savings', href: '/category/fuel-savings-rewards' },
  { label: 'Mobile Checkout', href: '/category/mobile-checkout' },
  { label: 'Rewards Card', href: '/category/rewards-card' },
  { label: 'Community Discounts', href: '/category/community-discounts' },
]

// --- Rich mega-menu types ---

interface MegaMenuLink {
  label: string
  href: string
  subText?: string
  icon?: string
  badge?: string
}

interface MegaMenuColumn {
  heading: string
  links: MegaMenuLink[]
}

interface MegaMenuHeader {
  title: string
  badge?: string
  urgency?: string
}

interface MegaMenuData {
  mode: 'simple' | 'rich'
  columns?: MegaMenuColumn[]
  links?: { label: string; href: string }[]
  header?: MegaMenuHeader
  accentColor?: 'amber' | 'purple'
}

// --- Deals & Promos mega-menu columns ---

const dealsColumns: MegaMenuColumn[] = [
  {
    heading: 'Deal Types',
    links: [
      { label: '🔥 Flash Deals', href: '/category/flash-deals' },
      { label: '⭐ Featured Deals', href: '/category/featured-deals' },
      { label: '🤝 Combo Deals', href: '/category/combo-deals' },
      { label: '💰 Everyday Value', href: '/category/everyday-value' },
      { label: '🎟️ Coupons & Clippables', href: '/category/coupons' },
      { label: '📅 Limited Time', href: '/category/limited-time' },
    ],
  },
  {
    heading: 'Deal Categories',
    links: [
      { label: '🍕 Hot Food Deals', href: '/category/hot-food-deals' },
      { label: '☕ Drinks Deals', href: '/category/drinks-deals' },
      { label: '🍿 Snacks Deals', href: '/category/snacks-deals' },
      { label: '🥐 Bakery Deals', href: '/category/bakery-deals' },
      { label: '⛽ Fuel Savings', href: '/category/fuel-savings' },
      { label: '🔞 21+ Member Deals', href: '/category/21-plus-coupons', icon: 'shield' },
    ],
  },
]

// --- 21+ Savings mega-menu columns ---

const adultColumns: MegaMenuColumn[] = [
  {
    heading: 'Tobacco & Nicotine',
    links: [
      { label: '🚬 Cigarettes', href: '/category/cigarettes', subText: 'Marlboro, Newport, Camel, Pall Mall' },
      { label: '💨 Vape & Disposables', href: '/category/vape', subText: 'Vuse, NJOY, Lost Mary, Elf Bar' },
      { label: '🫧 Nicotine Pouches', href: '/category/pouches', subText: 'ZYN, On!, VELO, Rogue' },
      { label: '🌿 Dip & Snuff', href: '/category/snuff', subText: 'Copenhagen, Grizzly, Skoal' },
    ],
  },
  {
    heading: 'Alcohol',
    links: [
      { label: '🍺 Beer', href: '/category/beer', subText: 'Domestic, Import, Craft, Seltzer' },
      { label: '🍷 Wine', href: '/category/wine', subText: 'Red, White, Rosé, Sparkling' },
      { label: '🥃 Liquor & Spirits', href: '/category/liquor', subText: 'Whiskey, Vodka, Rum, Tequila' },
      { label: '🍹 Seltzers & RTD', href: '/category/seltzers', subText: 'Hard seltzer, wine coolers, canned cocktails' },
    ],
  },
  {
    heading: 'Alternative & Lifestyle',
    links: [
      { label: '🌬️ Bongs & Accessories', href: '/category/smoking-accessories', subText: 'Glassware, papers, accessories', badge: '18+' },
      { label: '🌱 Kratom & Botanicals', href: '/category/kratom', subText: 'Capsules, powder, extracts', badge: '18+' },
      { label: '🎫 21+ Coupons', href: '/category/21-plus-coupons', subText: 'Bonus points on tobacco & alcohol' },
      { label: '🏷️ This Week\'s Savings', href: '/category/weekly-savings', subText: 'Price specials — in store only' },
    ],
  },
]

// --- Nav items ---

interface NavItem {
  label: string
  href: string
  megaMenu?: MegaMenuData
  isCta?: boolean
  prefixIcon?: 'shield' | 'mappin'
}

const navItems: NavItem[] = [
  { label: 'Food', href: '/food', megaMenu: { mode: 'simple', links: foodLinks } },
  { label: 'Drinks', href: '/food', megaMenu: { mode: 'simple', links: drinksLinks } },
  {
    label: 'Deals & Promos',
    href: '/deals',
    megaMenu: {
      mode: 'rich',
      columns: dealsColumns,
      header: { title: "Today's Best Deals", badge: '47 Active Deals', urgency: '⚡ 3 deals expire tonight' },
      accentColor: 'amber',
    },
  },
  {
    label: '21+ Savings',
    href: '/21-plus',
    prefixIcon: 'shield',
    megaMenu: {
      mode: 'rich',
      columns: adultColumns,
      header: { title: 'Verified Adult Section', badge: undefined, urgency: 'Must be 21+ to purchase age-restricted products.' },
      accentColor: 'purple',
    },
  },
  { label: 'Rewards', href: '/rewards', megaMenu: { mode: 'simple', links: rewardsLinks } },
  { label: 'Find Store', href: '/stores', prefixIcon: 'mappin' },
]

// --- Render helpers ---

function NavItemIcon({ icon }: { icon: NavItem['prefixIcon'] }) {
  if (icon === 'shield') return <ShieldCheck className="w-4 h-4 text-purple-400" />
  if (icon === 'mappin') return <MapPin className="w-4 h-4" />
  return null
}

function SimpleMegaMenu({ links }: { links: { label: string; href: string }[] }) {
  return (
    <div className="grid grid-cols-3 gap-x-16 gap-y-3">
      {links.map((link) => (
        <Link
          key={link.label}
          to={link.href}
          className="text-xl font-bold text-white hover:text-accent-300 transition-colors py-1"
        >
          {link.label}
        </Link>
      ))}
    </div>
  )
}

function RichMegaMenu({ data }: { data: MegaMenuData }) {
  const { columns = [], header, accentColor } = data

  return (
    <div>
      {header && (
        <div className="mb-6 flex flex-wrap items-center gap-3">
          {accentColor === 'purple' && <ShieldCheck className="w-5 h-5 text-purple-400" />}
          <h3 className="text-lg font-bold text-white">{header.title}</h3>
          {header.badge && (
            <span className="rounded-full bg-amber-500/20 px-3 py-0.5 text-xs font-semibold text-amber-300">
              {header.badge}
            </span>
          )}
          {header.urgency && accentColor === 'amber' && (
            <span className="flex items-center gap-1 text-xs text-red-400">
              <span className="inline-block w-1.5 h-1.5 rounded-full bg-red-400 animate-pulse" />
              {header.urgency}
            </span>
          )}
          {header.urgency && accentColor === 'purple' && (
            <span className="text-xs text-blue-200/50">{header.urgency}</span>
          )}
        </div>
      )}
      <div className="flex gap-0">
        {columns.map((col, ci) => (
          <div
            key={col.heading}
            className={`flex-1 px-6 first:pl-0 last:pr-0 ${
              ci < columns.length - 1 ? 'border-r border-brand-500/20' : ''
            }`}
          >
            <h4 className="uppercase text-xs tracking-widest text-blue-200/30 mb-3">
              {col.heading}
            </h4>
            <div className="space-y-2.5">
              {col.links.map((link) => {
                const isMuted = !!link.badge && link.badge === '18+'
                return (
                  <Link
                    key={link.href + link.label}
                    to={link.href}
                    className="group block"
                  >
                    <span className={`flex items-center gap-1.5 ${
                      isMuted
                        ? 'text-lg font-bold text-blue-100/60 group-hover:text-accent-300'
                        : 'text-xl font-bold text-white group-hover:text-accent-300'
                    } transition-colors`}>
                      {link.label}
                      {link.icon === 'shield' && (
                        <ShieldCheck className="w-4 h-4 text-purple-400" />
                      )}
                      {link.badge && (
                        <span className="ml-1 rounded-full bg-purple-500/20 px-2 py-0.5 text-[10px] font-semibold text-purple-300">
                          {link.badge}
                        </span>
                      )}
                    </span>
                    {link.subText && (
                      <span className="block text-xs text-blue-200/40 mt-0.5">
                        {link.subText}
                      </span>
                    )}
                  </Link>
                )
              })}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

// --- Main Navbar ---

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

  const activeItem = navItems.find((i) => i.label === activeMega)
  const activeAccent = activeItem?.megaMenu?.accentColor

  const mainNavItems = navItems.filter((i) => !i.isCta)
  const ctaItem = navItems.find((i) => i.isCta)

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled || activeMega
          ? 'bg-brand-700/95 backdrop-blur-lg shadow-lg shadow-black/30 border-b border-brand-500/20'
          : 'bg-transparent'
      }`}
    >
      <UrgencyStrip />
      <nav className="mx-auto max-w-7xl flex items-center justify-between px-4 sm:px-6 lg:px-8 h-16 md:h-20">
        <Link to="/" className="flex items-center gap-2.5 group" aria-label="Home">
          <img src="/media/logo.png" alt="7th Heaven" className="w-9 h-9 rounded-lg object-contain" />
          <span className="section-heading text-lg tracking-tight text-white group-hover:text-accent-300 transition-colors hidden sm:block">
            7th Heaven
          </span>
        </Link>

        <div className="hidden lg:flex items-center gap-0.5">
          {mainNavItems.map((item) => (
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
                {item.prefixIcon && <NavItemIcon icon={item.prefixIcon} />}
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
            to="/rewards"
            className="flex items-center gap-1.5 p-2 text-blue-100/80 hover:text-accent-300 transition-colors rounded-full hover:bg-white/5"
          >
            <User className="w-5 h-5" />
          </Link>
          {ctaItem && (
            <Link
              to={ctaItem.href}
              className="flex items-center gap-1.5 px-4 py-2 text-sm font-semibold rounded-full gradient-accent text-brand-900 hover:shadow-lg hover:shadow-accent-400/20 transition-shadow"
            >
              {ctaItem.label}
            </Link>
          )}
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
        {activeMega && activeItem?.megaMenu && (
          <motion.div
            initial={{ opacity: 0, y: -4 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -4 }}
            transition={{ duration: 0.15 }}
            className={`hidden lg:block absolute left-0 right-0 bg-brand-700/98 backdrop-blur-xl border-b border-brand-500/20 ${
              activeAccent === 'purple' ? 'border-t-2 border-t-purple-500/40' : ''
            }`}
            onMouseEnter={() => {
              clearTimeout(megaTimeoutRef.current)
            }}
            onMouseLeave={handleMegaLeave}
          >
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8">
              {activeItem.megaMenu.mode === 'simple' && activeItem.megaMenu.links && (
                <SimpleMegaMenu links={activeItem.megaMenu.links} />
              )}
              {activeItem.megaMenu.mode === 'rich' && (
                <RichMegaMenu data={activeItem.megaMenu} />
              )}
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
              {navItems.filter((i) => !i.isCta).map((item) => (
                <Link
                  key={item.label}
                  to={item.href}
                  className="flex items-center gap-2 px-4 py-3 text-base font-medium text-blue-100 hover:text-accent-300 hover:bg-white/5 rounded-lg transition-colors"
                >
                  {item.prefixIcon && <NavItemIcon icon={item.prefixIcon} />}
                  {item.label}
                </Link>
              ))}
              <Link
                to="/21-plus"
                className="flex items-center gap-2 px-4 py-3 text-base font-medium text-purple-200 hover:text-purple-100 hover:bg-purple-500/15 rounded-lg border border-purple-500/25 transition-colors"
              >
                <ShieldCheck className="w-5 h-5 shrink-0 opacity-90 text-purple-400" />
                Beer, wine &amp; more (21+)
              </Link>
              <div className="pt-3 flex flex-col gap-2 border-t border-brand-500/20 mt-2">
                {ctaItem && (
                  <Link
                    to={ctaItem.href}
                    className="flex items-center justify-center gap-2 px-4 py-3 text-sm font-semibold rounded-full gradient-accent text-brand-900"
                  >
                    {ctaItem.label}
                  </Link>
                )}
                <Link
                  to="/rewards"
                  className="flex items-center justify-center gap-2 px-4 py-3 text-sm font-medium text-blue-100 border border-brand-400/30 rounded-full hover:border-accent-400 transition-colors"
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
