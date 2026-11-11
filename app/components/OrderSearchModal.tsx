'use client';

import React, { useState } from 'react';
import { X, Search, Compass, AlertCircle, ArrowRight } from 'lucide-react';
import { INITIAL_ORDERS, OrderTrackingInfo } from '../data/restaurantData';

interface OrderSearchModalProps {
  isOpen: boolean;
  onClose: () => void;
  onTrackOrder: (order: OrderTrackingInfo) => void;
  allOrders: Record<string, OrderTrackingInfo>;
}

export default function OrderSearchModal({
  isOpen,
  onClose,
  onTrackOrder,
  allOrders
}: OrderSearchModalProps) {
  const [orderQuery, setOrderQuery] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  if (!isOpen) return null;

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    const cleanId = orderQuery.trim().toUpperCase();
    
    if (allOrders[cleanId]) {
      onTrackOrder(allOrders[cleanId]);
      onClose();
    } else {
      setErrorMessage(`No active order found with ID "${cleanId}".`);
    }
  };

  const handleSelectSample = (id: string) => {
    if (allOrders[id]) {
      onTrackOrder(allOrders[id]);
      onClose();
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-in fade-in duration-200">
      <div className="relative w-full max-w-md bg-white border border-red-500/30 rounded-2xl p-6 sm:p-8 text-[#111827] shadow-2xl">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 text-stone-400 hover:text-stone-800 cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="text-center mb-6">
          <div className="w-12 h-12 rounded-full bg-red-50 border border-red-200 flex items-center justify-center mx-auto mb-3 text-[#dc2626]">
            <Compass className="w-5 h-5" />
          </div>
          <h3 className="font-didone text-2xl text-[#111827] font-bold">
            Track Your Order
          </h3>
          <p className="text-xs text-stone-600 mt-1 font-light leading-relaxed">
            Enter your Crab Ceylon order confirmation number to view live kitchen preparation and heated courier dispatch.
          </p>
        </div>

        <form onSubmit={handleSearch} className="space-y-4 text-left">
          <div>
            <label className="block text-[10px] uppercase tracking-[0.25em] text-[#dc2626] font-bold mb-1.5">
              Order ID / Number
            </label>
            <div className="relative">
              <input
                type="text"
                placeholder="e.g. CC-8429"
                value={orderQuery}
                onChange={(e) => {
                  setOrderQuery(e.target.value);
                  setErrorMessage('');
                }}
                className="w-full px-4 py-3 bg-stone-50 border border-stone-200 rounded-xl text-stone-900 font-mono text-sm focus:outline-none focus:border-[#dc2626] transition-colors uppercase tracking-wider shadow-2xs"
                autoFocus
              />
              <button
                type="submit"
                className="absolute right-2 top-1/2 -translate-y-1/2 px-4 py-1.5 bg-[#dc2626] hover:bg-[#b91c1c] text-white font-semibold text-xs uppercase tracking-wider rounded-lg transition-colors cursor-pointer shadow-xs"
              >
                Track
              </button>
            </div>
            {errorMessage && (
              <p className="text-xs text-red-500 mt-2 flex items-center gap-1 font-medium">
                <AlertCircle className="w-3.5 h-3.5" />
                {errorMessage}
              </p>
            )}
          </div>

          {/* Sample quick picks */}
          <div className="pt-2 border-t border-stone-200">
            <span className="text-[10px] uppercase tracking-[0.2em] text-stone-500 block mb-2 font-medium">
              Recent Demonstrative Orders:
            </span>
            <div className="flex flex-col gap-2">
              <button
                type="button"
                onClick={() => handleSelectSample('CC-8429')}
                className="flex items-center justify-between p-3 rounded-xl bg-stone-50 border border-stone-200 hover:border-[#dc2626] text-left text-xs transition-all cursor-pointer shadow-2xs group"
              >
                <div>
                  <span className="font-mono font-bold text-[#dc2626]">#CC-8429</span>
                  <span className="text-stone-500 block text-[11px] font-light">Downtown Toronto Penthouse • In Wok</span>
                </div>
                <ArrowRight className="w-3.5 h-3.5 text-stone-400 group-hover:text-[#dc2626] group-hover:translate-x-0.5 transition-all" />
              </button>

              <button
                type="button"
                onClick={() => handleSelectSample('CC-9104')}
                className="flex items-center justify-between p-3 rounded-xl bg-stone-50 border border-stone-200 hover:border-[#dc2626] text-left text-xs transition-all cursor-pointer shadow-2xs group"
              >
                <div>
                  <span className="font-mono font-bold text-[#dc2626]">#CC-9104</span>
                  <span className="text-stone-500 block text-[11px] font-light">Yorkville Garden Table #12 • Selecting Catch</span>
                </div>
                <ArrowRight className="w-3.5 h-3.5 text-stone-400 group-hover:text-[#dc2626] group-hover:translate-x-0.5 transition-all" />
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
