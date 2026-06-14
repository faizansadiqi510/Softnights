import React from "react";
import { Sparkles, ArrowRight, Play, Heart, Moon, Image as ImageIcon } from "lucide-react";
import { motion } from "motion/react";

interface HeroProps {
  onOpenCheckout: () => void;
  images: {
    coverMain: string;
    coverBonus: string;
    coverHero: string;
    customStamp: string;
  };
}

function BookCoverMockup({
  title,
  subtitle,
  customImage,
  bgColorClass,
  badgeText
}: {
  title: string;
  subtitle: string;
  customImage?: string;
  bgColorClass: string;
  badgeText: string;
}) {
  if (customImage) {
    return (
      <div className="relative aspect-[3/4] w-36 sm:w-44 md:w-48 rounded-2xl overflow-hidden shadow-2xl border border-sage/10 transition-transform duration-300 hover:rotate-3 hover:scale-[1.03] select-none bg-cream flex-shrink-0">
        <img src={customImage} alt={title} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
      </div>
    );
  }

  return (
    <div className={`relative aspect-[3/4] w-36 sm:w-44 md:w-48 rounded-2xl p-4 md:p-5 flex flex-col justify-between shadow-2xl border border-white/10 transition-transform duration-300 hover:-rotate-1 hover:scale-[1.03] select-none ${bgColorClass} overflow-hidden text-left flex-shrink-0`}>
      {/* Spine highlight gradient */}
      <div className="absolute top-0 left-0 bottom-0 w-2.5 bg-gradient-to-r from-white/20 to-transparent" />
      <div className="absolute top-0 left-2.5 bottom-0 w-[1px] bg-charcoal/10" />

      {/* Stars decoration */}
      <div className="absolute top-3 right-3 opacity-25">
        <svg className="w-4 h-4 text-gold fill-gold" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 .587l3.668 7.431 8.2 1.192-5.934 5.787 1.4 8.168L12 18.896 4.666 22.335l1.4-8.168L.132 9.21l8.2-1.192z" />
        </svg>
      </div>

      <div className="space-y-1.5 md:space-y-2">
        <span className="text-[7.5px] md:text-[8px] tracking-widest font-heading font-bold text-white/50 uppercase block">
          {badgeText}
        </span>
        <h4 className="font-serif font-bold text-xs md:text-sm text-white leading-tight mt-1">
          {title}
        </h4>
        <div className="w-6 h-[1.5px] bg-gold block rounded" />
      </div>

      <div className="space-y-1.5 mt-auto">
        <p className="text-[8.5px] md:text-[9.5px] text-white/85 leading-normal md:leading-relaxed font-sans">
          {subtitle}
        </p>
        <span className="text-[7px] font-mono font-semibold text-white/50 tracking-wider uppercase block">
          Softnights Press ©
        </span>
      </div>
    </div>
  );
}

