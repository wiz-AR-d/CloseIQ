import { useState, useEffect } from 'react';

interface QualityAutomationPageProps {
  onBack: () => void;
  onOpenPopup?: () => void;
}

interface ScoreMetric {
  name: string;
  score: number;
  maxScore: number;
  trend: 'up' | 'down' | 'flat';
}

const metricsList: ScoreMetric[] = [
  { name: 'Playbook Script Adherence', score: 88, maxScore: 100, trend: 'up' },
  { name: 'Discovery & Pain Probing', score: 76, maxScore: 100, trend: 'up' },
  { name: 'Objection Deflection Accuracy', score: 92, maxScore: 100, trend: 'up' },
  { name: 'Empathy & Active Listening', score: 81, maxScore: 100, trend: 'flat' },
  { name: 'Next Step / Calendar Booking Lock', score: 85, maxScore: 100, trend: 'up' }
];

export default function QualityAutomationPage({ onBack, onOpenPopup }: QualityAutomationPageProps) {
  const [selectedRep, setSelectedRep] = useState('Alex Carter');
  
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, []);

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
            Solutions / Quality Automation
          </span>
        </div>

        {/* Section 1: Introduction */}
        <section className="grid grid-cols-1 lg:grid-cols-[1fr_1.35fr] gap-16 items-start">
          {/* Copy Side */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tighter leading-[1.1]">
                Every Call Reviewed <br />
                <span className="bg-gradient-to-r from-emerald-400 to-emerald-200 bg-clip-text text-transparent">Automatically.</span>
              </h1>
              <p className="text-2xl text-on-surface-variant leading-relaxed max-w-lg font-semibold">
                No manual call reviews. No missed coaching opportunities.
              </p>
            </div>
            
            <p className="text-lg md:text-xl text-on-surface-variant/95 leading-relaxed max-w-lg font-medium">
              After every customer conversation, CloseIQ automatically evaluates the call using customizable scorecards. It measures communication quality, objection handling, discovery, product knowledge, talk ratios, customer engagement, and overall sales effectiveness.
            </p>
            <p className="text-lg md:text-xl text-on-surface-variant/95 leading-relaxed max-w-lg font-medium">
              Managers receive instant performance insights, while every rep gets personalized coaching based on their biggest improvement areas. High-performing calls automatically become future training material for the rest of the team.
            </p>

            <div className="space-y-3 pt-4">
              {[
                "Automated quality scoring",
                "Personalized coaching recommendations",
                "Skill gap analysis",
                "AI-generated coaching summaries",
                "Training content from top-performing calls",
                "Team-wide performance analytics"
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
                Start Automating Sales QA
              </button>
            </div>
          </div>

          {/* Manager Dashboard Mockup */}
          <div className="space-y-6 relative">
            {/* Massive Green Glow backing */}
            <div className="absolute inset-0 bg-emerald-500/20 blur-[80px] rounded-none pointer-events-none"></div>

            {/* Rep selector tabs */}
            <div className="flex border-b border-outline/35 relative z-10 text-sm">
              {['Alex Carter', 'Jordan Lee', 'Taylor Vance'].map((rep) => (
                <button
                  key={rep}
                  onClick={() => setSelectedRep(rep)}
                  className={`px-4 py-3 border-b-2 font-bold transition-all rounded-none ${
                    selectedRep === rep 
                      ? 'border-emerald-500 bg-emerald-500/5 text-emerald-400' 
                      : 'border-transparent text-on-surface-variant hover:text-white'
                  }`}
                >
                  {rep}
                </button>
              ))}
            </div>

            {/* Dashboard Container */}
            <div className="relative bg-[#0A0A0A]/85 backdrop-blur-3xl border border-emerald-500/30 rounded-none shadow-[0_0_50px_rgba(16,185,129,0.15)] p-6 z-10 space-y-6">
              
              {/* Header metrics */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-outline/20">
                <div>
                  <h3 className="font-bold text-xs uppercase tracking-wider text-emerald-400">Call Evaluation Analytics</h3>
                  <p className="text-xl font-bold text-white">Representative: {selectedRep}</p>
                </div>
                
                {/* Massive overall score */}
                <div className="flex items-center gap-3 bg-emerald-500/10 border border-emerald-500/20 px-4 py-2">
                  <span className="text-3xl font-black text-emerald-400 font-mono">84%</span>
                  <div className="leading-tight">
                    <span className="text-xs text-on-surface-variant block uppercase font-bold tracking-wider">Overall QA Score</span>
                    <span className="text-xs text-emerald-400 font-bold font-mono">GRADE: GOOD</span>
                  </div>
                </div>
              </div>

              {/* Grid Content: Checklist & Coaching notes */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                
                {/* Metric list */}
                <div className="space-y-4">
                  <span className="text-xs text-on-surface-variant/80 font-mono font-bold uppercase block">Core Performance Rubrics</span>
                  <div className="space-y-3.5">
                    {metricsList.map((m, idx) => (
                      <div key={idx} className="space-y-1.5">
                        <div className="flex justify-between text-sm font-semibold text-white/90">
                          <span>{m.name}</span>
                          <span className="text-emerald-400 font-mono">{m.score}/100</span>
                        </div>
                        <div className="w-full bg-[#1C1C1E] h-1.5 rounded-none overflow-hidden">
                          <div className="bg-emerald-500 h-full" style={{ width: `${m.score}%` }}></div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Coaching Guidance Panel */}
                <div className="space-y-4">
                  <span className="text-xs text-on-surface-variant/80 font-mono font-bold uppercase block">AI Coaching Recommendations</span>
                  <div className="bg-[#101012] border border-outline/35 p-4 space-y-4">
                    
                    <div className="space-y-1">
                      <div className="flex items-center gap-1.5 text-xs font-bold uppercase text-emerald-400 font-mono">
                        <span className="material-symbols-outlined text-[14px]">trending_up</span>
                        Primary Strength
                      </div>
                      <p className="text-sm text-white/90 font-medium">
                        Excellent competitor differentiation. Handled the free transcription objection using clean ROI math and displaced the competitor logic.
                      </p>
                    </div>

                    <div className="space-y-1">
                      <div className="flex items-center gap-1.5 text-xs font-bold uppercase text-red-400 font-mono">
                        <span className="material-symbols-outlined text-[14px]">warning</span>
                        Key Area to Address
                      </div>
                      <p className="text-sm text-white/90 font-medium">
                        Discovery phase was too brief. Missed validating the customer's onboarding roadmap. Ensure at least 3 discovery questions are posed in the first 10 minutes.
                      </p>
                    </div>

                  </div>
                </div>

              </div>

              {/* Trend visualization */}
              <div className="border-t border-outline/20 pt-4 flex justify-between items-center text-xs font-mono text-on-surface-variant/60">
                <span>Evaluation Type: Playbook Sandbox + Zoom Native</span>
                <span className="text-emerald-400 uppercase tracking-widest font-bold">100% of calls audited</span>
              </div>

            </div>
          </div>
        </section>

        {/* Section 2: Timeline / Roadmap */}
        <section className="space-y-16 pt-16 mt-16 border-t border-outline/20">
          <div className="space-y-4 max-w-2xl">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tighter text-white">
              Automation that scales <br/>
              <span className="bg-gradient-to-r from-emerald-400 to-emerald-200 bg-clip-text text-transparent">Enablement.</span>
            </h2>
            <p className="text-xl text-on-surface-variant font-medium">
              How CloseIQ evaluates compliance and accelerates sales teams automatically.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-0 border border-outline/20">
            
            {/* Step 1 */}
            <div className="relative group p-8 border-b md:border-b-0 lg:border-r border-outline/20 bg-surface/30 hover:bg-surface/60 transition-colors">
              <div className="absolute inset-0 bg-emerald-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative z-10 space-y-16">
                <div className="flex justify-between items-start">
                  <div className="w-12 h-12 flex items-center justify-center bg-emerald-500/10 border border-emerald-500/30">
                    <span className="material-symbols-outlined text-2xl text-emerald-400">cloud_sync</span>
                  </div>
                  <span className="text-4xl font-black text-outline/30 group-hover:text-emerald-400/20 transition-colors font-mono">01</span>
                </div>
                <div className="space-y-3">
                  <h3 className="text-xl font-bold text-white uppercase tracking-wide">Auto-Sync Calls</h3>
                  <p className="text-base text-on-surface-variant leading-relaxed font-medium">
                    Calls from Zoom, Outreach, or dialers are captured and transcribed automatically without rep manual input.
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
                    <span className="material-symbols-outlined text-2xl text-emerald-400">checklist</span>
                  </div>
                  <span className="text-4xl font-black text-outline/30 group-hover:text-emerald-400/20 transition-colors font-mono">02</span>
                </div>
                <div className="space-y-3">
                  <h3 className="text-xl font-bold text-white uppercase tracking-wide">Playbook Scoring</h3>
                  <p className="text-base text-on-surface-variant leading-relaxed font-medium">
                    CloseIQ evaluates script compliance, competitor responses, discovery structures, and next step locks instantly.
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
                    <span className="material-symbols-outlined text-2xl text-emerald-400">psychology</span>
                  </div>
                  <span className="text-4xl font-black text-outline/30 group-hover:text-emerald-400/20 transition-colors font-mono">03</span>
                </div>
                <div className="space-y-3">
                  <h3 className="text-xl font-bold text-white uppercase tracking-wide">Generate Coaching</h3>
                  <p className="text-base text-on-surface-variant leading-relaxed font-medium">
                    Personalized coaching logs, gap analysis, and tailored training links are pushed directly to each rep.
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
                    <span className="material-symbols-outlined text-2xl text-emerald-400">group_add</span>
                  </div>
                  <span className="text-4xl font-black text-emerald-500/30 group-hover:text-emerald-400/20 transition-colors font-mono">04</span>
                </div>
                <div className="space-y-3">
                  <h3 className="text-xl font-bold text-white uppercase tracking-wide">Share Top Playbooks</h3>
                  <p className="text-base text-on-surface-variant leading-relaxed font-medium">
                    Winning calls are automatically indexed and distributed as baseline call libraries to the rest of your sales reps.
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
