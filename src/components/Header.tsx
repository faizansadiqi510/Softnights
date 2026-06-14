import React from "react";
import Logo from "./Logo";
import { Moon } from "lucide-react";

interface HeaderProps {
  onCheckout: () => void;
}

export default function Header({ onCheckout }: HeaderProps) {
  const scrollToId = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header className="sticky top-0 z-40 bg-cream/90 backdrop-blur-sm border-b border-sage/10 py-3.5 px-6" id="app-header">
      <div className="max-w-6xl mx-auto flex items-center justify-between">
        
        {/* Brand Logo */}
        <Logo variant="light" className="cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} />

        {/* Minimal Nav links */}
        <nav className="hidden md:flex items-center gap-7">
          <button
            onClick={() => scrollToId("pain-points-section")}
            className="text-xs font-heading font-semibold hover:text-sage text-charcoal tracking-wide transition-colors uppercase cursor-pointer"
          >
            The Battle
          </button>
          <button
            onClick={() => scrollToId("sleep-assessment-quiz")}
            className="text-xs font-heading font-semibold hover:text-sage text-charcoal tracking-wide transition-colors uppercase cursor-pointer"
          >
            Sleep Quiz
          </button>
          <button
            onClick={() => scrollToId("what-is-included-section")}
            className="text-xs font-heading font-semibold hover:text-sage text-charcoal tracking-wide transition-colors uppercase cursor-pointer"
          >
            Inside The Guide
          </button>
          <button
            onClick={() => scrollToId("faq-section")}
            className="text-xs font-heading font-semibold hover:text-sage text-charcoal tracking-wide transition-colors uppercase cursor-pointer"
          >
            FAQs
          </button>
        </nav>

        {/* Purchase Trigger */}
        <div className="flex items-center gap-3">
          <button
            onClick={() => scrollToId("pricing-section")}
            className="bg-gold hover:bg-gold/90 text-white text-[10px] md:text-xs font-heading font-bold uppercase tracking-widest px-3.5 md:px-5 py-2 md:py-2.5 rounded-full shadow-md hover:scale-[1.02] active:scale-[0.98] transition-transform flex items-center gap-1.5 cursor-pointer"
          >
            <Moon className="w-3.5 h-3.5" />
            <span>Get Sleep Guide</span>
          </button>
        </div>

      </div>
    </header>
  );
}
