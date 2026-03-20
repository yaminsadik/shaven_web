export interface CategoryProduct {
  name: string
  price?: string
  image: string
  description: string
  badge?: string
}

export interface CategoryPromo {
  title: string
  description: string
  badge: string
  color: string
}

export interface CategoryPageData {
  title: string
  subtitle: string
  section: 'food' | 'drinks' | 'deals' | '21-plus' | 'rewards'
  gradient: string
  heroImage: string
  products: CategoryProduct[]
  promos: CategoryPromo[]
  backLink: { label: string; href: string }
}

// ─── image pools ────────────────────────────────────────────────────────────

const img = {
  chicken: 'https://images.unsplash.com/photo-1626645738196-c2a7c87a8f58?w=600&q=80',
  pizza: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=600&q=80',
  hotdog: 'https://images.unsplash.com/photo-1619740455993-9d701c01b0be?w=600&q=80',
  breakfast: 'https://images.unsplash.com/photo-1525351484163-7529414344d8?w=600&q=80',
  fountain: 'https://images.unsplash.com/photo-1581006852262-e4307cf6283a?w=600&q=80',
  snacks: 'https://images.unsplash.com/photo-1621939514649-280e2ee25f60?w=600&q=80',
  coffee: 'https://images.unsplash.com/photo-1461023058943-07fcbe16d735?w=600&q=80',
  energy: 'https://images.unsplash.com/photo-1622543925917-763c34d1a86e?w=600&q=80',
  water: 'https://images.unsplash.com/photo-1548839140-29a749e1cf4d?w=600&q=80',
  juice: 'https://images.unsplash.com/photo-1534353473418-4cfa6c56fd38?w=600&q=80',
  beer: 'https://images.unsplash.com/photo-1535958636474-b021ee887b13?w=600&q=80',
  wine: 'https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?w=600&q=80',
  liquor: 'https://images.unsplash.com/photo-1569529465841-dfecdab7503b?w=600&q=80',
  seltzer: 'https://images.unsplash.com/photo-1558642452-9d2a7deb7f62?w=600&q=80',
  tobacco: 'https://images.unsplash.com/photo-1574169208507-84376144848b?w=600&q=80',
  vape: 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=600&q=80',
  pouches: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80',
  snuff: 'https://images.unsplash.com/photo-1607582544956-5f9aa58b9b57?w=600&q=80',
  kratom: 'https://images.unsplash.com/photo-1544787219-7f47ccb76574?w=600&q=80',
  glass: 'https://images.unsplash.com/photo-1527668752968-14dc70a27c95?w=600&q=80',
  deals: 'https://images.unsplash.com/photo-1607082350899-7e105aa886ae?w=600&q=80',
  rewards: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&q=80',
  fuel: 'https://images.unsplash.com/photo-1565793979803-ca4e3444ee95?w=600&q=80',
  bakery: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?w=600&q=80',
  nachos: 'https://images.unsplash.com/photo-1582169296194-e4d644c48063?w=600&q=80',
  slushie: 'https://images.unsplash.com/photo-1572490122747-3968b75cc699?w=600&q=80',
}

// ─── FOOD pages ─────────────────────────────────────────────────────────────

