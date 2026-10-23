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
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-in fade-in duration-200">
      <div className="relative w-full max-w-md bg-[#0a0f19] border border-[#c5a059]/35 rounded-2xl p-6 sm:p-8 text-slate-100 shadow-[0_25px_60px_rgba(0,0,0,0.9)]">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 text-slate-400 hover:text-white"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="text-center mb-6">
          <div className="w-12 h-12 rounded-full bg-[#c5a059]/15 border border-[#c5a059]/30 flex items-center justify-center mx-auto mb-3">
            <Compass className="w-5 h-5 text-[#c5a059]" />
          </div>
          <h3 className="font-serif text-xl sm:text-2xl text-white font-normal">
            Track Your Order
          </h3>
          <p className="text-xs text-slate-400 mt-1">
            Enter your Crab Ceylon order confirmation number to view live kitchen preparation and heated courier dispatch.
          </p>
        </div>

        <form onSubmit={handleSearch} className="space-y-4">
          <div>
            <label className="block text-[10px] uppercase tracking-[0.25em] text-[#c5a059] font-medium mb-1.5">
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
                className="w-full px-4 py-3 bg-[#111726] border border-white/10 rounded-xl text-white font-mono text-sm focus:outline-none focus:border-[#c5a059] transition-colors uppercase tracking-wider"
                autoFocus
              />
              <button
                type="submit"
                className="absolute right-2 top-1/2 -translate-y-1/2 px-4 py-1.5 bg-[#c5a059] hover:bg-[#d4af37] text-[#07090e] font-semibold text-xs uppercase tracking-wider rounded-lg transition-colors"
              >
                Track
              </button>
            </div>
            {errorMessage && (
              <p className="text-xs text-red-400 mt-2 flex items-center gap-1">
                <AlertCircle className="w-3.5 h-3.5" />
                {errorMessage}
              </p>
            )}
          </div>

          {/* Sample quick picks */}
          <div className="pt-2 border-t border-white/[0.08]">
            <span className="text-[10px] uppercase tracking-[0.2em] text-slate-500 block mb-2">
              Recent Demonstrative Orders:
            </span>
            <div className="flex flex-col gap-1.5">
              <button
                type="button"
                onClick={() => handleSelectSample('CC-8429')}
                className="flex items-center justify-between p-2.5 rounded-lg bg-[#0e1422] border border-white/5 hover:border-[#c5a059]/40 text-left text-xs transition-colors"
              >
                <div>
                  <span className="font-mono font-bold text-amber-200">#CC-8429</span>
                  <span className="text-slate-400 block text-[11px]">Downtown Toronto Penthouse • In Wok</span>
                </div>
                <ArrowRight className="w-3.5 h-3.5 text-slate-500" />
              </button>

              <button
                type="button"
                onClick={() => handleSelectSample('CC-9104')}
                className="flex items-center justify-between p-2.5 rounded-lg bg-[#0e1422] border border-white/5 hover:border-[#c5a059]/40 text-left text-xs transition-colors"
              >
                <div>
                  <span className="font-mono font-bold text-amber-200">#CC-9104</span>
                  <span className="text-slate-400 block text-[11px]">Yorkville Garden Table #12 • Selecting Catch</span>
                </div>
                <ArrowRight className="w-3.5 h-3.5 text-slate-500" />
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
