'use client';

import React, { useState } from 'react';
import { Compass, CheckCircle2, Scale, ChefHat, Truck, Utensils, RefreshCw, MapPin, Sparkles, ArrowRight } from 'lucide-react';
import { OrderTrackingInfo, OrderStatus, INITIAL_ORDERS } from '../data/restaurantData';

interface TrackerSectionProps {
  currentOrder: OrderTrackingInfo;
  onOpenFullModal: () => void;
  onUpdateOrderStatus: (orderId: string, nextStatus: OrderStatus) => void;
}

export default function TrackerSection({
  currentOrder,
  onOpenFullModal,
  onUpdateOrderStatus
}: TrackerSectionProps) {
  const stages: { key: OrderStatus; label: string; desc: string; icon: any }[] = [
    { key: 'confirmed', label: 'Order Confirmed', desc: 'Logged & queued', icon: CheckCircle2 },
    { key: 'selecting_catch', label: 'Catch Weighed', desc: 'Live tank inspection', icon: Scale },
    { key: 'wok_cooking', label: 'Wok Sizzling', desc: '21 Ceylon spices', icon: ChefHat },
    { key: 'dispatched', label: 'Thermal Dispatch', desc: 'Heated lockbox en route', icon: Truck },
    { key: 'delivered', label: 'Served / Delivered', desc: 'Ready for the feast', icon: Utensils },
  ];

  const currentIndex = stages.findIndex((s) => s.key === currentOrder.status);

  const handleAdvance = () => {
    const nextIdx = (currentIndex + 1) % stages.length;
    onUpdateOrderStatus(currentOrder.orderId, stages[nextIdx].key);
  };

  return (
    <section id="tracker-section" className="py-20 relative bg-[#080d17] border-y border-[#d4af37]/20 text-slate-100 overflow-hidden">
      {/* Background radial glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[#132038]/50 via-transparent to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#10192b] border border-[#d4af37]/30 text-xs font-semibold text-amber-300 uppercase tracking-widest mb-3">
              <Compass className="w-3.5 h-3.5 text-[#e04b2b]" />
              Patron Live Service
            </div>
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-white tracking-tight">
              Real-Time <span className="text-gold-gradient">Lagoon-to-Table</span> Radar
            </h2>
            <p className="text-slate-400 text-sm mt-2 max-w-xl">
              Track your colossal mud crab in real time as our master chefs select it live from the tank, sizzle it in high-heat woks, and dispatch it in heated thermal seal.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={handleAdvance}
              className="px-4 py-2.5 rounded-full bg-[#15233b] border border-[#d4af37]/40 text-amber-200 hover:bg-[#d4af37] hover:text-[#060910] text-xs font-bold transition-all flex items-center gap-2 shadow"
            >
              <RefreshCw className="w-3.5 h-3.5" />
              <span>Simulate Next Stage</span>
            </button>
            <button
              onClick={onOpenFullModal}
              className="px-5 py-2.5 rounded-full bg-gradient-to-r from-[#d4af37] to-[#aa8418] text-[#060910] text-xs font-bold uppercase tracking-wider hover:brightness-110 transition-all flex items-center gap-2 shadow-[0_0_20px_rgba(212,175,55,0.3)]"
            >
              <span>Full Live Map Radar</span>
              <ArrowRight className="w-4 h-4 stroke-[2.5]" />
            </button>
          </div>
        </div>

        {/* Live Tracking Card */}
        <div className="glass-card rounded-3xl p-6 sm:p-8 border border-[#d4af37]/30 shadow-2xl">
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 pb-6 border-b border-white/10">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-2xl bg-[#132035] border border-[#d4af37]/40 flex items-center justify-center text-2xl shadow-inner">
                🦀
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <span className="font-mono text-xl font-bold text-white">
                    Order #{currentOrder.orderId}
                  </span>
                  <span className="px-2.5 py-0.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-bold uppercase tracking-wider">
                    Active
                  </span>
                </div>
                <div className="text-xs text-slate-400 flex items-center gap-3 mt-1">
                  <span>Guest: <strong className="text-slate-200">{currentOrder.customerName}</strong></span>
                  <span>•</span>
                  <span>Estimated: <strong className="text-[#f5df88]">{currentOrder.estimatedDeliveryTime}</strong></span>
                </div>
              </div>
            </div>

            <div className="flex items-center gap-4 text-xs">
              <div className="text-right hidden sm:block">
                <span className="text-slate-400 block text-[11px] uppercase tracking-wider">Destination</span>
                <span className="font-medium text-slate-200 flex items-center gap-1 justify-end">
                  <MapPin className="w-3.5 h-3.5 text-[#e04b2b]" />
                  {currentOrder.deliveryAddress}
                </span>
              </div>
            </div>
          </div>

          {/* Stepper Progress Bar */}
          <div className="pt-8 pb-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-4">
              {stages.map((st, idx) => {
                const isPassed = idx < currentIndex;
                const isCurrent = idx === currentIndex;
                const Icon = st.icon;

                return (
                  <div
                    key={st.key}
                    className={`p-4 rounded-2xl border transition-all text-left ${
                      isCurrent
                        ? 'bg-[#15233c] border-[#d4af37] shadow-[0_0_20px_rgba(212,175,55,0.25)] scale-[1.02]'
                        : isPassed
                        ? 'bg-[#0c1424] border-emerald-500/30 text-slate-300'
                        : 'bg-[#080d17]/50 border-white/5 opacity-40'
                    }`}
                  >
                    <div className="flex items-center justify-between mb-3">
                      <div
                        className={`w-9 h-9 rounded-full flex items-center justify-center ${
                          isCurrent
                            ? 'bg-[#d4af37] text-black shadow-[0_0_15px_#d4af37]'
                            : isPassed
                            ? 'bg-emerald-500 text-white'
                            : 'bg-[#101726] text-slate-500'
                        }`}
                      >
                        <Icon className="w-4 h-4 stroke-[2.2]" />
                      </div>
                      <span className={`text-[10px] font-mono font-bold ${isCurrent ? 'text-amber-300' : isPassed ? 'text-emerald-400' : 'text-slate-500'}`}>
                        0{idx + 1}
                      </span>
                    </div>

                    <h4 className="font-serif text-sm font-bold text-white mb-1">
                      {st.label}
                    </h4>
                    <p className="text-[11px] text-slate-400">
                      {st.desc}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Quick Footer info */}
          <div className="mt-4 pt-4 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-400">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>Lagoon Tank Certificate: <strong className="text-slate-200">{currentOrder.lagoonCatchId}</strong></span>
            </div>
            <div className="flex items-center gap-4">
              <span>Chef: <strong className="text-white">{currentOrder.chefName}</strong></span>
              <span>Courier: <strong className="text-white">{currentOrder.courierName}</strong></span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