const foodPages: Record<string, CategoryPageData> = {
  'fried-chicken': {
    title: 'Fried Chicken',
    subtitle: 'Crispy tenders, wings, and sandwiches — made fresh in-store all day.',
    section: 'food',
    gradient: 'from-orange-600 to-red-700',
    heroImage: img.chicken,
    backLink: { label: 'Food', href: '/food' },
    products: [
      { name: 'Chicken Tenders (3pc)', price: '$4.99', image: img.chicken, description: 'Hand-breaded tenders, crispy outside, juicy inside.', badge: 'Best Seller' },
      { name: 'Chicken Wings (6pc)', price: '$5.99', image: img.chicken, description: 'Classic buffalo or honey BBQ.', badge: 'Hot' },
      { name: 'Spicy Chicken Sandwich', price: '$3.99', image: img.chicken, description: 'Crispy spicy fillet on a brioche bun with pickles.', badge: 'New' },
      { name: '8pc Family Bucket', price: '$12.99', image: img.chicken, description: 'Mixed pieces — feeds 3-4 people.' },
    ],
    promos: [
      { title: '🍗 3pc Tenders + Drink $5.99', description: 'Any 3pc tenders with a fountain drink.', badge: 'Combo Deal', color: 'from-orange-600 to-red-700' },
      { title: '🔥 Double Points on Chicken', description: 'Earn 2x rewards points on all chicken items this week.', badge: 'Rewards', color: 'from-yellow-600 to-amber-800' },
    ],
  },
  'pizza': {
    title: 'Pizza by the Slice',
    subtitle: 'Hot slices ready all day. Grab one or take a whole pie.',
    section: 'food',
    gradient: 'from-red-600 to-red-800',
    heroImage: img.pizza,
    backLink: { label: 'Food', href: '/food' },
    products: [
      { name: 'Pepperoni Slice', price: '$2.49', image: img.pizza, description: 'Classic pepperoni on hand-tossed dough.' },
      { name: 'Meat Lovers Slice', price: '$2.99', image: img.pizza, description: 'Pepperoni, sausage, ham, and bacon.', badge: 'Popular' },
      { name: 'Cheese Slice', price: '$1.99', image: img.pizza, description: 'Simple, cheesy, perfect.' },
      { name: 'Whole Pepperoni Pie', price: '$7.99', image: img.pizza, description: '14-inch pepperoni pie — feeds 3-4.', badge: 'Value' },
    ],
    promos: [
      { title: '🍕 2 Slices + Drink $4.99', description: 'Any 2 slices and a fountain drink.', badge: 'Combo', color: 'from-red-600 to-red-800' },
    ],
  },
  'roller-grill': {
    title: 'Roller Grill',
    subtitle: 'Hot dogs, taquitos, egg rolls, tornado wraps — always spinning, always ready.',
    section: 'food',
    gradient: 'from-amber-600 to-orange-700',
    heroImage: img.hotdog,
    backLink: { label: 'Food', href: '/food' },
    products: [
      { name: '2 Hot Dogs for $2', price: '$2.00', image: img.hotdog, description: 'Classic beef franks on a steamed bun.', badge: 'Best Deal' },
      { name: 'Beef Taquitos (3pc)', price: '$2.99', image: img.hotdog, description: 'Crispy rolled taquitos with seasoned beef.' },
      { name: 'Tornado Wrap', price: '$1.99', image: img.hotdog, description: 'Flaky pastry filled with egg, cheese & sausage.', badge: 'Popular' },
      { name: 'Egg Rolls (2pc)', price: '$2.49', image: img.hotdog, description: 'Crispy pork & vegetable egg rolls.' },
    ],
    promos: [
      { title: '🌯 Roller Grill 2 for $3', description: 'Mix & match any 2 roller grill items + a fountain drink.', badge: 'Best Deal', color: 'from-amber-600 to-orange-700' },
    ],
  },
  'breakfast': {
    title: 'Breakfast',
    subtitle: 'Biscuits, burritos, and croissants. Grab one on the way to work.',
    section: 'food',
    gradient: 'from-yellow-600 to-amber-700',
    heroImage: img.breakfast,
    backLink: { label: 'Food', href: '/food' },
    products: [
      { name: 'Sausage Biscuit', price: '$1.79', image: img.breakfast, description: 'Fluffy biscuit with a savory sausage patty.' },
      { name: 'Breakfast Burrito', price: '$2.99', image: img.breakfast, description: 'Egg, cheese, sausage & salsa in a warm tortilla.', badge: 'Fan Favorite' },
      { name: 'Bacon Egg & Cheese Croissant', price: '$3.49', image: img.breakfast, description: 'Crispy bacon, egg & melted cheese on a buttery croissant.' },
      { name: 'Hash Brown (2pc)', price: '$1.29', image: img.breakfast, description: 'Golden, crispy hash brown patties.' },
    ],
    promos: [
      { title: '☀️ Early Bird Combo $3.49', description: 'Any breakfast sandwich + any size coffee before 10 AM.', badge: 'Morning Deal', color: 'from-yellow-600 to-amber-700' },
    ],
  },
  'fountain-drinks': {
    title: 'Fountain Drinks',
    subtitle: 'Ice cold sodas, slushies, iced tea, and self-serve fountain drinks.',
    section: 'food',
    gradient: 'from-sky-500 to-blue-700',
    heroImage: img.fountain,
    backLink: { label: 'Food', href: '/food' },
    products: [
      { name: 'Any Size Fountain Drink', price: '$0.99', image: img.fountain, description: 'Coca-Cola, Pepsi, Dr Pepper, Mountain Dew & more.', badge: 'Best Value' },
      { name: 'Slushie (Any Flavor)', price: '$1.29', image: img.slushie, description: 'Blue Raspberry, Cherry, Mango, Grape.', badge: 'Kid Favorite' },
      { name: 'Iced Tea (Any Size)', price: '$1.19', image: img.fountain, description: 'Sweet or unsweet, freshly brewed.' },
      { name: 'Lemonade', price: '$1.49', image: img.fountain, description: 'Fresh-squeezed style lemonade, sweet or strawberry.' },
    ],
    promos: [
      { title: '🥤 86¢ Fountain Drink — Today Only', description: 'Any size fountain drink, all day.', badge: 'Flash Deal', color: 'from-sky-500 to-blue-700' },
    ],
  },
  'snacks': {
    title: 'Snacks & Grab-n-Go',
    subtitle: 'Chips, candy, nuts, jerky, and loaded nachos ready to grab.',
    section: 'food',
    gradient: 'from-green-600 to-emerald-700',
    heroImage: img.snacks,
    backLink: { label: 'Food', href: '/food' },
    products: [
      { name: 'Loaded Nachos', price: '$3.99', image: img.nachos, description: 'Tortilla chips with cheese, jalapeños & salsa.' },
      { name: 'Jumbo Corn Dog', price: '$1.79', image: img.hotdog, description: 'Classic carnival-style corn dog.', badge: 'Value' },
      { name: 'Beef Jerky (3oz)', price: '$4.99', image: img.snacks, description: 'Jack Links, Slim Jim, or store brand.' },
      { name: 'Chips & Dip Combo', price: '$2.49', image: img.snacks, description: 'Any bag of chips + queso or salsa.' },
    ],
    promos: [
      { title: '🍿 2 for $3 Snacks', description: 'Any 2 bagged snacks under $2.49 for $3.', badge: 'Every Day', color: 'from-green-600 to-emerald-700' },
    ],
  },
}

// ─── DRINKS pages ───────────────────────────────────────────────────────────

