export interface CrabSize {
  name: string;
  weight: string;
  priceDelta: number;
}

export interface MenuItem {
  id: string;
  title: string;
  category: 'crabs' | 'platters' | 'accompaniments' | 'beverages';
  price: number;
  description: string;
  image: string;
  rating: number;
  reviewsCount: number;
  badge?: string;
  isPopular?: boolean;
  isCrab?: boolean;
  spiceLevels?: string[];
  sizes?: CrabSize[];
  prepOptions?: string[];
}

export interface CartItem {
  cartId: string;
  item: MenuItem;
  quantity: number;
  selectedSize?: CrabSize;
  selectedSpice?: string;
  selectedPrep?: string;
  specialInstructions?: string;
  itemTotalPrice: number;
}

export type OrderStatus = 
  | 'confirmed'
  | 'selecting_catch'
  | 'wok_cooking'
  | 'dispatched'
  | 'delivered';

export interface OrderTrackingInfo {
  orderId: string;
  customerName: string;
  customerPhone: string;
  deliveryAddress: string;
  deliveryType: 'express' | 'pickup' | 'dinein';
  status: OrderStatus;
  createdAt: string;
  estimatedDeliveryTime: string;
  items: {
    title: string;
    quantity: number;
    size?: string;
    spice?: string;
    price: number;
  }[];
  subtotal: number;
  deliveryFee: number;
  discount: number;
  total: number;
  chefName: string;
  courierName: string;
  courierPhone: string;
  lagoonCatchId: string;
}

