'use client';

import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import { Quote } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

interface PatronReview {
  id: string;
  author: string;
  role: string;
  location: string;
  quote: string;
  avatar: string;
  dish: string;
  rating: number;
}

export default function Testimonials() {
  const reviews: PatronReview[] = [
    {
      id: 'paula-guest',
      author: 'Jonathan Gold-Smith',
      role: 'International Gastronomy Critic, London',
      location: 'London, UK',
      quote:
        'I came across Crab Ceylon while touring through North America. OMG! The meat has a natural, pristine sweetness you never find in farmed crustaceans. The sauce clings to the cracked claws like liquid gold. So glad we are coming back next week!',
      avatar: '/images/founder-dharshan.jpg',
      dish: 'Imperial Ceylon Chili Crab (1.3kg Monster)',
      rating: 5
    },
    {
      id: 'kenji-guest',
      author: 'Chef Kenji Takahashi',
      role: 'Michelin Star Chef, Ginza',
      location: 'Tokyo, Japan',
      quote:
        'In Tokyo, Sri Lankan mud crabs are prized above all seafood. Crab Ceylon prepares them with the utmost reverence—fresh out of the 18°C saline tanks, charred with wok breath, unforgettable.',
      avatar: '/images/founder-mahela.jpg',
      dish: 'Golden Garlic Butter Mud Crab',
      rating: 5
    },
    {
      id: 'elena-guest',
      author: 'Elena Rostova',
      role: 'Culinary Editor, Le Figaro',
      location: 'Paris, France',
      quote:
        'The Miris Gala hand-crushed peppercorn crust is an absolute revelation. There is a deep, smoky volcanic heat that balances the buttery lagoon sweetness. Undoubtedly Toronto’s premier seafood experience.',
      avatar: '/images/founder-kumar.jpg',
      dish: 'Traditional Black Pepper Mud Crab',
      rating: 5
    }
  ];

  const [activeReviewIdx, setActiveReviewIdx] = useState(0);
  const activeReview = reviews[activeReviewIdx];

  const sectionRef = useRef<HTMLElement>(null);
  const noodleBowlRef = useRef<HTMLDivElement>(null);
  const starAniseRef = useRef<HTMLDivElement>(null);
  const tomatoForkRef = useRef<HTMLDivElement>(null);
  const bokChoyRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!sectionRef.current) return;

    const ctx = gsap.context(() => {
      // Large Noodle/Pasta Bowl: Glides in smoothly from bottom-left with tilt and momentum (Frame 00:03 - 00:04 match)
      if (noodleBowlRef.current) {
        gsap.fromTo(
          noodleBowlRef.current,
          {
            x: -80,
            y: 95,
            rotation: -20,
            opacity: 0.9
          },
          {
            scrollTrigger: {
              trigger: sectionRef.current,
              start: 'top 85%',
              end: 'bottom 20%',
              scrub: 1.2 // Silky smooth inertial catchup
            },
            x: 10,
            y: -65,
            rotation: 6,
            opacity: 1,
            ease: 'none'
          }
        );
      }

      // Star Anise Cluster (Top Right)
      if (starAniseRef.current) {
        gsap.to(starAniseRef.current, {
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 90%',
            end: 'bottom 10%',
            scrub: 1.5
          },
          y: -100,
          rotation: -25,
          ease: 'none'
        });
      }

      // Cherry Tomato & Fork (Bottom Left)
      if (tomatoForkRef.current) {
        gsap.to(tomatoForkRef.current, {
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 80%',
            end: 'bottom 10%',
            scrub: 1.0
          },
          y: -70,
          x: 20,
          rotation: 15,
          ease: 'none'
        });
      }

      // Bok Choy Greens (Bottom Right)
      if (bokChoyRef.current) {
        gsap.to(bokChoyRef.current, {
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 80%',
            end: 'bottom 10%',
            scrub: 1.3
          },
          y: -85,
          x: -15,
          rotation: -10,
          ease: 'none'
        });
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="py-24 sm:py-32 relative bg-[#ffffff] text-[#111827] overflow-hidden select-none border-b border-stone-200/80"
    >

      {/* ================= FLOATING PERIPHERY INGREDIENTS (Matches Frames 00:03 - 00:05) ================= */}

      {/* Top-Right: Star Anise Clusters on White Table (Frame 00:04 Match) */}
      <div
        ref={starAniseRef}
        className="absolute top-10 right-4 sm:right-16 z-10 pointer-events-none drop-shadow-[0_12px_24px_rgba(0,0,0,0.12)] will-change-transform"
      >
        <div className="w-24 sm:w-36 h-24 sm:h-36 relative rotate-[-12deg]">
          <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
            {/* 8-pointed star anise */}
            <path d="M50 20 L55 38 L72 30 L64 46 L80 55 L63 60 L68 78 L52 68 L42 82 L42 64 L25 65 L36 50 L22 38 L40 40 Z" fill="#78350f" />
            <circle cx="50" cy="50" r="7" fill="#451a03" />
            <circle cx="50" cy="50" r="4" fill="#92400e" />
          </svg>
        </div>
      </div>

      {/* Bottom-Left: Cherry Tomato with Dining Fork (Frame 00:04 Match) */}
      <div
        ref={tomatoForkRef}
        className="absolute bottom-10 left-4 sm:left-12 z-10 pointer-events-none drop-shadow-[0_10px_20px_rgba(0,0,0,0.08)] will-change-transform"
      >
        <div className="w-24 sm:w-32 h-24 sm:h-32 relative">
          <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
            {/* Dining Fork */}
            <path d="M25 85 L50 35" stroke="#9ca3af" strokeWidth="3" strokeLinecap="round" />
            <path d="M50 35 L45 20 M50 35 L48 18 M50 35 L52 18 M50 35 L55 20" stroke="#9ca3af" strokeWidth="2.5" strokeLinecap="round" />
            {/* Cherry Tomato */}
            <circle cx="68" cy="45" r="14" fill="#dc2626" />
            <circle cx="64" cy="40" r="4" fill="#ef4444" opacity="0.6" />
            <path d="M68 31 L66 35 L70 35 Z" fill="#16a34a" />
          </svg>
        </div>
      </div>

      {/* Bottom-Right: Fresh Greens / Bok Choy & Purple Onion (Frame 00:04 Match) */}
      <div
        ref={bokChoyRef}
        className="absolute bottom-8 right-4 sm:right-14 z-10 pointer-events-none drop-shadow-[0_12px_24px_rgba(0,0,0,0.1)] will-change-transform"
      >
        <div className="w-28 sm:w-40 h-28 sm:h-40 relative">
          <svg viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
            {/* Bok Choy Green Leaves */}
            <path d="M40 85 C30 50 50 20 80 15 C100 25 105 55 85 85 Z" fill="#16a34a" />
            <path d="M50 85 C45 60 55 35 75 30" stroke="#22c55e" strokeWidth="3" fill="none" />
            {/* White stalk */}
            <ellipse cx="65" cy="85" rx="20" ry="12" fill="#f8fafc" stroke="#cbd5e1" strokeWidth="2" />
            {/* Purple Onion half */}
            <ellipse cx="30" cy="90" rx="16" ry="12" fill="#86198f" />
            <ellipse cx="30" cy="90" rx="11" ry="8" fill="#fdf4ff" />
            <ellipse cx="30" cy="90" rx="6" ry="4" fill="#a21caf" />
          </svg>
        </div>
      </div>

      {/* ================= MAIN SPLIT TESTIMONIAL CONTAINER (Matches Frames 00:03 - 00:05) ================= */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">

          {/* Left Column: Large Circular Noodle Bowl with Crossed Chopsticks (Scroll-Triggered Glide & Drift) */}
          <div className="lg:col-span-6 flex items-center justify-center">
            <div
              ref={noodleBowlRef}
              className="relative w-72 sm:w-96 md:w-[440px] h-72 sm:h-96 md:h-[440px] rounded-full p-4 sm:p-5 bg-white border border-stone-200/90 shadow-[0_25px_60px_rgba(0,0,0,0.1)] flex items-center justify-center group overflow-hidden will-change-transform"
            >
              
              {/* Bowl Food Image */}
              <div className="relative w-full h-full rounded-full overflow-hidden shadow-inner bg-stone-900">
                <Image
                  src="/images/ceylon-pasta.jpg"
                  alt="Ceylon Seafood Noodle Bowl"
                  fill
                  className="object-cover object-center filter contrast-[1.08] saturate-[1.1] scale-105 group-hover:scale-110 transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent pointer-events-none" />
              </div>

              {/* ================= CROSSED CHOPSTICKS ACROSS THE BOWL ================= */}
              <div className="absolute inset-0 pointer-events-none z-20 flex items-center justify-center">
                <div className="w-[125%] h-12 relative rotate-[-26deg] drop-shadow-[0_10px_16px_rgba(0,0,0,0.35)]">
                  {/* Chopstick 1 */}
                  <div className="absolute top-2 left-0 right-0 h-3 rounded-full bg-gradient-to-r from-[#e5c9a3] via-[#cca16d] to-[#eed6b4] border border-[#a87f4c]/40" />
                  {/* Chopstick 2 (Crossed) */}
                  <div className="absolute top-5 left-2 right-[-10px] h-3 rounded-full bg-gradient-to-r from-[#eed6b4] via-[#cca16d] to-[#e5c9a3] rotate-[6deg] border border-[#a87f4c]/40" />
                </div>
              </div>

              {/* Fresh Basil Cluster Top Garnish */}
              <div className="absolute bottom-8 left-10 w-10 h-10 rotate-[15deg] pointer-events-none drop-shadow-md">
                <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
                  <path d="M20 5 C32 10 35 25 20 35 C5 25 8 10 20 5 Z" fill="#22c55e" />
                  <path d="M20 5 L20 35" stroke="#15803d" strokeWidth="1.5" />
                </svg>
              </div>

            </div>
          </div>

          {/* Right Column: Editorial Testimonial & 3-Avatar Selector (Matches Frames 00:03 - 00:05 Right Side) */}
          <div className="lg:col-span-6 text-left flex flex-col justify-between">
            <div>
              {/* Section Heading: Exact Reference Copy ("Let's see what other says") */}
              <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-bold text-[#111827] tracking-tight mb-2">
                Let&apos;s see what other says
              </h2>
              
              {/* Cursive Subtitle: Exact Reference Copy ("Please serve yourself without any hesitate") */}
              <p className="font-serif italic text-base sm:text-xl text-stone-500 font-light mb-8">
                Please serve yourself without any hesitate
              </p>

              {/* Active Editorial Review Quote */}
              <div className="relative pl-6 sm:pl-8 border-l-2 border-[#dc2626] py-1 mb-8">
                <Quote className="w-8 h-8 text-[#dc2626] opacity-40 mb-3" />
                <p className="font-serif italic text-lg sm:text-xl md:text-2xl text-stone-800 leading-relaxed font-light">
                  &ldquo;{activeReview.quote}&rdquo;
                </p>
                
                {/* Author Info */}
                <div className="mt-4">
                  <h4 className="font-serif font-bold text-base sm:text-lg text-[#111827]">
                    {activeReview.author}
                  </h4>
                  <p className="text-xs text-stone-500 font-light mt-0.5">
                    {activeReview.role} • <span className="font-medium text-stone-700">{activeReview.location}</span>
                  </p>
                  <span className="text-[10px] uppercase font-bold text-[#dc2626] block tracking-wider mt-1">
                    Favorite Dish: {activeReview.dish}
                  </span>
                </div>
              </div>
            </div>

            {/* ================= 3 REVIEWER AVATARS (Exact Match to Frames 00:04 - 00:05) ================= */}
            <div className="flex items-center gap-4 sm:gap-5 pt-4">
              {reviews.map((rev, idx) => {
                const isActive = activeReviewIdx === idx;
                return (
                  <button
                    key={rev.id}
                    onClick={() => setActiveReviewIdx(idx)}
                    aria-label={`View review from ${rev.author}`}
                    className={`relative rounded-full transition-all duration-300 cursor-pointer ${
                      isActive
                        ? 'ring-4 ring-[#dc2626] scale-110 shadow-lg'
                        : 'opacity-70 hover:opacity-100 hover:scale-105'
                    }`}
                  >
                    <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full overflow-hidden relative bg-stone-900 border-2 border-white shadow-md">
                      <Image
                        src={rev.avatar}
                        alt={rev.author}
                        fill
                        className="object-cover object-top"
                      />
                    </div>
                  </button>
                );
              })}
            </div>

          </div>

        </div>

        {/* Brand Accolades Ribbon */}
        <div className="mt-20 p-8 rounded-2xl bg-white border border-stone-200/90 shadow-md grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          <div>
            <div className="font-didone text-3xl sm:text-4xl font-extrabold text-[#121826] mb-1">45,000+</div>
            <div className="text-xs text-stone-500 font-medium uppercase tracking-wider">Wild Lagoon Crabs Served</div>
          </div>
          <div>
            <div className="font-didone text-3xl sm:text-4xl font-extrabold text-[#dc2626] mb-1">4.95 / 5.0</div>
            <div className="text-xs text-stone-500 font-medium uppercase tracking-wider">Michelin & Critic Reviews</div>
          </div>
          <div>
            <div className="font-didone text-3xl sm:text-4xl font-extrabold text-emerald-600 mb-1">100%</div>
            <div className="text-xs text-stone-500 font-medium uppercase tracking-wider">Wild-Caught Sustainable</div>
          </div>
          <div>
            <div className="font-didone text-3xl sm:text-4xl font-extrabold text-[#dc2626] mb-1">45 Mins</div>
            <div className="text-xs text-stone-500 font-medium uppercase tracking-wider">Heated Thermal Courier</div>
          </div>
        </div>

      </div>
    </section>
  );
}
