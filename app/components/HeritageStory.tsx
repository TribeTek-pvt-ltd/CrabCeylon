'use client';

import React from 'react';
import Image from 'next/image';
import { Scale, Flame, Waves, ShieldCheck } from 'lucide-react';

export default function HeritageStory() {
  return (
    <section id="heritage" className="py-24 relative bg-[#f6f2ea] text-[#121826] overflow-hidden border-t border-stone-200/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Refined Editorial Visuals */}
          <div className="relative">
            <div className="relative w-full h-[400px] sm:h-[480px] rounded-2xl overflow-hidden border border-[#c5a059]/40 shadow-xl">
              <Image
                src="/images/jaffna-crab-curry.jpg"
                alt="Authentic Ceylon Claypot Crab Curry in Yorkville Toronto"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-75" />

              <div className="absolute bottom-6 left-6 right-6 p-6 rounded-xl bg-white/95 backdrop-blur-md border border-[#c5a059]/30 text-left shadow-lg">
                <span className="text-[10px] uppercase tracking-[0.25em] text-[#99752b] font-bold block mb-1.5">
                  Heirloom Culinary Artistry
                </span>
                <p className="text-sm font-serif text-[#121826] font-medium leading-relaxed italic">
                  &ldquo;A recipe perfected across five generations of northern Ceylon crab masters, simmering in stone-milled spices and freshly pressed coconut cream.&rdquo;
                </p>
              </div>
            </div>

            {/* Inset Plate Photo */}
            <div className="hidden sm:block absolute -bottom-6 -right-6 w-56 h-56 rounded-xl overflow-hidden border-2 border-[#c5a059] shadow-2xl">
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
              <span className="w-8 h-[1.5px] bg-[#c5a059]" />
              <span className="text-[11px] uppercase tracking-[0.35em] text-[#99752b] font-bold">
                The Heritage & Origin
              </span>
            </div>

            <h2 className="font-didone text-3xl sm:text-5xl font-black text-[#121826] tracking-tight leading-tight">
              From Ceylon&apos;s Wild Lagoons to Yorkville, Toronto
            </h2>

            <p className="text-stone-700 text-sm sm:text-base leading-relaxed font-light">
              Revered by culinary critics across Tokyo, Singapore, and London, the giant Sri Lankan mud crab (<em>Scylla serrata</em>) is celebrated worldwide as the undisputed crown jewel of all crustaceans.
            </p>

            <p className="text-stone-600 text-xs sm:text-sm leading-relaxed font-light">
              Wild-caught by artisanal fishermen in the serene brackish mangrove estuaries of Negombo and Batticaloa, these crabs thrive on a pristine natural diet. Flown weekly to Toronto and housed in our custom 18°C saline tanks, they arrive at your table as fresh and sweet as on the shores of the Indian Ocean.
            </p>

            {/* 4 Pillars Grid on White Luxury Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
              <div className="p-5 rounded-xl bg-white border border-stone-200/90 shadow-xs hover:border-[#c5a059] transition-all">
                <div className="flex items-center gap-2.5 mb-2 text-[#99752b]">
                  <Waves className="w-4 h-4 stroke-[2]" />
                  <h4 className="text-xs uppercase tracking-[0.2em] font-bold text-[#121826]">
                    Wild Lagoon Sourced
                  </h4>
                </div>
                <p className="text-xs text-stone-600 font-light leading-relaxed">
                  Zero farm feed. 100% wild lagoon-caught using heritage methods in Sri Lanka.
                </p>
              </div>

              <div className="p-5 rounded-xl bg-white border border-stone-200/90 shadow-xs hover:border-[#c5a059] transition-all">
                <div className="flex items-center gap-2.5 mb-2 text-[#99752b]">
                  <Scale className="w-4 h-4 stroke-[2]" />
                  <h4 className="text-xs uppercase tracking-[0.2em] font-bold text-[#121826]">
                    Live Weighing Protocol
                  </h4>
                </div>
                <p className="text-xs text-stone-600 font-light leading-relaxed">
                  Every crab is weighed live on precision digital scales before the wok flame is lit.
                </p>
              </div>

              <div className="p-5 rounded-xl bg-white border border-stone-200/90 shadow-xs hover:border-[#c5a059] transition-all">
                <div className="flex items-center gap-2.5 mb-2 text-[#99752b]">
                  <Flame className="w-4 h-4 stroke-[2] text-[#d33c1d]" />
                  <h4 className="text-xs uppercase tracking-[0.2em] font-bold text-[#121826]">
                    21 Heirloom Spices
                  </h4>
                </div>
                <p className="text-xs text-stone-600 font-light leading-relaxed">
                  Hand-pounded Ceylon cinnamon quills, Tellicherry black peppercorns, and roasted island coconut.
                </p>
              </div>

              <div className="p-5 rounded-xl bg-white border border-stone-200/90 shadow-xs hover:border-[#c5a059] transition-all">
                <div className="flex items-center gap-2.5 mb-2 text-[#99752b]">
                  <ShieldCheck className="w-4 h-4 stroke-[2]" />
                  <h4 className="text-xs uppercase tracking-[0.2em] font-bold text-[#121826]">
                    Toronto Heated Courier
                  </h4>
                </div>
                <p className="text-xs text-stone-600 font-light leading-relaxed">
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
