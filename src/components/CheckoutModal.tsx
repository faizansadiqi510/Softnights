import React, { useState } from "react";
import { Check, ShieldCheck, Heart, Sparkles, Lock, CreditCard, ChevronRight, X, AlertCircle } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import Logo from "./Logo";

interface CheckoutModalProps {
  isOpen: boolean;
  onClose: () => void;
  images: {
    coverMain: string;
    coverBonus: string;
    coverHero: string;
    customStamp: string;
  };
}

export default function CheckoutModal({ isOpen, onClose, images }: CheckoutModalProps) {
  const [step, setStep] = useState<"form" | "loading" | "success">("form");
  const [email, setEmail] = useState("");
  const [parentName, setParentName] = useState("");
  const [childAge, setChildAge] = useState("infant");
  const [cardNumber, setCardNumber] = useState("");
  const [expiry, setExpiry] = useState("");
  const [cvv, setCvv] = useState("");
  const [termsAccepted, setTermsAccepted] = useState(true);
  const [errorMsg, setErrorMsg] = useState("");

  const handleApplySimulatedPay = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !parentName) {
      setErrorMsg("Please fill in your name and email address.");
      return;
    }
    if (!cardNumber || !expiry || !cvv) {
      setErrorMsg("Card details are required for this custom-branded simulation.");
      return;
    }
    setErrorMsg("");
    setStep("loading");
    setTimeout(() => {
      setStep("success");
    }, 2000);
  };

  const fillDemoData = () => {
    setEmail("parent@example.com");
    setParentName("Neha Sharma");
    setCardNumber("4111 2222 3333 4444");
    setExpiry("12/28");
    setCvv("123");
    setErrorMsg("");
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-charcoal/40 backdrop-blur-sm">
        {/* Modal content cardboard look */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 15 }}
          className="relative w-full max-w-2xl bg-cream rounded-3xl overflow-hidden shadow-2xl border border-sage/20 text-charcoal flex flex-col md:flex-row max-h-[90vh] md:max-h-[85vh]"
          id="checkout-modal-container"
        >
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 rounded-full hover:bg-sage/10 text-warm-grey hover:text-charcoal transition-colors z-10 animate-fade-in"
            aria-label="Close checkout"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Left Panel: Summary, Testimonial and Trust (Blush/Moon Theme) */}
          <div className="w-full md:w-5/12 bg-sage/10 p-6 md:p-8 flex flex-col justify-between border-b md:border-b-0 md:border-r border-sage/10 overflow-y-auto">
            <div className="space-y-4">
              <Logo variant="light" showSubtitle={false} className="mb-2" />
              
              <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-gold/15 text-gold-dark text-[10px] font-bold uppercase rounded-full tracking-wider">
                <Sparkles className="w-3.5 h-3.5 text-gold" />
                <span className="text-charcoal font-medium font-heading">Softnights Bundle</span>
              </div>

              {/* Graphic cover mini display if custom cover exists */}
              <div className="flex gap-3 items-center">
                {images.coverMain ? (
                  <img
                    src={images.coverMain}
                    alt="Main Guide cover"
                    className="w-12 h-16 object-cover rounded-md shadow-md referrerPolicy='no-referrer'"
                  />
                ) : (
                  <div className="w-12 h-16 bg-gradient-to-br from-sage to-emerald-950 rounded-md flex items-center justify-center text-white text-[7px] font-bold text-center p-1 leading-tight shadow-md">
                    Your Child Can Sleep
                  </div>
                )}

                {images.coverBonus ? (
                  <img
                    src={images.coverBonus}
                    alt="Bonus guide cover"
                    className="w-12 h-16 object-cover rounded-md shadow-md referrerPolicy='no-referrer'"
                  />
                ) : (
                  <div className="w-12 h-16 bg-gradient-to-br from-indigo-900 to-purple-950 rounded-md flex items-center justify-center text-white text-[7px] font-bold text-center p-1 leading-tight shadow-md">
                    The Night Waking Fix
                  </div>
                )}
              </div>

              <h3 className="font-heading font-bold text-base text-charcoal leading-snug">
                Your Child Can Sleep. And So Can You.
              </h3>
              <p className="font-sans text-[11px] text-warm-grey leading-relaxed">
                The comprehensive step-by-step framework to end bedtime struggles and restore absolute peace to your home.
              </p>

              {/* Package Elements */}
              <ul className="space-y-2 border-t border-sage/10 pt-3">
                {[
                  "The Primary Sleep Guide (PDF)",
                  "Value Bonus: The Night Waking Fix (PDF)",
                  "Lifetime Updates & Email Support",
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-[10.5px]">
                    <Check className="w-3.5 h-3.5 text-sage flex-shrink-0 mt-0.5" />
                    <span className="text-warm-grey">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Price section & Guarantee */}
            <div className="mt-6 pt-4 border-t border-sage/10">
              <div className="flex justify-between items-baseline mb-2">
                <span className="text-xs font-medium text-warm-grey">Total Due:</span>
                <div className="flex items-baseline gap-1.5">
                  <span className="text-2xl font-heading font-bold text-charcoal">₹299</span>
                  <span className="text-xs text-warm-grey line-through">₹999.00</span>
                </div>
              </div>

              <div className="flex items-start gap-2 bg-cream/80 p-3 rounded-xl border border-gold/10">
                <Heart className="w-3.5 h-3.5 text-blush mt-0.5 fill-blush/20 flex-shrink-0" />
                <p className="text-[9.5px] text-warm-grey font-serif italic">
                  &ldquo;A completely stress-free, 100% money-back guarantee. If sleep doesn't improve in 14 days, you get a full refund instantly.&rdquo;
                </p>
              </div>
            </div>
          </div>

          {/* Right Panel: Transaction fields */}
          <div className="w-full md:w-7/12 p-6 md:p-8 overflow-y-auto flex flex-col justify-center">
            {step === "form" && (
              <form onSubmit={handleApplySimulatedPay} className="flex flex-col h-full justify-between">
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <h4 className="font-heading font-semibold text-charcoal text-base">
                      Complete Secure Purchase
                    </h4>
                    <button
                      type="button"
                      onClick={fillDemoData}
                      className="text-[10px] px-2.5 py-1 bg-sage-light/20 text-sage hover:bg-sage-light/40 rounded-full transition-colors font-medium font-heading"
                    >
                      Fill Demo Data
                    </button>
                  </div>

                  {errorMsg && (
                    <div className="mb-3 p-2.5 bg-blush/20 text-[11px] text-red-700 rounded-lg flex items-start gap-1.5 border border-blush/30">
                      <AlertCircle className="w-4 h-4 mt-0.5 flex-shrink-0" />
                      <span>{errorMsg}</span>
                    </div>
                  )}

                  <div className="space-y-3">
                    {/* Parent Name */}
                    <div>
                      <label className="block text-[10px] font-semibold text-warm-grey tracking-wider uppercase mb-1">
                        Your Full Name
                      </label>
                      <input
                        type="text"
                        required
                        value={parentName}
                        onChange={(e) => setParentName(e.target.value)}
                        placeholder="Neha Sharma"
                        className="w-full text-xs px-3.5 py-2 rounded-xl bg-white border border-sage/15 focus:outline-none focus:border-sage focus:ring-1 focus:ring-sage placeholder:text-warm-grey/40 text-charcoal shadow-sm transition-colors"
                      />
                    </div>

                    {/* Email */}
                    <div>
                      <label className="block text-[10px] font-semibold text-warm-grey tracking-wider uppercase mb-1">
                        Your Email Address
                      </label>
                      <input
                        type="email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="sarah@example.com"
                        className="w-full text-xs px-3.5 py-2 rounded-xl bg-white border border-sage/15 focus:outline-none focus:border-sage focus:ring-1 focus:ring-sage placeholder:text-warm-grey/40 text-charcoal shadow-sm transition-colors"
                      />
                      <span className="text-[9.5px] text-warm-grey mt-0.5 block">
                        We will send the PDF guides instantly to this email.
                      </span>
                    </div>

                    {/* Card details */}
                    <div>
                      <label className="block text-[10px] font-semibold text-warm-grey tracking-wider uppercase mb-1">
                        Card Number
                      </label>
                      <div className="relative">
                        <input
                          type="text"
                          required
                          value={cardNumber}
                          onChange={(e) => setCardNumber(e.target.value)}
                          placeholder="4111 2222 3333 4444"
                          maxLength={19}
                          className="w-full text-xs pl-10 pr-4 py-2 rounded-xl bg-white border border-sage/15 focus:outline-none focus:border-sage focus:ring-1 focus:ring-sage placeholder:text-warm-grey/40 text-charcoal shadow-sm transition-colors"
                        />
                        <CreditCard className="w-4 h-4 text-warm-grey/50 absolute left-3.5 top-2.5" />
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-3">
                      <div>
                        <label className="block text-[10px] font-semibold text-warm-grey tracking-wider uppercase mb-1">
                          Expiry Date
                        </label>
                        <input
                          type="text"
                          required
                          value={expiry}
                          onChange={(e) => setExpiry(e.target.value)}
                          placeholder="MM/YY"
                          maxLength={5}
                          className="w-full text-xs px-3.5 py-2 rounded-xl bg-white border border-sage/15 focus:outline-none focus:border-sage focus:ring-1 focus:ring-sage placeholder:text-warm-grey/40 text-charcoal shadow-sm transition-colors text-center"
                        />
                      </div>
                      <div>
                        <label className="block text-[10px] font-semibold text-warm-grey tracking-wider uppercase mb-1">
                          CVV / CVC
                        </label>
                        <input
                          type="password"
                          required
                          value={cvv}
                          onChange={(e) => setCvv(e.target.value)}
                          placeholder="123"
                          maxLength={4}
                          className="w-full text-xs px-3.5 py-2 rounded-xl bg-white border border-sage/15 focus:outline-none focus:border-sage focus:ring-1 focus:ring-sage placeholder:text-warm-grey/40 text-charcoal shadow-sm transition-colors text-center"
                        />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Final Submit CTA */}
                <div className="mt-6 pt-4 border-t border-sage/10">
                  <div className="flex gap-2 items-center text-[10px] text-warm-grey mb-3">
                    <input
                      type="checkbox"
                      id="terms-checkbox"
                      checked={termsAccepted}
                      onChange={(e) => setTermsAccepted(e.target.checked)}
                      className="rounded border-sage/20 text-sage focus:ring-sage h-3.5 w-3.5"
                    />
                    <label htmlFor="terms-checkbox" className="leading-tight select-none cursor-pointer">
                      Activate lifetime book delivery. This is a secure payment simulation.
                    </label>
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-gold hover:bg-gold/90 text-white font-heading font-semibold py-3.5 px-6 rounded-2xl shadow-lg transition-transform hover:scale-[1.01] active:scale-[0.99] flex items-center justify-center gap-2 cursor-pointer text-sm uppercase tracking-wider"
                    disabled={!termsAccepted}
                  >
                    <Lock className="w-3.5 h-3.5" />
                    <span>Get Instant Access — ₹299</span>
                    <ChevronRight className="w-4 h-4" />
                  </button>

                  <div className="flex items-center justify-center gap-1 mt-3.5 text-[11px] text-warm-grey">
                    <ShieldCheck className="w-4 h-4 text-sage" />
                    <span>Secure 256-Bit SSL Encrypted checkout</span>
                  </div>
                </div>
              </form>
            )}

            {step === "loading" && (
              <div className="flex flex-col items-center justify-center py-12">
                <div className="relative w-16 h-16 mb-4">
                  <div className="absolute inset-0 rounded-full border-4 border-sage/10 border-t-sage animate-spin" />
                  <div className="absolute inset-2 bg-cream rounded-full flex items-center justify-center">
                    <Heart className="w-5 h-5 text-blush animate-pulse fill-blush/25" />
                  </div>
                </div>
                <h4 className="font-heading font-semibold text-charcoal text-base mb-1">
                  Guarding peaceful sleep...
                </h4>
                <p className="text-xs text-warm-grey text-center max-w-xs leading-relaxed">
                  Preparing your Softnights PDF packet and custom Night Waking Fix eBook. Almost ready!
                </p>
              </div>
            )}

            {step === "success" && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="flex flex-col items-center justify-center text-center py-6 h-full"
              >
                <div className="w-14 h-14 bg-sage/20 rounded-full flex items-center justify-center mb-4">
                  <Check className="w-7 h-7 text-sage" />
                </div>
                
                <h3 className="font-heading font-bold text-xl md:text-2xl text-charcoal mb-2">
                  Sleep is on the way, {parentName.split(" ")[0]}!
                </h3>
                
                <p className="text-xs md:text-sm text-warm-grey max-w-sm mb-6 font-sans leading-relaxed">
                  We have sent the **Softnights PDF Guide** and all your bonus materials to <strong className="text-charcoal font-semibold">{email}</strong>.
                </p>

                <div className="bg-white p-4 rounded-2xl border border-sage/10 text-left w-full mb-6 max-w-md">
                  <div className="flex items-center gap-2 mb-2">
                    <Sparkles className="w-4 h-4 text-gold" />
                    <span className="text-xs font-bold text-charcoal uppercase tracking-wider">What to do next:</span>
                  </div>
                  <ol className="space-y-2 text-xs text-warm-grey list-decimal pl-4">
                    <li>Check your inbox for our welcoming letter (and spam folder, just in case).</li>
                    <li>Download your dual guides: the Main Guide and the Night Waking Fix bonus PDF.</li>
                    <li>Spend just 10 calming minutes with Chapter 1 tonight. You got this!</li>
                  </ol>
                </div>

                <button
                  onClick={onClose}
                  className="bg-sage hover:bg-sage/95 text-white font-semibold px-6 py-2.5 rounded-xl transition-colors font-heading text-sm"
                >
                  Return to Page
                </button>
              </motion.div>
            )}
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
