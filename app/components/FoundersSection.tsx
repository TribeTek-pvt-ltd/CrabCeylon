'use client';

import React from 'react';
import Image from 'next/image';

interface Founder {
  id: string;
  name: string;
  surname: string;
  title: string;
  honor: string;
  quote: string;
  image: string;
  signatureTrait: string;
  achievements: string[];
}

export default function FoundersSection() {
  const founders: Founder[] = [
    {
      id: 'dharshan',
      name: 'Dharshan',
      surname: 'Munidasa',
      title: 'Chef-Restaurateur & Culinary Visionary',
      honor: 'Asia’s 50 Best Restaurants • Ministry of Crab Creator',
      quote: 'A creature as magnificent as the Ceylon Mud Crab should never see the inside of a freezer. It deserves to be cooked alive, with precision and deep respect for the ingredient.',
      image: '/images/founder-dharshan.jpg',
      signatureTrait: 'The Culinary Architect',
      achievements: [
        'Created Ministry of Crab & Nihonbashi in Colombo',
        'Pioneered the strict No-Freezer Policy for Sri Lankan seafood'
      ]
    },
    {
      id: 'mahela',
      name: 'Mahela',
      surname: 'Jayawardene',
      title: 'Co-Founder & Sri Lankan Cricket Legend',
      honor: 'ICC World Twenty20 Champion • Master Strategist',
      quote: 'It began over a shared table and a simple conversation: why was Sri Lanka exporting its finest lagoon crabs across the globe, while our own people couldn’t celebrate them at home?',
      image: '/images/founder-mahela.jpg',
      signatureTrait: 'The Master Strategist',
      achievements: [
        'Over 25,000 international cricket runs for Sri Lanka',
        'Champion of sustainable Sri Lankan lagoon fishing'
      ]
    },
    {
      id: 'kumar',
      name: 'Kumar',
      surname: 'Sangakkara',
      title: 'Co-Founder & ICC Hall of Fame Icon',
      honor: 'ICC Hall of Fame • Former MCC President',
      quote: 'We wanted to build an institution that every Sri Lankan around the world could stand behind with immense pride—a culinary homecoming second to none.',
      image: '/images/founder-kumar.jpg',
      signatureTrait: 'The Cultural Ambassador',
      achievements: [
        'Second-highest run scorer in international cricket history',
        'Global cultural ambassador for Sri Lankan gastronomy'
      ]
    }
  ];

  return (
    <section
      id="ministers"
      className="py-24 sm:py-10 relative bg-[#0d0f17] text-white overflow-hidden border-t border-stone-800"
    >
      {/* Background Subtle Ambiance & Glow */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[45rem] h-[30rem] rounded-full bg-[#dc2626]/8 blur-3xl" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(220,38,38,0.1)_0%,_transparent_70%)]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 relative z-10">

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          {/* Crab Red Emblem */}
          <div className="w-12 h-9 sm:w-14 sm:h-10 mx-auto mb-4 text-[#dc2626] opacity-90">
            <svg viewBox="0 0 100 80" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
              <ellipse cx="50" cy="46" rx="20" ry="15" fill="#dc2626" />
              <path d="M42 38 Q50 32 58 38" stroke="#0d0f17" strokeWidth="2.5" strokeLinecap="round" />
              <path d="M40 46 Q50 42 60 46" stroke="#0d0f17" strokeWidth="2.5" strokeLinecap="round" />
              <path d="M34 40 C24 35 12 25 10 16 C8 8 20 10 24 20 C26 25 32 30 35 34" fill="#dc2626" />
              <path d="M66 40 C76 35 88 25 90 16 C92 8 80 10 76 20 C74 25 68 30 65 34" fill="#dc2626" />
              <circle cx="45" cy="31" r="2.5" fill="#dc2626" />
              <circle cx="55" cy="31" r="2.5" fill="#dc2626" />
            </svg>
          </div>

          <div className="font-manrope text-[11px] sm:text-xs uppercase tracking-[0.45em] text-[#ef4444] font-extrabold mb-3 flex items-center justify-center gap-3">
            <span className="w-8 h-[1px] bg-[#ef4444]/60" />
            <span>Meet The Ministers</span>
            <span className="w-8 h-[1px] bg-[#ef4444]/60" />
          </div>

          <h2 className="font-didone text-4xl sm:text-6xl lg:text-7xl font-black text-white tracking-[-0.03em] uppercase leading-tight mb-6">
            The Founders
          </h2>


        </div>

        {/* 3 Founders Interactive Portrait Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-2 sm:gap-5 ">
          {founders.map((founder) => (
            <div
              key={founder.id}
              className="group rounded-2xl overflow-hidden border border-stone-800 bg-stone-900/60 hover:border-[#dc2626]/60 hover:bg-stone-900/90 transition-all duration-500 relative flex flex-col justify-between shadow-lg hover:shadow-[0_15px_40px_rgba(220,38,38,0.2)] hover:-translate-y-1"
            >
              {/* Portrait Container */}
              <div className="relative w-full h-80 sm:h-96 overflow-hidden bg-stone-950">
                <Image
                  src={founder.image}
                  alt={`${founder.name} ${founder.surname}`}
                  fill
                  className="object-cover object-top filter contrast-[1.05] group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-stone-900 via-stone-900/30 to-transparent" />

                {/* Trait Badge */}
                <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-black/70 backdrop-blur-md border border-[#dc2626]/40">
                  <span className="font-manrope text-[10px] uppercase tracking-[0.22em] text-[#ef4444] font-bold">
                    {founder.signatureTrait}
                  </span>
                </div>
              </div>

              {/* Card Summary */}
              <div className="p-6 text-left flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="font-didone text-2xl sm:text-3xl font-black text-white uppercase tracking-tight group-hover:text-[#ef4444] transition-colors">
                    {founder.name}
                    <span className="block text-stone-400 font-light text-xl sm:text-2xl mt-0.5">
                      {founder.surname}
                    </span>
                  </h3>

                  <p className="font-manrope text-xs uppercase tracking-[0.2em] text-[#ef4444] font-semibold mt-2">
                    {founder.title}
                  </p>

                  <p className="font-serif italic text-sm text-stone-300 mt-4 line-clamp-3 leading-relaxed">
                    &ldquo;{founder.quote}&rdquo;
                  </p>
                </div>

                {/* Key Achievements Tags */}
                <div className="pt-5 mt-5 border-t border-stone-800/80 space-y-2">
                  {founder.achievements.map((achievement, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-xs text-stone-400">
                      <span className="text-[#ef4444] leading-none">✦</span>
                      <span className="font-manrope text-[11px] leading-snug">{achievement}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