const drinksPages: Record<string, CategoryPageData> = {
  'coffee': {
    title: 'Coffee',
    subtitle: 'Hot, iced, or frozen — brewed fresh all day. Any size, any way you like it.',
    section: 'drinks',
    gradient: 'from-amber-800 to-amber-950',
    heroImage: img.coffee,
    backLink: { label: 'Drinks', href: '/food' },
    products: [
      { name: 'Hot Coffee (Any Size)', price: '$1.49', image: img.coffee, description: 'House blend, Colombian, or French Roast.', badge: 'Best Value' },
      { name: 'Iced Coffee (Any Size)', price: '$1.99', image: img.coffee, description: 'Cold-brewed over ice. Add cream & sugar.' },
      { name: 'Frozen Cappuccino', price: '$2.49', image: img.coffee, description: 'Blended frozen coffee — mocha, vanilla, or caramel.', badge: 'Popular' },
      { name: 'Espresso Shot', price: '$1.29', image: img.coffee, description: 'Single or double shot of fresh espresso.' },
    ],
    promos: [
      { title: '☕ Any Size Coffee $1', description: 'All day, every day. No limits.', badge: 'Flash Deal', color: 'from-amber-800 to-amber-950' },
      { title: '🎯 Beverage Club: 6th Coffee Free', description: 'Buy 5 coffees, get the 6th one on us.', badge: 'Rewards', color: 'from-yellow-600 to-amber-800' },
    ],
  },
  'fountain-slushies': {
    title: 'Fountain & Slushies',
    subtitle: 'Self-serve fountain drinks and frozen slushies in every flavor.',
    section: 'drinks',
    gradient: 'from-cyan-600 to-blue-700',
    heroImage: img.slushie,
    backLink: { label: 'Drinks', href: '/food' },
    products: [
      { name: 'Fountain Drink (Any Size)', price: '$0.99', image: img.fountain, description: 'Coca-Cola, Pepsi, Dr Pepper, Mountain Dew.', badge: 'Best Value' },
      { name: 'Blue Raspberry Slushie', price: '$1.29', image: img.slushie, description: 'Ice cold brain-freeze in a cup.', badge: 'Fan Favorite' },
      { name: 'Cherry Slushie', price: '$1.29', image: img.slushie, description: 'Classic sweet cherry flavor.' },
      { name: 'Mango Slushie', price: '$1.29', image: img.slushie, description: 'Tropical mango blast — new flavor!', badge: 'New' },
    ],
    promos: [
      { title: '🧊 86¢ Any Size Fountain', description: 'Today only — any size fountain drink.', badge: 'Today Only', color: 'from-cyan-600 to-blue-700' },
    ],
  },
  'energy-drinks': {
    title: 'Energy Drinks',
    subtitle: 'Monster, Red Bull, Celsius, Bang — full cooler, always stocked.',
    section: 'drinks',
    gradient: 'from-lime-600 to-green-800',
    heroImage: img.energy,
    backLink: { label: 'Drinks', href: '/food' },
    products: [
      { name: 'Monster Energy (16oz)', price: '$2.99', image: img.energy, description: 'Original, Ultra, Juice — all flavors.' },
      { name: 'Red Bull (8.4oz)', price: '$2.79', image: img.energy, description: 'Original, Sugar-Free, Tropical.', badge: 'Popular' },
      { name: 'Celsius (12oz)', price: '$2.49', image: img.energy, description: 'Sparkling fitness energy. Multiple flavors.', badge: 'Trending' },
      { name: 'Bang Energy (16oz)', price: '$2.79', image: img.energy, description: 'Zero calorie, zero sugar, maximum energy.' },
    ],
    promos: [
      { title: '⚡ Energy 2 for $5', description: 'Mix & match any 2 energy drinks.', badge: 'Every Day', color: 'from-lime-600 to-green-800' },
    ],
  },
  'bottled-water': {
    title: 'Bottled Water',
    subtitle: 'Spring water, purified, and enhanced water — single bottles and packs.',
    section: 'drinks',
    gradient: 'from-sky-400 to-blue-600',
    heroImage: img.water,
    backLink: { label: 'Drinks', href: '/food' },
    products: [
      { name: 'Dasani (20oz)', price: '$1.49', image: img.water, description: 'Purified water with minerals.' },
      { name: 'Fiji (16.9oz)', price: '$2.29', image: img.water, description: 'Natural artesian water from Fiji.', badge: 'Premium' },
      { name: 'Smartwater (20oz)', price: '$1.99', image: img.water, description: 'Vapor distilled with added electrolytes.' },
      { name: '24-Pack Water', price: '$4.99', image: img.water, description: 'Great value case of 16.9oz bottles.', badge: 'Value' },
    ],
    promos: [
      { title: '💧 2 for $2 Water', description: 'Any 2 single bottles of water for $2.', badge: 'Every Day', color: 'from-sky-400 to-blue-600' },
    ],
  },
  'cold-pressed-juices': {
    title: 'Cold Pressed Juices',
    subtitle: 'Fresh, cold-pressed juices and smoothies — grab one on the go.',
    section: 'drinks',
    gradient: 'from-orange-500 to-pink-600',
    heroImage: img.juice,
    backLink: { label: 'Drinks', href: '/food' },
    products: [
      { name: 'Green Machine', price: '$3.99', image: img.juice, description: 'Kale, spinach, cucumber, apple, ginger.', badge: 'Healthy' },
      { name: 'Berry Blast', price: '$3.99', image: img.juice, description: 'Strawberry, blueberry, banana, acai.' },
      { name: 'Orange Sunrise', price: '$3.49', image: img.juice, description: 'Fresh-pressed orange with carrot and turmeric.' },
      { name: 'Tropical Smoothie', price: '$4.49', image: img.juice, description: 'Mango, pineapple, coconut water, banana.', badge: 'New' },
    ],
    promos: [
      { title: '🍊 $1 Off Any Juice', description: 'Save $1 on any cold-pressed juice or smoothie.', badge: 'This Week', color: 'from-orange-500 to-pink-600' },
    ],
  },
}

// ─── DEALS pages ────────────────────────────────────────────────────────────

