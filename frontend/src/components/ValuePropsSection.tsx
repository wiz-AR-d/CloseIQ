export default function ValuePropsSection() {
  return (
    <section id="how-it-works" className="py-24 bg-background text-on-background border-b-4 border-black">
      <div className="max-w-[1400px] mx-auto px-6 space-y-32">
        
        {/* Phase 1: Learn */}
        <div className="flex flex-col lg:flex-row items-center gap-16 border-4 border-black bg-white shadow-brutal-lg p-8 md:p-16">
          <div className="flex-1 space-y-6">
            <div className="inline-block px-4 py-2 border-4 border-black bg-black text-white font-black tracking-widest uppercase text-xl">
              Phase 1: Learn
            </div>
            <h2 className="text-5xl md:text-7xl font-black uppercase leading-[0.9] tracking-tighter">
              Instant <span className="text-primary">Knowledge.</span>
            </h2>
            <p className="text-2xl font-bold leading-tight max-w-lg mt-6">
              Skip the 40-page wikis. New reps chat with our AI Debriefer. 
              It ingests your product docs, pricing sheets, and past winning calls.
            </p>
            <ul className="space-y-4 mt-8 border-t-4 border-black pt-6">
              {['Trained on exact collateral', 'Interactive Q&A', 'Available 24/7'].map((item, i) => (
                <li key={i} className="flex items-center gap-4 text-xl font-bold uppercase">
                  <span className="material-symbols-outlined text-primary text-3xl font-black">arrow_forward</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="flex-1 w-full">
            <div className="bg-white border-4 border-black p-6 relative">
              {/* Mockup Chat UI - Brutalist */}
              <div className="space-y-6">
                <div className="flex flex-col gap-2 border-l-4 border-black pl-4">
                  <div className="font-black uppercase text-sm">New Rep</div>
                  <div className="bg-surface-container-high border-2 border-black p-4 text-lg font-bold">
                    How does our pricing compare to Acme Corp for enterprise tiers?
                  </div>
                </div>
                <div className="flex flex-col gap-2 border-r-4 border-primary pr-4 text-right">
                  <div className="font-black uppercase text-sm text-primary">AI Debriefer</div>
                  <div className="bg-primary text-white border-2 border-black p-4 text-lg font-bold">
                    <p className="mb-4 text-left">We are typically 15% more expensive upfront, but Acme charges for premium support and API access.</p>
                    <div className="bg-black text-white p-2 text-sm font-black uppercase flex items-center justify-end gap-2">
                      <span className="material-symbols-outlined text-[16px]">database</span> Source: Q3 Battlecard
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Phase 2: Practice */}
        <div className="flex flex-col lg:flex-row-reverse items-center gap-16 border-4 border-black bg-white shadow-brutal-lg p-8 md:p-16">
          <div className="flex-1 space-y-6">
            <div className="inline-block px-4 py-2 border-4 border-black bg-black text-white font-black tracking-widest uppercase text-xl">
              Phase 2: Practice
            </div>
            <h2 className="text-5xl md:text-7xl font-black uppercase leading-[0.9] tracking-tighter">
              Ruthless <span className="text-primary">Roleplay.</span>
            </h2>
            <p className="text-2xl font-bold leading-tight max-w-lg mt-6">
              Don't burn real leads on training. Our AI buyer personas simulate your toughest prospects. 
              They push back on price and demand features.
            </p>
            <ul className="space-y-4 mt-8 border-t-4 border-black pt-6">
              {['Customized buyer personas', 'Voice & text simulations', 'Instant scorecards'].map((item, i) => (
                <li key={i} className="flex items-center gap-4 text-xl font-bold uppercase">
                  <span className="material-symbols-outlined text-primary text-3xl font-black">arrow_forward</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="flex-1 w-full">
            <div className="bg-white border-4 border-black p-6 relative">
              {/* Mockup Scorecard UI - Brutalist */}
              <div className="flex items-center justify-between border-b-4 border-black pb-4 mb-6">
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 bg-black flex items-center justify-center">
                    <span className="material-symbols-outlined text-white text-3xl">person</span>
                  </div>
                  <div>
                    <h4 className="font-black uppercase text-2xl leading-none">VP of IT Persona</h4>
                    <p className="text-sm font-bold text-primary uppercase mt-1">Focus: Security</p>
                  </div>
                </div>
                <div className="text-5xl font-black">81</div>
              </div>
              <div className="space-y-6">
                <div>
                  <div className="flex justify-between font-black uppercase mb-2 text-lg">
                    <span>Pitch Clarity</span>
                    <span>92%</span>
                  </div>
                  <div className="w-full border-4 border-black h-8 p-1"><div className="bg-black h-full w-[92%]"></div></div>
                </div>
                <div>
                  <div className="flex justify-between font-black uppercase mb-2 text-lg">
                    <span>Objection Handling</span>
                    <span className="text-primary">68%</span>
                  </div>
                  <div className="w-full border-4 border-black h-8 p-1"><div className="bg-primary h-full w-[68%]"></div></div>
                </div>
              </div>
              <div className="mt-8 bg-black text-white p-4 flex gap-4 items-start">
                <span className="material-symbols-outlined text-3xl text-primary font-black">warning</span>
                <p className="font-bold text-lg uppercase leading-tight">Missed opportunity: Did not mention SOC2 Type II compliance.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Phase 3: Perform */}
        <div className="flex flex-col lg:flex-row items-center gap-16 border-4 border-black bg-white shadow-brutal-lg p-8 md:p-16">
          <div className="flex-1 space-y-6">
            <div className="inline-block px-4 py-2 border-4 border-black bg-black text-white font-black tracking-widest uppercase text-xl">
              Phase 3: Perform
            </div>
            <h2 className="text-5xl md:text-7xl font-black uppercase leading-[0.9] tracking-tighter">
              Live <span className="text-primary">Copilot.</span>
            </h2>
            <p className="text-2xl font-bold leading-tight max-w-lg mt-6">
              The training wheels come off, but the safety net remains. 
              The Live Copilot surfaces battlecards the second a competitor is mentioned.
            </p>
            <ul className="space-y-4 mt-8 border-t-4 border-black pt-6">
              {['Real-time transcription', 'Auto-surfaced battlecards', 'CRM auto-logging'].map((item, i) => (
                <li key={i} className="flex items-center gap-4 text-xl font-bold uppercase">
                  <span className="material-symbols-outlined text-primary text-3xl font-black">arrow_forward</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="flex-1 w-full">
            <div className="bg-white border-4 border-black p-4 relative">
               {/* Video frame mockup - Brutalist */}
               <div className="border-4 border-black bg-surface-container-highest aspect-video relative flex items-center justify-center">
                 <span className="material-symbols-outlined text-[80px] text-black">videocam</span>
                 
                 {/* Live overlay card */}
                 <div className="absolute bottom-4 right-4 w-72 bg-white border-4 border-black p-4 shadow-brutal animate-modal-entry">
                   <div className="flex items-center gap-2 border-b-4 border-black pb-2 mb-3">
                     <span className="w-3 h-3 bg-primary animate-pulse border border-black"></span>
                     <span className="text-sm uppercase font-black tracking-wider text-black">Live Cue</span>
                   </div>
                   <h5 className="text-lg font-black uppercase leading-tight mb-2">Mentioned: Nexus</h5>
                   <p className="text-sm font-bold uppercase mb-4 leading-snug">
                     "Nexus doesn't offer native Salesforce sync. Highlight our 1-click integration."
                   </p>
                   <button className="w-full py-2 bg-black text-white font-black uppercase border-2 border-black hover:bg-primary transition-colors">
                     Open Battlecard
                   </button>
                 </div>
               </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
