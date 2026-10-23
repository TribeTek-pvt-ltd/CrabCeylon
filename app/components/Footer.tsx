'use client';

import React, { useState } from 'react';
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
    <footer className="bg-[#05070b] text-slate-300 border-t border-[#c5a059]/20 pt-16 pb-12 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 mb-12 text-left">
          {/* Brand Column */}
          <div className="lg:col-span-2 space-y-4">
            <div>
              <span className="font-serif text-2xl text-white tracking-[0.24em] block">
                CRAB CEYLON
              </span>
              <span className="text-[10px] uppercase tracking-[0.35em] text-[#c5a059] font-medium block mt-0.5">
                Yorkville • Toronto
              </span>
            </div>

            <p className="text-slate-400 text-xs sm:text-sm leading-relaxed max-w-sm font-light">
              Canada&apos;s premier Ceylon seafood dining institution. Wild lagoon mud crabs flown fresh from Sri Lanka to Yorkville, weighed live, and seared in twenty-one heirloom island spices.
            </p>

            <div className="pt-2 flex flex-wrap gap-2 text-[10px] uppercase tracking-[0.18em]">
              <span className="px-3 py-1 bg-[#0b101c] border border-white/10 text-slate-300 flex items-center gap-1.5">
                <ShieldCheck className="w-3.5 h-3.5 text-[#c5a059]" /> Halal Certified Catch
              </span>
              <span className="px-3 py-1 bg-[#0b101c] border border-white/10 text-[#f4df95]">
                Wild Lagoon Sourced
              </span>
            </div>
          </div>

          {/* Dining */}
          <div className="space-y-3">
            <h4 className="text-[11px] font-semibold uppercase tracking-[0.25em] text-[#c5a059]">
              The Restaurant
            </h4>
            <ul className="space-y-2 text-xs text-slate-400 font-light">
              <li>
                <a href="#menu" className="hover:text-white transition-colors">
                  The Catch (Menu)
                </a>
              </li>
              <li>
                <a href="#heritage" className="hover:text-white transition-colors">
                  Our Lagoon Heritage
                </a>
              </li>
              <li>
                <a href="#faq" className="hover:text-white transition-colors">
                  Frequently Asked Questions (FAQ)
                </a>
              </li>
              <li>
                <button
                  onClick={onOpenReservation}
                  className="hover:text-white transition-colors text-left"
                >
                  Table Reservations
                </button>
              </li>
              <li>
                <button
                  onClick={onOpenOrderSearch}
                  className="hover:text-[#c5a059] transition-colors text-left flex items-center gap-1.5"
                >
                  <Compass className="w-3.5 h-3.5 text-[#c5a059]" />
                  <span>Track Order by ID</span>
                </button>
              </li>
            </ul>
          </div>

          {/* Location & Contact */}
          <div className="space-y-3">
            <h4 className="text-[11px] font-semibold uppercase tracking-[0.25em] text-[#c5a059]">
              Yorkville Flagship
            </h4>
            <ul className="space-y-2 text-xs text-slate-400 font-light">
              <li className="flex items-start gap-2">
                <MapPin className="w-3.5 h-3.5 text-[#c5a059] flex-shrink-0 mt-0.5" />
                <span>124 Yorkville Avenue, Toronto, ON M5R 1C2</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-[#c5a059] flex-shrink-0" />
                <a href="tel:+14169242722" className="hover:text-white">+1 (416) 924-CRAB</a>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-[#c5a059] flex-shrink-0" />
                <span>concierge@crabceylon.ca</span>
              </li>
              <li className="flex items-start gap-2">
                <Clock className="w-3.5 h-3.5 text-[#c5a059] flex-shrink-0 mt-0.5" />
                <span>Daily: 5:00 PM – 11:00 PM EST<br />Sat & Sun Lunch: 12:00 PM – 3:00 PM</span>
              </li>
            </ul>
          </div>

          {/* Patron Privilege Club */}
          <div className="space-y-3">
            <h4 className="text-[11px] font-semibold uppercase tracking-[0.25em] text-[#c5a059]">
              Patron Club
            </h4>
            <p className="text-xs text-slate-400 font-light leading-relaxed">
              Receive confidential alerts when colossal 1.4kg+ monster crabs arrive in Toronto.
            </p>

            {subscribed ? (
              <div className="p-3 bg-[#0d1322] border border-[#c5a059]/30 text-[#f4df95] text-xs">
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
                    className="w-full px-3 py-2 bg-[#0d1322] border border-white/10 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-[#c5a059]"
                  />
                  <button
                    type="submit"
                    className="absolute right-1 top-1/2 -translate-y-1/2 p-1.5 text-[#c5a059] hover:text-white"
                  >
                    <Send className="w-3.5 h-3.5" />
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>

        {/* Bottom Legal */}
        <div className="pt-8 border-t border-white/[0.08] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500 font-light">
          <div>
            © 2026 Crab Ceylon Toronto. All rights reserved. 124 Yorkville Avenue, Toronto, ON.
          </div>
          <div className="flex items-center gap-6">
            <a href="#" className="hover:text-slate-400">Privacy Policy</a>
            <a href="#" className="hover:text-slate-400">Terms of Service</a>
            <a href="#" className="hover:text-slate-400">Sustainable Fisheries</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
