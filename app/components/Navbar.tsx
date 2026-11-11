'use client';

import React, { useState, useEffect } from 'react';
import { ShoppingBag, Compass, Menu, X, Phone, ArrowUpRight, Sparkles, Scale } from 'lucide-react';

interface NavbarProps {
  cartCount: number;
  cartTotal: number;
  onOpenCart: () => void;
  onOpenTracking: () => void;
  onOpenReservation: () => void;
  onOpenOrderSearch: () => void;
}

export default function Navbar({
  cartCount,
  cartTotal,
  onOpenCart,
  onOpenTracking,
  onOpenReservation,
  onOpenOrderSearch
}: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* Top Animated Marquee Ticker
      <div className="fixed top-0 left-0 right-0 z-50 bg-[#121826] text-[#f4df95] text-[10px] uppercase tracking-[0.25em] font-medium py-1.5 overflow-hidden border-b border-[#c5a059]/30">
        <div className="animate-marquee whitespace-nowrap flex items-center gap-8">
          <span className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
            Live Saline Tanks Active in Yorkville
          </span>
          <span className="text-[#c5a059]">✦</span>
          <span>Flown Direct from Sri Lanka Mangrove Lagoons</span>
          <span className="text-[#c5a059]">✦</span>
          <span>Weighed Live at Your Table</span>
          <span className="text-[#c5a059]">✦</span>
          <span>45-Min Heated Thermal Courier Across Toronto & GTA</span>
          <span className="text-[#c5a059]">✦</span>
          <span>100% Halal Certified Wild Catch</span>
          <span className="text-[#c5a059]">✦</span>
          <span className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
            Live Saline Tanks Active in Yorkville
          </span>
          <span className="text-[#c5a059]">✦</span>
          <span>Flown Direct from Sri Lanka Mangrove Lagoons</span>
          <span className="text-[#c5a059]">✦</span>
          <span>Weighed Live at Your Table</span>
          <span className="text-[#c5a059]">✦</span>
          <span>45-Min Heated Thermal Courier Across Toronto & GTA</span>
          <span className="text-[#c5a059]">✦</span>
          <span>100% Halal Certified Wild Catch</span>
        </div>
      </div> */}

      <header
        className={`fixed left-0 right-0 z-40 transition-all duration-500 ${isScrolled
          ? 'bg-white/95 backdrop-blur-md border-b border-[#c5a059]/25 shadow-[0_10px_30px_rgba(0,0,0,0.06)] py-3.5'
          : 'bg-black/40 backdrop-blur-md border-b border-white/10 py-4'
          }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
          <div className="flex items-center justify-between">
            {/* Left Nav Links */}
            <nav
              className={`hidden lg:flex items-center gap-8 text-[12px] uppercase tracking-[0.24em] font-medium transition-colors ${isScrolled ? 'text-stone-700' : 'text-stone-200'
                }`}
            >
              <a
                href="#menu"
                className={`transition-colors py-1 relative group ${isScrolled ? 'hover:text-[#99752b]' : 'hover:text-[#f1b01d]'
                  }`}
              >
                The Catch
                <span className="absolute bottom-0 left-0 w-0 h-[1.5px] bg-[#f1b01d] transition-all duration-300 group-hover:w-full" />
              </a>
              <a
                href="#heritage"
                className={`transition-colors py-1 relative group ${isScrolled ? 'hover:text-[#99752b]' : 'hover:text-[#f1b01d]'
                  }`}
              >
                Our Heritage
                <span className="absolute bottom-0 left-0 w-0 h-[1.5px] bg-[#f1b01d] transition-all duration-300 group-hover:w-full" />
              </a>
              <a
                href="#ministers"
                className={`transition-colors py-1 relative group ${isScrolled ? 'hover:text-[#99752b]' : 'hover:text-[#f1b01d]'
                  }`}
              >
                The Ministers
                <span className="absolute bottom-0 left-0 w-0 h-[1.5px] bg-[#f1b01d] transition-all duration-300 group-hover:w-full" />
              </a>
              {/* <button
                onClick={onOpenReservation}
                className={`transition-colors py-1 relative group cursor-pointer ${isScrolled ? 'hover:text-[#99752b]' : 'hover:text-[#f1b01d]'
                  }`}
              >
                Reservations
                <span className="absolute bottom-0 left-0 w-0 h-[1.5px] bg-[#f1b01d] transition-all duration-300 group-hover:w-full" />
              </button> */}
            </nav>

            {/* Center Brand Identity with Didone Luxury Wordmark */}
            <a href="#" className="flex flex-col items-center text-center group py-1">
              <span
                className={`font-didone text-2xl sm:text-3xl font-extrabold tracking-[0.22em] transition-colors ${isScrolled ? 'text-[#121826] group-hover:text-[#99752b]' : 'text-white group-hover:text-[#f1b01d]'
                  }`}
              >
                CRAB CEYLON
              </span>
              <span
                className={`text-[9px] uppercase tracking-[0.42em] font-semibold mt-0.5 transition-colors ${isScrolled ? 'text-[#99752b]' : 'text-[#f1b01d]'
                  }`}
              >
                Yorkville • Toronto
              </span>
            </a>

            {/* Right Nav Actions */}
            <div className="flex items-center gap-3 sm:gap-5">
              {/* Track Order Button */}
              <button
                onClick={onOpenOrderSearch}
                className={`hidden sm:flex items-center gap-1.5 text-[11px] uppercase tracking-[0.22em] transition-colors cursor-pointer py-1 font-medium ${isScrolled ? 'text-stone-700 hover:text-[#99752b]' : 'text-stone-300 hover:text-[#f1b01d]'
                  }`}
              >
                <Compass className={`w-3.5 h-3.5 ${isScrolled ? 'text-[#99752b]' : 'text-[#f1b01d]'}`} />
                <span>Track Order</span>
              </button>

              {/* Table Booking Button */}
              <button
                onClick={onOpenReservation}
                className={`hidden md:inline-flex items-center gap-1 text-[11px] uppercase tracking-[0.2em] px-4 py-2 border transition-all font-semibold cursor-pointer shadow-xs ${isScrolled
                  ? 'border-[#c5a059] text-[#99752b] hover:bg-[#c5a059] hover:text-white'
                  : 'border-[#f1b01d] text-[#f1b01d] hover:bg-[#f1b01d] hover:text-[#121826]'
                  }`}
              >
                <span>Book Table</span>
                <ArrowUpRight className="w-3 h-3 text-current" />
              </button>

              {/* Cart Drawer Trigger */}
              <button
                onClick={onOpenCart}
                id="cart-button"
                className="flex items-center gap-2.5 px-4 py-2 bg-[#121826] hover:bg-[#232d42] text-white transition-all cursor-pointer group shadow-sm hover:shadow-md border border-white/10"
              >
                <ShoppingBag className="w-4 h-4 text-[#f1b01d] group-hover:scale-110 transition-transform" />
                <span className="text-[11px] uppercase tracking-[0.18em] font-medium hidden sm:inline text-white">
                  Order Bag
                </span>
                <span className="font-mono text-xs font-semibold text-[#121826] bg-[#f1b01d] px-2 py-0.5 rounded-full">
                  {cartCount}
                </span>
              </button>

              {/* Mobile Menu Hamburger */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className={`lg:hidden p-2 transition-colors ${isScrolled ? 'text-stone-800 hover:text-[#99752b]' : 'text-white hover:text-[#f1b01d]'
                  }`}
                aria-label="Toggle navigation menu"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Navigation */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 lg:hidden bg-white/98 backdrop-blur-2xl pt-28 px-6 flex flex-col justify-between pb-10 animate-in fade-in duration-300">
          <div className="space-y-6 pt-4 text-center">
            <div className="border-b border-stone-200 pb-6">
              <span className="font-didone text-2xl font-bold tracking-[0.25em] text-[#121826] block">
                CRAB CEYLON
              </span>
              <span className="text-[10px] uppercase tracking-[0.35em] text-[#99752b] font-medium mt-1 block">
                124 Yorkville Avenue, Toronto
              </span>
            </div>

            <nav className="flex flex-col gap-5 text-sm uppercase tracking-[0.25em] text-stone-800 font-medium">
              <a
                href="#menu"
                onClick={() => setMobileMenuOpen(false)}
                className="hover:text-[#99752b] py-1"
              >
                The Catch (Menu)
              </a>
              <a
                href="#heritage"
                onClick={() => setMobileMenuOpen(false)}
                className="hover:text-[#99752b] py-1"
              >
                Our Heritage
              </a>
              <a
                href="#ministers"
                onClick={() => setMobileMenuOpen(false)}
                className="hover:text-[#99752b] py-1"
              >
                The Ministers (Founders)
              </a>
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenReservation();
                }}
                className="hover:text-[#99752b] py-1 uppercase tracking-[0.25em]"
              >
                Reservations
              </button>
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenOrderSearch();
                }}
                className="hover:text-[#99752b] py-1 uppercase tracking-[0.25em] text-[#99752b]"
              >
                Track Order Status
              </button>
            </nav>
          </div>

          <div className="space-y-3">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenReservation();
              }}
              className="w-full py-3.5 bg-[#c5a059] text-white uppercase tracking-[0.2em] text-xs font-semibold shadow-md"
            >
              Reserve an Ocean Table
            </button>
            <a
              href="tel:+14169242722"
              className="w-full py-3 bg-stone-100 text-stone-800 uppercase tracking-[0.18em] text-[11px] flex items-center justify-center gap-2 border border-stone-200"
            >
              <Phone className="w-3.5 h-3.5 text-[#99752b]" />
              Concierge: +1 (416) 924-CRAB
            </a>
          </div>
        </div>
      )}
    </>
  );
}
