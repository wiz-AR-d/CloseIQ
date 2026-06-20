import { useState, useEffect } from 'react';

interface HeroSectionProps {
  onOpenPopup?: () => void;
}

export default function HeroSection({ onOpenPopup }: HeroSectionProps) {
  const [activeTab, setActiveTab] = useState<'copilot' | 'coaching'>('copilot');
  const [liveCueIndex, setLiveCueIndex] = useState(0);

  // Rotate live cues for demonstration
  useEffect(() => {
    const timer = setInterval(() => {
      setLiveCueIndex((prev) => (prev + 1) % 3);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  const liveCues = [
    {
      title: "Objection: Pricing vs Acme Corp",
      badge: "COMPETITIVE BATTLE CARD",
      text: "\"Acme is offering a 20% discount on annual contracts.\"",
      tip: "Highlight our auto-built battle cards and customized training modules. Point out that Acme charges extra for post-call analytics.",
      action: "Talk Track: Value-First"
    },
    {
      title: "Objection: No Budget This Quarter",
      badge: "BUDGET PLAYBOOK",
      text: "\"We love the product but have frozen new software spend.\"",
      tip: "Offer our Pilot Program: 30 days deferred billing. Remind them that CloseIQ pays for itself in ramp-up time reduction alone.",
      action: "Talk Track: ROI Proof"
    },
    {
      title: "buying signal: Integration Question",
      badge: "TECHNICAL OUTLINE",
      text: "\"Does this integrate directly with Salesforce and Outreach?\"",
      tip: "Say 'Yes, natively.' We auto-sync transcripts, summaries, and action items with zero manual entry.",
      action: "Sync Demo"
    }
  ];

  return (
    <header className="relative pt-36 pb-24 overflow-hidden text-white">
      {/* Scenic Sunset Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center z-0" 
        style={{ backgroundImage: "url('/back.png')" }}
      />
      {/* Subtle tint overlay to improve text readability */}
      <div className="absolute inset-0 bg-slate-900/10 z-0" />
      {/* Gradient Overlay to fade into page background */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/10 to-background z-0" />

      <div className="max-w-7xl mx-auto px-6 relative z-10 flex flex-col items-center text-center">
        {/* Live intelligence pill */}
        <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/10 rounded-full border border-white/20 backdrop-blur-md mb-8 animate-fade-in">
          <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
          <span className="text-[10px] text-white font-bold tracking-wider uppercase font-mono">
            Intelligence is Live
          </span>
        </div>

        {/* Title & Subheading */}
        <h1 className="text-5xl md:text-7xl lg:text-[5.5rem] font-bold leading-[1.05] tracking-tight max-w-4xl text-white mb-6">
          Close more deals. <br />
          <span className="bg-gradient-to-r from-primary via-primary/80 to-secondary bg-clip-text text-transparent">
            Improve faster.
          </span>
        </h1>
        
        <p className="text-lg md:text-xl text-white/95 max-w-2xl leading-relaxed mb-10">
          CloseIQ surfaces subtle cues during live customer calls, then automatically translates transcript feedback into structured team coaching playbooks—no manual CRM logging required.
        </p>

        {/* CTA buttons */}
        <div className="flex flex-col sm:flex-row gap-4 mb-16 justify-center">
          <button 
            onClick={onOpenPopup}
            className="px-8 py-4 bg-primary text-on-primary font-bold rounded-full shadow-lg hover:brightness-110 hover:shadow-primary/20 transition-all text-base flex items-center gap-2"
          >
            <span className="material-symbols-outlined text-sm">calendar_today</span>
            Book a Live Demo
          </button>
          <a
            href="#live-copilot"
            className="px-8 py-4 bg-white/10 hover:bg-white/20 text-white font-semibold rounded-full border border-white/20 backdrop-blur-sm transition-colors text-base flex items-center justify-center"
          >
            See How it Works
          </a>
        </div>

        {/* Dynamic Interactive Mockup (cluely.com style application card) */}
        <div className="w-full max-w-5xl bg-surface-container-lowest/40 rounded-3xl border border-outline-variant/20 p-3 shadow-2xl backdrop-blur-2xl relative">
          <div className="absolute -top-12 -left-12 w-64 h-64 bg-primary/10 rounded-full blur-[80px] -z-10"></div>
          <div className="absolute -bottom-12 -right-12 w-64 h-64 bg-tertiary/10 rounded-full blur-[80px] -z-10"></div>

          {/* Window Chrome Header */}
          <div className="flex items-center justify-between px-4 py-3 bg-surface-container-low/90 rounded-t-2xl border-b border-outline-variant/10">
            <div className="flex gap-1.5">
              <span className="w-3 h-3 rounded-full bg-[#ff5f56]"></span>
              <span className="w-3 h-3 rounded-full bg-[#ffbd2e]"></span>
              <span className="w-3 h-3 rounded-full bg-[#27c93f]"></span>
            </div>
            
            {/* Interactive Switchers */}
            <div className="flex bg-surface-container-high rounded-full p-1 border border-outline-variant/30 text-xs font-semibold">
              <button 
                onClick={() => setActiveTab('copilot')}
                className={`px-4 py-1.5 rounded-full transition-all ${activeTab === 'copilot' ? 'bg-primary text-on-primary shadow-sm' : 'text-on-surface-variant hover:text-on-surface'}`}
              >
                1. Live Sales Copilot
              </button>
              <button 
                onClick={() => setActiveTab('coaching')}
                className={`px-4 py-1.5 rounded-full transition-all ${activeTab === 'coaching' ? 'bg-primary text-on-primary shadow-sm' : 'text-on-surface-variant hover:text-on-surface'}`}
              >
                2. Post-Call Coaching
              </button>
            </div>
            <div className="flex items-center gap-2 bg-surface-container-highest px-3 py-1 rounded-full text-[10px] font-bold text-on-surface-variant font-mono">
              <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse"></span>
              CLOSEIQ-V2.4
            </div>
          </div>

          {/* Tab 1: Live Copilot mockup */}
          {activeTab === 'copilot' && (
            <div className="grid grid-cols-1 md:grid-cols-12 gap-4 p-4 md:p-6 bg-surface-container-low/50 text-left min-h-[420px] rounded-b-2xl">
              
              {/* Meeting Stream Block */}
              <div className="md:col-span-7 bg-[#0b0f19] rounded-2xl border border-outline-variant/10 p-5 flex flex-col justify-between relative overflow-hidden">
                {/* Simulated Web Meeting Header */}
                <div className="flex justify-between items-center z-10">
                  <div className="bg-black/50 backdrop-blur-md px-3 py-1 rounded-full text-xs font-semibold text-white flex items-center gap-1.5">
                    <span className="material-symbols-outlined text-[14px] text-error">videocam</span>
                    Live Zoom Pitch Call
                  </div>
                  <div className="bg-black/50 backdrop-blur-md px-3 py-1 rounded-full text-xs font-semibold text-white font-mono">
                    09:42
                  </div>
                </div>

                {/* Simulated Customer Wave / Avatar */}
                <div className="my-8 flex flex-col items-center justify-center py-6 z-10">
                  <div className="w-20 h-20 bg-gradient-to-tr from-secondary to-primary rounded-full flex items-center justify-center shadow-xl ring-4 ring-primary/20 mb-3 animate-pulse">
                    <span className="material-symbols-outlined text-white text-3xl">account_circle</span>
                  </div>
                  <span className="text-sm font-bold text-white">Aditya Mehta</span>
                  <span className="text-xs text-on-surface-variant">VP of Sales Operations, Acme Corp</span>
                </div>

                {/* Scrolling Transcript Overlay */}
                <div className="bg-black/40 backdrop-blur-md p-4 rounded-xl border border-outline-variant/10 space-y-2 z-10">
                  <div className="flex items-center gap-2">
                    <span className="text-[10px] bg-primary/20 text-primary font-mono px-1.5 py-0.5 rounded font-bold uppercase">Customer</span>
                    <span className="text-xs text-on-surface-variant">09:41</span>
                  </div>
                  <p className="text-sm text-white leading-relaxed">
                    {liveCues[liveCueIndex].text}
                  </p>
                </div>

                {/* Subtitle mesh */}
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#0b0f19]/20 to-[#0b0f19] pointer-events-none"></div>
              </div>

              {/* CloseIQ HUD Panel */}
              <div className="md:col-span-5 flex flex-col gap-4">
                <div className="bg-surface border border-outline-variant/30 rounded-2xl p-5 shadow-lg relative overflow-hidden flex-grow flex flex-col justify-between">
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="text-[10px] font-bold text-primary bg-primary/10 px-2.5 py-1 rounded-full uppercase tracking-wider font-mono">
                        {liveCues[liveCueIndex].badge}
                      </span>
                      <span className="text-xs text-on-surface-variant flex items-center gap-1">
                        <span className="material-symbols-outlined text-xs text-primary">bolt</span>
                        Active
                      </span>
                    </div>

                    <h3 className="text-lg font-bold text-on-surface flex items-center gap-2">
                      <span className="material-symbols-outlined text-primary">lightbulb</span>
                      {liveCues[liveCueIndex].title}
                    </h3>
                    
                    <div className="p-3 bg-surface-container-high rounded-xl border border-outline-variant/10">
                      <div className="text-[10px] text-primary font-bold uppercase tracking-wider mb-1 font-mono">Suggested Response</div>
                      <p className="text-sm text-on-surface leading-relaxed">
                        {liveCues[liveCueIndex].tip}
                      </p>
                    </div>
                  </div>

                  <div className="mt-4 pt-4 border-t border-outline-variant/10 flex items-center justify-between">
                    <span className="text-xs text-on-surface-variant italic">Next best action recommended.</span>
                    <button className="px-4 py-2 bg-primary/20 hover:bg-primary/30 text-primary border border-primary/30 rounded-lg text-xs font-bold transition-all">
                      {liveCues[liveCueIndex].action}
                    </button>
                  </div>
                </div>

                {/* Quick Info Bar */}
                <div className="bg-surface-container-high/60 border border-outline-variant/20 rounded-xl p-3.5 flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                    <span className="material-symbols-outlined text-sm">support_agent</span>
                  </div>
                  <div>
                    <div className="text-xs font-bold text-on-surface">Continuous Assistance</div>
                    <div className="text-[10px] text-on-surface-variant">Objection playbooks auto-triggered based on call topics</div>
                  </div>
                </div>
              </div>

            </div>
          )}

          {/* Tab 2: Post-Call Coaching mockup */}
          {activeTab === 'coaching' && (
            <div className="grid grid-cols-1 md:grid-cols-12 gap-4 p-4 md:p-6 bg-surface-container-low/50 text-left min-h-[420px] rounded-b-2xl">
              
              {/* Audit Details */}
              <div className="md:col-span-8 bg-surface border border-outline-variant/20 rounded-2xl p-6 flex flex-col justify-between">
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <div>
                      <h3 className="text-xl font-bold text-on-surface">Call Evaluation: Aditya Mehta Pitch</h3>
                      <p className="text-xs text-on-surface-variant">Reviewed automatically 3 minutes after conversation ended</p>
                    </div>
                    <div className="bg-primary/10 text-primary border border-primary/20 px-3 py-1 rounded-full text-xs font-bold">
                      Score: 88/100
                    </div>
                  </div>

                  <div className="h-px bg-outline-variant/10"></div>

                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <span className="material-symbols-outlined text-primary mt-0.5">check_circle</span>
                      <div>
                        <div className="text-xs font-bold text-on-surface">Strong Objection Handling</div>
                        <p className="text-xs text-on-surface-variant leading-relaxed">Rep addressed the competitor question using the battle card strategy. Maintained high confidence.</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <span className="material-symbols-outlined text-error mt-0.5">warning</span>
                      <div>
                        <div className="text-xs font-bold text-error">Coaching Cues: Talk-to-Listen Ratio</div>
                        <p className="text-xs text-on-surface-variant leading-relaxed">Rep talked 64% of the call. In discovery phases, keep talk ratio below 50% to uncover critical pain points.</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <span className="material-symbols-outlined text-tertiary mt-0.5">school</span>
                      <div>
                        <div className="text-xs font-bold text-on-surface">Automated Training Module Assigned</div>
                        <p className="text-xs text-on-surface-variant leading-relaxed">Generated an interactive roleplay roleplaying a skeptical buyer raising competitor pricing issues.</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="pt-4 border-t border-outline-variant/10 flex items-center justify-between">
                  <span className="text-xs text-on-surface-variant">Personalized coaching report saved to representative's hub.</span>
                  <button className="px-4 py-2 bg-primary text-on-primary rounded-lg text-xs font-bold hover:brightness-110 transition-all">
                    Start Roleplay Practice
                  </button>
                </div>
              </div>

              {/* Rep Coaching Overview radar */}
              <div className="md:col-span-4 flex flex-col gap-4">
                <div className="bg-[#0b0f19] rounded-2xl border border-outline-variant/10 p-5 flex flex-col justify-between flex-grow">
                  <div className="space-y-4">
                    <span className="text-[10px] font-bold text-tertiary bg-tertiary/10 px-2 py-0.5 rounded-full uppercase tracking-wider font-mono">REP PERFORMANCE RADAR</span>
                    
                    <div className="space-y-3">
                      <div>
                        <div className="flex justify-between text-xs text-on-surface-variant mb-1">
                          <span>Objection Handling</span>
                          <span className="text-white font-bold">92%</span>
                        </div>
                        <div className="w-full bg-surface-container-high h-1 rounded-full overflow-hidden">
                          <div className="bg-primary h-full w-[92%]"></div>
                        </div>
                      </div>

                      <div>
                        <div className="flex justify-between text-xs text-on-surface-variant mb-1">
                          <span>Discovery Depth</span>
                          <span className="text-white font-bold">78%</span>
                        </div>
                        <div className="w-full bg-surface-container-high h-1 rounded-full overflow-hidden">
                          <div className="bg-secondary h-full w-[78%]"></div>
                        </div>
                      </div>

                      <div>
                        <div className="flex justify-between text-xs text-on-surface-variant mb-1">
                          <span>Talk/Listen Ratio</span>
                          <span className="text-error font-bold">45%</span>
                        </div>
                        <div className="w-full bg-surface-container-high h-1 rounded-full overflow-hidden">
                          <div className="bg-error h-full w-[45%]"></div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="p-3 bg-surface-container-high/40 rounded-xl border border-outline-variant/10 text-center">
                    <div className="text-[10px] text-tertiary font-bold uppercase tracking-wider mb-0.5 font-mono">Week-over-week Progress</div>
                    <div className="text-lg font-bold text-white">+12% Competitor Handling</div>
                  </div>
                </div>
              </div>

            </div>
          )}
        </div>
      </div>
    </header>
  )
}