export const MENU_ITEMS: MenuItem[] = [
  {
    id: 'chili-crab',
    title: 'Imperial Ceylon Chili Crab',
    category: 'crabs',
    price: 68,
    description: 'Wild Ceylon lagoon mud crab seared over high heat in our house 21-spice sweet and fiery chili reduction, finished with fresh coriander and charred lime.',
    image: '/images/hero-crab.jpg',
    rating: 4.96,
    reviewsCount: 342,
    badge: 'Chef Signature',
    isPopular: true,
    isCrab: true,
    spiceLevels: ['Mild Ceylon', 'Classic Medium', 'Fiery Island Heat', 'Lagoon Scorcher'],
    sizes: [
      { name: 'Lagoon Select', weight: '700g', priceDelta: 0 },
      { name: 'Grand Reserve', weight: '900g', priceDelta: 25 },
      { name: 'Royal Jumbo', weight: '1.2kg', priceDelta: 55 },
      { name: 'Colossal Monster', weight: '1.5kg+', priceDelta: 90 }
    ],
    prepOptions: ['Whole Cracked Claws', 'Split & Dressed in Wok', 'Shell-Softened for Sharing']
  },
  {
    id: 'garlic-butter-crab',
    title: 'Golden Garlic Butter Mud Crab',
    category: 'crabs',
    price: 66,
    description: 'Bathed in sizzling grass-fed French butter infused with slow-caramelized Ontario garlic, freshly cracked Tellicherry black peppercorns, and fresh thyme.',
    image: '/images/garlic-butter-crab.jpg',
    rating: 4.93,
    reviewsCount: 289,
    badge: 'Patron Favorite',
    isPopular: true,
    isCrab: true,
    spiceLevels: ['Gentle Garlic Herb', 'Cracked Pepper Infused', 'Spiced Butter Warmth'],
    sizes: [
      { name: 'Lagoon Select', weight: '700g', priceDelta: 0 },
      { name: 'Grand Reserve', weight: '900g', priceDelta: 25 },
      { name: 'Royal Jumbo', weight: '1.2kg', priceDelta: 55 },
      { name: 'Colossal Monster', weight: '1.5kg+', priceDelta: 90 }
    ],
    prepOptions: ['Whole Cracked Claws', 'Split & Dressed in Butter']
  },
  {
    id: 'black-pepper-crab',
    title: 'Cast Iron Black Pepper Crab',
    category: 'crabs',
    price: 69,
    description: 'Wok-charred in an aromatic glaze of roasted green and black Ceylon highland peppercorns, caramelized shallots, and toasted island coriander seeds.',
    image: '/images/black-pepper-crab.jpg',
    rating: 4.91,
    reviewsCount: 215,
    badge: 'Highland Spiced',
    isCrab: true,
    spiceLevels: ['Aromatic Tellicherry', 'Bold Peppercorn', 'Highland Scorcher'],
    sizes: [
      { name: 'Lagoon Select', weight: '700g', priceDelta: 0 },
      { name: 'Grand Reserve', weight: '900g', priceDelta: 25 },
      { name: 'Royal Jumbo', weight: '1.2kg', priceDelta: 55 },
      { name: 'Colossal Monster', weight: '1.5kg+', priceDelta: 90 }
    ],
    prepOptions: ['Whole Cracked Claws', 'Split & Dressed in Cast Iron']
  },
  {
    id: 'jaffna-crab-curry',
    title: 'Authentic Jaffna Claypot Crab Curry',
    category: 'crabs',
    price: 64,
    description: 'A 200-year-old Northern Ceylon heirloom recipe. Wild mud crab braised slowly in stone-ground roasted spices, rich organic coconut cream, and wild moringa leaves.',
    image: '/images/jaffna-crab-curry.jpg',
    rating: 4.98,
    reviewsCount: 410,
    badge: 'Heirloom Recipe',
    isPopular: true,
    isCrab: true,
    spiceLevels: ['Traditional Jaffna Medium', 'Authentic Northern Fire'],
    sizes: [
      { name: 'Lagoon Select', weight: '700g', priceDelta: 0 },
      { name: 'Grand Reserve', weight: '900g', priceDelta: 25 },
      { name: 'Royal Jumbo', weight: '1.2kg', priceDelta: 55 }
    ],
    prepOptions: ['Simmered in Claypot', 'Extra Rich Coconut Gravy']
  },
  {
    id: 'ocean-platter',
    title: 'The Toronto Grand Ocean Tier',
    category: 'platters',
    price: 155,
    description: 'Three-tiered centerpiece of flame-grilled Negombo colossal prawns, Atlantic butter-poached lobster tail, crispy Rhode Island calamari, and seared Digby sea scallops.',
    image: '/images/ocean-platter.jpg',
    rating: 4.97,
    reviewsCount: 164,
    badge: 'Grand Feast (Serves 2-3)',
    isPopular: true,
    spiceLevels: ['Truffle Herb Butter', 'Smoked Ceylon Aioli']
  },
  {
    id: 'negombo-tiger-prawns',
    title: 'Flame-Kissed Colossal Tiger Prawns',
    category: 'platters',
    price: 48,
    description: 'Four wild ocean prawns seared over charcoal embers, basted with tamarind garlic emulsion, sea salt flakes, and fresh cilantro.',
    image: '/images/ocean-platter.jpg',
    rating: 4.89,
    reviewsCount: 198,
    badge: 'Wild Ocean Catch',
    spiceLevels: ['Herb Lemon Emulsion', 'Ceylon Chili Garlic']
  },
  {
    id: 'kade-bread',
    title: 'Woodfired Artisan Crust Bread',
    category: 'accompaniments',
    price: 9,
    description: 'Thick-crusted wood-baked sourdough loaf brushed with sea salt and roasted garlic herb butter. Crafted specifically for savoring crab sauces.',
    image: '/images/hero-crab.jpg',
    rating: 4.95,
    reviewsCount: 520,
    badge: 'Essential Accompaniment'
  },
  {
    id: 'ghee-basmati',
    title: 'Fragrant Ghee Basmati with Roasted Cashews',
    category: 'accompaniments',
    price: 12,
    description: 'Aged long-grain basmati tempered with pure pasture-fed cow ghee, green cardamom pods, Ceylon cinnamon bark, and golden cashews.',
    image: '/images/jaffna-crab-curry.jpg',
    rating: 4.90,
    reviewsCount: 310
  },
  {
    id: 'pol-roti',
    title: 'Handmade Coconut Flatbreads & Lunu Miris',
    category: 'accompaniments',
    price: 11,
    description: 'Fresh toasted coconut flatbreads served with stone-pounded shallot, lime juice, and sun-dried chili sambol.',
    image: '/images/jaffna-crab-curry.jpg',
    rating: 4.88,
    reviewsCount: 275
  },
  {
    id: 'ceylon-old-fashioned',
    title: 'Smoked Cinnamon Old Fashioned',
    category: 'beverages',
    price: 22,
    description: 'Crown Royal Northern Harvest Rye infused with Ceylon cinnamon smoke, artisanal bitters, raw organic cane syrup, and flamed orange peel.',
    image: '/images/hero-crab.jpg',
    rating: 4.98,
    reviewsCount: 182,
    badge: 'Bar Signature'
  },
  {
    id: 'passionfruit-punch',
    title: 'Coastal Passionfruit & Mint Cooler',
    category: 'beverages',
    price: 14,
    description: 'Freshly pressed tropical passionfruit nectar, garden spearmint, cold-pressed lime, and effervescent sparkling water.',
    image: '/images/ocean-platter.jpg',
    rating: 4.87,
    reviewsCount: 140
  }
];

