import { useState } from 'react';

export default function RealEstateInsightsSection() {
  const [activeScenario, setActiveScenario] = useState<'budget' | 'competitor' | 'onboarding'>('budget');

  const scenarios = {
    budget: {
      title: "Negotiating with a Cost-Conscious Buyer",
      description: "Practice pitching CloseIQ's ROI to a VP of Sales who is pushing back on budget constraints.",
      persona: "Marcus Vance (VP of Sales at GlobalTech, skeptical of new spend)",
      buyerLine: "\"We are on a strict budget freeze. We can't commit to any new software unless it yields immediate, measurable sales lift within the first month.\"",
      repLine: "\"I hear you, Marcus. That's exactly why we designed our Pilot Program. CloseIQ reduces new-hire ramp time by 40% and boosts overall conversion rates by 22% within 30 days. Let's look at the ROI math for your team size...\"",
      score: 92,
      empathy: "Excellent (Acknowledge freeze first)",
      playbookAlignment: "High (ROI numbers mentioned)",
      nextGoal: "Goal: Secure commitment for a custom ROI review call."
    },
    competitor: {
      title: "Handling the 'Competitor X is cheaper' Objection",
      description: "Practice value-first selling when the prospect brings up Competitor X's low-priced plan.",
      persona: "Laura Croft (Director of Sales Ops, comparisons focused)",
      buyerLine: "\"Competitor X has a similar feature set for only $30/user/month. Why should we pay almost double for CloseIQ?\"",
      repLine: "\"It's true that Competitor X is cheaper, but their platform doesn't have real-time cues or auto-built battle cards. Your reps still have to manually log call summaries in CRM. CloseIQ saves each rep 4+ hours/week through automatic logging, meaning your reps spend more time selling...\"",
      score: 88,
      empathy: "Good (Polite comparison alignment)",
      playbookAlignment: "Excellent (Time savings quantified)",
      nextGoal: "Goal: Showcase CRM Auto-Sync in action."
    },
    onboarding: {
      title: "Ramping Up New Hires: Playbook Discovery",
      description: "Practice discovery questions to evaluate prospect pain points quickly for new representatives.",
      persona: "Ken Adams (Sales Enablement Manager, process focused)",
      buyerLine: "\"Our main struggle is that it takes new hires 3-4 months to hit quota. We need something that accelerates training.\"",
      repLine: "\"Ramping new hires is where we excel. CloseIQ generates custom roleplays from real customer objections. Instead of shadow-coaching, new reps practice against AI buyers and hit quota 40% faster...\"",
      score: 95,
      empathy: "Outstanding (Focused on enablement pain)",
      playbookAlignment: "Excellent (Custom roleplay generation highlighted)",
      nextGoal: "Goal: Share Case Study of 40% ramp time reduction."
    }
  };

  const current = scenarios[activeScenario];

  return (
    <div id="roleplays" className="space-y-32 py-24 bg-surface text-on-surface">

      {/* Feature 1: AI Roleplay Arena */}
      <section className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
        
        {/* Left Side: Roleplay Sandbox Mockup */}
        <div className="order-2 lg:order-1 relative">
          <div className="absolute inset-0 bg-secondary/5 blur-[100px] rounded-full pointer-events-none"></div>
          
          <div className="relative z-10 bg-surface-container-low rounded-3xl shadow-2xl border border-outline-variant/20 overflow-hidden flex flex-col h-[520px]">
            {/* Header */}
            <div className="p-4 border-b border-outline-variant/20 flex items-center justify-between bg-surface-container-highest">
              <div className="flex gap-2 items-center">
                <span className="material-symbols-outlined text-secondary">sports_esports</span>
                <span className="font-semibold text-sm text-on-surface">Interactive Practice Sandbox</span>
              </div>
              <div className="bg-primary/20 text-primary border border-primary/20 px-2.5 py-0.5 rounded-full text-[10px] font-bold font-mono">
                PRACTICE STATUS: ACTIVE
              </div>
            </div>

            {/* Practice Body */}
            <div className="p-5 flex-grow overflow-y-auto space-y-5 text-sm">
              
              {/* Buyer Prompt */}
              <div className="flex gap-3">
                <div className="w-8 h-8 rounded-full bg-secondary-container/50 border border-secondary/20 flex items-center justify-center shrink-0 text-xs font-bold text-white">
                  B
                </div>
                <div className="bg-surface p-4 rounded-2xl rounded-tl-none border border-outline-variant/15 shadow-sm">
                  <p className="text-[10px] text-secondary font-bold mb-1">Buyer Persona: {current.persona}</p>
                  <p className="text-on-surface-variant leading-relaxed text-xs">
                    {current.buyerLine}
                  </p>
                </div>
              </div>

              {/* Rep Response */}
              <div className="flex gap-3 flex-row-reverse">
                <div className="w-8 h-8 rounded-full bg-primary/20 border border-primary/30 flex items-center justify-center shrink-0 text-xs font-bold text-white animate-pulse">
                  REP
                </div>
                <div className="bg-[#0b0f19] p-4 rounded-2xl rounded-tr-none border border-outline-variant/15 shadow-sm text-right">
                  <p className="text-[10px] text-primary font-bold mb-1">Your Spoken Pitch (Simulated)</p>
                  <p className="text-white leading-relaxed text-xs italic">
                    {current.repLine}
                  </p>
                </div>
              </div>

              {/* AI Real-time Feedback Card */}
              <div className="bg-surface border border-outline-variant/25 rounded-2xl p-4 space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-[10px] font-bold text-primary bg-primary/10 px-2.5 py-1 rounded-full uppercase tracking-wider font-mono">Real-Time Pitch Evaluation</span>
                  <div className="text-lg font-bold text-primary font-mono">Score: {current.score}/100</div>
                </div>
                
                <div className="grid grid-cols-2 gap-2 text-[11px] text-on-surface-variant">
                  <div className="bg-surface-container-high p-2 rounded-lg border border-outline-variant/10">
                    <span className="font-bold text-on-surface block mb-0.5">Empathy Check</span>
                    {current.empathy}
                  </div>
                  <div className="bg-surface-container-high p-2 rounded-lg border border-outline-variant/10">
                    <span className="font-bold text-on-surface block mb-0.5">Playbook Score</span>
                    {current.playbookAlignment}
                  </div>
                </div>
                
                <p className="text-xs text-secondary italic font-semibold font-mono text-center">
                  {current.nextGoal}
                </p>
              </div>

            </div>

            {/* Input Footer */}
            <div className="p-4 border-t border-outline-variant/20 bg-surface">
              <div className="bg-surface-container rounded-full px-4 py-2 border border-outline-variant/30 flex justify-between items-center text-xs">
                <span className="text-on-surface-variant italic">Microphone listening for response...</span>
                <span className="material-symbols-outlined text-primary bg-primary/10 rounded-full p-1 animate-pulse">mic</span>
              </div>
            </div>

          </div>
        </div>

        {/* Right Side: Copy & Switcher */}
        <div className="space-y-6">
          <span className="text-secondary text-sm font-bold tracking-widest uppercase font-mono">
            Interactive Practice Sandbox
          </span>
          <h2 className="text-4xl md:text-5xl font-bold leading-tight text-on-surface">
            Practice objection responses in a safe environment.
          </h2>
          <p className="text-lg text-on-surface-variant leading-relaxed">
            CloseIQ translates real buyer objections from your team's actual sales calls into self-paced practice scenarios. Reps can build confidence in a zero-stakes sandbox and receive immediate performance feedback.
          </p>

          {/* Scenario Selectors */}
          <div className="space-y-3.5 pt-4">
            <span className="text-xs font-bold uppercase tracking-wider text-on-surface-variant font-mono">Select Training Scenario</span>
            <div className="flex flex-col gap-2.5">
              <button 
                onClick={() => setActiveScenario('budget')}
                className={`px-4 py-3 rounded-xl border text-left text-xs font-semibold transition-all ${activeScenario === 'budget' ? 'bg-primary/10 border-primary text-primary' : 'bg-surface-container-high border-outline-variant/15 text-on-surface-variant hover:text-white'}`}
              >
                1. Budget Constraint Objection (Marcus Vance, VP)
              </button>
              <button 
                onClick={() => setActiveScenario('competitor')}
                className={`px-4 py-3 rounded-xl border text-left text-xs font-semibold transition-all ${activeScenario === 'competitor' ? 'bg-primary/10 border-primary text-primary' : 'bg-surface-container-high border-outline-variant/15 text-on-surface-variant hover:text-white'}`}
              >
                2. Price Comparison Objections (Laura Croft, Ops)
              </button>
              <button 
                onClick={() => setActiveScenario('onboarding')}
                className={`px-4 py-3 rounded-xl border text-left text-xs font-semibold transition-all ${activeScenario === 'onboarding' ? 'bg-primary/10 border-primary text-primary' : 'bg-surface-container-high border-outline-variant/15 text-on-surface-variant hover:text-white'}`}
              >
                3. Speeding Up New Hire Onboarding (Ken Adams, Enablement)
              </button>
            </div>
          </div>
        </div>

      </section>

      {/* Feature 2: Actionable Intelligence & Training Custom Modules */}
      <section className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
        <div className="space-y-6">
          <span className="text-tertiary text-sm font-bold tracking-widest uppercase font-mono">Custom Training Modules</span>
          <h2 className="text-4xl md:text-5xl font-bold leading-tight text-on-surface">
            Replicate your top performers.
          </h2>
          <p className="text-lg text-on-surface-variant leading-relaxed">
            CloseIQ detects top-performing sales calls that successfully overcame major objections. It automatically extracts those clips and creates custom interactive training modules so the entire team can master the winning talk track.
          </p>
          <div className="space-y-4 pt-2 text-sm text-on-surface-variant">
            <div className="flex items-center gap-3">
              <span className="material-symbols-outlined text-primary">arrow_forward</span>
              <span>Reduce rep ramp-up times by over 40%</span>
            </div>
            <div className="flex items-center gap-3">
              <span className="material-symbols-outlined text-primary">arrow_forward</span>
              <span>Build central objection-handling libraries from real call wins</span>
            </div>
            <div className="flex items-center gap-3">
              <span className="material-symbols-outlined text-primary">arrow_forward</span>
              <span>Audit playbooks dynamically as competitor positioning shifts</span>
            </div>
          </div>
        </div>

        {/* Right Side: Training Module Mockup */}
        <div className="relative">
          <div className="absolute inset-0 bg-tertiary/5 blur-[100px] rounded-full pointer-events-none"></div>
          
          <div className="relative z-10 bg-surface-container-low rounded-3xl shadow-2xl border border-outline-variant/20 overflow-hidden flex flex-col h-[400px]">
            <div className="p-4 border-b border-outline-variant/20 flex items-center justify-between bg-surface-container-highest">
              <div className="flex gap-2 items-center">
                <span className="material-symbols-outlined text-tertiary">star_rate</span>
                <span className="font-semibold text-sm text-on-surface">Top Call Training Extractor</span>
              </div>
              <span className="text-[10px] font-mono bg-tertiary/20 text-tertiary px-2 py-0.5 rounded font-bold">MODULE GENERATOR</span>
            </div>

            <div className="p-6 relative flex-grow overflow-y-auto space-y-4 text-xs">
              
              {/* Box 1 */}
              <div className="flex gap-3 bg-surface p-3 rounded-xl border border-outline-variant/10 items-center">
                <div className="w-6 h-6 bg-primary flex items-center justify-center text-on-primary font-bold rounded text-[10px]">1</div>
                <span className="font-semibold text-on-surface">Sneha Joshi closed $120k deal using 'ROI-calculator'</span>
                <span className="material-symbols-outlined ml-auto text-primary text-sm">check_circle</span>
              </div>

              {/* Extraction Details */}
              <div className="flex gap-3 bg-surface p-4 rounded-xl border border-outline-variant/10">
                <div className="w-6 h-6 bg-tertiary flex items-center justify-center text-on-tertiary font-bold rounded text-[10px] shrink-0">2</div>
                <div className="space-y-3 flex-grow">
                  <div className="flex justify-between items-center">
                    <span className="font-bold text-on-surface">Extracting Talk Track: Value Discovery</span>
                    <span className="material-symbols-outlined text-on-surface-variant text-sm">content_cut</span>
                  </div>
                  <div className="text-[9px] text-tertiary font-bold uppercase tracking-wider font-mono">Extracted Transcript Clip</div>
                  <p className="text-on-surface-variant leading-relaxed">
                    \"By automatically reviewing calls, CloseIQ helps companies reclaim 5 hours per week per manager. Let's look at what that saves you annually...\"
                  </p>
                  
                  <div className="grid grid-cols-3 gap-2">
                    <div className="bg-surface-container p-2.5 rounded-lg border border-outline-variant/10 text-center">
                      <div className="text-primary font-bold text-sm">+22%</div>
                      <div className="text-[8px] text-on-surface-variant leading-none mt-1">Closing Rate Lift</div>
                    </div>
                    <div className="bg-surface-container p-2.5 rounded-lg border border-outline-variant/10 text-center">
                      <div className="text-primary font-bold text-sm">40%</div>
                      <div className="text-[8px] text-on-surface-variant leading-none mt-1">Ramp Time Cut</div>
                    </div>
                    <div className="bg-surface-container p-2.5 rounded-lg border border-outline-variant/10 text-center">
                      <div className="text-error font-bold text-sm">-5 hrs</div>
                      <div className="text-[8px] text-on-surface-variant leading-none mt-1">Admin Overhead</div>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
