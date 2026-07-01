import { useState } from 'react';

interface CoachingPageProps {
  onBack: () => void;
  onOpenPopup?: () => void;
}

export default function CoachingPage({ onBack, onOpenPopup }: CoachingPageProps) {
  const [selectedMetric, setSelectedMetric] = useState<'listening' | 'pacing' | 'objections'>('listening');

  const metricsData = {
    listening: {
      title: "Talk/Listen Ratio & Active Engagement",
      description: "CloseIQ monitors how long your reps talk versus listen. In discovery calls, keeping the rep talk-time under 48% is statistically correlated with a 35% higher close rate.",
      scoreLabel: "Average: 54% Talk / 46% Listen",
      tips: [
        "Automatically flags when a rep talks for more than 3 minutes without asking a question.",
        "Generates interactive discovery training questions to encourage open-ended buyer answers.",
        "Saves managers from manually calculating talk ratios in post-call spreadsheets."
      ]
    },
    pacing: {
      title: "Speech Pacing & Confidence Signals",
      description: "Speech rate affects how customers perceive expertise and confidence. CloseIQ alerts reps when they speak too quickly (over 160 WPM) during pricing announcements or product breakdowns.",
      scoreLabel: "Target: 130-150 words per minute",
      tips: [
        "Measures pacing adjustments during stressful sections like competitive questions.",
        "Highlights instances of nervous filler words (e.g., 'like', 'um', 'sort of') in summaries.",
        "Encourages structured pauses of 1.5s after pricing discussions to let buyers absorb details."
      ]
    },
    objections: {
      title: "Battle Card Integration & Playbook Alignment",
      description: "Whenever competitive tools or pricing barriers are spoken, CloseIQ tracks how quickly the rep pivoted to the structured objection battle card.",
      scoreLabel: "Target: 90%+ playbook alignment score",
      tips: [
        "Tracks competitor mentions across 100% of calls and calculates displacement win-rates.",
        "Saves winning pivots into a central team library automatically.",
        "Flags outdated competitor talk-tracks so enablement teams can revise playbooks."
      ]
    }
  };

  const current = metricsData[selectedMetric];

  return (
    <div className="min-h-screen bg-background text-on-surface pt-32 pb-24 px-6 transition-colors duration-300">
      {/* Decorative blurred background shapes */}
      <div className="absolute top-40 right-10 w-96 h-96 bg-primary/10 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-secondary/5 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-6xl mx-auto space-y-16 relative z-10">
        
        {/* Navigation Breadcrumb */}
        <div className="flex justify-between items-center pb-6 border-b border-outline-variant/15">
          <button 
            onClick={onBack}
            className="flex items-center gap-2 text-sm font-semibold text-primary hover:text-primary-dim transition-all group"
          >
            <span className="material-symbols-outlined text-sm transition-transform group-hover:-translate-x-1">arrow_back</span>
            Back to Home
          </button>
          <span className="text-xs bg-primary/15 text-primary border border-primary/20 px-3 py-1 rounded-full font-semibold font-mono tracking-wide uppercase">
            Sales Coaching Automation
          </span>
        </div>

        {/* Header / Intro */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 space-y-6">
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight leading-tight">
              Coaching that scales. <br />
              <span className="bg-gradient-to-r from-primary via-primary-dim to-secondary bg-clip-text text-transparent">
                Without manual audits.
              </span>
            </h1>
            <p className="text-lg text-on-surface-variant leading-relaxed max-w-xl">
              Sales managers can't listen to every call. CloseIQ automatically evaluates 100% of transcripts, highlights weaknesses, and generates coaching recommendations for each rep instantly.
            </p>
            <div className="flex flex-wrap gap-4 pt-2">
              <button 
                onClick={onOpenPopup}
                className="px-6 py-3.5 bg-primary text-on-primary font-bold rounded-full hover:brightness-110 shadow-lg transition-all text-sm"
              >
                Automate Your Coaching
              </button>
            </div>
          </div>

          <div className="lg:col-span-5 bg-surface-container border border-outline-variant/15 rounded-3xl p-8 space-y-6">
            <h3 className="font-bold text-lg text-on-surface">Weekly Coaching Radar</h3>
            
            <div className="space-y-4">
              <div className="space-y-1">
                <div className="flex justify-between text-xs font-semibold text-on-surface-variant">
                  <span>Objection Handling Accuracy</span>
                  <span className="text-primary font-bold">92%</span>
                </div>
                <div className="w-full bg-surface-container-high h-2 rounded-full overflow-hidden">
                  <div className="bg-primary h-full w-[92%]"></div>
                </div>
              </div>

              <div className="space-y-1">
                <div className="flex justify-between text-xs font-semibold text-on-surface-variant">
                  <span>Discovery depth (Value questions)</span>
                  <span className="text-secondary font-bold">78%</span>
                </div>
                <div className="w-full bg-surface-container-high h-2 rounded-full overflow-hidden">
                  <div className="bg-secondary h-full w-[78%]"></div>
                </div>
              </div>

              <div className="space-y-1">
                <div className="flex justify-between text-xs font-semibold text-on-surface-variant">
                  <span>Pacing & Nervous Fillers</span>
                  <span className="text-emerald-500 font-bold">85%</span>
                </div>
                <div className="w-full bg-surface-container-high h-2 rounded-full overflow-hidden">
                  <div className="bg-emerald-500 h-full w-[85%]"></div>
                </div>
              </div>

              <div className="space-y-1">
                <div className="flex justify-between text-xs font-semibold text-on-surface-variant">
                  <span>Active Listening (Talk Ratio)</span>
                  <span className="text-error font-bold">45%</span>
                </div>
                <div className="w-full bg-surface-container-high h-2 rounded-full overflow-hidden">
                  <div className="bg-error h-full w-[45%]"></div>
                </div>
              </div>
            </div>
            
            <div className="text-[10px] text-error flex gap-2 items-start bg-error/10 p-3 rounded-xl border border-error/20 leading-tight">
               <span className="material-symbols-outlined text-[14px]">warning</span>
               <span>Average rep active listening score is low. CloseIQ has automatically assigned 'Talk/Listen Sandbox' scenarios to 4 reps.</span>
            </div>
          </div>
        </div>

        {/* Section 1: Dashboard Interactive Demo */}
        <section className="bg-surface-container-low rounded-[32px] border border-outline-variant/20 p-8 shadow-xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
            
            {/* Interactive Panel */}
            <div className="lg:col-span-5 flex flex-col justify-between space-y-8">
              <div className="space-y-4">
                <span className="text-[10px] font-bold tracking-widest text-primary uppercase font-mono bg-primary/10 px-2.5 py-1 rounded">Interactive Metric Guide</span>
                <h2 className="text-3xl font-bold text-on-surface leading-tight">Speech & Skill Diagnostics</h2>
                <p className="text-sm text-on-surface-variant leading-relaxed">
                  CloseIQ's intelligence engine analyzes dozens of speech patterns. Click on a category below to see how the engine translates raw audio metrics into clear coaching advice.
                </p>
              </div>

              {/* Switches */}
              <div className="space-y-2.5">
                <button
                  onClick={() => setSelectedMetric('listening')}
                  className={`w-full p-4 rounded-2xl border text-left transition-all flex items-center gap-4.5 ${selectedMetric === 'listening' ? 'bg-surface border-primary shadow-md ring-1 ring-primary' : 'bg-surface/50 border-outline-variant/20 hover:bg-surface-container-high'}`}
                >
                  <span className="material-symbols-outlined text-primary bg-primary/10 p-2 rounded-xl text-lg">hearing</span>
                  <div>
                    <h4 className="font-bold text-xs text-on-surface">Talk/Listen Ratio</h4>
                    <p className="text-[10px] text-on-surface-variant mt-0.5">Active listening and conversational balance</p>
                  </div>
                </button>

                <button
                  onClick={() => setSelectedMetric('pacing')}
                  className={`w-full p-4 rounded-2xl border text-left transition-all flex items-center gap-4.5 ${selectedMetric === 'pacing' ? 'bg-surface border-primary shadow-md ring-1 ring-primary' : 'bg-surface/50 border-outline-variant/20 hover:bg-surface-container-high'}`}
                >
                  <span className="material-symbols-outlined text-primary bg-primary/10 p-2 rounded-xl text-lg">speed</span>
                  <div>
                    <h4 className="font-bold text-xs text-on-surface">Pacing & Confidence</h4>
                    <p className="text-[10px] text-on-surface-variant mt-0.5">Speech tempo and pause triggers</p>
                  </div>
                </button>

                <button
                  onClick={() => setSelectedMetric('objections')}
                  className={`w-full p-4 rounded-2xl border text-left transition-all flex items-center gap-4.5 ${selectedMetric === 'objections' ? 'bg-surface border-primary shadow-md ring-1 ring-primary' : 'bg-surface/50 border-outline-variant/20 hover:bg-surface-container-high'}`}
                >
                  <span className="material-symbols-outlined text-primary bg-primary/10 p-2 rounded-xl text-lg">gavel</span>
                  <div>
                    <h4 className="font-bold text-xs text-on-surface">Playbook Alignment</h4>
                    <p className="text-[10px] text-on-surface-variant mt-0.5">Battle card validation and compliance</p>
                  </div>
                </button>
              </div>
            </div>

            {/* Metric Detailed Card */}
            <div className="lg:col-span-7 bg-surface rounded-[24px] border border-outline-variant/30 p-8 flex flex-col justify-between shadow-lg relative min-h-[420px]">
              
              {/* Card Header */}
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-[10px] font-bold text-primary bg-primary/10 px-2.5 py-1 rounded-full uppercase tracking-wider font-mono">
                    Evaluation Standard
                  </span>
                  <span className="text-xs text-on-surface-variant font-semibold">
                    {current.scoreLabel}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-on-surface flex items-center gap-2">
                  <span className="material-symbols-outlined text-primary text-xl">insights</span>
                  {current.title}
                </h3>

                <p className="text-xs text-on-surface-variant leading-relaxed">
                  {current.description}
                </p>
              </div>

              {/* Evaluation Tips list */}
              <div className="bg-surface-container-low border border-outline-variant/20 rounded-2xl p-5 mt-6 space-y-4">
                <span className="text-[10px] font-bold text-primary uppercase tracking-wider font-mono">How CloseIQ Automates This</span>
                <div className="space-y-3">
                  {current.tips.map((tip, idx) => (
                    <div key={idx} className="flex gap-3 items-start text-xs text-on-surface-variant">
                      <span className="material-symbols-outlined text-primary text-sm mt-0.5">check_circle</span>
                      <p className="leading-relaxed">{tip}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-outline-variant/15 text-[11px] text-on-surface-variant/80 flex justify-between items-center">
                <span>Playbooks are auto-updated daily based on active deal outcomes.</span>
                <span className="font-semibold text-primary">Continuous Coaching Engine</span>
              </div>

            </div>
          </div>
        </section>

      </div>
    </div>
  );
}
