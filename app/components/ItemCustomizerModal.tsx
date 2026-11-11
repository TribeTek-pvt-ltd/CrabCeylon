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
      selectedSize: item.sizes && item.sizes.length > 0 ? selectedSize : undefined,
      selectedSpice: item.spiceLevels ? selectedSpice : undefined,
      selectedPrep: item.prepOptions ? selectedPrep : undefined,
      specialInstructions: specialInstructions.trim() ? specialInstructions.trim() : undefined,
      itemTotalPrice: totalPrice
    };

    onAddToCart(cartItem);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-black/60 backdrop-blur-xs animate-in fade-in duration-200">
      <div className="relative w-full max-w-2xl bg-white border border-[#c5a059]/40 rounded-2xl overflow-hidden shadow-2xl max-h-[90vh] flex flex-col text-[#121826]">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 p-2 bg-white/80 backdrop-blur-md text-stone-700 hover:text-stone-900 rounded-full border border-stone-200 shadow-sm transition-colors cursor-pointer"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Top Image Banner */}
        <div className="relative w-full h-56 sm:h-64 flex-shrink-0 bg-stone-100">
          <Image
            src={item.image}
            alt={item.title}
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/35 to-transparent" />

          {item.badge && (
            <div className="absolute top-4 left-4 px-3 py-1 bg-white/95 backdrop-blur-md border border-[#c5a059]/40 text-[#99752b] text-[10px] uppercase tracking-[0.2em] font-bold rounded shadow-xs">
              {item.badge}
            </div>
          )}

          <div className="absolute bottom-4 left-6 right-6 text-left">
            <h2 className="text-2xl sm:text-3xl font-didone text-white mb-1 font-bold leading-tight">
              {item.title}
            </h2>
            <div className="flex items-center gap-3 text-xs text-stone-200">
              <div className="flex items-center text-[#f4df95]">
                <Star className="w-3.5 h-3.5 fill-current mr-1" />
                <span className="font-bold">{item.rating}</span>
                <span className="text-stone-300 ml-1">({item.reviewsCount} reviews)</span>
              </div>
              <span className="text-stone-400">•</span>
              <span className="text-white font-mono font-semibold">Base: ${item.price.toFixed(2)} CAD</span>
            </div>
          </div>
        </div>

        {/* Modal Scrollable Body */}
        <div className="p-6 overflow-y-auto space-y-6 flex-1 text-left">
          <p className="text-stone-600 text-xs sm:text-sm leading-relaxed font-light">
            {item.description}
          </p>

          {/* Sizing / Upgrade Selection */}
          {item.sizes && item.sizes.length > 0 && (
            <div>
              <div className="flex items-center justify-between mb-3">
                <label className="text-[10px] uppercase tracking-[0.25em] text-[#99752b] font-bold flex items-center gap-1.5">
                  <Scale className="w-4 h-4 text-[#99752b]" />
                  {item.category === 'boil' ? 'Boil Selection / Upgrade' : 'Select Catch Weight & Portion'}
                </label>
                <span className="text-[10px] uppercase tracking-wider text-emerald-800 font-mono bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200 font-semibold">
                  {item.category === 'boil' ? 'Feast Upgrade' : 'Fresh Ceylon Catch'}
                </span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {item.sizes.map((size) => (
                  <button
                    key={size.name}
                    type="button"
                    onClick={() => setSelectedSize(size)}
                    className={`flex items-center justify-between p-3.5 rounded-xl border text-left transition-all cursor-pointer ${
                      selectedSize.name === size.name
                        ? 'bg-[#121826] border-[#121826] text-white shadow-sm'
                        : 'bg-stone-50 border-stone-200 text-stone-700 hover:bg-stone-100'
                    }`}
                  >
                    <div>
                      <div className="font-serif text-sm font-bold flex items-center gap-1.5">
                        {size.name}
                        {selectedSize.name === size.name && (
                          <Check className="w-3.5 h-3.5 text-[#f4df95]" />
                        )}
                      </div>
                      <div className={`text-[11px] ${selectedSize.name === size.name ? 'text-stone-300' : 'text-stone-500'}`}>
                        {size.weight.toLowerCase().includes('upgrade') ? size.weight : `Live Weight: ~${size.weight}`}
                      </div>
                    </div>
                    <div className={`text-xs font-mono font-bold ${selectedSize.name === size.name ? 'text-[#f4df95]' : 'text-[#99752b]'}`}>
                      {size.priceDelta > 0 ? `+$${size.priceDelta.toFixed(2)} CAD` : 'Included'}
                    </div>
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Spice Level / Flavour Selection */}
          {item.spiceLevels && item.spiceLevels.length > 0 && (
            <div>
              <label className="text-[10px] uppercase tracking-[0.25em] text-[#99752b] font-bold flex items-center gap-1.5 mb-2.5">
                <Flame className="w-3.5 h-3.5 text-[#d33c1d]" />
                {item.category === 'crab-lobster' || item.category === 'appetizers' || item.title.includes('Wings')
                  ? 'Choose Your Flavour'
                  : item.category === 'pasta'
                  ? 'Choose Your Spice Level (Make It Your Way)'
                  : 'Select Spice & Heat Level'}
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                {item.spiceLevels.map((lvl) => (
                  <button
                    key={lvl}
                    type="button"
                    onClick={() => setSelectedSpice(lvl)}
                    className={`p-2.5 rounded-lg border text-center text-xs transition-all cursor-pointer ${
                      selectedSpice === lvl
                        ? 'bg-[#121826] border-[#121826] text-[#f4df95] font-bold shadow-xs'
                        : 'bg-stone-50 border-stone-200 text-stone-700 hover:bg-stone-100'
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
            <label className="block text-[10px] uppercase tracking-[0.25em] text-stone-500 font-bold mb-1.5">
              Special Kitchen Notes / Culinary Requests
            </label>
            <input
              type="text"
              placeholder="e.g. Extra toasted lime wedges, less salt, sauce on side..."
              value={specialInstructions}
              onChange={(e) => setSpecialInstructions(e.target.value)}
              className="w-full px-4 py-2.5 rounded-lg bg-stone-50 border border-stone-200 text-xs text-stone-900 placeholder-stone-400 focus:outline-none focus:border-[#c5a059] transition-colors"
            />
          </div>
        </div>

        {/* Modal Footer */}
        <div className="p-5 border-t border-stone-200 bg-[#faf8f5] flex items-center justify-between gap-4">
          <div className="flex items-center gap-3 bg-white border border-stone-200 px-3 py-1.5 rounded-lg shadow-2xs">
            <button
              onClick={() => setQuantity(Math.max(1, quantity - 1))}
              disabled={quantity <= 1}
              className="text-stone-400 hover:text-stone-900 disabled:opacity-30 cursor-pointer"
            >
              <Minus className="w-3.5 h-3.5" />
            </button>
            <span className="font-mono text-sm text-stone-900 font-bold w-5 text-center">
              {quantity}
            </span>
            <button
              onClick={() => setQuantity(quantity + 1)}
              className="text-stone-400 hover:text-stone-900 cursor-pointer"
            >
              <Plus className="w-3.5 h-3.5" />
            </button>
          </div>

          <button
            onClick={handleAdd}
            className="flex-1 py-3.5 px-6 bg-[#c5a059] hover:bg-[#b58e42] text-white font-semibold text-xs uppercase tracking-[0.2em] transition-all rounded-lg flex items-center justify-between cursor-pointer shadow-md"
          >
            <span>Add to Order Bag</span>
            <span className="font-mono text-sm font-bold">${totalPrice.toFixed(2)} CAD</span>
          </button>
        </div>
      </div>
    </div>
  );
}
