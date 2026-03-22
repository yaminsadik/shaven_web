import { useEffect, useRef } from 'react'
import { Link } from '@tanstack/react-router'
import { motion } from 'framer-motion'
import { MapPin } from 'lucide-react'
import { HeroOffersCarousel } from '@/components/home/HeroOffersCarousel'

export function HeroSection() {
  const videoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    const v = videoRef.current
    if (!v) return
    v.muted = true
    v.play().catch(() => {})
  }, [])

  return (
    <section className="relative min-h-[100dvh] sm:min-h-[max(90dvh,32rem)] lg:min-h-[max(85dvh,32rem)] flex flex-col overflow-hidden">
      {/* Full-bleed colored background */}
      <div className="absolute inset-0 gradient-brand" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(232,163,23,0.08),transparent_60%)]" />

      <div className="relative z-10 mx-auto max-w-7xl w-full px-4 sm:px-6 lg:px-8 pt-20 sm:pt-24 pb-6 sm:pb-10 flex-1 flex flex-col justify-center">
        <div className="grid sm:grid-cols-2 gap-8 sm:gap-10 lg:gap-16 items-center">
          {/* Left: text + CTAs */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
          >
            <h1 className="section-heading text-4xl xs:text-5xl sm:text-5xl md:text-6xl lg:text-6xl text-white text-balance leading-tight">
              <span className="text-accent-400">Deals, Rewards,</span>{' '}
              and Everyday Convenience.
            </h1>
            <p className="mt-4 sm:mt-5 text-base sm:text-lg lg:text-xl text-blue-200/70 max-w-lg text-balance">
              From fuel and hot food to drinks and daily essentials, 7th Heaven helps customers save more on the stops they already make.
            </p>

            <div className="mt-6 sm:mt-8 flex flex-col xs:flex-row items-stretch xs:items-start gap-3 sm:gap-4">
              <Link
                to="/app"
                className="inline-flex justify-center items-center gap-2 px-6 sm:px-7 py-3 sm:py-3.5 min-h-11 rounded-full gradient-accent text-brand-900 font-semibold text-sm sm:text-base shadow-xl shadow-accent-400/25 hover:shadow-accent-400/40 transition-shadow"
              >
                Get the App
              </Link>
              <Link
                to="/stores"
                className="inline-flex justify-center items-center gap-2 px-6 sm:px-7 py-3 sm:py-3.5 min-h-11 rounded-full border border-white/20 text-white font-semibold text-sm sm:text-base hover:bg-white/10 backdrop-blur-sm transition-colors"
              >
                <MapPin className="w-4 h-4 sm:w-5 sm:h-5" />
                Find a Store
              </Link>
            </div>
            <p className="mt-3 sm:mt-4 text-xs sm:text-sm text-blue-200/45 max-w-md">
              Open 24/7
            </p>
          </motion.div>

          {/* Right: large product image */}
          <motion.div
            initial={{ opacity: 0, x: 40, scale: 0.95 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
            className="relative flex justify-center items-center py-6 px-8 sm:py-8 sm:px-10"
          >
            <div className="relative w-full max-w-[20rem] xs:max-w-[24rem] sm:max-w-[32rem] lg:max-w-[40rem]">
              <video
                ref={videoRef}
                autoPlay
                muted
                loop
                playsInline
                preload="auto"
                className="w-full rounded-3xl shadow-2xl shadow-black/40 object-cover aspect-[4/3]"
              >
                <source src="/media/hero/hero.mp4" type="video/mp4" />
              </video>
            </div>
          </motion.div>
        </div>
      </div>

      <div className="relative z-10 w-full mt-4 sm:mt-6 lg:mt-8 pb-10 sm:pb-12 lg:pb-14">
        <HeroOffersCarousel />
      </div>
    </section>
  )
}
