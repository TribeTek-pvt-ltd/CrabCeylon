'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { Star, Plus, Search, Scale, Sparkles, Flame, Check } from 'lucide-react';
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
    { id: 'crab-lobster', label: 'Crab & Lobster' },
    { id: 'boil', label: 'Seafood Boil' },
    { id: 'kottu', label: 'Crab Ceylon Kottu' },
    { id: 'fried-rice', label: 'Fried Rice' },
    { id: 'pasta', label: 'Pasta' },
    { id: 'dinners', label: 'Signature Dinners' },
    { id: 'pittu', label: 'Pittu Combos' },
    { id: 'appetizers', label: 'Appetizers & Soups' },
    { id: 'dessert', label: 'Dessert' },
  ];

  const filteredItems = MENU_ITEMS.filter((item) => {
    const matchesCategory = activeCategory === 'all' || item.category === activeCategory;
    const matchesSearch =
      item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <section id="menu" className="py-24 relative bg-[#faf8f5] text-[#121826] border-t border-stone-200/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 relative z-10">
        
        {/* Section Header (With Official Motto: Culinary artistry with a splash of Sea) */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-3 mb-3">
            <span className="w-8 h-[1.5px] bg-[#c5a059]" />
            <span className="font-manrope text-[11px] uppercase tracking-[0.35em] text-[#8c6314] font-black">
              Crab Ceylon Kitchen
            </span>
            <span className="w-8 h-[1.5px] bg-[#c5a059]" />
          </div>
          <h2 className="font-didone text-4xl sm:text-6xl font-black text-[#121826] tracking-tight mb-3">
            The Official Catch
          </h2>
          <p className="font-serif italic text-xl sm:text-2xl text-[#8c6314] font-normal mb-4">
            &ldquo;Culinary artistry with a splash of Sea&rdquo;
          </p>
          <p className="font-manrope text-stone-600 text-xs sm:text-sm leading-relaxed max-w-xl mx-auto font-light">
            Explore our complete dining menu—from signature live mud crabs and fiery kottu roti to grand seafood boils, rich rosé pastas, and authentic pittu combos.
          </p>
        </div>

        {/* Filter Navigation Bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-5 mb-12 pb-6 border-b border-stone-200">
          {/* Category Tabs */}
          <div className="flex items-center gap-2 overflow-x-auto w-full md:w-auto pb-2 md:pb-0 scrollbar-none">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`whitespace-nowrap px-4 py-2.5 text-xs uppercase tracking-[0.2em] font-manrope font-bold transition-all rounded-md cursor-pointer ${
                  activeCategory === cat.id
                    ? 'bg-[#121826] text-[#f1b01d] shadow-sm'
                    : 'text-stone-600 hover:text-stone-900 hover:bg-stone-100'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Search Input */}
          <div className="relative w-full md:w-72">
            <Search className="w-4 h-4 text-stone-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search dishes, kottu, boil..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 bg-white border border-stone-200 text-xs text-stone-800 placeholder-stone-400 focus:outline-none focus:border-[#f1b01d] focus:ring-1 focus:ring-[#f1b01d] transition-all rounded-md shadow-xs font-manrope"
            />
          </div>
        </div>

        {/* Menu Items Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              className="glass-card rounded-2xl overflow-hidden flex flex-col group border border-stone-200/80 hover:border-[#f1b01d]/60 transition-all duration-400"
            >
              {/* Dish Photo Container */}
              <div
                className="relative w-full h-64 overflow-hidden cursor-pointer bg-stone-100"
                onClick={() => onSelectItem(item)}
              >
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover group-hover:scale-108 transition-transform duration-700 ease-out"
                />
                
                {/* Subtle soft vignette */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />

                {item.badge && (
                  <div className="absolute top-4 left-4 px-3 py-1 bg-white/95 backdrop-blur-md border border-[#c5a059]/40 text-[#8c6314] text-[10px] uppercase tracking-[0.2em] font-extrabold rounded shadow-xs font-manrope">
                    {item.badge}
                  </div>
                )}

                {item.isCrab && (
                  <div className="absolute bottom-3 left-4 px-2.5 py-1 rounded bg-[#121826]/85 backdrop-blur-md text-[10px] uppercase tracking-[0.18em] text-[#f1b01d] font-bold flex items-center gap-1.5 shadow-sm font-manrope">
                    <Scale className="w-3 h-3 text-[#f1b01d]" />
                    <span>Live Catch Choice</span>
                  </div>
                )}
              </div>

              {/* Dish Details */}
              <div className="p-6 flex-1 flex flex-col justify-between text-left bg-white">
                <div>
                  <div className="flex items-baseline justify-between gap-2 mb-2">
                    <h3
                      onClick={() => onSelectItem(item)}
                      className="font-serif text-xl sm:text-2xl text-[#121826] font-bold hover:text-[#8c6314] transition-colors cursor-pointer leading-snug"
                    >
                      {item.title}
                    </h3>
                  </div>

                  <p className="font-manrope text-stone-600 text-xs sm:text-sm leading-relaxed mb-4 font-normal line-clamp-3">
                    {item.description}
                  </p>

                  {item.spiceLevels && (
                    <div className="flex items-center gap-1.5 flex-wrap mb-4">
                      <span className="font-manrope text-[10px] uppercase tracking-[0.18em] text-stone-500 font-bold mr-1 flex items-center gap-1">
                        <Flame className="w-3 h-3 text-[#d33c1d]" /> Options:
                      </span>
                      {item.spiceLevels.slice(0, 3).map((lvl) => (
                        <span
                          key={lvl}
                          className="font-manrope text-[10px] px-2 py-0.5 bg-stone-100 text-stone-700 border border-stone-200/80 rounded font-medium"
                        >
                          {lvl}
                        </span>
                      ))}
                      {item.spiceLevels.length > 3 && (
                        <span className="font-manrope text-[10px] text-[#8c6314] font-bold">
                          +{item.spiceLevels.length - 3} more
                        </span>
                      )}
                    </div>
                  )}
                </div>

                {/* Price and CTA Footer */}
                <div className="pt-4 border-t border-stone-100 flex items-center justify-between">
                  <div>
                    <span className="font-manrope text-[10px] uppercase tracking-[0.2em] text-stone-400 block font-bold">
                      Price
                    </span>
                    <span className="font-mono text-xl text-[#8c6314] font-black">
                      ${item.price.toFixed(2)} <span className="text-xs text-stone-500 font-normal">CAD</span>
                    </span>
                  </div>

                  <div>
                    {item.isCrab || item.sizes || item.spiceLevels ? (
                      <button
                        onClick={() => onSelectItem(item)}
                        className="font-manrope px-5 py-2.5 bg-[#f1b01d] hover:bg-[#df9f12] text-[#121826] text-[11px] uppercase tracking-[0.2em] font-extrabold transition-all rounded cursor-pointer shadow-xs hover:shadow-md"
                      >
                        Customize
                      </button>
                    ) : (
                      <button
                        onClick={() => onQuickAdd(item)}
                        className="font-manrope px-4 py-2 bg-stone-100 hover:bg-[#f1b01d] text-stone-800 hover:text-[#121826] text-[11px] uppercase tracking-[0.18em] font-bold transition-all rounded flex items-center gap-1.5 cursor-pointer border border-stone-200/80"
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
