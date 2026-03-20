import { Smartphone, Fuel, Bell, Wallet } from 'lucide-react'

export const appFeatures = [
  {
    id: 'rewards-tracking',
    title: 'Track Your Rewards',
    description: 'See your points, tier, and available freebies. Scan at the register or pump.',
    icon: Wallet,
  },
  {
    id: 'fuel-pay',
    title: 'Pay at the Pump',
    description: 'Link your card, save on gas, and skip the walk inside to pay.',
    icon: Fuel,
  },
  {
    id: 'deals',
    title: 'Clip Deals',
    description: 'Digital coupons on snacks, drinks, and combos. New deals every week.',
    icon: Smartphone,
  },
  {
    id: 'notifications',
    title: 'Deal Alerts',
    description: 'Get notified about bonus point days and limited-time combos.',
    icon: Bell,
  },
]
