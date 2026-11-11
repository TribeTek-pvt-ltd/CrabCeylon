'use client';

import React from 'react';
import { Compass, CheckCircle2, Scale, ChefHat, Truck, Utensils, RefreshCw, MapPin, Sparkles, ArrowRight } from 'lucide-react';
import { OrderTrackingInfo, OrderStatus } from '../data/restaurantData';

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
    <section id="tracker-section" className="py-20 relative bg-white border-y border-stone-200 text-[#121826] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 relative z-10">
        {/* Header */}
        <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-6 mb-12">
          <div className="text-left">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-stone-100 border border-[#c5a059]/40 text-xs font-semibold text-[#99752b] uppercase tracking-widest mb-3">
              <Compass className="w-3.5 h-3.5 text-[#d33c1d]" />
              Patron Live Service
            </div>
            <h2 className="font-didone text-3xl sm:text-4xl font-extrabold text-[#121826] tracking-tight">
              Real-Time <span className="text-gold-gradient">Lagoon-to-Table</span> Radar
            </h2>
            <p className="text-stone-600 text-sm mt-2 max-w-xl font-light">
              Track your colossal mud crab in real time as our master chefs select it live from the tank, sizzle it in high-heat woks, and dispatch it in heated thermal seal.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={handleAdvance}
              className="px-4 py-2.5 rounded-lg bg-stone-100 border border-[#c5a059]/40 text-[#99752b] hover:bg-[#c5a059] hover:text-white text-xs font-bold transition-all flex items-center gap-2 shadow-xs cursor-pointer"
            >
              <RefreshCw className="w-3.5 h-3.5" />
              <span>Simulate Next Stage</span>
            </button>
            <button
              onClick={onOpenFullModal}
              className="px-5 py-2.5 rounded-lg bg-[#c5a059] hover:bg-[#b58e42] text-white text-xs font-bold uppercase tracking-wider transition-all flex items-center gap-2 shadow-md cursor-pointer"
            >
              <span>Full Live Map Radar</span>
              <ArrowRight className="w-4 h-4 stroke-[2.5]" />
            </button>
          </div>
        </div>

        {/* Live Tracking Card */}
        <div className="glass-card rounded-2xl p-6 sm:p-8 border border-[#c5a059]/35 shadow-lg bg-white">
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 pb-6 border-b border-stone-200">
            <div className="flex items-center gap-4 text-left">
              <div className="w-12 h-12 rounded-xl bg-amber-50 border border-[#c5a059]/40 flex items-center justify-center text-2xl shadow-inner">
                🦀
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <span className="font-mono text-xl font-bold text-[#121826]">
                    Order #{currentOrder.orderId}
                  </span>
                  <span className="px-2.5 py-0.5 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-bold uppercase tracking-wider">
                    Active
                  </span>
                </div>
                <div className="text-xs text-stone-500 flex items-center gap-3 mt-1 font-light">
                  <span>Guest: <strong className="text-stone-800">{currentOrder.customerName}</strong></span>
                  <span>•</span>
                  <span>Estimated: <strong className="text-[#99752b]">{currentOrder.estimatedDeliveryTime}</strong></span>
                </div>
              </div>
            </div>

            <div className="flex items-center gap-4 text-xs">
              <div className="text-right hidden sm:block">
                <span className="text-stone-400 block text-[11px] uppercase tracking-wider font-medium">Destination</span>
                <span className="font-medium text-stone-800 flex items-center gap-1 justify-end">
                  <MapPin className="w-3.5 h-3.5 text-[#d33c1d]" />
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
                    className={`p-4 rounded-xl border transition-all text-left ${
                      isCurrent
                        ? 'bg-amber-50/60 border-[#c5a059] shadow-sm scale-[1.02]'
                        : isPassed
                        ? 'bg-emerald-50/40 border-emerald-200 text-stone-800'
                        : 'bg-stone-50 border-stone-200 opacity-50'
                    }`}
                  >
                    <div className="flex items-center justify-between mb-3">
                      <div
                        className={`w-9 h-9 rounded-full flex items-center justify-center ${
                          isCurrent
                            ? 'bg-[#c5a059] text-white shadow-xs'
                            : isPassed
                            ? 'bg-emerald-100 text-emerald-800'
                            : 'bg-stone-200 text-stone-400'
                        }`}
                      >
                        <Icon className="w-4 h-4 stroke-[2.2]" />
                      </div>
                      <span className={`text-[10px] font-mono font-bold ${isCurrent ? 'text-[#99752b]' : isPassed ? 'text-emerald-700' : 'text-stone-400'}`}>
                        0{idx + 1}
                      </span>
                    </div>

                    <h4 className="font-serif text-sm font-bold text-[#121826] mb-1">
                      {st.label}
                    </h4>
                    <p className="text-[11px] text-stone-500 font-light">
                      {st.desc}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Quick Footer info */}
          <div className="mt-4 pt-4 border-t border-stone-200 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-stone-500 font-light">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span>Lagoon Tank Certificate: <strong className="text-stone-800">{currentOrder.lagoonCatchId}</strong></span>
            </div>
            <div className="flex items-center gap-4">
              <span>Chef: <strong className="text-[#121826] font-medium">{currentOrder.chefName}</strong></span>
              <span>Courier: <strong className="text-[#121826] font-medium">{currentOrder.courierName}</strong></span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
