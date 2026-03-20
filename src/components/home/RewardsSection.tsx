import { Section, SectionHeader } from '@/components/layout/Section'
import { RewardsCard } from '@/components/ui/RewardsCard'
import { rewardsBenefits, loyaltyCard } from '@/data/rewards'
import { Link } from '@tanstack/react-router'
import { ArrowRight, Star } from 'lucide-react'

export function RewardsSection() {
  return (
    <Section variant="paper">
      <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
        <div>
          <SectionHeader title="Heaven Rewards" subtitle="Points on gas, food, and everything in between. Free to join." align="left" />
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {rewardsBenefits.map((b) => (
              <RewardsCard key={b.id} {...b} />
            ))}
          </div>
          <div className="mt-8">
            <Link
              to="/rewards"
              className="inline-flex items-center gap-2 px-6 py-3.5 min-h-11 rounded-full gradient-accent text-brand-900 font-semibold shadow-lg shadow-accent-400/25 hover:shadow-accent-400/40 transition-shadow"
            >
              Join Heaven Rewards
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>

        <div className="flex justify-center">
          <div className="w-full max-w-sm">
            <div className="relative rounded-3xl overflow-hidden gradient-accent p-6 sm:p-8 shadow-2xl shadow-accent-400/20">
              <div className="absolute top-4 right-4">
                <Star className="w-6 h-6 text-white/30" />
              </div>
              <div className="absolute -bottom-10 -right-10 w-40 h-40 rounded-full bg-white/5" />
              <div className="relative">
                <div className="flex items-center gap-2 mb-6">
                  <div className="w-8 h-8 rounded-lg bg-white/20 flex items-center justify-center text-xs font-bold text-white">
                    7H
                  </div>
                  <span className="text-sm font-semibold text-white/90">Heaven Rewards</span>
                </div>
                <p className="text-xs text-white/60 uppercase tracking-wider">Points Balance</p>
                <p className="price-text text-4xl text-white mt-1">{loyaltyCard.points}</p>
                <div className="mt-4 flex items-center justify-between">
                  <div>
                    <p className="text-xs text-white/60">Tier</p>
                    <p className="text-sm font-semibold text-white">{loyaltyCard.tier}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-xs text-white/60">{loyaltyCard.pointsToNext} pts to {loyaltyCard.nextTier}</p>
                    <div className="mt-1 w-24 h-1.5 rounded-full bg-white/20">
                      <div className="h-full w-3/5 rounded-full bg-white" />
                    </div>
                  </div>
                </div>
                <div className="mt-5 pt-4 border-t border-white/10">
                  <p className="text-xs text-white/50">{loyaltyCard.memberNumber}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  )
}
