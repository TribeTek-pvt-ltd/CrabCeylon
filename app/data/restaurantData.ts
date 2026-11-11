export interface CrabSize {
  name: string;
  weight: string;
  priceDelta: number;
}

export type MenuCategory =
  | 'all'
  | 'crab-lobster'
  | 'boil'
  | 'kottu'
  | 'fried-rice'
  | 'pasta'
  | 'dinners'
  | 'pittu'
  | 'appetizers'
  | 'dessert';

export interface MenuItem {
  id: string;
  title: string;
  category: MenuCategory;
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
  note?: string;
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
  // ================= CRAB & LOBSTER =================
  {
    id: 'crab-signature',
    title: 'CRAB',
    category: 'crab-lobster',
    price: 44.99,
    description: 'Crab prepared in your choice of signature flavour and served with corn and potatoes.',
    image: '/images/hero-crab.jpg',
    rating: 4.98,
    reviewsCount: 380,
    badge: 'Signature Dish',
    isPopular: true,
    isCrab: true,
    spiceLevels: ['Chili Garlic', 'Black Pepper', 'Curry', 'Deviled'],
    prepOptions: ['Served with Corn and Potatoes']
  },
  {
    id: 'lobster-signature',
    title: 'LOBSTER',
    category: 'crab-lobster',
    price: 65.00,
    description: 'Lobster prepared to order in your choice of signature flavour and served with corn and potatoes. Market Price delicacy.',
    image: '/images/black-pepper-crab.jpg',
    rating: 4.96,
    reviewsCount: 210,
    badge: 'Market Price Delicacy',
    isPopular: true,
    spiceLevels: ['Ginger Garlic', 'Deviled', 'Black Pepper'],
    prepOptions: ['Served with Corn and Potatoes']
  },

  // ================= PREMIUM SEAFOOD BOIL =================
  {
    id: 'seafood-boil',
    title: 'PREMIUM SEAFOOD BOIL',
    category: 'boil',
    price: 129.99,
    description: 'A generous seafood feast featuring lobster tail, blue crab, mussels, scallops and shrimp, served with corn and potatoes.',
    image: '/images/seafood-boil.jpg',
    rating: 4.99,
    reviewsCount: 195,
    badge: 'Chef Grand Feast (Serves 2-3)',
    isPopular: true,
    sizes: [
      { name: 'Standard Boil Feast', weight: 'Full Platter', priceDelta: 0 },
      { name: 'Upgrade to Snow Crab', weight: 'Snow Crab Added', priceDelta: 20 }
    ],
    prepOptions: ['Standard Boil Feast', 'Upgrade to Snow Crab (+$20)']
  },

