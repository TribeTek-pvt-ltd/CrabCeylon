'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { Plus, Check, ShoppingBag, Calendar } from 'lucide-react';
import { MENU_ITEMS, MenuItem } from '../data/restaurantData';

interface HeroProps {
  onSelectItem?: (item: MenuItem) => void;
  onQuickAdd?: (item: MenuItem) => void;
  onOrderClick?: () => void;
  onReserveClick?: () => void;
}

export default function Hero({ onSelectItem, onQuickAdd, onOrderClick, onReserveClick }: HeroProps) {
  // 5 Signature Catch Plates for the Circular Arc Carousel
  const signatureDishes = [
    {
      id: 'crab-signature',
      title: 'Imperial Ceylon Chili Crab',
      category: 'Signature Mud Crab',
      price: '46.99',
      image: '/images/hero-crab.jpg',
      item: MENU_ITEMS.find((i) => i.id === 'crab-signature') || MENU_ITEMS[0],
      hasChopsticks: true
    },
    {
      id: 'garlic-butter-crab',
      title: 'Golden Garlic Butter Crab',
      category: 'Clarified Island Butter Wok',
      price: '44.99',
      image: '/images/garlic-butter-crab.jpg',
      item: MENU_ITEMS.find((i) => i.id === 'lobster-signature') || MENU_ITEMS[1],
      hasChopsticks: false
    },
    {
      id: 'black-pepper-crab',
      title: 'Miris Gala Black Pepper Crab',
      category: 'Tellicherry Granite Stone',
      price: '44.99',
      image: '/images/black-pepper-crab.jpg',
      item: MENU_ITEMS.find((i) => i.id === 'black-pepper-crab') || MENU_ITEMS[2],
      hasChopsticks: false
    },
    {
      id: 'ocean-platter',
      title: 'Wild Lagoon Ocean Platter',
      category: 'Grand Emperor Seafood Spread',
      price: '58.99',
      image: '/images/ocean-platter.jpg',
      item: MENU_ITEMS.find((i) => i.id === 'ocean-platter') || MENU_ITEMS[3],
      hasChopsticks: false
    },
    {
      id: 'pittu-combo',
      title: 'Claypot Steamed Pittu & Gravy',
      category: 'Woodfired Island Hearth Sides',
      price: '16.99',
      image: '/images/pittu-combo.jpg',
      item: MENU_ITEMS.find((i) => i.id === 'pittu-combo') || MENU_ITEMS[4],
      hasChopsticks: false
    }
  ];

  const totalDishes = signatureDishes.length;
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [quickAdded, setQuickAdded] = useState(false);
  const [viewportWidth, setViewportWidth] = useState(1200);

  // Responsive tracker for pivot radius and wider arc spread
  useEffect(() => {
    const handleResize = () => setViewportWidth(window.innerWidth);
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Exact lateral offset and vertical drop matching the Canva gray layout (dx = 21.5%, dy = 32.7%)
  const sidePlateDx =
    viewportWidth < 640
      ? Math.round(viewportWidth * 0.32)
      : viewportWidth < 1024
      ? Math.round(viewportWidth * 0.25)
      : Math.min(420, Math.round(viewportWidth * 0.218));

  const sidePlateDy =
    viewportWidth < 640 ? 150 : viewportWidth < 1024 ? 200 : 255;

  const sidePlateScale = 0.73;

  // Active dish currently in the center showcase
  const activeDish = signatureDishes[activeIndex];
  const [captionVisible, setCaptionVisible] = useState(true);

  // Auto-advance timeline: smooth continuous rolling every 3.5 seconds
  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % totalDishes);
    }, 3500);

    return () => clearInterval(interval);
  }, [isPaused, totalDishes]);

  // Synchronize caption fade smoothly with circular rotation
  useEffect(() => {
    setCaptionVisible(false);
    const timeout = setTimeout(() => {
      setCaptionVisible(true);
    }, 350);
    return () => clearTimeout(timeout);
  }, [activeIndex]);

  // Navigation handlers
  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + totalDishes) % totalDishes);
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % totalDishes);
  };

  // Compute slot relative to activeIndex: -2, -1, 0, 1, 2
  const getSlot = (dishIndex: number) => {
    let diff = (dishIndex - activeIndex) % totalDishes;
    if (diff > 2) diff -= totalDishes;
    if (diff < -2) diff += totalDishes;
    return diff;
  };

  const handleQuickAddClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (onQuickAdd && activeDish.item) {
      onQuickAdd(activeDish.item);
      setQuickAdded(true);
      setTimeout(() => setQuickAdded(false), 1500);
    }
  };

  return (
    <section
      id="menu"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      className="relative min-h-[92vh] lg:min-h-screen w-full overflow-hidden bg-gradient-to-br from-[#1a0404] via-[#3a0808] to-[#140202] text-white flex flex-col items-center justify-start pt-20 sm:pt-24 lg:pt-24 pb-8 select-none"
    >
      {/* ================= HERO BACKDROP WITH RICH TEMPTING RED GRADIENT & TEXTURE ================= */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        {/* Glowing vermilion bloom centered behind active centerpiece */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] sm:w-[850px] h-[600px] sm:h-[850px] bg-gradient-to-br from-[#dc2626]/35 via-[#b91c1c]/25 to-[#ea580c]/15 rounded-full blur-[140px]" />

        {/* Ambient sizzling flame aura */}
        <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[700px] sm:w-[900px] h-[500px] bg-red-600/20 rounded-full blur-[140px]" />
        <div className="absolute -bottom-10 right-10 w-[400px] sm:w-[500px] h-[350px] sm:h-[450px] bg-amber-600/20 rounded-full blur-[120px]" />

        {/* ================= CEYLON HERITAGE LINE-ART ARTWORK BLENDED WITH BG GRADIENT ================= */}
        <div
          className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden"
          style={{
            maskImage: 'radial-gradient(ellipse 85% 72% at 50% 50%, black 35%, rgba(0,0,0,0.5) 68%, transparent 96%)',
            WebkitMaskImage: 'radial-gradient(ellipse 85% 72% at 50% 50%, black 35%, rgba(0,0,0,0.5) 68%, transparent 96%)',
          }}
        >
          <div className="relative w-[1100px] sm:w-[1350px] md:w-[1550px] lg:w-[1750px] xl:w-[1920px] h-[600px] sm:h-[720px] md:h-[820px] lg:h-[920px] max-w-none opacity-[0.22] mix-blend-screen select-none">
            <Image
              src="/images/artwork/ceylon-heritage-map-gold.png"
              alt="Ceylon Heritage Cultural Map Artwork"
              fill
              priority
              className="object-contain object-center filter drop-shadow-[0_0_20px_rgba(245,158,11,0.35)] contrast-[1.12]"
            />
          </div>
        </div>

        {/* Subtle radial depth overlay */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_30%,rgba(10,2,2,0.55)_100%)]" />

        {/* Tactile Organic Grain Texture */}
        <div
          className="absolute inset-0 opacity-[0.16] mix-blend-overlay pointer-events-none"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
            backgroundRepeat: 'repeat',
            backgroundSize: '160px 160px'
          }}
        />

        {/* Fine Woven Linen Texture */}
        <div className="absolute inset-0 opacity-[0.05] bg-[linear-gradient(rgba(255,255,255,0.12)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.12)_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none" />

        {/* Subtle Stippled Micro-Dots Texture */}
        <div className="absolute inset-0 opacity-[0.07] bg-[radial-gradient(circle,rgba(255,255,255,0.3)_1px,transparent_1px)] [background-size:18px_18px] pointer-events-none" />
      </div>

      {/* Subtle bottom edge transition */}
      <div className="absolute bottom-0 left-0 right-0 h-10 sm:h-14 bg-gradient-to-t from-white/20 to-transparent pointer-events-none z-10" />

      {/* ================= TOP HEADLINE, TAGLINE & 2 ACTION BUTTONS ================= */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 text-center">
        <h1 className="font-serif text-3xl sm:text-5xl md:text-6xl font-bold text-white tracking-tight leading-[1.1] mb-2 drop-shadow-[0_4px_30px_rgba(0,0,0,0.7)]">
          What you like to eat today?
        </h1>
        <p className="font-serif italic text-sm sm:text-lg md:text-xl text-amber-200/90 font-light drop-shadow-sm max-w-xl mx-auto mb-4 sm:mb-5">
          Life is so endlessly delicious. Take a taste, come join us.
        </p>

        {/* 2 Buttons: Place Order & Book Table (Exact Canva spacing: spread laterally to frame upper shoulders of center plate) */}
        <div className="w-full max-w-xs sm:max-w-md md:max-w-xl lg:max-w-2xl mx-auto flex items-center justify-between px-2 sm:px-6 md:px-10 lg:px-14 mb-0 sm:mb-1 z-20">
          {/* Button 1: Place Order */}
          <button
            onClick={onOrderClick}
            id="hero-place-order-btn"
            className="px-6 sm:px-7 py-2.5 sm:py-3 bg-gradient-to-r from-[#dc2626] to-[#ef4444] hover:from-[#b91c1c] hover:to-[#dc2626] text-white font-manrope font-extrabold text-xs uppercase tracking-[0.16em] rounded-full shadow-[0_8px_24px_rgba(220,38,38,0.5)] hover:shadow-[0_12px_32px_rgba(220,38,38,0.7)] hover:-translate-y-0.5 transition-all duration-300 flex items-center gap-2 cursor-pointer border border-red-400/40 z-20"
          >
            <ShoppingBag className="w-4 h-4" />
            <span>Place Order</span>
          </button>

          {/* Button 2: Book Table */}
          <button
            onClick={onReserveClick}
            id="hero-book-table-btn"
            className="px-6 sm:px-7 py-2.5 sm:py-3 bg-white/10 hover:bg-white/20 text-white hover:text-amber-200 border border-white/30 hover:border-amber-300 font-manrope font-extrabold text-xs uppercase tracking-[0.16em] rounded-full shadow-lg backdrop-blur-md hover:-translate-y-0.5 transition-all duration-300 flex items-center gap-2 cursor-pointer z-20"
          >
            <Calendar className="w-4 h-4 text-amber-300" />
            <span>Book Table</span>
          </button>
        </div>
      </div>

      {/* ================= CIRCULAR ORBIT WHEEL: ADOPTING CANVA GRAY ELEMENTS SPACING ================= */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-2 sm:px-6 lg:px-8 flex flex-col items-center justify-center mt-3 sm:mt-4 lg:mt-5">

        {/* Circular Orbit Stage Container */}
        <div className="relative w-full h-[280px] sm:h-[310px] md:h-[330px] lg:h-[340px] overflow-visible flex items-center justify-center [perspective:1200px]">

          {/* ----------------- 5 PLATES POSITIONED EXACTLY AT THE GRAY CIRCLE LOCATIONS ----------------- */}
          {signatureDishes.map((dish, idx) => {
            const slot = getSlot(idx);
            const isCenter = slot === 0;
            const isVisible = Math.abs(slot) <= 1;
            const isInstant = Math.abs(slot) === 2;

            // Compute exact x, y, rotation, scale, and opacity for each slot
            let xOffset = 0;
            let yOffset = 0;
            let rotateAngle = 0;
            let scaleVal = 1;
            let opacityVal = 1;
            let zIndexVal = 30;

            if (slot === 0) {
              // Center dish: exactly in the middle at top anchor
              xOffset = 0;
              yOffset = 0;
              rotateAngle = 0;
              scaleVal = 1;
              opacityVal = 1;
              zIndexVal = 30;
            } else if (slot === -1) {
              // Left dish: exactly where left gray circle is placed in Canva
              xOffset = -sidePlateDx;
              yOffset = sidePlateDy;
              rotateAngle = -10;
              scaleVal = sidePlateScale;
              opacityVal = 0.50;
              zIndexVal = 20;
            } else if (slot === 1) {
              // Right dish: exactly where right gray circle is placed in Canva
              xOffset = sidePlateDx;
              yOffset = sidePlateDy;
              rotateAngle = 10;
              scaleVal = sidePlateScale;
              opacityVal = 0.50;
              zIndexVal = 20;
            } else if (slot === -2) {
              // Receded underground left
              xOffset = -Math.round(sidePlateDx * 1.55);
              yOffset = Math.round(sidePlateDy * 1.4);
              rotateAngle = -22;
              scaleVal = sidePlateScale * 0.8;
              opacityVal = 0;
              zIndexVal = 10;
            } else if (slot === 2) {
              // Receded underground right
              xOffset = Math.round(sidePlateDx * 1.55);
              yOffset = Math.round(sidePlateDy * 1.4);
              rotateAngle = 22;
              scaleVal = sidePlateScale * 0.8;
              opacityVal = 0;
              zIndexVal = 10;
            }

            return (
              <div
                key={dish.id}
                onClick={() => {
                  if (slot === -1) handlePrev();
                  else if (slot === 1) handleNext();
                  else if (slot === 0 && onSelectItem && dish.item) {
                    onSelectItem(dish.item);
                  }
                }}
                style={{
                  position: 'absolute',
                  left: '50%',
                  top: '0px',
                  transform: `translateX(calc(-50% + ${xOffset}px)) translateY(${yOffset}px) rotate(${rotateAngle}deg) scale(${scaleVal})`,
                  opacity: opacityVal,
                  zIndex: zIndexVal,
                  willChange: 'transform, opacity',
                  WebkitBackfaceVisibility: 'hidden',
                  backfaceVisibility: 'hidden',
                  transformStyle: 'preserve-3d',
                  transition: isInstant
                    ? 'none'
                    : 'transform 900ms cubic-bezier(0.25, 1, 0.5, 1), opacity 650ms ease-in-out'
                }}
                className={`flex flex-col items-center justify-center cursor-pointer ${
                  !isVisible ? 'pointer-events-none' : 'pointer-events-auto'
                } ${!isCenter && isVisible ? 'hover:!opacity-85' : ''}`}
              >
                {/* Ceramic Platter Disk with physical rolling rim & shadow */}
                <div className="relative w-56 sm:w-68 md:w-80 lg:w-[340px] h-56 sm:h-68 md:h-80 lg:h-[340px] rounded-full p-3 sm:p-3.5 bg-white/95 border-2 border-stone-200/90 shadow-[0_30px_70px_rgba(0,0,0,0.85),0_0_55px_rgba(220,38,38,0.45)] group">
                  {/* Inner Circular Food Dish */}
                  <div className="relative w-full h-full rounded-full overflow-hidden shadow-inner bg-stone-900">
                    <Image
                      src={dish.image}
                      alt={dish.title}
                      fill
                      sizes="(max-width: 640px) 224px, (max-width: 768px) 270px, 320px"
                      className="object-cover object-center filter contrast-[1.1] saturate-[1.2] transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-transparent pointer-events-none" />
                  </div>

                  {/* Crossed Bamboo Chopsticks Detail (For Imperial Chili Crab) */}
                  {dish.hasChopsticks && (
                    <div className="absolute inset-0 pointer-events-none z-20 flex items-center justify-center">
                      <div className="w-[115%] h-10 relative rotate-[-25deg] drop-shadow-[0_8px_16px_rgba(0,0,0,0.5)]">
                        <div className="absolute top-1 left-0 right-0 h-2 sm:h-2.5 rounded-full bg-gradient-to-r from-[#e0c092] via-[#caa268] to-[#eed6b4] border border-[#a87f4c]/40" />
                        <div className="absolute top-4 left-1 right-[-8px] h-2 sm:h-2.5 rounded-full bg-gradient-to-r from-[#eed6b4] via-[#caa268] to-[#e0c092] rotate-[7deg] border border-[#a87f4c]/40" />
                      </div>
                    </div>
                  )}

                  {/* Interactive Quick Add Floating Pill Button on Center Dish */}
                  {isCenter && onQuickAdd && (
                    <button
                      onClick={handleQuickAddClick}
                      aria-label={`Add ${dish.title} to order`}
                      className={`absolute -bottom-2 right-4 sm:right-6 z-30 px-3.5 sm:px-4 py-1.5 sm:py-2 rounded-full font-manrope font-bold text-[11px] sm:text-xs uppercase tracking-wider transition-all duration-300 shadow-lg cursor-pointer flex items-center gap-1.5 ${
                        quickAdded
                          ? 'bg-emerald-600 text-white'
                          : 'bg-[#dc2626] hover:bg-[#b91c1c] text-white hover:scale-105'
                      }`}
                    >
                      {quickAdded ? (
                        <>
                          <Check className="w-3.5 h-3.5 stroke-[3]" />
                          <span>Added</span>
                        </>
                      ) : (
                        <>
                          <Plus className="w-3.5 h-3.5 stroke-[3]" />
                          <span>Order • ${dish.price}</span>
                        </>
                      )}
                    </button>
                  )}
                </div>
              </div>
            );
          })}

        </div>

        {/* ================= ACTIVE CENTER DISH CAPTION ================= */}
        <div className="relative z-30 text-center mt-5 sm:mt-6 mb-2 flex flex-col items-center">
          <div
            className={`flex flex-col items-center transition-all duration-500 ease-out ${
              captionVisible ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-2 scale-95'
            }`}
          >
            <span className="font-serif text-xl sm:text-2xl md:text-[28px] font-bold text-amber-300 group-hover:text-white transition-colors tracking-wide inline-block pb-1.5 border-b border-amber-400/80 drop-shadow-md">
              {activeDish.title}
            </span>
            <p className="font-manrope text-xs sm:text-sm text-stone-300 font-light mt-1.5 max-w-md">
              {activeDish.category} • Wild Ceylon Lagoon Mud Crab
            </p>
          </div>
        </div>

      </div>

    </section>
  );
}
