'use client';

import React, { useRef } from 'react';
import Image from 'next/image';
import { Search, X, Check, ChevronLeft, ChevronRight, Sparkles, Filter } from 'lucide-react';
import { VisualCategoryItem } from './VisualFilterDock';

interface VisualMainFilterProps {
  categories: VisualCategoryItem[];
  activeCategory: string;
  onSelectCategory: (categoryId: string) => void;
  searchQuery: string;
  onSearchChange: (query: string) => void;
  filteredCount: number;
  totalCount: number;
  onReset: () => void;
}

export default function VisualMainFilter({
  categories,
  activeCategory,
  onSelectCategory,
  searchQuery,
  onSearchChange,
  filteredCount,
  totalCount,
  onReset
}: VisualMainFilterProps) {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const scrollAmount = direction === 'left' ? -260 : 260;
      scrollRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  const activeCategoryObj = categories.find((c) => c.id === activeCategory) || categories[0];

  return (
    <div className="w-full bg-white rounded-3xl border border-stone-200/90 shadow-[0_12px_40px_rgba(0,0,0,0.06)] p-4 sm:p-6 mb-10 transition-all">
      
      {/* Top Bar: Search Input, Status & Action Icons (Close × and Checkmark ✓ from Reference) */}
      <div className="flex flex-col lg:flex-row items-stretch lg:items-center justify-between gap-4 pb-5 border-b border-stone-100">
        
        {/* Search Input Bar */}
        <div className="relative flex-1 max-w-xl">
          <Search className="w-4 h-4 text-stone-400 absolute left-4 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            placeholder="Search Ceylon curations by dish name or ingredient..."
            value={searchQuery}
            onChange={(e) => onSearchChange(e.target.value)}
            className="w-full pl-11 pr-10 py-2.5 bg-stone-50 border border-stone-200 text-sm text-stone-800 placeholder-stone-400 focus:outline-none focus:border-[#dc2626] focus:ring-2 focus:ring-[#dc2626]/15 transition-all rounded-2xl font-manrope shadow-2xs"
          />
          {searchQuery && (
            <button
              onClick={() => onSearchChange('')}
              className="absolute right-3.5 top-1/2 -translate-y-1/2 text-xs text-stone-400 hover:text-stone-700 font-semibold cursor-pointer"
              title="Clear search"
            >
              Clear
            </button>
          )}
        </div>

        {/* Right Status Controls with (×) Reset and (✓) Confirm buttons matching the screenshot */}
        <div className="flex items-center justify-between lg:justify-end gap-3 sm:gap-4">
          
          {/* Active selection and count pill */}
          <div className="flex items-center gap-2">
            <span className="text-[11px] font-manrope uppercase tracking-wider text-stone-400 font-bold hidden sm:inline">
              Selected:
            </span>
            <span className="px-3 py-1 rounded-full bg-red-50 border border-red-200 text-[#dc2626] font-manrope font-bold text-xs uppercase tracking-wide">
              {activeCategoryObj.label}
            </span>
            <span className="text-stone-500 font-mono text-xs font-semibold">
              ({filteredCount} {filteredCount === 1 ? 'Dish' : 'Dishes'})
            </span>
          </div>

          <div className="flex items-center gap-2">
            {/* Circular Close / Reset (×) Button (Matches Reference Screenshot Top Action) */}
            {(activeCategory !== 'all' || searchQuery) && (
              <button
                onClick={onReset}
                className="w-9 h-9 rounded-full bg-stone-100 hover:bg-red-50 text-stone-600 hover:text-[#dc2626] flex items-center justify-center transition-all cursor-pointer shadow-2xs group"
                title="Reset all filters"
                aria-label="Reset filters"
              >
                <X className="w-4 h-4 stroke-[2.5] group-hover:scale-110 transition-transform" />
              </button>
            )}

            {/* Circular Checkmark (✓) Action Button (Matches Reference Screenshot Bottom Action) */}
            <button
              onClick={() => {
                const gridElem = document.getElementById('menu-curations-grid');
                if (gridElem) {
                  gridElem.scrollIntoView({ behavior: 'smooth' });
                }
              }}
              className="w-9 h-9 rounded-full bg-stone-100 hover:bg-[#dc2626] text-stone-700 hover:text-white flex items-center justify-center transition-all cursor-pointer shadow-2xs group"
              title="Apply and view dishes"
              aria-label="Apply filter"
            >
              <Check className="w-4 h-4 stroke-[2.5] group-hover:scale-110 transition-transform" />
            </button>
          </div>

        </div>
      </div>

      {/* Main Visual Category Carousel with Circular Dish Avatars (Matches Reference Image) */}
      <div className="relative pt-5">
        
        {/* Left Scroll Arrow */}
        <button
          onClick={() => scroll('left')}
          className="absolute -left-2 sm:-left-3 top-1/2 -translate-y-1/2 z-20 w-8 h-8 rounded-full bg-white border border-stone-200 text-stone-700 hover:text-[#dc2626] hover:border-[#dc2626] shadow-md flex items-center justify-center transition-all cursor-pointer hidden md:flex"
          aria-label="Scroll left"
        >
          <ChevronLeft className="w-4 h-4 stroke-[2.5]" />
        </button>

        {/* Circular Categories Track */}
        <div
          ref={scrollRef}
          className="flex items-start gap-4 sm:gap-6 overflow-x-auto pb-3 pt-1 scrollbar-none scroll-smooth px-1"
        >
          {categories.map((cat) => {
            const isSelected = activeCategory === cat.id;

            return (
              <button
                key={cat.id}
                onClick={() => onSelectCategory(cat.id)}
                className="flex flex-col items-center flex-shrink-0 group cursor-pointer focus:outline-none transition-transform"
              >
                {/* Circular Dish Frame (Matches the circular dish presentation in the reference screenshot) */}
                <div className="relative">
                  <div
                    className={`relative w-16 h-16 sm:w-20 sm:h-20 rounded-full overflow-hidden transition-all duration-300 ${
                      isSelected
                        ? 'ring-4 ring-[#dc2626] ring-offset-2 scale-105 shadow-xl'
                        : 'border-2 border-stone-200 hover:border-[#dc2626] hover:scale-105 shadow-sm opacity-90 hover:opacity-100'
                    }`}
                  >
                    <Image
                      src={cat.image}
                      alt={cat.label}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-500"
                      sizes="80px"
                    />
                    <div
                      className={`absolute inset-0 bg-black/15 transition-opacity ${
                        isSelected ? 'opacity-0' : 'group-hover:opacity-0'
                      }`}
                    />
                  </div>

                  {/* Top-Right Circular Count Badge (Matches the little badge '1', '2' in the reference screenshot) */}
                  <span
                    className={`absolute -top-1 -right-1 z-10 text-[10px] font-mono font-bold w-5 h-5 rounded-full flex items-center justify-center shadow-md transition-colors ${
                      isSelected
                        ? 'bg-[#dc2626] text-white ring-2 ring-white'
                        : 'bg-[#111827] text-white ring-2 ring-white'
                    }`}
                  >
                    {cat.count}
                  </span>
                </div>

                {/* Category Label Underneath */}
                <span
                  className={`mt-2.5 text-xs font-manrope text-center max-w-[80px] sm:max-w-[90px] leading-tight truncate transition-colors ${
                    isSelected
                      ? 'text-[#dc2626] font-extrabold scale-105'
                      : 'text-stone-700 font-semibold group-hover:text-stone-900'
                  }`}
                >
                  {cat.shortLabel}
                </span>

                {/* Subtle active indicator dot */}
                {isSelected && (
                  <span className="w-1.5 h-1.5 rounded-full bg-[#dc2626] mt-1 shadow-xs" />
                )}
              </button>
            );
          })}
        </div>

        {/* Right Scroll Arrow */}
        <button
          onClick={() => scroll('right')}
          className="absolute -right-2 sm:-right-3 top-1/2 -translate-y-1/2 z-20 w-8 h-8 rounded-full bg-white border border-stone-200 text-stone-700 hover:text-[#dc2626] hover:border-[#dc2626] shadow-md flex items-center justify-center transition-all cursor-pointer hidden md:flex"
          aria-label="Scroll right"
        >
          <ChevronRight className="w-4 h-4 stroke-[2.5]" />
        </button>

      </div>

    </div>
  );
}

