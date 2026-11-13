'use client';

import React, { useState, useEffect, useRef } from 'react';
import { Mail, Check } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export default function NewsletterSection() {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);

  const sectionRef = useRef<HTMLElement>(null);
  const chiliRef = useRef<HTMLDivElement>(null);
  const pepperRingRef = useRef<HTMLDivElement>(null);
  const broccoliRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!sectionRef.current) return;

    const ctx = gsap.context(() => {
      // Floating Red Chili (Left)
      if (chiliRef.current) {
        gsap.to(chiliRef.current, {
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 85%',
            end: 'bottom 15%',
            scrub: 1.2
          },
          y: -80,
          rotation: -15,
          ease: 'none'
        });
      }

      // Yellow Bell Pepper Ring (Top Right)
      if (pepperRingRef.current) {
        gsap.to(pepperRingRef.current, {
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 85%',
            end: 'bottom 15%',
            scrub: 1.5
          },
          y: -100,
          rotation: 35,
          ease: 'none'
        });
      }

      // Broccoli / Green Herb Floret (Right)
      if (broccoliRef.current) {
        gsap.to(broccoliRef.current, {
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 85%',
            end: 'bottom 15%',
            scrub: 1.0
          },
          y: -70,
          x: -15,
          rotation: -8,
          ease: 'none'
        });
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setIsSubscribed(true);
    setTimeout(() => {
      setEmail('');
      setIsSubscribed(false);
    }, 4000);
  };

  return (
    <section
      ref={sectionRef}
      className="relative py-24 sm:py-32 bg-[#faf9f6] text-[#111827] overflow-hidden select-none border-b border-stone-200/80"
    >

      {/* ================= FLOATING VEGETABLES & HERBS (Matches Frame 00:06) ================= */}

      {/* Floating Red Chili Pepper (Left) */}
      <div
        ref={chiliRef}
        className="absolute top-1/2 left-6 sm:left-20 -translate-y-1/2 z-10 pointer-events-none drop-shadow-[0_12px_24px_rgba(220,38,38,0.25)] will-change-transform"
      >
        <div className="w-16 sm:w-24 h-16 sm:h-24 relative rotate-[-35deg]">
          <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
            <path d="M75 25 C65 20 40 30 30 50 C20 70 35 85 45 80 C55 75 70 55 80 35 Z" fill="#dc2626" />
            <path d="M75 25 L85 15" stroke="#16a34a" strokeWidth="4" strokeLinecap="round" />
            <path d="M70 28 C60 25 45 35 38 52" stroke="#ef4444" strokeWidth="2" fill="none" opacity="0.6" />
          </svg>
        </div>
      </div>

      {/* Floating Yellow Bell Pepper Slice (Top Right) */}
      <div
        ref={pepperRingRef}
        className="absolute top-12 right-10 sm:right-28 z-10 pointer-events-none drop-shadow-[0_10px_20px_rgba(245,158,11,0.2)] will-change-transform"
      >
        <div className="w-16 sm:w-20 h-16 sm:h-20 relative rotate-[20deg]">
          <svg viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
            <circle cx="40" cy="40" r="28" stroke="#f59e0b" strokeWidth="8" fill="none" />
            <circle cx="40" cy="40" r="22" stroke="#fbbf24" strokeWidth="4" fill="none" />
          </svg>
        </div>
      </div>

      {/* Floating Green Broccoli / Herb Floret (Right) */}
      <div
        ref={broccoliRef}
        className="absolute top-1/2 right-6 sm:right-20 -translate-y-1/2 z-10 pointer-events-none drop-shadow-[0_12px_24px_rgba(22,163,74,0.2)] will-change-transform"
      >
        <div className="w-16 sm:w-24 h-16 sm:h-24 relative rotate-[15deg]">
          <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
            <ellipse cx="50" cy="40" rx="28" ry="22" fill="#15803d" />
            <circle cx="35" cy="35" r="14" fill="#16a34a" />
            <circle cx="65" cy="35" r="14" fill="#16a34a" />
            <circle cx="50" cy="25" r="16" fill="#22c55e" />
            <path d="M50 55 L50 80" stroke="#86efac" strokeWidth="6" strokeLinecap="round" />
          </svg>
        </div>
      </div>

      {/* Main Centered Content (Exact Frame 00:06 Layout) */}
      <div className="max-w-3xl mx-auto px-4 sm:px-6 relative z-10 text-center">
        
        {/* Title: Exact Reference Style */}
        <h2 className="font-serif text-3xl sm:text-5xl font-bold text-[#111827] tracking-tight mb-3">
          Fresh recipes &amp; catches sent to your inbox
        </h2>

        {/* Subtitle */}
        <p className="font-serif italic text-base sm:text-lg text-stone-500 font-light mb-10">
          Get weekly updates on wild Ceylon lagoon arrivals, chef specials, and island recipes in your mailbox!
        </p>

        {/* Pill Input Container (Matching Frame 00:06) */}
        <form
          onSubmit={handleSubmit}
          className="relative max-w-xl mx-auto flex items-center p-2 rounded-full bg-white border border-stone-300 shadow-[0_10px_30px_rgba(0,0,0,0.06)] focus-within:border-[#dc2626] transition-all"
        >
          <div className="pl-4 pr-2 text-stone-400">
            <Mail className="w-5 h-5 text-stone-400" />
          </div>

          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="your email address"
            required
            className="flex-1 bg-transparent text-sm sm:text-base text-stone-900 placeholder:text-stone-400 focus:outline-none px-2"
          />

          <button
            type="submit"
            className="px-6 sm:px-8 py-3 sm:py-3.5 rounded-full bg-[#dc2626] hover:bg-[#b91c1c] text-white font-manrope font-extrabold text-xs uppercase tracking-[0.2em] shadow-md hover:shadow-lg transition-all duration-300 flex items-center gap-2 cursor-pointer shrink-0"
          >
            {isSubscribed ? (
              <>
                <Check className="w-4 h-4 stroke-[3]" />
                <span>Joined</span>
              </>
            ) : (
              <span>Subscribe</span>
            )}
          </button>
        </form>

      </div>
    </section>
  );
}
