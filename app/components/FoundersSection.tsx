'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { Quote, Sparkles, ShieldCheck, Scale, Anchor, HeartHandshake, Award, Flame, ArrowRight } from 'lucide-react';

interface Founder {
  id: string;
  name: string;
  title: string;
  role: string;
  image: string;
  badge: string;
  highlight: string;
  quote: string;
  signature: string;
}

export default function FoundersSection() {
  const founders: Founder[] = [
    {
      id: 'dharshan',
      name: 'Dharshan Munidasa',
      title: 'Culinary Founder & Master Chef Patron',
      role: 'Creator of the Imperial Ceylon Chili & Black Pepper Crab Recipes',
      image: '/images/founder-dharshan.jpg',
      badge: 'Master Culinary Artisan • 25+ Years Experience',
      highlight: '“We do not rush fire, nor do we compromise on the tide.”',
      quote:
        'For over two decades, our motive has been unapologetically pure: to honour the magnificent Sri Lankan lagoon crab in its most honest, uncompromising glory. We refuse to freeze our catch. We refuse to mask the sweet oceanic meat behind artificial sauces. Every crab is weighed live at table side, simmered with twenty-one heirloom island spices ground fresh on granite stone, and seared to order. This is not merely dining — it is the culinary soul of Ceylon, brought across oceans to your table.',
      signature: 'Dharshan Munidasa'
    },
    {
      id: 'kumar',
      name: 'Kumar Sangakkara',
      title: 'Co-Founder & Global Ambassador',
      role: 'Custodian of Island Heritage & International Integrity',
      image: '/images/founder-kumar.jpg',
      badge: 'Cricket Legend • Global Cultural Icon',
      highlight: '“Integrity is not a slogan here — it is our baseline.”',
      quote:
        'When we founded this culinary institution, we made a solemn covenant: what we take to the world must represent the absolute zenith of our island’s bounty and hospitality. From Colombo to Yorkville, when you sit at our table, you are tasting centuries of maritime pride, harvested with dignity and served with uncompromising respect.',
      signature: 'Kumar Sangakkara'
    },
    {
      id: 'mahela',
      name: 'Mahela Jayawardene',
      title: 'Co-Founder & Culinary Strategist',
      role: 'Architect of the Epicurean Guest Experience',
      image: '/images/founder-mahela.jpg',
      badge: 'Cricket Legend • World Champion',
      highlight: '“Every plate is a team effort of lagoon fishermen, heirloom fire, and precision.”',
      quote:
        'True dining excellence requires the same discipline as a test match: relentless focus, reverence for every ingredient, and zero room for second-best. Our motive is to welcome you into the warmth of our island home while delivering a seafood delicacy you will remember for the rest of your life.',
      signature: 'Mahela Jayawardene'
    }
  ];

  const [activeFounderId, setActiveFounderId] = useState<string>('dharshan');
  const activeFounder = founders.find((f) => f.id === activeFounderId) || founders[0];

  const pillars = [
    {
      number: '01',
      icon: Scale,
      title: 'The Law of the Living Catch',
      subtitle: 'Zero Frozen Seafood • Ever',
      description:
        'We will never serve a crab that has seen the inside of a freezer. Flown fresh and held in climate-controlled saline tanks mirroring the natural estuaries of Sri Lanka, each crab is weighed live at table side.'
    },
    {
      number: '02',
      icon: Flame,
      title: 'Heirloom Island Terroir',
      subtitle: '21 Indigenous Ceylon Spices',
      description:
        'Tellicherry black peppercorns crushed on traditional granite miris gala, island cinnamon bark, hand-squeezed thick coconut milk, and clarified butter. Pure heritage chemistry with zero shortcut pastes.'
    },
    {
      number: '03',
      icon: Anchor,
      title: 'Sacred Lagoon Stewardship',
      subtitle: 'Sustainable Estuary Harvesting',
      description:
        'We strictly return egg-bearing females and undersized juveniles back to the waters immediately. Our bond with Ceylon’s lagoon fishermen supports generational coastal families with fair trade.'
    }
  ];

  return (
    <section
      id="ministers"
      className="py-20 sm:py-28 lg:py-32 relative bg-gradient-to-br from-[#120303] via-[#1a0404] to-[#0c0101] text-white overflow-hidden border-t border-red-950/40 select-none"
    >
      {/* ================= AMBIENT BACKDROP GRADIENT & TEXTURE ================= */}
      <div className="absolute inset-0 pointer-events-none z-0">
        {/* Soft vermilion ember aura */}
        <div className="absolute top-1/4 left-1/4 w-[500px] sm:w-[700px] h-[500px] sm:h-[700px] bg-red-700/15 rounded-full blur-[140px]" />
        <div className="absolute bottom-1/4 right-1/4 w-[400px] sm:w-[600px] h-[400px] sm:h-[600px] bg-amber-600/10 rounded-full blur-[130px]" />

        {/* Ceylon Heritage Line-Art Map watermark */}
        <div
          className="absolute inset-0 opacity-[0.08] mix-blend-screen bg-center bg-no-repeat bg-contain"
          style={{
            backgroundImage: `url('/images/artwork/ceylon-heritage-map-gold.png')`
          }}
        />

        {/* Tactile organic canvas grain */}
        <div
          className="absolute inset-0 opacity-[0.14] mix-blend-overlay"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
            backgroundRepeat: 'repeat',
            backgroundSize: '160px 160px'
          }}
        />

        {/* Radial depth vignette */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_40%,rgba(5,1,1,0.7)_100%)]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 relative z-10">

        {/* ================= SECTION HEADER ================= */}
        <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/25 mb-4 backdrop-blur-sm">
            <Sparkles className="w-3.5 h-3.5 text-amber-300" />
            <span className="font-manrope text-[11px] uppercase tracking-[0.22em] text-amber-200 font-bold">
              The Founder&apos;s Motive & Philosophy
            </span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight leading-[1.12] mb-4">
            We Do Not Compromise on the Tide
          </h2>

          <p className="font-serif italic text-base sm:text-lg lg:text-xl text-amber-100/80 font-light max-w-2xl mx-auto leading-relaxed">
            Born in the wild mangrove lagoons of Sri Lanka. Built on a covenant of live catch, heirloom flame, and generational reverence.
          </p>
        </div>

        {/* ================= INTERACTIVE FOUNDER SWITCHER TABS ================= */}
        <div className="flex flex-wrap items-center justify-center gap-2.5 sm:gap-3.5 max-w-2xl mx-auto mb-12 sm:mb-16">
          {founders.map((founder) => {
            const isActive = founder.id === activeFounderId;
            return (
              <button
                key={founder.id}
                onClick={() => setActiveFounderId(founder.id)}
                className={`px-5 sm:px-6 py-2.5 sm:py-3 rounded-full font-manrope text-xs sm:text-[13px] font-bold tracking-[0.14em] uppercase transition-all duration-300 cursor-pointer flex items-center gap-2.5 ${
                  isActive
                    ? 'bg-gradient-to-r from-[#dc2626] to-[#b91c1c] text-white shadow-[0_8px_24px_rgba(220,38,38,0.45)] scale-105 border border-red-400/40'
                    : 'bg-white/5 hover:bg-white/10 text-stone-300 hover:text-white border border-white/10'
                }`}
              >
                <span className={`w-2 h-2 rounded-full ${isActive ? 'bg-amber-300 animate-pulse' : 'bg-stone-500'}`} />
                <span>{founder.name}</span>
              </button>
            );
          })}
        </div>

        {/* ================= MAIN FOUNDER SPOTLIGHT (2 COLUMNS) ================= */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center max-w-6xl mx-auto mb-20 sm:mb-28">

          {/* Left Column: Portrait Showcase with Luxury Lacquer Frame */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-[340px] sm:max-w-[380px] aspect-[3/4] rounded-2xl overflow-hidden shadow-[0_25px_60px_rgba(0,0,0,0.8),0_0_35px_rgba(220,38,38,0.25)] border-2 border-amber-500/30 group">
              {/* Founder Photo */}
              <Image
                src={activeFounder.image}
                alt={activeFounder.name}
                fill
                sizes="(max-width: 640px) 340px, (max-width: 1024px) 380px, 420px"
                className="object-cover object-top transition-transform duration-700 ease-out group-hover:scale-105 filter contrast-[1.08]"
                priority
              />

              {/* Bottom Vignette Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/35 to-transparent pointer-events-none" />

              {/* Floating Luxury Quality Tag */}
              <div className="absolute top-4 left-4 z-20 px-3 py-1.5 rounded-full bg-black/60 backdrop-blur-md border border-amber-400/30 text-[10px] uppercase tracking-[0.16em] text-amber-300 font-manrope font-bold flex items-center gap-1.5 shadow-md">
                <ShieldCheck className="w-3.5 h-3.5 text-amber-400" />
                <span>{activeFounder.badge}</span>
              </div>

              {/* Bottom Card Identity */}
              <div className="absolute bottom-0 inset-x-0 p-5 sm:p-6 z-20 text-left">
                <span className="text-[11px] font-manrope uppercase tracking-[0.24em] text-amber-300 font-bold block mb-1">
                  Crab Ceylon Founder
                </span>
                <h3 className="font-serif text-2xl sm:text-3xl font-bold text-white tracking-wide">
                  {activeFounder.name}
                </h3>
                <p className="font-manrope text-xs text-stone-300 font-light mt-1">
                  {activeFounder.title}
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Editorial Quote, Motive & Signature */}
          <div className="lg:col-span-7 flex flex-col items-start text-left lg:pl-4">
            {/* Monumental Gold Quotation Mark */}
            <div className="relative mb-2">
              <Quote className="w-12 h-12 sm:w-16 sm:h-16 text-amber-400/30 rotate-180" />
            </div>

            {/* Founder Highlight Lead */}
            <h3 className="font-serif text-xl sm:text-2xl lg:text-3xl text-amber-300 font-bold leading-snug tracking-tight mb-5">
              {activeFounder.highlight}
            </h3>

            {/* Founder's Long-Form Motive Statement */}
            <p className="font-serif text-stone-200 text-base sm:text-lg lg:text-xl font-light leading-[1.7] mb-8 drop-shadow-sm">
              {activeFounder.quote}
            </p>

            {/* Roles & Credentials */}
            <div className="w-full pt-6 border-t border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <span className="font-serif text-xl sm:text-2xl font-bold text-white tracking-wide block">
                  {activeFounder.signature}
                </span>
                <span className="font-manrope text-xs text-amber-400/90 font-medium tracking-wider uppercase block mt-0.5">
                  {activeFounder.role}
                </span>
              </div>

              {/* Establishment Seal */}
              <div className="flex items-center gap-2 text-stone-400 text-xs font-manrope font-light">
                <Award className="w-4 h-4 text-amber-400" />
                <span>Ceylon Est. 2011 • Flagship Toronto</span>
              </div>
            </div>

          </div>

        </div>

        {/* ================= THE 3 PILLARS OF OUR MOTIVE ================= */}
        <div className="border-t border-white/10 pt-16 sm:pt-20">
          <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-14">
            <span className="font-manrope text-xs uppercase tracking-[0.24em] text-red-400 font-bold block mb-1.5">
              The Creed We Live By
            </span>
            <h3 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-bold text-white tracking-tight">
              Our 3 Uncompromising Pillars
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 max-w-6xl mx-auto">
            {pillars.map((pillar) => {
              const IconComp = pillar.icon;
              return (
                <div
                  key={pillar.number}
                  className="relative p-6 sm:p-8 rounded-2xl bg-white/[0.03] hover:bg-white/[0.06] border border-white/10 hover:border-amber-400/40 transition-all duration-300 group hover:-translate-y-1.5 shadow-lg backdrop-blur-sm"
                >
                  {/* Subtle Red Top Accent Glow on hover */}
                  <div className="absolute top-0 left-8 right-8 h-[2px] bg-gradient-to-r from-transparent via-amber-400/0 to-transparent group-hover:via-amber-400 transition-all duration-500" />

                  {/* Number & Icon Row */}
                  <div className="flex items-center justify-between mb-5">
                    <span className="font-serif text-2xl sm:text-3xl font-black text-amber-400/40 group-hover:text-amber-400 transition-colors">
                      {pillar.number}
                    </span>
                    <div className="w-10 h-10 rounded-full bg-red-600/15 border border-red-500/25 flex items-center justify-center text-red-400 group-hover:bg-red-600 group-hover:text-white transition-all duration-300">
                      <IconComp className="w-5 h-5" />
                    </div>
                  </div>

                  {/* Pillar Title */}
                  <h4 className="font-serif text-xl sm:text-2xl font-bold text-white tracking-wide mb-1">
                    {pillar.title}
                  </h4>
                  <span className="font-manrope text-xs text-amber-300 font-semibold tracking-wider uppercase block mb-3">
                    {pillar.subtitle}
                  </span>

                  {/* Pillar Description */}
                  <p className="font-manrope text-xs sm:text-sm text-stone-300 font-light leading-relaxed">
                    {pillar.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
