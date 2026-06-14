import React from "react";
import { AlertTriangle, Clock, ShieldX, Heart, CheckCircle2, UserCheck } from "lucide-react";

export default function PainPoints() {
  return (
    <section className="bg-sage/5 py-16 md:py-20 px-6" id="pain-points-section">
      <div className="max-w-4xl mx-auto space-y-12">
        
        {/* Section title (Nunito Heading) */}
        <div className="text-center space-y-3">
          <span className="text-[11px] font-heading font-bold text-sage uppercase tracking-wider">
            RELATABLE REALITY
          </span>
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-charcoal">
            Does bed-time feel like an endless negotiation?
          </h2>
          <p className="text-sm md:text-base text-warm-grey max-w-xl mx-auto">
            You count the hours, dreading the sunset. By the time they finally drift off, you are too depleted to connect, relax, or simply breathe.
          </p>
        </div>

        {/* Emotion comparison cards */}
        <div className="grid md:grid-cols-2 gap-8">
          
          {/* Card 1: The exhausting loop */}
          <div className="bg-white p-6 md:p-8 rounded-3xl border border-blush/20 shadow-sm relative overflow-hidden flex flex-col justify-between">
            <div className="absolute top-0 right-0 w-24 h-24 bg-blush/5 rounded-full blur-xl" />
            <div>
              <div className="w-10 h-10 bg-blush/10 text-blush rounded-xl flex items-center justify-center mb-5">
                <AlertTriangle className="w-5 h-5" />
              </div>
              
              <h3 className="font-heading font-bold text-lg text-charcoal mb-4">
                The Bedtime Battle Loop
              </h3>

              <ul className="space-y-3.5 text-xs text-warm-grey">
                <li className="flex items-start gap-2.5">
                  <span className="text-blush font-semibold mt-0.5">✕</span>
                  <span><strong>The 2-Hour Stall:</strong> Endless negotiations, demands for cups of water, and 'one more kiss' delays.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="text-blush font-semibold mt-0.5">✕</span>
                  <span><strong>Hourly Wakings:</strong> Bouncing, rocking, or feeding back to sleep 4+ times a night.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="text-blush font-semibold mt-0.5">✕</span>
                  <span><strong>Waking Up Defeated:</strong> Starting your days at 5:00 AM completely drained and emotionally raw.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="text-blush font-semibold mt-0.5">✕</span>
                  <span><strong>Quiet Guilt:</strong> Wondering what you did wrong and feeling like everyone else figured this out.</span>
                </li>
              </ul>
            </div>

            {/* Pull Quote italic */}
            <div className="mt-8 pt-4 border-t border-sage/10">
              <span className="font-sans italic text-xs text-blush">
                “I was sitting on the nursery floor at 3:00 AM sobbing, wondering why my baby wouldn't just close his eyes.”
              </span>
            </div>
          </div>

          {/* Card 2: The Sleep Solutions way */}
          <div className="bg-white p-6 md:p-8 rounded-3xl border border-sage-light/20 shadow-sm relative overflow-hidden flex flex-col justify-between">
            <div className="absolute top-0 right-0 w-24 h-24 bg-sage/5 rounded-full blur-xl" />
            <div>
              <div className="w-10 h-10 bg-sage/10 text-sage rounded-xl flex items-center justify-center mb-5 animate-pulse">
                <Heart className="w-5 h-5 fill-sage/10" />
              </div>

              <h3 className="font-heading font-bold text-lg text-charcoal mb-4">
                The Cozy Restored Evening
              </h3>

              <ul className="space-y-3.5 text-xs text-warm-grey">
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-sage mt-0.5 shrink-0" />
                  <span><strong>Peaceful 15-Min Drifting:</strong> Your child enters their natural sleep window relaxed and ready.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-sage mt-0.5 shrink-0" />
                  <span><strong>Solid, Restorative Blocks:</strong> They naturally bridge micro-sleep cycles independently without crying.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-sage mt-0.5 shrink-0" />
                  <span><strong>Reclaimed Personal Time:</strong> Evenings are yours again. Read a book, talk to your partner, or sleep.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-sage mt-0.5 shrink-0" />
                  <span><strong>Quiet Confidence:</strong> Waking up fully rested, knowing you have a reliable sleep rhythm.</span>
                </li>
              </ul>
            </div>

            {/* Pull Quote italic */}
            <div className="mt-8 pt-4 border-t border-sage/10">
              <span className="font-sans italic text-xs text-sage">
                “The first night she slept 11 hours straight, I kept sneaking in to check her. I couldn't believe it was real.”
              </span>
            </div>
          </div>

        </div>

        {/* Emotionally Healing Callout (The core message on Page 6) */}
        <div className="bg-sage/10 rounded-3xl p-6 md:p-8 text-center max-w-2xl mx-auto border border-sage/10 shadow-sm">
          <span className="text-[11px] font-heading font-bold text-sage uppercase tracking-wider block mb-1">
            EXHALING TRUTH
          </span>
          <p className="font-serif text-lg md:text-xl text-charcoal italic leading-relaxed">
            &ldquo;You are not a bad parent. You just do not have a system yet.&rdquo;
          </p>
          <span className="text-xs text-warm-grey mt-2 block font-heading">
            — From the Sleep Solutions comforting manifesto
          </span>
        </div>

      </div>
    </section>
  );
}