const dealsPages: Record<string, CategoryPageData> = {
  'flash-deals': {
    title: 'Flash Deals',
    subtitle: 'Limited-time offers that won\'t last. Grab them before they\'re gone.',
    section: 'deals',
    gradient: 'from-red-600 to-orange-700',
    heroImage: img.deals,
    backLink: { label: 'Deals', href: '/deals' },
    products: [
      { name: '86¢ Fountain Drink', price: '$0.86', image: img.fountain, description: 'Any size, today only!', badge: '🔥 Flash' },
      { name: '50% OFF Taquitos', price: '$1.49', image: img.hotdog, description: '3pc beef taquitos — half price for 3 hours.', badge: '⏰ 3 hrs left' },
      { name: '$1 Coffee Any Size', price: '$1.00', image: img.coffee, description: 'Hot, iced, or frozen. While supplies last.', badge: '🔥 Flash' },
      { name: '2 Hot Dogs for $1', price: '$1.00', image: img.hotdog, description: 'Classic beef franks. Flash deal only.', badge: '⚡ Today' },
    ],
    promos: [
      { title: '⚡ Flash deals refresh every 4 hours', description: 'Check back for new deals throughout the day.', badge: 'Flash', color: 'from-red-600 to-orange-700' },
    ],
  },
  'featured-deals': {
    title: 'Featured Deals',
    subtitle: 'Hand-picked deals on the items people love most.',
    section: 'deals',
    gradient: 'from-amber-600 to-orange-700',
    heroImage: img.deals,
    backLink: { label: 'Deals', href: '/deals' },
    products: [
      { name: '2 for $3 Roller Grill', price: '$3.00', image: img.hotdog, description: 'Any 2 items + fountain drink.', badge: '⭐ Featured' },
      { name: 'Family Chicken Bucket', price: '$12.99', image: img.chicken, description: '8pc fried chicken — feeds the family.', badge: '⭐ Featured' },
      { name: 'Pizza Slice + Drink', price: '$3.49', image: img.pizza, description: 'Any slice with a fountain drink.', badge: '⭐ Featured' },
      { name: 'Coffee + Pastry', price: '$2.99', image: img.coffee, description: 'Any coffee + donut or muffin.', badge: '⭐ Featured' },
    ],
    promos: [
      { title: '⭐ Rewards Members Get Extra Savings', description: 'Log in to see member-only featured deals.', badge: 'Members', color: 'from-amber-600 to-orange-700' },
    ],
  },
  'combo-deals': {
    title: 'Combo Deals',
    subtitle: 'Pair up and save. Best combos in the store.',
    section: 'deals',
    gradient: 'from-indigo-600 to-violet-700',
    heroImage: img.deals,
    backLink: { label: 'Deals', href: '/deals' },
    products: [
      { name: 'Chicken + Drink Combo', price: '$5.99', image: img.chicken, description: '3pc tenders + any size fountain drink.', badge: '🤝 Combo' },
      { name: 'Breakfast Combo', price: '$3.49', image: img.breakfast, description: 'Any sandwich + any coffee before 10 AM.', badge: '🤝 Combo' },
      { name: 'Pizza Combo', price: '$4.99', image: img.pizza, description: '2 slices + drink.', badge: '🤝 Combo' },
      { name: 'Road Trip Combo', price: '$6.99', image: img.snacks, description: 'Roller grill item + chips + fountain drink.', badge: '🤝 Combo' },
    ],
    promos: [
      { title: '🤝 Build Your Own Combo', description: 'Any hot food + any drink + any snack for $5.99.', badge: 'Custom Combo', color: 'from-indigo-600 to-violet-700' },
    ],
  },
  'everyday-value': {
    title: 'Everyday Value',
    subtitle: 'Low prices every day — no coupon needed.',
    section: 'deals',
    gradient: 'from-green-600 to-emerald-700',
    heroImage: img.deals,
    backLink: { label: 'Deals', href: '/deals' },
    products: [
      { name: 'Any Size Fountain Drink', price: '$0.99', image: img.fountain, description: 'Every day, any size.', badge: '💰 Value' },
      { name: 'Hot Dog', price: '$1.00', image: img.hotdog, description: 'Classic beef frank.', badge: '💰 Value' },
      { name: 'Coffee (Any Size)', price: '$1.49', image: img.coffee, description: 'Hot or iced, all day.', badge: '💰 Value' },
      { name: '2 for $3 Roller Grill', price: '$3.00', image: img.hotdog, description: 'Any 2 roller grill items.', badge: '💰 Value' },
    ],
    promos: [
      { title: '💰 Everyday Low Prices', description: 'No tricks, no codes. These prices are always available.', badge: 'Always On', color: 'from-green-600 to-emerald-700' },
    ],
  },
  'coupons': {
    title: 'Coupons & Clippables',
    subtitle: 'Digital coupons you can clip in the app and redeem in-store.',
    section: 'deals',
    gradient: 'from-pink-600 to-rose-700',
    heroImage: img.rewards,
    backLink: { label: 'Deals', href: '/deals' },
    products: [
      { name: '$1 Off Any Energy Drink', price: 'Save $1', image: img.energy, description: 'Clip & scan at checkout.', badge: '🎟️ Coupon' },
      { name: 'Free Fountain Drink', price: 'FREE', image: img.fountain, description: 'With any hot food purchase.', badge: '🎟️ Coupon' },
      { name: '50¢ Off Coffee', price: 'Save 50¢', image: img.coffee, description: 'Any size, any variety.', badge: '🎟️ Coupon' },
      { name: '$2 Off Chicken Bucket', price: 'Save $2', image: img.chicken, description: '8pc family bucket — clip to save.', badge: '🎟️ Coupon' },
    ],
    promos: [
      { title: '🎟️ New Coupons Every Week', description: 'Download the app to clip digital coupons.', badge: 'App Only', color: 'from-pink-600 to-rose-700' },
    ],
  },
  'limited-time': {
    title: 'Limited Time',
    subtitle: 'Seasonal and limited-time offers. Here today, gone tomorrow.',
    section: 'deals',
    gradient: 'from-purple-600 to-indigo-800',
    heroImage: img.deals,
    backLink: { label: 'Deals', href: '/deals' },
    products: [
      { name: 'Spring Slushie Flavors', price: '$1.29', image: img.slushie, description: 'Blue raspberry lemonade & mango — limited time.', badge: '📅 Ends Apr 30' },
      { name: 'BBQ Chicken Sandwich', price: '$3.99', image: img.chicken, description: 'Smoky BBQ chicken — seasonal menu item.', badge: '📅 Limited' },
      { name: 'Mango Frozen Coffee', price: '$2.49', image: img.coffee, description: 'Tropical twist on frozen coffee.', badge: '📅 Limited' },
      { name: 'Family Chicken Bucket', price: '$14.99', image: img.chicken, description: '8pc + 4 drinks — while supplies last.', badge: '📅 Limited' },
    ],
    promos: [
      { title: '📅 Don\'t Miss Out', description: 'These deals are only around for a limited time.', badge: 'Limited', color: 'from-purple-600 to-indigo-800' },
    ],
  },
  'hot-food-deals': {
    title: 'Hot Food Deals',
    subtitle: 'Save on chicken, pizza, roller grill, and breakfast items.',
    section: 'deals',
    gradient: 'from-orange-600 to-red-700',
    heroImage: img.chicken,
    backLink: { label: 'Deals', href: '/deals' },
    products: [
      { name: '2 for $3 Roller Grill', price: '$3.00', image: img.hotdog, description: 'Mix & match any 2 items.', badge: '🍕 Food Deal' },
      { name: 'Chicken Combo', price: '$5.99', image: img.chicken, description: '3pc tenders + drink.', badge: '🍕 Food Deal' },
      { name: 'Pizza 2 Slices + Drink', price: '$4.99', image: img.pizza, description: 'Any 2 slices with fountain drink.', badge: '🍕 Food Deal' },
      { name: 'Breakfast Combo', price: '$3.49', image: img.breakfast, description: 'Sandwich + coffee before 10 AM.', badge: '🍕 Food Deal' },
    ],
    promos: [
      { title: '🍕 Hot Food, Hot Deals', description: 'Made fresh in-store — save when you pair up.', badge: 'Hot Food', color: 'from-orange-600 to-red-700' },
    ],
  },
  'drinks-deals': {
    title: 'Drinks Deals',
    subtitle: 'Save on fountain drinks, coffee, energy drinks, and more.',
    section: 'deals',
    gradient: 'from-sky-600 to-blue-700',
    heroImage: img.coffee,
    backLink: { label: 'Deals', href: '/deals' },
    products: [
      { name: '86¢ Fountain Drink', price: '$0.86', image: img.fountain, description: 'Any size, today only.', badge: '☕ Drinks' },
      { name: '$1 Coffee', price: '$1.00', image: img.coffee, description: 'Any size, all day.', badge: '☕ Drinks' },
      { name: 'Energy 2 for $5', price: '$5.00', image: img.energy, description: 'Mix & match any 2 energy drinks.', badge: '☕ Drinks' },
      { name: '$1 Off Juice', price: 'Save $1', image: img.juice, description: 'Any cold-pressed juice.', badge: '☕ Drinks' },
    ],
    promos: [
      { title: '☕ Beverage Club', description: 'Buy 5 drinks, get the 6th free with the app.', badge: 'Rewards', color: 'from-sky-600 to-blue-700' },
    ],
  },
  'snacks-deals': {
    title: 'Snacks Deals',
    subtitle: 'Chips, candy, jerky, and grab-n-go savings.',
    section: 'deals',
    gradient: 'from-lime-600 to-green-700',
    heroImage: img.snacks,
    backLink: { label: 'Deals', href: '/deals' },
    products: [
      { name: '2 for $3 Chips', price: '$3.00', image: img.snacks, description: 'Any 2 bags under $2.49.', badge: '🍿 Snacks' },
      { name: '2 for $4 Candy', price: '$4.00', image: img.snacks, description: 'Any 2 king-size candy bars.', badge: '🍿 Snacks' },
      { name: '$1 Off Jerky', price: 'Save $1', image: img.snacks, description: 'Any jerky 3oz or larger.', badge: '🍿 Snacks' },
      { name: 'Nachos Deal', price: '$2.99', image: img.nachos, description: 'Loaded nachos — cheese, jalapeños, salsa.', badge: '🍿 Snacks' },
    ],
    promos: [
      { title: '🍿 Snack Attack Savings', description: 'Mix & match your favorite snacks and save.', badge: 'Snacks', color: 'from-lime-600 to-green-700' },
    ],
  },
  'bakery-deals': {
    title: 'Bakery Deals',
    subtitle: 'Fresh donuts, muffins, cookies, and pastries baked daily.',
    section: 'deals',
    gradient: 'from-amber-600 to-yellow-700',
    heroImage: img.bakery,
    backLink: { label: 'Deals', href: '/deals' },
    products: [
      { name: 'Donut + Coffee', price: '$2.49', image: img.bakery, description: 'Any donut with any size coffee.', badge: '🥐 Bakery' },
      { name: '2 for $2 Donuts', price: '$2.00', image: img.bakery, description: 'Any 2 donuts from the case.', badge: '🥐 Bakery' },
      { name: 'Muffin (Any Flavor)', price: '$1.79', image: img.bakery, description: 'Blueberry, chocolate chip, or banana nut.' },
      { name: 'Cookie 3-Pack', price: '$2.99', image: img.bakery, description: 'Fresh-baked chocolate chip cookies.', badge: '🥐 Bakery' },
    ],
    promos: [
      { title: '🥐 Morning Bakery Special', description: 'Any pastry + coffee for $2.49 before 10 AM.', badge: 'AM Only', color: 'from-amber-600 to-yellow-700' },
    ],
  },
  'fuel-savings': {
    title: 'Fuel Savings',
    subtitle: 'Save at the pump with rewards points and member discounts.',
    section: 'deals',
    gradient: 'from-emerald-600 to-teal-700',
    heroImage: img.fuel,
    backLink: { label: 'Deals', href: '/deals' },
    products: [
      { name: '5¢/gal Member Discount', price: 'Save 5¢', image: img.fuel, description: 'Every fill-up, every time. Just scan your card.', badge: '⛽ Fuel' },
      { name: '10¢/gal at 500 Points', price: 'Save 10¢', image: img.fuel, description: 'Redeem 500 rewards points for 10¢ off per gallon.', badge: '⛽ Fuel' },
      { name: '15¢/gal at 1000 Points', price: 'Save 15¢', image: img.fuel, description: 'Higher rewards = bigger fuel savings.', badge: '⛽ Fuel' },
      { name: 'Fill Up & Save $1', price: 'Save $1', image: img.fuel, description: 'Fuel up + buy any hot food item.', badge: '⛽ Fuel' },
    ],
    promos: [
      { title: '⛽ Double Fuel Points This Week', description: 'Earn 2x points on every gallon this week.', badge: 'This Week', color: 'from-emerald-600 to-teal-700' },
    ],
  },
}

