'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { X, Sparkles, Music, Wine, Users, UtensilsCrossed, ArrowRight } from 'lucide-react';

export default function HeritageStory() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Close modal on Escape key press
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setIsModalOpen(false);
    };
    if (isModalOpen) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [isModalOpen]);

  return (
    <section
      id="heritage"
      className="py-20 sm:py-28 lg:py-32 relative bg-[#ffffff] text-[#111827] overflow-hidden border-t border-stone-100"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 relative z-10">
        
        {/* Main 2-Column Story Grid: Exactly matching the reference photo */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center max-w-6xl mx-auto">
          
          {/* ================= LEFT COLUMN: DUAL STAGGERED VERTICAL PHOTOGRAPHS ================= */}
          <div className="lg:col-span-6 flex justify-center lg:justify-start items-start gap-4 sm:gap-6">
            
            {/* Image 1: Intimate Dining Room Interior (Top-aligned) */}
            <div className="relative w-40 sm:w-52 md:w-60 lg:w-[250px] aspect-[9/16] overflow-hidden rounded-xs sm:rounded-sm shadow-[0_12px_32px_rgba(0,0,0,0.14)] bg-stone-100 group">
              <Image
                src="/images/story/story-interior-hd.jpg"
                alt="Tilapiya Colombo Intimate Dining Hall and Warm Ambient Lighting"
                fill
                sizes="(max-width: 640px) 160px, (max-width: 768px) 210px, (max-width: 1024px) 240px, 260px"
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                priority
              />
              <div className="absolute inset-0 ring-1 ring-black/5 pointer-events-none" />
            </div>

            {/* Image 2: Signature Platter with Conch Shell (Staggered Downwards) */}
            <div className="relative w-40 sm:w-52 md:w-60 lg:w-[250px] aspect-[9/16] overflow-hidden rounded-xs sm:rounded-sm shadow-[0_12px_32px_rgba(0,0,0,0.14)] bg-stone-100 mt-10 sm:mt-14 lg:mt-16 group">
              <Image
                src="/images/story/story-dish-hd.jpg"
                alt="Tilapiya Colombo Signature Conch Shell Seafood Delicacy"
                fill
                sizes="(max-width: 640px) 160px, (max-width: 768px) 210px, (max-width: 1024px) 240px, 260px"
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                priority
              />
              <div className="absolute inset-0 ring-1 ring-black/5 pointer-events-none" />
            </div>

          </div>

          {/* ================= RIGHT COLUMN: EDITORIAL STORY & CTA BUTTON ================= */}
          <div className="lg:col-span-6 flex flex-col items-start text-left lg:pl-4">
            
            {/* Category / Eyebrow: Exact Teal Styling */}
            <span className="font-montserrat font-medium text-base sm:text-lg text-[#00577f] tracking-normal mb-1">
              Discover
            </span>

            {/* Main Title: Monumental All-Caps Serif */}
            <h2 className="font-serif font-black text-3xl sm:text-4xl md:text-5xl lg:text-[52px] text-[#111827] tracking-tight uppercase leading-[1.08] mb-6">
              OUR STORY
            </h2>

            {/* Paragraph 1: Exactly matches reference photo copy */}
            <p className="font-montserrat text-stone-700 text-sm sm:text-[15px] leading-[1.78] mb-5 font-normal">
              We offer absolutely free BYOB, private dining rooms with karaoke, customized events, an &ldquo;All You Can Eat&rdquo; menu, buffet, and live music featuring a band every day of the week.
            </p>

            {/* Paragraph 2: Exactly matches reference photo copy */}
            <p className="font-montserrat text-stone-700 text-sm sm:text-[15px] leading-[1.78] mb-8 font-normal">
              Tilapiya Colombo is the manifestation of our vision to offer you an indulgent escape in the midst of the hustle and bustle of the city. We&rsquo;re all about building a fraternity of like-minded patrons who appreciate a great meal in good company. This is made possible through the soul-soothing delicacies we offer in a setting our haven. Take a plunge and explore the many surprises we have lined up for you...
            </p>

            {/* CTA Button: Solid Deep Ocean Teal Rectangular Button */}
            <button
              onClick={() => setIsModalOpen(true)}
              className="inline-flex items-center justify-center px-7 py-3.5 sm:px-8 sm:py-4 bg-[#00577f] hover:bg-[#004667] active:bg-[#003752] text-white text-xs sm:text-[13px] font-bold tracking-[0.14em] uppercase transition-all duration-200 cursor-pointer shadow-sm hover:shadow-md rounded-xs group"
            >
              <span>READ OUR FULL STORY</span>
              <ArrowRight className="w-4 h-4 ml-2.5 transition-transform duration-200 group-hover:translate-x-1" />
            </button>

          </div>

        </div>

      </div>

      {/* ================= INTERACTIVE FULL STORY & HERITAGE MODAL ================= */}
      {isModalOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200"
          onClick={() => setIsModalOpen(false)}
        >
          <div
            className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto bg-white rounded-lg shadow-2xl border border-stone-200 p-6 sm:p-10 text-left"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Close Button */}
            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute top-5 right-5 p-2 rounded-full text-stone-400 hover:text-stone-800 hover:bg-stone-100 transition-colors cursor-pointer"
              aria-label="Close story dialog"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Modal Header */}
            <div className="mb-6">
              <span className="font-montserrat text-xs uppercase tracking-[0.25em] font-bold text-[#00577f]">
                The Full Chronicle
              </span>
              <h3 className="font-serif text-3xl sm:text-4xl font-black text-[#111827] mt-1 tracking-tight">
                Our Story &amp; Sanctuary
              </h3>
              <p className="font-montserrat text-stone-600 text-sm mt-2 leading-relaxed">
                An escape crafted in the midst of Colombo, celebrating convivial dining, soul-soothing seafood, and heartfelt hospitality.
              </p>
            </div>

            {/* Visual Thumbnail Strip */}
            <div className="grid grid-cols-2 gap-4 mb-8">
              <div className="relative h-44 rounded-md overflow-hidden shadow-sm">
                <Image
                  src="/images/story/story-interior-hd.jpg"
                  alt="Interior ambiance"
                  fill
                  className="object-cover"
                />
                <div className="absolute bottom-2 left-2 px-2.5 py-1 rounded bg-black/60 backdrop-blur-xs text-white text-[11px] font-medium">
                  Private Dining &amp; Lounge
                </div>
              </div>
              <div className="relative h-44 rounded-md overflow-hidden shadow-sm">
                <Image
                  src="/images/story/story-dish-hd.jpg"
                  alt="Signature conch platter"
                  fill
                  className="object-cover"
                />
                <div className="absolute bottom-2 left-2 px-2.5 py-1 rounded bg-black/60 backdrop-blur-xs text-white text-[11px] font-medium">
                  Signature Seafood Delicacies
                </div>
              </div>
            </div>

            {/* Feature Highlights Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              
              <div className="p-4 rounded-md bg-stone-50 border border-stone-200/70">
                <div className="flex items-center gap-2.5 mb-2 text-[#00577f]">
                  <Wine className="w-5 h-5" />
                  <h4 className="font-sans font-bold text-sm text-[#111827]">
                    100% Free BYOB Policy
                  </h4>
                </div>
                <p className="text-xs text-stone-600 leading-relaxed font-light">
                  Bring your favorite vintages and spirits with zero corkage fees. Complete ice buckets, glassware, and pairing condiments provided complimentary.
                </p>
              </div>

              <div className="p-4 rounded-md bg-stone-50 border border-stone-200/70">
                <div className="flex items-center gap-2.5 mb-2 text-[#00577f]">
                  <Users className="w-5 h-5" />
                  <h4 className="font-sans font-bold text-sm text-[#111827]">
                    Private Karaoke Dining Suites
                  </h4>
                </div>
                <p className="text-xs text-stone-600 leading-relaxed font-light">
                  Secluded sound-insulated private suites tailored for corporate celebrations, birthdays, and family gatherings with dedicated banquet staff.
                </p>
              </div>

              <div className="p-4 rounded-md bg-stone-50 border border-stone-200/70">
                <div className="flex items-center gap-2.5 mb-2 text-[#00577f]">
                  <Music className="w-5 h-5" />
                  <h4 className="font-sans font-bold text-sm text-[#111827]">
                    Live Band Every Night
                  </h4>
                </div>
                <p className="text-xs text-stone-600 leading-relaxed font-light">
                  Acoustic and live band performances 7 days a week, filling the evening with rhythm, relaxation, and celebratory warmth.
                </p>
              </div>

              <div className="p-4 rounded-md bg-stone-50 border border-stone-200/70">
                <div className="flex items-center gap-2.5 mb-2 text-[#00577f]">
                  <UtensilsCrossed className="w-5 h-5" />
                  <h4 className="font-sans font-bold text-sm text-[#111827]">
                    All You Can Eat &amp; Lagoon Catch
                  </h4>
                </div>
                <p className="text-xs text-stone-600 leading-relaxed font-light">
                  An extravagant seafood spread paired with live-weighed lagoon mud crabs seared in 21 secret heirloom spices and fresh coconut nectar.
                </p>
              </div>

            </div>

            {/* Modal Footer / Actions */}
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-stone-200">
              <span className="text-xs text-stone-500 font-medium">
                Reserve your table or private dining suite today.
              </span>
              <div className="flex items-center gap-3 w-full sm:w-auto">
                <button
                  onClick={() => setIsModalOpen(false)}
                  className="w-full sm:w-auto px-5 py-2.5 text-xs uppercase tracking-wider font-semibold text-stone-600 hover:text-stone-900 border border-stone-300 hover:border-stone-400 rounded-xs transition-colors cursor-pointer"
                >
                  Close
                </button>
                <a
                  href="#reservation"
                  onClick={() => setIsModalOpen(false)}
                  className="w-full sm:w-auto px-6 py-2.5 text-xs uppercase tracking-wider font-bold bg-[#00577f] hover:bg-[#004667] text-white rounded-xs transition-colors text-center cursor-pointer"
                >
                  Book Private Suite
                </a>
              </div>
            </div>

          </div>
        </div>
      )}

    </section>
  );
}
