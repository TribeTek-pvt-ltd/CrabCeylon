'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { X, Check, SlidersHorizontal, ShoppingBag, Trash2, ChevronLeft, ChevronRight, Sparkles } from 'lucide-react';
import { CartItem } from '../data/restaurantData';

export interface VisualCategoryItem {
  id: string;
  label: string;
  shortLabel: string;
  image: string;
  count: number;
}

interface VisualFilterDockProps {
  categories: VisualCategoryItem[];
  activeCategory: string;
  onSelectCategory: (categoryId: string) => void;
  cartItems: CartItem[];
  cartTotal: number;
  cartCount: number;
  onOpenCart: () => void;
  onRemoveCartItem: (cartId: string) => void;
  onResetFilters: () => void;
}

export default function VisualFilterDock({
  categories,
  activeCategory,
  onSelectCategory,
  cartItems,
  cartTotal,
  cartCount,
  onOpenCart,
  onRemoveCartItem,
  onResetFilters
}: VisualFilterDockProps) {
  const [isOpen, setIsOpen] = useState(true);
  const [activeTab, setActiveTab] = useState<'filter' | 'cart'>('filter');
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);

  const activeCategoryObj = categories.find((c) => c.id === activeCategory) || categories[0];

  return (
    <>
      {/* Collapsed Pill Handle (Visible when dock is closed, or floating trigger on mobile) */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="fixed right-0 top-1/2 -translate-y-1/2 z-40 bg-white border-2 border-r-0 border-red-500/30 text-[#111827] shadow-[0_8px_30px_rgba(220,38,38,0.2)] rounded-l-2xl py-3 px-2 flex flex-col items-center gap-2 transition-all hover:pl-3 group cursor-pointer"
          aria-label="Open Visual Menu Filter and Cart"
        >
          <div className="w-8 h-8 rounded-full bg-red-50 border border-red-200 flex items-center justify-center text-[#dc2626] group-hover:scale-110 transition-transform">
            <SlidersHorizontal className="w-4 h-4" />
          </div>
          <span className="[writing-mode:vertical-rl] text-[10px] uppercase font-manrope font-extrabold tracking-widest text-[#dc2626]">
            Filter & Dock
          </span>
          {cartCount > 0 && (
            <span className="w-5 h-5 rounded-full bg-[#dc2626] text-white text-[10px] font-mono font-bold flex items-center justify-center shadow-xs">
              {cartCount}
            </span>
          )}
        </button>
      )}

      {/* Main Floating Right-Side Visual Dock (Matches Reference Image) */}
      {isOpen && (
        <aside
          aria-label="Visual Category Filter and Cart Dock"
          className="fixed right-2 sm:right-6 top-24 sm:top-28 z-40 transition-all duration-300 animate-in slide-in-from-right-10"
        >
          <div className="relative w-20 sm:w-24 bg-white/95 backdrop-blur-xl border border-stone-200/90 rounded-3xl shadow-[0_16px_45px_rgba(0,0,0,0.12)] p-2.5 sm:p-3 flex flex-col items-center max-h-[82vh]">
            
            {/* Top Close Button (Exact Circle × from Screenshot) */}
            <button
              onClick={() => setIsOpen(false)}
              className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-stone-100 hover:bg-red-50 text-stone-600 hover:text-[#dc2626] flex items-center justify-center transition-colors cursor-pointer shadow-2xs mb-2"
              title="Minimize filter dock"
              aria-label="Close dock"
            >
              <X className="w-4 h-4 stroke-[2.5]" />
            </button>

            {/* Mode Switcher Pills (Filter vs Your Cart) */}
            <div className="flex flex-col items-center gap-1 w-full mb-3 pb-2 border-b border-stone-100">
              <button
                onClick={() => setActiveTab('filter')}
                className={`w-full py-1 rounded-full text-[9px] uppercase font-manrope font-bold tracking-wider transition-all cursor-pointer ${
                  activeTab === 'filter'
                    ? 'bg-[#dc2626] text-white shadow-xs'
                    : 'text-stone-500 hover:text-stone-900 hover:bg-stone-100'
                }`}
              >
                Filter
              </button>
              
              <button
                onClick={() => setActiveTab('cart')}
                className={`w-full py-1 rounded-full text-[9px] uppercase font-manrope font-bold tracking-wider transition-all relative cursor-pointer ${
                  activeTab === 'cart'
                    ? 'bg-[#dc2626] text-white shadow-xs'
                    : 'text-stone-500 hover:text-stone-900 hover:bg-stone-100'
                }`}
              >
                Cart
                {cartCount > 0 && (
                  <span className={`ml-1 text-[8px] font-mono px-1 rounded-full ${activeTab === 'cart' ? 'bg-white text-[#dc2626]' : 'bg-red-100 text-[#dc2626]'}`}>
                    {cartCount}
                  </span>
                )}
              </button>
            </div>

            {/* Title (Matches "Your Cart" style in reference) */}
            <div className="text-center mb-2">
              <span className="font-serif italic text-xs font-semibold text-stone-800 block leading-tight">
                {activeTab === 'cart' ? 'Your Cart' : 'Filter'}
              </span>
            </div>

            {/* Scrollable Circular Stack Area */}
            <div className="flex-1 w-full overflow-y-auto overflow-x-hidden space-y-3 py-1 px-0.5 scrollbar-none flex flex-col items-center">
              
              {/* TAB 1: VISUAL CATEGORY FILTER WITH CIRCULAR DISH THUMBNAILS */}
              {activeTab === 'filter' && (
                <>
                  {categories.map((cat) => {
                    const isSelected = activeCategory === cat.id;
                    return (
                      <div
                        key={cat.id}
                        className="relative flex flex-col items-center"
                        onMouseEnter={() => setHoveredItem(cat.id)}
                        onMouseLeave={() => setHoveredItem(null)}
                      >
                        {/* Circular Dish / Category Thumbnail */}
                        <button
                          onClick={() => onSelectCategory(cat.id)}
                          className={`relative w-12 h-12 sm:w-14 sm:h-14 rounded-full overflow-hidden transition-all duration-200 cursor-pointer ${
                            isSelected
                              ? 'ring-3 ring-[#dc2626] ring-offset-2 scale-105 shadow-md'
                              : 'border-2 border-stone-200 hover:border-[#dc2626]/70 hover:scale-105 opacity-85 hover:opacity-100'
                          }`}
                          aria-label={`Filter by ${cat.label}`}
                        >
                          <Image
                            src={cat.image}
                            alt={cat.label}
                            fill
                            className="object-cover"
                            sizes="56px"
                          />
                          <div className={`absolute inset-0 bg-black/15 transition-opacity ${isSelected ? 'opacity-0' : 'hover:opacity-0'}`} />
                        </button>

                        {/* Miniature Badge (Dish count in this category) */}
                        <span
                          className={`absolute -top-1 -right-1 z-10 text-[9px] font-mono font-bold w-4 h-4 rounded-full flex items-center justify-center shadow-xs transition-colors ${
                            isSelected
                              ? 'bg-[#dc2626] text-white'
                              : 'bg-stone-800 text-white'
                          }`}
                        >
                          {cat.count}
                        </span>

                        {/* Category Short Label underneath */}
                        <span className={`text-[8px] font-manrope font-bold mt-1 tracking-tight text-center truncate max-w-[60px] ${isSelected ? 'text-[#dc2626] font-extrabold' : 'text-stone-500'}`}>
                          {cat.shortLabel}
                        </span>

                        {/* Interactive Floating Tooltip (Shown on Hover to the Left) */}
                        {hoveredItem === cat.id && (
                          <div className="absolute right-full mr-3 top-1/2 -translate-y-1/2 bg-[#111827] text-white text-[11px] font-manrope font-semibold py-1.5 px-3 rounded-xl whitespace-nowrap shadow-xl z-50 pointer-events-none animate-in fade-in zoom-in-95 duration-150 flex items-center gap-1.5 border border-white/10">
                            <span>{cat.label}</span>
                            <span className="text-red-400 font-mono text-[10px]">({cat.count} dishes)</span>
                            <div className="absolute left-full top-1/2 -translate-y-1/2 border-4 border-transparent border-l-[#111827]" />
                          </div>
                        )}
                      </div>
                    );
                  })}
                </>
              )}

              {/* TAB 2: "YOUR CART" CIRCULAR THUMBNAILS (EXACT MATCH TO REFERENCE SCREENSHOT) */}
              {activeTab === 'cart' && (
                <>
                  {cartItems.length === 0 ? (
                    <div className="py-6 text-center text-stone-400 flex flex-col items-center">
                      <ShoppingBag className="w-5 h-5 text-stone-300 mb-1" />
                      <span className="text-[9px] font-manrope text-stone-400">Empty</span>
                    </div>
                  ) : (
                    cartItems.map((cartItem) => (
                      <div
                        key={cartItem.cartId}
                        className="relative flex flex-col items-center group"
                        onMouseEnter={() => setHoveredItem(cartItem.cartId)}
                        onMouseLeave={() => setHoveredItem(null)}
                      >
                        {/* Circular Dish Thumbnail */}
                        <div className="relative w-12 h-12 sm:w-14 sm:h-14 rounded-full overflow-hidden border-2 border-stone-200 shadow-sm">
                          <Image
                            src={cartItem.item.image}
                            alt={cartItem.item.title}
                            fill
                            className="object-cover"
                            sizes="56px"
                          />
                        </div>

                        {/* Small Top-Right Remove Dot / Button */}
                        <button
                          onClick={() => onRemoveCartItem(cartItem.cartId)}
                          className="absolute -top-1 -right-1 z-10 w-4 h-4 rounded-full bg-stone-200 hover:bg-[#dc2626] text-stone-600 hover:text-white flex items-center justify-center transition-colors shadow-2xs cursor-pointer"
                          title="Remove item"
                        >
                          <X className="w-2.5 h-2.5" />
                        </button>

                        {/* Bottom-Right Quantity Badge (Matches screenshot '1' or '2') */}
                        <span className="absolute -bottom-1 -right-1 z-10 text-[9px] font-mono font-bold w-4 h-4 rounded-full bg-[#111827] text-white flex items-center justify-center shadow-xs">
                          {cartItem.quantity}
                        </span>

                        {/* Hover Tooltip to the Left showing item name & total */}
                        {hoveredItem === cartItem.cartId && (
                          <div className="absolute right-full mr-3 top-1/2 -translate-y-1/2 bg-[#111827] text-white text-[11px] font-manrope font-semibold py-1.5 px-3 rounded-xl whitespace-nowrap shadow-xl z-50 pointer-events-none animate-in fade-in zoom-in-95 duration-150 flex flex-col gap-0.5 border border-white/10 text-left">
                            <span className="font-serif">{cartItem.item.title}</span>
                            <span className="text-[#ef4444] font-mono text-[10px]">
                              Qty: {cartItem.quantity} • ${cartItem.itemTotalPrice.toFixed(2)}
                            </span>
                            <div className="absolute left-full top-1/2 -translate-y-1/2 border-4 border-transparent border-l-[#111827]" />
                          </div>
                        )}
                      </div>
                    ))
                  )}
                </>
              )}

            </div>

            {/* Bottom Total / Summary Area (Matches screenshot "Total $98.47") */}
            <div className="w-full pt-3 mt-1 border-t border-stone-200 text-center">
              <span className="text-[8px] uppercase tracking-wider text-stone-400 font-manrope font-bold block">
                {activeTab === 'cart' ? 'Total' : 'Selected'}
              </span>
              <span className="font-mono text-[11px] sm:text-xs font-black text-[#dc2626] block leading-tight">
                {activeTab === 'cart'
                  ? `$${cartTotal.toFixed(2)}`
                  : activeCategoryObj.shortLabel}
              </span>
            </div>

            {/* Bottom Action Button (Large Circular Checkmark ✓ matching reference screenshot) */}
            <button
              onClick={() => {
                if (activeTab === 'cart') {
                  onOpenCart();
                } else {
                  // Scroll to dishes grid smoothly
                  const gridElem = document.getElementById('menu-curations-grid');
                  if (gridElem) {
                    gridElem.scrollIntoView({ behavior: 'smooth' });
                  }
                }
              }}
              className="mt-2.5 w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-stone-100 hover:bg-[#dc2626] text-stone-700 hover:text-white flex items-center justify-center transition-all shadow-md group cursor-pointer"
              title={activeTab === 'cart' ? 'Proceed to Order Bag' : 'View Selected Dishes'}
              aria-label="Confirm filter / checkout"
            >
              <Check className="w-5 h-5 stroke-[2.5] group-hover:scale-110 transition-transform" />
            </button>

          </div>
        </aside>
      )}
    </>
  );
}

