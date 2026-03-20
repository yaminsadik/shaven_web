import { Coins, Fuel, Zap, Crown } from 'lucide-react'

export const rewardsBenefits = [
  {
    id: 'earn-points',
    title: 'Points on Everything',
    description: '10 points per $1 spent on gas, food, drinks, and snacks.',
    icon: Coins,
  },
  {
    id: 'fuel-savings',
    title: 'Fuel Discounts',
    description: 'Members save 5¢/gal every fill-up. Gold members save 10¢.',
    icon: Fuel,
  },
  {
    id: 'bonus-days',
    title: 'Bonus Point Days',
    description: 'Double and triple point weekends every month.',
    icon: Zap,
  },
  {
    id: 'free-stuff',
    title: 'Free Food & Drinks',
    description: 'Cash in points for free fountain drinks, coffee, snacks, and roller grill items.',
    icon: Crown,
  },
]

export const rewardsTiers = [
  { name: 'Member', points: '0', perks: '10pts/$1 • 5¢/gal fuel discount', color: 'bg-stone-600' },
  { name: 'Silver', points: '500', perks: 'Birthday freebie • Bonus offers', color: 'bg-stone-400' },
  { name: 'Gold', points: '2,000', perks: 'Free monthly drink • 10¢/gal off', color: 'bg-accent-500' },
  { name: 'Platinum', points: '5,000', perks: 'Surprise freebies • 15¢/gal off', color: 'bg-accent-400' },
]

export const loyaltyCard = {
  greetingLine: 'Welcome back',
  memberName: 'Heaven Rewards Member',
  memberNumber: '•••• •••• 7777',
  points: '1,240',
  tier: 'Silver',
  nextTier: 'Gold',
  pointsToNext: '760',
}