// ─── 21+ pages ──────────────────────────────────────────────────────────────

const adultPages: Record<string, CategoryPageData> = {
  'cigarettes': {
    title: 'Cigarettes',
    subtitle: 'Marlboro, Newport, Camel, Pall Mall, and more — all major brands in stock.',
    section: '21-plus',
    gradient: 'from-slate-600 to-slate-800',
    heroImage: img.tobacco,
    backLink: { label: '21+ Section', href: '/21-plus' },
    products: [
      { name: 'Marlboro Red King', price: '$9.49', image: img.tobacco, description: 'The original. King size box or soft pack.', badge: 'Top Seller' },
      { name: 'Newport Menthol', price: '$9.29', image: img.tobacco, description: 'America\'s #1 menthol cigarette.', badge: 'Popular' },
      { name: 'Camel Blue', price: '$8.99', image: img.tobacco, description: 'Smooth, refined flavor. King size.' },
      { name: 'Pall Mall Red', price: '$6.99', image: img.tobacco, description: 'Full-flavor at a value price.', badge: 'Value' },
    ],
    promos: [
      { title: '🔥 Marlboro +500 Bonus Points', description: 'Buy any Marlboro variety, earn 500 bonus rewards points.', badge: 'Bonus Points', color: 'from-red-700 to-red-900' },
      { title: '💰 Pall Mall 2-Pack Special', description: 'Buy 2 packs and save $1.50.', badge: 'Multi-Buy', color: 'from-slate-600 to-slate-800' },
    ],
  },
  'vape': {
    title: 'Vape & Disposables',
    subtitle: 'Vuse, NJOY, Lost Mary, Elf Bar — pods, kits, and disposables.',
    section: '21-plus',
    gradient: 'from-violet-600 to-purple-800',
    heroImage: img.vape,
    backLink: { label: '21+ Section', href: '/21-plus' },
    products: [
      { name: 'Vuse Alto Starter Kit', price: '$14.99', image: img.vape, description: 'Sleek pod system — tobacco, menthol, berry.', badge: 'Starter' },
      { name: 'Lost Mary OS5000', price: '$12.99', image: img.vape, description: '5000 puffs, 10+ flavors available.', badge: 'Popular' },
      { name: 'Elf Bar BC5000', price: '$13.99', image: img.vape, description: 'Rechargeable, 5000 puffs, fruit and mint flavors.' },
      { name: 'NJOY Daily', price: '$7.99', image: img.vape, description: 'Single-use disposable. Blueberry, menthol, tobacco.', badge: 'Budget' },
    ],
    promos: [
      { title: '💨 Lost Mary $12.99', description: 'OS5000 Disposable — 5000 puffs, any flavor.', badge: 'Vape Deal', color: 'from-violet-600 to-purple-800' },
    ],
  },
  'pouches': {
    title: 'Nicotine Pouches',
    subtitle: 'ZYN, On!, VELO, Rogue — smoke-free nicotine in multiple strengths and flavors.',
    section: '21-plus',
    gradient: 'from-teal-600 to-cyan-800',
    heroImage: img.pouches,
    backLink: { label: '21+ Section', href: '/21-plus' },
    products: [
      { name: 'ZYN Cool Mint (15ct)', price: '$7.49', image: img.pouches, description: '3mg or 6mg. Smoke-free, spit-free.', badge: '#1 Pouch' },
      { name: 'ZYN Wintergreen (15ct)', price: '$7.49', image: img.pouches, description: 'Bold wintergreen flavor, 3mg or 6mg.' },
      { name: 'On! Wintergreen (20ct)', price: '$4.99', image: img.pouches, description: 'Mini nicotine pouches — discreet and affordable.', badge: 'Value' },
      { name: 'VELO Citrus (20ct)', price: '$5.99', image: img.pouches, description: 'Bright citrus nicotine pouch. 4mg.', badge: 'New' },
    ],
    promos: [
      { title: '🎯 ZYN 2 Cans $13.99', description: 'Any flavor, 3mg or 6mg. Mix & match.', badge: 'Popular', color: 'from-teal-600 to-cyan-800' },
    ],
  },
  'snuff': {
    title: 'Dip & Snuff',
    subtitle: 'Copenhagen, Grizzly, Skoal — long cut, fine cut, and wintergreen.',
    section: '21-plus',
    gradient: 'from-stone-600 to-stone-800',
    heroImage: img.snuff,
    backLink: { label: '21+ Section', href: '/21-plus' },
    products: [
      { name: 'Copenhagen Long Cut', price: '$6.99', image: img.snuff, description: 'Natural or Wintergreen. The original.', badge: 'Top Seller' },
      { name: 'Grizzly Wintergreen', price: '$4.49', image: img.snuff, description: 'Long cut or pouches.', badge: 'Value' },
      { name: 'Skoal Mint', price: '$5.99', image: img.snuff, description: 'Long cut mint — smooth flavor.' },
      { name: 'Copenhagen Snuff', price: '$6.49', image: img.snuff, description: 'Original fine cut snuff.' },
    ],
    promos: [
      { title: '🌿 Grizzly 2 for $8', description: 'Any 2 Grizzly cans — long cut or pouches.', badge: 'Multi-Buy', color: 'from-stone-600 to-stone-800' },
    ],
  },
  'beer': {
    title: 'Beer',
    subtitle: 'Domestic, import, craft, and seltzers — always cold from the beer cave.',
    section: '21-plus',
    gradient: 'from-amber-700 to-amber-900',
    heroImage: img.beer,
    backLink: { label: '21+ Section', href: '/21-plus' },
    products: [
      { name: 'Bud Light 30-Pack', price: '$19.99', image: img.beer, description: '30 cans of America\'s favorite light beer.', badge: 'Best Seller' },
      { name: 'Modelo Especial 12-Pack', price: '$15.99', image: img.beer, description: 'Full-flavored Mexican lager.', badge: 'Import' },
      { name: 'Michelob Ultra 12-Pack', price: '$14.99', image: img.beer, description: 'Only 95 calories — light and refreshing.', badge: 'Light' },
      { name: 'Tall Boy Singles (24oz)', price: '$2.99', image: img.beer, description: 'Bud, Busch, Natural Light, Miller.', badge: '2 for $5' },
    ],
    promos: [
      { title: '🍺 30-Rack Special $19.99', description: 'Select 30-packs — Bud Light, Coors, Miller Lite.', badge: 'This Week', color: 'from-amber-700 to-amber-900' },
      { title: '🍺 Tall Boys 2 for $5', description: 'Any 2 24oz cans — mix & match.', badge: 'Every Day', color: 'from-yellow-700 to-amber-800' },
    ],
  },
  'wine': {
    title: 'Wine',
    subtitle: 'Red, white, rosé, and sparkling — everyday prices on popular varietals.',
    section: '21-plus',
    gradient: 'from-rose-700 to-red-900',
    heroImage: img.wine,
    backLink: { label: '21+ Section', href: '/21-plus' },
    products: [
      { name: 'Barefoot Moscato', price: '$7.99', image: img.wine, description: 'Sweet white wine — 750ml.', badge: 'Popular' },
      { name: 'Woodbridge Cabernet', price: '$8.99', image: img.wine, description: 'Rich red from Robert Mondavi — 750ml.' },
      { name: 'White Claw Surf (6pk)', price: '$9.99', image: img.seltzer, description: 'Citrus, tropical, berry variety.', badge: 'New' },
      { name: 'Sutter Home Rosé', price: '$6.99', image: img.wine, description: 'Light, crisp rosé — 750ml.', badge: 'Value' },
    ],
    promos: [
      { title: '🍷 Wine Wednesday: $1 Off', description: 'Save $1 on any bottle 750ml or larger, every Wednesday.', badge: 'Weekly', color: 'from-rose-700 to-red-900' },
    ],
  },
  'liquor': {
    title: 'Liquor & Spirits',
    subtitle: 'Whiskey, vodka, rum, tequila — pints, fifths, and handles.',
    section: '21-plus',
    gradient: 'from-amber-800 to-stone-900',
    heroImage: img.liquor,
    backLink: { label: '21+ Section', href: '/21-plus' },
    products: [
      { name: 'Jack Daniels (750ml)', price: '$22.99', image: img.liquor, description: 'Tennessee whiskey — the classic.', badge: 'Popular' },
      { name: 'Tito\'s Vodka (750ml)', price: '$19.99', image: img.liquor, description: 'Handmade American vodka.' },
      { name: 'Captain Morgan (750ml)', price: '$17.99', image: img.liquor, description: 'Original spiced rum.', badge: 'Best Seller' },
      { name: 'Fireball Cinnamon (750ml)', price: '$14.99', image: img.liquor, description: 'Cinnamon whisky — smooth and spicy.' },
    ],
    promos: [
      { title: '🥃 Pint Specials', description: 'Select pints starting at $7.99.', badge: 'In Store', color: 'from-amber-800 to-stone-900' },
    ],
  },
  'seltzers': {
    title: 'Seltzers & RTD',
    subtitle: 'Hard seltzers, wine coolers, and canned cocktails — always stocked cold.',
    section: '21-plus',
    gradient: 'from-sky-500 to-teal-700',
    heroImage: img.seltzer,
    backLink: { label: '21+ Section', href: '/21-plus' },
    products: [
      { name: 'White Claw 12-Pack', price: '$14.99', image: img.seltzer, description: 'Variety pack — mango, lime, raspberry, cherry.', badge: 'Popular' },
      { name: 'Truly 12-Pack', price: '$14.99', image: img.seltzer, description: 'Hard seltzer variety — berry, citrus, tropical.' },
      { name: 'High Noon 8-Pack', price: '$16.99', image: img.seltzer, description: 'Vodka soda — real fruit juice, low cal.', badge: 'Trending' },
      { name: 'Seagram\'s Escapes (4pk)', price: '$5.99', image: img.seltzer, description: 'Wine coolers — peach, strawberry, jamaican me happy.', badge: 'Value' },
    ],
    promos: [
      { title: '🍹 12-Pack Seltzer $14.99', description: 'Any 12-pack variety — White Claw, Truly, Topo Chico.', badge: 'Every Day', color: 'from-sky-500 to-teal-700' },
    ],
  },
  'smoking-accessories': {
    title: 'Bongs & Accessories',
    subtitle: 'Glassware, rolling papers, wraps, and smoking accessories.',
    section: '21-plus',
    gradient: 'from-stone-600 to-stone-800',
    heroImage: img.glass,
    backLink: { label: '21+ Section', href: '/21-plus' },
    products: [
      { name: 'Glass Water Pipe', price: '$24.99', image: img.glass, description: 'Clear borosilicate glass — 10 inch.', badge: '18+' },
      { name: 'RAW King Size Papers', price: '$2.99', image: img.glass, description: 'Unbleached, natural rolling papers.' },
      { name: 'Backwoods (5-pack)', price: '$8.99', image: img.glass, description: 'Natural leaf cigars — multiple flavors.', badge: 'Popular' },
      { name: 'Lighter & Tool Kit', price: '$4.99', image: img.glass, description: 'Clipper lighter + debowler + screens.' },
    ],
    promos: [
      { title: '🌬️ RAW Buy 2 Save $1', description: 'Any 2 RAW products — papers, cones, or tips.', badge: 'Multi-Buy', color: 'from-stone-600 to-stone-800' },
    ],
  },
  'kratom': {
    title: 'Kratom & Botanicals',
    subtitle: 'Capsules, powder, and extract blends. Legal botanical wellness.',
    section: '21-plus',
    gradient: 'from-green-700 to-emerald-900',
    heroImage: img.kratom,
    backLink: { label: '21+ Section', href: '/21-plus' },
    products: [
      { name: 'Kratom Capsules (60ct)', price: '$19.99', image: img.kratom, description: 'Maeng Da — premium capsules.', badge: '18+' },
      { name: 'Kratom Powder (2oz)', price: '$12.99', image: img.kratom, description: 'Green vein powder — fine ground.' },
      { name: 'Kratom Extract Shot', price: '$9.99', image: img.kratom, description: 'Concentrated liquid extract — fast acting.', badge: 'Popular' },
      { name: 'Botanical Blend Tea', price: '$6.99', image: img.kratom, description: 'Herbal blend sachets — relaxation formula.' },
    ],
    promos: [
      { title: '🌱 Buy 2 Get 15% Off', description: 'Any 2 kratom or botanical products.', badge: 'Multi-Buy', color: 'from-green-700 to-emerald-900' },
    ],
  },
  '21-plus-coupons': {
    title: '21+ Coupons',
    subtitle: 'Exclusive digital coupons for tobacco and alcohol — members only.',
    section: '21-plus',
    gradient: 'from-purple-600 to-purple-900',
    heroImage: img.rewards,
    backLink: { label: '21+ Section', href: '/21-plus' },
    products: [
      { name: 'Marlboro $1 Off', price: 'Save $1', image: img.tobacco, description: 'Any Marlboro variety — clip in app.', badge: '🎫 Coupon' },
      { name: 'ZYN $1 Off', price: 'Save $1', image: img.pouches, description: 'Any ZYN can — 3mg or 6mg.', badge: '🎫 Coupon' },
      { name: '30-Pack $2 Off', price: 'Save $2', image: img.beer, description: 'Any 30-pack of domestic beer.', badge: '🎫 Coupon' },
      { name: 'Wine $1.50 Off', price: 'Save $1.50', image: img.wine, description: 'Any bottle 750ml or larger.', badge: '🎫 Coupon' },
    ],
    promos: [
      { title: '🎫 Digital Coupons — App Only', description: 'Clip coupons in the 7th Heaven app and scan at checkout.', badge: 'App Only', color: 'from-purple-600 to-purple-900' },
    ],
  },
  'weekly-savings': {
    title: "This Week's Savings",
    subtitle: 'Price specials on tobacco, beer, and wine — in store only.',
    section: '21-plus',
    gradient: 'from-indigo-600 to-purple-800',
    heroImage: img.deals,
    backLink: { label: '21+ Section', href: '/21-plus' },
    products: [
      { name: 'Bud Light 30-Pack', price: '$19.99', image: img.beer, description: 'This week\'s featured beer deal.', badge: '🏷️ Weekly' },
      { name: 'Pall Mall 2-Pack', price: '$12.99', image: img.tobacco, description: 'Buy 2 packs, save $1.50.', badge: '🏷️ Weekly' },
      { name: 'ZYN 2/$13.99', price: '$13.99', image: img.pouches, description: 'Mix & match, any flavor.', badge: '🏷️ Weekly' },
      { name: 'Barefoot Wine', price: '$6.99', image: img.wine, description: 'All 750ml varieties on sale.', badge: '🏷️ Weekly' },
    ],
    promos: [
      { title: '🏷️ New Specials Every Week', description: 'Check back every Monday for new price drops.', badge: 'Weekly', color: 'from-indigo-600 to-purple-800' },
    ],
  },
}

