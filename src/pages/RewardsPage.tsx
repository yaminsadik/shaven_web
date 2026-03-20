import { useState } from 'react'
import { Section, SectionHeader } from '@/components/layout/Section'
import { RewardsCard } from '@/components/ui/RewardsCard'
import { CTABanner } from '@/components/ui/CTABanner'
import { rewardsBenefits, rewardsTiers, loyaltyCard } from '@/data/rewards'
import { motion, AnimatePresence } from 'framer-motion'
import { Star, Check, ChevronDown, Coffee } from 'lucide-react'

function ProfileBanner() {
  return (
    <section className="relative pt-32 pb-12 md:pt-40 md:pb-16 gradient-brand">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="section-heading text-3xl sm:text-4xl md:text-5xl text-white">
          {loyaltyCard.greetingLine}
        </h1>
        <p className="mt-2 text-base text-blue-100/80">{loyaltyCard.memberName}</p>
        <p className="mt-2 text-sm text-blue-200/50">
          Member Since: May 2023
        </p>
        <p className="text-xs text-blue-200/30 mt-1">
          Member ID: {loyaltyCard.memberNumber}
        </p>
      </div>
    </section>
  )
}

function TabNav({ activeTab, onTabChange }: { activeTab: string; onTabChange: (tab: string) => void }) {
  const tabs = ['My Rewards', 'Account']
  return (
    <div className="bg-surface-800 border-b border-brand-500/20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex items-center justify-center gap-8">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => onTabChange(tab)}
            className={`relative py-4 text-sm font-semibold transition-colors ${
              activeTab === tab
                ? 'text-white'
                : 'text-blue-200/50 hover:text-blue-200/80'
            }`}
          >
            {tab}
            {activeTab === tab && (
              <motion.div
                layoutId="tab-indicator"
                className="absolute bottom-0 left-0 right-0 h-0.5 bg-accent-400"
              />
            )}
          </button>
        ))}
      </div>
    </div>
  )
}

function StatusRing() {
  return (
    <div className="flex flex-col items-center">
      <h3 className="text-sm font-semibold text-blue-200/50 mb-6">My Status</h3>
      <div className="relative w-48 h-48">
        <svg viewBox="0 0 200 200" className="w-full h-full -rotate-90">
          <circle cx="100" cy="100" r="85" fill="none" stroke="rgba(255,255,255,0.1)" strokeWidth="10" />
          <circle
            cx="100" cy="100" r="85"
            fill="none" stroke="url(#statusGrad)" strokeWidth="10"
            strokeLinecap="round"
            strokeDasharray={`${2 * Math.PI * 85}`}
            strokeDashoffset={`${2 * Math.PI * 85 * 0.75}`}
          />
          <defs>
            <linearGradient id="statusGrad" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="var(--color-accent-400)" />
              <stop offset="100%" stopColor="var(--color-accent-600)" />
            </linearGradient>
          </defs>
        </svg>
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <p className="text-4xl font-bold text-white">{loyaltyCard.points}</p>
          <p className="text-xs font-semibold text-blue-200/50 uppercase tracking-wider">Points</p>
        </div>
      </div>
      <div className="mt-4 grid grid-cols-3 gap-x-6 text-center text-xs text-blue-200/30">
        <span>0</span>
        <span>2,500</span>
        <span>5,000</span>
      </div>
    </div>
  )
}

