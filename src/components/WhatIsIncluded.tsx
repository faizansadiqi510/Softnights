import React from "react";
import { Check, ShieldCheck, Book, Sparkles, FileText, Calendar, Moon } from "lucide-react";

interface WhatIsIncludedProps {
  onOpenCheckout: () => void;
  images: {
    coverMain: string;
    coverBonus: string;
    coverHero: string;
    customStamp: string;
  };
}

function CompactBookPreview({
  title,
  customImage,
  bgColorClass
}: {
  title: string;
  customImage?: string;
  bgColorClass: string;
}) {
  if (customImage) {
    return (
      <div className="relative aspect-[3/4] w-20 rounded-xl overflow-hidden shadow-md border border-sage/10 bg-cream flex-shrink-0 animate-fade-in self-center md:self-auto">
        <img src={customImage} alt={title} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
      </div>
    );
  }

  return (
    <div className={`relative aspect-[3/4] p-2 flex flex-col justify-between w-20 rounded-xl shadow-md border border-white/5 text-left flex-shrink-0 self-center md:self-auto ${bgColorClass} overflow-hidden select-none`}>
      {/* Spine highlight gradient */}
      <div className="absolute top-0 left-0 bottom-0 w-1 bg-gradient-to-r from-white/10 to-transparent" />
      <span className="text-[5.5px] tracking-wider text-white/50 uppercase font-mono block">eBook</span>
      <h5 className="font-serif font-bold text-[7px] leading-tight text-white/95 mt-0.5 line-clamp-3">
        {title}
      </h5>
      <span className="text-[5px] font-mono text-white/40 block">SOFTNIGHTS</span>
    </div>
  );
}