  // ================= CRAB CEYLON KOTTU =================
  {
    id: 'chicken-kottu',
    title: 'Chicken Kottu',
    category: 'kottu',
    price: 15.99,
    description: 'Chopped roti with seasoned chicken, vegetables and spices.',
    image: '/images/ceylon-kottu.jpg',
    rating: 4.88,
    reviewsCount: 220,
    spiceLevels: ['Mild', 'Medium', 'Hot', 'Extra Spicy']
  },
  {
    id: 'mutton-kottu',
    title: 'Mutton Kottu',
    category: 'kottu',
    price: 16.99,
    description: 'Chopped roti with tender mutton, vegetables and bold spices.',
    image: '/images/ceylon-kottu.jpg',
    rating: 4.92,
    reviewsCount: 275,
    badge: 'Guest Favorite',
    spiceLevels: ['Mild', 'Medium', 'Hot', 'Extra Spicy']
  },
  {
    id: 'shrimp-kottu',
    title: 'Shrimp Kottu',
    category: 'kottu',
    price: 18.99,
    description: 'Chopped roti with succulent shrimp, vegetables and aromatic seasonings.',
    image: '/images/ceylon-kottu.jpg',
    rating: 4.90,
    reviewsCount: 185,
    spiceLevels: ['Mild', 'Medium', 'Hot', 'Extra Spicy']
  },
  {
    id: 'squid-kottu',
    title: 'Squid Kottu',
    category: 'kottu',
    price: 24.99,
    description: 'Chopped roti with tender squid, vegetables and spices.',
    image: '/images/ceylon-kottu.jpg',
    rating: 4.87,
    reviewsCount: 140,
    spiceLevels: ['Mild', 'Medium', 'Hot', 'Extra Spicy']
  },
  {
    id: 'crab-kottu',
    title: 'Crab Kottu',
    category: 'kottu',
    price: 29.99,
    description: 'Chopped roti with flavourful crab, vegetables and signature seasonings.',
    image: '/images/ceylon-kottu.jpg',
    rating: 4.95,
    reviewsCount: 310,
    badge: 'House Specialty',
    isPopular: true,
    spiceLevels: ['Mild', 'Medium', 'Hot', 'Extra Spicy']
  },
  {
    id: 'lobster-shrimp-kottu',
    title: 'Lobster & Shrimp Kottu',
    category: 'kottu',
    price: 39.99,
    description: 'A premium kottu with lobster, succulent shrimp, chopped roti and vegetables.',
    image: '/images/ceylon-kottu.jpg',
    rating: 4.97,
    reviewsCount: 165,
    badge: 'Luxury Entrée',
    isPopular: true,
    spiceLevels: ['Mild', 'Medium', 'Hot', 'Extra Spicy']
  },
  {
    id: 'crab-ceylon-special-kottu',
    title: 'Crab Ceylon Special Kottu',
    category: 'kottu',
    price: 39.99,
    description: 'Our signature combination of crab meat, chicken and shrimp with chopped roti and vegetables.',
    image: '/images/ceylon-kottu.jpg',
    rating: 4.99,
    reviewsCount: 420,
    badge: 'Signature Triple Mix',
    isPopular: true,
    spiceLevels: ['Mild', 'Medium', 'Hot', 'Extra Spicy']
  },
  {
    id: 'crab-ceylon-seafood-kottu',
    title: 'Crab Ceylon Seafood Kottu',
    category: 'kottu',
    price: 39.99,
    description: 'A seafood-loaded combination of crab meat, squid and shrimp with chopped roti and vegetables.',
    image: '/images/ceylon-kottu.jpg',
    rating: 4.96,
    reviewsCount: 340,
    badge: 'Ocean Loaded',
    isPopular: true,
    spiceLevels: ['Mild', 'Medium', 'Hot', 'Extra Spicy']
  },

  // ================= FRIED RICE =================
  {
    id: 'chicken-fried-rice',
    title: 'Chicken Fried Rice',
    category: 'fried-rice',
    price: 20.99,
    description: 'Flavourful fried rice with seasoned chicken, vegetables and aromatic spices.',
    image: '/images/ceylon-fried-rice.jpg',
    rating: 4.86,
    reviewsCount: 190
  },
  {
    id: 'shrimp-fried-rice',
    title: 'Shrimp Fried Rice',
    category: 'fried-rice',
    price: 22.99,
    description: 'Fragrant fried rice with succulent shrimp, vegetables and seasonings.',
    image: '/images/ceylon-fried-rice.jpg',
    rating: 4.89,
    reviewsCount: 205
  },
  {
    id: 'squid-fried-rice',
    title: 'Squid Fried Rice',
    category: 'fried-rice',
    price: 25.99,
    description: 'Flavourful fried rice with tender squid, vegetables and aromatic seasonings.',
    image: '/images/ceylon-fried-rice.jpg',
    rating: 4.85,
    reviewsCount: 130
  },
  {
    id: 'chicken-shrimp-fried-rice',
    title: 'Chicken & Shrimp Fried Rice',
    category: 'fried-rice',
    price: 24.99,
    description: 'A delicious combination of seasoned chicken and vegetables with succulent shrimp.',
    image: '/images/ceylon-fried-rice.jpg',
    rating: 4.91,
    reviewsCount: 245
  },
  {
    id: 'crab-legs-shrimp-fried-rice',
    title: 'Crab Legs & Shrimp Fried Rice',
    category: 'fried-rice',
    price: 29.99,
    description: 'Ceylon-style fried rice served with crab legs and succulent shrimp and vegetables.',
    image: '/images/ceylon-fried-rice.jpg',
    rating: 4.94,
    reviewsCount: 280,
    badge: 'Chef Favorite',
    isPopular: true
  },
  {
    id: 'crab-ceylon-special-fried-rice',
    title: 'Crab Ceylon Special Fried Rice',
    category: 'fried-rice',
    price: 39.99,
    description: 'Our signature seafood fried rice loaded with squid, shrimp and crab meat and vegetables.',
    image: '/images/ceylon-fried-rice.jpg',
    rating: 4.98,
    reviewsCount: 360,
    badge: 'Loaded Specialty',
    isPopular: true
  },
  {
    id: 'lobster-shrimp-fried-rice',
    title: 'Lobster & Shrimp Fried Rice',
    category: 'fried-rice',
    price: 39.99,
    description: 'Premium Ceylon-style fried rice with lobster and succulent shrimp and vegetables.',
    image: '/images/ceylon-fried-rice.jpg',
    rating: 4.97,
    reviewsCount: 190,
    badge: 'Luxury Feast',
    isPopular: true
  },

