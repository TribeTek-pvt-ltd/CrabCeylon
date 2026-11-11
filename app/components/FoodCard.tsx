'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { ChevronLeft, MoreVertical, Plus, Check } from 'lucide-react';
import { MenuItem } from '../data/restaurantData';

interface FoodCardProps {
  item: MenuItem;
  onCustomize: (item: MenuItem) => void;
  onQuickAdd: (item: MenuItem) => void;
}

// 1. Mini Floating Ceylon Mud Crab Claw (Replaces Green & Black Marks)
function FloatingCrabClaw({ className = '' }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 60 50"
      className={`pointer-events-none drop-shadow-[0_6px_14px_rgba(0,0,0,0.35)] ${className}`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id="crabShellGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#f87171" />
          <stop offset="40%" stopColor="#dc2626" />
          <stop offset="85%" stopColor="#991b1b" />
          <stop offset="100%" stopColor="#450a0a" />
        </linearGradient>
        <linearGradient id="pincerTip" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#fef08a" />
          <stop offset="60%" stopColor="#f97316" />
          <stop offset="100%" stopColor="#dc2626" />
        </linearGradient>
      </defs>
      {/* Lower claw palm / base */}
      <path
        d="M12 36 C10 24, 20 16, 32 18 C42 19, 48 28, 44 38 C40 46, 20 46, 12 36 Z"
        fill="url(#crabShellGrad)"
      />
      {/* Upper curved pincer blade */}
      <path
        d="M30 18 C38 8, 48 6, 56 12 C54 18, 44 24, 34 22 Z"
        fill="url(#pincerTip)"
      />
      {/* Lower movable pincer finger */}
      <path
        d="M36 24 C44 24, 52 20, 54 26 C48 30, 40 30, 36 26 Z"
        fill="url(#pincerTip)"
      />
      {/* Claw joint ridge */}
      <ellipse cx="22" cy="26" rx="4" ry="7" fill="#fca5a5" opacity="0.4" transform="rotate(-25 22 26)" />
      {/* Highlights */}
      <path d="M18 24 C24 20, 32 20, 38 23" stroke="white" strokeWidth="1.5" strokeLinecap="round" opacity="0.6" />
    </svg>
  );
}

// 2. Mini Floating Succulent Tiger Shrimp / Prawn
function FloatingShrimp({ className = '' }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 54 48"
      className={`pointer-events-none drop-shadow-[0_6px_14px_rgba(0,0,0,0.32)] ${className}`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id="shrimpGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#ff8a65" />
          <stop offset="35%" stopColor="#f4511e" />
          <stop offset="75%" stopColor="#d84315" />
          <stop offset="100%" stopColor="#bf360c" />
        </linearGradient>
        <linearGradient id="shrimpTailGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#ffab91" />
          <stop offset="100%" stopColor="#e64a19" />
        </linearGradient>
      </defs>
      {/* Curled Shrimp Body */}
      <path
        d="M12 28 C8 16, 20 8, 34 10 C46 12, 50 24, 44 34 C40 40, 30 42, 24 38 C18 34, 18 24, 26 20 C32 17, 38 22, 35 27 C33 30, 27 30, 26 26"
        fill="url(#shrimpGrad)"
        stroke="#ffccbc"
        strokeWidth="1"
      />
      {/* Shell Segments / Bands */}
      <path d="M22 11 C26 15, 27 20, 26 24" stroke="white" strokeWidth="1.5" strokeLinecap="round" opacity="0.6" />
      <path d="M30 11 C34 16, 36 21, 34 26" stroke="white" strokeWidth="1.5" strokeLinecap="round" opacity="0.6" />
      <path d="M38 14 C42 19, 43 25, 40 30" stroke="white" strokeWidth="1.5" strokeLinecap="round" opacity="0.6" />
      {/* Fan Tail */}
      <path d="M12 28 C6 26, 4 32, 6 36 C10 36, 12 32, 13 29 Z" fill="url(#shrimpTailGrad)" />
      <path d="M12 30 C8 32, 7 38, 10 40 C13 39, 14 34, 14 31 Z" fill="url(#shrimpTailGrad)" />
      {/* Tender underside highlight */}
      <circle cx="28" cy="22" r="2" fill="white" opacity="0.5" />
    </svg>
  );
}

