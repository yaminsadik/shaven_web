import { motion, AnimatePresence } from 'framer-motion'
import { ShieldCheck, X } from 'lucide-react'
import { useUIStore } from '@/store/uiStore'

interface AgeGateModalProps {
  open: boolean
  onClose: () => void
}

export function AgeGateModal({ open, onClose }: AgeGateModalProps) {
  const acceptAgeGate = useUIStore((s) => s.acceptAgeGate)

  const handleAccept = () => {
    acceptAgeGate()
    onClose()
  }

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/80 backdrop-blur-md"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ duration: 0.3 }}
            className="relative w-full max-w-md bg-surface-800 rounded-3xl p-8 sm:p-10 border border-brand-500/20 shadow-2xl"
          >
            <button
              onClick={onClose}
              className="absolute top-4 right-4 p-2 text-blue-200/40 hover:text-blue-200/60 transition-colors"
              aria-label="Close"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="text-center">
              <div className="mx-auto w-16 h-16 rounded-2xl bg-purple-600/20 flex items-center justify-center mb-5">
                <ShieldCheck className="w-8 h-8 text-purple-400" />
              </div>
              <h2 className="text-2xl font-bold text-white">Age Verification</h2>
              <p className="mt-3 text-blue-200/50 text-sm leading-relaxed">
                This section contains products intended for adults 21 years of age and older.
                By entering, you confirm that you meet the legal age requirement.
              </p>
            </div>

            <div className="mt-8 flex flex-col gap-3">
              <button
                onClick={handleAccept}
                className="w-full py-3.5 rounded-full bg-purple-600 hover:bg-purple-500 text-white font-semibold transition-colors"
              >
                I am 21 or older — Enter
              </button>
              <button
                onClick={onClose}
                className="w-full py-3.5 rounded-full border border-brand-400/30 text-blue-200/50 hover:text-blue-200 hover:border-brand-400/50 font-medium transition-colors"
              >
                Go Back
              </button>
            </div>

            <p className="mt-6 text-center text-xs text-blue-200/30">
              Please drink responsibly. Must be 21+ to purchase alcohol products.
            </p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