  // ================= PASTA =================
  {
    id: 'creamy-shrimp-pasta',
    title: 'Crab Ceylon Creamy Shrimp Pasta',
    category: 'pasta',
    price: 22.99,
    description: 'Succulent shrimp and linguine in our rich and creamy rosé sauce. Make it your way with your choice of spice.',
    image: '/images/ceylon-pasta.jpg',
    rating: 4.93,
    reviewsCount: 260,
    badge: 'Signature Rosé',
    isPopular: true,
    spiceLevels: ['Mild', 'Medium', 'Hot']
  },
  {
    id: 'cajun-chicken-pasta',
    title: 'Cajun Chicken Pasta',
    category: 'pasta',
    price: 22.99,
    description: 'Cajun-seasoned chicken and linguine in our creamy rosé sauce with a flavourful kick.',
    image: '/images/ceylon-pasta.jpg',
    rating: 4.88,
    reviewsCount: 195,
    spiceLevels: ['Mild', 'Medium', 'Hot']
  },
  {
    id: 'crab-pasta',
    title: 'Crab Ceylon Crab Pasta',
    category: 'pasta',
    price: 29.99,
    description: 'Flavourful crab meat and linguine in our rich and creamy rosé sauce.',
    image: '/images/ceylon-pasta.jpg',
    rating: 4.96,
    reviewsCount: 310,
    badge: 'Crab Lover Choice',
    isPopular: true,
    spiceLevels: ['Mild', 'Medium', 'Hot']
  },
  {
    id: 'lobster-shrimp-pasta',
    title: 'Chef Special Lobster & Shrimp Pasta',
    category: 'pasta',
    price: 39.99,
    description: 'Lobster and succulent shrimp with linguine in our rich and creamy rosé sauce.',
    image: '/images/ceylon-pasta.jpg',
    rating: 4.98,
    reviewsCount: 225,
    badge: 'Chef Special',
    isPopular: true,
    spiceLevels: ['Mild', 'Medium', 'Hot']
  },

  // ================= SIGNATURE DINNERS =================
  {
    id: 'ocean-pearl',
    title: 'Ocean Pearl',
    category: 'dinners',
    price: 54.99,
    description: 'A premium combination of lobster, salmon and shrimp served with mixed seasonal vegetables.',
    image: '/images/ocean-platter.jpg',
    rating: 4.98,
    reviewsCount: 270,
    badge: 'Signature Trio',
    isPopular: true
  },
  {
    id: 'grilled-salmon',
    title: 'Grilled Salmon',
    category: 'dinners',
    price: 29.99,
    description: 'Seasoned salmon grilled to perfection and served with mixed seasonal vegetables.',
    image: '/images/ocean-platter.jpg',
    rating: 4.91,
    reviewsCount: 185
  },
  {
    id: 'grilled-shrimp',
    title: 'Grilled Shrimp',
    category: 'dinners',
    price: 24.99,
    description: 'Seasoned shrimp grilled to perfection and served with mixed seasonal vegetables.',
    image: '/images/ocean-platter.jpg',
    rating: 4.89,
    reviewsCount: 160
  },
  {
    id: 'grilled-chicken',
    title: 'Grilled Chicken',
    category: 'dinners',
    price: 25.99,
    description: 'Juicy seasoned chicken grilled to perfection and served with mixed seasonal vegetables.',
    image: '/images/ocean-platter.jpg',
    rating: 4.87,
    reviewsCount: 145
  },

  // ================= CRAB CEYLON PITTU COMBOS =================
  {
    id: 'crab-curry-pittu',
    title: 'Crab Curry & Pittu',
    category: 'pittu',
    price: 27.99,
    description: 'Soft steamed pittu served with rich Ceylon-style crab curry and an omelette.',
    image: '/images/pittu-combo.jpg',
    rating: 4.97,
    reviewsCount: 390,
    badge: 'Island Heritage',
    isPopular: true
  },
  {
    id: 'spicy-squid-pittu',
    title: 'Spicy Squid & Pittu',
    category: 'pittu',
    price: 25.99,
    description: 'Soft steamed pittu served with spicy seasoned squid and an omelette.',
    image: '/images/pittu-combo.jpg',
    rating: 4.90,
    reviewsCount: 175
  },
  {
    id: 'shrimp-curry-pittu',
    title: 'Shrimp Curry & Pittu',
    category: 'pittu',
    price: 25.99,
    description: 'Soft steamed pittu served with aromatic Ceylon-style shrimp curry and an omelette.',
    image: '/images/pittu-combo.jpg',
    rating: 4.92,
    reviewsCount: 215
  },

