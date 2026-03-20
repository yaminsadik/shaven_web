import { Link } from '@tanstack/react-router'
import { motion } from 'framer-motion'
import { MapPin, ArrowRight, Fuel } from 'lucide-react'
import { HeroOffersCarousel } from '@/components/home/HeroOffersCarousel'

export function HeroSection() {
  return (
    <section className="relative min-h-[max(85dvh,32rem)] flex flex-col overflow-hidden">
      {/* Full-bleed colored background */}
      <div className="absolute inset-0 gradient-brand" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(232,163,23,0.08),transparent_60%)]" />

      <div className="relative z-10 mx-auto max-w-7xl w-full px-4 sm:px-6 lg:px-8 pt-24 pb-8 sm:pb-10 flex-1 flex flex-col justify-center">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Left: text + CTAs */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
          >
            <div className="flex flex-wrap gap-2 mb-4">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 text-xs font-bold uppercase tracking-wider rounded-full bg-accent-400/15 text-accent-300 border border-accent-400/20">
                <Fuel className="w-3.5 h-3.5" />
                Fuel, food, drinks
              </span>
              <span className="inline-block px-3 py-1 text-xs font-bold uppercase tracking-wider rounded-full bg-white/10 text-blue-100/90 border border-white/15">
                Now Open Near You
              </span>
            </div>
            <h1 className="section-heading text-5xl sm:text-6xl md:text-7xl text-white text-balance">
              Your Stop.{' '}
              <span className="text-accent-400">Your Heaven.</span>
            </h1>
            <p className="mt-5 text-lg sm:text-xl text-blue-200/70 max-w-lg text-balance">
              Competitive fuel, hot food off the grill, ice-cold drinks, and rewards on every visit. Quick in, quick out.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row items-stretch sm:items-start gap-3 sm:gap-4">
              <Link
                to="/stores"
                className="inline-flex justify-center items-center gap-2 px-7 py-3.5 min-h-11 rounded-full gradient-accent text-brand-900 font-semibold text-base shadow-xl shadow-accent-400/25 hover:shadow-accent-400/40 transition-shadow"
              >
                <MapPin className="w-5 h-5" />
                Find a Store
              </Link>
              <Link
                to="/deals"
                className="inline-flex justify-center items-center gap-2 px-7 py-3.5 min-h-11 rounded-full border border-white/20 text-white font-semibold text-base hover:bg-white/10 backdrop-blur-sm transition-colors"
              >
                Today&apos;s Deals
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
            <p className="mt-4 text-sm text-blue-200/45 max-w-md">
              Most locations open early, late, or 24/7. Menu and fuel offers vary by store.
            </p>
          </motion.div>

          {/* Right: large product image */}
          <motion.div
            initial={{ opacity: 0, x: 40, scale: 0.95 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
            className="relative flex justify-center lg:justify-end"
          >
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1626645738196-c2a7c87a8f58?w=800&q=80" /* REPLACE: /media/hero/hero-product.jpg */
                alt="Crispy fried chicken, our signature item"
                className="w-80 sm:w-96 lg:w-[28rem] rounded-3xl shadow-2xl shadow-black/40 object-cover aspect-[4/5]"
              />
              {/* Floating badge */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="absolute -bottom-4 -left-4 sm:-left-8 bg-accent-400 text-brand-900 rounded-2xl px-5 py-3 shadow-xl"
              >
                <p className="price-text text-3xl leading-none">$4</p>
                <p className="text-xs font-semibold uppercase tracking-wide mt-0.5">Chicken Tenders</p>
              </motion.div>
              {/* Floating "NEW" tag */}
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.8, type: 'spring' }}
                className="absolute -top-3 -right-3 sm:-right-6 bg-warm-500 text-white rounded-full w-16 h-16 flex items-center justify-center shadow-lg"
              >
                <span className="text-sm font-black uppercase">NEW!</span>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      <div className="relative z-10 w-full mt-6 sm:mt-8 pb-12 sm:pb-14">
        <HeroOffersCarousel />
      </div>
    </section>
  )
}
