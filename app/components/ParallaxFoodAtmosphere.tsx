'use client';

import React, { useEffect, useState } from 'react';

// 1. Fresh Red Lobster (Matches Frame 00:01 of the Video)
function FloatingLobsterParallax({ className = '' }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 160 110"
      className={`pointer-events-none filter drop-shadow-[0_12px_24px_rgba(0,0,0,0.35)] ${className}`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id="parLobsterBody" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#f87171" />
          <stop offset="30%" stopColor="#dc2626" />
          <stop offset="70%" stopColor="#b91c1c" />
          <stop offset="100%" stopColor="#7f1d1d" />
        </linearGradient>
        <linearGradient id="parLobsterClaw" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#fca5a5" />
          <stop offset="40%" stopColor="#ef4444" />
          <stop offset="90%" stopColor="#991b1b" />
        </linearGradient>
      </defs>
      {/* Curved Lobster Carapace / Body */}
      <path
        d="M60 45 C75 35, 110 38, 125 50 C140 65, 142 80, 130 92 C115 98, 90 92, 75 80 C65 72, 55 58, 60 45 Z"
        fill="url(#parLobsterBody)"
      />
      {/* Segmented Tail Fan */}
      <path d="M125 50 C138 45, 150 48, 156 56 C148 64, 138 64, 128 58 Z" fill="#b91c1c" />
      <path d="M130 58 C144 58, 154 64, 158 72 C148 76, 138 72, 130 65 Z" fill="#991b1b" />
      <path d="M128 68 C140 72, 148 80, 152 90 C140 90, 132 82, 126 74 Z" fill="#7f1d1d" />
      {/* Front Big Left Pincer Claw */}
      <path
        d="M60 45 C45 35, 30 25, 20 28 C12 32, 10 44, 16 52 C24 60, 38 58, 48 50 Z"
        fill="url(#parLobsterClaw)"
      />
      <path d="M20 28 C14 20, 8 22, 6 28 C12 32, 18 32, 20 28 Z" fill="#fca5a5" />
      {/* Front Right Pincer Claw */}
      <path
        d="M65 55 C52 65, 38 75, 26 72 C18 68, 16 56, 24 48 C34 40, 48 45, 56 52 Z"
        fill="url(#parLobsterClaw)"
      />
      {/* Antennae */}
      <path d="M55 42 C40 30, 20 15, 5 8" stroke="#f87171" strokeWidth="1.8" strokeLinecap="round" />
      <path d="M58 48 C42 42, 25 32, 8 25" stroke="#f87171" strokeWidth="1.5" strokeLinecap="round" />
      {/* Shell Highlights */}
      <ellipse cx="90" cy="58" rx="14" ry="4" fill="white" opacity="0.3" transform="rotate(-15 90 58)" />
      <ellipse cx="108" cy="68" rx="10" ry="3.5" fill="white" opacity="0.25" transform="rotate(-10 108 68)" />
    </svg>
  );
}

// 2. Wooden Spice Spoon with Turmeric / Ceylon Curry Powder (Matches Frame 00:00)
function WoodenSpiceSpoon({ color = '#eab308', angle = '25', className = '' }: { color?: string; angle?: string; className?: string }) {
  return (
    <svg
      viewBox="0 0 110 40"
      className={`pointer-events-none filter drop-shadow-[0_8px_16px_rgba(0,0,0,0.22)] ${className}`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Long Wooden Handle */}
      <path d="M98 20 C70 19, 45 19, 30 19 C28 21, 28 22, 30 23 C45 23, 70 23, 98 22 Z" fill="#854d0e" />
      <path d="M102 20 C100 18, 96 18, 92 19 L92 23 C96 24, 100 24, 102 22 Z" fill="#713f12" />
      {/* Wooden Spoon Bowl */}
      <ellipse cx="22" cy="20" rx="18" ry="14" fill="#a16207" />
      <ellipse cx="20" cy="20" rx="16" ry="12" fill="#78350f" />
      {/* Heaped Vibrant Ground Spices */}
      <ellipse cx="19" cy="20" rx="14" ry="10" fill={color} />
      {/* Spice Texture Specks */}
      <circle cx="15" cy="18" r="1.5" fill="#fef08a" opacity="0.8" />
      <circle cx="22" cy="22" r="1.2" fill="#fef08a" opacity="0.7" />
      <circle cx="25" cy="17" r="1" fill="#713f12" opacity="0.5" />
    </svg>
  );
}

