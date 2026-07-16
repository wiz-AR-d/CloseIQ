import { useState, useEffect } from 'react';

interface FaqItem {
  question: string;
  answer: string;
  category: 'general' | 'product' | 'billing';
}

interface FaqPageProps {
  onBack: () => void;
  onOpenPopup?: () => void;
}

const faqList: FaqItem[] = [
  {
    category: 'general',
    question: "What is CloseIQ and how does it help sales teams?",
    answer: "CloseIQ is a premium sales intelligence platform that automates rep onboarding, practice roleplays, and live call support. By using conversational AI buyer personas and real-time guidance tools, we help SDRs and AEs ramp up to quota 75% faster (reducing ramp from 3 months to 3 weeks) and eliminate the need for manual call grading."
  },
  {
    category: 'product',
    question: "How does the Live AI Copilot work during active customer calls?",
    answer: "Our Live Copilot integrates natively with Zoom, Microsoft Teams, Outreach, and standard dialers. It transcribes audio streams in real-time, matching buyer statements against your custom battlecards, competitor features, and pricing sheets. The moment an objection or competitor is spoken, a context-aware whisper cue is surfaced on the rep's screen."
  },
  {
    category: 'product',
    question: "Can we customize the AI buyer personas to mirror our specific ICP?",
    answer: "Yes, absolutely. CloseIQ allows you to construct custom buyer personas using your target industry briefs, buyer objections, budget levels, and behavioral attributes. You can simulate technical CTOs, ROI-obsessed CFOs, or price-sensitive procurement leads to match your exact ideal customer profile."
  },
  {
    category: 'general',
    question: "How long does onboarding and deployment take?",
    answer: "CloseIQ is built to work out-of-the-box. Connecting our platform to Zoom and your CRM takes less than 5 minutes. The sandboxes compile data immediately so your reps can begin practicing playbooks and handling objections on day one."
  },
  {
    category: 'billing',
    question: "Do you offer a trial or pilot period?",
    answer: "We support qualifying enterprise accounts with a 30-day deferred billing pilot program. This enables your team to deploy CloseIQ, run roleplay simulations, and experience live call assistance to prove ROI before payment starts."
  }
];

export default function FaqPage({ onBack, onOpenPopup }: FaqPageProps) {
  const [activeCategory, setActiveCategory] = useState<'all' | 'general' | 'product' | 'billing'>('all');
  const [expandedIndex, setExpandedIndex] = useState<number | null>(0);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, []);

  const filteredFaqs = faqList.filter(
    faq => activeCategory === 'all' || faq.category === activeCategory
  );

  return (
    <div className="min-h-screen bg-background text-on-surface pt-32 pb-24 relative overflow-hidden">
      {/* Decorative green glow shapes */}
      <div className="absolute top-20 right-0 w-[500px] h-[500px] bg-primary/20 rounded-none blur-[150px] pointer-events-none"></div>
      <div className="absolute bottom-40 left-0 w-[600px] h-[600px] bg-emerald-500/10 rounded-none blur-[150px] pointer-events-none"></div>

      <div className="max-w-[800px] mx-auto px-6 relative z-10 space-y-16">
        
        {/* Navigation Breadcrumb */}
        <div className="flex justify-between items-center border-b border-outline-variant/15 pb-6">
          <button 
            onClick={onBack}
            className="flex items-center gap-2 text-sm font-semibold text-on-surface-variant hover:text-white transition-all group"
          >
            <span className="material-symbols-outlined text-sm transition-transform group-hover:-translate-x-1">arrow_back</span>
            Back to Home
          </button>
          <span className="text-xs bg-emerald-500/15 text-emerald-400 border border-emerald-500/20 px-3 py-1 rounded-none font-semibold font-mono tracking-wide uppercase shadow-[0_0_10px_rgba(16,185,129,0.2)]">
            Resources / FAQs
          </span>
        </div>

        {/* Header */}
        <div className="space-y-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tighter leading-tight">
            Frequently Asked <br />
            <span className="bg-gradient-to-r from-emerald-400 to-emerald-200 bg-clip-text text-transparent">Questions.</span>
          </h1>
          <p className="text-lg md:text-xl text-on-surface-variant max-w-xl mx-auto font-medium">
            Everything you need to know about CloseIQ roleplays, live copilot, security, and CRM integrations.
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap justify-center gap-2 border-b border-outline/25 pb-6">
          {(['all', 'general', 'product', 'billing'] as const).map((cat) => (
            <button
              key={cat}
              onClick={() => {
                setActiveCategory(cat);
                setExpandedIndex(null);
              }}
              className={`px-4 py-2 border text-sm font-semibold uppercase tracking-wider transition-all rounded-none ${
                activeCategory === cat
                  ? 'border-emerald-500 bg-emerald-500/5 text-emerald-400 shadow-[0_0_15px_rgba(16,185,129,0.15)]'
                  : 'border-outline/35 hover:bg-[#1A1A1A] text-on-surface-variant hover:text-white'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* FAQ Accordion List */}
        <div className="space-y-4">
          {filteredFaqs.map((faq, idx) => {
            const isExpanded = expandedIndex === idx;
            return (
              <div 
                key={idx} 
                className={`border transition-all duration-300 rounded-none bg-[#0A0A0B]/60 backdrop-blur-md ${
                  isExpanded ? 'border-emerald-500/40 bg-emerald-500/[0.02]' : 'border-outline/25 hover:border-outline/50'
                }`}
              >
                {/* Header / Click Area */}
                <button
                  onClick={() => setExpandedIndex(isExpanded ? null : idx)}
                  className="w-full flex items-center justify-between p-5 text-left font-bold text-base md:text-lg text-white hover:text-emerald-400 transition-colors"
                >
                  <span>{faq.question}</span>
                  <span className={`material-symbols-outlined text-[20px] transition-transform duration-300 ${isExpanded ? 'rotate-180 text-emerald-400' : 'text-on-surface-variant'}`}>
                    expand_more
                  </span>
                </button>

                {/* Answer Area */}
                <div 
                  className={`overflow-hidden transition-all duration-300 ease-in-out ${
                    isExpanded ? 'max-h-[300px] border-t border-outline/15 opacity-100' : 'max-h-0 opacity-0'
                  }`}
                >
                  <p className="p-5 text-sm md:text-base text-on-surface-variant/90 leading-relaxed font-medium">
                    {faq.answer}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA Box */}
        <div className="border border-emerald-500/20 bg-emerald-500/[0.02] p-8 text-center space-y-4 rounded-none">
          <h3 className="font-bold text-lg md:text-xl text-white">Still have questions?</h3>
          <p className="text-sm md:text-base text-on-surface-variant max-w-md mx-auto">
            Our team is available 24/7 to discuss integrations, security specs, and customized deployment models.
          </p>
          <div className="pt-2">
            <button 
              onClick={onOpenPopup}
              className="px-6 py-3 bg-emerald-500 text-black font-semibold rounded-none hover:bg-emerald-600 transition-all shadow-[0_0_15px_rgba(16,185,129,0.2)]"
            >
              Get in Touch
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}
