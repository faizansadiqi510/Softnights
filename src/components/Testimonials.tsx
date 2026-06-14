import React from "react";
import { Star, Heart } from "lucide-react";

export default function Testimonials() {
  const reviews = [
    {
      quote: "We were taking over 2 hours every single evening to bounce our 8-month-old to sleep. Within 4 nights of using the Awake Windows calendar from Section 2, he was resting without a single tear. Absolute magic.",
      pullQuote: "“From 2 hours of painful rocking to 15 minutes of peaceful yawning.”",
      author: "Priya & Rajesh Sharma",
      babyAge: "Parents of Kabir (8 months)",
      stars: 5,
    },
    {
      quote: "My 2-year-old would wake up demanding water and stories at least 3 times a night. The settling sequences and biological bedtime tips in the Main Guide completely changed our evenings. Bedtime issues vanished.",
      pullQuote: "“The gentle bedtime sequence turned negotiations into high-fives.”",
      author: "Ananya & Rohan Mehra",
      babyAge: "Parents of Kiara (2.5 years)",
      stars: 5,
    },
    {
      quote: "I thought sleep-training had to mean letting my baby cry himself to exhaustion. Sleep Solutions is so gentle. We changed the nursing dependency step-by-step. He is sleeping through the night!",
      pullQuote: "“Gentle sleep support that didn't break our maternal bond.”",
      author: "Neha Deshmukh",
      babyAge: "Mom of Aarav (6 months)",
      stars: 5,
    },
  ];

  return (
    <section className="bg-sage/5 py-16 md:py-20 px-6" id="testimonials-section">
      <div className="max-w-4xl mx-auto space-y-12">
        
        {/* Title */}
        <div className="text-center space-y-3">
          <span className="text-[11px] font-heading font-bold text-sage uppercase tracking-wider">
            LOVED BY EXHAUSTED HOUSEHOLDS
          </span>
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-charcoal">
            Restored homes, reconnected parents
          </h2>
          <p className="text-sm md:text-base text-warm-grey max-w-xl mx-auto">
            Read how other parents went from survival mode to thriving evenings, utilizing the predictable solutions from our guides.
          </p>
        </div>

        {/* Carousel layout/Grid */}
        <div className="grid md:grid-cols-3 gap-6">
          {reviews.map((rev, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-3xl border border-sage/10 shadow-sm flex flex-col justify-between"
            >
              <div className="space-y-4">
                {/* Stars */}
                <div className="flex items-center gap-0.5 text-gold">
                  {[...Array(rev.stars)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-gold text-transparent" />
                  ))}
                </div>

                {/* Main Quote */}
                <p className="text-xs text-warm-grey leading-relaxed font-sans">
                  &ldquo;{rev.quote}&rdquo;
                </p>
              </div>

              {/* Italic highlight block with Blush color (Rule #06: Pull quotes in Lato Italic with Blush colour) */}
              <div className="mt-5 pt-4 border-t border-sage/10 space-y-2">
                <span className="font-sans italic text-xs text-blush block font-medium">
                  {rev.pullQuote}
                </span>

                <div className="flex items-center gap-2">
                  <div className="w-6 h-6 bg-blush/15 rounded-full flex items-center justify-center text-charcoal flex-shrink-0">
                    <Heart className="w-3.5 h-3.5 text-blush fill-blush/25" />
                  </div>
                  <div>
                    <h4 className="font-heading font-bold text-xs text-charcoal">
                      {rev.author}
                    </h4>
                    <span className="text-[10px] text-warm-grey block -mt-0.5">
                      {rev.babyAge}
                    </span>
                  </div>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
