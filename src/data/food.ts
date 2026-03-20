export const signatureFood = [
  {
    id: 'chicken',
    title: 'Fried Chicken',
    description: 'Crispy tenders and wings made in-store. The real reason people stop in.',
    tag: '#1 Seller',
    href: '/category/fried-chicken',
    /* REPLACE: /media/food/chicken.jpg */
    image: 'https://images.unsplash.com/photo-1626645738196-c2a7c87a8f58?w=800&q=80',
  },
  {
    id: 'pizza',
    title: 'Pizza by the Slice',
    description: 'Hot slices all day. Grab one or grab a whole pie.',
    tag: 'Hot & Ready',
    href: '/category/pizza',
    /* REPLACE: /media/food/pizza.jpg */
    image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=800&q=80',
  },
  {
    id: 'roller-grill',
    title: 'Roller Grill',
    description: 'Hot dogs, taquitos, egg rolls, tornado wraps — always spinning, always ready.',
    tag: 'Grab & Go',
    href: '/category/roller-grill',
    /* REPLACE: /media/food/roller-grill.jpg */
    image: 'https://images.unsplash.com/photo-1619740455993-9d701c01b0be?w=800&q=80',
  },
  {
    id: 'breakfast',
    title: 'Breakfast Sandwiches',
    description: 'Biscuits, burritos, and croissants. Grab one on the way to work.',
    tag: 'Morning Rush',
    href: '/category/breakfast',
    /* REPLACE: /media/food/breakfast.jpg */
    image: 'https://images.unsplash.com/photo-1525351484163-7529414344d8?w=800&q=80',
  },
  {
    id: 'fountain',
    title: 'Fountain Drinks',
    description: 'Ice cold sodas, slushies, iced tea, and self-serve coffee. Fill it up your way.',
    tag: 'Any Size $0.99',
    href: '/category/fountain-drinks',
    /* REPLACE: /media/food/fountain.jpg */
    image: 'https://images.unsplash.com/photo-1581006852262-e4307cf6283a?w=800&q=80',
  },
]

export const foodPageItems = [
  {
    category: 'Roller Grill',
    href: '/category/roller-grill',
    items: [
      { name: '2 Hot Dogs for $2', price: '$2.00', badge: 'Best Deal' },
      { name: 'Beef Taquitos (3pc)', price: '$2.99', badge: null },
      { name: 'Tornado Wrap', price: '$1.99', badge: 'Popular' },
      { name: 'Egg Rolls (2pc)', price: '$2.49', badge: null },
    ],
  },
  {
    category: 'Fried Chicken',
    href: '/category/fried-chicken',
    items: [
      { name: 'Chicken Tenders (3pc)', price: '$4.99', badge: 'Best Seller' },
      { name: 'Chicken Wings (6pc)', price: '$5.99', badge: null },
      { name: 'Spicy Chicken Sandwich', price: '$3.99', badge: 'New' },
      { name: '8pc Family Bucket', price: '$12.99', badge: null },
    ],
  },
  {
    category: 'Pizza',
    href: '/category/pizza',
    items: [
      { name: 'Pepperoni Slice', price: '$2.49', badge: null },
      { name: 'Meat Lovers Slice', price: '$2.99', badge: 'Popular' },
      { name: 'Whole Pepperoni Pie', price: '$7.99', badge: null },
    ],
  },
  {
    category: 'Breakfast',
    href: '/category/breakfast',
    items: [
      { name: 'Sausage Biscuit', price: '$1.79', badge: null },
      { name: 'Breakfast Burrito', price: '$2.99', badge: 'Fan Favorite' },
      { name: 'Bacon Egg & Cheese Croissant', price: '$3.49', badge: null },
    ],
  },
  {
    category: 'Drinks',
    href: '/category/fountain-drinks',
    items: [
      { name: 'Any Size Fountain Drink', price: '$0.99', badge: 'Best Value' },
      { name: 'Large Coffee / Iced Coffee', price: '$1.49', badge: null },
      { name: 'Slushie (Any Flavor)', price: '$1.29', badge: 'Kid Favorite' },
      { name: 'Energy Drink 2 for', price: '$5.00', badge: null },
    ],
  },
  {
    category: 'Grab & Go Snacks',
    href: '/category/snacks',
    items: [
      { name: 'Loaded Nachos', price: '$3.99', badge: null },
      { name: 'Jumbo Corn Dog', price: '$1.79', badge: 'Value' },
      { name: 'Chips & Dip Combo', price: '$2.49', badge: null },
    ],
  },
]
