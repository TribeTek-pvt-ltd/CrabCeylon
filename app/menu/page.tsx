'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {
  Search,
  Flame,
  Star,
  Plus,
  ArrowLeft,
  Sparkles,
  ShoppingBag,
  ChevronRight
} from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ItemCustomizerModal from '../components/ItemCustomizerModal';
import CartDrawer from '../components/CartDrawer';
import OrderTrackerModal from '../components/OrderTrackerModal';
import OrderSearchModal from '../components/OrderSearchModal';
import OrderConfirmationModal from '../components/OrderConfirmationModal';
import ReservationModal from '../components/ReservationModal';
import VisualMainFilter from '../components/VisualMainFilter';
import FoodCard from '../components/FoodCard';
import { MENU_ITEMS, MenuItem, OrderTrackingInfo, OrderStatus, INITIAL_ORDERS } from '../data/restaurantData';
import { useCartState } from '../data/cartState';

export default function FullMenuPage() {
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

  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedSpiceFilter, setSelectedSpiceFilter] = useState<string>('all');

  // Modals state
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [customizingItem, setCustomizingItem] = useState<MenuItem | null>(null);
  const [isTrackerModalOpen, setIsTrackerModalOpen] = useState(false);
  const [isOrderSearchOpen, setIsOrderSearchOpen] = useState(false);
  const [isReservationOpen, setIsReservationOpen] = useState(false);
  const [placedOrderModal, setPlacedOrderModal] = useState<OrderTrackingInfo | null>(null);
  const [activeTrackingOrder, setActiveTrackingOrder] = useState<OrderTrackingInfo>(INITIAL_ORDERS['CC-8429']);

  const visualCategories = [
    {
      id: 'all',
      label: 'All Curations',
      shortLabel: 'All',
      image: '/images/hero-crab.jpg',
      count: MENU_ITEMS.length
    },
    {
      id: 'crab-lobster',
      label: 'Crab & Lobster',
      shortLabel: 'Crabs',
      image: '/images/black-pepper-crab.jpg',
      count: MENU_ITEMS.filter((i) => i.category === 'crab-lobster').length
    },
    {
      id: 'boil',
      label: 'Seafood Boil',
      shortLabel: 'Boils',
      image: '/images/seafood-boil.jpg',
      count: MENU_ITEMS.filter((i) => i.category === 'boil').length
    },
    {
      id: 'kottu',
      label: 'Crab Ceylon Kottu',
      shortLabel: 'Kottu',
      image: '/images/ceylon-kottu.jpg',
      count: MENU_ITEMS.filter((i) => i.category === 'kottu').length
    },
    {
      id: 'fried-rice',
      label: 'Ceylon Fried Rice',
      shortLabel: 'Rice',
      image: '/images/ceylon-fried-rice.jpg',
      count: MENU_ITEMS.filter((i) => i.category === 'fried-rice').length
    },
    {
      id: 'pasta',
      label: 'Pasta & Noodles',
      shortLabel: 'Pasta',
      image: '/images/ceylon-pasta.jpg',
      count: MENU_ITEMS.filter((i) => i.category === 'pasta').length
    },
    {
      id: 'dinners',
      label: 'Signature Dinners',
      shortLabel: 'Feasts',
      image: '/images/ocean-platter.jpg',
      count: MENU_ITEMS.filter((i) => i.category === 'dinners').length
    },
    {
      id: 'pittu',
      label: 'Pittu Combos',
      shortLabel: 'Pittu',
      image: '/images/pittu-combo.jpg',
      count: MENU_ITEMS.filter((i) => i.category === 'pittu').length
    },
    {
      id: 'appetizers',
      label: 'Appetizers & Soups',
      shortLabel: 'Soups',
      image: '/images/jaffna-crab-curry.jpg',
      count: MENU_ITEMS.filter((i) => i.category === 'appetizers').length
    },
    {
      id: 'dessert',
      label: 'Ceylon Desserts',
      shortLabel: 'Dessert',
      image: '/images/hero-crab.jpg',
      count: MENU_ITEMS.filter((i) => i.category === 'dessert').length
    }
  ];

  const categories = visualCategories;

  const filteredItems = MENU_ITEMS.filter((item) => {
    const matchesCategory = activeCategory === 'all' || item.category === activeCategory;
    const matchesSearch =
      item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesSpice =
      selectedSpiceFilter === 'all' ||
      (item.spiceLevels && item.spiceLevels.some((s) => s.toLowerCase().includes(selectedSpiceFilter.toLowerCase())));

    return matchesCategory && matchesSearch && matchesSpice;
  });

  const onPlacedOrder = (newOrder: OrderTrackingInfo) => {
    handleOrderPlaced(newOrder);
    setActiveTrackingOrder(newOrder);
    setPlacedOrderModal(newOrder);
  };

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
    <div className="min-h-screen flex flex-col bg-[#ffffff] text-[#111827] selection:bg-[#dc2626] selection:text-white">
      {/* Top Navbar */}
      <Navbar
        cartCount={cartCount}
        cartTotal={cartTotal}
        onOpenCart={() => setIsCartOpen(true)}
        onOpenTracking={() => setIsTrackerModalOpen(true)}
        onOpenReservation={() => setIsReservationOpen(true)}
        onOpenOrderSearch={() => setIsOrderSearchOpen(true)}
      />

      <main className="flex-1 pt-16 sm:pt-20 pb-20">
        
        {/* Breadcrumb & Navigation Back */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 pt-4 pb-6">
          <div className="flex items-center gap-2 text-xs font-manrope uppercase tracking-wider text-stone-500">
            <Link href="/" className="hover:text-[#dc2626] transition-colors flex items-center gap-1">
              <ArrowLeft className="w-3.5 h-3.5" />
              Home
            </Link>
            <ChevronRight className="w-3.5 h-3.5 text-stone-400" />
            <span className="text-[#dc2626] font-bold">The Full Menu</span>
          </div>
        </div>

        {/* Page Editorial Header */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 mb-12">
          <div className="text-center max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-red-50 border border-red-200 mb-4">
              <Sparkles className="w-3.5 h-3.5 text-[#dc2626]" />
              <span className="text-[11px] font-manrope uppercase tracking-[0.25em] font-bold text-[#dc2626]">
                Complete Ceylon Seafood Curation
              </span>
            </div>

            <h1 className="font-didone text-4xl sm:text-6xl md:text-7xl font-black text-[#111827] tracking-tight mb-3">
              The Full Catch Menu
            </h1>

            <p className="font-serif italic text-xl sm:text-2xl text-[#dc2626] font-light mb-4">
              &ldquo;Culinary artistry with a splash of Sea&rdquo;
            </p>

            <p className="font-manrope text-stone-600 text-xs sm:text-sm md:text-base leading-relaxed max-w-2xl mx-auto">
              Every dish is prepared to order using authentic stone-ground spices, live 18°C tank mud crabs, fresh lobster, and hand-chopped kottu.
            </p>
          </div>
        </div>

        {/* Visual Main Filter (Circular Dishes, Badges & Actions matching the Reference Design) */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
          <VisualMainFilter
            categories={visualCategories}
            activeCategory={activeCategory}
            onSelectCategory={(catId) => {
              setActiveCategory(catId);
              setSearchQuery('');
            }}
            searchQuery={searchQuery}
            onSearchChange={setSearchQuery}
            filteredCount={filteredItems.length}
            totalCount={MENU_ITEMS.length}
            onReset={() => {
              setActiveCategory('all');
              setSearchQuery('');
              setSelectedSpiceFilter('all');
            }}
          />
        </div>

        {/* Menu Items Grid */}
        <div id="menu-curations-grid" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
          {filteredItems.length === 0 ? (
            <div className="text-center py-20 bg-white rounded-3xl border border-stone-200 p-8">
              <div className="w-16 h-16 rounded-full bg-stone-100 flex items-center justify-center mx-auto mb-4 text-stone-400">
                <Search className="w-8 h-8" />
              </div>
              <h3 className="font-didone text-2xl font-bold text-stone-800 mb-2">No Curations Found</h3>
              <p className="text-sm text-stone-500 max-w-md mx-auto mb-6">
                We couldn&apos;t find any dishes matching &ldquo;{searchQuery}&rdquo;. Try clearing your search or browsing all categories.
              </p>
              <button
                onClick={() => {
                  setSearchQuery('');
                  setActiveCategory('all');
                }}
                className="px-6 py-2.5 rounded-xl bg-[#dc2626] text-white text-xs uppercase tracking-wider font-bold"
              >
                Show All Dishes
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 sm:gap-14 lg:gap-16 justify-items-center pt-8">
              {filteredItems.map((item, idx) => (
                <FoodCard
                  key={item.id}
                  item={item}
                  index={idx}
                  onCustomize={setCustomizingItem}
                  onQuickAdd={handleQuickAdd}
                />
              ))}
            </div>
          )}
        </div>

        {/* Floating Mobile Order Bag Trigger */}
        {cartCount > 0 && (
          <div className="fixed bottom-6 right-6 z-40 sm:hidden">
            <button
              onClick={() => setIsCartOpen(true)}
              className="flex items-center gap-3 px-5 py-3 rounded-full bg-[#dc2626] text-white shadow-2xl border border-white animate-bounce"
            >
              <ShoppingBag className="w-5 h-5 text-white" />
              <span className="text-xs font-bold uppercase tracking-wider">Order Bag ({cartCount})</span>
              <span className="font-mono text-xs font-bold text-white">${cartTotal.toFixed(2)}</span>
            </button>
          </div>
        )}

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

      {/* Order Placed Confirmation */}
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
