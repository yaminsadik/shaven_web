import { Link } from '@tanstack/react-router'
import { motion } from 'framer-motion'
import { MapPin, ArrowRight } from 'lucide-react'

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Full-bleed colored background */}
      <div className="absolute inset-0 gradient-brand" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(232,163,23,0.08),transparent_60%)]" />

      <div className="relative z-10 mx-auto max-w-7xl w-full px-4 sm:px-6 lg:px-8 pt-24 pb-16">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Left — text + CTAs */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
          >
            <span className="inline-block mb-4 px-3 py-1 text-xs font-bold uppercase tracking-wider rounded-full bg-accent-400/15 text-accent-300 border border-accent-400/20">
              Now Open Near You
            </span>
            <h1 className="section-heading text-5xl sm:text-6xl md:text-7xl text-white text-balance">
              Your Stop.{' '}
              <span className="text-accent-400">Your Heaven.</span>
            </h1>
            <p className="mt-5 text-lg sm:text-xl text-blue-200/70 max-w-lg text-balance">
              Gas up, grab hot food off the roller grill, snag a fountain drink, and earn
              rewards every time. That's the 7th Heaven way.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row items-start gap-3 sm:gap-4">
              <Link
                to="/stores"
                className="flex items-center gap-2 px-7 py-3.5 rounded-full gradient-accent text-brand-900 font-semibold text-base shadow-xl shadow-accent-400/25 hover:shadow-accent-400/40 transition-shadow"
              >
                <MapPin className="w-5 h-5" />
                Find a Store
              </Link>
              <Link
                to="/food"
                className="flex items-center gap-2 px-7 py-3.5 rounded-full border border-white/20 text-white font-semibold text-base hover:bg-white/10 backdrop-blur-sm transition-colors"
              >
                See What's Hot
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </motion.div>

          {/* Right — large product image */}
          <motion.div
            initial={{ opacity: 0, x: 40, scale: 0.95 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
            className="relative flex justify-center lg:justify-end"
          >
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1626645738196-c2a7c87a8f58?w=800&q=80" /* REPLACE: /media/hero/hero-product.jpg */
                alt="Crispy fried chicken — our signature item"
                className="w-80 sm:w-96 lg:w-[28rem] rounded-3xl shadow-2xl shadow-black/40 object-cover aspect-[4/5]"
              />
              {/* Floating badge */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="absolute -bottom-4 -left-4 sm:-left-8 bg-accent-400 text-brand-900 rounded-2xl px-5 py-3 shadow-xl"
              >
                <p className="text-3xl font-bold leading-none">$4</p>
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

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <div className="w-6 h-10 rounded-full border-2 border-white/20 flex items-start justify-center p-1.5">
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ repeat: Infinity, duration: 1.8 }}
            className="w-1.5 h-1.5 rounded-full bg-accent-400"
          />
        </div>
      </motion.div>
    </section>
  )
}
