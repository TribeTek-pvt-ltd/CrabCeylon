'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { Check } from 'lucide-react';
import { MenuItem } from '../data/restaurantData';

interface FoodCardProps {
  item: MenuItem;
  index?: number;
  onCustomize: (item: MenuItem) => void;
  onQuickAdd: (item: MenuItem) => void;
}

// Helper to extract a cursive script prefix + main bold title matching the reference card design
function getTitleParts(title: string, category: string): { prefix: string; title: string } {
  const t = title.trim();
  const lower = t.toLowerCase();

  if (lower === 'crab') return { prefix: 'Imperial', title: 'Ceylon Crab' };
  if (lower === 'lobster') return { prefix: 'Wild Lagoon', title: 'Fresh Lobster' };
  if (lower.includes('seafood boil')) return { prefix: 'Colossal', title: 'Seafood Boil' };
  if (lower.includes('kottu')) return { prefix: 'Colombo Street', title: 'Crab Kottu' };
  if (lower.includes('fried rice')) return { prefix: 'Woodfired', title: 'Fried Rice' };
  if (lower.includes('pasta')) return { prefix: 'Garlic Butter', title: 'Seafood Pasta' };
  if (lower.includes('dinner')) return { prefix: 'Royal Feast', title: 'Crab Dinner' };
  if (lower.includes('pittu')) return { prefix: 'Claypot', title: 'Pittu Combo' };
  if (lower.includes('kade bread')) return { prefix: 'Woodfired', title: 'Kade Bread' };
  if (lower.includes('claw')) return { prefix: 'Crispy Gold', title: 'Claw Bites' };
  if (lower.includes('watalappan')) return { prefix: 'Artisan Spiced', title: 'Watalappan' };
  if (lower.includes('curd')) return { prefix: 'Ruhuna Claypot', title: 'Curd & Treacle' };

  // Fallback: If 2 or more words, first word is cursive prefix, rest is bold title
  const words = t.split(' ');
  if (words.length > 1) {
    return {
      prefix: words[0],
      title: words.slice(1).join(' ')
    };
  }

  return {
    prefix: 'Signature',
    title: t
  };
}

