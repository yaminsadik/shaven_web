import { useEffect, useRef, useState } from 'react'
import { Link } from '@tanstack/react-router'
import { motion } from 'framer-motion'
import { MapPin } from 'lucide-react'
import { HeroOffersCarousel } from '@/components/home/HeroOffersCarousel'

export function HeroSection() {
  const videoRef = useRef<HTMLVideoElement>(null)
  const [isVideoPlaying, setIsVideoPlaying] = useState(false)
  const [hasVideoError, setHasVideoError] = useState(false)

  useEffect(() => {
    const video = videoRef.current
    if (!video) return

    let isCancelled = false

    const attemptPlay = async () => {
      video.defaultMuted = true
      video.muted = true
      video.playsInline = true

      try {
        await video.play()
      } catch {
        if (!isCancelled) {
          setIsVideoPlaying(false)
        }
      }
    }

    const handleLoadedData = () => {
      if (isCancelled) return
      setHasVideoError(false)
      void attemptPlay()
    }

    const handlePlaying = () => {
      if (isCancelled) return
      setHasVideoError(false)
      setIsVideoPlaying(true)
    }

    const handleError = () => {
      if (isCancelled) return
      setHasVideoError(true)
      setIsVideoPlaying(false)
    }

    const handleVisibilityChange = () => {
      if (document.visibilityState !== 'visible') return
      void attemptPlay()
    }

    video.addEventListener('loadeddata', handleLoadedData)
    video.addEventListener('playing', handlePlaying)
    video.addEventListener('error', handleError)
    document.addEventListener('visibilitychange', handleVisibilityChange)

    void attemptPlay()

    return () => {
      isCancelled = true
      video.removeEventListener('loadeddata', handleLoadedData)
      video.removeEventListener('playing', handlePlaying)
      video.removeEventListener('error', handleError)
      document.removeEventListener('visibilitychange', handleVisibilityChange)
    }
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
              <div className="relative aspect-[4/3] overflow-hidden rounded-3xl bg-white/5 shadow-2xl shadow-black/40">
                <img
                  src="/media/store-exterior.png"
                  alt=""
                  aria-hidden="true"
                  className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-500 ${
                    isVideoPlaying && !hasVideoError ? 'opacity-0' : 'opacity-100'
                  }`}
                />
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.12),transparent_55%)]" />
                <video
                  ref={videoRef}
                  autoPlay
                  muted
                  loop
                  playsInline
                  preload="auto"
                  poster="/media/store-exterior.png"
                  className={`relative z-10 h-full w-full object-cover transition-opacity duration-500 ${
                    isVideoPlaying && !hasVideoError ? 'opacity-100' : 'opacity-0'
                  }`}
                >
                  <source src="/media/hero/hero-mobile.mp4" type="video/mp4" />
                </video>
              </div>
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