export default function WhatIsIncluded({ onOpenCheckout, images }: WhatIsIncludedProps) {
  return (
    <section className="bg-cream py-16 md:py-20 px-6 border-t border-b border-sage/10" id="what-is-included-section">
      <div className="max-w-4xl mx-auto space-y-12">
        
        {/* Title */}
        <div className="text-center space-y-3">
          <span className="text-[11px] font-heading font-bold text-gold uppercase tracking-wider">
            THE ANATOMY OF SLEEP
          </span>
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-charcoal">
            The Softnights Sleep Library
          </h2>
          <p className="text-sm md:text-base text-warm-grey max-w-xl mx-auto">
            Everything you need to transform bedtime from a stressful battle to a nurturing family ritual. Download, open, and start seeing relief tonight.
          </p>
        </div>

        {/* Double bundle cards representation for 2 premium guides */}
        <div className="grid md:grid-cols-2 gap-8 max-w-3xl mx-auto">
          
          {/* Item 1: Main Book */}
          <div className="bg-white p-6 md:p-8 rounded-3xl border border-sage/10 shadow-sm flex flex-col justify-between hover:translate-y-[-2px] transition-transform">
            <div>
              <div className="flex flex-col md:flex-row gap-4 items-start justify-between mb-4">
                <div className="w-10 h-10 bg-sage/10 rounded-2xl flex items-center justify-center text-sage">
                  <Book className="w-5 h-5" />
                </div>
                
                {/* Book graphic preview */}
                <CompactBookPreview
                  title="Your Child Can Sleep. And So Can You."
                  customImage={images.coverMain}
                  bgColorClass="bg-gradient-to-br from-sage to-emerald-950"
                />
              </div>

              <h3 className="font-heading font-semibold text-xs tracking-wider text-sage uppercase mb-1">
                Primary Guide (PDF format)
              </h3>
              <h4 className="font-heading font-bold text-lg text-charcoal mb-2 leading-snug">
                Your Child Can Sleep. And So Can You.
              </h4>
              <p className="text-xs text-warm-grey leading-relaxed mb-4 font-sans text-[11.5px]">
                For parents who want calmer bedtimes and better sleep for their child. It is an elegant, step-by-step roadmap breaking down biological clocks and gentle settling sequences.
              </p>
              
              <ul className="space-y-2 text-[11px] text-warm-grey/85 border-t border-sage/5 pt-3">
                <li className="flex items-center gap-1.5">
                  <Check className="w-3.5 h-3.5 text-sage shrink-0" />
                  <span>The Overtired Daylight Deficit Formula</span>
                </li>
                <li className="flex items-center gap-1.5">
                  <Check className="w-3.5 h-3.5 text-sage shrink-0" />
                  <span>Circadian Rhythm Clock Tables</span>
                </li>
                <li className="flex items-center gap-1.5">
                  <Check className="w-3.5 h-3.5 text-sage shrink-0" />
                  <span>Gentle Self-Settle Progressions (No Tears)</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Item 2: Night Waking Fix */}
          <div className="bg-white p-6 md:p-8 rounded-3xl border border-sage/10 shadow-sm flex flex-col justify-between hover:translate-y-[-2px] transition-transform">
            <div>
              <div className="flex flex-col md:flex-row gap-4 items-start justify-between mb-4">
                <div className="w-10 h-10 bg-blush/15 rounded-2xl flex items-center justify-center text-blush">
                  <Moon className="w-5 h-5" />
                </div>

                {/* Book graphic preview */}
                <CompactBookPreview
                  title="The Night Waking Fix"
                  customImage={images.coverBonus}
                  bgColorClass="bg-gradient-to-br from-purple-950 to-indigo-900"
                />
              </div>

              <h3 className="font-heading font-semibold text-xs tracking-wider text-blush uppercase mb-1">
                Value Bonus Guide (PDF format)
              </h3>
              <h4 className="font-heading font-bold text-lg text-charcoal mb-2 leading-snug">
                The Night Waking Fix
              </h4>
              <p className="text-xs text-warm-grey leading-relaxed mb-4 font-sans text-[11.5px]">
                Exactly what to do when your child wakes up at 2am and won&apos;t go back to sleep. Practical rapid troubleshooting for sudden midnight callouts.
              </p>
              
              <ul className="space-y-2 text-[11px] text-warm-grey/85 border-t border-sage/5 pt-3">
                <li className="flex items-center gap-1.5">
                  <Check className="w-3.5 h-3.5 text-sage shrink-0" />
                  <span>The 10-Minute Rapid Resettle Sequence</span>
                </li>
                <li className="flex items-center gap-1.5">
                  <Check className="w-3.5 h-3.5 text-sage shrink-0" />
                  <span>Comfort-Touch Responding Rules</span>
                </li>
                <li className="flex items-center gap-1.5">
                  <Check className="w-3.5 h-3.5 text-sage shrink-0" />
                  <span>Regressions Survival Charts</span>
                </li>
              </ul>
            </div>
          </div>

        </div>

        {/* Pricing CTA */}
        <div className="bg-white rounded-3xl p-6 md:p-8 border border-sage/12 shadow-sm flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2 text-left">
            <div className="inline-flex items-center gap-1 px-2.5 py-0.5 bg-gold/15 text-gold-dark text-xs font-semibold rounded-full">
              <Sparkles className="w-3 h-3 text-gold" />
              <span>Softnights Compilation Pack</span>
            </div>
            
            <h3 className="font-heading font-bold text-lg text-charcoal leading-snug">
              Get Instant Access to Both Guides
            </h3>
            <p className="text-xs text-warm-grey max-w-md">
              Start tonight. Your download link is sent to your device the millisecond checkout is complete. No waiting, no clutter.
            </p>
          </div>

          {/* Pricing tag & click trigger */}
          <div className="flex flex-col items-center md:items-end flex-shrink-0">
            <div className="flex items-baseline gap-1.5 mb-2">
              <span className="text-3xl font-heading font-bold text-charcoal">₹299</span>
              <span className="text-xs text-warm-grey line-through">₹999.00</span>
            </div>
            
            <button
              onClick={onOpenCheckout}
              className="bg-gold hover:bg-gold/90 text-white font-heading font-semibold py-3.5 px-6 rounded-2xl shadow-lg transition-transform hover:scale-[1.01] active:scale-[0.99] cursor-pointer text-xs uppercase tracking-wider"
            >
              Get Instant Access
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}
