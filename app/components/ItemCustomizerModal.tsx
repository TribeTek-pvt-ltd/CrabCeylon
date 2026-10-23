'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { X, Flame, Scale, Star, Plus, Minus, Check, Sparkles } from 'lucide-react';
import { MenuItem, CrabSize, CartItem } from '../data/restaurantData';

interface ItemCustomizerModalProps {
  item: MenuItem | null;
  isOpen: boolean;
  onClose: () => void;
  onAddToCart: (customizedItem: CartItem) => void;
}

export default function ItemCustomizerModal({
  item,
  isOpen,
  onClose,
  onAddToCart
}: ItemCustomizerModalProps) {
  if (!isOpen || !item) return null;

  const [selectedSize, setSelectedSize] = useState<CrabSize>(
    item.sizes && item.sizes.length > 0 ? item.sizes[0] : { name: 'Standard', weight: 'Standard', priceDelta: 0 }
  );
  const [selectedSpice, setSelectedSpice] = useState<string>(
    item.spiceLevels && item.spiceLevels.length > 0 ? item.spiceLevels[1] || item.spiceLevels[0] : 'Standard'
  );
  const [selectedPrep, setSelectedPrep] = useState<string>(
    item.prepOptions && item.prepOptions.length > 0 ? item.prepOptions[0] : 'Chef Recommended'
  );
  const [specialInstructions, setSpecialInstructions] = useState('');
  const [quantity, setQuantity] = useState(1);

  const unitPrice = item.price + (selectedSize.priceDelta || 0);
  const totalPrice = unitPrice * quantity;

  const handleAdd = () => {
    const cartItem: CartItem = {
      cartId: `${item.id}-${Date.now()}`,
      item,
      quantity,
      selectedSize: item.isCrab ? selectedSize : undefined,
      selectedSpice: item.spiceLevels ? selectedSpice : undefined,
      selectedPrep: item.prepOptions ? selectedPrep : undefined,
      specialInstructions: specialInstructions.trim() ? specialInstructions.trim() : undefined,
      itemTotalPrice: totalPrice
    };

    onAddToCart(cartItem);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-black/85 backdrop-blur-md animate-in fade-in duration-200">
      <div className="relative w-full max-w-2xl bg-[#090d16] border border-[#c5a059]/35 rounded-2xl overflow-hidden shadow-[0_25px_60px_-15px_rgba(0,0,0,0.95)] max-h-[90vh] flex flex-col">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 p-2 bg-[#07090e]/80 text-slate-300 hover:text-white rounded-lg border border-white/10 transition-colors"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Top Image Banner */}
        <div className="relative w-full h-56 sm:h-64 flex-shrink-0">
          <Image
            src={item.image}
            alt={item.title}
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#090d16] via-[#090d16]/40 to-transparent" />

          {item.badge && (
            <div className="absolute top-4 left-4 px-3 py-1 bg-[#07090e]/90 border border-[#c5a059]/40 text-[#f4df95] text-[10px] uppercase tracking-[0.2em] font-medium">
              {item.badge}
            </div>
          )}

          <div className="absolute bottom-4 left-6 right-6">
            <h2 className="text-2xl sm:text-3xl font-serif text-white mb-1 font-normal">
              {item.title}
            </h2>
            <div className="flex items-center gap-3 text-xs text-slate-300">
              <div className="flex items-center text-[#c5a059]">
                <Star className="w-3.5 h-3.5 fill-current mr-1" />
                <span className="font-bold">{item.rating}</span>
                <span className="text-slate-400 ml-1">({item.reviewsCount} reviews)</span>
              </div>
              <span className="text-slate-600">•</span>
              <span className="text-[#f4df95] font-mono">Base: ${item.price} CAD</span>
            </div>
          </div>
        </div>

        {/* Modal Scrollable Body */}
        <div className="p-6 overflow-y-auto space-y-6 flex-1 text-left">
          <p className="text-slate-300 text-xs sm:text-sm leading-relaxed font-light">
            {item.description}
          </p>

          {/* Sizing Selection (For Crabs) */}
          {item.sizes && item.sizes.length > 0 && (
            <div>
              <div className="flex items-center justify-between mb-3">
                <label className="text-[10px] uppercase tracking-[0.25em] text-[#c5a059] font-medium flex items-center gap-1.5">
                  <Scale className="w-4 h-4 text-[#c5a059]" />
                  Select Live Lagoon Crab Weight
                </label>
                <span className="text-[10px] uppercase tracking-wider text-emerald-400 font-mono bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20">
                  Yorkville Saline Tanks
                </span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {item.sizes.map((size) => (
                  <button
                    key={size.name}
                    type="button"
                    onClick={() => setSelectedSize(size)}
                    className={`flex items-center justify-between p-3 rounded-lg border text-left transition-all ${
                      selectedSize.name === size.name
                        ? 'bg-[#121a2c] border-[#c5a059] text-white'
                        : 'bg-[#0d121f] border-white/10 text-slate-400 hover:text-slate-200'
                    }`}
                  >
                    <div>
                      <div className="font-serif text-sm text-white flex items-center gap-1.5 font-normal">
                        {size.name}
                        {selectedSize.name === size.name && (
                          <Check className="w-3.5 h-3.5 text-[#c5a059]" />
                        )}
                      </div>
                      <div className="text-[11px] text-slate-400">Live Weight: ~{size.weight}</div>
                    </div>
                    <div className="text-xs font-mono text-[#f4df95]">
                      {size.priceDelta > 0 ? `+$${size.priceDelta} CAD` : 'Standard'}
                    </div>
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Spice Level Selection */}
          {item.spiceLevels && item.spiceLevels.length > 0 && (
            <div>
              <label className="text-[10px] uppercase tracking-[0.25em] text-[#c5a059] font-medium flex items-center gap-1.5 mb-2.5">
                <Flame className="w-3.5 h-3.5 text-[#c5a059]" />
                Ceylon Spice Elevation
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                {item.spiceLevels.map((lvl) => (
                  <button
                    key={lvl}
                    type="button"
                    onClick={() => setSelectedSpice(lvl)}
                    className={`p-2.5 rounded-lg border text-center text-xs transition-all ${
                      selectedSpice === lvl
                        ? 'bg-[#151e30] border-[#c5a059] text-[#f4df95] font-semibold'
                        : 'bg-[#0d121f] border-white/10 text-slate-400 hover:text-white'
                    }`}
                  >
                    {lvl}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Special Kitchen Notes */}
          <div>
            <label className="block text-[10px] uppercase tracking-[0.25em] text-slate-400 font-medium mb-1.5">
              Special Kitchen Notes / Culinary Requests
            </label>
            <input
              type="text"
              placeholder="e.g. Extra toasted lime wedges, less salt, sauce on side..."
              value={specialInstructions}
              onChange={(e) => setSpecialInstructions(e.target.value)}
              className="w-full px-4 py-2.5 rounded-lg bg-[#0d121f] border border-white/10 text-xs text-slate-200 placeholder-slate-500 focus:outline-none focus:border-[#c5a059] transition-colors"
            />
          </div>
        </div>

        {/* Modal Footer */}
        <div className="p-5 border-t border-white/[0.08] bg-[#070a10] flex items-center justify-between gap-4">
          <div className="flex items-center gap-3 bg-[#0d121f] border border-white/10 px-3 py-1.5 rounded-lg">
            <button
              onClick={() => setQuantity(Math.max(1, quantity - 1))}
              disabled={quantity <= 1}
              className="text-slate-400 hover:text-white disabled:opacity-30"
            >
              <Minus className="w-3.5 h-3.5" />
            </button>
            <span className="font-mono text-sm text-white w-5 text-center">
              {quantity}
            </span>
            <button
              onClick={() => setQuantity(quantity + 1)}
              className="text-slate-400 hover:text-white"
            >
              <Plus className="w-3.5 h-3.5" />
            </button>
          </div>

          <button
            onClick={handleAdd}
            className="flex-1 py-3.5 px-6 bg-[#c5a059] hover:bg-[#d4af37] text-[#07090e] font-semibold text-xs uppercase tracking-[0.2em] transition-colors flex items-center justify-between cursor-pointer"
          >
            <span>Add to Order Bag</span>
            <span className="font-mono text-sm">${totalPrice.toFixed(2)} CAD</span>
          </button>
        </div>
      </div>
    </div>
  );
}
