/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import PainPoints from "./components/PainPoints";
import Quiz from "./components/Quiz";
import WhatIsIncluded from "./components/WhatIsIncluded";
import Testimonials from "./components/Testimonials";
import FAQ from "./components/FAQ";
import Footer from "./components/Footer";
import FloatingCTA from "./components/FloatingCTA";
import { Sparkles, Moon, ArrowRight, ShieldCheck, Heart } from "lucide-react";

import coverMainDefault from "./assets/images/cover_main_1781463031571.jpg";
import coverBonusDefault from "./assets/images/cover_bonus_1781463051771.jpg";

export default function App() {
  
  // Dynamic customizable store images (Main book, Night Waking bonus, Hero Illustration, Custom trust stamp/seal)
  const [images, setImages] = useState({
    coverMain: localStorage.getItem("softnights_cover_main") || coverMainDefault,
    coverBonus: localStorage.getItem("softnights_cover_bonus") || coverBonusDefault,
    coverHero: localStorage.getItem("softnights_cover_hero") || "",
    customStamp: localStorage.getItem("softnights_custom_stamp") || "",
  });

  const handleUpdateImage = (
    key: "coverMain" | "coverBonus" | "coverHero" | "customStamp",
    base64: string
  ) => {
    setImages((prev) => ({ ...prev, [key]: base64 }));
    if (base64) {
      localStorage.setItem(`softnights_${key}`, base64);
    } else {
      localStorage.removeItem(`softnights_${key}`);
    }
  };

  const handleResetAll = () => {
    const keys: ("coverMain" | "coverBonus" | "coverHero" | "customStamp")[] = [
      "coverMain",
      "coverBonus",
      "coverHero",
      "customStamp",
    ];
    keys.forEach((key) => {
      localStorage.removeItem(`softnights_${key}`);
    });
    setImages({
      coverMain: "",
      coverBonus: "",
      coverHero: "",
      customStamp: "",
    });
  };

  const handleOpenCheckout = () => {
    window.open("https://superprofile.bio/vp/6a2ef256e5b8d70013ac3be1", "_blank", "noopener,noreferrer");
  };

  return (
    <div className="relative min-h-screen flex flex-col bg-cream text-charcoal font-sans selection:bg-sage/20 selection:text-charcoal antialiased overflow-x-hidden">
      
      {/* Top Banner Reassurance */}
      <div className="bg-sage text-white text-[11px] font-heading font-bold text-center py-2 px-4 uppercase tracking-widest flex items-center justify-center gap-1.5 select-none shrink-0" id="topbar-comfort">
        <Sparkles className="w-3.5 h-3.5 animate-pulse text-gold fill-gold/10" />
        <span>Join 4,200+ Indian parents who reclaimed peaceful sleep this month</span>
      </div>

      {/* Header */}
      <Header onCheckout={handleOpenCheckout} />

      {/* Main Single Page Contents */}
      <main className="flex-grow">
        
        {/* HERO SECTION */}
        <Hero onOpenCheckout={handleOpenCheckout} images={images} />

        {/* EMOTIONAL PAIN POINTS COMPARISON */}
        <PainPoints />

        {/* INTERACTIVE COMPANION ASSESSMENT (QUIZ) */}
        <section className="bg-cream py-16 px-6 relative overflow-hidden">
          <div className="absolute top-1/2 left-0 w-80 h-80 bg-sage-light/10 rounded-full blur-3xl pointer-events-none -translate-x-1/2 -translate-y-1/2" />
          <div className="max-w-4xl mx-auto space-y-10">
            <div className="text-center space-y-3">
              <span className="text-[11px] font-heading font-bold text-gold uppercase tracking-wider">
                PERSONALIZED PERSPECTIVE
              </span>
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-charcoal">
                Interactive Sleep Diagnostician
              </h2>
              <p className="text-sm md:text-base text-warm-grey max-w-xl mx-auto">
                Is it a developmental leap? A sleep association? Or cortisol window delay? Take our custom 45-second assessment to instantly understand their nightly patterns.
              </p>
            </div>
            
            <Quiz onOpenCheckout={handleOpenCheckout} />
          </div>
        </section>

        {/* WHAT'S INCLUDED IN THE COMPLETE BUNDLE */}
        <WhatIsIncluded onOpenCheckout={handleOpenCheckout} images={images} />

        {/* REASSURING TRUST SIGNALS & SOCIAL PROOF */}
        <Testimonials />

        {/* FREQUENTLY ASKED HOUSEHOLD QUESTIONS */}
        <FAQ />

        {/* FINAL CLOSING EMHOTIONAL CTA BRIDGE */}
        <section className="bg-sage/10 py-20 px-6 text-center relative overflow-hidden" id="closing-cta-section">
          {/* Waves and decorative items */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-cream rounded-full blur-3xl opacity-50 pointer-events-none" />
          
          <div className="max-w-2xl mx-auto space-y-8 relative z-10">
            <div className="w-12 h-12 bg-sage text-white rounded-full flex items-center justify-center mx-auto shadow shadow-sage/30 animate-pulse">
              <Moon className="w-6 h-6 fill-white text-transparent" />
            </div>

            <div className="space-y-4">
              <h2 className="text-3xl md:text-5xl font-serif font-bold text-charcoal tracking-tight leading-tight">
                Gift your family the relief of healthy, deep rest tonight.
              </h2>
              
              <p className="text-sm md:text-base text-warm-grey leading-relaxed max-w-lg mx-auto">
                No subscription. No upsells. No physical clutter. For just the price of a single bedtime takeout meal, claim a gentle system that lasts a lifetime.
              </p>
            </div>

            <div className="flex flex-col items-center gap-3 max-w-sm mx-auto">
              <button
                onClick={handleOpenCheckout}
                className="w-full bg-gold hover:bg-gold/90 text-white font-heading font-bold py-4 px-8 rounded-2xl shadow-xl hover:scale-[1.01] active:scale-[0.99] transition-transform flex items-center justify-center gap-2 cursor-pointer text-base uppercase tracking-wider"
              >
                <Moon className="w-4 h-4 fill-white" />
                <span>Buy The Complete Guide — ₹299</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <div className="flex items-center justify-center gap-3.5 text-xs text-warm-grey pt-1.5 font-medium">
                <span className="flex items-center gap-1 shrink-0">
                  <ShieldCheck className="w-4 h-4 text-sage" />
                  14-Day Money Back Guarantee
                </span>
                <span>&bull;</span>
                <span className="flex items-center gap-1 shrink-0">
                  <Heart className="w-4 h-4 text-blush fill-blush/15" />
                  Instant Download
                </span>
              </div>
            </div>

          </div>
        </section>

      </main>

      {/* Footer */}
      <Footer onCheckout={handleOpenCheckout} />

      {/* Scrolling / Floating dynamic bottom target CTA */}
      <FloatingCTA onOpenCheckout={handleOpenCheckout} />

    </div>
  );
}
