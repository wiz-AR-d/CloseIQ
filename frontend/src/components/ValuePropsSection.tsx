export default function ValuePropsSection() {
  return (
    <section id="how-it-works" className="py-24 bg-background text-on-background">
      <div className="max-w-[1200px] mx-auto px-6 space-y-40">
        
        {/* Component 1: AI Persona */}
        <div className="flex flex-col lg:flex-row-reverse items-center gap-16 md:gap-24">
          <div className="flex-1 space-y-6">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-surface/50 backdrop-blur-xl border border-outline shadow-clay-sm rounded-full text-sm font-semibold tracking-wide uppercase text-on-surface-variant">
              <span className="w-2 h-2 rounded-full bg-emerald-500"></span> Component 1: AI Persona
            </div>
            <h2 className="text-4xl md:text-5xl font-sans font-bold tracking-tight leading-[1.1] text-on-background">
              Ruthless roleplay. <br/>
              <span className="italic text-on-surface-variant">Without burning leads.</span>
            </h2>
            <p className="text-lg text-on-surface-variant leading-relaxed max-w-lg font-medium">
              Reps practice playbooks out loud against specialized AI buyer profiles modeled after your actual customer profiles, before ever touching a real prospect. CloseIQ simulates realistic conversations and provides instant scorecards.
            </p>
          </div>
          <div className="flex-1 w-full relative">
            <div className="bg-surface/50 backdrop-blur-xl border border-outline rounded-none p-6 shadow-clay border border-outline/50 relative z-10 w-full max-w-[500px] mx-auto">
               {/* Premium Scorecard UI Mockup */}
              <div className="flex items-center justify-between pb-5 border-b border-outline/40 mb-5">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-emerald-500/10 text-emerald-400 rounded-full flex items-center justify-center border border-emerald-500/20">
                    <span className="material-symbols-outlined text-2xl">person</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg leading-tight">VP of IT Persona</h4>
                    <p className="text-sm font-medium text-on-surface-variant">Focus: Security & Compliance</p>
                  </div>
                </div>
                <div className="text-4xl font-sans font-bold tracking-tight text-emerald-400 font-mono">81</div>
              </div>
              <div className="space-y-5">
                <div>
                  <div className="flex justify-between font-medium text-base mb-1.5">
                    <span>Pitch Clarity</span>
                    <span className="text-emerald-400 font-semibold">92%</span>
                  </div>
                  <div className="w-full bg-[#1C1C1E] h-1.5 rounded-none overflow-hidden">
                     <div className="bg-emerald-500 h-full w-[92%] rounded-none"></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between font-medium text-base mb-1.5">
                    <span>Objection Handling</span>
                    <span className="text-teal-400 font-semibold">68%</span>
                  </div>
                  <div className="w-full bg-[#1C1C1E] h-1.5 rounded-none overflow-hidden">
                     <div className="bg-teal-400 h-full w-[68%] rounded-none"></div>
                  </div>
                </div>
              </div>
            </div>
             {/* Decorative soft glow */}
             <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] bg-emerald-500/10 rounded-full blur-[60px] -z-10 pointer-events-none"></div>
          </div>
        </div>

        {/* Component 2: AI Co-Pilot */}
        <div className="flex flex-col lg:flex-row items-center gap-16 md:gap-24">
          <div className="flex-1 space-y-6">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-surface/50 backdrop-blur-xl border border-outline shadow-clay-sm rounded-full text-sm font-semibold tracking-wide uppercase text-on-surface-variant">
              <span className="w-2 h-2 rounded-full bg-emerald-500"></span> Component 2: AI Co-Pilot
            </div>
            <h2 className="text-4xl md:text-5xl font-sans font-bold tracking-tight leading-[1.1] text-on-background">
              Continuous guidance. <br/>
              <span className="italic text-on-surface-variant">No memory bottlenecks.</span>
            </h2>
            <p className="text-lg text-on-surface-variant leading-relaxed max-w-lg font-medium">
              The exact same co-pilot is present with the rep continuously — during AI Persona practice calls AND on real live customer calls once they go live. Rather than relying on memorized scripts, reps get live cues, objections battlecards, and discovery checklists from day one.
            </p>
          </div>
          <div className="flex-1 w-full relative">
            <div className="bg-[#1C1C1E] rounded-none overflow-hidden shadow-[0_20px_40px_-15px_rgba(0,0,0,0.5)] border border-white/10 relative z-10 w-full max-w-[500px] mx-auto aspect-[4/3] flex flex-col justify-between group">
               
              {/* Fake Top Bar */}
              <div className="flex justify-between items-center p-4 relative z-20">
                <div className="px-3 py-1 bg-black/40 backdrop-blur-md rounded-full flex items-center gap-2 border border-white/5">
                  <div className="w-2 h-2 rounded-full bg-red-500 animate-pulse"></div>
                  <span className="text-xs font-medium text-white/80">04:22</span>
                </div>
                <div className="w-8 h-8 rounded-full bg-black/40 backdrop-blur-md flex items-center justify-center border border-white/5">
                  <span className="material-symbols-outlined text-white/70 text-[18px]">group</span>
                </div>
              </div>

              {/* Main Avatar Placeholder */}
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <div className="w-28 h-28 rounded-full bg-gradient-to-tr from-emerald-500/10 to-teal-500/10 border border-emerald-500/15 flex items-center justify-center backdrop-blur-sm shadow-[0_0_40px_rgba(16,185,129,0.1)]">
                  <span className="material-symbols-outlined text-[48px] text-emerald-400/20">person</span>
                </div>
              </div>

              {/* Fake Bottom Controls */}
              <div className="flex justify-center gap-4 p-5 relative z-20">
                <div className="w-12 h-12 rounded-full bg-red-500/20 text-red-500 flex items-center justify-center border border-red-500/30 shadow-lg">
                  <span className="material-symbols-outlined text-[22px]">mic_off</span>
                </div>
                <div className="w-12 h-12 rounded-full bg-black/60 backdrop-blur-md text-white/90 flex items-center justify-center border border-white/10 shadow-lg">
                  <span className="material-symbols-outlined text-[22px]">videocam</span>
                </div>
                <div className="w-12 h-12 rounded-full bg-red-600 text-white flex items-center justify-center shadow-lg">
                  <span className="material-symbols-outlined text-[22px]">call_end</span>
                </div>
              </div>
               
              {/* Premium Floating Live Insight Card */}
              <div className="absolute bottom-20 right-5 w-[310px] bg-[#2A2A2D]/95 backdrop-blur-xl rounded-none p-4 shadow-[0_12px_40px_rgba(0,0,0,0.4)] border border-white/10 transform translate-y-2 opacity-90 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-emerald-400 rounded-full animate-pulse shadow-[0_0_8px_rgba(16,185,129,0.8)]"></span>
                    <span className="text-xs font-bold tracking-widest text-emerald-400 uppercase">Live Insight</span>
                  </div>
                  <span className="material-symbols-outlined text-white/30 text-[16px]">psychology</span>
                </div>
                
                <h5 className="text-[16px] font-semibold text-white mb-2 flex items-center gap-1.5">
                  <span className="text-white/60 font-medium">Mentioned:</span> Nexus
                </h5>
                
                <div className="bg-black/30 rounded-none p-3 mb-3.5 border border-white/5">
                  <p className="text-[14px] font-medium text-white/80 leading-relaxed">
                    "Nexus lacks native Salesforce sync. Highlight our 1-click integration."
                  </p>
                </div>
                
                <button className="w-full flex items-center justify-center gap-2 py-2.5 bg-emerald-500 hover:bg-emerald-600 text-black font-semibold text-[14px] rounded-none transition-colors shadow-[0_4px_12px_rgba(16,185,129,0.3)]">
                  <span className="material-symbols-outlined text-[16px]">visibility</span>
                  View Battlecard
                </button>
              </div>
            </div>
             {/* Decorative soft glow */}
             <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] bg-emerald-500/10 rounded-full blur-[60px] -z-10 pointer-events-none"></div>
          </div>
        </div>

      </div>
    </section>
  );
}
