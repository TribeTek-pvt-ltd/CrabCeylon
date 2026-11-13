'use client';

import React, { useState, useEffect, useRef } from 'react';
import { ArrowRight, Play, X, Clock, Sparkles } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

interface HeroProps {
  onOrderClick: () => void;
  onReserveClick: () => void;
}

export default function Hero({ onOrderClick, onReserveClick }: HeroProps) {
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);

  const sectionRef = useRef<HTMLElement>(null);
  const heroPlatterRef = useRef<HTMLDivElement>(null);
  const dippingBowlRef = useRef<HTMLDivElement>(null);
  const spoonsRef = useRef<HTMLDivElement>(null);
  const tomatoesRef = useRef<HTMLDivElement>(null);
  const coasterRef = useRef<HTMLDivElement>(null);
  const heroTextRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!sectionRef.current) return;

    const ctx = gsap.context(() => {
      // 1. Hero Platter: As user scrolls down towards MenuSection, the platter ROTATES (+55deg) and glides UP & RIGHT (Frame 00:00 -> 00:01 match)
      if (heroPlatterRef.current) {
        gsap.to(heroPlatterRef.current, {
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top top',
            end: 'bottom top',
            scrub: 1.0
          },
          y: -360,
          x: 80,
          rotation: 55,
          scale: 0.92,
          ease: 'none'
        });
      }

      // 2. Dipping Sauce Bowl: Floats upward toward the top-center while counter-spinning (Frame 00:01 match)
      if (dippingBowlRef.current) {
        gsap.to(dippingBowlRef.current, {
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top top',
            end: 'bottom top',
            scrub: 1.1
          },
          y: -290,
          x: 65,
          rotation: -45,
          scale: 1.08,
          ease: 'none'
        });
      }

      // 3. Floating Spice Spoons (Top Left): Glides up and spins away
      if (spoonsRef.current) {
        gsap.to(spoonsRef.current, {
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top top',
            end: 'bottom top',
            scrub: 0.9
          },
          y: -240,
          x: -50,
          rotation: -40,
          opacity: 0.2,
          ease: 'none'
        });
      }

      // 4. Vine Tomatoes & Onions (Top Right): Glides up and spins away
      if (tomatoesRef.current) {
        gsap.to(tomatoesRef.current, {
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top top',
            end: 'bottom top',
            scrub: 1.0
          },
          y: -260,
          x: 60,
          rotation: 35,
          opacity: 0.2,
          ease: 'none'
        });
      }

      // 5. Coaster drift
      if (coasterRef.current) {
        gsap.to(coasterRef.current, {
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top top',
            end: 'bottom top',
            scrub: 1.3
          },
          y: -240,
          rotation: 60,
          ease: 'none'
        });
      }

      // 6. Hero Text gentle upward fade
      if (heroTextRef.current) {
        gsap.to(heroTextRef.current, {
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top top',
            end: '65% top',
            scrub: 0.8
          },
          y: -90,
          opacity: 0.2,
          ease: 'none'
        });
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen w-full overflow-hidden bg-[#faf9f6] text-[#111827] flex flex-col justify-between pt-24 sm:pt-28 pb-8 select-none"
    >

      {/* Subtle Marble Table Texture Overlay */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-[0.035] bg-[radial-gradient(#000000_1px,transparent_1px)] [background-size:16px_16px]" />

      {/* Warm Ambient Culinary Lighting */}
      <div className="absolute top-10 right-1/4 w-[500px] h-[500px] bg-amber-500/5 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-[450px] h-[450px] bg-red-500/5 rounded-full blur-[120px] pointer-events-none" />

      {/* ================= FLOATING PERIPHERY CULINARY ELEMENTS (Matches Frame 00:00) ================= */}

      {/* Top-Left: Wooden Spoons with Colorful Spices */}
      <div
        ref={spoonsRef}
        className="absolute top-20 left-3 sm:left-8 z-10 pointer-events-none drop-shadow-[0_15px_30px_rgba(0,0,0,0.12)] will-change-transform"
      >
        <div className="w-24 sm:w-36 md:w-44 h-24 sm:h-36 md:h-44 relative rotate-[-18deg]">
          <svg viewBox="0 0 160 160" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
            {/* Spoon 1: Turmeric */}
            <path d="M20 150 L60 80 Q65 70 75 75 Q85 80 80 90 L40 160 Z" fill="#b45309" />
            <ellipse cx="70" cy="75" rx="18" ry="22" fill="#d97706" />
            <ellipse cx="70" cy="74" rx="14" ry="18" fill="#f59e0b" />
            {/* Spoon 2: Chili Powder */}
            <path d="M45 155 L85 65 Q90 55 100 60 Q110 65 105 75 L65 165 Z" fill="#991b1b" />
            <ellipse cx="95" cy="62" rx="17" ry="21" fill="#dc2626" />
            <ellipse cx="95" cy="61" rx="13" ry="17" fill="#ef4444" />
            {/* Spoon 3: Crushed Peppercorns */}
            <path d="M70 158 L110 50 Q115 40 125 45 Q135 50 130 60 L90 168 Z" fill="#451a03" />
            <ellipse cx="120" cy="48" rx="16" ry="20" fill="#292524" />
            <circle cx="116" cy="45" r="2.5" fill="#1c1917" />
            <circle cx="123" cy="44" r="2" fill="#1c1917" />
            <circle cx="120" cy="52" r="2" fill="#1c1917" />
          </svg>
        </div>
      </div>

      {/* Top-Right: Vine Tomatoes, Purple Onion Rings & Fresh Coriander */}
      <div
        ref={tomatoesRef}
        className="absolute top-16 right-4 sm:right-10 z-10 pointer-events-none drop-shadow-[0_12px_24px_rgba(0,0,0,0.1)] will-change-transform"
      >
        <div className="w-28 sm:w-40 md:w-48 h-28 sm:h-40 md:h-48 relative">
          <svg viewBox="0 0 160 160" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
            {/* Green vine */}
            <path d="M40 30 Q70 50 120 40" stroke="#16a34a" strokeWidth="3" strokeLinecap="round" />
            <path d="M60 40 Q55 25 50 20" stroke="#16a34a" strokeWidth="2.5" />
            <path d="M100 42 Q105 28 115 25" stroke="#16a34a" strokeWidth="2.5" />
            {/* Tomato 1 */}
            <circle cx="50" cy="58" r="22" fill="#dc2626" />
            <circle cx="44" cy="52" r="7" fill="#ef4444" opacity="0.6" />
            <path d="M50 36 L48 42 L52 42 Z" fill="#15803d" />
            {/* Tomato 2 */}
            <circle cx="95" cy="62" r="26" fill="#b91c1c" />
            <circle cx="88" cy="54" r="9" fill="#ef4444" opacity="0.6" />
            <path d="M95 36 L92 43 L98 43 Z" fill="#15803d" />
            {/* Onion Ring */}
            <ellipse cx="125" cy="100" rx="18" ry="10" stroke="#a21caf" strokeWidth="3" fill="none" opacity="0.8" transform="rotate(-15 125 100)" />
            <ellipse cx="125" cy="100" rx="14" ry="7" stroke="#fdf4ff" strokeWidth="2" fill="none" opacity="0.9" transform="rotate(-15 125 100)" />
            {/* Cilantro Sprig */}
            <path d="M30 100 Q45 90 60 105" stroke="#16a34a" strokeWidth="2" fill="none" />
            <circle cx="32" cy="98" r="5" fill="#22c55e" />
            <circle cx="42" cy="92" r="6" fill="#16a34a" />
            <circle cx="58" cy="104" r="5" fill="#22c55e" />
          </svg>
        </div>
      </div>

      {/* Floating White Coaster Element (Matching Frame 00:00 top right circular coaster) */}
      <div
        ref={coasterRef}
        className="absolute top-36 right-1/3 hidden lg:block pointer-events-none drop-shadow-[0_8px_16px_rgba(0,0,0,0.06)] will-change-transform"
      >
        <div className="w-16 h-16 rounded-full bg-white/90 border border-stone-200/90 shadow-sm" />
      </div>

      {/* ================= MAIN HERO CONTAINER ================= */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 w-full my-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">

          {/* Left Column: Editorial Headlines & CTAs */}
          <div ref={heroTextRef} className="lg:col-span-6 text-left flex flex-col items-start pr-0 lg:pr-6 will-change-transform">

            {/* Tagline Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-red-50 border border-red-200 text-[#dc2626] mb-5">
              <Sparkles className="w-3.5 h-3.5 text-[#dc2626]" />
              <span className="font-manrope text-[11px] uppercase tracking-[0.22em] font-extrabold">
                The Ministry of Wild Ceylon Seafood
              </span>
            </div>

            {/* Monumental Serif Headline */}
            <h1 className="font-serif text-4xl sm:text-6xl lg:text-7xl font-bold text-[#111827] tracking-tight leading-[1.08] mb-3">
              Take a taste.<br />
              <span className="text-[#111827]">Come join us.</span>
            </h1>

            {/* Italic Editorial Subtitle */}
            <p className="font-serif italic text-2xl sm:text-3xl lg:text-4xl text-stone-800 font-light mb-4 leading-snug">
              Life is so endlessly delicious.
            </p>

            {/* Narrative Description */}
            <p className="font-manrope text-stone-600 text-sm sm:text-base leading-relaxed max-w-xl font-normal mb-8">
              Wild mud crabs harvested from Sri Lanka’s pristine mangrove estuaries, flown fresh into our live 18°C saline tanks in Yorkville. Weighed live at your table, cracked to order, and wok-seared in 21 stone-ground island spices over roaring flames.
            </p>

            {/* Action Buttons: Solid Vermilion Red Pill + Outline Pill */}
            <div className="flex flex-wrap items-center gap-4 w-full sm:w-auto mb-8">
              <button
                onClick={onOrderClick}
                id="hero-order-btn"
                className="px-8 sm:px-9 py-3.5 sm:py-4 bg-[#dc2626] hover:bg-[#b91c1c] text-white font-manrope font-extrabold text-xs uppercase tracking-[0.22em] rounded-full shadow-[0_10px_25px_rgba(220,38,38,0.35)] hover:shadow-[0_15px_35px_rgba(220,38,38,0.5)] hover:-translate-y-0.5 transition-all duration-300 flex items-center gap-2 cursor-pointer"
              >
                <span>Explore The Catch</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={onReserveClick}
                className="px-7 sm:px-8 py-3.5 sm:py-4 bg-white hover:bg-stone-50 text-stone-800 hover:text-[#dc2626] border border-stone-300 hover:border-[#dc2626] font-manrope font-extrabold text-xs uppercase tracking-[0.22em] rounded-full shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-300 flex items-center gap-2 cursor-pointer"
              >
                <Clock className="w-4 h-4 text-[#dc2626]" />
                <span>Reserve A Table</span>
              </button>

              {/* Watch Kitchen Film Pill */}
              {/* <button
                onClick={() => setIsVideoModalOpen(true)}
                className="px-4 py-3 bg-red-50 hover:bg-red-100 text-[#dc2626] border border-red-200/80 font-manrope font-bold text-xs uppercase tracking-[0.16em] rounded-full transition-all flex items-center gap-2 cursor-pointer group"
              >
                <div className="w-6 h-6 rounded-full bg-[#dc2626] text-white flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Play className="w-3 h-3 fill-current translate-x-0.5" />
                </div>
                <span className="hidden sm:inline">Watch Kitchen Film</span>
              </button> */}
            </div>

            {/* Quick Pillars */}
            <div className="flex flex-wrap items-center gap-4 sm:gap-6 text-[10px] sm:text-[11px] uppercase tracking-[0.22em] text-stone-500 font-bold font-manrope pt-2 border-t border-stone-200/70 w-full">
              <span className="text-stone-800">Strict No-Freezer Policy</span>
              <span className="text-[#dc2626]">•</span>
              <span className="text-stone-800">18°C Aerated Saline Tanks</span>
              <span className="text-[#dc2626]">•</span>
              <span className="text-stone-800">Weighed Live At Table</span>
            </div>

          </div>

          {/* Right Column: Flat-Lay Centerpiece Wooden Platter with Crossed Chopsticks */}
          <div className="lg:col-span-6 flex items-center justify-center relative mt-6 lg:mt-0">

            {/* Main Centerpiece Wooden Platter (Scroll-Triggered Clockwise Spin & Float) */}
            <div
              ref={heroPlatterRef}
              className="relative w-[340px] sm:w-[440px] md:w-[500px] h-[340px] sm:h-[440px] md:h-[500px] rounded-full p-4 sm:p-1 bg-[#b91c1c] border-[8px] sm:border-[1px] border-[#9f6d3b] shadow-[0_25px_60px_rgba(78,44,14,0.25)] flex items-center justify-center group will-change-transform"
            >

              {/* Inner Plate Ceramic Food Platter with Live Video */}
              <div
                className="relative w-full h-full rounded-full overflow-hidden shadow-inner bg-stone-900 cursor-pointer"
                onClick={() => setIsVideoModalOpen(true)}
              >
                <video
                  autoPlay
                  loop
                  muted
                  playsInline
                  preload="auto"
                  className="w-full h-full object-cover filter contrast-[1.08] saturate-[1.1] scale-105 group-hover:scale-110 transition-transform duration-700 ease-out"
                >
                  <source src="/videos/hero-cooking.webm" type="video/webm" />
                  <source src="/videos/hero-bg.mp4" type="video/mp4" />
                </video>

                {/* Subtle Steam Atmosphere */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />

                {/* Platter Label Tag */}
                {/* <div className="absolute top-6 left-1/2 -translate-x-1/2 px-4 py-1.5 rounded-full bg-black/75 backdrop-blur-md border border-white/20 text-white shadow-lg pointer-events-none flex items-center gap-2"> */}
                {/* <span className="w-2 h-2 rounded-full bg-[#dc2626] animate-pulse" /> */}
                {/* <span className="font-manrope text-[10px] uppercase tracking-[0.24em] font-extrabold text-white">
                    Live Kitchen • Wok Searing
                  </span> */}
                {/* </div> */}
              </div>

              {/* ================= CROSSED BAMBOO CHOPSTICKS OVER RIM ================= */}
              <div className="absolute inset-0 pointer-events-none z-20 flex items-center justify-center">
                <div className="w-[125%] h-12 relative rotate-[-28deg] drop-shadow-[0_12px_18px_rgba(0,0,0,0.35)]">
                  {/* Chopstick 1 */}
                  {/* <div className="absolute top-2 left-0 right-0 h-3 rounded-full bg-gradient-to-r from-[#d7b280] via-[#c49a62] to-[#eed6b4] border border-[#a87f4c]/40" /> */}
                  {/* Chopstick 2 (Crossed) */}
                  {/* <div className="absolute top-5 left-2 right-[-10px] h-3 rounded-full bg-gradient-to-r from-[#eed6b4] via-[#c49a62] to-[#d7b280] rotate-[6deg] border border-[#a87f4c]/40" /> */}
                </div>
              </div>

            </div>

            {/* Side Ceramic Dipping Bowl with Red Chili Sauce & Fresh Basil (Floats Toward Center Top) */}
            <div
              ref={dippingBowlRef}
              className="absolute -bottom-4 sm:-bottom-8 left-2 sm:left-6 z-30 drop-shadow-[0_15px_30px_rgba(0,0,0,0.18)] will-change-transform"
            >
              <div className="w-24 h-24 sm:w-32 sm:h-32 rounded-full p-2 bg-white border-2 border-stone-200 shadow-md flex items-center justify-center relative">
                {/* Red Chili Dipping Sauce */}
                <div className="w-full h-full rounded-full bg-gradient-to-br from-[#dc2626] via-[#b91c1c] to-[#991b1b] relative overflow-hidden flex items-center justify-center shadow-inner">
                  {/* Swirl detail */}
                  <div className="w-10 h-10 rounded-full border border-white/20 opacity-40" />
                  {/* Fresh Green Basil Leaf */}
                  <div className="absolute w-8 h-8 sm:w-10 sm:h-10 rotate-[25deg]">
                    <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
                      <path d="M20 5 C32 10 35 25 20 35 C5 25 8 10 20 5 Z" fill="#16a34a" />
                      <path d="M20 5 L20 35" stroke="#15803d" strokeWidth="1.5" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Play Kitchen Film Trigger Button on Platter */}
            {/* <button
              onClick={() => setIsVideoModalOpen(true)}
              aria-label="Play chef cooking video"
              className="absolute bottom-6 sm:bottom-10 right-4 sm:right-10 z-30 p-3 sm:p-4 rounded-full bg-[#dc2626] hover:bg-[#b91c1c] text-white shadow-xl hover:scale-105 transition-all cursor-pointer group flex items-center gap-2"
            >
              <Play className="w-4 h-4 fill-current translate-x-0.5" />
              <span className="text-[10px] font-manrope font-bold uppercase tracking-wider hidden sm:inline">
                Play Cooking Film
              </span>
            </button> */}

          </div>

        </div>
      </div>

      {/* ================= VIDEO MODAL POPUP FOR CHEF COOKING FILM ================= */}
      {
        isVideoModalOpen && (
          <div className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 animate-fade-in">
            <div className="relative w-full max-w-4xl bg-black rounded-3xl overflow-hidden shadow-2xl border border-white/10">
              {/* Header with Title and Close Button */}
              <div className="flex items-center justify-between p-4 sm:p-5 bg-gradient-to-b from-stone-900 to-transparent absolute top-0 left-0 right-0 z-10">
                <div className="flex items-center gap-3">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#dc2626] animate-pulse" />
                  <span className="text-white font-manrope text-xs font-bold uppercase tracking-widest">
                    Live Yorkville Master Kitchen • Mud Crab Searing
                  </span>
                </div>
                <button
                  onClick={() => setIsVideoModalOpen(false)}
                  className="w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors cursor-pointer"
                  aria-label="Close video"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Video Player */}
              <div className="relative aspect-video w-full bg-black">
                <video
                  controls
                  autoPlay
                  playsInline
                  className="w-full h-full object-cover"
                >
                  <source src="/videos/hero-cooking.webm" type="video/webm" />
                  <source src="/videos/hero-bg.mp4" type="video/mp4" />
                </video>
              </div>

              {/* Video Description Footer */}
              <div className="p-4 sm:p-6 bg-stone-950 text-left border-t border-stone-800">
                <h4 className="font-serif text-lg text-white font-semibold mb-1">
                  The Miris Gala Flame Searing Technique
                </h4>
                <p className="font-manrope text-xs text-stone-400 leading-relaxed">
                  Watch our master chefs weigh, crack, and wok-sear live 1.5kg Sri Lankan lagoon mud crabs with hand-crushed peppercorns, roasted garlic, and island spices over high BTU flames.
                </p>
              </div>
            </div>
          </div>
        )
      }

    </section >
  );
}