export const INITIAL_ORDERS: Record<string, OrderTrackingInfo> = {
  'CC-8429': {
    orderId: 'CC-8429',
    customerName: 'Marcus Sterling',
    customerPhone: '+1 (416) 555-0182',
    deliveryAddress: 'Penthouse 32, 180 University Ave, Downtown Toronto, ON',
    deliveryType: 'express',
    status: 'wok_cooking',
    createdAt: '18:42 EST',
    estimatedDeliveryTime: '26 mins (Est. 19:15 EST)',
    items: [
      {
        title: 'Imperial Ceylon Chili Crab',
        quantity: 1,
        size: 'Royal Jumbo (1.2kg)',
        spice: 'Classic Medium',
        price: 123
      },
      {
        title: 'Woodfired Artisan Crust Bread',
        quantity: 2,
        price: 18
      },
      {
        title: 'Smoked Cinnamon Old Fashioned',
        quantity: 2,
        price: 44
      }
    ],
    subtotal: 185,
    deliveryFee: 0,
    discount: 25,
    total: 160,
    chefName: 'Executive Chef Rohan Fernando',
    courierName: 'Julian C. (Toronto Downtown Envoy)',
    courierPhone: '+1 (416) 555-8931',
    lagoonCatchId: 'CEY-LAGOON-8921 (Wild Caught & Flown to Toronto)'
  },
  'CC-9104': {
    orderId: 'CC-9104',
    customerName: 'Victoria Chen',
    customerPhone: '+1 (647) 555-7720',
    deliveryAddress: 'Table #12 - Yorkville Garden Salon, Crab Ceylon Toronto',
    deliveryType: 'dinein',
    status: 'selecting_catch',
    createdAt: '19:10 EST',
    estimatedDeliveryTime: '15 mins',
    items: [
      {
        title: 'Cast Iron Black Pepper Crab',
        quantity: 1,
        size: 'Grand Reserve (900g)',
        spice: 'Bold Peppercorn',
        price: 94
      },
      {
        title: 'Fragrant Ghee Basmati with Roasted Cashews',
        quantity: 1,
        price: 12
      }
    ],
    subtotal: 106,
    deliveryFee: 0,
    discount: 0,
    total: 106,
    chefName: 'Sous Chef Nalaka Priyashantha',
    courierName: 'Sommelier David',
    courierPhone: 'Direct at Table',
    lagoonCatchId: 'CEY-LAGOON-7412 (Inspected in Yorkville Saline Tank #1)'
  }
};
