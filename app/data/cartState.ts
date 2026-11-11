'use client';

import { useState, useEffect } from 'react';
import { CartItem, MenuItem, OrderTrackingInfo, INITIAL_ORDERS } from './restaurantData';

const CART_STORAGE_KEY = 'crab_ceylon_cart_v1';
const ORDERS_STORAGE_KEY = 'crab_ceylon_orders_v1';

const DEFAULT_INITIAL_CART: CartItem[] = [
  {
    cartId: 'default-crab-ceylon',
    item: {
      id: 'crab-signature',
      title: 'Crab (Signature Preparation)',
      category: 'crab-lobster',
      price: 44.99,
      description: 'Crab prepared in your choice of signature flavour and served with sweet corn and roasted potatoes.',
      image: '/images/hero-crab.jpg',
      rating: 4.98,
      reviewsCount: 384,
      isCrab: true,
      spiceLevels: ['Chili Garlic', 'Black Pepper', 'Curry', 'Deviled']
    },
    quantity: 1,
    selectedSpice: 'Chili Garlic',
    itemTotalPrice: 44.99
  },
  {
    cartId: 'default-special-kottu',
    item: {
      id: 'crab-ceylon-special-kottu',
      title: 'Crab Ceylon Special Kottu',
      category: 'kottu',
      price: 39.99,
      description: 'Our signature combination of crab meat, chicken and shrimp with chopped roti and vegetables.',
      image: '/images/ceylon-kottu.jpg',
      rating: 4.97,
      reviewsCount: 290,
      spiceLevels: ['Mild', 'Medium', 'Hot', 'Extra Spicy']
    },
    quantity: 1,
    selectedSpice: 'Medium',
    itemTotalPrice: 39.99
  }
];

export function useCartState() {
  const [cartItems, setCartItems] = useState<CartItem[]>(DEFAULT_INITIAL_CART);
  const [ordersMap, setOrdersMap] = useState<Record<string, OrderTrackingInfo>>(INITIAL_ORDERS);
  const [isInitialized, setIsInitialized] = useState(false);

  // Load from localStorage on client mount
  useEffect(() => {
    try {
      const storedCart = localStorage.getItem(CART_STORAGE_KEY);
      if (storedCart) {
        const parsed = JSON.parse(storedCart);
        if (Array.isArray(parsed) && parsed.length > 0) {
          setCartItems(parsed);
        }
      }

      const storedOrders = localStorage.getItem(ORDERS_STORAGE_KEY);
      if (storedOrders) {
        const parsedOrders = JSON.parse(storedOrders);
        if (parsedOrders && typeof parsedOrders === 'object') {
          setOrdersMap(parsedOrders);
        }
      }
    } catch {
      // Ignore parse errors on first load
    }
    setIsInitialized(true);
  }, []);

  // Save to localStorage whenever cart changes
  const updateCartItems = (newItems: CartItem[] | ((prev: CartItem[]) => CartItem[])) => {
    setCartItems((prev) => {
      const resolved = typeof newItems === 'function' ? newItems(prev) : newItems;
      try {
        localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(resolved));
      } catch {}
      return resolved;
    });
  };

  const handleAddToCart = (customItem: CartItem) => {
    updateCartItems((prev) => [...prev, customItem]);
  };

  const handleQuickAdd = (item: MenuItem) => {
    const newCartItem: CartItem = {
      cartId: `${item.id}-${Date.now()}`,
      item,
      quantity: 1,
      itemTotalPrice: item.price
    };
    updateCartItems((prev) => [...prev, newCartItem]);
  };

  const handleUpdateQuantity = (cartId: string, newQty: number) => {
    if (newQty <= 0) {
      handleRemoveItem(cartId);
      return;
    }
    updateCartItems((prev) =>
      prev.map((c) => {
        if (c.cartId === cartId) {
          const unitPrice = c.itemTotalPrice / c.quantity;
          return {
            ...c,
            quantity: newQty,
            itemTotalPrice: unitPrice * newQty
          };
        }
        return c;
      })
    );
  };

  const handleRemoveItem = (cartId: string) => {
    updateCartItems((prev) => prev.filter((c) => c.cartId !== cartId));
  };

  const handleOrderPlaced = (newOrder: OrderTrackingInfo) => {
    setOrdersMap((prev) => {
      const updated = {
        ...prev,
        [newOrder.orderId]: newOrder
      };
      try {
        localStorage.setItem(ORDERS_STORAGE_KEY, JSON.stringify(updated));
      } catch {}
      return updated;
    });
    updateCartItems([]);
  };

  const cartTotal = cartItems.reduce((acc, curr) => acc + curr.itemTotalPrice, 0);
  const cartCount = cartItems.reduce((acc, curr) => acc + curr.quantity, 0);

  return {
    cartItems,
    ordersMap,
    cartTotal,
    cartCount,
    isInitialized,
    handleAddToCart,
    handleQuickAdd,
    handleUpdateQuantity,
    handleRemoveItem,
    handleOrderPlaced,
    setOrdersMap
  };
}

