'use client';

import React, { useState, useEffect } from 'react';
import { 
  X, Compass, CheckCircle2, MapPin, Phone, ChefHat, 
  Truck, Utensils, Scale, RefreshCw, Copy, Check
} from 'lucide-react';
import { OrderTrackingInfo, OrderStatus, INITIAL_ORDERS } from '../data/restaurantData';

interface OrderTrackerModalProps {
  isOpen: boolean;
  onClose: () => void;
  currentOrder: OrderTrackingInfo | null;
  onUpdateOrderStatus?: (orderId: string, nextStatus: OrderStatus) => void;
}

export default function OrderTrackerModal({
  isOpen,
  onClose,
  currentOrder,
  onUpdateOrderStatus
}: OrderTrackerModalProps) {
  const [activeOrder, setActiveOrder] = useState<OrderTrackingInfo>(
    currentOrder || INITIAL_ORDERS['CC-8429']
  );
  const [copiedId, setCopiedId] = useState(false);

  useEffect(() => {
    if (currentOrder) {
      setActiveOrder(currentOrder);
    }
  }, [currentOrder]);

  const stages: {
    key: OrderStatus;
    title: string;
    subtitle: string;
    icon: any;
  }[] = [
    {
      key: 'confirmed',
      title: 'Order Confirmed',
      subtitle: 'Order verified by Yorkville culinary desk',
      icon: CheckCircle2
    },
    {
      key: 'selecting_catch',
      title: 'Saline Tank Inspection',
      subtitle: 'Live lagoon crab selected and digitally weighed',
      icon: Scale
    },
    {
      key: 'wok_cooking',
      title: 'High-Flame Wok Searing',
      subtitle: 'Glazed in 21 Ceylon spices and grass-fed butter',
      icon: ChefHat
    },
    {
      key: 'dispatched',
      title: 'Thermal Carrier Dispatch',
      subtitle: 'En route in heated 68°C thermal locking capsule',
      icon: Truck
    },
    {
      key: 'delivered',
      title: 'Delivered & Served',
      subtitle: 'Delicacy ready for dining',
      icon: Utensils
    }
  ];

  const getStageIndex = (status: OrderStatus) => {
    return stages.findIndex((s) => s.key === status);
  };

  const currentIndex = getStageIndex(activeOrder.status);

  // Advance to next status for demo
  const handleNextStage = () => {
    const nextIdx = (currentIndex + 1) % stages.length;
    const nextKey = stages[nextIdx].key;
    const updated = {
      ...activeOrder,
      status: nextKey
    };
    setActiveOrder(updated);
    if (onUpdateOrderStatus) {
      onUpdateOrderStatus(activeOrder.orderId, nextKey);
    }
  };

  const copyOrderId = () => {
    navigator.clipboard.writeText(activeOrder.orderId);
    setCopiedId(true);
    setTimeout(() => setCopiedId(false), 2000);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/85 backdrop-blur-md p-3 sm:p-6 flex items-center justify-center animate-in fade-in duration-200">
      <div className="relative w-full max-w-3xl bg-[#090d16] border border-[#c5a059]/35 rounded-2xl shadow-[0_30px_80px_rgba(0,0,0,0.95)] overflow-hidden flex flex-col my-auto text-slate-100 max-h-[92vh]">
        {/* Header */}
        <div className="p-6 border-b border-white/[0.08] bg-[#070a10] flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-[#c5a059]/15 border border-[#c5a059]/40 flex items-center justify-center text-[#c5a059]">
              <Compass className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-serif text-lg font-normal tracking-wide text-white">
                  Live Catch Tracking
                </span>
                <span className="px-2 py-0.5 rounded text-[10px] uppercase tracking-wider font-semibold bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                  Active
                </span>
              </div>
              <div className="flex items-center gap-2 text-xs text-slate-400 mt-0.5">
                <span>Order Reference:</span>
                <button
                  onClick={copyOrderId}
                  className="font-mono text-[#f4df95] font-semibold hover:underline flex items-center gap-1"
                >
                  #{activeOrder.orderId}
                  {copiedId ? <Check className="w-3 h-3 text-emerald-400" /> : <Copy className="w-3 h-3 text-slate-500" />}
                </button>
              </div>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-lg text-slate-400 hover:text-white hover:bg-white/10 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Scrollable Body */}
        <div className="overflow-y-auto p-6 space-y-6">
          {/* Estimated Arrival Banner */}
          <div className="p-5 rounded-xl bg-[#0f1422] border border-[#c5a059]/25 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div>
              <span className="text-[10px] uppercase tracking-[0.25em] text-[#c5a059] font-medium block mb-1">
                Estimated Delivery Arrival
              </span>
              <div className="text-2xl sm:text-3xl font-serif text-white">
                {activeOrder.estimatedDeliveryTime}
              </div>
              <p className="text-xs text-slate-400 mt-1 flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-[#c5a059]" />
                {activeOrder.deliveryAddress}
              </p>
            </div>

            <button
              onClick={handleNextStage}
              className="px-4 py-2 rounded-lg border border-[#c5a059]/40 text-[#f4df95] hover:bg-[#c5a059] hover:text-[#07090e] text-xs font-semibold uppercase tracking-wider transition-all flex items-center gap-2 whitespace-nowrap self-stretch sm:self-auto justify-center"
            >
              <RefreshCw className="w-3.5 h-3.5" />
              <span>Simulate Next Stage</span>
            </button>
          </div>

          {/* Stepper Timeline */}
          <div className="space-y-3">
            <h4 className="text-[11px] uppercase tracking-[0.25em] text-slate-400 font-medium">
              Preparation & Courier Milestones
            </h4>

            <div className="space-y-2.5">
              {stages.map((stg, idx) => {
                const isPassed = idx < currentIndex;
                const isCurrent = idx === currentIndex;
                const isPending = idx > currentIndex;
                const Icon = stg.icon;

                return (
                  <div
                    key={stg.key}
                    className={`p-3.5 rounded-xl border transition-all flex items-center justify-between ${
                      isCurrent
                        ? 'bg-[#131b2e] border-[#c5a059] shadow-[0_0_20px_rgba(197,160,89,0.15)]'
                        : isPassed
                        ? 'bg-[#0d121e] border-emerald-500/25 text-slate-300'
                        : 'bg-[#090d16]/60 border-white/[0.04] opacity-45'
                    }`}
                  >
                    <div className="flex items-center gap-3.5">
                      <div
                        className={`w-9 h-9 rounded-full flex items-center justify-center flex-shrink-0 ${
                          isCurrent
                            ? 'bg-[#c5a059] text-[#07090e]'
                            : isPassed
                            ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/30'
                            : 'bg-[#111726] text-slate-500'
                        }`}
                      >
                        <Icon className="w-4 h-4 stroke-[2]" />
                      </div>

                      <div>
                        <div className="flex items-center gap-2">
                          <span className={`text-[10px] uppercase tracking-[0.2em] font-semibold ${isCurrent ? 'text-[#f4df95]' : isPassed ? 'text-emerald-400' : 'text-slate-500'}`}>
                            Milestone 0{idx + 1}
                          </span>
                          {isCurrent && (
                            <span className="w-2 h-2 rounded-full bg-[#c5a059] animate-ping" />
                          )}
                        </div>
                        <h5 className="font-serif text-sm text-white font-medium">
                          {stg.title}
                        </h5>
                        <p className="text-[11px] text-slate-400 mt-0.5">
                          {stg.subtitle}
                        </p>
                      </div>
                    </div>

                    <div className="text-right">
                      {isPassed ? (
                        <span className="text-xs text-emerald-400 font-medium">Completed</span>
                      ) : isCurrent ? (
                        <span className="text-xs font-semibold text-[#f4df95] uppercase tracking-wider">In Progress</span>
                      ) : (
                        <span className="text-xs text-slate-600">Pending</span>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Sourcing Transparency & Courier Panel */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
            <div className="p-4 rounded-xl bg-[#0d121e] border border-white/[0.08] space-y-2">
              <span className="text-[10px] uppercase tracking-[0.2em] text-[#c5a059] font-medium block">
                Lagoon Catch Certificate
              </span>
              <div className="font-mono text-xs text-emerald-400 font-medium">
                {activeOrder.lagoonCatchId}
              </div>
              <p className="text-[11px] text-slate-400">
                Culinary Director: <strong className="text-white">{activeOrder.chefName}</strong>
              </p>
            </div>

            <div className="p-4 rounded-xl bg-[#0d121e] border border-white/[0.08] flex items-center justify-between">
              <div>
                <span className="text-[10px] uppercase tracking-[0.2em] text-[#c5a059] font-medium block mb-1">
                  Private Courier Envoy
                </span>
                <span className="text-xs font-medium text-white block">
                  {activeOrder.courierName}
                </span>
                <span className="text-[11px] text-slate-400">
                  Yorkville Thermal Lock Unit #04
                </span>
              </div>
              <a
                href={`tel:${activeOrder.courierPhone}`}
                className="p-2.5 rounded-lg bg-[#141b2a] border border-white/10 text-[#c5a059] hover:text-white transition-colors"
                title="Call Courier"
              >
                <Phone className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Itemized Receipt */}
          <div className="p-4 rounded-xl bg-[#0d121e] border border-white/[0.08] space-y-2 text-xs">
            <span className="text-[10px] uppercase tracking-[0.2em] text-slate-400 font-medium block mb-2">
              Order Items Summary:
            </span>
            {activeOrder.items.map((it, i) => (
              <div key={i} className="flex justify-between text-slate-300">
                <span>
                  {it.quantity}x {it.title} {it.size && <span className="text-amber-200">({it.size})</span>}
                </span>
                <span className="font-mono text-white">${it.price} CAD</span>
              </div>
            ))}
            <div className="pt-2 border-t border-white/[0.08] flex justify-between font-semibold text-white">
              <span>Total Investment</span>
              <span className="font-mono text-[#f4df95] text-sm">${activeOrder.total} CAD</span>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="p-4 border-t border-white/[0.08] bg-[#070a10] flex items-center justify-between text-xs text-slate-400">
          <span>Yorkville Concierge Desk: <strong>+1 (416) 924-CRAB</strong></span>
          <button
            onClick={onClose}
            className="px-5 py-2 bg-[#141b2b] hover:bg-[#c5a059] hover:text-[#07090e] text-[#f4df95] font-semibold text-xs uppercase tracking-wider rounded-lg transition-colors"
          >
            Close Radar
          </button>
        </div>
      </div>
    </div>
  );
}
