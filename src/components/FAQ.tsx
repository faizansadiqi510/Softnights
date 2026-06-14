import React, { useState } from "react";
import { Plus, Minus, HelpCircle } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      q: "Does this involve letting my baby 'Cry It Out'?",
      a: "Absolutely not. We believe that leaving a terrified baby in a dark room to cry until their nervous system shuts down is exhausting for parents and physiological overload for infants. Our guides teach gentle, progressive fading. You remain in the room, supporting and validating your child as they learn to link sleep cycles naturally.",
    },
    {
      q: "My child is 2.5 years old. Is it too late to start?",
      a: "It is never too late. In fact, Section 5 of the Main Guide specializes entirely in Toddlers and Preschoolers (1 to 4 years old). We introduce gentle bedtime agreements and natural boundary-setting patterns that toddler age groups respond to beautifully, turning stressful protests into an enjoyable routine.",
    },
    {
      q: "How soon can we expect to see sleep improvements?",
      a: "While every child's temperament differs slightly, parents implementing the Awake Window Adjustments and the Gentle Settling sequences usually see a noticeable ease in bedtime stalling within 3 to 4 nights. Midnight waking frequency reduces step-by-step over 7 to 10 nights.",
    },
    {
      q: "What is your refund policy if the system fails for us?",
      a: "We want this to be an absolute relief, not a risk. If you try our Softnights methods for 14 days and find that bedtime hasn't become calmer and your baby is still waking constantly, simply send an email to our support, and we will issue an immediate, 100% money-back refund. No questions, no hassle.",
    },
    {
      q: "How are the guides delivered after purchase?",
      a: "They are delivered instantly as premium, standard PDF eBooks. The second your purchase is completed, we email you a secure download link so you can immediately read them on any phone, tablet, computer, or digital e-reader.",
    },
  ];

  const handleToggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section className="bg-cream py-16 md:py-20 px-6 border-t border-sage/10" id="faq-section">
      <div className="max-w-3xl mx-auto space-y-10">
        
        {/* Title */}
        <div className="text-center space-y-3">
          <span className="text-[11px] font-heading font-bold text-sage uppercase tracking-wider">
            COMMON INQUIRIES
          </span>
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-charcoal">
            Addressing Parental Worries
          </h2>
          <p className="text-sm text-warm-grey max-w-lg mx-auto">
            We understand how hard it is to spend money when you are completely exhausted. Here is complete transparency about our products.
          </p>
        </div>

        {/* FAQs */}
        <div className="space-y-3">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="bg-white rounded-2xl border border-sage/10 overflow-hidden shadow-sm transition-all"
              >
                <button
                  onClick={() => handleToggle(idx)}
                  className="w-full flex items-center justify-between p-5 text-left font-heading font-semibold text-charcoal hover:text-sage text-sm md:text-base transition-colors focus:outline-none cursor-pointer"
                >
                  <span className="pr-4">{faq.q}</span>
                  <div className="w-6 h-6 rounded-full bg-cream hover:bg-sage/10 flex items-center justify-center shrink-0 text-warm-grey">
                    {isOpen ? <Minus className="w-3.5 h-3.5 text-sage" /> : <Plus className="w-3.5 h-3.5" />}
                  </div>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <div className="px-5 pb-5 pt-1 text-xs md:text-sm text-warm-grey leading-relaxed font-sans border-t border-sage/5">
                        {faq.a}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
