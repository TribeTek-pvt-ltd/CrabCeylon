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
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/60 backdrop-blur-xs p-3 sm:p-6 flex items-center justify-center animate-in fade-in duration-200">
      <div className="relative w-full max-w-3xl bg-white border border-red-500/30 rounded-2xl shadow-2xl overflow-hidden flex flex-col my-auto text-[#111827] max-h-[92vh]">
        
        {/* Header */}
        <div className="p-6 border-b border-stone-200 bg-white flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-red-50 border border-red-200 flex items-center justify-center text-[#dc2626]">
              <Compass className="w-5 h-5" />
            </div>
            <div className="text-left">
              <div className="flex items-center gap-2">
                <span className="font-didone text-lg font-bold tracking-wide text-[#111827]">
                  Live Catch Tracking
                </span>
                <span className="px-2 py-0.5 rounded text-[10px] uppercase tracking-wider font-semibold bg-emerald-100 text-emerald-800 border border-emerald-200">
                  Active
                </span>
              </div>
              <div className="flex items-center gap-2 text-xs text-stone-500 mt-0.5">
                <span>Order Reference:</span>
                <button
                  onClick={copyOrderId}
                  className="font-mono text-[#dc2626] font-bold hover:underline flex items-center gap-1 cursor-pointer"
                >
                  #{activeOrder.orderId}
                  {copiedId ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5 text-stone-400" />}
                </button>
              </div>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-lg text-stone-400 hover:text-stone-800 hover:bg-stone-100 transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Scrollable Body */}
        <div className="overflow-y-auto p-6 space-y-6 text-left">
          
          {/* Estimated Arrival Banner */}
          <div className="p-5 rounded-xl bg-stone-50 border border-red-500/20 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 shadow-xs">
            <div>
              <span className="text-[10px] uppercase tracking-[0.25em] text-[#dc2626] font-bold block mb-1">
                Estimated Delivery Arrival
              </span>
              <div className="text-2xl sm:text-3xl font-didone font-bold text-[#111827]">
                {activeOrder.estimatedDeliveryTime}
              </div>
              <p className="text-xs text-stone-600 mt-1 flex items-center gap-1.5 font-light">
                <MapPin className="w-3.5 h-3.5 text-[#dc2626]" />
                {activeOrder.deliveryAddress}
              </p>
            </div>

            <button
              onClick={handleNextStage}
              className="px-4 py-2.5 rounded-lg border border-[#dc2626] text-[#dc2626] hover:bg-[#dc2626] hover:text-white text-xs font-semibold uppercase tracking-wider transition-all flex items-center gap-2 whitespace-nowrap self-stretch sm:self-auto justify-center cursor-pointer shadow-2xs"
            >
              <RefreshCw className="w-3.5 h-3.5" />
              <span>Simulate Next Stage</span>
            </button>
          </div>

          {/* Stepper Timeline */}
          <div className="space-y-3">
            <h4 className="text-[11px] uppercase tracking-[0.25em] text-stone-500 font-bold">
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
                    className={`p-4 rounded-xl border transition-all flex items-center justify-between ${
                      isCurrent
                        ? 'bg-red-50/60 border-[#dc2626] shadow-sm'
                        : isPassed
                        ? 'bg-emerald-50/40 border-emerald-200 text-stone-800'
                        : 'bg-stone-50 border-stone-200 opacity-50'
                    }`}
                  >
                    <div className="flex items-center gap-3.5">
                      <div
                        className={`w-9 h-9 rounded-full flex items-center justify-center flex-shrink-0 ${
                          isCurrent
                            ? 'bg-[#dc2626] text-white shadow-xs'
                            : isPassed
                            ? 'bg-emerald-100 text-emerald-700 border border-emerald-300'
                            : 'bg-stone-200 text-stone-400'
                        }`}
                      >
                        <Icon className="w-4 h-4 stroke-[2]" />
                      </div>

                      <div>
                        <div className="flex items-center gap-2">
                          <span className={`text-[10px] uppercase tracking-[0.2em] font-bold ${isCurrent ? 'text-[#dc2626]' : isPassed ? 'text-emerald-700' : 'text-stone-400'}`}>
                            Milestone 0{idx + 1}
                          </span>
                          {isCurrent && (
                            <span className="w-2 h-2 rounded-full bg-[#dc2626] animate-ping" />
                          )}
                        </div>
                        <h5 className="font-serif text-sm text-[#111827] font-bold">
                          {stg.title}
                        </h5>
                        <p className="text-[11px] text-stone-500 mt-0.5 font-light">
                          {stg.subtitle}
                        </p>
                      </div>
                    </div>

                    <div className="text-right">
                      {isPassed ? (
                        <span className="text-xs text-emerald-700 font-bold">Completed</span>
                      ) : isCurrent ? (
                        <span className="text-xs font-bold text-[#dc2626] uppercase tracking-wider">In Progress</span>
                      ) : (
                        <span className="text-xs text-stone-400">Pending</span>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Sourcing Transparency & Courier Panel */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
            <div className="p-4 rounded-xl bg-stone-50 border border-stone-200 space-y-2">
              <span className="text-[10px] uppercase tracking-[0.2em] text-[#dc2626] font-bold block">
                Lagoon Catch Certificate
              </span>
              <div className="font-mono text-xs text-emerald-700 font-semibold">
                {activeOrder.lagoonCatchId}
              </div>
              <p className="text-[11px] text-stone-500">
                Culinary Director: <strong className="text-stone-800">{activeOrder.chefName}</strong>
              </p>
            </div>

            <div className="p-4 rounded-xl bg-stone-50 border border-stone-200 flex items-center justify-between">
              <div>
                <span className="text-[10px] uppercase tracking-[0.2em] text-[#dc2626] font-bold block mb-1">
                  Private Courier Envoy
                </span>
                <span className="text-xs font-bold text-[#111827] block">
                  {activeOrder.courierName}
                </span>
                <span className="text-[11px] text-stone-500 font-light">
                  Yorkville Thermal Lock Unit #04
                </span>
              </div>
              <a
                href={`tel:${activeOrder.courierPhone}`}
                className="p-2.5 rounded-lg bg-white border border-stone-200 text-[#dc2626] hover:bg-[#dc2626] hover:text-white transition-colors shadow-2xs"
                title="Call Courier"
              >
                <Phone className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Itemized Receipt */}
          <div className="p-4 rounded-xl bg-stone-50 border border-stone-200 space-y-2 text-xs">
            <span className="text-[10px] uppercase tracking-[0.2em] text-stone-500 font-bold block mb-2">
              Order Items Summary:
            </span>
            {activeOrder.items.map((it, i) => (
              <div key={i} className="flex justify-between text-stone-700">
                <span>
                  {it.quantity}x {it.title} {it.size && <span className="text-[#dc2626] font-medium">({it.size})</span>}
                </span>
                <span className="font-mono text-stone-900 font-semibold">${it.price} CAD</span>
              </div>
            ))}
            <div className="pt-2 border-t border-stone-200 flex justify-between font-bold text-[#111827]">
              <span>Total Investment</span>
              <span className="font-mono text-[#dc2626] text-sm font-black">${activeOrder.total} CAD</span>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="p-4 border-t border-stone-200 bg-white flex items-center justify-between text-xs text-stone-600">
          <span>Yorkville Concierge Desk: <strong className="text-[#111827]">+1 (416) 924-CRAB</strong></span>
          <button
            onClick={onClose}
            className="px-5 py-2 bg-[#dc2626] hover:bg-[#b91c1c] text-white font-semibold text-xs uppercase tracking-wider rounded-lg transition-colors cursor-pointer"
          >
            Close Radar
          </button>
        </div>
      </div>
    </div>
  );
}
