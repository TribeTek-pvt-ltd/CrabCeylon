'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { ArrowRight, ChevronDown, ChevronLeft, ChevronRight, Clock, Flame, Scale, Waves } from 'lucide-react';

interface HeroProps {
  onOrderClick: () => void;
  onReserveClick: () => void;
}

export default function Hero({ onOrderClick, onReserveClick }: HeroProps) {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      id: 'culinary-homecoming',
      tagline: 'THE MINISTRY OF WILD CEYLON SEAFOOD',
      title: 'CRAB CEYLON',
      subtitle: 'A Culinary Homecoming for the Legendary Lagoon Mud Crab',
      description: 'Wild mud crabs harvested from Sri Lanka’s pristine mangrove estuaries, flown fresh into our live 18°C saline tanks. Weighed live at your table, cracked to order, and wok-seared in 21 stone-ground island spices.',
      image: '/images/hero-crab.jpg',
      hasVideo: true,
      badge: 'Asia\'s Celebrated Culinary Standard'
    },
    {
      id: 'black-pepper-heritage',
      tagline: 'AUTHENTIC COLOMBO HERITAGE',
      title: 'THE MIRIS GALA TRADITION',
      subtitle: 'Black Peppercorn Crushed on Traditional Granite Stone',
      description: 'Rolled in pure dashi and slow-simmered over roaring wok flames. Never frozen, strictly wild catch, cooked with uncompromising colonial tradition.',
      image: '/images/black-pepper-crab.jpg',
      hasVideo: false,
      badge: 'Strict No-Freezer Policy'
    },
    {
      id: 'saline-sanctuary',
      tagline: 'OCEANIC PURITY & CONSERVATION',
      title: '18°C SALINE SANCTUARY',
      subtitle: 'Aerated Lagoon Habitats Flown Direct from Negombo & Batticaloa',
      description: 'We never harvest egg-bearing females or crabs under 700 grams. Each colossal mud crab is selected for meat density, claw richness, and natural sweetness.',
      image: '/images/ocean-platter.jpg',
      hasVideo: false,
      badge: '100% Wild Estuary Guarantee'
    }
  ];

  // Auto-advance slides every 8 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 8000);
    return () => clearInterval(timer);
  }, [slides.length]);

  const active = slides[currentSlide];

  const handlePrev = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  return (
    <section className="relative h-screen min-h-[720px] w-full overflow-hidden flex flex-col justify-between items-center text-center bg-black text-white select-none">

      {/* Background Media Layers (Video + High-Res Photography) */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        {/* Background Slides with Cross-Fade & Slow Pan */}
        {slides.map((slide, idx) => (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${idx === currentSlide ? 'opacity-100' : 'opacity-0'
              }`}
          >
            {slide.hasVideo ? (
              <video
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-full object-cover filter brightness-[0.72] contrast-[1.15] saturate-[1.1] scale-105 animate-subtle-zoom"
              >
                <source src="/videos/hero-bg.mp4" type="video/mp4" />
              </video>
            ) : (
              <div className="relative w-full h-full scale-105 animate-subtle-zoom">
                <Image
                  src={slide.image}
                  alt={slide.title}
                  fill
                  priority={idx === 0}
                  className="object-cover object-center filter brightness-[0.62] contrast-[1.15]"
                />
              </div>
            )}
          </div>
        ))}

        {/* Cinematic Multi-Layer Vignettes & Overlays for High-Contrast Text Readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/85 via-black/40 to-black/90 pointer-events-none" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(241,176,29,0.12)_0%,_transparent_65%)] pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-transparent to-black/60 pointer-events-none" />
      </div>

      {/* Top Spacer to account for fixed header */}
      <div className="h-28 sm:h-32 w-full z-10" />

      {/* Center Monumental Content (True Ministry of Crab Layout) */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex flex-col items-center justify-center my-auto">

        {/* Golden Crab Insignia Emblem */}
        <div className="mb-4 sm:mb-5 animate-fade-in">
          <div className="w-16 h-12 sm:w-20 sm:h-14 relative mx-auto drop-shadow-[0_4px_16px_rgba(241,176,29,0.5)]">
            <svg
              viewBox="0 0 100 80"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="w-full h-full text-[#f1b01d]"
            >
              {/* Stylized Ministry of Crab Silhouette Emblem */}
              <ellipse cx="50" cy="46" rx="20" ry="15" fill="#f1b01d" />
              {/* Shell Grooves */}
              <path d="M42 38 Q50 32 58 38" stroke="#121826" strokeWidth="2.5" strokeLinecap="round" />
              <path d="M40 46 Q50 42 60 46" stroke="#121826" strokeWidth="2.5" strokeLinecap="round" />
              <path d="M43 54 Q50 50 57 54" stroke="#121826" strokeWidth="2.5" strokeLinecap="round" />
              {/* Left Claw */}
              <path
                d="M34 40 C24 35 12 25 10 16 C8 8 20 10 24 20 C26 25 32 30 35 34"
                fill="#f1b01d"
              />
              <path
                d="M24 20 C18 12 22 4 28 6 C32 8 32 16 34 26"
                fill="#ffbe2e"
              />
              {/* Right Claw */}
              <path
                d="M66 40 C76 35 88 25 90 16 C92 8 80 10 76 20 C74 25 68 30 65 34"
                fill="#f1b01d"
              />
              <path
                d="M76 20 C82 12 78 4 72 6 C68 8 68 16 66 26"
                fill="#ffbe2e"
              />
              {/* Legs Left */}
              <path d="M30 48 Q18 50 14 62" stroke="#f1b01d" strokeWidth="3" strokeLinecap="round" />
              <path d="M32 54 Q20 60 18 72" stroke="#f1b01d" strokeWidth="3" strokeLinecap="round" />
              <path d="M36 60 Q26 70 24 80" stroke="#f1b01d" strokeWidth="3" strokeLinecap="round" />
              {/* Legs Right */}
              <path d="M70 48 Q82 50 86 62" stroke="#f1b01d" strokeWidth="3" strokeLinecap="round" />
              <path d="M68 54 Q80 60 82 72" stroke="#f1b01d" strokeWidth="3" strokeLinecap="round" />
              <path d="M64 60 Q74 70 76 80" stroke="#f1b01d" strokeWidth="3" strokeLinecap="round" />
              {/* Eye Stalks */}
              <circle cx="45" cy="31" r="2.5" fill="#f1b01d" />
              <circle cx="55" cy="31" r="2.5" fill="#f1b01d" />
            </svg>
          </div>
        </div>

        {/* Spaced Institutional Subheading */}
        <div className="font-manrope text-[11px] sm:text-xs md:text-sm uppercase tracking-[0.45em] text-[#f1b01d] font-extrabold mb-3 flex items-center justify-center gap-3">
          <span className="w-8 sm:w-12 h-[1px] bg-[#f1b01d]/60" />
          <span>{active.tagline}</span>
          <span className="w-8 sm:w-12 h-[1px] bg-[#f1b01d]/60" />
        </div>

        {/* Monumental Bodoni Moda Didone Title */}
        <h1 className="font-didone text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-black text-white tracking-[-0.03em] uppercase leading-none drop-shadow-[0_10px_40px_rgba(0,0,0,0.9)] mb-4">
          {active.title}
        </h1>

        {/* Editorial Subtitle in Playfair Italic */}
        <p className="font-serif italic text-xl sm:text-2xl md:text-3xl text-stone-200 font-light max-w-3xl mb-5 leading-snug drop-shadow-md">
          &ldquo;{active.subtitle}&rdquo;
        </p>

        {/* Narrative Paragraph */}
        <p className="font-manrope text-stone-300 text-xs sm:text-sm md:text-base leading-relaxed max-w-2xl font-normal mb-8 line-clamp-3 sm:line-clamp-none drop-shadow">
          {active.description}
        </p>

        {/* Ministry of Crab High-Contrast Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 w-full sm:w-auto mb-6">
          <button
            onClick={onReserveClick}
            className="w-full sm:w-auto font-manrope px-9 sm:px-11 py-4 bg-[#f1b01d] hover:bg-[#ffc63c] text-[#121826] font-black text-xs uppercase tracking-[0.28em] transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer shadow-[0_10px_30px_rgba(241,176,29,0.45)] hover:shadow-[0_15px_40px_rgba(241,176,29,0.6)] hover:-translate-y-0.5 border border-[#ffbe2e]"
          >
            <Clock className="w-4 h-4 text-[#121826] stroke-[2.5]" />
            <span>Reserve A Table</span>
          </button>

          <button
            onClick={onOrderClick}
            id="hero-order-btn"
            className="w-full sm:w-auto font-manrope px-8 sm:px-10 py-4 bg-black/40 hover:bg-white/10 text-white hover:text-[#f1b01d] font-extrabold text-xs uppercase tracking-[0.28em] transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer backdrop-blur-md border border-white/30 hover:border-[#f1b01d] hover:-translate-y-0.5 shadow-lg group"
          >
            <span>Explore The Catch</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform text-[#f1b01d]" />
          </button>
        </div>

        {/* Institutional Charter Pillars (MoC 3-Rule Bar) */}
        <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-8 text-[10px] sm:text-[11px] uppercase tracking-[0.28em] text-stone-400 font-bold font-manrope pb-2">
          <div className="flex items-center gap-1.5 text-stone-200">
            <Flame className="w-3.5 h-3.5 text-[#d33c1d]" />
            <span>Strict No-Freezer Policy</span>
          </div>
          <span className="text-[#f1b01d]">•</span>
          <div className="flex items-center gap-1.5 text-stone-200">
            <Waves className="w-3.5 h-3.5 text-[#f1b01d]" />
            <span>18°C Aerated Saline Tanks</span>
          </div>
          <span className="text-[#f1b01d]">•</span>
          <div className="flex items-center gap-1.5 text-stone-200">
            <Scale className="w-3.5 h-3.5 text-[#f1b01d]" />
            <span>Weighed Live At Table</span>
          </div>
        </div>

      </div>

      {/* Right Edge Minimalist Slide Navigation (Exactly as on MoC Colombo) */}
      <div className="hidden md:flex absolute right-6 sm:right-10 top-1/2 -translate-y-1/2 z-20 flex-col items-center gap-4">
        {/* Next Slide Arrow */}
        <button
          onClick={handleNext}
          aria-label="Next Slide"
          className="w-10 h-10 rounded-full border border-white/20 hover:border-[#f1b01d] bg-black/30 hover:bg-[#f1b01d] text-white hover:text-black flex items-center justify-center transition-all cursor-pointer backdrop-blur-sm group"
        >
          <ChevronRight className="w-5 h-5 text-[#f1b01d] group-hover:text-black transition-colors" />
        </button>

        {/* Vertical Divider Line with Slide Indicator */}
        <div className="flex flex-col items-center gap-2 py-2">
          {slides.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentSlide(idx)}
              aria-label={`Go to slide ${idx + 1}`}
              className={`transition-all duration-300 cursor-pointer ${idx === currentSlide
                ? 'w-1.5 h-8 bg-[#f1b01d] rounded-full shadow-[0_0_10px_rgba(241,176,29,0.8)]'
                : 'w-1.5 h-2 bg-white/30 hover:bg-white/60 rounded-full'
                }`}
            />
          ))}
        </div>

        {/* Prev Slide Arrow */}
        <button
          onClick={handlePrev}
          aria-label="Previous Slide"
          className="w-10 h-10 rounded-full border border-white/20 hover:border-[#f1b01d] bg-black/30 hover:bg-[#f1b01d] text-white hover:text-black flex items-center justify-center transition-all cursor-pointer backdrop-blur-sm group"
        >
          <ChevronLeft className="w-5 h-5 text-[#f1b01d] group-hover:text-black transition-colors" />
        </button>

        {/* Slide Counter (01 / 03) */}
        <div className="font-mono text-[10px] uppercase tracking-widest text-[#f1b01d] font-bold mt-2">
          0{currentSlide + 1} / 0{slides.length}
        </div>
      </div>

      {/* Bottom Center "SCROLL TO DISCOVER" (Signature Ministry of Crab Callout) */}
      <div className="relative z-10 pb-5 sm:pb-7 flex flex-col items-center">
        <button
          onClick={onOrderClick}
          className="flex flex-col items-center gap-1.5 text-stone-300 hover:text-[#f1b01d] transition-all group cursor-pointer"
        >
          <span className="font-manrope text-[10px] sm:text-[11px] uppercase tracking-[0.45em] font-extrabold group-hover:tracking-[0.55em] transition-all duration-300">
            Scroll To Discover
          </span>
          <ChevronDown className="w-4 h-4 sm:w-5 sm:h-5 text-[#f1b01d] animate-bounce" />
        </button>
      </div>

    </section>
  );
}


