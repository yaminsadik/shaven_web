import { Flame, Coffee, Gift, Tag, Fuel, Beer, Wind, Leaf } from 'lucide-react'

export const homeCategories = [
  {
    id: 'hot-food',
    title: 'Hot Food',
    subtitle: 'Roller grill & kitchen',
    icon: Flame,
    color: 'from-orange-500 to-red-600',
    href: '/category/fried-chicken',
    /* REPLACE: /media/categories/hot-food.jpg */
    image: 'https://images.unsplash.com/photo-1626645738196-c2a7c87a8f58?w=600&q=80',
  },
  {
    id: 'drinks',
    title: 'Fountain & Coffee',
    subtitle: 'Ice cold or piping hot',
    icon: Coffee,
    color: 'from-sky-500 to-blue-600',
    href: '/category/coffee',
    /* REPLACE: /media/categories/drinks.jpg */
    image: 'https://images.unsplash.com/photo-1461023058943-07fcbe16d735?w=600&q=80',
  },
  {
    id: 'fuel',
    title: 'Fuel Up',
    subtitle: 'Gas & diesel',
    icon: Fuel,
    color: 'from-emerald-500 to-teal-600',
    href: '/category/fuel-savings',
    /* REPLACE: /media/categories/fuel.jpg */
    image: 'https://images.unsplash.com/photo-1565793979803-ca4e3444ee95?w=600&q=80',
  },
  {
    id: 'deals',
    title: 'Deals',
    subtitle: 'Everyday low prices',
    icon: Tag,
    color: 'from-amber-500 to-orange-600',
    href: '/category/featured-deals',
    /* REPLACE: /media/categories/deals.jpg */
    image: 'https://images.unsplash.com/photo-1607082350899-7e105aa886ae?w=600&q=80',
  },
  {
    id: 'rewards',
    title: 'Rewards',
    subtitle: 'Earn on every visit',
    icon: Gift,
    color: 'from-yellow-500 to-amber-600',
    href: '/category/membership',
    /* REPLACE: /media/categories/rewards.jpg */
    image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&q=80',
  },
  {
    id: '21-plus',
    title: 'Beer & Wine',
    subtitle: 'Cold beer cave',
    icon: Beer,
    color: 'from-purple-500 to-purple-700',
    href: '/category/beer',
    /* REPLACE: /media/categories/21-plus.jpg */
    image: 'https://images.unsplash.com/photo-1535958636474-b021ee887b13?w=600&q=80',
  },
  {
    id: 'tobacco',
    title: 'Tobacco & Vape',
    subtitle: 'Cigarettes, pouches & vape',
    icon: Wind,
    color: 'from-slate-500 to-slate-700',
    href: '/category/cigarettes',
    image: 'https://images.unsplash.com/photo-1574169208507-84376144848b?w=600&q=80',
  },
  {
    id: 'kratom',
    title: 'Kratom & Botanicals',
    subtitle: 'Natural wellness products',
    icon: Leaf,
    color: 'from-green-600 to-emerald-800',
    href: '/category/kratom',
    image: 'https://images.unsplash.com/photo-1544787219-7f47ccb76574?w=600&q=80',
  },
  {
    id: 'smoking',
    title: 'Smoking Accessories',
    subtitle: 'Glassware, papers & more',
    icon: Flame,
    color: 'from-stone-500 to-stone-700',
    href: '/category/smoking-accessories',
    image: 'https://images.unsplash.com/photo-1527668752968-14dc70a27c95?w=600&q=80',
  },
]
