import { Coins, Fuel, Zap, Crown } from 'lucide-react'

export const rewardsBenefits = [
  {
    id: 'earn-points',
    title: 'Points on Everything',
    description: 'Earn points every visit — gas, food, drinks, and snacks. 250 pts = $1 in savings.',
    icon: Coins,
  },
  {
    id: 'fuel-savings',
    title: 'Fuel Discounts',
    description: 'Members save on every fill-up. Gold & above earn even more per gallon.',
    icon: Fuel,
  },
  {
    id: 'bonus-days',
    title: 'Bonus Point Days',
    description: 'Diamond members get double point days monthly. Bonus events run every tier.',
    icon: Zap,
  },
  {
    id: 'free-stuff',
    title: 'Free Food & Drinks',
    description: 'Redeem for store credit — $1, $6, $11, $15, or $20 off your next purchase.',
    icon: Crown,
  },
]

export const rewardsTiers = [
  {
    name: 'Bronze',
    points: '0',
    perks: 'Base deals access • Birthday bonus',
    color: 'bg-amber-700',
  },
  {
    name: 'Silver',
    points: '5,000',
    perks: 'Early deal access • Birthday bonus • 1.25x earn rate',
    color: 'bg-stone-400',
  },
  {
    name: 'Gold',
    points: '10,000',
    perks: 'Exclusive Gold offers • Birthday double points • 1.5x earn rate',
    color: 'bg-accent-500',
  },
  {
    name: 'Platinum',
    points: '20,000',
    perks: 'Free monthly drink • Priority support • Platinum-only deals • 2x earn rate',
    color: 'bg-accent-400',
  },
  {
    name: 'Diamond',
    points: '50,000',
    perks: 'VIP deals • Double point days monthly • Free car wash monthly • 2.5x earn rate',
    color: 'bg-sky-400',
  },
]

export const loyaltyCard = {
  greetingLine: 'Welcome back',
  memberName: 'Heaven Rewards Member',
  memberNumber: '•••• •••• 7777',
  points: '1,240',
  tier: 'Bronze',
  nextTier: 'Silver',
  pointsToNext: '3,760',
}