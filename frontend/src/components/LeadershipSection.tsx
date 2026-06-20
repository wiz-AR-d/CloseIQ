export default function LeadershipSection() {
  return (
    <section id="ai-coaching" className="py-24 bg-surface text-on-surface">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
        
        {/* Left Column: Visual Dashboard */}
        <div>
          <div className="relative rounded-3xl overflow-hidden bg-surface-container-low border border-outline-variant/20 shadow-2xl flex flex-col h-[460px]">
            {/* Header */}
            <div className="p-4 border-b border-outline-variant/20 flex justify-between items-center bg-surface-container-highest">
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-primary text-xl">psychology</span>
                <span className="font-semibold text-sm text-on-surface tracking-wide">Coaching Intelligence Engine</span>
              </div>
              <div className="flex gap-1.5">
                <span className="w-3 h-3 rounded-full bg-outline-variant/30"></span>
                <span className="w-3 h-3 rounded-full bg-outline-variant/30"></span>
                <span className="w-3 h-3 rounded-full bg-outline-variant/30"></span>
              </div>
            </div>

            {/* Body */}
            <div className="p-6 flex-grow bg-surface-container-low overflow-hidden flex flex-col gap-4">
              
              {/* Top Row: Overall Score & Weakness Alerts */}
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-surface p-4 rounded-2xl border border-outline-variant/10 shadow-sm relative overflow-hidden">
                  <p className="text-[10px] text-on-surface-variant mb-1 uppercase tracking-wider font-bold">Evaluation Quality</p>
                  <div className="flex items-end gap-2 mt-1">
                    <h3 className="text-3xl font-bold text-primary">88%</h3>
                    <span className="text-xs text-primary mb-1 flex items-center font-medium font-mono">+6% wk/wk</span>
                  </div>
                  <p className="text-[9px] text-on-surface-variant mt-2">Analyzed from last 14 sales calls</p>
                </div>

                <div className="bg-surface p-4 rounded-2xl border border-outline-variant/10 shadow-sm relative overflow-hidden">
                  <p className="text-[10px] text-on-surface-variant mb-1 uppercase tracking-wider font-bold">Weakness Detection</p>
                  <div className="flex items-end gap-2 mt-1">
                    <h3 className="text-3xl font-bold text-error">2 Cues</h3>
                    <span className="text-xs text-error mb-1 flex items-center font-medium font-mono">-1 alert</span>
                  </div>
                  <p className="text-[9px] text-error mt-2 italic leading-none">High talk-ratio & pricing hesitation.</p>
                </div>
              </div>

              {/* Middle Section: Weakness Breakdown */}
              <div className="bg-surface p-5 rounded-2xl border border-outline-variant/10 shadow-sm space-y-3">
                <h4 className="text-[10px] font-bold text-on-surface-variant uppercase tracking-wider flex justify-between items-center">
                  <span>Skill-Gap Analysis</span>
                  <span className="material-symbols-outlined text-sm">bar_chart</span>
                </h4>
                
                <div className="space-y-3">
                  {/* Item 1 */}
                  <div className="space-y-1">
                    <div className="flex justify-between text-xs font-semibold">
                      <span className="text-on-surface">Active Listening (Talk/Listen)</span>
                      <span className="text-error font-mono">45% (Rep spoke 64%) ⚠️</span>
                    </div>
                    <div className="w-full bg-surface-container h-1.5 rounded-full overflow-hidden">
                      <div className="bg-error h-full w-[45%] rounded-full"></div>
                    </div>
                  </div>
                  
                  {/* Item 2 */}
                  <div className="space-y-1">
                    <div className="flex justify-between text-xs font-semibold">
                      <span className="text-on-surface">Objection Handling</span>
                      <span className="text-primary font-mono">92% ✅</span>
                    </div>
                    <div className="w-full bg-surface-container h-1.5 rounded-full overflow-hidden">
                      <div className="bg-primary h-full w-[92%] rounded-full"></div>
                    </div>
                  </div>

                  {/* Item 3 */}
                  <div className="space-y-1">
                    <div className="flex justify-between text-xs font-semibold">
                      <span className="text-on-surface">Discovery Depth (Value Pitching)</span>
                      <span className="text-secondary font-mono">78% ✅</span>
                    </div>
                    <div className="w-full bg-surface-container h-1.5 rounded-full overflow-hidden">
                      <div className="bg-secondary h-full w-[78%] rounded-full"></div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Bottom Assigned Roleplay Info */}
              <div className="p-3.5 bg-primary/10 border border-primary/20 rounded-xl flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-primary">school</span>
                  <div>
                    <div className="text-xs font-bold text-on-surface">Recommended Practice Sandbox</div>
                    <div className="text-[10px] text-on-surface-variant">Active Listening & Budget Negotiation</div>
                  </div>
                </div>
                <span className="text-[10px] bg-primary text-on-primary px-2 py-0.5 rounded font-bold font-mono">NEW</span>
              </div>
            </div>

            <div className="absolute top-3 right-3 bg-primary text-on-primary px-3 py-1 rounded-full text-[9px] font-bold uppercase tracking-widest flex items-center gap-1.5 shadow-lg">
              <span className="w-1.5 h-1.5 rounded-full bg-on-primary animate-pulse"></span>
              Auto-Evaluated
            </div>
          </div>
        </div>

        {/* Right Column: Copy */}
        <div className="space-y-6">
          <span className="text-primary text-sm font-bold tracking-widest uppercase">
            Automated Call Coaching
          </span>
          <h2 className="text-4xl md:text-5xl font-bold leading-tight text-on-surface">
            Automate call audits and playbook coaching.
          </h2>
          <p className="text-lg text-on-surface-variant leading-relaxed">
            Instead of asking managers to spend hours listening to recorded calls, CloseIQ structures 100% of conversation data. We track playbook alignment, flag script gaps, and recommend practice modules automatically.
          </p>
          <ul className="space-y-4 pt-4">
            <li className="flex items-center gap-3">
              <span className="material-symbols-outlined text-primary">check_circle</span>
              <span className="text-on-surface">Evaluate script execution and buyer response quality automatically</span>
            </li>
            <li className="flex items-center gap-3">
              <span className="material-symbols-outlined text-primary">check_circle</span>
              <span className="text-on-surface">Pinpoint specific weak areas like talk-to-listen ratios and pricing hesitation</span>
            </li>
            <li className="flex items-center gap-3">
              <span className="material-symbols-outlined text-primary">check_circle</span>
              <span className="text-on-surface">Recommend interactive practice sandboxes to help reps self-correct</span>
            </li>
          </ul>
        </div>
        
      </div>
    </section>
  )
}