// 3. Mini Floating Royal Lobster Tail / Shell
function FloatingLobster({ className = '' }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 55 50"
      className={`pointer-events-none drop-shadow-[0_6px_14px_rgba(0,0,0,0.35)] ${className}`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id="lobsterGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#f87171" />
          <stop offset="45%" stopColor="#dc2626" />
          <stop offset="85%" stopColor="#991b1b" />
          <stop offset="100%" stopColor="#7f1d1d" />
        </linearGradient>
      </defs>
      {/* Lobster tail / fan segments */}
      <path
        d="M27 6 C20 12, 16 22, 18 34 C19 40, 24 44, 27 46 C30 44, 35 40, 36 34 C38 22, 34 12, 27 6 Z"
        fill="url(#lobsterGrad)"
      />
      {/* Lobster tail fan flippers */}
      <path d="M27 46 C22 47, 16 45, 12 40 C17 38, 23 41, 26 44 Z" fill="#ef4444" />
      <path d="M27 46 C32 47, 38 45, 42 40 C37 38, 31 41, 28 44 Z" fill="#ef4444" />
      <path d="M27 46 C25 49, 29 49, 27 46 Z" fill="#b91c1c" />
      {/* Segmented Armor ridges */}
      <path d="M20 18 C24 20, 30 20, 34 18" stroke="#fecaca" strokeWidth="1.5" strokeLinecap="round" opacity="0.7" />
      <path d="M19 26 C23 28, 31 28, 35 26" stroke="#fecaca" strokeWidth="1.5" strokeLinecap="round" opacity="0.7" />
      <path d="M19 34 C23 36, 31 36, 35 34" stroke="#fecaca" strokeWidth="1.5" strokeLinecap="round" opacity="0.7" />
      {/* Shiny shell highlight */}
      <ellipse cx="27" cy="14" rx="3" ry="5" fill="white" opacity="0.35" />
    </svg>
  );
}

