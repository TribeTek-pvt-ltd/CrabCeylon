'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { X, ShoppingBag, Trash2, Plus, Minus, Tag, ArrowRight, ShieldCheck, Truck, Check } from 'lucide-react';
import { CartItem, OrderTrackingInfo } from '../data/restaurantData';

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  cartItems: CartItem[];
  onUpdateQuantity: (cartId: string, newQty: number) => void;
  onRemoveItem: (cartId: string) => void;
  onOrderPlaced: (order: OrderTrackingInfo) => void;
}

export default function CartDrawer({
  isOpen,
  onClose,
  cartItems,
  onUpdateQuantity,
  onRemoveItem,
  onOrderPlaced
}: CartDrawerProps) {
  const [deliveryType, setDeliveryType] = useState<'express' | 'pickup' | 'dinein'>('express');
  const [address, setAddress] = useState('Penthouse 32, 180 University Ave, Toronto, ON');
  const [customerName, setCustomerName] = useState('Marcus Sterling');
  const [customerPhone, setCustomerPhone] = useState('+1 (416) 555-0182');
  const [tableNumber, setTableNumber] = useState('Table #12 - Yorkville Garden Salon');
  const [promoCode, setPromoCode] = useState('');
  const [discountPercent, setDiscountPercent] = useState(0);
  const [promoSuccessMsg, setPromoSuccessMsg] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  if (!isOpen) return null;

  const subtotal = cartItems.reduce((acc, curr) => acc + curr.itemTotalPrice, 0);
  const deliveryFee = deliveryType === 'express' ? (subtotal > 150 ? 0 : 10) : 0;
  const discountAmount = (subtotal * discountPercent) / 100;
  const grandTotal = Math.max(0, subtotal + deliveryFee - discountAmount);

  const applyPromo = () => {
    if (promoCode.trim().toUpperCase() === 'CRABVIP') {
      setDiscountPercent(15);
      setPromoSuccessMsg('15% Patron Privilege Applied');
    } else {
      setPromoSuccessMsg('Invalid code. Try "CRABVIP"');
      setTimeout(() => setPromoSuccessMsg(''), 2500);
    }
  };

  const handleCheckout = () => {
    setIsSubmitting(true);
    setTimeout(() => {
      const generatedId = `CC-${Math.floor(1000 + Math.random() * 9000)}`;
      const newOrder: OrderTrackingInfo = {
        orderId: generatedId,
        customerName: customerName || 'Patron Guest',
        customerPhone: customerPhone || '+1 (416) 555-0000',
        deliveryAddress: deliveryType === 'dinein' ? tableNumber : address,
        deliveryType,
        status: 'confirmed',
        createdAt: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }) + ' EST',
        estimatedDeliveryTime: deliveryType === 'express' ? '35-45 mins' : '15-20 mins',
        items: cartItems.map((c) => ({
          title: c.item.title,
          quantity: c.quantity,
          size: c.selectedSize ? `${c.selectedSize.name} (${c.selectedSize.weight})` : undefined,
          spice: c.selectedSpice,
          price: c.itemTotalPrice
        })),
        subtotal,
        deliveryFee,
        discount: discountAmount,
        total: grandTotal,
        chefName: 'Executive Chef Rohan Fernando',
        courierName: deliveryType === 'express' ? 'Julian C. (Toronto Envoy)' : 'Sommelier David',
        courierPhone: '+1 (416) 555-8931',
        lagoonCatchId: `CEY-LAGOON-${Math.floor(1000 + Math.random() * 9000)} (Inspected in Yorkville Saline Tank #1)`
      };

      setIsSubmitting(false);
      onOrderPlaced(newOrder);
      onClose();
    }, 700);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden bg-black/60 backdrop-blur-xs animate-in fade-in duration-200">
      <div className="absolute inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md bg-white border-l border-[#c5a059]/40 shadow-2xl flex flex-col justify-between text-[#121826]">
          
          {/* Header */}
          <div className="p-6 border-b border-stone-200 flex items-center justify-between bg-[#faf8f5]">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-[#c5a059]/15 border border-[#c5a059]/40 flex items-center justify-center text-[#99752b]">
                <ShoppingBag className="w-4 h-4 stroke-[2]" />
              </div>
              <div className="text-left">
                <h3 className="font-didone text-xl text-[#121826] font-bold">Order Bag</h3>
                <span className="text-[10px] uppercase tracking-[0.2em] text-[#99752b] font-semibold">
                  {cartItems.length} {cartItems.length === 1 ? 'Curated Dish' : 'Curated Dishes'}
                </span>
              </div>
            </div>
            <button
              onClick={onClose}
              className="p-2 text-stone-400 hover:text-stone-800 transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Body Content */}
          <div className="flex-1 overflow-y-auto p-6 space-y-6">
            
            {/* Delivery / Dining Mode Switcher */}
            <div className="grid grid-cols-3 gap-1 p-1 bg-stone-100 rounded-lg text-[11px] uppercase tracking-[0.15em] font-semibold border border-stone-200">
              <button
                type="button"
                onClick={() => setDeliveryType('express')}
                className={`py-2 px-1 rounded transition-all cursor-pointer ${
                  deliveryType === 'express'
                    ? 'bg-white text-[#121826] shadow-xs'
                    : 'text-stone-500 hover:text-stone-800'
                }`}
              >
                Delivery
              </button>
              <button
                type="button"
                onClick={() => setDeliveryType('dinein')}
                className={`py-2 px-1 rounded transition-all cursor-pointer ${
                  deliveryType === 'dinein'
                    ? 'bg-white text-[#121826] shadow-xs'
                    : 'text-stone-500 hover:text-stone-800'
                }`}
              >
                Dine-In
              </button>
              <button
                type="button"
                onClick={() => setDeliveryType('pickup')}
                className={`py-2 px-1 rounded transition-all cursor-pointer ${
                  deliveryType === 'pickup'
                    ? 'bg-white text-[#121826] shadow-xs'
                    : 'text-stone-500 hover:text-stone-800'
                }`}
              >
                Curbside
              </button>
            </div>

            {/* Address / Table Input */}
            <div className="space-y-3 text-xs text-left">
              {deliveryType === 'express' ? (
                <div>
                  <label className="block text-[10px] uppercase tracking-[0.25em] text-stone-500 font-bold mb-1.5">
                    Delivery Address (Toronto & GTA)
                  </label>
                  <input
                    type="text"
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                    className="w-full px-3.5 py-2.5 bg-stone-50 border border-stone-200 rounded-lg text-stone-900 text-xs focus:border-[#c5a059] focus:outline-none focus:ring-1 focus:ring-[#c5a059]"
                    placeholder="Enter Toronto address..."
                  />
                </div>
              ) : deliveryType === 'dinein' ? (
                <div>
                  <label className="block text-[10px] uppercase tracking-[0.25em] text-stone-500 font-bold mb-1.5">
                    Table & Dining Area
                  </label>
                  <input
                    type="text"
                    value={tableNumber}
                    onChange={(e) => setTableNumber(e.target.value)}
                    className="w-full px-3.5 py-2.5 bg-stone-50 border border-stone-200 rounded-lg text-stone-900 text-xs focus:border-[#c5a059] focus:outline-none focus:ring-1 focus:ring-[#c5a059]"
                  />
                </div>
              ) : (
                <div className="p-3 bg-stone-50 border border-stone-200 rounded-lg text-stone-600 text-xs">
                  Pick up at 124 Yorkville Avenue, Toronto, ON M5R 1C2.
                </div>
              )}

              {/* Customer Contact */}
              <div className="grid grid-cols-2 gap-2">
                <div>
                  <label className="block text-[10px] uppercase tracking-[0.2em] text-stone-500 font-bold mb-1">
                    Name
                  </label>
                  <input
                    type="text"
                    value={customerName}
                    onChange={(e) => setCustomerName(e.target.value)}
                    className="w-full px-3 py-2 bg-stone-50 border border-stone-200 rounded-lg text-stone-900 text-xs focus:border-[#c5a059] focus:outline-none"
                  />
                </div>
                <div>
                  <label className="block text-[10px] uppercase tracking-[0.2em] text-stone-500 font-bold mb-1">
                    Phone
                  </label>
                  <input
                    type="text"
                    value={customerPhone}
                    onChange={(e) => setCustomerPhone(e.target.value)}
                    className="w-full px-3 py-2 bg-stone-50 border border-stone-200 rounded-lg text-stone-900 text-xs focus:border-[#c5a059] focus:outline-none"
                  />
                </div>
              </div>
            </div>

            {/* Cart Items List */}
            <div className="space-y-3 text-left">
              <span className="text-[10px] uppercase tracking-[0.25em] text-[#99752b] font-bold block">
                Selected Catches
              </span>

              {cartItems.length === 0 ? (
                <div className="text-center py-10 border border-stone-200 bg-stone-50 rounded-xl">
                  <p className="text-stone-700 text-sm font-medium">Your order bag is currently empty.</p>
                  <p className="text-stone-400 text-xs mt-1">Explore our wild Ceylon lagoon crabs to begin.</p>
                </div>
              ) : (
                cartItems.map((item) => (
                  <div
                    key={item.cartId}
                    className="p-3.5 bg-white border border-stone-200 rounded-xl flex gap-3 text-left shadow-2xs"
                  >
                    <div className="relative w-16 h-16 rounded-lg overflow-hidden flex-shrink-0 bg-stone-100">
                      <Image
                        src={item.item.image}
                        alt={item.item.title}
                        fill
                        className="object-cover"
                      />
                    </div>

                    <div className="flex-1 min-w-0">
                      <div className="flex items-start justify-between gap-1">
                        <h4 className="font-serif text-sm text-[#121826] font-semibold truncate">
                          {item.item.title}
                        </h4>
                        <button
                          onClick={() => onRemoveItem(item.cartId)}
                          className="text-stone-400 hover:text-red-500 transition-colors p-1 cursor-pointer"
                        >
                          <Trash2 className="w-3.5 h-3.5" />
                        </button>
                      </div>

                      <div className="text-[11px] text-stone-500 space-y-0.5 mt-0.5">
                        {item.selectedSize && (
                          <div className="text-[#99752b] font-medium">
                            {item.selectedSize.name} (~{item.selectedSize.weight})
                          </div>
                        )}
                        {item.selectedSpice && (
                          <div>Spice: {item.selectedSpice}</div>
                        )}
                      </div>

                      <div className="flex items-center justify-between mt-2 pt-2 border-t border-stone-100">
                        <span className="font-mono text-sm text-[#99752b] font-bold">
                          ${item.itemTotalPrice.toFixed(2)} CAD
                        </span>

                        <div className="flex items-center gap-2 bg-stone-100 border border-stone-200 px-2 py-0.5 rounded">
                          <button
                            onClick={() => onUpdateQuantity(item.cartId, item.quantity - 1)}
                            className="text-stone-500 hover:text-stone-900 p-0.5 cursor-pointer"
                          >
                            <Minus className="w-3 h-3" />
                          </button>
                          <span className="font-mono text-xs text-stone-900 font-semibold">
                            {item.quantity}
                          </span>
                          <button
                            onClick={() => onUpdateQuantity(item.cartId, item.quantity + 1)}
                            className="text-stone-500 hover:text-stone-900 p-0.5 cursor-pointer"
                          >
                            <Plus className="w-3 h-3" />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))
              )}
            </div>

            {/* Promo Code Input */}
            {cartItems.length > 0 && (
              <div className="pt-2 text-left">
                <div className="flex gap-2">
                  <div className="relative flex-1">
                    <Tag className="w-3.5 h-3.5 text-stone-400 absolute left-3 top-1/2 -translate-y-1/2" />
                    <input
                      type="text"
                      placeholder="Privilege code (e.g. CRABVIP)"
                      value={promoCode}
                      onChange={(e) => setPromoCode(e.target.value)}
                      className="w-full pl-8 pr-3 py-2 bg-stone-50 border border-stone-200 rounded-lg text-xs text-stone-800 placeholder-stone-400 uppercase focus:border-[#c5a059] outline-none"
                    />
                  </div>
                  <button
                    onClick={applyPromo}
                    className="px-4 py-2 bg-stone-100 border border-[#c5a059] text-[#99752b] hover:bg-[#c5a059] hover:text-white text-xs font-semibold uppercase tracking-wider rounded-lg transition-all cursor-pointer"
                  >
                    Apply
                  </button>
                </div>
                {promoSuccessMsg && (
                  <p className={`text-[11px] mt-1.5 flex items-center gap-1 ${discountPercent > 0 ? 'text-emerald-600' : 'text-red-500'}`}>
                    <Check className="w-3 h-3" />
                    {promoSuccessMsg}
                  </p>
                )}
              </div>
            )}
          </div>

          {/* Checkout Footer */}
          {cartItems.length > 0 && (
            <div className="p-6 border-t border-stone-200 bg-[#faf8f5] space-y-3 text-left">
              <div className="space-y-1.5 text-xs text-stone-600">
                <div className="flex justify-between">
                  <span>Subtotal</span>
                  <span className="text-[#121826] font-mono font-semibold">${subtotal.toFixed(2)} CAD</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="flex items-center gap-1">
                    <Truck className="w-3 h-3 text-[#99752b]" />
                    Thermal Heated Courier
                  </span>
                  <span className="text-[#121826] font-mono font-semibold">
                    {deliveryFee === 0 ? <span className="text-emerald-600 font-bold">Complimentary</span> : `$${deliveryFee.toFixed(2)} CAD`}
                  </span>
                </div>
                {discountAmount > 0 && (
                  <div className="flex justify-between text-emerald-600 font-medium">
                    <span>VIP Privilege (15%)</span>
                    <span className="font-mono">-${discountAmount.toFixed(2)} CAD</span>
                  </div>
                )}
                <div className="flex justify-between text-base font-bold text-[#121826] pt-2 border-t border-stone-200">
                  <span className="font-serif">Total</span>
                  <span className="font-mono text-[#99752b] text-xl font-black">
                    ${grandTotal.toFixed(2)} CAD
                  </span>
                </div>
              </div>

              <button
                onClick={handleCheckout}
                disabled={isSubmitting}
                className="w-full py-4 bg-[#c5a059] hover:bg-[#b58e42] text-white font-semibold text-xs uppercase tracking-[0.2em] transition-all flex items-center justify-center gap-2 cursor-pointer shadow-md rounded-lg"
              >
                {isSubmitting ? (
                  <span>Securing Live Lagoon Catch...</span>
                ) : (
                  <>
                    <span>Confirm Order & Track Live</span>
                    <ArrowRight className="w-4 h-4" />
                  </>
                )}
              </button>

              <div className="flex items-center justify-center gap-1.5 text-[10px] text-stone-500 uppercase tracking-widest pt-1">
                <ShieldCheck className="w-3 h-3 text-[#99752b]" />
                <span>Certified Live Saline Weighing Guarantee</span>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
