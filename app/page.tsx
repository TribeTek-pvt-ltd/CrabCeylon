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
import FoundersSection from './components/FoundersSection';
import ReservationModal from './components/ReservationModal';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import Footer from './components/Footer';
import ParallaxFoodAtmosphere from './components/ParallaxFoodAtmosphere';
import { MenuItem, OrderTrackingInfo, OrderStatus, INITIAL_ORDERS } from './data/restaurantData';
import { useCartState } from './data/cartState';

export default function Home() {
  const {
    cartItems,
    ordersMap,
    cartTotal,
    cartCount,
    handleAddToCart,
    handleQuickAdd,
    handleUpdateQuantity,
    handleRemoveItem,
    handleOrderPlaced,
    setOrdersMap
  } = useCartState();

  // Modals & Drawers State
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [customizingItem, setCustomizingItem] = useState<MenuItem | null>(null);
  const [isTrackerModalOpen, setIsTrackerModalOpen] = useState(false);
  const [isOrderSearchOpen, setIsOrderSearchOpen] = useState(false);
  const [isReservationOpen, setIsReservationOpen] = useState(false);
  const [placedOrderModal, setPlacedOrderModal] = useState<OrderTrackingInfo | null>(null);

  // Active Order currently being tracked in modal
  const [activeTrackingOrder, setActiveTrackingOrder] = useState<OrderTrackingInfo>(INITIAL_ORDERS['CC-8429']);

  // Order Placed successfully
  const onPlacedOrder = (newOrder: OrderTrackingInfo) => {
    handleOrderPlaced(newOrder);
    setActiveTrackingOrder(newOrder);
    setPlacedOrderModal(newOrder);
  };

  // Update order status (for demo/simulation)
  const handleUpdateOrderStatus = (orderId: string, nextStatus: OrderStatus) => {
    setOrdersMap((prev) => {
      const order = prev[orderId];
      if (!order) return prev;
      return { ...prev, [orderId]: { ...order, status: nextStatus } };
    });

    setActiveTrackingOrder((prev) => {
      if (prev.orderId === orderId) {
        return { ...prev, status: nextStatus };
      }
      return prev;
    });
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#ffffff] text-[#111827] selection:bg-[#dc2626] selection:text-white relative">
      {/* Dynamic Parallax Scroll Atmosphere (Floating Lobster, Spices, Chilies & Herbs from Video) */}
      <ParallaxFoodAtmosphere />

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
        {/* Clean Luxury Hero Section */}
        <Hero
          onOrderClick={() => {
            const el = document.getElementById('menu');
            if (el) el.scrollIntoView({ behavior: 'smooth' });
          }}
          onReserveClick={() => setIsReservationOpen(true)}
        />

        {/* The Catch Signature Section (Custom Crafted with Purpose Layout) */}
        <MenuSection
          onSelectItem={(item) => setCustomizingItem(item)}
          onQuickAdd={handleQuickAdd}
        />

        {/* Heritage & Origin Story */}
        <HeritageStory />

        {/* The Founders / Ministers of Crab */}
        <FoundersSection />

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
        onAddToCart={(item) => {
          handleAddToCart(item);
          setIsCartOpen(true);
        }}
      />

      {/* Cart Drawer */}
      <CartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        cartItems={cartItems}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveItem}
        onOrderPlaced={onPlacedOrder}
      />

      {/* Order Tracker Modal */}
      <OrderTrackerModal
        isOpen={isTrackerModalOpen}
        onClose={() => setIsTrackerModalOpen(false)}
        currentOrder={activeTrackingOrder}
        onUpdateOrderStatus={handleUpdateOrderStatus}
      />

      {/* Order Search Modal */}
      <OrderSearchModal
        isOpen={isOrderSearchOpen}
        onClose={() => setIsOrderSearchOpen(false)}
        allOrders={ordersMap}
        onTrackOrder={(order: OrderTrackingInfo) => {
          setActiveTrackingOrder(order);
          setIsOrderSearchOpen(false);
          setIsTrackerModalOpen(true);
        }}
      />

      {/* Order Placed Confirmation Modal */}
      {placedOrderModal && (
        <OrderConfirmationModal
          order={placedOrderModal}
          isOpen={!!placedOrderModal}
          onClose={() => setPlacedOrderModal(null)}
          onTrackOrder={() => {
            setPlacedOrderModal(null);
            setIsTrackerModalOpen(true);
          }}
        />
      )}

      {/* Table Reservation Modal */}
      <ReservationModal
        isOpen={isReservationOpen}
        onClose={() => setIsReservationOpen(false)}
      />
    </div>
  );
}
