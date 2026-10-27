'use client';

import React from 'react';
import Image from 'next/image';
import { ArrowRight, Clock } from 'lucide-react';

interface HeroProps {
  onOrderClick: () => void;
  onReserveClick: () => void;
}

export default function Hero({ onOrderClick, onReserveClick }: HeroProps) {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center pt-28 pb-20 overflow-hidden bg-[#07090e]">
      {/* Background Imagery with Fine Editorial Vignette */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero-crab.jpg"
          alt="Wild Ceylon Lagoon Mud Crab at Crab Ceylon Toronto"
          fill
          priority
          className="object-cover object-center filter brightness-[1] contrast-[1.20]"
        />
        {/* Layered cinematic gradients */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#07090e] via-[#07090e]/50 to-[#07090e]/75" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#07090e]/90 via-transparent to-[#07090e]/90" />
      </div>

      {/* Hero Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 lg:px-8 text-center flex flex-col items-center ">
        {/* Understated Location & Sourcing Tag */}
        <div className="inline-flex items-center gap-3 mb-8">
          <span className="w-8 h-[1px] bg-[#c5a059]/60" />
          <span className="text-[11px] uppercase tracking-[0.35em] text-[#D4AF37] font-medium">
            Yorkville • Toronto • Est. 2024
          </span>
          <span className="w-8 h-[1px] bg-[#c5a059]/60" />
        </div>

        {/* Clean Two-Line Luxury Headline */}
        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-serif font-normal text-white leading-[1.15] mb-8 tracking-tight">
          Wild Ceylon Lagoon Crabs.
          <br />
          <span className="italic font-bold text-[#D4AF37]">
            Pure Oceanic Luxury in Toronto.
          </span>
        </h1>

        {/* Subtitle */}
        <p className="max-w-2xl text-base sm:text-lg text-slate-300 font-light leading-relaxed mb-12 text-balance">
          Flown fresh from Sri Lanka&apos;s mangrove lagoons to our live saline tanks in Yorkville.
          Weighed live, cracked to perfection, and wok-glazed in twenty-one heirloom island spices.
        </p>

        {/* Refined Actions (No SaaS boxes, just pure luxury hospitality CTAs) */}
        <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6 w-full sm:w-auto mb-16">
          <button
            onClick={onOrderClick}
            id="hero-order-btn"
            className="w-full sm:w-auto px-9 py-4 bg-[#c5a059] hover:bg-[#d4af37] text-[#07090e] font-semibold text-xs uppercase tracking-[0.22em] transition-all duration-300 flex items-center justify-center gap-2 group cursor-pointer shadow-[0_0_25px_rgba(197,160,89,0.3)]"
          >
            <span>Explore The Catch</span>
            <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
          </button>

          <button
            onClick={onReserveClick}
            className="w-full sm:w-auto px-8 py-4 border border-[#c5a059]/50 hover:border-[#c5a059] text-[#f4df95] hover:bg-[#c5a059]/10 font-semibold text-xs uppercase tracking-[0.22em] transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer"
          >
            <Clock className="w-3.5 h-3.5 text-[#c5a059]" />
            <span>Table Reservations</span>
          </button>
        </div>

        {/* Single Refined Hairline Footnote */}
        <div className="pt-6 border-t border-white/[0.08] w-full max-w-xl flex flex-wrap items-center justify-center gap-6 text-[11px] uppercase tracking-[0.28em] text-slate-400">
          <span>Live Saline Tanks</span>
          <span className="text-[#c5a059]/40">•</span>
          <span>Weighed at Table</span>
          <span className="text-[#c5a059]/40">•</span>
          <span>Express Heated Delivery</span>
        </div>
      </div>
    </section>
  );
}