  // ================= APPETIZERS & SOUPS =================
  {
    id: 'cheese-sticks',
    title: 'Cheese Sticks',
    category: 'appetizers',
    price: 12.99,
    description: 'Golden-fried cheese sticks served with marinara sauce.',
    image: '/images/hero-crab.jpg',
    rating: 4.84,
    reviewsCount: 110
  },
  {
    id: 'chicken-wings',
    title: 'Chicken Wings',
    category: 'appetizers',
    price: 15.99,
    description: 'Crispy chicken wings served with fries.',
    image: '/images/hero-crab.jpg',
    rating: 4.90,
    reviewsCount: 230,
    spiceLevels: ['House Spicy', 'Dry Rub', 'BBQ', 'Hot', 'Honey Garlic', 'Medium']
  },
  {
    id: 'calamari',
    title: 'Calamari',
    category: 'appetizers',
    price: 16.99,
    description: 'Crispy calamari served with our signature in-house sauce.',
    image: '/images/ocean-platter.jpg',
    rating: 4.93,
    reviewsCount: 280,
    badge: 'Crispy Favorite',
    isPopular: true
  },
  {
    id: 'devilled-shrimp',
    title: 'Devilled Shrimp',
    category: 'appetizers',
    price: 22.99,
    description: 'Juicy shrimp cooked in a spicy, tangy devilled sauce with onions and peppers.',
    image: '/images/ocean-platter.jpg',
    rating: 4.95,
    reviewsCount: 240,
    badge: 'Spicy & Tangy',
    isPopular: true
  },
  {
    id: 'mussels',
    title: 'Mussels',
    category: 'appetizers',
    price: 22.99,
    description: 'Tender mussels cooked with bold, savoury seasonings.',
    image: '/images/ocean-platter.jpg',
    rating: 4.88,
    reviewsCount: 155
  },
  {
    id: 'seafood-kool',
    title: 'Seafood Kool',
    category: 'appetizers',
    price: 24.99,
    description: 'A rich Sri Lankan seafood soup made with seafood and aromatic spices. Available weekends only.',
    image: '/images/jaffna-crab-curry.jpg',
    rating: 4.99,
    reviewsCount: 310,
    badge: 'Weekends Only',
    isPopular: true
  },

  // ================= DESSERT =================
  {
    id: 'strawberry-cheesecake',
    title: 'Strawberry Cheesecake',
    category: 'dessert',
    price: 12.99,
    description: 'Rich and creamy cheesecake finished with a sweet strawberry topping.',
    image: '/images/hero-crab.jpg',
    rating: 4.94,
    reviewsCount: 190,
    badge: 'Sweet Finale'
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
        title: 'CRAB (Chili Garlic)',
        quantity: 1,
        spice: 'Chili Garlic',
        price: 44.99
      },
      {
        title: 'Crab Ceylon Special Kottu',
        quantity: 1,
        spice: 'Medium',
        price: 39.99
      }
    ],
    subtotal: 84.98,
    deliveryFee: 0,
    discount: 5.00,
    total: 79.98,
    chefName: 'Chef Dharshan & Master Wok Brigade',
    courierName: 'Jean-Luc Gagnon',
    courierPhone: '+1 (416) 555-0391',
    lagoonCatchId: 'CC-NE-7482'
  },
  'CC-9104': {
    orderId: 'CC-9104',
    customerName: 'Elena Rostova',
    customerPhone: '+1 (416) 555-0499',
    deliveryAddress: 'Suite 1402, 110 Bloor St W, Yorkville, Toronto, ON',
    deliveryType: 'express',
    status: 'selecting_catch',
    createdAt: '18:55 EST',
    estimatedDeliveryTime: '38 mins (Est. 19:33 EST)',
    items: [
      {
        title: 'Premium Seafood Boil',
        quantity: 1,
        size: 'Upgrade to Snow Crab',
        price: 149.99
      }
    ],
    subtotal: 149.99,
    deliveryFee: 0,
    discount: 0,
    total: 149.99,
    chefName: 'Chef Dharshan Team',
    courierName: 'Pending Dispatch',
    courierPhone: 'Awaiting Pickup',
    lagoonCatchId: 'CC-JA-9031'
  }
};
