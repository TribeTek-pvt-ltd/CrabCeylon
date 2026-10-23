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
    <section className="py-24 relative bg-[#070b13] text-slate-100 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#101726] border border-[#d4af37]/30 text-xs font-semibold uppercase tracking-[0.2em] text-amber-300 mb-4">
            <Award className="w-3.5 h-3.5 text-[#d4af37]" />
            Acclaimed By The World
          </div>
          <h2 className="text-3xl sm:text-5xl font-serif font-bold text-white tracking-tight mb-4">
            Praised by <span className="text-gold-gradient">Global Epicures</span>
          </h2>
          <p className="text-slate-400 text-sm">
            Read the verdict from world-renowned chefs, culinary critics, and devoted seafood lovers.
          </p>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {reviews.map((rev, idx) => (
            <div
              key={idx}
              className="glass-card rounded-3xl p-7 border border-white/10 flex flex-col justify-between relative group hover:border-[#d4af37]/40"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1 text-amber-400">
                    {[...Array(rev.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-current" />
                    ))}
                  </div>
                  <Quote className="w-6 h-6 text-[#d4af37]/30" />
                </div>

                <p className="text-slate-300 text-sm leading-relaxed italic">
                  &ldquo;{rev.quote}&rdquo;
                </p>
              </div>

              <div className="pt-6 mt-6 border-t border-white/10">
                <span className="text-[10px] uppercase font-bold text-[#f5df88] block tracking-wider mb-1">
                  Ordered: {rev.dish}
                </span>
                <h4 className="font-serif font-bold text-white text-base">
                  {rev.author}
                </h4>
                <p className="text-xs text-slate-400">{rev.role}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Brand Accolades Ribbon */}
        <div className="mt-16 p-6 rounded-2xl bg-[#0c1322] border border-[#d4af37]/30 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          <div>
            <div className="font-serif text-3xl font-bold text-white mb-1">45,000+</div>
            <div className="text-xs text-slate-400">Wild Lagoon Crabs Served</div>
          </div>
          <div>
            <div className="font-serif text-3xl font-bold text-[#f5df88] mb-1">4.95 / 5.0</div>
            <div className="text-xs text-slate-400">TripAdvisor & Google Critics</div>
          </div>
          <div>
            <div className="font-serif text-3xl font-bold text-emerald-400 mb-1">100%</div>
            <div className="text-xs text-slate-400">Wild-Caught Sustainable</div>
          </div>
          <div>
            <div className="font-serif text-3xl font-bold text-[#e04b2b] mb-1">45 Mins</div>
            <div className="text-xs text-slate-400">Thermal Heated Delivery</div>
          </div>
        </div>
      </div>
    </section>
  );
}
