'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { Star, Plus, Search, Scale, Sparkles } from 'lucide-react';
import { MENU_ITEMS, MenuItem } from '../data/restaurantData';

interface MenuSectionProps {
  onSelectItem: (item: MenuItem) => void;
  onQuickAdd: (item: MenuItem) => void;
}

export default function MenuSection({ onSelectItem, onQuickAdd }: MenuSectionProps) {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState('');

  const categories = [
    { id: 'all', label: 'All Curations' },
    { id: 'crabs', label: 'Wild Ceylon Crabs' },
    { id: 'platters', label: 'Oceanic Catches' },
    { id: 'accompaniments', label: 'Accompaniments' },
    { id: 'beverages', label: 'Spirits & Nectar' },
  ];

  const filteredItems = MENU_ITEMS.filter((item) => {
    const matchesCategory = activeCategory === 'all' || item.category === activeCategory;
    const matchesSearch =
      item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <section id="menu" className="py-24 relative bg-[#07090e] text-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-3 mb-3">
            <span className="w-6 h-[1px] bg-[#c5a059]" />
            <span className="text-[10px] uppercase tracking-[0.35em] text-[#c5a059] font-medium">
              The Culinary Treasury
            </span>
            <span className="w-6 h-[1px] bg-[#c5a059]" />
          </div>
          <h2 className="text-3xl sm:text-5xl font-serif font-normal text-white tracking-tight mb-4">
            The Yorkville Feast
          </h2>
          <p className="text-slate-400 text-sm leading-relaxed max-w-xl mx-auto">
            Live Ceylon lagoon mud crabs flown directly to our Yorkville kitchen. Select your live claw size, choose your spice elevation, and savor pure oceanic heritage.
          </p>
        </div>

        {/* Filter Navigation Bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-12 pb-6 border-b border-white/[0.08]">
          {/* Category Tabs */}
          <div className="flex items-center gap-1 sm:gap-2 overflow-x-auto w-full md:w-auto pb-2 md:pb-0 scrollbar-none">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`whitespace-nowrap px-4 py-2 text-xs uppercase tracking-[0.2em] font-medium transition-all ${
                  activeCategory === cat.id
                    ? 'border-b-2 border-[#c5a059] text-[#f4df95]'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Search Input */}
          <div className="relative w-full md:w-64">
            <Search className="w-3.5 h-3.5 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search the catch..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-4 py-2 bg-[#0e1320] border border-white/10 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-[#c5a059] transition-colors rounded-none"
            />
          </div>
        </div>

        {/* Menu Items Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              className="bg-[#0b101b] border border-white/[0.07] hover:border-[#c5a059]/40 transition-all duration-300 flex flex-col group"
            >
              {/* Dish Photo */}
              <div
                className="relative w-full h-64 overflow-hidden cursor-pointer"
                onClick={() => onSelectItem(item)}
              >
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0b101b] via-transparent to-transparent opacity-85" />

                {item.badge && (
                  <div className="absolute top-4 left-4 px-3 py-1 bg-[#07090e]/90 border border-[#c5a059]/40 text-[#f4df95] text-[10px] uppercase tracking-[0.2em] font-medium">
                    {item.badge}
                  </div>
                )}

                {item.isCrab && (
                  <div className="absolute bottom-3 left-4 text-[10px] uppercase tracking-[0.2em] text-[#c5a059] font-medium flex items-center gap-1.5">
                    <Scale className="w-3 h-3 text-[#c5a059]" />
                    <span>Live Tank Choice (700g – 1.5kg+)</span>
                  </div>
                )}
              </div>

              {/* Dish Details */}
              <div className="p-6 flex-1 flex flex-col justify-between text-left">
                <div>
                  <div className="flex items-baseline justify-between gap-2 mb-2">
                    <h3
                      onClick={() => onSelectItem(item)}
                      className="font-serif text-xl sm:text-2xl text-white font-normal hover:text-[#f4df95] transition-colors cursor-pointer"
                    >
                      {item.title}
                    </h3>
                  </div>

                  <p className="text-slate-400 text-xs sm:text-sm leading-relaxed mb-6 font-light line-clamp-3">
                    {item.description}
                  </p>

                  {item.spiceLevels && (
                    <div className="flex items-center gap-1.5 flex-wrap mb-6">
                      <span className="text-[10px] uppercase tracking-[0.2em] text-slate-500 font-medium mr-1">
                        Spice:
                      </span>
                      {item.spiceLevels.slice(0, 3).map((lvl) => (
                        <span
                          key={lvl}
                          className="text-[10px] px-2 py-0.5 bg-[#121827] text-slate-300 border border-white/5"
                        >
                          {lvl}
                        </span>
                      ))}
                    </div>
                  )}
                </div>

                {/* Price and CTA */}
                <div className="pt-4 border-t border-white/[0.08] flex items-center justify-between">
                  <div>
                    <span className="text-[10px] uppercase tracking-[0.2em] text-slate-500 block">
                      {item.isCrab ? 'From' : 'Price'}
                    </span>
                    <span className="font-mono text-xl text-[#f4df95] font-normal">
                      ${item.price} <span className="text-xs text-slate-400">CAD</span>
                    </span>
                  </div>

                  <div>
                    {item.isCrab || item.sizes || item.spiceLevels ? (
                      <button
                        onClick={() => onSelectItem(item)}
                        className="px-5 py-2.5 bg-[#c5a059] hover:bg-[#d4af37] text-[#07090e] text-[11px] uppercase tracking-[0.2em] font-semibold transition-colors cursor-pointer"
                      >
                        Customize
                      </button>
                    ) : (
                      <button
                        onClick={() => onQuickAdd(item)}
                        className="px-4 py-2 border border-white/20 hover:border-[#c5a059] text-slate-300 hover:text-white text-[11px] uppercase tracking-[0.18em] transition-colors flex items-center gap-1.5 cursor-pointer"
                      >
                        <Plus className="w-3.5 h-3.5" />
                        <span>Add</span>
                      </button>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
