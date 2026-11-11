'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Compass, Phone, Mail, MapPin, Clock, ShieldCheck, Send } from 'lucide-react';

interface FooterProps {
  onOpenOrderSearch: () => void;
  onOpenReservation: () => void;
}

export default function Footer({ onOpenOrderSearch, onOpenReservation }: FooterProps) {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail('');
    }
  };

  return (
    <footer className="bg-[#ffffff] text-stone-700 border-t border-red-500/20 pt-16 pb-12 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 mb-12 text-left">
          
          {/* Brand Column */}
          <div className="lg:col-span-2 space-y-4">
            <div>
              <span className="font-didone text-2xl font-black text-[#111827] tracking-[0.22em] block">
                CRAB CEYLON
              </span>
              <span className="text-[10px] uppercase tracking-[0.38em] text-[#dc2626] font-bold block mt-0.5">
                Yorkville • Toronto
              </span>
            </div>

            <p className="text-stone-600 text-xs sm:text-sm leading-relaxed max-w-sm font-light">
              Canada&apos;s premier Ceylon seafood dining institution. Wild lagoon mud crabs flown fresh from Sri Lanka to Yorkville, weighed live, and seared in twenty-one heirloom island spices.
            </p>

            <div className="pt-2 flex flex-wrap gap-2 text-[10px] uppercase tracking-[0.18em]">
              <span className="px-3 py-1.5 bg-stone-50 border border-stone-200 text-stone-700 font-medium rounded flex items-center gap-1.5 shadow-2xs">
                <ShieldCheck className="w-3.5 h-3.5 text-[#dc2626]" /> Halal Certified Catch
              </span>
              <span className="px-3 py-1.5 bg-red-50 border border-red-200 text-[#dc2626] font-medium rounded shadow-2xs">
                Wild Lagoon Sourced
              </span>
            </div>
          </div>

          {/* Dining Links */}
          <div className="space-y-3">
            <h4 className="text-[11px] font-bold uppercase tracking-[0.25em] text-[#dc2626]">
              The Restaurant
            </h4>
            <ul className="space-y-2.5 text-xs text-stone-600 font-light">
              <li>
                <Link href="/menu" className="hover:text-[#dc2626] transition-colors font-medium">
                  The Full Menu
                </Link>
              </li>
              <li>
                <a href="#menu" className="hover:text-[#dc2626] transition-colors">
                  Signature Catch
                </a>
              </li>
              <li>
                <a href="#heritage" className="hover:text-[#dc2626] transition-colors">
                  Our Lagoon Heritage
                </a>
              </li>
              <li>
                <a href="#faq" className="hover:text-[#dc2626] transition-colors">
                  Frequently Asked Questions (FAQ)
                </a>
              </li>
              <li>
                <button
                  onClick={onOpenReservation}
                  className="hover:text-[#dc2626] transition-colors text-left cursor-pointer"
                >
                  Table Reservations
                </button>
              </li>
              <li>
                <button
                  onClick={onOpenOrderSearch}
                  className="hover:text-[#dc2626] transition-colors text-left flex items-center gap-1.5 font-medium cursor-pointer"
                >
                  <Compass className="w-3.5 h-3.5 text-[#dc2626]" />
                  <span>Track Order by ID</span>
                </button>
              </li>
            </ul>
          </div>

          {/* Location & Contact */}
          <div className="space-y-3">
            <h4 className="text-[11px] font-bold uppercase tracking-[0.25em] text-[#dc2626]">
              Yorkville Flagship
            </h4>
            <ul className="space-y-2.5 text-xs text-stone-600 font-light">
              <li className="flex items-start gap-2">
                <MapPin className="w-3.5 h-3.5 text-[#dc2626] flex-shrink-0 mt-0.5" />
                <span>124 Yorkville Avenue, Toronto, ON M5R 1C2</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-[#dc2626] flex-shrink-0" />
                <a href="tel:+14169242722" className="hover:text-[#dc2626] font-medium">+1 (416) 924-CRAB</a>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-[#dc2626] flex-shrink-0" />
                <span>concierge@crabceylon.ca</span>
              </li>
              <li className="flex items-start gap-2">
                <Clock className="w-3.5 h-3.5 text-[#dc2626] flex-shrink-0 mt-0.5" />
                <span>Daily: 5:00 PM – 11:00 PM EST<br />Sat & Sun Lunch: 12:00 PM – 3:00 PM</span>
              </li>
            </ul>
          </div>

          {/* Patron Privilege Club */}
          <div className="space-y-3">
            <h4 className="text-[11px] font-bold uppercase tracking-[0.25em] text-[#dc2626]">
              Patron Club
            </h4>
            <p className="text-xs text-stone-600 font-light leading-relaxed">
              Receive confidential alerts when colossal 1.4kg+ monster crabs arrive in Toronto.
            </p>

            {subscribed ? (
              <div className="p-3 bg-red-50 border border-red-300 text-[#dc2626] text-xs rounded shadow-xs">
                Welcome to Crab Ceylon. Use privilege code <strong>CRABVIP</strong> for 15% off.
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="space-y-2">
                <div className="relative">
                  <input
                    type="email"
                    required
                    placeholder="Enter your email..."
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-3.5 py-2.5 bg-stone-50 border border-stone-300 rounded-md text-xs text-stone-800 placeholder-stone-400 focus:outline-none focus:border-[#dc2626] focus:ring-1 focus:ring-[#dc2626] shadow-xs"
                  />
                  <button
                    type="submit"
                    className="absolute right-1 top-1/2 -translate-y-1/2 p-2 text-[#dc2626] hover:text-[#b91c1c] cursor-pointer"
                  >
                    <Send className="w-3.5 h-3.5" />
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>

        {/* Bottom Legal */}
        <div className="pt-8 border-t border-stone-200 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-stone-500 font-light">
          <div>
            © 2026 Crab Ceylon Toronto. All rights reserved. 124 Yorkville Avenue, Toronto, ON.
          </div>
          <div className="flex items-center gap-6">
            <a href="#" className="hover:text-[#dc2626] transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-[#dc2626] transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-[#dc2626] transition-colors">Sustainable Fisheries</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
