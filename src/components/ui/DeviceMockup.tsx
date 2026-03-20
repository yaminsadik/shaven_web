interface DeviceMockupProps {
  screenImage?: string
  className?: string
}

export function DeviceMockup({ screenImage, className = '' }: DeviceMockupProps) {
  return (
    <div className={`relative mx-auto ${className}`} style={{ maxWidth: 280 }}>
      {/* Phone frame */}
      <div className="relative rounded-[2.5rem] border-[6px] border-brand-500/40 bg-brand-800 p-2 shadow-2xl shadow-black/50">
        {/* Notch */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-5 bg-brand-600 rounded-b-2xl z-10" />
        {/* Screen */}
        <div className="rounded-[2rem] overflow-hidden aspect-[9/19.5] bg-brand-700">
          {screenImage ? (
            <img
              src={screenImage}
              alt="App screen preview"
              className="w-full h-full object-cover"
            />
          ) : (
            <div className="w-full h-full flex flex-col items-center justify-center p-6 bg-gradient-to-b from-brand-500 to-brand-700">
              <div className="w-16 h-16 rounded-2xl bg-white/20 backdrop-blur-sm flex items-center justify-center text-2xl font-bold text-white mb-4">
                7H
              </div>
              <p className="text-base font-bold text-white">7th Heaven</p>
              <p className="text-xs text-blue-200/70 mt-1">Rewards • Deals • Pay at Pump</p>
              <div className="mt-6 w-full space-y-2.5">
                <div className="h-7 rounded-lg bg-white/10 flex items-center px-3">
                  <span className="text-[9px] text-blue-200/50">⛽ Gas Prices Near You</span>
                </div>
                <div className="h-7 rounded-lg bg-white/10 flex items-center px-3">
                  <span className="text-[9px] text-blue-200/50">🎁 1,240 Points</span>
                </div>
                <div className="h-16 rounded-lg bg-white/10 flex items-center justify-center">
                  <span className="text-[9px] text-blue-200/40">Today's Deals</span>
                </div>
                <div className="h-7 rounded-lg bg-white/15 flex items-center justify-center">
                  <span className="text-[9px] text-blue-200/60 font-medium">Scan & Pay</span>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
