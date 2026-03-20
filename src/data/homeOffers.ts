export interface HomeHeroOffer {
  id: string
  title: string
  subtitle: string
  href: string
  image: string
  /** Tailwind gradient from-to classes (without bg-gradient-to-br) */
  accent: string
}

export const homeHeroOffers: HomeHeroOffer[] = [
  {
    id: 'fountain',
    title: 'Any size fountain',
    subtitle: '$0.99 all day',
    href: '/food',
    image: '/media/promotions/offer-fountain-web.jpg',
    accent: 'from-cyan-600/90 to-blue-800/90',
  },
  {
    id: 'roller',
    title: '2 roller items + drink',
    subtitle: '$3 combo',
    href: '/deals',
    image: '/media/promotions/offer-roller-web.jpg',
    accent: 'from-orange-600/90 to-red-800/90',
  },
  {
    id: 'fuel',
    title: 'Members save at the pump',
    subtitle: '5¢ off per gallon',
    href: '/rewards',
    image: '/media/promotions/offer-fuel-web.jpg',
    accent: 'from-emerald-600/90 to-teal-900/90',
  },
  {
    id: 'coffee',
    title: 'Large coffee',
    subtitle: '$1.49 before 10am',
    href: '/food',
    image: '/media/promotions/offer-coffee-web.jpg',
    accent: 'from-amber-600/90 to-amber-900/90',
  },
  {
    id: 'rewards',
    title: 'Double points weekend',
    subtitle: 'Gas + in-store',
    href: '/rewards',
    image: '/media/promotions/offer-rewards-web.jpg',
    accent: 'from-yellow-500/90 to-amber-700/90',
  },
  {
    id: 'chicken',
    title: '3pc tenders',
    subtitle: '$4.99 hot',
    href: '/food',
    image: '/media/promotions/offer-chicken-web.jpg',
    accent: 'from-warm-600/90 to-brand-800/90',
  },
  {
    id: 'delivery',
    title: 'First delivery order',
    subtitle: '$7 off with app',
    href: '/app',
    image: '/media/promotions/offer-delivery-web.jpg',
    accent: 'from-violet-600/90 to-purple-900/90',
  },
  {
    id: 'energy',
    title: '2 energy drinks',
    subtitle: '$5 mix & match',
    href: '/deals',
    image: '/media/promotions/offer-energy-web.jpg',
    accent: 'from-lime-600/90 to-green-900/90',
  },
  {
    id: 'pizza',
    title: 'Pepperoni slice',
    subtitle: '$2.49 ready now',
    href: '/food',
    image: '/media/promotions/offer-pizza-web.jpg',
    accent: 'from-rose-600/90 to-red-900/90',
  },
  {
    id: 'app',
    title: 'Pay at the pump',
    subtitle: 'Skip the line',
    href: '/app',
    image: '/media/promotions/offer-app-web.jpg',
    accent: 'from-sky-600/90 to-brand-800/90',
  },
  {
    id: 'breakfast',
    title: 'Breakfast sandwich + coffee',
    subtitle: '$3.99 combo',
    href: '/food',
    image: '/media/promotions/offer-breakfast-web.jpg',
    accent: 'from-orange-500/90 to-amber-800/90',
  },
  {
    id: 'late-night',
    title: 'Late-night pizza combo',
    subtitle: '$5 after 8pm',
    href: '/deals',
    image: '/media/promotions/offer-late-night-web.jpg',
    accent: 'from-rose-500/90 to-red-800/90',
  },
  {
    id: 'bakery',
    title: 'Fresh cookies or donuts',
    subtitle: '2 for $3',
    href: '/food',
    image: '/media/promotions/offer-bakery-web.jpg',
    accent: 'from-fuchsia-500/90 to-warm-800/90',
  },
  {
    id: 'car-wash',
    title: 'Fuel + wash bundle',
    subtitle: 'Save $2 today',
    href: '/deals',
    image: '/media/promotions/offer-car-wash-web.jpg',
    accent: 'from-cyan-500/90 to-sky-800/90',
  },
  {
    id: 'lunch',
    title: 'Made-to-order lunch',
    subtitle: '$1 off after 2pm',
    href: '/food',
    image: '/media/promotions/offer-lunch-web.jpg',
    accent: 'from-amber-500/90 to-orange-800/90',
  },
  {
    id: 'snacks',
    title: '3 snacks for the road',
    subtitle: '$6 mix & match',
    href: '/deals',
    image: '/media/promotions/offer-delivery-web.jpg',
    accent: 'from-lime-500/90 to-emerald-800/90',
  },
]
