'use client';

import React from 'react';
import { CheckCircle2, Compass, X, ArrowRight } from 'lucide-react';
import { OrderTrackingInfo } from '../data/restaurantData';

interface OrderConfirmationModalProps {
  order: OrderTrackingInfo | null;
  isOpen: boolean;
  onClose: () => void;
  onTrackOrder: () => void;
}

export default function OrderConfirmationModal({
  order,
  isOpen,
  onClose,
  onTrackOrder
}: OrderConfirmationModalProps) {
  if (!isOpen || !order) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-in fade-in duration-200">
      <div className="relative w-full max-w-lg bg-white border border-[#c5a059]/40 rounded-2xl p-6 sm:p-8 text-center text-[#121826] shadow-2xl">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 text-stone-400 hover:text-stone-800 cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Elegant Check Emblem */}
        <div className="w-16 h-16 rounded-full bg-[#c5a059]/15 border border-[#c5a059]/40 flex items-center justify-center mx-auto mb-5 text-[#99752b] shadow-xs">
          <CheckCircle2 className="w-8 h-8 stroke-[1.8]" />
        </div>

        <div className="inline-block text-[10px] uppercase tracking-[0.3em] text-[#99752b] font-bold mb-2">
          Crab Ceylon Toronto • Order Secured
        </div>

        <h3 className="text-2xl sm:text-3xl font-didone text-[#121826] mb-2 font-bold">
          Your Order Has Been Placed
        </h3>

        <p className="text-stone-600 text-xs sm:text-sm max-w-md mx-auto mb-6 font-light leading-relaxed">
          Our culinary team in Yorkville has assigned your wild catch from the saline tank. Preparation has commenced under Executive Chef Rohan Fernando.
        </p>

        {/* Catch & Order Info Box */}
        <div className="p-5 rounded-xl bg-stone-50 border border-stone-200 text-left space-y-2.5 text-xs mb-6 shadow-2xs">
          <div className="flex justify-between items-center pb-2.5 border-b border-stone-200">
            <span className="text-stone-500 uppercase tracking-[0.2em] text-[10px] font-bold">Order Number</span>
            <span className="font-mono text-base text-[#99752b] font-bold">#{order.orderId}</span>
          </div>

          <div className="flex justify-between items-center">
            <span className="text-stone-500">Tank Sourcing Certificate:</span>
            <span className="font-mono text-emerald-700 text-[11px] font-semibold">{order.lagoonCatchId}</span>
          </div>

          <div className="flex justify-between items-center">
            <span className="text-stone-500">Total Investment:</span>
            <span className="font-mono text-stone-900 font-bold">${order.total.toFixed(2)} CAD</span>
          </div>

          <div className="flex justify-between items-center">
            <span className="text-stone-500">Estimated Delivery:</span>
            <span className="text-[#99752b] font-semibold">{order.estimatedDeliveryTime}</span>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-3">
          <button
            onClick={() => {
              onClose();
              onTrackOrder();
            }}
            className="flex-1 py-3.5 bg-[#c5a059] hover:bg-[#b58e42] text-white font-semibold text-xs uppercase tracking-[0.2em] transition-all rounded-lg flex items-center justify-center gap-2 cursor-pointer shadow-md"
          >
            <Compass className="w-4 h-4" />
            <span>Track Order Live</span>
          </button>

          <button
            onClick={onClose}
            className="py-3.5 px-6 border border-stone-200 hover:border-[#c5a059] text-stone-700 hover:text-stone-900 text-xs uppercase tracking-[0.18em] transition-colors rounded-lg cursor-pointer"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}
