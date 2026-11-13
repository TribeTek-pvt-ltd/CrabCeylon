'use client';

import React, { useState, useRef } from 'react';
import { Scale, Flame, Waves, ShieldCheck, Play, Pause, Volume2, VolumeX, Sparkles, Film } from 'lucide-react';

interface StoryChapter {
  id: string;
  timestamp: number;
  label: string;
  subtitle: string;
  character: string;
  description: string;
}

export default function HeritageStory() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);
  const [activeChapter, setActiveChapter] = useState(0);

  const chapters: StoryChapter[] = [
    {
      id: 'shrimp-wok',
      timestamp: 0,
      label: 'The Wok Sizzle',
      subtitle: 'Master Shrimp at the Flame',
      character: 'Chef Prawn',
      description: 'The journey begins in the high-heat kitchen where wild lagoon catch meets roaring wok breath and golden island garlic.'
    },
    {
      id: 'squid-fire',
      timestamp: 13,
      label: 'The Fire & Broth',
      subtitle: 'Squid & Octopus Spice Symphony',
      character: 'Chef Calamari & Octopus',
      description: 'Simmering over volcanic flames with 21 heirloom Sri Lankan spices, hand-pounded cinnamon quills, and freshly pressed coconut nectar.'
    },
    {
      id: 'grand-brigade',
      timestamp: 46,
      label: 'The Grand Brigade',
      subtitle: 'The Ocean Masters Assemble',
      character: 'The Aquatic Culinary Crew',
      description: 'The complete culinary family gathers to celebrate the imperial feast—honoring the wild Ceylon catch delivered live from Negombo to your table.'
    }
  ];

  const handleTogglePlay = () => {
    if (!videoRef.current) return;
    if (isPlaying) {
      videoRef.current.pause();
      setIsPlaying(false);
    } else {
      videoRef.current.play();
      setIsPlaying(true);
    }
  };

  const handleToggleMute = () => {
    if (!videoRef.current) return;
    videoRef.current.muted = !isMuted;
    setIsMuted(!isMuted);
  };

  const handleSeekChapter = (index: number) => {
    setActiveChapter(index);
    if (!videoRef.current) return;
    videoRef.current.currentTime = chapters[index].timestamp;
    if (!isPlaying) {
      videoRef.current.play();
      setIsPlaying(true);
    }
  };

  return (
    <section id="heritage" className="py-24 sm:py-28 relative bg-[#ffffff] text-[#111827] overflow-hidden border-t border-stone-200">

      {/* Subtle Warm Ambiance Overlay */}
      <div className="absolute top-1/4 -left-20 w-96 h-96 bg-red-500/5 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-amber-500/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 relative z-10">

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-red-50 border border-red-200 text-[#dc2626] mb-4">
            {/* <Sparkles className="w-3.5 h-3.5 text-[#dc2626]" /> */}
            {/* <span className="font-manrope text-[11px] uppercase tracking-[0.25em] font-extrabold text-[#dc2626]">
              Animated Culinary Tale
            </span> */}
          </div>

          <h2 className="font-didone text-4xl sm:text-6xl font-black text-[#111827] tracking-tight leading-tight mb-4">
            The Legend of the Oceanic Kitchen
          </h2>

          <p className="font-serif italic text-xl sm:text-2xl text-stone-600 font-light max-w-2xl mx-auto">
            &ldquo;Where the creatures of the deep run the kitchen with fiery reverence for the catch.&rdquo;
          </p>
        </div>

        {/* 2-Column Storytelling Grid: Video Stage on Left, Narrative & Chapter Controls on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">

          {/* ================= LEFT COLUMN: CINEMATIC 3D ANIMATED STORY PLAYER ================= */}
          <div className="lg:col-span-6 relative flex justify-center">

            {/* Ambient Backlight Glow behind the Video Player */}
            <div className="absolute inset-0 bg-gradient-to-tr from-[#dc2626]/20 via-amber-500/10 to-transparent rounded-[40px] blur-2xl transform scale-105 pointer-events-none" />

            {/* Video Frame Container */}
            <div className="relative w-full max-w-[380px] sm:max-w-[420px] aspect-[9/16] rounded-[36px] sm:rounded-[42px] overflow-hidden bg-black border-4 border-stone-800 shadow-[0_25px_60px_rgba(0,0,0,0.35)] group">

              {/* The Master Video Stream */}
              <video
                ref={videoRef}
                src="/videos/heritage-story.mp4"
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-full object-cover filter contrast-[1.05]"
              />

              {/* Gradient Vignettes for Editorial Legibility */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/50 pointer-events-none" />

              {/* Top Header Tag */}
              <div className="absolute top-5 left-5 right-5 flex items-center justify-between z-20">
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-black/60 backdrop-blur-md border border-white/20 text-white">
                  <Film className="w-3.5 h-3.5 text-[#ef4444]" />
                  {/* <span className="font-manrope text-[10px] uppercase tracking-wider font-extrabold text-white">
                    Story Episode 01
                  </span> */}
                </div>

                {/* Audio Mute/Unmute Toggle Button */}
                {/* <button
                  onClick={handleToggleMute}
                  aria-label={isMuted ? 'Unmute video audio' : 'Mute video audio'}
                  className="w-9 h-9 rounded-full bg-black/60 backdrop-blur-md border border-white/20 hover:border-white text-white flex items-center justify-center transition-all cursor-pointer hover:scale-110 active:scale-95 shadow-md"
                >
                  {isMuted ? (
                    <VolumeX className="w-4 h-4 text-white/80" />
                  ) : (
                    <Volume2 className="w-4 h-4 text-[#ef4444] animate-pulse" />
                  )}
                </button> */}
              </div>

              {/* Center Play/Pause Overlay Indicator on Hover */}
              {/* <button
                onClick={handleTogglePlay}
                aria-label={isPlaying ? 'Pause Story' : 'Play Story'}
                className="absolute inset-0 flex items-center justify-center z-10 cursor-pointer opacity-0 group-hover:opacity-100 transition-opacity bg-black/25 backdrop-blur-[2px]"
              >
                <div className="w-16 h-16 rounded-full bg-white/90 text-stone-900 flex items-center justify-center shadow-2xl hover:scale-110 transition-transform">
                  {isPlaying ? (
                    <Pause className="w-7 h-7 fill-current" />
                  ) : (
                    <Play className="w-7 h-7 fill-current translate-x-0.5" />
                  )}
                </div>
              </button> */}

              {/* Bottom Video Card Overlay */}
              <div className="absolute bottom-5 left-5 right-5 p-4 sm:p-5 rounded-2xl bg-black/75 backdrop-blur-md border border-white/15 text-left z-20">
                <div className="flex items-center gap-2 text-[#ef4444] mb-1">
                  {/* <span className="w-2 h-2 rounded-full bg-[#ef4444] animate-ping" />
                  <span className="font-manrope text-[10px] uppercase tracking-[0.25em] font-extrabold text-[#ef4444]">
                    Now Playing: {chapters[activeChapter].character}
                  </span> */}
                </div>
                {/* <h4 className="font-serif text-lg text-white font-bold mb-1">
                  {chapters[activeChapter].subtitle}
                </h4> */}
                {/* <p className="font-manrope text-xs text-stone-300 leading-relaxed font-light line-clamp-2">
                  {chapters[activeChapter].description}
                </p> */}
              </div>

            </div>

          </div>

          {/* ================= RIGHT COLUMN: STORYTELLING METHOD & CHAPTER SELECTION ================= */}
          <div className="lg:col-span-6 space-y-6 text-left">

            <div className="inline-flex items-center gap-3">
              <span className="w-8 h-[2px] bg-[#dc2626]" />
              <span className="text-[11px] uppercase tracking-[0.35em] text-[#dc2626] font-extrabold">
                Interactive Storytelling
              </span>
            </div>

            <h3 className="font-didone text-3xl sm:text-4xl lg:text-5xl font-black text-[#111827] tracking-tight leading-tight">
              From Ceylon&apos;s Wild Lagoons to Yorkville, Toronto
            </h3>

            <p className="text-stone-700 text-sm sm:text-base leading-relaxed font-normal">
              Every colossal mud crab and wild tiger prawn has a story. Caught by artisanal fishermen in the serene brackish mangrove estuaries of Negombo, our sea masters are never farmed, never frozen, and flown directly into our live 18°C saline sanctuary in Yorkville.
            </p>

            {/* Interactive Story Chapters (Click to Seek Video) */}
            {/* <div className="space-y-3 pt-2">
              <span className="text-[10px] font-manrope font-extrabold uppercase tracking-[0.22em] text-stone-500 block">
                Jump To Story Chapters:
              </span>

              {chapters.map((chap, idx) => (
                <div
                  key={chap.id}
                  onClick={() => handleSeekChapter(idx)}
                  className={`p-4 rounded-2xl border transition-all duration-300 cursor-pointer flex items-center justify-between ${activeChapter === idx
                    ? 'bg-red-50/70 border-[#dc2626] shadow-sm translate-x-1'
                    : 'bg-stone-50 hover:bg-stone-100 border-stone-200'
                    }`}
                >
                  <div className="flex items-center gap-4">
                    <span className={`w-8 h-8 rounded-full flex items-center justify-center font-mono text-xs font-black transition-colors ${activeChapter === idx
                      ? 'bg-[#dc2626] text-white shadow-md'
                      : 'bg-stone-200 text-stone-700'
                      }`}>
                      0{idx + 1}
                    </span>
                    <div>
                      <h5 className={`font-manrope text-sm font-bold transition-colors ${activeChapter === idx ? 'text-[#dc2626]' : 'text-stone-900'
                        }`}>
                        {chap.label}
                      </h5>
                      <p className="font-manrope text-xs text-stone-500 font-normal">
                        {chap.subtitle}
                      </p>
                    </div>
                  </div>

                  <span className={`text-[10px] uppercase font-mono font-bold tracking-wider px-2.5 py-1 rounded-full ${activeChapter === idx
                    ? 'bg-[#dc2626] text-white'
                    : 'bg-stone-200/80 text-stone-600'
                    }`}>
                    {activeChapter === idx ? 'Playing' : 'Jump'}
                  </span>
                </div>
              ))}
            </div> */}

            {/* 4 Heritage Pillars Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-4">
              <div className="p-4 rounded-xl bg-white border border-stone-200/90 shadow-xs hover:border-[#dc2626] transition-all">
                <div className="flex items-center gap-2 mb-1.5 text-[#dc2626]">
                  <Waves className="w-4 h-4 stroke-[2]" />
                  <h6 className="text-[11px] uppercase tracking-[0.18em] font-extrabold text-[#111827]">
                    Wild Lagoon Sourced
                  </h6>
                </div>
                <p className="text-[11px] text-stone-600 font-light leading-relaxed">
                  Zero farm feed. 100% wild lagoon-caught in Negombo & Batticaloa.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-white border border-stone-200/90 shadow-xs hover:border-[#dc2626] transition-all">
                <div className="flex items-center gap-2 mb-1.5 text-[#dc2626]">
                  <Scale className="w-4 h-4 stroke-[2]" />
                  <h6 className="text-[11px] uppercase tracking-[0.18em] font-extrabold text-[#111827]">
                    Live Weighing Protocol
                  </h6>
                </div>
                <p className="text-[11px] text-stone-600 font-light leading-relaxed">
                  Weighed live at your table on certified scales before wok searing.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-white border border-stone-200/90 shadow-xs hover:border-[#dc2626] transition-all">
                <div className="flex items-center gap-2 mb-1.5 text-[#dc2626]">
                  <Flame className="w-4 h-4 stroke-[2]" />
                  <h6 className="text-[11px] uppercase tracking-[0.18em] font-extrabold text-[#111827]">
                    21 Heirloom Spices
                  </h6>
                </div>
                <p className="text-[11px] text-stone-600 font-light leading-relaxed">
                  Stone-crushed Tellicherry peppercorns, quills, and toasted coconut.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-white border border-stone-200/90 shadow-xs hover:border-[#dc2626] transition-all">
                <div className="flex items-center gap-2 mb-1.5 text-[#dc2626]">
                  <ShieldCheck className="w-4 h-4 stroke-[2]" />
                  <h6 className="text-[11px] uppercase tracking-[0.18em] font-extrabold text-[#111827]">
                    Strict No-Freezer Policy
                  </h6>
                </div>
                <p className="text-[11px] text-stone-600 font-light leading-relaxed">
                  Fresh out of 18°C saline tanks. A mud crab should never see a freezer.
                </p>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