export default function Hero({ onOpenCheckout, images }: HeroProps) {
  const [timeLeft, setTimeLeft] = React.useState(() => {
    const saved = sessionStorage.getItem("softnights_countdown");
    if (saved) {
      const parsed = parseInt(saved, 10);
      if (parsed > 0) return parsed;
    }
    return 14 * 60 + 58; // 14m 58s
  });

  React.useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        const next = prev > 0 ? prev - 1 : 14 * 60 + 58;
        sessionStorage.setItem("softnights_countdown", next.toString());
        return next;
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}m ${secs < 10 ? "0" : ""}${secs}s`;
  };
  
  const scrollToQuiz = () => {
    const el = document.getElementById("sleep-assessment-quiz");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToPricing = () => {
    const el = document.getElementById("pricing-section");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative overflow-hidden bg-cream pt-10 pb-16 px-6 md:py-24 border-b border-sage/10 text-center md:text-left" id="hero-section">
      
      {/* Wave decorations */}
      <div className="absolute top-8 left-1/10 w-28 h-28 bg-sage/12 rounded-full blur-2xl pointer-events-none" />
      <div className="absolute top-2 right-1/10 w-24 h-24 bg-blush/20 rounded-full blur-2xl pointer-events-none" />
      <div className="absolute bottom-12 right-2/10 w-44 h-44 bg-moon/20 rounded-full blur-3xl pointer-events-none animate-pulse" />
      <div className="absolute bottom-4 left-2/10 w-20 h-20 bg-gold/10 rounded-full blur-xl pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="grid md:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* Left Column: Headline and Actions */}
          <div className="md:col-span-7 space-y-6 md:space-y-8 flex flex-col items-center md:items-start">
            
            {/* Category badge */}
            <div className="inline-flex items-center gap-1.5 px-3.5 py-1 bg-sage-light/30 border border-sage/10 text-charcoal/80 text-xs font-semibold rounded-full select-none">
              <Moon className="w-3 px-0 h-3 text-sage inline-block mr-1 fill-sage/10" />
              <span className="font-heading tracking-widest uppercase text-[10px]">SOFTNIGHTS PRESET</span>
            </div>

            {/* H1 compelling heading */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-charcoal tracking-tight leading-tight md:leading-[1.12]">
              Your Child Can Sleep.
              <br />
              <span className="relative inline-block mt-1">
                And So Can You.
                <span className="absolute bottom-1 left-0 w-full h-[6px] bg-blush/30 rounded-full" />
              </span>
            </h1>

            {/* Subtitle */}
            <p className="font-heading text-base md:text-lg text-warm-grey max-w-xl leading-relaxed font-semibold">
              For parents who want calmer bedtimes and gentle, uninterrupted sleep for their little one. No aggressive methods, no endless crying.
            </p>

            {/* Highlight Banner */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-blush/15 text-charcoal rounded-2xl border border-blush/25 text-xs text-left">
              <span className="bg-blush text-white text-[10px] font-heading font-bold px-2 py-0.5 rounded-md uppercase tracking-wider">
                BONUS INCLUDED
              </span>
              <span className="font-sans font-semibold text-charcoal/90">
                The Night Waking Fix Bonus Guide
              </span>
            </div>

            {/* Countdown Scarcity Timer */}
            <div className="flex items-center gap-2.5 text-xs text-warm-grey bg-sage/5 py-1.5 px-3 rounded-xl border border-sage/10 select-none">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blush opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-blush"></span>
              </span>
              <span className="font-heading font-bold text-charcoal tracking-wide uppercase text-[10px]">Limited Offer:</span>
              <span className="bg-blush text-white font-mono font-bold px-2 py-0.5 rounded text-[10.5px]">
                {formatTime(timeLeft)}
              </span>
              <span className="text-[11px] text-warm-grey">left to secure the ₹299 bundle before price resets to ₹999</span>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 w-full max-w-md md:max-w-none pt-2">
              <button
                onClick={scrollToPricing}
                className="w-full sm:w-auto bg-gold hover:bg-gold/90 text-white font-heading font-bold py-4 px-7 rounded-2xl shadow-lg hover:scale-[1.01] active:scale-[0.99] transition-all duration-150 cursor-pointer uppercase tracking-wider text-xs flex items-center justify-center gap-2"
              >
                <Moon className="w-4 h-4 fill-white text-transparent" />
                <span>Get the Sleep Bundle — ₹299</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={scrollToQuiz}
                className="w-full sm:w-auto bg-white hover:bg-sage/10 text-charcoal border border-sage/20 hover:border-sage/40 font-heading font-semibold py-4 px-6 rounded-2xl transition-all hover:scale-[1.01] active:scale-[0.99] cursor-pointer text-xs flex items-center justify-center gap-2"
              >
                <span>Diagnose Child's Sleep</span>
              </button>
            </div>

            {/* Brand values list */}
            <div className="flex flex-wrap items-center justify-center md:justify-start gap-x-6 gap-y-3 pt-4 border-t border-sage/10 text-xs text-warm-grey select-none font-medium w-full">
              <span className="flex items-center gap-1">
                <Heart className="w-4 h-4 text-blush shrink-0 fill-blush/10" />
                Empathetic &amp; Gentle Methods
              </span>
              <span className="flex items-center gap-1">
                <Sparkles className="w-4 h-4 text-gold shrink-0" />
                No CIO (No Tears)
              </span>
              <span className="flex items-center gap-1">
                <Moon className="w-4 h-4 text-sage shrink-0" />
                Instant Download PDF Guides
              </span>
            </div>
          </div>

          {/* Right Column: Dynamic Overlapping eBooks visual */}
          <div className="md:col-span-5 flex flex-col items-center justify-center space-y-4 pt-6 md:pt-0">
            
            {images.coverHero ? (
              <div className="relative w-full max-w-sm rounded-[32px] overflow-hidden shadow-2xl border border-sage/20 bg-white p-2.5">
                <img
                  src={images.coverHero}
                  alt="Custom presentation illustration"
                  className="w-full h-auto object-cover rounded-2.5xl shadow-sm referrerPolicy='no-referrer'"
                />
                <div className="absolute top-5 right-5 bg-gold/90 text-white text-[9px] uppercase font-bold py-1 px-2.5 rounded-full shadow tracking-wider font-heading">
                  Softnights Present Cover
                </div>
              </div>
            ) : (
              <div className="relative flex items-center justify-center h-[260px] sm:h-[300px] w-full max-w-xs sm:max-w-sm select-none">
                {/* Back Book */}
                <div className="absolute left-[5%] sm:left-[8%] z-10 translate-y-3 -rotate-[8deg] hover:z-30 hover:rotate-0 hover:-translate-y-2 transition-all duration-300">
                  <BookCoverMockup
                    title="The Night Waking Fix"
                    subtitle="2am crisis solver. Sleep schedule, biological clocks and developmental leap sequential solutions."
                    customImage={images.coverBonus}
                    bgColorClass="bg-gradient-to-br from-purple-950 to-indigo-900"
                    badgeText="VALUED BONUS GUIDE"
                  />
                </div>

                {/* Front Book */}
                <div className="absolute right-[5%] sm:right-[8%] z-20 -translate-y-2 rotate-[6deg] hover:z-30 hover:rotate-0 hover:-translate-y-4 transition-all duration-300">
                  <BookCoverMockup
                    title="Your Child Can Sleep."
                    subtitle="The primary roadmap for establishing gentle, deep, lifelong biological rest rhythms. Zero CIO."
                    customImage={images.coverMain}
                    bgColorClass="bg-gradient-to-br from-sage to-emerald-950"
                    badgeText="PRIMARY GUIDE - SOFTNIGHTS"
                  />
                </div>

                {/* Dynamic Stamp seal */}
                {images.customStamp && (
                  <div className="absolute -bottom-4 -right-2 z-30 w-16 h-16 sm:w-20 sm:h-20 hover:scale-110 transition-transform">
                    <img
                      src={images.customStamp}
                      alt="Custom Verification Logo"
                      className="w-full h-full object-contain filter drop-shadow-xl referrerPolicy='no-referrer'"
                    />
                  </div>
                )}
              </div>
            )}
            
            <p className="text-[10.5px] text-warm-grey italic">
              ✨ Hover guides to view details. Secure both guides today for only ₹299.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}
