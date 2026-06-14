import React from "react";
import Logo from "./Logo";
import { Moon, Heart, ExternalLink } from "lucide-react";

export default function Footer({ onCheckout }: { onCheckout: () => void }) {
  const currentYear = new Date().getFullYear();

  const scrollToId = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-charcoal text-cream pt-16 pb-20 px-6 relative overflow-hidden" id="app-footer">
      {/* Dark theme moon graphics (Brand kit Page 9) */}
      <div className="absolute top-0 right-0 w-44 h-44 bg-gold/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-4 left-1/10 w-28 h-28 bg-sage/5 rounded-full blur-2xl pointer-events-none" />
      
      {/* Decorative Moon vector from Page 9 */}
      <div className="absolute left-1/2 top-10 -translate-x-1/2 opacity-[0.03] w-64 h-64 pointer-events-none flex items-center justify-center">
        <svg viewBox="0 0 100 100" className="w-full h-full fill-gold">
          <path d="M75 50C75 66.5685 61.5685 80 45 80C28.4315 80 15 66.5685 15 50C15 33.4315 28.4315 20 45 20C49.954 20 54.6125 21.2025 58.7118 23.3323C46.3312 25.8672 37 36.8373 37 50C37 63.1627 46.3312 74.1328 58.7118 76.6677C54.6125 78.7975 49.954 80 45 80" />
        </svg>
      </div>

      <div className="max-w-5xl mx-auto relative z-10 space-y-12">
        
        {/* Top footer row */}
        <div className="flex flex-col md:flex-row items-center md:items-start justify-between gap-8 pb-10 border-b border-white/10">
          
          {/* Logo variant: Dark (Page 5: Gold Moon, White Sleep, Gold Solutions) */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left space-y-3">
            <Logo variant="dark" />
            <p className="text-xs text-moon/65 max-w-xs leading-relaxed font-sans">
              A comprehensive, gentle framework designed with parental sanity and biological sleep windows in mind. Built for exhausted parents, with love.
            </p>
          </div>

          {/* Links cluster */}
          <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-2 text-xs font-semibold uppercase tracking-wider text-moon">
            <button
              onClick={() => scrollToId("pain-points-section")}
              className="hover:text-gold transition-colors cursor-pointer"
            >
              The Battle
            </button>
            <button
              onClick={() => scrollToId("sleep-assessment-quiz")}
              className="hover:text-gold transition-colors cursor-pointer"
            >
              Sleep Quiz
            </button>
            <button
              onClick={() => scrollToId("what-is-included-section")}
              className="hover:text-gold transition-colors cursor-pointer"
            >
              The Package
            </button>
            <button
              onClick={() => scrollToId("faq-section")}
              className="hover:text-gold transition-colors cursor-pointer"
            >
              FAQs
            </button>
          </div>

          {/* Checkout action */}
          <div className="flex flex-col items-center md:items-end">
            <span className="text-[10px] tracking-widest text-moon/50 block uppercase font-bold mb-1">
              THE SOFTNIGHTS SLEEP BUNDLE
            </span>
            <button
              onClick={onCheckout}
              className="bg-gold hover:bg-gold/90 text-white font-heading font-bold text-xs uppercase tracking-widest px-6 py-3 rounded-xl shadow-lg transition-transform hover:scale-[1.01] cursor-pointer"
            >
              Buy Sleep Now — ₹299
            </button>
          </div>
        </div>

        {/* Brand voice message from page 9 */}
        <div className="text-center space-y-4 max-w-xl mx-auto pt-4">
          <h3 className="font-serif font-bold text-xl text-white">
            Your Child Can Sleep. And So Can You.
          </h3>
          <p className="text-xs text-moon/70 leading-relaxed font-sans">
            Please remember: Sleep is a developmental milestone, not a competition. You are doing an incredible job. Be gentle with yourself tonight.
          </p>
        </div>

        {/* Bottom copyright segment */}
        <div className="flex flex-col sm:flex-row items-center justify-between text-[11px] text-moon/40 gap-4 pt-4">
          <div className="flex items-center gap-1.5 font-medium">
            <span>&copy; {currentYear} Softnights. All rights respected.</span>
            <span>&bull;</span>
            <a
              href="https://calmraising.com/products/calm-raising"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gold transition-colors inline-flex items-center gap-0.5"
            >
              Original Calm Raising Style <ExternalLink className="w-2.5 h-2.5" />
            </a>
          </div>

          <div className="flex items-center gap-1">
            <span>Made with</span>
            <Heart className="w-3.5 h-3.5 text-blush fill-blush/20" />
            <span>for Parents and Babies everywhere.</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
