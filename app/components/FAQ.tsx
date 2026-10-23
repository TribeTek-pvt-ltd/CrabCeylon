'use client';

import React, { useState } from 'react';
import { ChevronDown, Plus, Minus } from 'lucide-react';

interface FAQItem {
  question: string;
  answer: string;
  category: string;
}

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs: FAQItem[] = [
    {
      category: 'Sourcing & Freshness',
      question: 'How are the wild Ceylon lagoon mud crabs brought to Toronto?',
      answer: 'Our crabs are wild-caught by artisanal fishermen in the pristine mangrove estuaries of Negombo and Batticaloa in Sri Lanka. They are flown directly to Toronto Pearson International Airport via temperature-controlled air freight and transferred immediately into our custom 18°C salinity-balanced tanks at our 124 Yorkville Avenue restaurant. They are alive, active, and never frozen.'
    },
    {
      category: 'Dining & Sizing',
      question: 'How do I choose the right crab weight and spice level for my party?',
      answer: 'For two guests, we recommend our Grand Reserve (900g) or Royal Jumbo (1.2kg), paired with our Woodfired Artisan Crust Bread and Ghee Basmati Rice. For larger celebrations, our Colossal Monster (1.5kg+) is unmatched. For spice, "Classic Medium" delivers the authentic fragrant warmth of Ceylon highland spices without overpowering the crab\'s natural sweetness. For connoisseurs who crave intense island heat, choose "Fiery Island Heat".'
    },
    {
      category: 'Heated Delivery',
      question: 'How does your 45-minute heated thermal delivery work across Toronto and the GTA?',
      answer: 'Immediately after high-heat wok searing, your crab and gravies are transferred into custom insulated thermal capsules pre-heated to 68°C. Our private courier envoys deliver across Downtown Toronto, Yorkville, Forest Hill, Rosedale, and the GTA. Your feast arrives piping hot, as if served straight from our open kitchen.'
    },
    {
      category: 'Order Tracking',
      question: 'Can I track my delivery or table order in real-time?',
      answer: 'Yes. Upon confirming your order, you receive a dedicated Order Reference ID (e.g. #CC-8429). You can track your catch live as it is selected from our saline tanks, seared in the wok, and dispatched with our courier. You can also look up any order status anytime using the "Track Order" link in our header or footer.'
    },
    {
      category: 'Dietary & Halal',
      question: 'Is your seafood Halal certified and prepared sustainably?',
      answer: 'All of our live crabs, wild ocean prawns, and seafood are 100% Halal certified. We never use pork or lard in any preparation, and our wild lagoon catch strictly adheres to sustainable fisheries guidelines in Sri Lanka, protecting mangrove nursery ecosystems and juvenile populations.'
    },
    {
      category: 'Reservations & Corkage',
      question: 'Do I need to reserve our live mud crab before visiting the restaurant?',
      answer: 'While walk-ins are welcomed at our Yorkville dining room and bar, wild mud crabs over 1.2kg (Royal Jumbo and Colossal) are limited each evening due to daily flight allotments. We strongly encourage pre-reserving your crab weight when booking your table online to guarantee your catch.'
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-24 relative bg-[#07090e] text-slate-100 border-t border-white/[0.06] overflow-hidden">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-3 mb-3">
            <span className="w-6 h-[1px] bg-[#c5a059]" />
            <span className="text-[10px] uppercase tracking-[0.35em] text-[#c5a059] font-medium">
              Guest Inquiries & Curations
            </span>
            <span className="w-6 h-[1px] bg-[#c5a059]" />
          </div>

          <h2 className="text-3xl sm:text-5xl font-serif font-normal text-white tracking-tight mb-4">
            Frequently Asked Questions
          </h2>

          <p className="text-slate-400 text-sm leading-relaxed max-w-lg mx-auto font-light">
            Everything you need to know about our wild Ceylon lagoon crabs, Yorkville reservations, and heated delivery throughout Toronto.
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-3">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={index}
                className={`border transition-all duration-300 ${
                  isOpen
                    ? 'bg-[#0d121f] border-[#c5a059]/40'
                    : 'bg-[#090d16] border-white/[0.07] hover:border-white/20'
                }`}
              >
                <button
                  type="button"
                  onClick={() => toggleFAQ(index)}
                  className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 cursor-pointer focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <div>
                    <span className="text-[10px] uppercase tracking-[0.25em] text-[#c5a059] font-medium block mb-1">
                      {faq.category}
                    </span>
                    <h3 className="font-serif text-base sm:text-lg text-white font-normal leading-snug">
                      {faq.question}
                    </h3>
                  </div>

                  <div className={`w-8 h-8 rounded-full border border-white/10 flex items-center justify-center flex-shrink-0 transition-transform duration-300 ${isOpen ? 'rotate-180 border-[#c5a059]/40 text-[#c5a059]' : 'text-slate-400'}`}>
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 pb-6 sm:px-6 sm:pb-6 text-xs sm:text-sm text-slate-300 font-light leading-relaxed border-t border-white/[0.05] pt-4 animate-in fade-in duration-200">
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Bottom Concierge Assistance Callout */}
        <div className="mt-12 p-6 bg-[#0a0f19] border border-white/[0.08] text-center flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-left">
            <h4 className="font-serif text-sm font-normal text-white">
              Have a special culinary or dietary request?
            </h4>
            <p className="text-xs text-slate-400 font-light mt-0.5">
              Our Yorkville sommelier and kitchen team are at your service.
            </p>
          </div>

          <a
            href="tel:+14169242722"
            className="px-5 py-2.5 bg-[#141b2b] hover:bg-[#c5a059] hover:text-[#07090e] text-[#f4df95] font-semibold text-xs uppercase tracking-[0.2em] transition-colors whitespace-nowrap"
          >
            Call Concierge: (416) 924-CRAB
          </a>
        </div>
      </div>
    </section>
  );
}
