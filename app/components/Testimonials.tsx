'use client';

import React from 'react';
import { Star, Quote, Award, Sparkles, CheckCircle2 } from 'lucide-react';

export default function Testimonials() {
  const reviews = [
    {
      author: 'Jonathan Gold-Smith',
      role: 'International Gastronomy Critic, London',
      quote: 'The Ceylon Chili Crab here is pure genius. The meat has a natural, pristine sweetness you never find in farmed crustaceans. The sauce clings to the cracked claws like liquid gold.',
      rating: 5,
      dish: 'Imperial Ceylon Chili Crab (1.3kg Monster)'
    },
    {
      author: 'Chef Kenji Takahashi',
      role: 'Michelin Star Chef, Ginza Tokyo',
      quote: 'In Tokyo, Sri Lankan mud crabs are prized above all. Crab Ceylon prepares them with the utmost reverence—fresh out of the saline tanks, charred with wok breath, unforgettable.',
      rating: 5,
      dish: 'Golden Garlic Butter Mud Crab'
    },
    {
      author: 'Devinda & Natasha Senanayake',
      role: 'Patron Guests, Colombo 07',
      quote: 'We ordered delivery for our anniversary dinner. The live GPS tracker was accurate to the minute, and the thermal heated box meant the crab arrived boiling hot as if straight from the stove!',
      rating: 5,
      dish: 'The Emperor’s Seafood Tier & Jaffna Curry'
    }
  ];

  return (
    <section className="py-24 relative bg-[#faf8f5] text-[#121826] overflow-hidden border-t border-stone-200/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-stone-100 border border-[#c5a059]/40 text-xs font-semibold uppercase tracking-[0.2em] text-[#99752b] mb-4">
            <Award className="w-4 h-4 text-[#99752b]" />
            <span>Acclaimed By The World</span>
          </div>
          <h2 className="font-didone text-3xl sm:text-5xl font-black text-[#121826] tracking-tight mb-4">
            Praised by <span className="text-gold-gradient font-black">Global Epicures</span>
          </h2>
          <p className="text-stone-600 text-sm sm:text-base font-light">
            Read the verdict from world-renowned chefs, culinary critics, and devoted seafood connoisseurs.
          </p>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((rev, idx) => (
            <div
              key={idx}
              className="glass-card rounded-2xl p-8 border border-stone-200/90 flex flex-col justify-between group hover:border-[#c5a059] shadow-sm hover:shadow-xl transition-all duration-400 bg-white"
            >
              <div className="space-y-4 text-left">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1 text-amber-500">
                    {[...Array(rev.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-current" />
                    ))}
                  </div>
                  <Quote className="w-7 h-7 text-[#c5a059]/30 group-hover:text-[#c5a059]/70 transition-colors" />
                </div>

                <p className="text-stone-700 text-sm leading-relaxed italic font-light">
                  &ldquo;{rev.quote}&rdquo;
                </p>
              </div>

              <div className="pt-6 mt-6 border-t border-stone-100 text-left">
                <span className="text-[10px] uppercase font-bold text-[#99752b] block tracking-wider mb-1">
                  Ordered: {rev.dish}
                </span>
                <h4 className="font-serif font-bold text-[#121826] text-base">
                  {rev.author}
                </h4>
                <p className="text-xs text-stone-500 font-light mt-0.5">{rev.role}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Brand Accolades Ribbon */}
        <div className="mt-16 p-8 rounded-2xl bg-white border border-[#c5a059]/35 shadow-md grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          <div>
            <div className="font-didone text-3xl sm:text-4xl font-extrabold text-[#121826] mb-1">45,000+</div>
            <div className="text-xs text-stone-500 font-medium uppercase tracking-wider">Wild Lagoon Crabs Served</div>
          </div>
          <div>
            <div className="font-didone text-3xl sm:text-4xl font-extrabold text-[#99752b] mb-1">4.95 / 5.0</div>
            <div className="text-xs text-stone-500 font-medium uppercase tracking-wider">Michelin & Critic Reviews</div>
          </div>
          <div>
            <div className="font-didone text-3xl sm:text-4xl font-extrabold text-emerald-600 mb-1">100%</div>
            <div className="text-xs text-stone-500 font-medium uppercase tracking-wider">Wild-Caught Sustainable</div>
          </div>
          <div>
            <div className="font-didone text-3xl sm:text-4xl font-extrabold text-[#d33c1d] mb-1">45 Mins</div>
            <div className="text-xs text-stone-500 font-medium uppercase tracking-wider">Heated Thermal Courier</div>
          </div>
        </div>

      </div>
    </section>
  );
}