function AccordionTiers() {
  const [openTier, setOpenTier] = useState<string | null>(null)

  const pointTiers = [
    { name: '250 Points', perks: ['$1.00 store credit'] },
    { name: '1,500 Points', perks: ['$6.00 store credit'] },
    { name: '2,750 Points', perks: ['$11.00 store credit'] },
    { name: '3,750 Points', perks: ['$15.00 store credit'] },
    { name: '5,000 Points', perks: ['$20.00 store credit'] },
  ]

  return (
    <div>
      <div className="flex items-center gap-6 mb-4">
        <button className="text-sm font-semibold text-accent-400 border-b-2 border-accent-400 pb-1">
          Reward Menu
        </button>
        <button className="text-sm font-semibold text-blue-200/40 hover:text-blue-200/60 pb-1 transition-colors">
          Deals
        </button>
        <button className="text-sm font-semibold text-blue-200/40 hover:text-blue-200/60 pb-1 transition-colors">
          My Rewards
        </button>
      </div>
      <div className="space-y-1">
        {pointTiers.map((tier) => (
          <div key={tier.name}>
            <button
              onClick={() => setOpenTier(openTier === tier.name ? null : tier.name)}
              className="w-full flex items-center justify-between px-4 py-3 bg-brand-600/40 hover:bg-brand-600/60 transition-colors rounded-lg text-left"
            >
              <span className="section-heading text-sm text-white">{tier.name}</span>
              <ChevronDown
                className={`w-4 h-4 text-blue-200/50 transition-transform ${
                  openTier === tier.name ? 'rotate-180' : ''
                }`}
              />
            </button>
            <AnimatePresence initial={false}>
              {openTier === tier.name && (
                <motion.div
                  initial={{ opacity: 0, y: -4 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -4 }}
                  transition={{ duration: 0.15 }}
                  className="overflow-hidden"
                >
                  <div className="px-4 py-3 space-y-2">
                    {tier.perks.map((perk) => (
                      <div key={perk} className="flex items-center gap-2 text-sm text-blue-200/60">
                        <Check className="w-3.5 h-3.5 text-accent-400 shrink-0" />
                        {perk}
                      </div>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>
    </div>
  )
}

function PunchCard() {
  const filled = 1
  const total = 6
  return (
    <div className="mt-8 glass-card rounded-2xl p-6">
      <h3 className="text-sm font-bold text-blue-200/50 uppercase tracking-wider mb-1">Beverage Club</h3>
      <div className="flex items-center gap-2 mt-3">
        {Array.from({ length: total }).map((_, i) => (
          <div
            key={i}
            className={`w-9 h-9 rounded-full border-2 flex items-center justify-center ${
              i < filled
                ? 'border-accent-400 bg-accent-400/20'
                : 'border-blue-200/15 bg-transparent'
            }`}
          >
            {i < filled && <Coffee className="w-4 h-4 text-accent-400" />}
          </div>
        ))}
      </div>
      <p className="mt-3 text-xs text-blue-200/40">
        {total - filled} more to go!
      </p>
      <p className="mt-1 text-xs text-blue-200/30">
        Finish a punch card and earn a free item! Rules and products vary per punch card.
      </p>
    </div>
  )
}

function AccountTab() {
  const fields = [
    { label: 'First Name', value: 'Heaven' },
    { label: 'Last Name', value: 'Member' },
    { label: 'Account ID', value: loyaltyCard.memberNumber },
    { label: 'Email Address', value: 'member@7thheaven.com' },
    { label: 'Address', value: '63501' },
    { label: 'Country', value: 'United States' },
  ]

  return (
    <div className="max-w-2xl mx-auto">
      <div className="glass-card rounded-2xl p-6 sm:p-8">
        <h3 className="text-xl font-bold text-white mb-6 pb-4 border-b border-brand-500/20">Profile</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {fields.map((f) => (
            <div key={f.label}>
              <p className="text-xs font-bold text-blue-200/50 mb-1">{f.label}</p>
              <p className="text-sm text-white">{f.value}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="glass-card rounded-2xl p-6 sm:p-8 mt-6">
        <h3 className="text-xl font-bold text-white mb-6 pb-4 border-b border-brand-500/20">Preferences</h3>
        <div className="space-y-4">
          <label className="flex items-start gap-3 cursor-pointer">
            <input type="checkbox" defaultChecked className="mt-0.5 accent-accent-400" />
            <div>
              <p className="text-sm font-semibold text-white">Email Communication</p>
              <p className="text-xs text-blue-200/40 mt-0.5">Yes, I'd like to receive news, special offers and more from 7th Heaven.</p>
            </div>
          </label>
          <label className="flex items-start gap-3 cursor-pointer">
            <input type="checkbox" className="mt-0.5 accent-accent-400" />
            <div>
              <p className="text-sm font-semibold text-white">SMS Communication</p>
              <p className="text-xs text-blue-200/40 mt-0.5">Yes, I'd like to receive text alerts about deals and promotions.</p>
            </div>
          </label>
        </div>
      </div>
    </div>
  )
}

export function RewardsPage() {
  const [activeTab, setActiveTab] = useState('My Rewards')

  return (
    <>
      <ProfileBanner />
      <TabNav activeTab={activeTab} onTabChange={setActiveTab} />

      {activeTab === 'My Rewards' ? (
        <>
          <Section>
            <div className="grid lg:grid-cols-2 gap-10 lg:gap-16">
              <div>
                <StatusRing />
                <PunchCard />
              </div>
              <AccordionTiers />
            </div>
          </Section>

          <Section dark>
            <SectionHeader title="Member Benefits" subtitle="Free to join. Start earning on your first visit." />
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
              {rewardsBenefits.map((b) => (
                <RewardsCard key={b.id} {...b} />
              ))}
            </div>
          </Section>

          <Section variant="paper">
            <SectionHeader title="Rewards Tiers" subtitle="Stop in more, save more." />
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 md:gap-6">
              {rewardsTiers.map((tier, i) => (
                <motion.div
                  key={tier.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="glass-card rounded-2xl p-6 sm:p-8 text-center"
                >
                  <div className={`mx-auto w-12 h-12 rounded-full ${tier.color} flex items-center justify-center mb-4`}>
                    <Star className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="section-heading text-lg text-white">{tier.name}</h3>
                  <p className="text-xs text-blue-200/30 mt-1">
                    <span className="price-text text-sm text-accent-400">{tier.points}</span> pts to unlock
                  </p>
                  <div className="mt-4 space-y-2">
                    {tier.perks.split(' • ').map((perk) => (
                      <div key={perk} className="flex items-center gap-2 text-sm text-blue-200/70">
                        <Check className="w-3.5 h-3.5 text-accent-400 shrink-0" />
                        {perk}
                      </div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </Section>
        </>
      ) : (
        <Section variant="paper">
          <AccountTab />
        </Section>
      )}

      <Section dark>
        <CTABanner
          title="Start Earning Today"
          subtitle="Sign up is free and takes less than 30 seconds."
          buttonText="Get the App"
          buttonHref="/app"
        />
      </Section>
    </>
  )
}
