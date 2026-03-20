import { useEffect, useRef } from 'react'
import type { DragEvent, PointerEvent, MouseEvent, WheelEvent } from 'react'
import { Link } from '@tanstack/react-router'
import { homeHeroOffers } from '@/data/homeOffers'

export function HeroOffersCarousel() {
  const railRef = useRef<HTMLDivElement | null>(null)
  const suppressClickRef = useRef(false)
  const wheelTargetRef = useRef(0)
  const wheelFrameRef = useRef<number | null>(null)
  const bodyUserSelectRef = useRef('')
  const bodyCursorRef = useRef('')
  const dragStateRef = useRef({
    isDragging: false,
    didDrag: false,
    startX: 0,
    scrollLeft: 0,
    pointerId: null as number | null,
  })

  useEffect(() => {
    return () => {
      if (wheelFrameRef.current !== null) {
        window.cancelAnimationFrame(wheelFrameRef.current)
      }

      document.body.style.userSelect = bodyUserSelectRef.current
      document.body.style.cursor = bodyCursorRef.current
    }
  }, [])

  const animateWheelScroll = () => {
    const container = railRef.current

    if (!container) {
      wheelFrameRef.current = null
      return
    }

    const delta = wheelTargetRef.current - container.scrollLeft

    if (Math.abs(delta) < 0.5) {
      container.scrollLeft = wheelTargetRef.current
      wheelFrameRef.current = null
      return
    }

    container.scrollLeft += delta * 0.18
    wheelFrameRef.current = window.requestAnimationFrame(animateWheelScroll)
  }

  const stopWheelAnimation = () => {
    if (wheelFrameRef.current === null) return

    window.cancelAnimationFrame(wheelFrameRef.current)
    wheelFrameRef.current = null
  }

  const handleWheelScroll = (event: WheelEvent<HTMLDivElement>) => {
    const container = event.currentTarget
    const hasHorizontalOverflow = container.scrollWidth > container.clientWidth

    if (!hasHorizontalOverflow) return
    if (Math.abs(event.deltaY) <= Math.abs(event.deltaX)) return

    const maxScrollLeft = container.scrollWidth - container.clientWidth
    const baseTarget = wheelFrameRef.current === null ? container.scrollLeft : wheelTargetRef.current
    wheelTargetRef.current = Math.min(maxScrollLeft, Math.max(0, baseTarget + event.deltaY * 1.2))

    if (wheelFrameRef.current === null) {
      wheelFrameRef.current = window.requestAnimationFrame(animateWheelScroll)
    }

    event.preventDefault()
  }

  const handlePointerDown = (event: PointerEvent<HTMLDivElement>) => {
    if (event.pointerType === 'mouse' && event.button !== 0) return

    const container = event.currentTarget

    stopWheelAnimation()
    wheelTargetRef.current = container.scrollLeft
    container.style.scrollSnapType = 'none'
    container.setPointerCapture(event.pointerId)
    bodyUserSelectRef.current = document.body.style.userSelect
    bodyCursorRef.current = document.body.style.cursor
    document.body.style.userSelect = 'none'
    document.body.style.cursor = 'grabbing'
    window.getSelection()?.removeAllRanges()

    dragStateRef.current = {
      isDragging: true,
      didDrag: false,
      startX: event.clientX,
      scrollLeft: container.scrollLeft,
      pointerId: event.pointerId,
    }

    event.preventDefault()
  }

  const handlePointerMove = (event: PointerEvent<HTMLDivElement>) => {
    const state = dragStateRef.current

    if (!state.isDragging) return
    if (state.pointerId !== event.pointerId) return

    const container = event.currentTarget
    const deltaX = event.clientX - state.startX

    if (Math.abs(deltaX) > 4) {
      state.didDrag = true
      suppressClickRef.current = true
    }

    const maxScrollLeft = container.scrollWidth - container.clientWidth
    const nextScrollLeft = Math.min(maxScrollLeft, Math.max(0, state.scrollLeft - deltaX))

    container.scrollLeft = nextScrollLeft
    wheelTargetRef.current = nextScrollLeft
    event.preventDefault()
  }

  const endPointerDrag = (event?: PointerEvent<HTMLDivElement>) => {
    const container = railRef.current
    const { didDrag, pointerId } = dragStateRef.current

    if (event && pointerId !== event.pointerId) return

    dragStateRef.current.isDragging = false
    dragStateRef.current.didDrag = false
    dragStateRef.current.pointerId = null
    document.body.style.userSelect = bodyUserSelectRef.current
    document.body.style.cursor = bodyCursorRef.current

    if (container && pointerId !== null && container.hasPointerCapture(pointerId)) {
      container.releasePointerCapture(pointerId)
    }

    if (container) {
      window.setTimeout(() => {
        container.style.scrollSnapType = ''
      }, 0)
    }

    if (!didDrag) {
      suppressClickRef.current = false
      return
    }

    window.setTimeout(() => {
      suppressClickRef.current = false
    }, 0)
  }

  const handleOfferClickCapture = (event: MouseEvent<HTMLAnchorElement>) => {
    if (!suppressClickRef.current) return

    event.preventDefault()
    event.stopPropagation()
  }

  const preventNativeDrag = (event: DragEvent<HTMLElement>) => {
    event.preventDefault()
  }

  return (
    <div className="w-full">
      <div className="flex items-center justify-between gap-4 mb-3 px-4 sm:px-6 lg:px-8">
        <p className="text-[11px] sm:text-xs font-bold uppercase tracking-[0.2em] text-blue-200/45">
          Featured offers
        </p>
        <p className="text-[11px] sm:text-xs font-medium uppercase tracking-[0.16em] text-blue-200/30">
          Scroll for more
        </p>
      </div>
      <div
        ref={railRef}
        className="overflow-x-auto scrollbar-none snap-x snap-proximity scroll-smooth scroll-px-4 px-4 sm:px-6 lg:px-8 pb-2 cursor-grab active:cursor-grabbing select-none touch-pan-y"
        aria-label="Featured offers"
        onWheel={handleWheelScroll}
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={endPointerDrag}
        onPointerCancel={endPointerDrag}
        onDragStart={preventNativeDrag}
      >
        <div className="flex w-max gap-3 pr-4 sm:gap-4">
          {homeHeroOffers.map((offer) => (
            <div key={offer.id} className="w-[min(78vw,17.5rem)] snap-start sm:w-[18.5rem] shrink-0">
              <Link
                to={offer.href}
                className={`group block h-full rounded-2xl bg-gradient-to-br ${offer.accent} p-[1px] shadow-lg shadow-black/20 transition-transform duration-200 hover:scale-[1.02] active:scale-[0.99]`}
                onClickCapture={handleOfferClickCapture}
                onDragStart={preventNativeDrag}
                draggable={false}
              >
                <div className="relative isolate overflow-hidden rounded-[15px] border border-white/5 min-h-[8.75rem]">
                  <img
                    src={offer.image}
                    alt=""
                    aria-hidden="true"
                    className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                    draggable={false}
                  />
                  <div className={`absolute inset-0 bg-gradient-to-br ${offer.accent} opacity-35`} />
                  <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(8,14,35,0.16)_0%,rgba(8,14,35,0.52)_48%,rgba(8,14,35,0.96)_100%)]" />
                  <div className="relative z-10 flex h-full min-h-[8.75rem] flex-col justify-end px-4 py-3.5 sm:px-5 sm:py-4">
                    <p className="section-heading text-base sm:text-lg text-white leading-tight">{offer.title}</p>
                    <p className="price-text text-sm sm:text-base text-accent-300 mt-1">{offer.subtitle}</p>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