// 3. Whole Ceylon Star Anise (Matches Frame 00:04 of Video)
function StarAnise({ className = '' }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 60 60"
      className={`pointer-events-none filter drop-shadow-[0_6px_12px_rgba(0,0,0,0.3)] ${className}`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <radialGradient id="starAniseGrad" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#78350f" />
          <stop offset="60%" stopColor="#451a03" />
          <stop offset="100%" stopColor="#1c0a00" />
        </radialGradient>
      </defs>
      {/* 8 Pod Star */}
      {[0, 45, 90, 135, 180, 225, 270, 315].map((deg, i) => (
        <g key={i} transform={`rotate(${deg} 30 30)`}>
          <path
            d="M30 30 C28 20, 24 10, 30 4 C36 10, 32 20, 30 30 Z"
            fill="url(#starAniseGrad)"
          />
          {/* Seed inside pod */}
          <ellipse cx="30" cy="12" rx="2.5" ry="4" fill="#d97706" />
          <ellipse cx="29.5" cy="11.5" rx="1" ry="2" fill="#fef3c7" opacity="0.7" />
        </g>
      ))}
      <circle cx="30" cy="30" r="5" fill="#291102" />
    </svg>
  );
}

// 4. Dipping Sauce Bowl with Chili Sambol & Basil Leaf (Matches Frame 00:00)
function ChiliDipBowl({ className = '' }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 70 70"
      className={`pointer-events-none filter drop-shadow-[0_10px_20px_rgba(0,0,0,0.28)] ${className}`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Outer Ceramic White Bowl */}
      <circle cx="35" cy="35" r="32" fill="#fafafa" stroke="#e5e5e5" strokeWidth="2.5" />
      {/* Inner Bowl Rim Shadow */}
      <circle cx="35" cy="35" r="27" fill="#b91c1c" />
      {/* Rich Red Sambol Paste */}
      <circle cx="35" cy="35" r="25" fill="#dc2626" />
      {/* Sambol Texture Swirl */}
      <path
        d="M24 35 C24 28, 42 26, 45 34 C47 40, 32 46, 26 40"
        stroke="#ef4444"
        strokeWidth="3.5"
        strokeLinecap="round"
        opacity="0.8"
      />
      {/* Fresh Green Basil Leaf */}
      <path
        d="M35 35 C38 25, 48 24, 52 28 C54 36, 44 40, 35 35 Z"
        fill="#22c55e"
      />
      <path d="M35 35 C42 30, 48 28, 52 28" stroke="#15803d" strokeWidth="1" />
      <path
        d="M35 35 C32 28, 22 30, 20 36 C22 42, 30 40, 35 35 Z"
        fill="#16a34a"
      />
    </svg>
  );
}

