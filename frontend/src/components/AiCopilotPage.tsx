import React, { useState, useEffect } from 'react';

interface AiCopilotPageProps {
  onBack: () => void;
  onOpenPopup?: () => void;
}

interface CopilotTab {
  id: string;
  label: string;
  icon: string;
  title: string;
  content: React.ReactNode;
}

export default function AiCopilotPage({ onBack, onOpenPopup }: AiCopilotPageProps) {
  const [activeTab, setActiveTab] = useState('objections');
  
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, []);

  const tabs: CopilotTab[] = [
    {
      id: 'objections',
      label: 'Objections',
      icon: 'gavel',
      title: 'Objection Handling',
      content: (
        <div className="space-y-4">
          <div className="border border-red-500/20 bg-red-500/[0.02] p-3">
            <span className="text-xs text-red-400 font-mono font-bold uppercase block">Customer Objected</span>
            <p className="text-sm text-white/90 italic">"Competitor X claims they do call recording and summarization for free. Why should we invest in CloseIQ?"</p>
          </div>
          <div className="space-y-2">
            <span className="text-xs text-emerald-400 font-mono font-bold uppercase block">Suggested Response</span>
            <div className="border border-emerald-500/30 bg-emerald-500/[0.02] p-3 text-sm leading-relaxed text-white">
              "I understand they do free transcription. However, CloseIQ isn't just a recorder; we are a behavior-driving tool. Our <strong className="text-emerald-400">Live Copilot</strong> assists your reps mid-call so they handle objections and stay on playbook, leading to a 35% higher close rate."
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'competitors',
      label: 'Competitors',
      icon: 'compare_arrows',
      title: 'Competitive Battle Card',
      content: (
        <div className="space-y-4">
          <div className="border border-emerald-500/20 bg-[#141414] p-3 space-y-2">
            <span className="text-xs text-emerald-400 font-mono font-bold uppercase block">Competitor X Comparison</span>
            <div className="grid grid-cols-2 gap-2 text-xs md:text-sm text-on-surface-variant">
              <div>
                <strong className="text-white block mb-0.5">Competitor X</strong>
                • Simple static summaries<br />
                • Post-call analysis only<br />
                • No live rep assistance
              </div>
              <div className="border-l border-outline/30 pl-2">
                <strong className="text-emerald-400 block mb-0.5">CloseIQ</strong>
                • Live real-time prompting<br />
                • Custom ICP persona sandbox<br />
                • Native CRM sync (no zaps)
              </div>
            </div>
          </div>
          <div className="space-y-1">
            <span className="text-xs text-emerald-400 font-mono font-bold uppercase block">Value Pro Tip</span>
            <p className="text-sm text-white/80">Highlight the 90% reduction in sales onboarding/ramp time due to our interactive roleplay sandbox.</p>
          </div>
        </div>
      )
    },
    {
      id: 'pricing',
      label: 'Pricing',
      icon: 'payments',
      title: 'Pricing & ROI Guidance',
      content: (
        <div className="space-y-4">
          <div className="border border-emerald-500/20 bg-[#141414] p-3 space-y-1">
            <span className="text-xs text-emerald-400 font-mono font-bold uppercase block">ROI Calculator Cues</span>
            <p className="text-sm text-white/90">Average CloseIQ customers reclaim their initial investment in <strong className="text-emerald-400">47 days</strong> by:</p>
            <ul className="text-sm text-white/70 list-disc pl-4 space-y-1">
              <li>Reducing manager call shadow hours (saves ~5 hours/week per manager).</li>
              <li>Boosting average contract values by 18% through playbook alignment.</li>
            </ul>
          </div>
          <div className="space-y-1">
            <span className="text-xs text-emerald-400 font-mono font-bold uppercase block">Action Prompt</span>
            <p className="text-sm text-white/80">Propose a 30-day deferred billing pilot program to eliminate immediate budget hurdles.</p>
          </div>
        </div>
      )
    },
    {
      id: 'discovery',
      label: 'Questions',
      icon: 'question_mark',
      title: 'Discovery Prompts',
      content: (
        <div className="space-y-4">
          <div className="space-y-2">
            <span className="text-xs text-emerald-400 font-mono font-bold uppercase block">Recommended Discovery Questions</span>
            <div className="space-y-2 text-sm text-white/90">
              <div className="p-2 border border-outline/30 bg-[#141414] hover:border-emerald-500/30 transition-colors cursor-pointer">
                "How are your managers currently auditing call quality? What percentage of calls are reviewed?"
              </div>
              <div className="p-2 border border-outline/30 bg-[#141414] hover:border-emerald-500/30 transition-colors cursor-pointer">
                "What is the average ramp time for a new sales rep to hit quota in your team?"
              </div>
            </div>
          </div>
        </div>
      )
    }
  ];

  const currentTab = tabs.find(t => t.id === activeTab) || tabs[0];

  return (
    <div className="min-h-screen bg-background text-on-surface pt-32 pb-24 overflow-hidden relative">
      {/* Decorative green glow shapes */}
      <div className="absolute top-20 right-0 w-[500px] h-[500px] bg-primary/20 rounded-none blur-[150px] pointer-events-none"></div>
      <div className="absolute bottom-40 left-0 w-[600px] h-[600px] bg-emerald-500/10 rounded-none blur-[150px] pointer-events-none"></div>

      <div className="max-w-[1200px] mx-auto px-6 relative z-10 space-y-24">
        
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
            Solutions / AI Copilot
          </span>
        </div>

        {/* Section 1: Introduction */}
        <section className="grid grid-cols-1 lg:grid-cols-[1fr_1.35fr] gap-16 items-start">
          {/* Copy Side */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tighter leading-[1.1]">
                Your AI Copilot. <br />
                <span className="bg-gradient-to-r from-emerald-400 to-emerald-200 bg-clip-text text-transparent">Every Call.</span>
              </h1>
              <p className="text-2xl text-on-surface-variant leading-relaxed max-w-lg font-semibold">
                Never search for answers while selling.
              </p>
            </div>
            
            <p className="text-lg md:text-xl text-on-surface-variant/95 leading-relaxed max-w-lg font-medium">
              Whether it's a practice session or a live customer conversation, CloseIQ listens in real time and surfaces exactly what your sales reps need, right when they need it.
            </p>
            <p className="text-lg md:text-xl text-on-surface-variant/95 leading-relaxed max-w-lg font-medium">
              From product information and pricing to competitor comparisons, objection handling, discovery questions, and next-best actions, the AI Copilot eliminates the need to remember everything, allowing reps to stay focused on the customer.
            </p>

            <div className="space-y-3 pt-4">
              {[
                "Real-time objection handling",
                "Next-best-action recommendations",
                "Product and pricing guidance",
                "Competitive battle cards",
                "Discovery question suggestions",
                "Context-aware responses during every call"
              ].map((feature, i) => (
                <div key={i} className="flex items-center gap-3 text-base md:text-lg font-semibold">
                  <div className="w-5 h-5 rounded-none bg-emerald-500/20 flex items-center justify-center shadow-[0_0_8px_rgba(16,185,129,0.3)]">
                    <span className="material-symbols-outlined text-[12px] text-emerald-400">check</span>
                  </div>
                  {feature}
                </div>
              ))}
            </div>

            <div className="pt-6">
              <button 
                onClick={onOpenPopup}
                className="px-8 py-4 bg-emerald-500 text-black font-semibold rounded-none hover:bg-emerald-600 transition-all shadow-[0_0_20px_rgba(16,185,129,0.3)] hover:shadow-[0_0_30px_rgba(16,185,129,0.5)]"
              >
                Start Live Call Assist
              </button>
            </div>
          </div>

          {/* Interactive UI Visualization Side */}
          <div className="space-y-6 relative">
            {/* Massive Green Glow backing */}
            <div className="absolute inset-0 bg-emerald-500/20 blur-[80px] rounded-none pointer-events-none"></div>

            {/* Live Sales Call HUD */}
            <div className="relative bg-[#0A0A0A]/80 backdrop-blur-3xl border border-emerald-500/30 rounded-none shadow-[0_0_50px_rgba(16,185,129,0.15)] grid grid-cols-1 md:grid-cols-12 overflow-hidden z-10">
              
              {/* Meeting View Area - 7 Columns */}
              <div className="md:col-span-7 flex flex-col border-b md:border-b-0 md:border-r border-outline/25">
                {/* Meeting Header */}
                <div className="px-4 md:px-6 py-4 border-b border-outline/25 bg-[#141414] flex items-center justify-between gap-4">
                  <div className="flex items-center gap-2 shrink-0">
                    <span className="w-2.5 h-2.5 rounded-none bg-red-500 animate-pulse"></span>
                    <span className="text-sm font-bold text-white uppercase tracking-wider">LIVE Zoom Call</span>
                  </div>
                  <span className="text-xs text-on-surface-variant/80 font-mono truncate">
                    09:47 • Rep: Alex <span className="hidden lg:inline">(CloseIQ)</span>
                  </span>
                </div>

                {/* Video Streams */}
                <div className="p-6 grid grid-cols-2 gap-4 bg-black/40 flex-1 min-h-[250px]">
                  {/* Prospect Screen */}
                  <div className="border border-outline/35 bg-[#141414]/90 p-4 flex flex-col items-center justify-center gap-3 relative">
                    <div className="w-16 h-16 bg-[#262626] flex items-center justify-center border border-outline/40">
                      <span className="material-symbols-outlined text-4xl text-on-surface-variant">person</span>
                    </div>
                    <span className="text-sm font-bold text-white">David (Procurement)</span>
                    <div className="absolute bottom-2 left-2 flex items-center gap-1.5 px-2 py-0.5 bg-black/60 border border-outline/20">
                      <span className="material-symbols-outlined text-xs text-emerald-400 animate-pulse">mic</span>
                      <span className="text-[10px] font-mono text-on-surface-variant font-medium">Speaking</span>
                    </div>
                  </div>

                  {/* Rep Screen */}
                  <div className="border border-outline/35 bg-[#141414]/90 p-4 flex flex-col items-center justify-center gap-3 relative">
                    <div className="w-16 h-16 bg-emerald-500/10 flex items-center justify-center border border-emerald-500/30">
                      <span className="material-symbols-outlined text-4xl text-emerald-400">support_agent</span>
                    </div>
                    <span className="text-sm font-bold text-white">Alex (CloseIQ)</span>
                    <div className="absolute bottom-2 left-2 flex items-center gap-1.5 px-2 py-0.5 bg-black/60 border border-outline/20">
                      <span className="material-symbols-outlined text-xs text-on-surface-variant font-medium">mic</span>
                      <span className="text-[10px] font-mono text-on-surface-variant">Muted</span>
                    </div>
                  </div>
                </div>

                {/* Subtitles Area */}
                <div className="p-4 bg-[#141414]/75 border-t border-outline/20">
                  <span className="text-xs text-emerald-400 font-mono font-bold uppercase block mb-1">Live Transcript Feed</span>
                  <p className="text-sm md:text-base text-white/90 leading-relaxed">
                    <strong className="text-on-surface-variant">David: </strong>
                    "I see. But Competitor X offers basic call transcription for free. We can't pay a premium just for notes."
                  </p>
                </div>
              </div>

              {/* AI Copilot Panel - 5 Columns */}
              <div className="md:col-span-5 bg-[#0C0C0E]/95 flex flex-col">
                {/* Tab Switcher Headers */}
                <div className="grid grid-cols-4 border-b border-outline/25 bg-[#141414] w-full">
                  {tabs.map((tab) => {
                    const isActive = tab.id === activeTab;
                    return (
                      <button
                        key={tab.id}
                        onClick={() => setActiveTab(tab.id)}
                        className={`py-3 border-b-2 flex flex-col items-center gap-1 transition-all min-w-0 ${
                          isActive 
                            ? 'border-emerald-500 bg-[#0C0C0E]/80 text-emerald-400' 
                            : 'border-transparent text-on-surface-variant hover:text-white'
                        }`}
                      >
                        <span className="material-symbols-outlined text-[16px] lg:text-[18px]">{tab.icon}</span>
                        <span className="text-[9px] lg:text-xs font-bold uppercase tracking-normal lg:tracking-wider truncate w-full text-center px-1">
                          {tab.label}
                        </span>
                      </button>
                    );
                  })}
                </div>

                {/* Tab Content */}
                <div className="p-5 flex-1 flex flex-col justify-between">
                  <div className="space-y-4">
                    <h3 className="font-bold text-sm uppercase tracking-wider text-emerald-400 flex items-center gap-1.5">
                      <span className="material-symbols-outlined text-[16px]">auto_awesome</span>
                      {currentTab.title}
                    </h3>
                    {currentTab.content}
                  </div>

                  {/* Manual trigger indicator */}
                  <div className="border-t border-outline/20 pt-4 flex items-center justify-between text-xs text-on-surface-variant/80 uppercase tracking-widest font-mono font-bold">
                    <span>Sync: Zoom Native</span>
                    <span className="text-emerald-400">Listening...</span>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* Section 2: Timeline */}
        <section className="space-y-16 pt-16 mt-16 border-t border-outline/20">
          <div className="space-y-4 max-w-2xl">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tighter text-white">
              Instant Answers. <br/>
              <span className="bg-gradient-to-r from-emerald-400 to-emerald-200 bg-clip-text text-transparent">Zero Delay.</span>
            </h2>
            <p className="text-xl text-on-surface-variant font-medium">
              The AI Copilot does the heavy lifting, allowing reps to focus 100% on the buyer.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-0 border border-outline/20">
            
            {/* Step 1 */}
            <div className="relative group p-8 border-b md:border-b-0 lg:border-r border-outline/20 bg-surface/30 hover:bg-surface/60 transition-colors">
              <div className="absolute inset-0 bg-emerald-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative z-10 space-y-16">
                <div className="flex justify-between items-start">
                  <div className="w-12 h-12 flex items-center justify-center bg-emerald-500/10 border border-emerald-500/30">
                    <span className="material-symbols-outlined text-2xl text-emerald-400">hearing</span>
                  </div>
                  <span className="text-4xl font-black text-outline/30 group-hover:text-emerald-400/20 transition-colors font-mono">01</span>
                </div>
                <div className="space-y-3">
                  <h3 className="text-xl font-bold text-white uppercase tracking-wide">Real-time Listening</h3>
                  <p className="text-base text-on-surface-variant leading-relaxed font-medium">
                    CloseIQ connects natively with your dialer or conferencing tool, transcribing audio streams instantly.
                  </p>
                </div>
              </div>
            </div>

            {/* Step 2 */}
            <div className="relative group p-8 border-b lg:border-b-0 lg:border-r border-outline/20 bg-surface/30 hover:bg-surface/60 transition-colors">
              <div className="absolute inset-0 bg-emerald-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative z-10 space-y-16">
                <div className="flex justify-between items-start">
                  <div className="w-12 h-12 flex items-center justify-center bg-emerald-500/10 border border-emerald-500/30">
                    <span className="material-symbols-outlined text-2xl text-emerald-400">bolt</span>
                  </div>
                  <span className="text-4xl font-black text-outline/30 group-hover:text-emerald-400/20 transition-colors font-mono">02</span>
                </div>
                <div className="space-y-3">
                  <h3 className="text-xl font-bold text-white uppercase tracking-wide">Context matching</h3>
                  <p className="text-base text-on-surface-variant leading-relaxed font-medium">
                    Our AI models map spoken phrases to active battle cards, pricing rules, or competitor comparisons instantly.
                  </p>
                </div>
              </div>
            </div>

            {/* Step 3 */}
            <div className="relative group p-8 border-b md:border-b-0 lg:border-r border-outline/20 bg-surface/30 hover:bg-surface/60 transition-colors">
              <div className="absolute inset-0 bg-emerald-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative z-10 space-y-16">
                <div className="flex justify-between items-start">
                  <div className="w-12 h-12 flex items-center justify-center bg-emerald-500/10 border border-emerald-500/30">
                    <span className="material-symbols-outlined text-2xl text-emerald-400">forum</span>
                  </div>
                  <span className="text-4xl font-black text-outline/30 group-hover:text-emerald-400/20 transition-colors font-mono">03</span>
                </div>
                <div className="space-y-3">
                  <h3 className="text-xl font-bold text-white uppercase tracking-wide">Dynamic Prompts</h3>
                  <p className="text-base text-on-surface-variant leading-relaxed font-medium">
                    Tactical talk tracks, objections, and next-best actions are pushed directly to the rep's screen in real-time.
                  </p>
                </div>
              </div>
            </div>

            {/* Step 4 */}
            <div className="relative group p-8 bg-surface/30 hover:bg-surface/60 transition-colors">
              <div className="absolute inset-0 bg-emerald-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative z-10 space-y-16">
                <div className="flex justify-between items-start">
                  <div className="w-12 h-12 flex items-center justify-center bg-emerald-500/10 border border-emerald-500/30">
                    <span className="material-symbols-outlined text-2xl text-emerald-400">cloud_sync</span>
                  </div>
                  <span className="text-4xl font-black text-emerald-500/30 group-hover:text-emerald-400/20 transition-colors font-mono">04</span>
                </div>
                <div className="space-y-3">
                  <h3 className="text-xl font-bold text-white uppercase tracking-wide">Auto CRM Logging</h3>
                  <p className="text-base text-on-surface-variant leading-relaxed font-medium">
                    Once the call completes, playbooks hit, call metrics, and customer objections are auto-logged to your CRM.
                  </p>
                </div>
              </div>
            </div>

          </div>
        </section>

      </div>
    </div>
  );
}
