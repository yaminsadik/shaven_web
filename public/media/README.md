# Media Assets

Drop your actual store photos here inside the appropriate subfolder.
All Unsplash placeholder URLs in the codebase have a `/* REPLACE:` comment
showing the exact local path to swap in.

---

## Folder Structure

```
public/media/
├── hero/           — Homepage hero & page-top backgrounds
├── food/           — Food item photos
├── categories/     — Category card images
├── gallery/        — In-store gallery grid photos
├── promotions/     — Deal & promo card backgrounds
├── adult/          — 21+ section (beer, wine, liquor)
├── app/            — App page screenshots / mockup screens
├── logo.png        — Brand logo (already in place)
└── store-exterior.png
```

---

## hero/

| File | Usage | Recommended size |
|------|-------|-----------------|
| `hero-bg.jpg` | Homepage hero section background | 1920×1080 min |
| `hero-video.mp4` | Optional hero background video | 1920×1080 |
| `food-page-hero.jpg` | Food page top banner | 1920×800 |
| `deals-page-hero.jpg` | Deals page top banner | 1920×800 |
| `app-page-hero.jpg` | App page top banner | 1920×800 |
| `stores-page-hero.jpg` | Stores page top banner | 1920×800 |
| `adult-page-hero.jpg` | 21+ page top banner | 1920×800 |

---

## food/

| File | Usage | Recommended size |
|------|-------|-----------------|
| `chicken.jpg` | Fried chicken signature item | 800×800 |
| `pizza.jpg` | Pizza by the slice | 800×800 |
| `roller-grill.jpg` | Roller grill items | 800×800 |
| `breakfast.jpg` | Breakfast sandwiches | 800×800 |
| `fountain.jpg` | Fountain drinks | 800×800 |

---

## categories/

| File | Usage | Recommended size |
|------|-------|-----------------|
| `hot-food.jpg` | Hot Food category card | 600×450 |
| `drinks.jpg` | Fountain & Coffee card | 600×450 |
| `fuel.jpg` | Fuel Up card | 600×450 |
| `deals.jpg` | Deals card | 600×450 |
| `rewards.jpg` | Rewards card | 600×450 |
| `21-plus.jpg` | Beer & Wine card | 600×450 |

---

## gallery/

| File | Usage | Recommended size |
|------|-------|-----------------|
| `exterior.jpg` | Store exterior (large, spans 2 cols) | 1200×600 |
| `food-case.jpg` | Hot food display case | 600×600 |
| `cooler.jpg` | Beverage cooler aisle | 600×600 |
| `coffee.jpg` | Coffee & fountain station | 600×600 |
| `interior.jpg` | Clean store interior | 600×600 |
| `pumps.jpg` | Gas pumps at night | 1200×600 |

---

## promotions/

| File | Usage | Recommended size |
|------|-------|-----------------|
| `roller.jpg` | Roller grill combo promo | 600×400 |
| `fuel.jpg` | Fill Up & Save promo | 600×400 |
| `rewards.jpg` | Double Points Weekend promo | 600×400 |
| `coffee.jpg` | Coffee deal promo | 600×400 |
| `delivery.jpg` | Delivery $7 off promo | 600×400 |

---

## adult/

| File | Usage | Recommended size |
|------|-------|-----------------|
| `beer.jpg` | Beer category card | 600×800 |
| `wine.jpg` | Wine category card | 600×800 |
| `spirits.jpg` | Liquor category card | 600×800 |
| `seltzer.jpg` | Seltzers & Coolers card | 600×800 |

---

## app/

| File | Usage | Recommended size |
|------|-------|-----------------|
| `screen-home.png` | App home screen (inside phone mockup) | 390×844 |
| `screen-rewards.png` | Rewards screen | 390×844 |
| `screen-deals.png` | Deals screen | 390×844 |

---

## How to swap placeholder URLs

Search for `/* REPLACE:` in the codebase — every Unsplash URL has one.

**Example:**
```ts
// Before
image: 'https://images.unsplash.com/photo-...?w=800&q=80',
/* REPLACE: /media/food/chicken.jpg */

// After
image: '/media/food/chicken.jpg',
```

For the hero section background, open `src/components/home/HeroSection.tsx`
and swap the `src` on the `<img>` tag, or uncomment the `<video>` block.
