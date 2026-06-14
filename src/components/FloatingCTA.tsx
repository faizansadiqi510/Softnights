import React, { useState, useEffect } from "react";
import { Moon, ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

export default function FloatingCTA({ onOpenCheckout }: { onOpenCheckout: () => void }) {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show when scrolled down past 500px
      if (window.scrollY > 450) {
        setShow(true);
      } else {
        setShow(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ y: 80, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 80, opacity: 0 }}
          className="fixed bottom-0 left-0 right-0 z-40 bg-cream/95 backdrop-blur-sm border-t border-sage/15 py-3 px-6 shadow-xl flex items-center justify-between pointer-events-auto"
          id="floating-sticky-cta"
        >
          <div className="max-w-6xl mx-auto w-full flex flex-col sm:flex-row items-center justify-between gap-3">
            
            <div className="hidden sm:block text-left select-none">
              <span className="text-[10px] tracking-widest font-heading font-bold text-sage block uppercase">
                SOFTNIGHTS COMPANION
              </span>
              <p className="text-xs font-semibold text-charcoal font-heading -mt-0.5">
                The Bedtime Guide + Night Waking Fix Bonus Pack
              </p>
            </div>

            <div className="flex items-center gap-4 w-full sm:w-auto">
              {/* Pricing breakdown */}
              <div className="flex items-baseline gap-1 mr-2 select-none">
                <span className="text-xl font-heading font-bold text-charcoal">₹299</span>
                <span className="text-[10px] text-warm-grey line-through">₹999</span>
              </div>

              {/* Gold Conversion Button */}
              <button
                onClick={onOpenCheckout}
                className="w-full sm:w-auto bg-gold hover:bg-gold/90 text-white text-xs font-heading font-bold uppercase tracking-wider py-2.5 px-6 rounded-xl shadow-md transition-transform hover:scale-[1.02] active:scale-[0.98] flex items-center justify-center gap-1.5 cursor-pointer ml-auto"
              >
                <Moon className="w-4 h-4 fill-white text-transparent" />
                <span>Get Sleep Tonight</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>

          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
