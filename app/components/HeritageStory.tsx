'use client';

import React from 'react';
import Image from 'next/image';
import { Scale, Flame, Waves, ShieldCheck } from 'lucide-react';

export default function HeritageStory() {
  return (
    <section id="heritage" className="py-24 relative bg-[#07090e] text-slate-100 overflow-hidden border-t border-white/[0.06]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Column: Refined Imagery */}
          <div className="relative">
            <div className="relative w-full h-[380px] sm:h-[460px] overflow-hidden border border-[#c5a059]/30">
              <Image
                src="/images/jaffna-crab-curry.jpg"
                alt="Authentic Ceylon Claypot Crab Curry in Yorkville Toronto"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#07090e] via-transparent to-transparent opacity-85" />

              <div className="absolute bottom-6 left-6 right-6 p-5 bg-[#090d16]/90 backdrop-blur-md border border-white/10 text-left">
                <span className="text-[10px] uppercase tracking-[0.25em] text-[#c5a059] font-medium block mb-1">
                  Heirloom Culinary Artistry
                </span>
                <p className="text-sm font-serif text-white font-normal leading-relaxed">
                  &ldquo;A recipe perfected across five generations of northern Ceylon crab masters, simmering in stone-milled spices and freshly pressed coconut cream.&rdquo;
                </p>
              </div>
            </div>

            {/* Inset Plate Photo */}
            <div className="hidden sm:block absolute -bottom-6 -right-6 w-56 h-56 overflow-hidden border border-[#c5a059]/50 shadow-2xl">
              <Image
                src="/images/black-pepper-crab.jpg"
                alt="Cast Iron Black Pepper Crab"
                fill
                className="object-cover"
              />
            </div>
          </div>

          {/* Right Column: Editorial Narrative */}
          <div className="space-y-6 text-left">
            <div className="inline-flex items-center gap-3">
              <span className="w-6 h-[1px] bg-[#c5a059]" />
              <span className="text-[10px] uppercase tracking-[0.35em] text-[#c5a059] font-medium">
                The Heritage & Origin
              </span>
            </div>

            <h2 className="text-3xl sm:text-5xl font-serif font-normal text-white tracking-tight leading-tight">
              From Ceylon&apos;s Wild Lagoons to Yorkville, Toronto
            </h2>

            <p className="text-slate-300 text-sm sm:text-base leading-relaxed font-light">
              Revered by culinary critics across Tokyo, Singapore, and London, the giant Sri Lankan mud crab (<em>Scylla serrata</em>) is celebrated as the sweet crown jewel of all crustaceans.
            </p>

            <p className="text-slate-400 text-xs sm:text-sm leading-relaxed font-light">
              Wild-caught by artisanal fishermen in the tranquil mangrove lagoons of Negombo and Batticaloa, these crabs thrive in pristine brackish waters, resulting in meat of extraordinary natural sweetness and colossal, tender claws. Flown weekly to Toronto and housed in our custom 18°C saline tanks, they arrive at your table as fresh as on the coast of the Indian Ocean.
            </p>

            {/* 4 Pillars Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
              <div className="p-4 bg-[#0a0f1a] border border-white/[0.08]">
                <div className="flex items-center gap-2 mb-2 text-[#c5a059]">
                  <Waves className="w-4 h-4" />
                  <h4 className="text-xs uppercase tracking-[0.2em] font-medium text-white">
                    Wild Lagoon Sourced
                  </h4>
                </div>
                <p className="text-[11px] text-slate-400 font-light leading-relaxed">
                  Zero farm feed. 100% wild lagoon-caught using heritage methods in Sri Lanka.
                </p>
              </div>

              <div className="p-4 bg-[#0a0f1a] border border-white/[0.08]">
                <div className="flex items-center gap-2 mb-2 text-[#c5a059]">
                  <Scale className="w-4 h-4" />
                  <h4 className="text-xs uppercase tracking-[0.2em] font-medium text-white">
                    Live Weighing Protocol
                  </h4>
                </div>
                <p className="text-[11px] text-slate-400 font-light leading-relaxed">
                  Every crab is weighed live on precision digital scales before the wok flame is lit.
                </p>
              </div>

              <div className="p-4 bg-[#0a0f1a] border border-white/[0.08]">
                <div className="flex items-center gap-2 mb-2 text-[#c5a059]">
                  <Flame className="w-4 h-4" />
                  <h4 className="text-xs uppercase tracking-[0.2em] font-medium text-white">
                    21 Heirloom Spices
                  </h4>
                </div>
                <p className="text-[11px] text-slate-400 font-light leading-relaxed">
                  Hand-pounded Ceylon cinnamon quills, Tellicherry black peppercorns, and roasted coconut.
                </p>
              </div>

              <div className="p-4 bg-[#0a0f1a] border border-white/[0.08]">
                <div className="flex items-center gap-2 mb-2 text-[#c5a059]">
                  <ShieldCheck className="w-4 h-4" />
                  <h4 className="text-xs uppercase tracking-[0.2em] font-medium text-white">
                    Toronto Heated Courier
                  </h4>
                </div>
                <p className="text-[11px] text-slate-400 font-light leading-relaxed">
                  Dispatched in temperature-locked 68°C thermal capsules across Toronto and GTA.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