export default function FoodCard({ item, onCustomize, onQuickAdd }: FoodCardProps) {
  const [isAdded, setIsAdded] = useState(false);

  const handleAddClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    onQuickAdd(item);
    setIsAdded(true);
    setTimeout(() => setIsAdded(false), 1500);
  };

  return (
    // Fixed Uniform Dimensions: Every card has the exact same height and width across all foods
    <div className="relative w-full max-w-[340px] sm:max-w-[360px] mx-auto h-[610px] sm:h-[640px] flex">
      
      {/* Main Card Container (Exact Taupe/Warm Grey Tone #cfcbcd and 48px Rounded Corners) */}
      <div
        onClick={() => onCustomize(item)}
        className="group relative w-full h-full bg-[#cfcbcd] rounded-[48px] px-6 sm:px-7 pt-6 pb-8 flex flex-col justify-between shadow-[0_20px_50px_rgba(0,0,0,0.10)] hover:shadow-[0_28px_65px_rgba(220,38,38,0.18)] transition-all duration-300 hover:-translate-y-1.5 cursor-pointer select-none overflow-visible"
      >
        
        {/* ================= 5 FLOATING CRAB, LOBSTER & SHRIMP ELEMENTS (REPLACING GREEN/BLACK MARKS) ================= */}
        {/* Seafood 1: Top-Right -> Ceylon Lagoon Crab Claw */}
        <FloatingCrabClaw className="absolute -top-3 -right-4 w-12 h-11 rotate-[25deg] z-20 group-hover:rotate-[35deg] group-hover:scale-110 transition-transform duration-700" />
        
        {/* Seafood 2: Top-Left -> Succulent Tiger Shrimp / Prawn */}
        <FloatingShrimp className="absolute top-16 -left-3 w-11 h-10 rotate-[-20deg] z-20 group-hover:scale-110 transition-transform duration-700" />
        
        {/* Seafood 3: Mid-Left -> Royal Lobster Tail */}
        <FloatingLobster className="absolute top-52 -left-4 w-11 h-10 rotate-[35deg] z-20 group-hover:translate-x-[-2px] group-hover:scale-110 transition-transform duration-700" />
        
        {/* Seafood 4: Bottom-Left -> Second Ceylon Mud Crab Claw */}
        <FloatingCrabClaw className="absolute top-68 left-8 w-9 h-8 rotate-[-40deg] z-20 group-hover:scale-110 transition-transform duration-700" />
        
        {/* Seafood 5: Mid-Right -> Golden Jumbo Shrimp */}
        <FloatingShrimp className="absolute top-56 -right-3 w-11 h-10 rotate-[45deg] z-20 group-hover:translate-x-[2px] group-hover:scale-110 transition-transform duration-700" />

        {/* Top Controls: Left Chevron (<) and Right Three Dots (⋮) */}
        <div className="flex items-center justify-between w-full h-8 relative z-20 px-1">
          <button
            onClick={(e) => {
              e.stopPropagation();
              onCustomize(item);
            }}
            className="w-8 h-8 flex items-center justify-center text-[#111827] hover:scale-110 transition-transform cursor-pointer"
            title="Back / View"
            aria-label="Back"
          >
            <ChevronLeft className="w-5 h-5 stroke-[2.5]" />
          </button>

          <button
            onClick={(e) => {
              e.stopPropagation();
              onCustomize(item);
            }}
            className="w-8 h-8 flex items-center justify-center text-[#111827] hover:scale-110 transition-transform cursor-pointer"
            title="Menu options"
            aria-label="Options"
          >
            <MoreVertical className="w-5 h-5 stroke-[2.5]" />
          </button>
        </div>

        {/* ================= HERO COMPLETE CIRCULAR BOWL (UNCUT, FULL CIRCLE LIKE IN THE PHOTOS) ================= */}
        <div className="relative my-auto w-full h-60 sm:h-64 flex items-center justify-center z-10">
          {/* Complete 360-degree circular plate with thick dark rim and deep drop shadow, NOT cut off by any borders */}
          <div className="relative w-56 h-56 sm:w-60 sm:h-60 aspect-square rounded-full overflow-hidden border-[7px] border-[#181615] shadow-[0_24px_50px_rgba(0,0,0,0.38)] group-hover:scale-[1.03] transition-transform duration-500 bg-[#111827] flex-shrink-0">
            <Image
              src={item.image}
              alt={item.title}
              fill
              className="object-cover group-hover:scale-110 transition-transform duration-700"
              sizes="(max-width: 640px) 240px, 260px"
              priority={item.isPopular}
            />
            {/* Photographic inner rim shadow */}
            <div className="absolute inset-0 rounded-full shadow-[inset_0_4px_20px_rgba(0,0,0,0.5)] pointer-events-none" />
          </div>
        </div>

        {/* ================= UNIFORM TYPOGRAPHY (FIXED HEIGHT FOR ALL CARDS) ================= */}
        <div className="text-left mt-3 px-1 relative z-10">
          
          {/* Title Container (Fixed 48px height so 1-line and 2-line titles align perfectly across all cards) */}
          <div className="h-14 flex items-center">
            <h3 className="text-2xl sm:text-[26px] font-black text-[#111827] tracking-tight font-sans leading-tight line-clamp-2 group-hover:text-[#dc2626] transition-colors">
              {item.title}
            </h3>
          </div>

          {/* Subtitle Container (Fixed 36px height for uniform card height across all foods) */}
          <div className="h-9 mt-1 flex items-start">
            <p className="text-xs sm:text-sm text-stone-700 font-medium leading-relaxed line-clamp-2">
              {item.description}
            </p>
          </div>

          {/* Price Row (Fixed height, perfectly aligned across cards) */}
          <div className="flex items-center justify-between mt-4 mb-4 pt-1">
            <span className="text-sm sm:text-base font-semibold text-[#111827] font-sans">
              Total price
            </span>
            <span className="text-xl sm:text-2xl font-black text-[#111827] font-sans tracking-tight">
              $ {item.price.toFixed(2)}
            </span>
          </div>

        </div>

        {/* ================= BOTTOM SOLID BLACK PILL BUTTON [ (+) Add to Cart ] ================= */}
        <button
          onClick={handleAddClick}
          className={`w-full py-4 rounded-full flex items-center justify-center gap-2.5 text-sm font-bold font-sans tracking-wide shadow-lg transition-all duration-300 active:scale-[0.98] cursor-pointer mt-auto relative z-20 ${
            isAdded
              ? 'bg-emerald-600 text-white shadow-emerald-600/30'
              : 'bg-black hover:bg-[#dc2626] text-white hover:shadow-[0_12px_28px_rgba(220,38,38,0.4)]'
          }`}
          aria-label={`Add ${item.title} to cart`}
        >
          {isAdded ? (
            <>
              <div className="w-5 h-5 rounded-full bg-white text-emerald-600 flex items-center justify-center">
                <Check className="w-3 h-3 stroke-[3]" />
              </div>
              <span>Added to Cart</span>
            </>
          ) : (
            <>
              {/* White Circle with Plus Icon (+) */}
              <div className="w-5 h-5 rounded-full bg-white text-black flex items-center justify-center">
                <Plus className="w-3 h-3 stroke-[3]" />
              </div>
              <span>Add to Cart</span>
            </>
          )}
        </button>

      </div>
    </div>
  );
}