// ─── REWARDS pages ──────────────────────────────────────────────────────────

const rewardsPages: Record<string, CategoryPageData> = {
  'membership': {
    title: 'Membership',
    subtitle: 'Join 7th Heaven Rewards — it\'s free, easy, and saves you money every visit.',
    section: 'rewards',
    gradient: 'from-yellow-500 to-amber-700',
    heroImage: img.rewards,
    backLink: { label: 'Rewards', href: '/rewards' },
    products: [
      { name: 'Free to Join', price: 'FREE', image: img.rewards, description: 'Sign up in the app or ask a cashier. No fees, ever.', badge: 'Start Here' },
      { name: 'Earn Points on Everything', price: '1pt/$1', image: img.rewards, description: 'Every dollar spent earns you 1 rewards point.' },
      { name: 'Member-Only Prices', price: 'Exclusive', image: img.deals, description: 'Get lower prices on select items just by scanning your card.', badge: 'Members' },
      { name: 'Birthday Reward', price: 'FREE', image: img.rewards, description: 'Free item on your birthday — we\'ll send you a surprise.', badge: '🎂' },
    ],
    promos: [
      { title: '🎉 Join Today & Get 100 Bonus Points', description: 'Download the app and sign up to get 100 points instantly.', badge: 'New Members', color: 'from-yellow-500 to-amber-700' },
    ],
  },
  'rewards-tiers': {
    title: 'Rewards Tiers',
    subtitle: 'Earn more, unlock better rewards. Four tiers to climb.',
    section: 'rewards',
    gradient: 'from-amber-600 to-orange-700',
    heroImage: img.rewards,
    backLink: { label: 'Rewards', href: '/rewards' },
    products: [
      { name: 'Bronze (0–499 pts)', price: 'Tier 1', image: img.rewards, description: 'Earn points, clip coupons, birthday rewards.', badge: 'Bronze' },
      { name: 'Silver (500–1499 pts)', price: 'Tier 2', image: img.rewards, description: '5¢/gal fuel discount + free fountain drink.', badge: 'Silver' },
      { name: 'Gold (1500–2999 pts)', price: 'Tier 3', image: img.rewards, description: '10¢/gal fuel + free food items + exclusive deals.', badge: 'Gold' },
      { name: 'Platinum (3000+ pts)', price: 'Tier 4', image: img.rewards, description: '15¢/gal fuel + premium rewards + priority offers.', badge: '⭐ Platinum' },
    ],
    promos: [
      { title: '🏆 Hit Gold This Month', description: 'Reach Gold tier and unlock free food rewards.', badge: 'Challenge', color: 'from-amber-600 to-orange-700' },
    ],
  },
  'fuel-savings-rewards': {
    title: 'Fuel Savings',
    subtitle: 'Save at the pump with every fill-up. More points = bigger discounts.',
    section: 'rewards',
    gradient: 'from-emerald-600 to-teal-700',
    heroImage: img.fuel,
    backLink: { label: 'Rewards', href: '/rewards' },
    products: [
      { name: '5¢/gal — Every Fill', price: 'Always On', image: img.fuel, description: 'Just scan your rewards card at the pump.' },
      { name: '10¢/gal at 500 Points', price: '500 pts', image: img.fuel, description: 'Redeem points for extra fuel savings.', badge: 'Popular' },
      { name: '15¢/gal at 1000 Points', price: '1000 pts', image: img.fuel, description: 'Stack your savings at higher tiers.', badge: 'Best' },
      { name: 'Double Fuel Points', price: 'Event', image: img.fuel, description: 'Earn 2x points on fuel during special events.', badge: 'Promo' },
    ],
    promos: [
      { title: '⛽ Double Fuel Points This Week', description: 'Earn 2x rewards points on every gallon.', badge: 'This Week', color: 'from-emerald-600 to-teal-700' },
    ],
  },
  'mobile-checkout': {
    title: 'Mobile Checkout',
    subtitle: 'Skip the line. Scan, pay, and go — all from your phone.',
    section: 'rewards',
    gradient: 'from-blue-600 to-indigo-700',
    heroImage: img.rewards,
    backLink: { label: 'Rewards', href: '/rewards' },
    products: [
      { name: 'Scan & Pay', price: 'Free', image: img.rewards, description: 'Scan items with your phone, pay in-app, and go.', badge: 'App Feature' },
      { name: 'Pay at the Pump', price: 'Free', image: img.fuel, description: 'Start pumping from your phone — no card needed.' },
      { name: 'Digital Receipts', price: 'Free', image: img.rewards, description: 'All your receipts saved in the app, automatically.' },
      { name: 'Apple Pay & Google Pay', price: 'Free', image: img.rewards, description: 'Tap to pay with your phone or watch.', badge: 'Contactless' },
    ],
    promos: [
      { title: '📱 First Mobile Checkout = 50 Bonus Points', description: 'Try mobile checkout and earn 50 bonus points.', badge: 'Try It', color: 'from-blue-600 to-indigo-700' },
    ],
  },
  'rewards-card': {
    title: 'Rewards Card',
    subtitle: 'Your physical or digital card — scan it every visit to earn points.',
    section: 'rewards',
    gradient: 'from-yellow-600 to-amber-700',
    heroImage: img.rewards,
    backLink: { label: 'Rewards', href: '/rewards' },
    products: [
      { name: 'Digital Card (App)', price: 'Free', image: img.rewards, description: 'Always on your phone — never forget it.', badge: 'Recommended' },
      { name: 'Physical Card', price: 'Free', image: img.rewards, description: 'Pick one up at any register — link to your account.' },
      { name: 'Key Tag', price: 'Free', image: img.rewards, description: 'Small key tag card — easy to scan.' },
      { name: 'Apple Wallet Pass', price: 'Free', image: img.rewards, description: 'Add to Apple Wallet for tap-to-scan.', badge: 'New' },
    ],
    promos: [
      { title: '🎴 Get Your Card Today', description: 'Ask any cashier or download the app to start earning.', badge: 'Free', color: 'from-yellow-600 to-amber-700' },
    ],
  },
  'community-discounts': {
    title: 'Community Discounts',
    subtitle: 'Special pricing for military, first responders, teachers, and seniors.',
    section: 'rewards',
    gradient: 'from-red-600 to-blue-700',
    heroImage: img.rewards,
    backLink: { label: 'Rewards', href: '/rewards' },
    products: [
      { name: 'Military Discount', price: '10% Off', image: img.rewards, description: 'Active duty & veterans — show valid ID.', badge: '🇺🇸 Military' },
      { name: 'First Responder Discount', price: '10% Off', image: img.rewards, description: 'Police, fire, EMS — show badge or ID.', badge: '🚒 First Resp' },
      { name: 'Teacher Discount', price: '10% Off', image: img.rewards, description: 'K-12 & college faculty — show school ID.', badge: '📚 Educators' },
      { name: 'Senior Discount', price: '10% Off', image: img.rewards, description: '60+ years — everyday savings.', badge: '👴 Seniors' },
    ],
    promos: [
      { title: '🤝 Thank You Discount', description: 'We appreciate those who serve. 10% off — every day.', badge: 'Community', color: 'from-red-600 to-blue-700' },
    ],
  },
}

// ─── combined lookup ────────────────────────────────────────────────────────

export const categoryPages: Record<string, CategoryPageData> = {
  ...foodPages,
  ...drinksPages,
  ...dealsPages,
  ...adultPages,
  ...rewardsPages,
}
