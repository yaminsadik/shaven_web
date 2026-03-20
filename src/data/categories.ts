import { Flame, Coffee, Gift, Tag, Fuel, Beer } from 'lucide-react'

export const homeCategories = [
  {
    id: 'hot-food',
    title: 'Hot Food',
    subtitle: 'Roller grill & kitchen',
    icon: Flame,
    color: 'from-orange-500 to-red-600',
    href: '/food',
    /* REPLACE: /media/categories/hot-food.jpg */
    image: 'https://images.unsplash.com/photo-1626645738196-c2a7c87a8f58?w=600&q=80',
  },
  {
    id: 'drinks',
    title: 'Fountain & Coffee',
    subtitle: 'Ice cold or piping hot',
    icon: Coffee,
    color: 'from-sky-500 to-blue-600',
    href: '/food',
    /* REPLACE: /media/categories/drinks.jpg */
    image: 'https://images.unsplash.com/photo-1461023058943-07fcbe16d735?w=600&q=80',
  },
  {
    id: 'fuel',
    title: 'Fuel Up',
    subtitle: 'Gas & diesel',
    icon: Fuel,
    color: 'from-emerald-500 to-teal-600',
    href: '/stores',
    /* REPLACE: /media/categories/fuel.jpg */
    image: 'https://images.unsplash.com/photo-1565793979803-ca4e3444ee95?w=600&q=80',
  },
  {
    id: 'deals',
    title: 'Deals',
    subtitle: 'Everyday low prices',
    icon: Tag,
    color: 'from-amber-500 to-orange-600',
    href: '/deals',
    /* REPLACE: /media/categories/deals.jpg */
    image: 'https://images.unsplash.com/photo-1607082350899-7e105aa886ae?w=600&q=80',
  },
  {
    id: 'rewards',
    title: 'Rewards',
    subtitle: 'Earn on every visit',
    icon: Gift,
    color: 'from-yellow-500 to-amber-600',
    href: '/rewards',
    /* REPLACE: /media/categories/rewards.jpg */
    image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&q=80',
  },
  {
    id: '21-plus',
    title: 'Beer & Wine',
    subtitle: 'Cold beer cave',
    icon: Beer,
    color: 'from-purple-500 to-purple-700',
    href: '/21-plus',
    /* REPLACE: /media/categories/21-plus.jpg */
    image: 'https://images.unsplash.com/photo-1535958636474-b021ee887b13?w=600&q=80',
  },
]
