'use client';

import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import MenuSection from './components/MenuSection';
import ItemCustomizerModal from './components/ItemCustomizerModal';
import CartDrawer from './components/CartDrawer';
import OrderTrackerModal from './components/OrderTrackerModal';
import OrderSearchModal from './components/OrderSearchModal';
import OrderConfirmationModal from './components/OrderConfirmationModal';
import HeritageStory from './components/HeritageStory';
import ReservationModal from './components/ReservationModal';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import Footer from './components/Footer';
import { MenuItem, CartItem, OrderTrackingInfo, OrderStatus, INITIAL_ORDERS } from './data/restaurantData';

export default function Home() {
  // Cart State
  const [cartItems, setCartItems] = useState<CartItem[]>([
    {
      cartId: 'default-chili-crab',
      item: {
        id: 'chili-crab',
        title: 'Imperial Ceylon Chili Crab',
        category: 'crabs',
        price: 68,
        description: 'Wild Ceylon lagoon mud crab seared over high heat in our house 21-spice sweet and fiery chili reduction.',
        image: '/images/hero-crab.jpg',
        rating: 4.96,
        reviewsCount: 342,
        isCrab: true
      },
      quantity: 1,
      selectedSize: { name: 'Royal Jumbo', weight: '1.2kg', priceDelta: 55 },
      selectedSpice: 'Classic Medium',
      selectedPrep: 'Whole Cracked Claws',
      itemTotalPrice: 123
    },
    {
      cartId: 'default-kade-bread',
      item: {
        id: 'kade-bread',
        title: 'Woodfired Artisan Crust Bread',
        category: 'accompaniments',
        price: 9,
        description: 'Thick-crusted wood-baked sourdough loaf brushed with sea salt and roasted garlic herb butter.',
        image: '/images/hero-crab.jpg',
        rating: 4.95,
        reviewsCount: 520
      },
      quantity: 2,
      itemTotalPrice: 18
    }
  ]);

  // All Orders store (seeded with sample Toronto orders + newly placed orders)
  const [ordersMap, setOrdersMap] = useState<Record<string, OrderTrackingInfo>>(INITIAL_ORDERS);

  // Modals & Drawers State
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [customizingItem, setCustomizingItem] = useState<MenuItem | null>(null);
  const [isTrackerModalOpen, setIsTrackerModalOpen] = useState(false);
  const [isOrderSearchOpen, setIsOrderSearchOpen] = useState(false);
  const [isReservationOpen, setIsReservationOpen] = useState(false);
  const [placedOrderModal, setPlacedOrderModal] = useState<OrderTrackingInfo | null>(null);

  // Active Order currently being tracked in modal
  const [activeTrackingOrder, setActiveTrackingOrder] = useState<OrderTrackingInfo>(INITIAL_ORDERS['CC-8429']);

  // Add customized item to cart
  const handleAddToCart = (customItem: CartItem) => {
    setCartItems((prev) => [...prev, customItem]);
    setIsCartOpen(true);
  };

  // Quick add standard item
  const handleQuickAdd = (item: MenuItem) => {
    const newCartItem: CartItem = {
      cartId: `${item.id}-${Date.now()}`,
      item,
      quantity: 1,
      itemTotalPrice: item.price
    };
    setCartItems((prev) => [...prev, newCartItem]);
    setIsCartOpen(true);
  };

  // Cart quantity controls
  const handleUpdateQuantity = (cartId: string, newQty: number) => {
    if (newQty <= 0) {
      handleRemoveItem(cartId);
      return;
    }
    setCartItems((prev) =>
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
    setCartItems((prev) => prev.filter((c) => c.cartId !== cartId));
  };

  // Order Placed successfully
  const handleOrderPlaced = (newOrder: OrderTrackingInfo) => {
    setOrdersMap((prev) => ({
      ...prev,
      [newOrder.orderId]: newOrder
    }));
    setActiveTrackingOrder(newOrder);
    setPlacedOrderModal(newOrder);
    setCartItems([]);
  };

  // Update order status (for demo/simulation)
  const handleUpdateOrderStatus = (orderId: string, nextStatus: OrderStatus) => {
    setOrdersMap((prev) => {
      const order = prev[orderId];
      if (!order) return prev;
      const updated = { ...order, status: nextStatus };
      return { ...prev, [orderId]: updated };
    });

    setActiveTrackingOrder((prev) => {
      if (prev.orderId === orderId) {
        return { ...prev, status: nextStatus };
      }
      return prev;
    });
  };

  const cartTotal = cartItems.reduce((acc, curr) => acc + curr.itemTotalPrice, 0);
  const cartCount = cartItems.reduce((acc, curr) => acc + curr.quantity, 0);

  return (
    <div className="min-h-screen flex flex-col bg-[#07090e] text-slate-100 selection:bg-[#c5a059] selection:text-black">
      {/* Top Fixed Navbar */}
      <Navbar
        cartCount={cartCount}
        cartTotal={cartTotal}
        onOpenCart={() => setIsCartOpen(true)}
        onOpenTracking={() => setIsTrackerModalOpen(true)}
        onOpenReservation={() => setIsReservationOpen(true)}
        onOpenOrderSearch={() => setIsOrderSearchOpen(true)}
      />

      <main className="flex-1">
        {/* Clean Luxury Hero Section (2-line title, no boxes) */}
        <Hero
          onOrderClick={() => {
            const el = document.getElementById('menu');
            if (el) el.scrollIntoView({ behavior: 'smooth' });
          }}
          onReserveClick={() => setIsReservationOpen(true)}
        />

        {/* The Catch Menu Section */}
        <MenuSection
          onSelectItem={(item) => setCustomizingItem(item)}
          onQuickAdd={handleQuickAdd}
        />

        {/* Heritage & Origin Story */}
        <HeritageStory />

        {/* Acclaimed Testimonials */}
        <Testimonials />

        {/* Guest Inquiries & FAQ */}
        <FAQ />
      </main>

      {/* Footer */}
      <Footer
        onOpenOrderSearch={() => setIsOrderSearchOpen(true)}
        onOpenReservation={() => setIsReservationOpen(true)}
      />

      {/* Item Customizer Modal */}
      <ItemCustomizerModal
        item={customizingItem}
        isOpen={!!customizingItem}
        onClose={() => setCustomizingItem(null)}
        onAddToCart={handleAddToCart}
      />

      {/* Cart Slide-Over Drawer */}
      <CartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        cartItems={cartItems}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveItem}
        onOrderPlaced={handleOrderPlaced}
      />

      {/* Order Search by ID Modal */}
      <OrderSearchModal
        isOpen={isOrderSearchOpen}
        onClose={() => setIsOrderSearchOpen(false)}
        allOrders={ordersMap}
        onTrackOrder={(order) => {
          setActiveTrackingOrder(order);
          setIsTrackerModalOpen(true);
        }}
      />

      {/* Full Live Order Tracker Modal */}
      <OrderTrackerModal
        isOpen={isTrackerModalOpen}
        onClose={() => setIsTrackerModalOpen(false)}
        currentOrder={activeTrackingOrder}
        onUpdateOrderStatus={handleUpdateOrderStatus}
      />

      {/* Order Confirmation Celebratory Modal */}
      <OrderConfirmationModal
        isOpen={!!placedOrderModal}
        order={placedOrderModal}
        onClose={() => setPlacedOrderModal(null)}
        onTrackOrder={() => setIsTrackerModalOpen(true)}
      />

      {/* Table Reservation Modal */}
      <ReservationModal
        isOpen={isReservationOpen}
        onClose={() => setIsReservationOpen(false)}
      />
    </div>
  );
}
