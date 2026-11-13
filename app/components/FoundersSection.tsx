'use client';

import React from 'react';
import Image from 'next/image';

interface Director {
  id: string;
  name: string;
  role: string;
  image: string;
}

export default function FoundersSection() {
  const directors: Director[] = [
    {
      id: 'omar',
      name: 'Omar Mehri',
      role: 'Designation',
      image: '/images/directors/director_omar.webp'
    },
    {
      id: 'layla',
      name: 'Layla Samuel',
      role: 'Designation',
      image: '/images/directors/director_layla.webp'
    },
    {
      id: 'draper',
      name: 'Draper Timothy',
      role: 'Designation',
      image: '/images/directors/director_draper.webp'
    },
    {
      id: 'mariam',
      name: 'Mariam shah',
      role: 'Designation',
      image: '/images/directors/director_mariam.webp'
    }
  ];

  return (
    <section
      id="ministers"
      className="py-16 sm:py-24 relative bg-[#ffffff] text-[#111827] overflow-hidden border-t border-stone-100"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Title: Matches exact reference photo */}
        <div className="text-center max-w-4xl mx-auto mb-12 sm:mb-16">
          <h2 className="font-sans text-3xl sm:text-4xl md:text-5xl font-bold text-[#111827] tracking-tight">
            Board Of Directors
          </h2>
        </div>

        {/* 4 Cards Grid: Exact visual replication */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-7 lg:gap-8 max-w-6xl mx-auto justify-items-center">
          {directors.map((director) => (
            <div
              key={director.id}
              className="group relative w-full max-w-[260px] h-[390px] select-none rounded-tl-[44px] overflow-hidden cursor-pointer transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_20px_35px_rgba(220,38,38,0.18)]"
            >
              {/* Signature Red Arch Backdrop (Left ~54% width) */}
              <div className="absolute left-0 top-0 bottom-0 w-[54%] bg-[#dc2626] rounded-tl-[44px] overflow-hidden">
                {/* Vertical Large Translucent Watermark Text ("Directors" running upwards) */}
                <div className="absolute top-8 left-1.5 flex items-center justify-center pointer-events-none select-none z-0">
                  <span className="font-sans font-black text-4xl text-white/20 uppercase tracking-[0.25em] [writing-mode:vertical-rl] rotate-180">
                    Directors
                  </span>
                </div>
              </div>

              {/* Director Cutout Portrait (Sitting above red arch & extending into white) */}
              <div className="absolute inset-x-0 bottom-0 top-2 z-10 flex items-end justify-center pointer-events-none">
                <div className="relative w-full h-full">
                  <Image
                    src={director.image}
                    alt={director.name}
                    fill
                    sizes="(max-width: 640px) 260px, (max-width: 1024px) 240px, 260px"
                    className="object-contain object-bottom scale-105 origin-bottom drop-shadow-[0_12px_18px_rgba(0,0,0,0.22)] transition-transform duration-500 group-hover:scale-110"
                    priority
                  />
                </div>
              </div>

              {/* Bottom Red Banner & Typography */}
              <div className="absolute bottom-0 inset-x-0 pt-16 pb-4 px-4 z-20">
                {/* Smooth Red Gradient Overlay at the base */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#dc2626] from-35% via-[#dc2626]/90 to-transparent pointer-events-none" />

                {/* Subtle Curved Accent Notch in bottom-right corner */}
                <div className="absolute bottom-0 right-0 w-11 h-4 bg-white/25 rounded-tl-xl pointer-events-none" />

                {/* Text Content */}
                <div className="relative z-10 text-left">
                  <h3 className="font-sans text-lg sm:text-xl font-bold text-white tracking-tight leading-snug">
                    {director.name}
                  </h3>
                  <p className="font-sans text-xs text-white/80 font-normal mt-0.5">
                    {director.role}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
