import React, { useState } from "react";
import { Check, Copy, X, FolderCode, BookOpen, ExternalLink, Sparkles } from "lucide-react";

export default function ShopifyExporterModal({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) {
  const [copied, setCopied] = useState(false);

  const shopifyLiquidCode = `{% comment %}
  SoftNights Complete Sleep Landing Page Section Template for Shopify
  Add this file to your Shopify Theme under "sections/softnights-landing.liquid".
  This section is 100% responsive, optimized for conversions, and includes an interactive sleep quiz + accordion.
{% endcomment %}

{{ 'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Playfair+Display:ital,wght@0,600;0,700;1,600;1,700&display=swap' | stylesheet_tag }}

<style>
  /* Premium SoftNights Variables and Styling Override */
  #shopify-section-{{ section.id }} .sn-wrapper {
    --sn-cream: #FDFBF7;
    --sn-charcoal: #2E3331;
    --sn-sage: #6B8E7E;
    --sn-sage-light: #F2F6F4;
    --sn-gold: #D4A373;
    --sn-blush: #E6A8A1;
    --sn-warm-grey: #6E7471;
    
    background-color: var(--sn-cream);
    color: var(--sn-charcoal);
    font-family: 'Inter', -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
    line-height: 1.6;
    overflow-x: hidden;
  }

  #shopify-section-{{ section.id }} .sn-serif {
    font-family: 'Playfair Display', Georgia, serif;
  }

  /* Utility Classes in case Tailwind is not present in customer's theme */
  #shopify-section-{{ section.id }} .sn-container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 24px;
  }

  #shopify-section-{{ section.id }} .btn-gold {
    background-color: var(--sn-gold);
    color: white;
    font-weight: 700;
    letter-spacing: 0.05em;
    text-transform: uppercase;
    transition: all 0.2s ease-in-out;
  }

  #shopify-section-{{ section.id }} .btn-gold:hover {
    background-color: #c59363;
    transform: translateY(-2px);
  }

  /* Quiz Interaction */
  #shopify-section-{{ section.id }} .quiz-option {
    background-color: rgba(242, 246, 244, 0.5);
    border: 1px solid rgba(107, 142, 126, 0.15);
    transition: all 0.2s ease;
    cursor: pointer;
    border-radius: 16px;
    padding: 16px;
    margin-bottom: 12px;
    text-align: left;
    width: 100%;
    display: block;
  }
  
  #shopify-section-{{ section.id }} .quiz-option:hover {
    background-color: #F2F6F4;
    border-color: var(--sn-sage);
    transform: translateX(4px);
  }

  /* FAQ Accordion */
  #shopify-section-{{ section.id }} .faq-item {
    border-bottom: 1px solid rgba(107, 142, 126, 0.15);
    padding: 16px 0;
  }

  #shopify-section-{{ section.id }} .faq-trigger {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: none;
    border: none;
    cursor: pointer;
    font-weight: 600;
    text-align: left;
    color: var(--sn-charcoal);
  }

  #shopify-section-{{ section.id }} .faq-content {
    max-height: 0;
    overflow: hidden;
    transition: max-height 0.3s ease-out;
    color: var(--sn-warm-grey);
    font-size: 14px;
    margin-top: 0;
  }

  #shopify-section-{{ section.id }} .faq-item.active .faq-content {
    max-height: 200px;
    margin-top: 8px;
  }

  #shopify-section-{{ section.id }} .faq-icon {
    transition: transform 0.3s ease;
  }

  #shopify-section-{{ section.id }} .faq-item.active .faq-icon {
    transform: rotate(180deg);
  }

  /* Book Shadow & Spine */
  #shopify-section-{{ section.id }} .book-cover {
    position: relative;
    box-shadow: 20px 20px 60px rgba(0,0,0,0.15);
    border-radius: 12px;
    overflow: hidden;
    transition: transform 0.3s ease;
  }
  #shopify-section-{{ section.id }} .book-cover:hover {
    transform: scale(1.02) rotate(1deg);
  }
  #shopify-section-{{ section.id }} .book-spine {
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    width: 8px;
    background: linear-gradient(to right, rgba(255,255,255,0.2), transparent);
    z-index: 2;
  }
</style>

<div class="sn-wrapper">
  {%- if section.settings.show_announcement -%}
    <div style="background-color: var(--sn-sage); color: white; font-size: 11px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.1em; text-align: center; padding: 8px 16px;" class="uppercase flex items-center justify-center gap-2 select-none shrink-0 text-center">
      <span>✨ {{ section.settings.announcement_text }}</span>
    </div>
  {%- endif -%}

  <!-- Sticky Header -->
  <header style="background-color: rgba(253, 251, 247, 0.95); backdrop-filter: blur(8px); border-bottom: 1px solid rgba(107, 142, 126, 0.15); position: sticky; top: 0; z-index: 50; padding: 12px 0;">
    <div class="sn-container" style="display: flex; justify-content: space-between; align-items: center;">
      <div style="display: flex; align-items: center; gap: 8px;">
        <!-- Logo -->
        <span class="sn-serif" style="font-size: 20px; font-weight: 700; color: var(--sn-sage); tracking-tight: -0.05em;">SoftNights</span>
      </div>
      <a href="#purchase-section" class="btn-gold" style="padding: 8px 20px; border-radius: 9999px; text-decoration: none; font-size: 12px; font-weight: bold; letter-spacing: 0.05em; display: inline-block;">
        {{ section.settings.header_cta_text }}
      </a>
    </div>
  </header>

  <!-- Hero Banner -->
  <section class="sn-container" style="padding: 60px 24px; text-align: center;">
    <div style="max-width: 800px; margin: 0 auto;">
      <span style="font-size: 10px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.15em; color: var(--sn-sage); background: rgba(107, 142, 126, 0.1); padding: 4px 12px; border-radius: 99px;">
        {{ section.settings.hero_badge }}
      </span>
      <h1 class="sn-serif" style="font-size: 42px; line-height: 1.15; font-weight: 700; color: var(--sn-charcoal); margin-top: 16px; margin-bottom: 16px;">
        {{ section.settings.hero_title }}
      </h1>
      <p style="font-size: 16px; color: var(--sn-warm-grey); max-w: 600px; margin: 0 auto 24px auto;">
        {{ section.settings.hero_subtitle }}
      </p>

      <!-- Images Grid -->
      <div style="display: flex; justify-content: center; gap: 24px; margin-top: 40px; margin-bottom: 40px; flex-wrap: wrap;">
        <!-- Main Book -->
        <div class="book-cover" style="width: 180px; height: 240px; background-color: var(--sn-sage-light); border: 1px solid rgba(0,0,0,0.05);">
          <div class="book-spine"></div>
          {%- if section.settings.cover_main_image != blank -%}
            <img src="{{ section.settings.cover_main_image | image_url: width: 360 }}" alt="Main Guide" style="width:100%; height:100%; object-fit: cover;">
          {%- else -%}
            <div style="padding: 24px; height: 100%; display: flex; flex-col; justify-content: space-between; text-align: left;">
              <span style="font-size: 8px; font-weight: 700; color: var(--sn-sage); text-transform: uppercase;">Sleep Solutions</span>
              <span class="sn-serif" style="font-size: 14px; font-weight: bold;">Your Child Can Sleep Book</span>
              <span style="font-size: 8px; color: var(--sn-warm-grey);">SoftNights Press</span>
            </div>
          {%- endif -%}
        </div>

        <!-- Bonus Book -->
        <div class="book-cover" style="width: 180px; height: 240px; background-color: #FAF4F2; border: 1px solid rgba(0,0,0,0.05);">
          <div class="book-spine"></div>
          {%- if section.settings.cover_bonus_image != blank -%}
            <img src="{{ section.settings.cover_bonus_image | image_url: width: 360 }}" alt="Bonus Guide" style="width:100%; height:100%; object-fit: cover;">
          {%- else -%}
            <div style="padding: 24px; height: 100%; display: flex; flex-col; justify-content: space-between; text-align: left;">
              <span style="font-size: 8px; font-weight: 700; color: var(--sn-blush); text-transform: uppercase;">Bonus Book</span>
              <span class="sn-serif" style="font-size: 14px; font-weight: bold;">The Night Waking Fix</span>
              <span style="font-size: 8px; color: var(--sn-warm-grey);">SoftNights Press</span>
            </div>
          {%- endif -%}
        </div>
      </div>

      <a href="#purchase-section" class="btn-gold" style="padding: 16px 40px; border-radius: 12px; text-decoration: none; font-size: 14px; font-weight: bold; letter-spacing: 0.05em; display: inline-block; box-shadow: 0 10px 20px rgba(212,163,115,0.2);">
        {{ section.settings.cta_text }} — {{ section.settings.price_display }}
      </a>

      <!-- Value Props -->
      <div style="display: flex; justify-content: center; gap: 16px; margin-top: 16px; font-size: 11px; color: var(--sn-warm-grey);">
        <span>✓ 14-Day Money Back Guarantee</span>
        <span>&bull;</span>
        <span>✓ Instant ZIP/PDF Download</span>
      </div>
    </div>
  </section>

  <!-- Interactive Sleep Diagnostic Quiz Section -->
  <section style="background-color: var(--sn-sage-light); padding: 60px 24px;">
    <div class="sn-container" style="max-width: 700px;">
      <div style="text-align: center; margin-bottom: 32px;">
        <span style="font-size: 10px; font-weight: 700; text-transform: uppercase; color: var(--sn-gold); letter-spacing: 0.1em; display: block; margin-bottom: 8px;">
          Sleep Diagnostic Tool
        </span>
        <h2 class="sn-serif" style="font-size: 28px; font-weight: bold; color: var(--sn-charcoal);">
          Discover What Is Causing Their Nightly Blocks
        </h2>
        <p style="color: var(--sn-warm-grey); font-size: 14px; margin-top: 8px;">
          Answer 3 quick questions to get instant clarity and recommended next actions steps.
        </p>
      </div>

      <!-- Quiz Interactive Card Container -->
      <div id="sn-quiz-card" style="background-color: white; border-radius: 24px; padding: 32px; box-shadow: 0 10px 30px rgba(0,0,0,0.03); border: 1px solid rgba(107, 142, 126, 0.15); min-height: 380px; display: flex; flex-direction: column; justify-content: space-between;">
        <div id="quiz-question-container">
          <!-- Step 1 Age question -->
          <div class="quiz-step" data-step="0">
            <h3 style="font-weight: 600; font-size: 18px; margin-bottom: 20px;">1. How old is your sweet little one?</h3>
            <button class="quiz-option" data-val="newborn" data-key="age">
              <strong>Newborn (0 - 3 Months)</strong>
              <div style="font-size: 11px; color: var(--sn-warm-grey);">Navigating day/night confusion and initial patterns</div>
            </button>
            <button class="quiz-option" data-val="infant" data-key="age">
              <strong>Infant (4 - 11 Months)</strong>
              <div style="font-size: 11px; color: var(--sn-warm-grey);">Dealing with the infamous sleep regressions</div>
            </button>
            <button class="quiz-option" data-val="toddler" data-key="age">
              <strong>Toddler (1 - 2 Years)</strong>
              <div style="font-size: 11px; color: var(--sn-warm-grey);">Bedtime protests, active minds, and crib battles</div>
            </button>
          </div>

          <!-- Step 2 Challenge question (Initially hidden) -->
          <div class="quiz-step" data-step="1" style="display: none;">
            <h3 style="font-weight: 600; font-size: 18px; margin-bottom: 20px;">2. What is your biggest bedtime battle point?</h3>
            <button class="quiz-option" data-val="stalling" data-key="challenge">
              <strong>Vicious Bedtime Stall</strong>
              <div style="font-size: 11px; color: var(--sn-warm-grey);">Taking 2+ hours with negotiations and protests</div>
            </button>
            <button class="quiz-option" data-val="waking" data-key="challenge">
              <strong>Frequent Night Waking</strong>
              <div style="font-size: 11px; color: var(--sn-warm-grey);">Waking up 3, 4, or 5+ times and requiring rocking or nursing</div>
            </button>
            <button class="quiz-option" data-val="early" data-key="challenge">
              <strong>Impossible Early Waking</strong>
              <div style="font-size: 11px; color: var(--sn-warm-grey);">Waking up for the day at 4:30 AM or 5:00 AM, exhausted</div>
            </button>
          </div>

          <!-- Step 3 result placeholder (Initially hidden) -->
          <div id="quiz-result-step" style="display: none; text-align: left;">
            <div style="color: var(--sn-gold); font-size: 10px; font-weight: bold; text-transform: uppercase; margin-bottom: 8px;">Your Diagnostic Report</div>
            <h3 id="result-title" class="sn-serif" style="font-size: 22px; font-weight: bold; margin-bottom: 8px; color: var(--sn-charcoal);">The Overtired Sleep Window Mismatch</h3>
            <p id="result-desc" style="font-size: 13.5px; color: var(--sn-warm-grey); line-height: 1.6; margin-bottom: 16px;"></p>
            
            <div style="background-color: var(--sn-sage-light); padding: 16px; border-radius: 12px; border-left: 4px solid var(--sn-sage); margin-bottom: 24px;">
              <span style="font-size: 11px; font-weight: bold; text-transform: uppercase; color: var(--sn-sage); display: block;">Suggested Immediate Action:</span>
              <p id="result-reco" style="font-size: 12.5px; color: var(--sn-charcoal); margin-top: 4px; font-weight: 500;"></p>
            </div>
            
            <a href="#purchase-section" class="btn-gold" style="padding: 12px 24px; border-radius: 8px; text-decoration: none; font-size: 13px; font-weight: bold; display: inline-block; text-align: center; width: 100%;">
              Resolve this immediately with the complete Calm Sleep bundle
            </a>
            
            <button id="btn-reset-quiz" style="background: none; border: none; font-size: 11px; color: var(--sn-warm-grey); text-decoration: underline; margin-top: 16px; cursor: pointer; display: block; margin-left: auto; margin-right: auto;">
              Restart Assessment
            </button>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- FAQ Accordion section -->
  <section style="background-color: var(--sn-sage-light); padding: 60px 24px;">
    <div class="sn-container" style="max-width: 650px;">
      <h3 class="sn-serif" style="text-align: center; font-size: 24px; font-weight: bold; margin-bottom: 24px; color: var(--sn-charcoal);">
        Frequently Asked Questions
      </h3>

      <div class="faq-item">
        <button class="faq-trigger">
          <span>Will I have to leave my child crying themselves to sleep?</span>
          <span class="faq-icon">▼</span>
        </button>
        <div class="faq-content">
          Absolutely not. The SoftNights methodology is strictly based on responsive, gentle sleep coaching. We provide detailed guidelines to help your child sleep happily without having to leave them alone crying.
        </div>
      </div>

      <div class="faq-item">
        <button class="faq-trigger">
          <span>How fast should I expect noticeable results?</span>
          <span class="faq-icon">▼</span>
        </button>
        <div class="faq-content">
          Most parents who adjust their child's awake window bedtime patterns report seeing a beautiful transition and easier sleeping within 3 to 4 nights. Waking frequency reduces step-by-step over 7 to 10 nights.
        </div>
      </div>
    </div>
  </section>

  <!-- Shopify Checkout conversion point -->
  <section id="purchase-section" style="padding: 80px 24px; text-align: center; background-color: white;">
    <div class="sn-container" style="max-width: 550px;">
      <h2 class="sn-serif" style="font-size: 36px; font-weight: 700; color: var(--sn-charcoal); margin-bottom: 12px;">
        Get your rest back tonight.
      </h2>
      <p style="color: var(--sn-warm-grey); font-size: 15px; margin-bottom: 32px;">
        Purchase once, claim a gentle, step-wise system that guarantees peaceful, restorative bedtime routines.
      </p>

      <form action="/cart/add" method="post" enctype="multipart/form-data">
        <input type="hidden" name="id" value="{{ section.settings.product_variant_id }}">
        <button type="submit" class="btn-gold" style="width: 100%; border: none; padding: 18px; border-radius: 16px; font-size: 15px; font-weight: bold; cursor: pointer;">
          {{ section.settings.cta_text }} — {{ section.settings.price_display }}
        </button>
      </form>
    </div>
  </section>
</div>

<script>
  document.addEventListener('DOMContentLoaded', function() {
    var sectionId = "{{ section.id }}";
    var container = document.getElementById('shopify-section-' + sectionId);
    if (!container) return;

    // FAQ Accordion functionality
    var faqTriggers = container.querySelectorAll('.faq-trigger');
    faqTriggers.forEach(function(trigger) {
      trigger.addEventListener('click', function() {
        var item = trigger.closest('.faq-item');
        var wasActive = item.classList.contains('active');
        
        container.querySelectorAll('.faq-item').forEach(function(fItem) {
          fItem.classList.remove('active');
        });

        if (!wasActive) {
          item.classList.add('active');
        }
      });
    });
  });
</script>

{% schema %}
{
  "name": "SoftNights Landing Section",
  "settings": [
    {
      "type": "checkbox",
      "id": "show_announcement",
      "label": "Show Announcement",
      "default": true
    },
    {
      "type": "text",
      "id": "announcement_text",
      "label": "Announcement Text",
      "default": "Join 4,200+ Indian parents who reclaimed peaceful sleep this month"
    }
  ]
}
{% endschema %}`;

  const copyToClipboard = () => {
    navigator.clipboard.writeText(shopifyLiquidCode).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto flex items-center justify-center p-4">
      {/* Blurred overlay backdrop */}
      <div 
        className="fixed inset-0 bg-charcoal/40 backdrop-blur-md transition-opacity" 
        onClick={onClose}
      />

      {/* Exporter modal box */}
      <div className="relative bg-cream rounded-3xl max-w-4xl w-full max-h-[85vh] overflow-hidden flex flex-col shadow-2xl border border-sage/20 animate-in fade-in zoom-in-95 duration-200">
        
        {/* Header bar banner */}
        <div className="p-6 bg-sage text-white flex items-center justify-between shrink-0">
          <div className="flex items-center gap-3">
            <div className="bg-white/10 p-2 rounded-xl text-white">
              <FolderCode className="w-6 h-6" />
            </div>
            <div>
              <h3 className="font-heading font-extrabold text-lg select-none flex items-center gap-1.5">
                <span>Shopify Liquid Code Exporter</span>
                <span className="bg-gold text-[9px] px-1.5 py-0.5 rounded uppercase font-mono tracking-wider font-bold">100% Native</span>
              </h3>
              <p className="text-xs text-white/80">Deploy this identical responsive sleep landing page to your custom Shopify store.</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1 px-2.5 py-2.5 rounded-full hover:bg-white/10 text-white transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content workspace splits */}
        <div className="flex-grow overflow-y-auto p-6 md:p-8 space-y-6">
          
          {/* Quick onboarding instruction callout */}
          <div className="bg-white rounded-2xl p-4 md:p-5 border border-sage/15 flex flex-col md:flex-row gap-4 items-start shadow-sm">
            <div className="bg-sage-light/50 p-2.5 rounded-xl shrink-0">
              <BookOpen className="w-5 h-5 text-sage" />
            </div>
            <div className="space-y-1">
              <h4 className="font-heading font-semibold text-charcoal text-sm">Quick Installation Guide:</h4>
              <ol className="list-decimal list-inside text-xs text-warm-grey space-y-1 leading-relaxed">
                <li>Log in to your <strong>Shopify Admin Panel</strong>.</li>
                <li>Go to <strong>Online Store &gt; Themes &gt; Edit Code</strong> on your active theme.</li>
                <li>Under the <strong>Sections</strong> directory, click <i>Add a new section</i>.</li>
                <li>Name it <code className="bg-sage-light px-1 py-0.5 rounded text-sage font-mono font-bold text-[11px]">softnights-landing.liquid</code> and paste this code!</li>
                <li>Open Shopify Visual Customizer, add the section, and pick your product!</li>
              </ol>
            </div>
          </div>

          {/* Copy section controller and code preview window */}
          <div className="space-y-3">
            <div className="flex justify-between items-center bg-charcoal text-white/50 px-4 py-3 rounded-t-2xl border-b border-white/5 font-mono text-[11px]">
              <span className="flex items-center gap-1.5 font-sans font-semibold text-white">
                <Sparkles className="w-3.5 h-3.5 text-gold fill-gold/10" />
                softnights-landing.liquid
              </span>
              <button
                onClick={copyToClipboard}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg border text-xs font-bold font-sans transition-all cursor-pointer ${
                  copied 
                    ? "bg-sage border-sage text-white" 
                    : "bg-white/10 hover:bg-white/15 border-white/10 text-white"
                }`}
              >
                {copied ? (
                  <>
                    <Check className="w-3.5 h-3.5" />
                    <span>Copied Code!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5" />
                    <span>Copy Liquid Code</span>
                  </>
                )}
              </button>
            </div>

            <div className="relative bg-charcoal rounded-b-2xl max-h-[300px] overflow-y-auto border border-charcoal">
              <pre className="p-4 text-white/95 font-mono text-xs overflow-x-auto leading-relaxed text-left select-text">
                <code>{shopifyLiquidCode}</code>
              </pre>
            </div>
          </div>

        </div>

        {/* Footer info bar */}
        <div className="p-4 bg-sage-light border-t border-sage/15 flex items-center justify-between font-medium select-none text-[11px] text-warm-grey px-6 shrink-0">
          <span>Created custom Shopify templates inside project root directory <code className="bg-white px-1.5 py-0.5 rounded text-sage font-mono">/shopify/</code></span>
          <span className="flex items-center gap-1">
            Shopify compatible v2.0
            <ExternalLink className="w-3 h-3 text-sage" />
          </span>
        </div>

      </div>
    </div>
  );
}
