'use client';

import React from 'react';
import { ArrowRight, ChevronDown, Clock, Flame, Scale, Waves } from 'lucide-react';

interface HeroProps {
  onOrderClick: () => void;
  onReserveClick: () => void;
}

export default function Hero({ onOrderClick, onReserveClick }: HeroProps) {
  return (
    <section className="relative h-screen min-h-[720px] w-full overflow-hidden flex flex-col justify-between items-center text-center bg-black text-white select-none">

      {/* Background Culinary Video (Wok Flames & Chef Cooking) */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <video
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          className="w-full h-full object-cover filter brightness-[0.68] contrast-[1.14] saturate-[1.10] scale-105"
        >
          <source src="/videos/hero-cooking.webm" type="video/webm" />
          <source src="/videos/hero-bg.mp4" type="video/mp4" />
        </video>

        {/* Cinematic Multi-Layer Vignettes & Overlays for High-Contrast Text Readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/0 via-black/45 to-black/0 pointer-events-none" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(220,38,38,0.18)_0%,_transparent_65%)] pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/0 via-transparent to-black/0 pointer-events-none" />
      </div>

      {/* Top Spacer to account for fixed header */}
      <div className="h-16 sm:h-20 w-full z-10" />

      {/* Center Monumental Content (True Ministry of Crab Layout) */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex flex-col items-center justify-center my-auto">

        {/* Crab Red Insignia Emblem */}
        <div className="mb-4 sm:mb-5 animate-fade-in">
          <div className="w-16 h-12 sm:w-20 sm:h-14 relative mx-auto drop-shadow-[0_4px_16px_rgba(220,38,38,0.6)]">
            <svg
              viewBox="0 0 100 80"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="w-full h-full text-[#dc2626]"
            >
              {/* Stylized Ministry of Crab Silhouette Emblem */}
              <ellipse cx="50" cy="46" rx="20" ry="15" fill="#dc2626" />
              {/* Shell Grooves */}
              <path d="M42 38 Q50 32 58 38" stroke="#121826" strokeWidth="2.5" strokeLinecap="round" />
              <path d="M40 46 Q50 42 60 46" stroke="#121826" strokeWidth="2.5" strokeLinecap="round" />
              <path d="M43 54 Q50 50 57 54" stroke="#121826" strokeWidth="2.5" strokeLinecap="round" />
              {/* Left Claw */}
              <path
                d="M34 40 C24 35 12 25 10 16 C8 8 20 10 24 20 C26 25 32 30 35 34"
                fill="#dc2626"
              />
              <path
                d="M24 20 C18 12 22 4 28 6 C32 8 32 16 34 26"
                fill="#ef4444"
              />
              {/* Right Claw */}
              <path
                d="M66 40 C76 35 88 25 90 16 C92 8 80 10 76 20 C74 25 68 30 65 34"
                fill="#dc2626"
              />
              <path
                d="M76 20 C82 12 78 4 72 6 C68 8 68 16 66 26"
                fill="#ef4444"
              />
              {/* Legs Left */}
              <path d="M30 48 Q18 50 14 62" stroke="#dc2626" strokeWidth="3" strokeLinecap="round" />
              <path d="M32 54 Q20 60 18 72" stroke="#dc2626" strokeWidth="3" strokeLinecap="round" />
              <path d="M36 60 Q26 70 24 80" stroke="#dc2626" strokeWidth="3" strokeLinecap="round" />
              {/* Legs Right */}
              <path d="M70 48 Q82 50 86 62" stroke="#dc2626" strokeWidth="3" strokeLinecap="round" />
              <path d="M68 54 Q80 60 82 72" stroke="#dc2626" strokeWidth="3" strokeLinecap="round" />
              <path d="M64 60 Q74 70 76 80" stroke="#dc2626" strokeWidth="3" strokeLinecap="round" />
              {/* Eye Stalks */}
              <circle cx="45" cy="31" r="2.5" fill="#dc2626" />
              <circle cx="55" cy="31" r="2.5" fill="#dc2626" />
            </svg>
          </div>
        </div>

        {/* Spaced Institutional Subheading */}
        <div className="font-manrope text-[11px] sm:text-xs md:text-sm uppercase tracking-[0.45em] text-[#ef4444] font-extrabold mb-3 flex items-center justify-center gap-3">
          <span className="w-8 sm:w-12 h-[1px] bg-[#ef4444]/60" />
          <span>THE MINISTRY OF WILD CEYLON SEAFOOD</span>
          <span className="w-8 sm:w-12 h-[1px] bg-[#ef4444]/60" />
        </div>

        {/* Monumental Bodoni Moda Didone Title */}
        <h1 className="font-didone text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-black text-white tracking-[-0.03em] uppercase leading-none drop-shadow-[0_10px_40px_rgba(0,0,0,0.9)] mb-4">
          CRAB CEYLON
        </h1>

        {/* Editorial Subtitle in Playfair Italic */}
        <p className="font-serif italic text-xl sm:text-2xl md:text-3xl text-stone-200 font-light max-w-3xl mb-5 leading-snug drop-shadow-md">
          &ldquo;A Culinary Homecoming for the Legendary Lagoon Mud Crab&rdquo;
        </p>

        {/* Narrative Paragraph */}
        <p className="font-manrope text-stone-300 text-xs sm:text-sm md:text-base leading-relaxed max-w-2xl font-normal mb-8 line-clamp-3 sm:line-clamp-none drop-shadow">
          Wild mud crabs harvested from Sri Lanka’s pristine mangrove estuaries, flown fresh into our live 18°C saline tanks. Weighed live at your table, cracked to order, and wok-seared in 21 stone-ground island spices over roaring flames.
        </p>

        {/* High-Contrast Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 w-full sm:w-auto mb-6">
          <button
            onClick={onReserveClick}
            className="w-full sm:w-auto font-manrope px-9 sm:px-11 py-4 bg-[#dc2626] hover:bg-[#b91c1c] text-white font-black text-xs uppercase tracking-[0.28em] transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer shadow-[0_10px_30px_rgba(220,38,38,0.45)] hover:shadow-[0_15px_40px_rgba(220,38,38,0.6)] hover:-translate-y-0.5 border border-[#ef4444]"
          >
            <Clock className="w-4 h-4 text-white stroke-[2.5]" />
            <span>Reserve A Table</span>
          </button>

          <button
            onClick={onOrderClick}
            id="hero-order-btn"
            className="w-full sm:w-auto font-manrope px-8 sm:px-10 py-4 bg-black/40 hover:bg-white/10 text-white hover:text-[#ef4444] font-extrabold text-xs uppercase tracking-[0.28em] transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer backdrop-blur-md border border-white/30 hover:border-[#dc2626] hover:-translate-y-0.5 shadow-lg group"
          >
            <span>Explore The Catch</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform text-[#ef4444]" />
          </button>
        </div>

        {/* Institutional Charter Pillars */}
        <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-8 text-[10px] sm:text-[11px] uppercase tracking-[0.28em] text-stone-400 font-bold font-manrope pb-2">
          <div className="flex items-center gap-1.5 text-stone-200">
            <Flame className="w-3.5 h-3.5 text-[#dc2626]" />
            <span>Strict No-Freezer Policy</span>
          </div>
          <span className="text-[#dc2626]">•</span>
          <div className="flex items-center gap-1.5 text-stone-200">
            <Waves className="w-3.5 h-3.5 text-[#ef4444]" />
            <span>18°C Aerated Saline Tanks</span>
          </div>
          <span className="text-[#dc2626]">•</span>
          <div className="flex items-center gap-1.5 text-stone-200">
            <Scale className="w-3.5 h-3.5 text-[#ef4444]" />
            <span>Weighed Live At Table</span>
          </div>
        </div>

      </div>

      {/* Bottom Center "SCROLL TO DISCOVER" */}
      <div className="relative z-10 pb-5 sm:pb-7 flex flex-col items-center">
        <button
          onClick={onOrderClick}
          className="flex flex-col items-center gap-1.5 text-stone-300 hover:text-[#ef4444] transition-all group cursor-pointer"
        >
          <span className="font-manrope text-[10px] sm:text-[11px] uppercase tracking-[0.45em] font-extrabold group-hover:tracking-[0.55em] transition-all duration-300">
            Scroll To Discover
          </span>
          <ChevronDown className="w-4 h-4 sm:w-5 sm:h-5 text-[#ef4444] animate-bounce" />
        </button>
      </div>

    </section>
  );
}
