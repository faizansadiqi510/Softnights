import React, { useState } from "react";
import { Sparkles, ArrowRight, RotateCcw, AlertTriangle, Moon, Check, HelpCircle } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { QuizQuestion, QuizResult } from "../types";

export default function Quiz({ onOpenCheckout }: { onOpenCheckout: () => void }) {
  const [currentQuestionIdx, setCurrentQuestionIdx] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [showResult, setShowResult] = useState(false);

  const questions: QuizQuestion[] = [
    {
      id: "age",
      question: "How old is your sweet little one?",
      options: [
        { label: "Newborn (0 - 3 Months)", value: "newborn", description: "Navigating day/night confusion and initial patterns" },
        { label: "Infant (4 - 11 Months)", value: "infant", description: "Dealing with the infamous sleep regressions" },
        { label: "Toddler (1 - 2 Years)", value: "toddler", description: "Bedtime protests, active minds, and standing in the crib" },
        { label: "Preschooler (3+ Years)", value: "preschool", description: "Stalling, requesting 'one more glass of water', and fears" },
      ],
    },
    {
      id: "biggest_challenge",
      question: "What is your biggest bedtime battle point?",
      options: [
        { label: "Vicious Bedtime Stall", value: "stalling", description: "Taking 2+ hours with endless negotiations and bedtime protests" },
        { label: "Frequent Night Waking", value: "waking", description: "Waking up 3, 4, or 5+ times and requiring rocking or nursing to resettle" },
        { label: "Extremely Short Naps", value: "naps", description: "Struggling to nap longer than 30 minutes, keeping them cranky" },
        { label: "Impossible Early Waking", value: "early", description: "Waking up for the day at 4:30 AM or 5:00 AM, exhausted" },
      ],
    },
    {
      id: "settling_method",
      question: "How does your child currently fall asleep?",
      options: [
        { label: "Nursing, feeding, or eating to sleep", value: "feed", description: "Requires milk to drift off every single time" },
        { label: "Physical motion: Rocking, bouncing, or patting", value: "rock", description: "Loves physical movement to trigger deep drowsiness" },
        { label: "Co-sleeping or lying right next to you", value: "cosleep", description: "Cannot stay in their own mattress without a parent present" },
        { label: "Independently, but takes a highly variable time", value: "independent", description: "Capable of self-soothing but struggles in certain shifts" },
      ],
    },
  ];

  const handleSelectAnswer = (value: string) => {
    const nextAnswers = { ...answers, [questions[currentQuestionIdx].id]: value };
    setAnswers(nextAnswers);

    if (currentQuestionIdx < questions.length - 1) {
      setCurrentQuestionIdx((prev) => prev + 1);
    } else {
      setShowResult(true);
    }
  };

  const resetQuiz = () => {
    setAnswers({});
    setCurrentQuestionIdx(0);
    setShowResult(false);
  };

  const getCustomResult = (): QuizResult => {
    const age = answers["age"];
    const challenge = answers["biggest_challenge"];
    
    // Custom diagnostic responses based on combinations
    if (challenge === "waking") {
      return {
        title: "The Fragmented Sleep Association Cycle",
        syndrome: "Fragile sleep transition spikes",
        description: "Your child has linked falling asleep with external triggers (like feeding or rocking). Whenever they complete a light sleep cycle (every 45 minutes), they arouse slightly and call out for that exact system to be repeated.",
        recommendation: "Our 'Gentle Lay-Down Setup' in Section 3 of the Sleep Solutions Guide specifically teaches how to slowly separate the sleep association from feeding without traumatic crying.",
      };
    }

    if (challenge === "stalling") {
      return {
        title: "The Overtired Sleep Window Mismatch",
        syndrome: "Melatonin-cortisol battlefront",
        description: "The '2-hour bedtime struggle' is actually a physiological response: if kids miss their biological sleep window, their brains produce a surge of cortisol (stress hormone) and adrenaline, giving them a 'second wind' that mimics energetic resistance.",
        recommendation: "By shifting the bedtime by just 15 minutes and using the 4-step 'Silent Transition' visual routing helper (featured in our routine builder), bedtime is cut down to under 20 minutes.",
      };
    }

    if (age === "toddler" || age === "preschool") {
      return {
        title: "The Boundary Exploration Paradox",
        syndrome: "Toddler independence testing",
        description: "Toddlers require strict cognitive predictability to feel secure enough to let go of waking life. Protests and requests are their way of checking if boundaries are rigid. Liquid or floating schedules breed bedtime anxiety.",
        recommendation: "Building a highly visual bedside timeline (and using the Toddler Bedtime Agreement on Page 42) stops stalling in its tracks.",
      };
    }

    // Default
    return {
      title: "The Overtired Daylight Deficit",
      syndrome: "Disrupted daytime/nighttime circadian balance",
      description: "Short daytime naps are draining their calming sleep pressure, leading to an over-stimulated state by evening. Bedtime becomes a struggle because their nervous system is in hyper-drive.",
      recommendation: "The Sleep Solutions Guide introduces the 'Flexible Sleep Horizon System' which naturally extends naps, allowing your infant to sleep peacefully through the night.",
    };
  };

  return (
    <div className="bg-white rounded-3xl p-6 md:p-8 flex flex-col justify-between shadow-md border border-sage/10 min-h-[440px] relative overflow-hidden" id="sleep-assessment-quiz">
      {/* Background decoration elements */}
      <div className="absolute top-0 right-0 w-32 h-32 bg-moon/10 rounded-full blur-2xl -mr-10 -mt-10 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-32 h-32 bg-blush/10 rounded-full blur-2xl -ml-10 -mb-10 pointer-events-none" />

      <AnimatePresence mode="wait">
        {!showResult ? (
          <motion.div
            key={currentQuestionIdx}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.2 }}
            className="flex flex-col justify-between h-full flex-grow relative z-10"
          >
            <div>
              {/* Header Info */}
              <div className="flex items-center justify-between mb-4">
                <span className="text-[11px] font-heading font-bold text-sage uppercase tracking-wider">
                  Sleep Assessment Quiz
                </span>
                <span className="text-xs text-warm-grey bg-cream px-3 py-1 rounded-full font-medium">
                  {currentQuestionIdx + 1} of {questions.length}
                </span>
              </div>

              {/* Progress Slider */}
              <div className="w-full bg-sage/10 h-1 rounded-full overflow-hidden mb-6">
                <div
                  className="bg-sage h-1 transition-all duration-300 rounded-full"
                  style={{ width: `${((currentQuestionIdx + 1) / questions.length) * 100}%` }}
                />
              </div>

              {/* Question Text */}
              <h3 className="font-heading font-semibold text-lg md:text-xl text-charcoal mb-4">
                {questions[currentQuestionIdx].question}
              </h3>

              {/* Question Options */}
              <div className="space-y-3">
                {questions[currentQuestionIdx].options.map((opt, i) => (
                  <button
                    key={opt.value}
                    onClick={() => handleSelectAnswer(opt.value)}
                    className="w-full text-left p-3.5 rounded-2xl bg-cream/50 hover:bg-cream border border-sage/15 hover:border-sage transition-all duration-200 group relative flex flex-col focus:outline-none focus:ring-1 focus:ring-sage cursor-pointer shadow-sm hover:translate-x-1"
                  >
                    <span className="font-heading font-semibold text-sm text-charcoal group-hover:text-sage transition-colors">
                      {opt.label}
                    </span>
                    <span className="text-xs text-warm-grey mt-0.5 opacity-90">
                      {opt.description}
                    </span>
                  </button>
                ))}
              </div>
            </div>

            {/* Quote of encouragement */}
            <div className="mt-6 pt-3 flex items-center gap-2 text-[11.5px] italic text-warm-grey border-t border-sage/10">
              <HelpCircle className="w-4 h-4 text-sage/60 shrink-0" />
              <span>We understand how hard it is to think when you are sleep-deprived. Take your time.</span>
            </div>
          </motion.div>
        ) : (
          <motion.div
            key="result"
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.25 }}
            className="flex flex-col justify-between h-full flex-grow relative z-10"
          >
            <div>
              {/* Header Info */}
              <div className="flex items-center justify-between mb-4">
                <span className="text-[11px] font-heading font-bold text-blush uppercase tracking-wider flex items-center gap-1">
                  <span className="w-2 h-2 rounded-full bg-blush animate-pulse" />
                  Your Custom Sleep Synthesis
                </span>

                <button
                  onClick={resetQuiz}
                  className="flex items-center gap-1 text-xs text-warm-grey hover:text-charcoal bg-cream hover:bg-sage/10 px-3 py-1 rounded-full transition-colors cursor-pointer"
                >
                  <RotateCcw className="w-3 h-3" />
                  <span>Start Over</span>
                </button>
              </div>

              {/* Diagnostic Box */}
              <div className="bg-sage/5 border border-sage/10 p-5 rounded-2xl mb-4 text-left">
                <span className="text-[10px] font-heading font-bold text-sage uppercase tracking-wider bg-sage/10 px-2.5 py-1 rounded mb-2 inline-block">
                  Detected Pattern
                </span>
                <h4 className="font-heading font-bold text-base md:text-lg text-charcoal mb-2">
                  {getCustomResult().title}
                </h4>
                <p className="text-xs text-warm-grey leading-relaxed">
                  {getCustomResult().description}
                </p>
              </div>

              {/* Action Box */}
              <div className="bg-gold/10 border border-gold/20 p-5 rounded-2xl mb-6 text-left">
                <div className="flex items-center gap-1.5 mb-1.5 text-gold-dark text-xs font-semibold">
                  <Sparkles className="w-4 h-4 text-gold shrink-0" />
                  <span className="text-charcoal font-heading font-semibold">Immediate Action Step:</span>
                </div>
                <p className="text-xs text-warm-grey leading-relaxed">
                  {getCustomResult().recommendation}
                </p>
              </div>
            </div>

            {/* Action Buttons to Convert */}
            <div className="space-y-3 pt-3 border-t border-sage/10">
              <p className="text-center text-[11px] text-warm-grey italic">
                “You are not a bad parent. You just do not have a system yet.”
              </p>
              
              <button
                onClick={onOpenCheckout}
                className="w-full bg-gold hover:bg-gold/90 text-white font-heading font-semibold py-3.5 px-6 rounded-2xl shadow-lg transition-transform hover:scale-[1.01] active:scale-[0.99] flex items-center justify-center gap-2 cursor-pointer text-sm md:text-base uppercase tracking-wider"
              >
                <Moon className="w-4 h-4" />
                <span>Resolve This Sleep Pattern — ₹299</span>
                <ArrowRight className="w-4 h-4" />
              </button>
              <p className="text-center text-[10px] text-warm-grey">
                Includes the <strong>Sleep Solutions core book</strong> + <strong>The Night Waking Fix</strong> bonus
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
