'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
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
        className={`fixed left-0 right-0 z-40 transition-all duration-300 ${isScrolled
          ? 'bg-white/95 backdrop-blur-md border-b border-red-600/15 shadow-[0_4px_20px_rgba(0,0,0,0.06)] py-2'
          : 'bg-black/40 backdrop-blur-md border-b border-white/10 py-4'
          }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
          <div className="flex items-center justify-between">
            {/* Left Nav Links */}
            <nav
              className={`hidden lg:flex items-center gap-6 text-[11px] uppercase tracking-[0.22em] font-medium transition-colors ${isScrolled ? 'text-stone-700' : 'text-stone-200'
                }`}
            >
              <Link
                href="/#menu"
                className={`transition-colors py-0.5 relative group ${isScrolled ? 'hover:text-[#dc2626]' : 'hover:text-[#ef4444]'
                  }`}
              >
                The Catch
                <span className="absolute bottom-0 left-0 w-0 h-[1.5px] bg-[#dc2626] transition-all duration-300 group-hover:w-full" />
              </Link>
              <Link
                href="/menu"
                className={`transition-colors py-0.5 relative group font-semibold ${isScrolled ? 'text-[#dc2626] hover:text-[#b91c1c]' : 'text-[#ef4444] hover:text-white'
                  }`}
              >
                Full Menu
                <span className="absolute bottom-0 left-0 w-0 h-[1.5px] bg-[#dc2626] transition-all duration-300 group-hover:w-full" />
              </Link>
              <Link
                href="/#heritage"
                className={`transition-colors py-0.5 relative group ${isScrolled ? 'hover:text-[#dc2626]' : 'hover:text-[#ef4444]'
                  }`}
              >
                Our Heritage
                <span className="absolute bottom-0 left-0 w-0 h-[1.5px] bg-[#dc2626] transition-all duration-300 group-hover:w-full" />
              </Link>
              <Link
                href="/#ministers"
                className={`transition-colors py-0.5 relative group ${isScrolled ? 'hover:text-[#dc2626]' : 'hover:text-[#ef4444]'
                  }`}
              >
                The Ministers
                <span className="absolute bottom-0 left-0 w-0 h-[1.5px] bg-[#dc2626] transition-all duration-300 group-hover:w-full" />
              </Link>
            </nav>

            {/* Center Brand Identity with Didone Luxury Wordmark */}
            <Link href="/" className="flex flex-col items-center text-center group py-0.5">
              <span
                className={`font-didone text-xl sm:text-2xl font-extrabold tracking-[0.2em] leading-tight transition-colors ${isScrolled ? 'text-[#111827] group-hover:text-[#dc2626]' : 'text-white group-hover:text-[#ef4444]'
                  }`}
              >
                CRAB CEYLON
              </span>
              <span
                className={`text-[8px] uppercase tracking-[0.4em] font-semibold leading-tight transition-colors ${isScrolled ? 'text-[#dc2626]' : 'text-[#ef4444]'
                  }`}
              >
                Yorkville • Toronto
              </span>
            </Link>

            {/* Right Nav Actions */}
            <div className="flex items-center gap-2.5 sm:gap-4">
              {/* Track Order Button */}
              <button
                onClick={onOpenOrderSearch}
                className={`hidden sm:flex items-center gap-1.5 text-[10px] uppercase tracking-[0.2em] transition-colors cursor-pointer py-0.5 font-medium ${isScrolled ? 'text-stone-700 hover:text-[#dc2626]' : 'text-stone-300 hover:text-[#ef4444]'
                  }`}
              >
                <Compass className={`w-3.5 h-3.5 ${isScrolled ? 'text-[#dc2626]' : 'text-[#ef4444]'}`} />
                <span>Track Order</span>
              </button>

              {/* Table Booking Button */}
              <button
                onClick={onOpenReservation}
                className="hidden md:inline-flex items-center gap-1.5 text-[10px] uppercase tracking-[0.18em] px-3.5 py-1.5 bg-[#dc2626] hover:bg-[#b91c1c] text-white border border-[#dc2626] transition-all font-semibold cursor-pointer shadow-sm hover:shadow-md"
              >
                <span>Book Table</span>
                <ArrowUpRight className="w-3 h-3 text-current" />
              </button>

              {/* Cart Drawer Trigger */}
              <button
                onClick={onOpenCart}
                id="cart-button"
                className="flex items-center gap-2 px-3 py-1.5 bg-[#111827] hover:bg-[#1f2937] text-white transition-all cursor-pointer group shadow-sm hover:shadow-md border border-white/10 rounded-md"
              >
                <ShoppingBag className="w-3.5 h-3.5 text-[#ef4444] group-hover:scale-110 transition-transform" />
                <span className="text-[10px] uppercase tracking-[0.16em] font-medium hidden sm:inline text-white">
                  Order Bag
                </span>
                <span className="font-mono text-[10px] font-semibold text-white bg-[#dc2626] px-1.5 py-0.5 rounded-full leading-none">
                  {cartCount}
                </span>
              </button>

              {/* Mobile Menu Hamburger */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className={`lg:hidden p-1.5 transition-colors ${isScrolled ? 'text-stone-800 hover:text-[#dc2626]' : 'text-white hover:text-[#ef4444]'
                  }`}
                aria-label="Toggle navigation menu"
              >
                {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Navigation */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 lg:hidden bg-white/98 backdrop-blur-2xl pt-20 px-6 flex flex-col justify-between pb-10 animate-in fade-in duration-300">
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
              <Link
                href="/menu"
                onClick={() => setMobileMenuOpen(false)}
                className="text-[#dc2626] font-bold py-1"
              >
                Full Dining Menu
              </Link>
              <Link
                href="/#menu"
                onClick={() => setMobileMenuOpen(false)}
                className="hover:text-[#dc2626] py-1"
              >
                The Catch (Signatures)
              </Link>
              <Link
                href="/#heritage"
                onClick={() => setMobileMenuOpen(false)}
                className="hover:text-[#dc2626] py-1"
              >
                Our Heritage
              </Link>
              <Link
                href="/#ministers"
                onClick={() => setMobileMenuOpen(false)}
                className="hover:text-[#dc2626] py-1"
              >
                The Ministers (Founders)
              </Link>
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenReservation();
                }}
                className="hover:text-[#dc2626] py-1 uppercase tracking-[0.25em] text-left"
              >
                Reservations
              </button>
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenOrderSearch();
                }}
                className="hover:text-[#dc2626] py-1 uppercase tracking-[0.25em] text-[#dc2626] text-left"
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
              className="w-full py-3.5 bg-[#dc2626] hover:bg-[#b91c1c] text-white uppercase tracking-[0.2em] text-xs font-semibold shadow-md transition-colors"
            >
              Reserve an Ocean Table
            </button>
            <a
              href="tel:+14169242722"
              className="w-full py-3 bg-stone-100 text-stone-800 uppercase tracking-[0.18em] text-[11px] flex items-center justify-center gap-2 border border-stone-200"
            >
              <Phone className="w-3.5 h-3.5 text-[#dc2626]" />
              Concierge: +1 (416) 924-CRAB
            </a>
          </div>
        </div>
      )}
    </>
  );
}