export default function FoodCard({ item, index = 0, onCustomize, onQuickAdd }: FoodCardProps) {
  const [isAdded, setIsAdded] = useState(false);

  const handleAddClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    onQuickAdd(item);
    setIsAdded(true);
    setTimeout(() => setIsAdded(false), 1500);
  };

  // Color themes matching the reference image:
  // Card 1: Olive Green (#6b8828)
  // Card 2: Warm Amber Orange (#e08b2c)
  // Card 3: Olive Green (#6b8828)
  const isAmber = index % 2 === 1;

  const cardBg = isAmber ? 'bg-[#e08b2c]' : 'bg-[#6b8828]';
  const priceColor = isAmber ? 'text-[#b35c0a]' : 'text-[#4d6616]';

  const titleParts = getTitleParts(item.title, item.category);
  const strikethroughPrice = Math.round(item.price * 1.18);
  const displayPrice = Math.round(item.price);
  const ratingValue = (item.rating || 4.5).toFixed(1);

  return (
    <div className="relative w-full max-w-[340px] sm:max-w-[350px] mx-auto pt-18 sm:pt-22 flex select-none">
      
      {/* Main Solid Colored Card Container (Matching Reference: Rounded-3xl, Olive / Amber, Top Takeaway Dish) */}
      <div
        onClick={() => onCustomize(item)}
        className={`group relative w-full ${cardBg} rounded-[32px] sm:rounded-[36px] px-6 sm:px-7 pt-26 sm:pt-30 pb-7 flex flex-col justify-between shadow-[0_16px_36px_rgba(0,0,0,0.14)] hover:shadow-[0_22px_48px_rgba(0,0,0,0.22)] transition-all duration-500 hover:-translate-y-2 cursor-pointer overflow-visible`}
      >

        {/* ================= TOP TILTED BLACK TAKEAWAY BENTO DISH (Lifted higher so food name is 100% visible) ================= */}
        <div className="absolute -top-14 sm:-top-16 left-1/2 -translate-x-1/2 z-20 pointer-events-none">
          <div className="w-56 sm:w-60 h-32 sm:h-34 rounded-2xl sm:rounded-3xl p-2 bg-[#1c1917] border-[3px] border-[#312b27] shadow-[0_18px_32px_rgba(0,0,0,0.42)] rotate-[-8deg] group-hover:rotate-[-5deg] group-hover:scale-105 transition-all duration-500 flex items-center justify-center">
            
            {/* Inner Food Container */}
            <div className="relative w-full h-full rounded-xl sm:rounded-2xl overflow-hidden bg-black shadow-inner">
              <Image
                src={item.image}
                alt={item.title}
                fill
                sizes="(max-width: 640px) 240px, 260px"
                className="object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                priority={index < 3}
              />
              {/* Subtle Food Gloss */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-white/10 pointer-events-none" />
            </div>

          </div>
        </div>

        {/* ================= WHITE CIRCULAR PRICE SEAL / STICKER ================= */}
        <div className="absolute top-6 sm:top-7 right-2 sm:right-3 z-30 pointer-events-none">
          <div className="relative w-18 h-18 sm:w-20 sm:h-20 rounded-full bg-white shadow-[0_8px_20px_rgba(0,0,0,0.22)] flex flex-col items-center justify-center p-1 text-center">
            
            {/* Sketched Hand-Drawn Circular Ring Accent */}
            <svg
              className="absolute -inset-1.5 w-[calc(100%+12px)] h-[calc(100%+12px)] pointer-events-none"
              viewBox="0 0 100 100"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle
                cx="50"
                cy="50"
                r="46"
                stroke="white"
                strokeWidth="2.5"
                strokeDasharray="8 4"
                strokeLinecap="round"
                opacity="0.9"
              />
              <path
                d="M14 50 C14 22, 28 14, 50 14 C74 14, 86 26, 86 50 C86 74, 74 86, 50 86 C26 86, 14 74, 14 50"
                stroke="white"
                strokeWidth="1.2"
                opacity="0.45"
                fill="none"
              />
            </svg>

            {/* Price Badge Content */}
            <span className="text-[8px] sm:text-[9px] font-extrabold text-stone-400 uppercase tracking-widest leading-none mb-0.5">
              PRICE
            </span>
            <span className={`text-base sm:text-lg font-black font-mono tracking-tight leading-none ${priceColor}`}>
              ${displayPrice}
            </span>
            <span className="text-[10px] sm:text-[11px] text-stone-400 line-through font-mono leading-none mt-0.5 font-medium">
              ${strikethroughPrice}
            </span>

          </div>
        </div>

        {/* ================= CARD BODY CONTENT (Clear of photo overlap) ================= */}
        <div className="text-left flex flex-col items-start w-full">

          {/* Cursive Script Category / Descriptor Tag (e.g. "Imperial", "Wild Lagoon", "Colombo Street") */}
          <span className="font-script text-2xl sm:text-[28px] text-white/95 leading-none block font-semibold tracking-wide mb-1">
            {titleParts.prefix}
          </span>

          {/* Main Bold Title (e.g. "Ceylon Crab", "Fresh Lobster") */}
          <h3 className="font-sans text-2xl sm:text-[28px] font-black text-white tracking-tight leading-tight capitalize mb-1">
            {titleParts.title}
          </h3>

          {/* Star Rating Badge (White Pill with Golden Stars + Rating) */}
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white shadow-sm my-2 self-start">
            <div className="flex items-center text-amber-500 text-[11px] tracking-tight font-bold">
              ★★★★★
            </div>
            <span className="text-xs font-black text-stone-800 font-mono">
              {ratingValue}
            </span>
          </div>

          {/* Description Paragraph (Light Clean White 3-Line Text) */}
          <p className="text-xs sm:text-[13px] text-white/90 font-normal leading-relaxed line-clamp-3 my-3">
            {item.description}
          </p>

          {/* ================= BOTTOM DARK BROWN PILL BUTTON ("ORDER NOW") ================= */}
          <button
            onClick={handleAddClick}
            aria-label={`Order ${item.title}`}
            className={`px-6 sm:px-7 py-2.5 sm:py-3 rounded-full font-manrope font-extrabold text-xs uppercase tracking-widest shadow-md hover:shadow-xl transition-all duration-300 hover:scale-105 active:scale-95 cursor-pointer self-start flex items-center gap-1.5 ${
              isAdded
                ? 'bg-emerald-700 text-white shadow-emerald-900/30'
                : 'bg-[#2a170b] hover:bg-[#140a04] text-white'
            }`}
          >
            {isAdded ? (
              <>
                <Check className="w-3.5 h-3.5 stroke-[3]" />
                <span>ADDED</span>
              </>
            ) : (
              <span>ORDER NOW</span>
            )}
          </button>

        </div>

      </div>
    </div>
  );
}
