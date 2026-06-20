import { useState } from 'react';

export default function ManagementSuiteSection() {
  const [searchTerm, setSearchTerm] = useState('');
  
  const searchResults = [
    { text: "\"...pricing was the main concern, they mentioned Competitor X has cheaper plans...\"", rep: "Sneha Joshi", date: "Today, 10:15 AM" },
    { text: "\"...wanted to confirm SOC2 compliance details and SSO setup timeline...\"", rep: "Manish Choudhury", date: "Yesterday, 3:45 PM" },
    { text: "\"...asked if we have a monthly billing option or if annual is required...\"", rep: "Deepak Kumar", date: "June 18, 11:20 AM" }
  ];

  return (
    <section id="battle-cards" className="py-24 bg-surface-container-low text-on-surface">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
          <span className="text-primary text-sm font-bold tracking-widest uppercase font-mono">
            Management & Playbooks
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-on-surface">
            Understand customer feedback, instantly.
          </h2>
          <p className="text-on-surface-variant leading-relaxed">
            CloseIQ surfaces competitive mentions, feature gaps, and pricing discussions directly from your daily calls, compiling them into objection libraries automatically.
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 h-auto">
          
          {/* Bento Item 1: Team Leaderboard */}
          <div className="md:col-span-2 bg-surface rounded-3xl p-8 border border-outline-variant/10 relative overflow-hidden group shadow-lg flex flex-col justify-between min-h-[320px]">
            <div className="relative z-10 space-y-4">
              <span className="text-[10px] text-primary font-bold uppercase tracking-wider font-mono">Performance Auditing</span>
              <h3 className="text-2xl font-bold text-on-surface">Team Playbook Audit</h3>
              <p className="text-on-surface-variant text-sm max-w-md">
                Track how effectively your global sales organization is executing playbooks and maintaining high quality scores.
              </p>
              
              <div className="pt-4 space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-primary/20 border border-primary/30 flex items-center justify-center text-xs font-bold text-primary">SJ</div>
                    <span className="font-semibold text-sm text-on-surface">Sneha Joshi</span>
                  </div>
                  <div className="flex items-center gap-8 text-sm">
                    <span className="text-primary font-bold">92% Quality Score</span>
                    <span className="text-on-surface-variant font-mono">14 Deals Closed</span>
                  </div>
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-secondary/20 border border-secondary/30 flex items-center justify-center text-xs font-bold text-secondary">MC</div>
                    <span className="font-semibold text-sm text-on-surface">Manish Choudhury</span>
                  </div>
                  <div className="flex items-center gap-8 text-sm">
                    <span className="text-primary font-bold">88% Quality Score</span>
                    <span className="text-on-surface-variant font-mono">11 Deals Closed</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute -right-20 -bottom-20 w-80 h-80 bg-primary/5 rounded-full blur-[80px]"></div>
          </div>

          {/* Bento Item 2: Automated Battle Card Card (Replaces PNG image) */}
          <div className="bg-surface rounded-3xl p-8 border border-outline-variant/10 shadow-lg flex flex-col justify-between min-h-[320px] relative overflow-hidden">
            <div className="space-y-4 z-10">
              <div className="flex justify-between items-center">
                <span className="text-[10px] text-tertiary font-bold uppercase tracking-wider font-mono">Auto-Built Asset</span>
                <span className="text-[9px] bg-tertiary/10 text-tertiary px-2 py-0.5 rounded font-mono font-bold">VITE INTEGRATION</span>
              </div>
              <h3 className="text-lg font-bold text-on-surface">Battle Card: vs Acme</h3>
              <p className="text-xs text-on-surface-variant leading-relaxed">
                Created automatically based on 48 customer mentions of "Acme Pricing" in transcripts.
              </p>
              
              <div className="p-3.5 bg-surface-container-high rounded-xl border border-outline-variant/10 space-y-2 text-xs">
                <div className="font-bold text-tertiary uppercase text-[9px] tracking-wider font-mono">Key Advantage</div>
                <p className="text-on-surface-variant">CloseIQ offers automated post-call evaluations and AI roleplays natively. Acme charges extra for analytics.</p>
                <div className="h-px bg-outline-variant/10"></div>
                <div className="font-bold text-error uppercase text-[9px] tracking-wider font-mono">Objection Pivot</div>
                <p className="text-on-surface-variant">"Yes, Acme is cheaper, but we reduce rep ramp time by 40%, generating ROI within 30 days."</p>
              </div>
            </div>
            <div className="absolute -right-16 -bottom-16 w-48 h-48 bg-tertiary/5 rounded-full blur-[50px]"></div>
          </div>

          {/* Bento Item 3: Coaching Radar */}
          <div className="bg-surface rounded-3xl p-8 border border-outline-variant/10 shadow-lg flex flex-col justify-between min-h-[340px]">
            <div>
              <span className="text-[10px] text-secondary font-bold uppercase tracking-wider font-mono">Weakness Radar</span>
              <h3 className="text-xl font-bold text-on-surface mt-1 mb-2">Team Coaching Radar</h3>
              <p className="text-xs text-on-surface-variant leading-relaxed">
                AI tracks and prioritizes specific sales techniques where the team can improve pitch delivery.
              </p>
            </div>
            
            <div className="mt-6 flex-grow flex flex-col justify-end space-y-3 bg-surface-container-high p-4 rounded-2xl border border-outline-variant/10">
              <div className="space-y-1">
                <div className="flex items-center justify-between text-xs font-semibold">
                  <span className="text-on-surface-variant">Objection Handling</span>
                  <span className="text-primary font-bold">92%</span>
                </div>
                <div className="w-full bg-surface-container h-1 rounded-full overflow-hidden">
                  <div className="bg-primary h-full w-[92%] rounded-full"></div>
                </div>
              </div>

              <div className="space-y-1">
                <div className="flex items-center justify-between text-xs font-semibold">
                  <span className="text-on-surface-variant">Pacing & Pitch</span>
                  <span className="text-secondary font-bold">78%</span>
                </div>
                <div className="w-full bg-surface-container h-1 rounded-full overflow-hidden">
                  <div className="bg-secondary h-full w-[78%] rounded-full"></div>
                </div>
              </div>

              <div className="space-y-1">
                <div className="flex items-center justify-between text-xs font-semibold">
                  <span className="text-on-surface-variant">Active Listening</span>
                  <span className="text-error font-bold">45%</span>
                </div>
                <div className="w-full bg-surface-container h-1 rounded-full overflow-hidden">
                  <div className="bg-error h-full w-[45%] rounded-full"></div>
                </div>
              </div>
              
              <div className="mt-2 text-[10px] text-error flex gap-1.5 items-start bg-error/10 p-2 rounded-xl border border-error/20 leading-tight">
                 <span className="material-symbols-outlined text-[14px]">warning</span>
                 <span>Active listening is low. Auto-generating discovery training scenarios.</span>
              </div>
            </div>
          </div>

          {/* Bento Item 4: Global Transcript Search */}
          <div className="md:col-span-2 bg-surface rounded-3xl p-8 border border-outline-variant/10 shadow-lg flex flex-col md:flex-row items-stretch gap-8 min-h-[340px]">
            <div className="flex-1 flex flex-col justify-between">
              <div>
                <span className="text-[10px] text-primary font-bold uppercase tracking-wider font-mono">Cross-Call Intelligence</span>
                <h3 className="text-2xl font-bold text-on-surface mt-1 mb-2">Global Transcript Search</h3>
                <p className="text-on-surface-variant text-xs leading-relaxed mb-4">
                  Search across thousands of hours of sales calls instantly for specific competitor mentions, feature gaps, or budget roadblocks.
                </p>
              </div>
              
              <div className="bg-surface-container-high p-3 rounded-xl border border-outline-variant/20 flex items-center gap-3">
                <span className="material-symbols-outlined text-on-surface-variant text-lg">
                  search
                </span>
                <input 
                  type="text"
                  placeholder="Search calls (e.g. 'Competitor X', 'pricing')..."
                  className="bg-transparent text-sm text-on-surface outline-none w-full placeholder-on-surface-variant/70 border-none p-0 focus:ring-0"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
            </div>
            
            <div className="flex-1 bg-[#0b0f19] rounded-2xl border border-outline-variant/10 p-4 flex flex-col justify-between overflow-y-auto max-h-[260px] space-y-3">
              <div className="text-[9px] text-primary font-bold uppercase tracking-widest font-mono">SEARCH LOGS</div>
              
              <div className="space-y-3">
                {searchResults.map((result, idx) => (
                  <div key={idx} className="p-2.5 bg-surface rounded-xl border border-outline-variant/10 space-y-1">
                    <p className="text-[11px] text-on-surface leading-relaxed font-medium">
                      {result.text}
                    </p>
                    <div className="flex justify-between text-[9px] text-on-surface-variant">
                      <span>{result.rep}</span>
                      <span>{result.date}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
