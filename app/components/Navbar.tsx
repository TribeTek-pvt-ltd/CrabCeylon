'use client';

import React, { useState, useEffect } from 'react';
import { ShoppingBag, Compass, Menu, X, Phone, ArrowUpRight } from 'lucide-react';

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
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${isScrolled
          ? 'bg-[#07090e]/95 backdrop-blur-md border-b border-[#c5a059]/20 shadow-[0_15px_30px_rgba(0,0,0,0.8)] py-3.5'
          : 'bg-gradient-to-b from-[#07090e] via-[#07090e]/80 to-transparent py-5'
          }`}
      >

        {/* Main Navigation Bar */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Left Nav Links */}
            <nav className="hidden lg:flex items-center gap-8 text-[12px] uppercase tracking-[0.25em] font-medium text-slate-300">
              <a
                href="#menu"
                className="hover:text-[#c5a059] transition-colors py-1 relative group"
              >
                The Catch
                <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-[#c5a059] transition-all duration-300 group-hover:w-full" />
              </a>
              <a
                href="#heritage"
                className="hover:text-[#c5a059] transition-colors py-1 relative group"
              >
                Our Heritage
                <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-[#c5a059] transition-all duration-300 group-hover:w-full" />
              </a>
              <button
                onClick={onOpenReservation}
                className="hover:text-[#c5a059] transition-colors py-1 relative group cursor-pointer"
              >
                Reservations
                <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-[#c5a059] transition-all duration-300 group-hover:w-full" />
              </button>
            </nav>

            {/* Center Brand Identity (Refined Luxury Wordmark) */}
            <a href="#" className="flex flex-col items-center text-center group">
              <span className="font-serif text-2xl sm:text-3xl font-normal tracking-[0.24em] text-white group-hover:text-[#f4df95] transition-colors">
                CRAB CEYLON
              </span>
              <span className="text-[9px] uppercase tracking-[0.38em] text-[#D4AF37] font-medium mt-0.5">
                Yorkville • Toronto
              </span>
            </a>

            {/* Right Nav Actions */}
            <div className="flex items-center gap-4 sm:gap-6">
              {/* Track Order Button */}
              <button
                onClick={onOpenOrderSearch}
                className="hidden sm:flex items-center gap-1.5 text-[11px] uppercase tracking-[0.22em] text-slate-300 hover:text-[#c5a059] transition-colors cursor-pointer py-1"
              >
                <Compass className="w-3.5 h-3.5 text-[#c5a059]" />
                <span>Track Order</span>
              </button>

              {/* Table Booking Button */}
              <button
                onClick={onOpenReservation}
                className="hidden md:inline-flex items-center gap-1 text-[11px] uppercase tracking-[0.2em] px-4 py-2 border border-[#c5a059]/40 text-[#f4df95] hover:bg-[#c5a059]/10 hover:border-[#c5a059] transition-all font-medium"
              >
                <span>Book Table</span>
                <ArrowUpRight className="w-3 h-3 text-[#c5a059]" />
              </button>

              {/* Cart Drawer Trigger */}
              <button
                onClick={onOpenCart}
                id="cart-button"
                className="flex items-center gap-2.5 px-4 py-2 bg-[#121622] hover:bg-[#181d2c] border border-[#c5a059]/35 text-white transition-all cursor-pointer group"
              >
                <ShoppingBag className="w-4 h-4 text-[#c5a059] group-hover:scale-110 transition-transform" />
                <span className="text-[11px] uppercase tracking-[0.18em] font-medium hidden sm:inline text-slate-200">
                  Order Bag
                </span>
                <span className="font-mono text-xs font-semibold text-[#f4df95] border-l border-white/10 pl-2">
                  {cartCount}
                </span>
              </button>

              {/* Mobile Menu Hamburger */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="lg:hidden p-2 text-slate-300 hover:text-white"
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
        <div className="fixed inset-0 z-30 lg:hidden bg-[#07090e]/98 backdrop-blur-2xl pt-24 px-6 flex flex-col justify-between pb-10 animate-in fade-in duration-300">
          <div className="space-y-6 pt-4 text-center">
            <div className="border-b border-white/10 pb-6">
              <span className="font-serif text-2xl tracking-[0.25em] text-white block">
                CRAB CEYLON
              </span>
              <span className="text-[10px] uppercase tracking-[0.35em] text-[#c5a059] mt-1 block">
                124 Yorkville Avenue, Toronto
              </span>
            </div>

            <nav className="flex flex-col gap-5 text-sm uppercase tracking-[0.25em] text-slate-200">
              <a
                href="#menu"
                onClick={() => setMobileMenuOpen(false)}
                className="hover:text-[#c5a059] py-1"
              >
                The Catch (Menu)
              </a>
              <a
                href="#heritage"
                onClick={() => setMobileMenuOpen(false)}
                className="hover:text-[#c5a059] py-1"
              >
                Our Heritage
              </a>
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenReservation();
                }}
                className="hover:text-[#c5a059] py-1 uppercase tracking-[0.25em]"
              >
                Reservations
              </button>
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenOrderSearch();
                }}
                className="hover:text-[#c5a059] py-1 uppercase tracking-[0.25em] text-[#c5a059]"
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
              className="w-full py-3.5 border border-[#c5a059] text-[#f4df95] uppercase tracking-[0.2em] text-xs font-semibold"
            >
              Reserve an Ocean Table
            </button>
            <a
              href="tel:+14169242722"
              className="w-full py-3 bg-[#111624] text-slate-300 uppercase tracking-[0.18em] text-[11px] flex items-center justify-center gap-2 border border-white/10"
            >
              <Phone className="w-3.5 h-3.5 text-[#c5a059]" />
              Concierge: +1 (416) 924-CRAB
            </a>
          </div>
        </div>
      )}
    </>
  );
}
