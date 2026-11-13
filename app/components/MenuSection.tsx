'use client';

import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Plus, ArrowRight, Check } from 'lucide-react';
import { MENU_ITEMS, MenuItem } from '../data/restaurantData';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

interface MenuSectionProps {
  onSelectItem: (item: MenuItem) => void;
  onQuickAdd: (item: MenuItem) => void;
}

export default function MenuSection({ onSelectItem, onQuickAdd }: MenuSectionProps) {
  const [activeTab, setActiveTab] = useState('main');
  const [addedItem, setAddedItem] = useState<string | null>(null);

  const sectionRef = useRef<HTMLElement>(null);
  const plateDiscRefs = useRef<(HTMLDivElement | null)[]>([]);
  const lobsterClawRef = useRef<HTMLDivElement>(null);
  const dippingDishRef = useRef<HTMLDivElement>(null);
  const garlicRef = useRef<HTMLDivElement>(null);

  // 3 Signature Plates for the Flat-Lay Showcase (Exact Match to Frames 00:01 - 00:02)
  const plateDishes = {
    appetizers: [
      {
        id: 'kade-bread',
        title: 'Woodfired Kade Bread & Butter',
        desc: 'Traditional Sri Lankan street bread freshly baked in wood-fired hearths. Perfect for dipping in rich chili crab gravy.',
        price: '12.99',
        image: '/images/ocean-platter.jpg',
        item: MENU_ITEMS[0]
      },
      {
        id: 'garlic-butter-crab',
        title: 'Golden Garlic Butter Prawns',
        desc: 'Wild jumbo tiger prawns wok-tossed in clarified golden butter glaze, crushed garlic cloves, sea salt, and fresh lime.',
        price: '28.99',
        image: '/images/garlic-butter-crab.jpg',
        hasChopsticks: true, // Center dish with crossed chopsticks
        item: MENU_ITEMS[1]
      },
      {
        id: 'pittu-combo',
        title: 'Claypot Steamed Pittu',
        desc: 'Layered cylinders of roasted rice flour and freshly grated coconut, steamed in bamboo tubes with spicy lunu miris.',
        price: '16.99',
        image: '/images/pittu-combo.jpg',
        hasFork: true, // Right dish with resting fork
        item: MENU_ITEMS[2]
      }
    ],
    main: [
      {
        id: 'garlic-butter-crab-main',
        title: 'Garlic Butter Mud Crab',
        desc: 'Colossal Ceylon Mud Crab wok-seared in clarified golden island butter glaze, sweet roasted garlic cloves, and sea salt.',
        price: '44.99',
        image: '/images/garlic-butter-crab.jpg',
        item: MENU_ITEMS.find((i) => i.id === 'lobster-signature') || MENU_ITEMS[1]
      },
      {
        id: 'crab-signature-main',
        title: 'Imperial Ceylon Chili Crab',
        desc: 'Wild lagoon mud crab simmered over roaring flames in 21 stone-ground island spices. Dipped with warm woodfired bread.',
        price: '46.99',
        image: '/images/hero-crab.jpg',
        hasChopsticks: true, // Center dish with crossed bamboo chopsticks!
        item: MENU_ITEMS.find((i) => i.id === 'crab-signature') || MENU_ITEMS[0]
      },
      {
        id: 'black-pepper-crab-main',
        title: 'Miris Gala Black Pepper Crab',
        desc: 'Black peppercorns hand-crushed on traditional Colombo granite stone. Deep smoky volcanic heat balancing sweet crab meat.',
        price: '44.99',
        image: '/images/black-pepper-crab.jpg',
        hasFork: true, // Right dish with dining fork resting across rim!
        item: MENU_ITEMS.find((i) => i.id === 'crab-signature') || MENU_ITEMS[0]
      }
    ],
    dessert: [
      {
        id: 'watalappan',
        title: 'Spiced Coconut Watalappan',
        desc: 'Steamed coconut custard sweetened with pure Ceylon kithul treacle, ground nutmeg, cardamom, and toasted cashews.',
        price: '14.99',
        image: '/images/ocean-platter.jpg',
        item: MENU_ITEMS[0]
      },
      {
        id: 'kithul-curd',
        title: 'Artisan Buffalo Curd & Treacle',
        desc: 'Thick, creamy buffalo curd churned in Ruhuna clay pots, drizzled generously with smoky organic wild fishtail palm jaggery.',
        price: '13.99',
        image: '/images/garlic-butter-crab.jpg',
        hasChopsticks: true,
        item: MENU_ITEMS[1]
      },
      {
        id: 'passion-ice-tea',
        title: 'Ceylon Golden Milk & Tea',
        desc: 'Single-estate Nuwara Eliya black tea brewed with fresh ginger, cinnamon quills, and sweetened condensed milk.',
        price: '8.99',
        image: '/images/black-pepper-crab.jpg',
        hasFork: true,
        item: MENU_ITEMS[2]
      }
    ]
  };

  const currentDishes = plateDishes[activeTab as keyof typeof plateDishes] || plateDishes.main;

  // ================= SCROLL-TRIGGERED DISH ROTATION & SEAMLESS PAGE ENTRANCE =================
  useEffect(() => {
    if (!sectionRef.current) return;

    const ctx = gsap.context(() => {
      // 1. Plate 1 (Left Plate): Circular Disc rotates clockwise from -48deg to 0deg
      if (plateDiscRefs.current[0]) {
        gsap.fromTo(
          plateDiscRefs.current[0],
          {
            rotation: -48,
            scale: 0.92
          },
          {
            scrollTrigger: {
              trigger: sectionRef.current,
              start: 'top bottom', // Triggers the instant MenuSection enters viewport from Hero
              end: 'top 20%',
              scrub: 1.2
            },
            rotation: 0,
            scale: 1,
            ease: 'none'
          }
        );
      }

      // 2. Plate 2 (Center Plate - Crossed Chopsticks):
      // Circular Disc counter-rotates from +54deg to 0deg into prominent center slot
      if (plateDiscRefs.current[1]) {
        gsap.fromTo(
          plateDiscRefs.current[1],
          {
            rotation: 54,
            scale: 0.92
          },
          {
            scrollTrigger: {
              trigger: sectionRef.current,
              start: 'top bottom',
              end: 'top 18%',
              scrub: 1.3
            },
            rotation: 0,
            scale: 1.05,
            ease: 'none'
          }
        );
      }

      // 3. Plate 3 (Right Plate - Dining Fork):
      // Circular Disc rotates clockwise from -42deg to 0deg
      if (plateDiscRefs.current[2]) {
        gsap.fromTo(
          plateDiscRefs.current[2],
          {
            rotation: -42,
            scale: 0.92
          },
          {
            scrollTrigger: {
              trigger: sectionRef.current,
              start: 'top bottom',
              end: 'top 20%',
              scrub: 1.2
            },
            rotation: 0,
            scale: 1,
            ease: 'none'
          }
        );
      }

      // 4. Periphery Floating Parallax Ingredients (Frame 00:01 - 00:02 Match)
      // Cooked Lobster Claw (Top-Right)
      if (lobsterClawRef.current) {
        gsap.fromTo(
          lobsterClawRef.current,
          {
            x: 120,
            y: 100,
            rotation: 35,
            opacity: 0.3
          },
          {
            scrollTrigger: {
              trigger: sectionRef.current,
              start: 'top bottom',
              end: 'top 25%',
              scrub: 1.1
            },
            x: 0,
            y: 0,
            rotation: 15,
            opacity: 1,
            ease: 'power1.out'
          }
        );
      }

      // Small Soy Dipping Dish (Top-Left)
      if (dippingDishRef.current) {
        gsap.fromTo(
          dippingDishRef.current,
          {
            x: -90,
            y: 80,
            rotation: -30,
            opacity: 0.3
          },
          {
            scrollTrigger: {
              trigger: sectionRef.current,
              start: 'top bottom',
              end: 'top 25%',
              scrub: 1.1
            },
            x: 0,
            y: 0,
            rotation: 0,
            opacity: 1,
            ease: 'power1.out'
          }
        );
      }

      // Garlic Bulbs & Chili Flakes (Bottom-Left)
      if (garlicRef.current) {
        gsap.fromTo(
          garlicRef.current,
          {
            y: 70,
            rotation: -12,
            opacity: 0.4
          },
          {
            scrollTrigger: {
              trigger: sectionRef.current,
              start: 'top 85%',
              end: 'bottom 20%',
              scrub: 1.2
            },
            y: -30,
            rotation: 6,
            opacity: 1,
            ease: 'none'
          }
        );
      }
    }, sectionRef);

    return () => ctx.revert();
  }, [activeTab]);

  const handleAdd = (item: MenuItem, id: string) => {
    onQuickAdd(item);
    setAddedItem(id);
    setTimeout(() => setAddedItem(null), 1500);
  };

  return (
    <section
      id="menu"
      ref={sectionRef}
      className="relative w-full bg-[#faf9f6] text-[#111827] pt-12 pb-24 sm:pt-16 sm:pb-32 overflow-hidden select-none border-b border-stone-200/80"
    >

      {/* ================= FLOATING PERIPHERY PARALLAX INGREDIENTS (Matches Frames 00:01 - 00:02) ================= */}

      {/* Top-Right: Cooked Wild Red Lobster / Crab Claw (Frame 00:01 Match) */}
      <div
        ref={lobsterClawRef}
        className="absolute top-8 right-2 sm:right-10 z-10 pointer-events-none drop-shadow-[0_15px_30px_rgba(220,38,38,0.25)] will-change-transform"
      >
        <div className="w-28 sm:w-44 md:w-56 h-28 sm:h-44 md:h-56 relative rotate-[15deg]">
          <svg viewBox="0 0 160 160" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
            {/* Curved Lobster / Crab Claw */}
            <path d="M40 120 C30 80 50 30 110 20 C135 15 145 35 130 55 C115 70 95 75 75 85 C65 90 55 105 40 120 Z" fill="#dc2626" />
            <path d="M110 20 C135 25 145 45 125 65 C105 50 85 45 110 20 Z" fill="#ef4444" />
            <path d="M60 90 C80 80 110 75 130 55 C120 70 100 85 70 100 Z" fill="#991b1b" />
            {/* Claw joint segments */}
            <ellipse cx="45" cy="118" rx="14" ry="10" fill="#b91c1c" transform="rotate(-30 45 118)" />
            <ellipse cx="32" cy="132" rx="12" ry="8" fill="#991b1b" transform="rotate(-35 32 132)" />
            {/* Shell highlights */}
            <path d="M80 40 Q105 35 120 40" stroke="#fca5a5" strokeWidth="2.5" strokeLinecap="round" opacity="0.6" />
          </svg>
        </div>
      </div>

      {/* Top-Left: Small Soy Dipping Dish with Red Chili & Mint (Frame 00:01 Match) */}
      <div
        ref={dippingDishRef}
        className="absolute top-10 left-3 sm:left-12 z-10 pointer-events-none drop-shadow-[0_12px_24px_rgba(0,0,0,0.12)] will-change-transform"
      >
        <div className="w-20 sm:w-28 h-20 sm:h-28 rounded-full p-2 bg-white border border-stone-200 shadow-sm flex items-center justify-center">
          <div className="w-full h-full rounded-full bg-[#1c1917] relative flex items-center justify-center overflow-hidden shadow-inner">
            <span className="w-3.5 h-1.5 rounded-full bg-[#dc2626] rotate-[-25deg] shadow-sm" />
            <span className="w-2 h-2 rounded-full bg-[#22c55e] ml-2" />
          </div>
        </div>
      </div>

      {/* Bottom-Left: Garlic Bulbs & Chili Flakes (Frame 00:01 Match) */}
      <div
        ref={garlicRef}
        className="absolute bottom-6 left-4 sm:left-14 z-10 pointer-events-none drop-shadow-[0_10px_20px_rgba(0,0,0,0.08)] will-change-transform"
      >
        <div className="w-24 sm:w-32 h-24 sm:h-32 relative">
          <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
            {/* Garlic Bulb */}
            <ellipse cx="50" cy="55" rx="20" ry="18" fill="#fdfcf8" stroke="#e5e5e0" strokeWidth="1.5" />
            <path d="M50 37 Q50 20 48 15" stroke="#a3a39e" strokeWidth="2.5" strokeLinecap="round" />
            <path d="M42 42 Q35 55 42 70" stroke="#e5e5e0" strokeWidth="1.5" fill="none" />
            <path d="M58 42 Q65 55 58 70" stroke="#e5e5e0" strokeWidth="1.5" fill="none" />
            {/* Chili Flakes */}
            <circle cx="25" cy="75" r="2.5" fill="#dc2626" />
            <circle cx="32" cy="82" r="2" fill="#b91c1c" />
            <circle cx="75" cy="70" r="2" fill="#ef4444" />
            <circle cx="80" cy="78" r="3" fill="#dc2626" />
          </svg>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 relative z-10">

        {/* Section Header: Matching Exact Reference Text ("What's on our Plate" + Cursive Subtitle) */}
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
          <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-bold text-[#111827] tracking-tight mb-2">
            What&apos;s on our Plate
          </h2>
          <p className="font-serif italic text-base sm:text-xl text-stone-500 font-light mb-8">
            Please serve yourself without any hesitate
          </p>

          {/* Minimalist Filter Tabs (Matching Frame 00:01: Appetizers | Main Dish | Dessert) */}
          <div className="inline-flex items-center justify-center gap-6 sm:gap-10 border-b border-stone-200 pb-3">
            {[
              { id: 'appetizers', label: 'Appetizers' },
              { id: 'main', label: 'Main Catch' },
              { id: 'dessert', label: 'Dessert' }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`text-xs sm:text-sm uppercase tracking-[0.2em] font-semibold transition-all cursor-pointer relative py-1 ${activeTab === tab.id
                  ? 'text-[#dc2626] font-bold'
                  : 'text-stone-500 hover:text-stone-900'
                  }`}
              >
                {tab.label}
                {activeTab === tab.id && (
                  <span className="absolute -bottom-3 left-0 right-0 h-[2px] bg-[#dc2626]" />
                )}
              </button>
            ))}
          </div>
        </div>

        {/* ================= 3-PLATE CIRCULAR FLAT-LAY SHOWCASE (Exact Turntable Spinning Transition) ================= */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12 items-start justify-items-center">
          {currentDishes.map((dish, idx) => (
            <div
              key={dish.id}
              className="flex flex-col items-center text-center max-w-sm w-full group cursor-pointer"
              onClick={() => onSelectItem(dish.item)}
            >
              {/* Plate Container with Upright Order Button */}
              <div className="relative mb-6">

                {/* Top-Down Circular Ceramic Plate (ROTATES freely on its center axis like a turntable) */}
                <div
                  ref={(el) => { plateDiscRefs.current[idx] = el; }}
                  className="relative w-64 sm:w-72 md:w-80 h-64 sm:h-72 md:h-80 rounded-full p-3 sm:p-4 bg-white border border-stone-200/90 shadow-[0_20px_45px_rgba(0,0,0,0.08)] group-hover:shadow-[0_25px_55px_rgba(220,38,38,0.22)] group-hover:scale-105 transition-shadow duration-500 flex items-center justify-center will-change-transform"
                >
                  {/* Food Image Circle */}
                  <div className="relative w-full h-full rounded-full overflow-hidden shadow-inner bg-stone-900">
                    <Image
                      src={dish.image}
                      alt={dish.title}
                      fill
                      className="object-cover object-center filter contrast-[1.05] group-hover:scale-110 transition-transform duration-700 ease-out"
                    />
                    <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors" />
                  </div>

                  {/* ================= CENTER DISH CROSSED CHOPSTICKS (Frame 00:01 Center Match - Spins with Plate) ================= */}
                  {dish.hasChopsticks && (
                    <div className="absolute inset-0 pointer-events-none z-20 flex items-center justify-center">
                      <div className="w-[120%] h-10 relative rotate-[-25deg] drop-shadow-[0_8px_14px_rgba(0,0,0,0.35)]">
                        {/* Chopstick 1 */}
                        <div className="absolute top-1 left-0 right-0 h-2.5 rounded-full bg-gradient-to-r from-[#e0c092] via-[#caa268] to-[#eed6b4] border border-[#a87f4c]/40" />
                        {/* Chopstick 2 (Crossed) */}
                        <div className="absolute top-4 left-1 right-[-8px] h-2.5 rounded-full bg-gradient-to-r from-[#eed6b4] via-[#caa268] to-[#e0c092] rotate-[7deg] border border-[#a87f4c]/40" />
                      </div>
                    </div>
                  )}

                  {/* ================= RIGHT DISH RESTING FORK (Frame 00:01 & 00:02 Right Match - Spins with Plate) ================= */}
                  {dish.hasFork && (
                    <div className="absolute inset-0 pointer-events-none z-20 flex items-center justify-center">
                      <div className="w-[110%] h-10 relative rotate-[-38deg] drop-shadow-[0_8px_14px_rgba(0,0,0,0.3)]">
                        {/* Wooden Handle */}
                        <div className="absolute top-3 left-4 w-28 h-3 rounded-full bg-gradient-to-r from-[#78350f] via-[#92400e] to-[#b45309] border border-[#451a03]/50" />
                        {/* Steel Fork Head */}
                        <div className="absolute top-1.5 left-32 w-16 h-6 flex items-center gap-1">
                          <span className="w-1 h-5 bg-gradient-to-b from-[#e5e7eb] to-[#9ca3af] rounded-full" />
                          <span className="w-1 h-6 bg-gradient-to-b from-[#f3f4f6] to-[#9ca3af] rounded-full" />
                          <span className="w-1 h-6 bg-gradient-to-b from-[#f3f4f6] to-[#9ca3af] rounded-full" />
                          <span className="w-1 h-5 bg-gradient-to-b from-[#e5e7eb] to-[#9ca3af] rounded-full" />
                        </div>
                      </div>
                    </div>
                  )}
                </div>

                {/* Floating Quick Add Pill Button (Stays level & upright at bottom-right) */}
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    handleAdd(dish.item, dish.id);
                  }}
                  aria-label={`Add ${dish.title} to cart`}
                  className={`absolute -bottom-2 right-4 z-20 px-4 py-2 rounded-full font-manrope font-bold text-xs uppercase tracking-wider transition-all duration-300 shadow-md cursor-pointer flex items-center gap-1.5 ${addedItem === dish.id
                    ? 'bg-emerald-600 text-white'
                    : 'bg-[#dc2626] hover:bg-[#b91c1c] text-white hover:scale-105'
                    }`}
                >
                  {addedItem === dish.id ? (
                    <>
                      <Check className="w-3.5 h-3.5 stroke-[3]" />
                      <span>Added</span>
                    </>
                  ) : (
                    <>
                      <Plus className="w-3.5 h-3.5 stroke-[3]" />
                      <span>Order</span>
                    </>
                  )}
                </button>
              </div>

              {/* Dish Typography (Stays upright, clean Didone & Manrope typography) */}
              <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#111827] group-hover:text-[#dc2626] transition-colors mb-2">
                {dish.title}
              </h3>

              <p className="font-manrope text-xs sm:text-sm text-stone-500 font-normal leading-relaxed max-w-xs mb-3">
                {dish.desc}
              </p>

              <span className="font-mono text-base font-extrabold text-[#111827]">
                ${dish.price}
              </span>
            </div>
          ))}
        </div>

        {/* Explore Full Menu Link Pill */}
        <div className="mt-16 text-center">
          <Link
            href="/menu"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-stone-900 hover:bg-[#dc2626] text-white font-manrope font-extrabold text-xs uppercase tracking-[0.22em] transition-all duration-300 shadow-md hover:shadow-xl hover:-translate-y-0.5 cursor-pointer"
          >
            <span>Explore Complete 20+ Catch Menu</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

      </div>
    </section>
  );
}