// 5. Fresh Red Chili Pepper with Green Stem (Matches Frame 00:06)
function FreshRedChili({ className = '' }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 60 40"
      className={`pointer-events-none filter drop-shadow-[0_6px_12px_rgba(0,0,0,0.28)] ${className}`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Curving Red Chili Body */}
      <path
        d="M12 28 C20 30, 36 28, 46 20 C54 14, 56 8, 54 6 C50 6, 40 12, 32 16 C20 22, 10 24, 12 28 Z"
        fill="#dc2626"
      />
      {/* Chili Tip Highlight */}
      <path
        d="M18 27 C26 28, 40 24, 48 16"
        stroke="#f87171"
        strokeWidth="1.5"
        strokeLinecap="round"
        opacity="0.7"
      />
      {/* Green Stem Calyx */}
      <path d="M52 6 C56 5, 60 8, 58 12 C56 10, 54 8, 52 6 Z" fill="#15803d" />
      <path d="M56 7 C58 3, 56 1, 54 0" stroke="#16a34a" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

// 6. Whole Garlic Clove (Matches Frame 00:02)
function GarlicClove({ className = '' }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 45 45"
      className={`pointer-events-none filter drop-shadow-[0_6px_12px_rgba(0,0,0,0.2)] ${className}`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M22 6 C16 14, 10 24, 14 34 C18 42, 28 42, 32 35 C38 26, 30 14, 22 6 Z"
        fill="#fafaf9"
        stroke="#e7e5e4"
        strokeWidth="1.5"
      />
      {/* Garlic segments lines */}
      <path d="M22 8 C18 18, 18 28, 22 38" stroke="#d6d3d1" strokeWidth="1" strokeLinecap="round" opacity="0.6" />
      <path d="M22 8 C26 18, 26 28, 24 38" stroke="#d6d3d1" strokeWidth="1" strokeLinecap="round" opacity="0.6" />
      {/* Tip root */}
      <path d="M22 6 L23 3" stroke="#a8a29e" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

// 7. Fresh Green Ceylon Curry Leaf
function CurryLeaf({ className = '' }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 40 30"
      className={`pointer-events-none filter drop-shadow-[0_4px_8px_rgba(0,0,0,0.2)] ${className}`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M6 15 C14 8, 26 6, 34 14 C26 22, 14 20, 6 15 Z"
        fill="#16a34a"
      />
      {/* Central Leaf Vein */}
      <path d="M6 15 C16 14, 26 13, 34 14" stroke="#86efac" strokeWidth="1" />
      {/* Leaf ribs */}
      <path d="M14 14 C17 11, 20 11, 23 13" stroke="#86efac" strokeWidth="0.8" opacity="0.7" />
      <path d="M18 15 C21 17, 24 17, 27 15" stroke="#86efac" strokeWidth="0.8" opacity="0.7" />
    </svg>
  );
}

// Main Parallax Atmosphere Layer (Moves culinary elements at dynamic depths on scroll without changing site structure)
export default function ParallaxFoodAtmosphere() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setScrollY(window.scrollY);
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div
      aria-hidden="true"
      className="fixed inset-0 pointer-events-none z-20 overflow-hidden select-none"
    >
      {/* ================= 1. HERO & TOP SECTION PARALLAX ================= */}
      {/* Wooden Spoon (Curry Powder) - Floating on Top-Left */}
      <div
        style={{
          transform: `translate3d(0, ${scrollY * 0.28}px, 0) rotate(${18 + scrollY * 0.04}deg)`,
          transition: 'transform 0.1s cubic-bezier(0, 0, 0.2, 1)'
        }}
        className="absolute top-28 sm:top-36 left-[-15px] sm:left-6 w-36 sm:w-48 opacity-90 hidden sm:block"
      >
        <WoodenSpiceSpoon color="#f59e0b" angle="18" />
      </div>

      {/* Wooden Spoon (Black Pepper) - Floating right below */}
      <div
        style={{
          transform: `translate3d(0, ${scrollY * 0.38}px, 0) rotate(${-22 - scrollY * 0.03}deg)`,
          transition: 'transform 0.1s cubic-bezier(0, 0, 0.2, 1)'
        }}
        className="absolute top-44 sm:top-56 left-2 sm:left-14 w-32 sm:w-44 opacity-85 hidden sm:block"
      >
        <WoodenSpiceSpoon color="#1c1917" angle="-22" />
      </div>

      {/* Chili Dip Bowl with Basil - Drifting on Top-Right */}
      <div
        style={{
          transform: `translate3d(0, ${scrollY * 0.22}px, 0) rotate(${scrollY * 0.05}deg)`,
          transition: 'transform 0.1s cubic-bezier(0, 0, 0.2, 1)'
        }}
        className="absolute top-36 sm:top-48 right-4 sm:right-16 w-16 sm:w-20 opacity-90"
      >
        <ChiliDipBowl />
      </div>

      {/* Scattered Star Anise - Top Right */}
      <div
        style={{
          transform: `translate3d(0, ${scrollY * 0.45}px, 0) rotate(${45 + scrollY * 0.08}deg)`,
          transition: 'transform 0.1s cubic-bezier(0, 0, 0.2, 1)'
        }}
        className="absolute top-24 sm:top-32 right-20 sm:right-36 w-10 sm:w-12 opacity-85"
      >
        <StarAnise />
      </div>

      {/* ================= 2. MENU & DISHES SECTION PARALLAX (Matches Frame 00:01 & 00:02) ================= */}
      {/* THE RED LOBSTER! (Exact position from the Video on the Right side) */}
      <div
        style={{
          transform: `translate3d(0, ${-80 + scrollY * -0.26}px, 0) rotate(${-12 + scrollY * -0.03}deg)`,
          transition: 'transform 0.1s cubic-bezier(0, 0, 0.2, 1)'
        }}
        className="absolute top-[850px] sm:top-[950px] right-[-20px] sm:right-8 w-44 sm:w-60 opacity-95"
      >
        <FloatingLobsterParallax />
      </div>

      {/* Fresh Garlic Clove - Bottom Left of Menu */}
      <div
        style={{
          transform: `translate3d(0, ${-50 + scrollY * -0.18}px, 0) rotate(${15 + scrollY * 0.06}deg)`,
          transition: 'transform 0.1s cubic-bezier(0, 0, 0.2, 1)'
        }}
        className="absolute top-[1100px] sm:top-[1200px] left-4 sm:left-16 w-10 sm:w-12 opacity-90"
      >
        <GarlicClove />
      </div>

      {/* Fresh Curry Leaf - Drifting past Menu */}
      <div
        style={{
          transform: `translate3d(0, ${-30 + scrollY * -0.32}px, 0) rotate(${-35 + scrollY * 0.07}deg)`,
          transition: 'transform 0.1s cubic-bezier(0, 0, 0.2, 1)'
        }}
        className="absolute top-[1020px] sm:top-[1120px] left-10 sm:left-28 w-11 sm:w-14 opacity-85"
      >
        <CurryLeaf />
      </div>

      {/* ================= 3. HERITAGE & TESTIMONIALS PARALLAX (Matches Frame 00:04 & 00:05) ================= */}
      {/* Floating Star Anise cluster - Top Right of Testimonials */}
      <div
        style={{
          transform: `translate3d(0, ${-120 + scrollY * -0.22}px, 0) rotate(${scrollY * -0.06}deg)`,
          transition: 'transform 0.1s cubic-bezier(0, 0, 0.2, 1)'
        }}
        className="absolute top-[1800px] sm:top-[1950px] right-6 sm:right-24 w-12 sm:w-16 opacity-90"
      >
        <StarAnise />
      </div>

      {/* Red Chili Pepper - Drifting across heritage */}
      <div
        style={{
          transform: `translate3d(0, ${-70 + scrollY * -0.28}px, 0) rotate(${28 + scrollY * 0.05}deg)`,
          transition: 'transform 0.1s cubic-bezier(0, 0, 0.2, 1)'
        }}
        className="absolute top-[1700px] sm:top-[1850px] left-4 sm:left-20 w-16 sm:w-20 opacity-90"
      >
        <FreshRedChili />
      </div>

      {/* Second Garlic Clove - Testimonials */}
      <div
        style={{
          transform: `translate3d(0, ${-40 + scrollY * -0.15}px, 0) rotate(${-20 + scrollY * -0.04}deg)`,
          transition: 'transform 0.1s cubic-bezier(0, 0, 0.2, 1)'
        }}
        className="absolute top-[2050px] sm:top-[2200px] right-12 sm:right-32 w-11 sm:w-14 opacity-85"
      >
        <GarlicClove />
      </div>

      {/* Second Curry Leaf - Floating past */}
      <div
        style={{
          transform: `translate3d(0, ${-90 + scrollY * -0.3}px, 0) rotate(${40 - scrollY * 0.05}deg)`,
          transition: 'transform 0.1s cubic-bezier(0, 0, 0.2, 1)'
        }}
        className="absolute top-[2150px] sm:top-[2350px] left-6 sm:left-24 w-12 sm:w-14 opacity-85"
      >
        <CurryLeaf />
      </div>

      {/* ================= 4. FAQ & NEWSLETTER PARALLAX (Matches Frame 00:06) ================= */}
      {/* Red Chili Pepper floating near footer */}
      <div
        style={{
          transform: `translate3d(0, ${-150 + scrollY * -0.25}px, 0) rotate(${-15 + scrollY * -0.06}deg)`,
          transition: 'transform 0.1s cubic-bezier(0, 0, 0.2, 1)'
        }}
        className="absolute top-[2800px] sm:top-[3100px] right-8 sm:right-28 w-18 sm:w-22 opacity-90"
      >
        <FreshRedChili />
      </div>

      {/* Final Star Anise - Lower section */}
      <div
        style={{
          transform: `translate3d(0, ${-100 + scrollY * -0.2}px, 0) rotate(${60 + scrollY * 0.07}deg)`,
          transition: 'transform 0.1s cubic-bezier(0, 0, 0.2, 1)'
        }}
        className="absolute top-[2950px] sm:top-[3250px] left-10 sm:left-32 w-11 sm:w-14 opacity-85"
      >
        <StarAnise />
      </div>

    </div>
  );
}

