'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Sparkles, Plus, Check, ShieldCheck } from 'lucide-react';
import { MENU_ITEMS, MenuItem } from '../data/restaurantData';

interface MenuSectionProps {
  onSelectItem: (item: MenuItem) => void;
  onQuickAdd: (item: MenuItem) => void;
}

export default function MenuSection({ onSelectItem, onQuickAdd }: MenuSectionProps) {
  // 5 Iconic Signature Catches (Matching the 5-Column Sliced Showcase from the Reference Image)
  const signatureColumns = [
    {
      id: 'crab-signature',
      prefix: 'the legendary',
      title: 'BLACK PEPPER',
      subTitle: 'CRAB',
      price: '44.99',
      ingredients: 'Live Ceylon Lagoon Mud Crab, Stone-Crushed Black Peppercorns, Dashi Broth, Sweet Wok Garlic, Fresh Scallions.',
      image: '/images/black-pepper-crab.jpg',
      bgColor: '#1d333d', // Deep Slate Navy
      textColor: 'text-white',
      prefixColor: 'text-stone-300',
      titleColor: 'text-white',
      descColor: 'text-stone-300/90',
      item: MENU_ITEMS.find((i) => i.id === 'crab-signature') || MENU_ITEMS[0]
    },
    {
      id: 'lobster-signature',
      prefix: 'the imperial',
      title: 'GARLIC BUTTER',
      subTitle: 'LAGOON CRAB',
      price: '44.99',
      ingredients: 'Colossal Ceylon Mud Crab, Clarified Golden Butter Glaze, Slow-Roasted Island Garlic Cloves, Sea Salt, Lime Leaf.',
      image: '/images/garlic-butter-crab.jpg',
      bgColor: '#18847a', // Coastal Teal
      textColor: 'text-white',
      prefixColor: 'text-teal-200',
      titleColor: 'text-white',
      descColor: 'text-teal-100/90',
      item: MENU_ITEMS.find((i) => i.id === 'lobster-signature') || MENU_ITEMS[1]
    },
    {
      id: 'crab-ceylon-special-kottu',
      prefix: 'the iconic',
      title: 'CEYLON KOTTU',
      subTitle: 'SPECIAL',
      price: '39.99',
      ingredients: 'Hand-Chopped Godamba Roti, Flaked Mud Crab Meat, Jumbo Tiger Shrimp, Spiced Farm Egg, Leeks, Deviled Curry Gravy.',
      image: '/images/ceylon-kottu.jpg',
      bgColor: '#e5a942', // Warm Turmeric Amber / Honey Gold
      textColor: 'text-[#451a03]',
      prefixColor: 'text-[#78350f]',
      titleColor: 'text-[#451a03]',
      descColor: 'text-[#78350f]/90',
      item: MENU_ITEMS.find((i) => i.id === 'crab-ceylon-special-kottu') || MENU_ITEMS[2]
    },
    {
      id: 'seafood-boil',
      prefix: 'the colossal',
      title: 'SEAFOOD BOIL',
      subTitle: 'FEAST',
      price: '129.99',
      ingredients: 'Jumbo Lobster Tail, Whole Blue Crab, Atlantic Scallops, Green Mussels, Tiger Prawns, Sweet Corn, Spiced Baby Potatoes.',
      image: '/images/seafood-boil.jpg',
      bgColor: '#e67e45', // Paprika & Roasted Chili Coral
      textColor: 'text-white',
      prefixColor: 'text-orange-200',
      titleColor: 'text-white',
      descColor: 'text-orange-100/90',
      item: MENU_ITEMS.find((i) => i.id === 'seafood-boil') || MENU_ITEMS[3]
    },
    {
      id: 'jaffna-crab-curry',
      prefix: 'the royal',
      title: 'JAFFNA CRAB',
      subTitle: 'CURRY',
      price: '48.99',
      ingredients: 'Colossal Estuary Mud Crab, 21 Roasted Ceylon Spices, Thick Coconut Milk, Fresh Murunga Leaves, Toasted Red Chili.',
      image: '/images/jaffna-crab-curry.jpg',
      bgColor: '#c93b2b', // Signature Ceylon Crimson Red
      textColor: 'text-white',
      prefixColor: 'text-red-200',
      titleColor: 'text-white',
      descColor: 'text-red-100/90',
      item: MENU_ITEMS.find((i) => i.id === 'jaffna-crab-curry') || MENU_ITEMS[0],
      hasSeal: true // Quality Seal Stamp on the 5th column
    }
  ];

  return (
    <section id="menu" className="relative w-full bg-[#ffffff] text-[#111827] py-10 sm:py-20 overflow-hidden select-none border-t border-stone-200/80">

      {/* Ambient Lighting & Atmosphere */}
      <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-[#dc2626]/5 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 right-1/4 w-[500px] h-[500px] bg-[#ef4444]/6 rounded-full blur-[130px] pointer-events-none" />

      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Top Header: "CRAFTED WITH PURPOSE." in Bold Red */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-red-50 border border-red-200 text-[11px] font-bold uppercase tracking-[0.22em] text-[#dc2626] mb-4">
            <Sparkles className="w-3.5 h-3.5 text-[#dc2626]" />
            <span>The Signature Curations</span>
          </div>

          <h2 className="font-brand text-4xl sm:text-6xl md:text-7xl font-black text-[#dc2626] tracking-wide uppercase leading-tight drop-shadow-xs">
            CRAFTED WITH PURPOSE.
          </h2>
          <p className="mt-4 text-xs sm:text-sm md:text-base text-stone-600 font-manrope font-normal max-w-xl mx-auto leading-relaxed">
            Simple ingredients. Precise techniques. Bold flavors, beautifully crafted to be remembered.
          </p>
        </div>

        {/* ================= 5-COLUMN SLICED SIGNATURE BANNER (MATCHING REFERENCE IMAGE) ================= */}
        <div className="w-full rounded-3xl sm:rounded-[36px] overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.18)] border border-stone-200/60">

          <div className="flex flex-col md:flex-row w-full min-h-[640px] lg:min-h-[700px] overflow-x-auto scrollbar-none snap-x">

            {signatureColumns.map((col, index) => (
              <div
                key={col.id}
                onClick={() => onSelectItem(col.item)}
                style={{ backgroundColor: col.bgColor }}
                className={`group relative flex-1 min-w-[280px] md:min-w-0 p-6 sm:p-7 lg:p-8 flex flex-col justify-between cursor-pointer transition-all duration-500 ease-out md:hover:flex-[1.28] snap-center select-none overflow-hidden ${index !== signatureColumns.length - 1 ? 'md:border-r border-black/10' : ''
                  }`}
              >
                {/* Top Section: Icon & Header Typography (Matching "the / MASTERPIECE" style) */}
                <div className="relative z-10 text-left">
                  {/* Category icon / Crab glyph */}
                  <div className="w-8 h-8 rounded-full bg-white/15 backdrop-blur-xs flex items-center justify-center mb-3">
                    <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current text-white" xmlns="http://www.w3.org/2000/svg">
                      <circle cx="12" cy="12" r="5" />
                      <path d="M4 12 C4 8 8 4 12 4 C16 4 20 8 20 12" stroke="currentColor" strokeWidth="2" fill="none" />
                      <circle cx="8" cy="8" r="1.5" />
                      <circle cx="16" cy="8" r="1.5" />
                    </svg>
                  </div>

                  {/* Prefix in elegant serif / script lowercase */}
                  <span className={`font-serif italic text-base sm:text-lg block leading-none mb-1 ${col.prefixColor}`}>
                    {col.prefix}
                  </span>

                  {/* Title in condensed bold uppercase */}
                  <h3 className={`font-black text-2xl sm:text-3xl lg:text-4xl uppercase tracking-tight font-sans leading-[0.95] ${col.titleColor}`}>
                    {col.title}
                  </h3>
                  <h4 className={`font-black text-xl sm:text-2xl lg:text-3xl uppercase tracking-tight font-sans leading-[0.95] mt-0.5 opacity-90 ${col.titleColor}`}>
                    {col.subTitle}
                  </h4>
                </div>

                {/* Center Section: Large Delicious Signature Dish Photo */}
                <div className="relative my-6 sm:my-8 flex items-center justify-center z-10">
                  <div className="relative w-48 h-48 sm:w-56 sm:h-56 lg:w-60 lg:h-60 rounded-full overflow-hidden shadow-[0_20px_45px_rgba(0,0,0,0.35)] border-4 border-white/90 group-hover:scale-105 group-hover:rotate-2 transition-transform duration-500 bg-stone-900 flex-shrink-0">
                    <Image
                      src={col.image}
                      alt={col.title}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-700"
                      sizes="(max-width: 768px) 240px, 280px"
                    />
                    <div className="absolute inset-0 bg-black/10 group-hover:opacity-0 transition-opacity" />
                  </div>
                </div>

                {/* Bottom Section: Gourmet Ingredients & Bold Price */}
                <div className="relative z-10 text-left pt-2">

                  {/* Ingredients breakdown */}
                  <p className={`text-xs sm:text-[13px] leading-relaxed font-manrope font-medium line-clamp-4 max-w-[240px] ${col.descColor}`}>
                    {col.ingredients}
                  </p>

                  {/* Price Row */}
                  <div className="flex items-center justify-between mt-4">
                    <span className={`text-2xl sm:text-3xl font-black font-mono tracking-tight ${col.textColor}`}>
                      ${col.price}
                    </span>

                    {/* Quick Add Pill Button on Hover */}
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        onQuickAdd(col.item);
                      }}
                      className="opacity-0 group-hover:opacity-100 px-3.5 py-1.5 rounded-full bg-white text-[#111827] hover:bg-[#dc2626] hover:text-white transition-all duration-300 text-xs font-bold font-manrope flex items-center gap-1 shadow-lg hover:scale-105 cursor-pointer"
                    >
                      <Plus className="w-3.5 h-3.5 stroke-[3]" />
                      <span>Order</span>
                    </button>
                  </div>

                  {/* Vintage Quality Seal Stamp on Column 5 (Matches the Seal in Reference Image) */}
                  {col.hasSeal && (
                    <div className="absolute -bottom-2 right-0 w-16 h-16 sm:w-20 sm:h-20 rounded-full border-2 border-dashed border-white/60 flex flex-col items-center justify-center p-1 text-center rotate-[-12deg] pointer-events-none opacity-85">
                      <span className="text-[7px] font-mono tracking-widest uppercase font-bold text-white">CEYLON</span>
                      <span className="text-[9px] font-black uppercase font-sans text-white">WILD</span>
                      <span className="text-[7px] font-mono tracking-widest uppercase text-white/90">CATCH</span>
                    </div>
                  )}

                </div>

              </div>
            ))}

          </div>

        </div>

        {/* Bottom Call to Action: Bold Red Pill Button with Radiating Dashes ("VIEW FULL MENU") */}
        <div className="mt-16 sm:mt-24 flex flex-col items-center justify-center">

          <div className="relative inline-flex items-center justify-center">

            {/* Hand-Drawn Red Accent Dashes Around the Button */}
            <svg
              className="absolute -inset-x-8 -inset-y-6 w-[calc(100%+64px)] h-[calc(100%+48px)] pointer-events-none text-[#dc2626]"
              viewBox="0 0 280 100"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              {/* Left hand dashes */}
              <line x1="20" y1="40" x2="35" y2="45" stroke="#dc2626" strokeWidth="3" strokeLinecap="round" />
              <line x1="16" y1="52" x2="32" y2="52" stroke="#dc2626" strokeWidth="3" strokeLinecap="round" />
              <line x1="22" y1="64" x2="36" y2="59" stroke="#dc2626" strokeWidth="3" strokeLinecap="round" />

              {/* Right hand dashes */}
              <line x1="245" y1="45" x2="260" y2="40" stroke="#dc2626" strokeWidth="3" strokeLinecap="round" />
              <line x1="248" y1="52" x2="264" y2="52" stroke="#dc2626" strokeWidth="3" strokeLinecap="round" />
              <line x1="244" y1="59" x2="258" y2="64" stroke="#dc2626" strokeWidth="3" strokeLinecap="round" />

              {/* Top and Bottom mini accents */}
              <line x1="130" y1="14" x2="136" y2="22" stroke="#dc2626" strokeWidth="2.5" strokeLinecap="round" />
              <line x1="144" y1="12" x2="144" y2="20" stroke="#dc2626" strokeWidth="2.5" strokeLinecap="round" />
              <line x1="158" y1="14" x2="152" y2="22" stroke="#dc2626" strokeWidth="2.5" strokeLinecap="round" />
            </svg>

            {/* The Bold Red Pill Button */}
            <Link
              href="/menu"
              className="relative z-10 px-8 sm:px-12 py-3.5 sm:py-4 rounded-full bg-[#dc2626] hover:bg-[#b91c1c] active:scale-95 text-white font-black text-xs sm:text-sm uppercase tracking-[0.22em] font-brand transition-all duration-300 shadow-[0_10px_30px_rgba(220,38,38,0.4)] hover:shadow-[0_15px_40px_rgba(220,38,38,0.55)] hover:-translate-y-0.5 flex items-center gap-2 cursor-pointer border border-[#ef4444]"
            >
              <span>VIEW FULL MENU</span>
              <ArrowRight className="w-4 h-4 text-white stroke-[2.5]" />
            </Link>

          </div>

          <p className="mt-4 text-[11px] font-manrope uppercase tracking-[0.25em] text-stone-500 font-semibold text-center">
            Over 30 Coastal Seafood Curations • Kottu Roti • Rosé Pastas • Desserts
          </p>

        </div>

      </div>
    </section>
  );
}
