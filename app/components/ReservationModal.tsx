'use client';

import React, { useState } from 'react';
import { X, CheckCircle2, Calendar, Clock, Users, MapPin } from 'lucide-react';

interface ReservationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ReservationModal({ isOpen, onClose }: ReservationModalProps) {
  const [date, setDate] = useState('2026-10-24');
  const [time, setTime] = useState('19:30');
  const [guests, setGuests] = useState('2 Guests');
  const [seatingArea, setSeatingArea] = useState('Yorkville Garden Salon');
  const [preorderCrab, setPreorderCrab] = useState(true);
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [confirmed, setConfirmed] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setConfirmed(true);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-in fade-in duration-200">
      <div className="relative w-full max-w-lg bg-[#090d16] border border-[#c5a059]/35 rounded-2xl p-6 sm:p-8 text-slate-100 shadow-[0_25px_70px_rgba(0,0,0,0.95)] max-h-[92vh] overflow-y-auto">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 text-slate-400 hover:text-white"
        >
          <X className="w-5 h-5" />
        </button>

        {confirmed ? (
          <div className="text-center py-8 space-y-4">
            <div className="w-14 h-14 rounded-full bg-[#c5a059]/15 border border-[#c5a059]/40 text-[#c5a059] flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-7 h-7" />
            </div>
            <h3 className="text-2xl font-serif text-white font-normal">
              Table Reserved at Crab Ceylon
            </h3>
            <p className="text-xs text-slate-300 max-w-xs mx-auto leading-relaxed font-light">
              We look forward to hosting you at our <strong>{seatingArea}</strong> on <strong>{date} at {time} EST</strong>.
            </p>
            <div className="p-4 bg-[#0d121e] border border-white/10 text-xs text-left space-y-1.5 font-mono text-[#f4df95]">
              <div>Reference: #RES-TORONTO-892</div>
              <div>Patron: {name || 'Honored Guest'}</div>
              <div>Party: {guests}</div>
              <div>Location: 124 Yorkville Avenue, Toronto</div>
              {preorderCrab && <div className="text-emerald-400">✓ 1.2kg Jumbo Live Lagoon Crab Pre-Reserved</div>}
            </div>
            <button
              onClick={() => {
                setConfirmed(false);
                onClose();
              }}
              className="w-full py-3 bg-[#c5a059] text-[#07090e] font-semibold text-xs uppercase tracking-wider hover:bg-[#d4af37]"
            >
              Done
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4 text-left">
            <div className="text-center mb-6">
              <span className="text-[10px] uppercase tracking-[0.3em] text-[#c5a059] font-medium block mb-1">
                Yorkville • Toronto
              </span>
              <h3 className="text-2xl font-serif text-white font-normal">
                Reserve an Ocean Table
              </h3>
              <p className="text-xs text-slate-400 mt-1 font-light">
                124 Yorkville Avenue • Live Ceylon mud crabs weighed tableside.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="block text-[10px] uppercase tracking-[0.2em] text-slate-400 font-medium mb-1">
                  Date
                </label>
                <input
                  type="date"
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                  required
                  className="w-full px-3 py-2 bg-[#101625] border border-white/10 text-xs text-white focus:border-[#c5a059] outline-none"
                />
              </div>
              <div>
                <label className="block text-[10px] uppercase tracking-[0.2em] text-slate-400 font-medium mb-1">
                  Seating Time
                </label>
                <select
                  value={time}
                  onChange={(e) => setTime(e.target.value)}
                  className="w-full px-3 py-2 bg-[#101625] border border-white/10 text-xs text-white focus:border-[#c5a059] outline-none"
                >
                  <option value="17:00">5:00 PM (Early Dinner)</option>
                  <option value="18:30">6:30 PM (Evening Service)</option>
                  <option value="19:30">7:30 PM (Prime Dinner)</option>
                  <option value="21:00">9:00 PM (Late Night Feast)</option>
                </select>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="block text-[10px] uppercase tracking-[0.2em] text-slate-400 font-medium mb-1">
                  Party Size
                </label>
                <select
                  value={guests}
                  onChange={(e) => setGuests(e.target.value)}
                  className="w-full px-3 py-2 bg-[#101625] border border-white/10 text-xs text-white focus:border-[#c5a059] outline-none"
                >
                  <option value="2 Guests">2 Guests (Couple)</option>
                  <option value="4 Guests">4 Guests (Dining Table)</option>
                  <option value="6 Guests">6 Guests (Feast Table)</option>
                  <option value="8+ Guests">8+ Private Delegation</option>
                </select>
              </div>
              <div>
                <label className="block text-[10px] uppercase tracking-[0.2em] text-slate-400 font-medium mb-1">
                  Seating Area
                </label>
                <select
                  value={seatingArea}
                  onChange={(e) => setSeatingArea(e.target.value)}
                  className="w-full px-3 py-2 bg-[#101625] border border-white/10 text-xs text-white focus:border-[#c5a059] outline-none"
                >
                  <option value="Yorkville Garden Salon">Yorkville Garden Salon</option>
                  <option value="Colonial Dining Room">Colonial Dining Room</option>
                  <option value="Private Cellar (VIP)">Private Cellar (VIP)</option>
                </select>
              </div>
            </div>

            {/* Pre-order Live Crab */}
            <div className="p-3 bg-[#111726] border border-[#c5a059]/30 flex items-start gap-3">
              <input
                type="checkbox"
                id="preorder"
                checked={preorderCrab}
                onChange={(e) => setPreorderCrab(e.target.checked)}
                className="mt-0.5 accent-[#c5a059] w-4 h-4"
              />
              <label htmlFor="preorder" className="text-xs text-slate-300 cursor-pointer">
                <span className="font-medium text-white block">Pre-Reserve 1.2kg Jumbo Mud Crab</span>
                Reserve a wild catch from today&apos;s saline tanks in advance for your table.
              </label>
            </div>

            <div className="space-y-2">
              <input
                type="text"
                placeholder="Full Name *"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full px-3.5 py-2.5 bg-[#101625] border border-white/10 text-xs text-white placeholder-slate-500 focus:border-[#c5a059] outline-none"
              />
              <div className="grid grid-cols-2 gap-2">
                <input
                  type="tel"
                  placeholder="Phone Number *"
                  required
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="w-full px-3.5 py-2.5 bg-[#101625] border border-white/10 text-xs text-white placeholder-slate-500 focus:border-[#c5a059] outline-none"
                />
                <input
                  type="email"
                  placeholder="Email Address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-3.5 py-2.5 bg-[#101625] border border-white/10 text-xs text-white placeholder-slate-500 focus:border-[#c5a059] outline-none"
                />
              </div>
            </div>

            <button
              type="submit"
              className="w-full py-3.5 bg-[#c5a059] hover:bg-[#d4af37] text-[#07090e] font-semibold text-xs uppercase tracking-[0.2em] transition-colors cursor-pointer mt-2"
            >
              Confirm Table Reservation
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
