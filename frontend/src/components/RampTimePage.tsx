import { useState } from 'react';

interface RampTimePageProps {
  onBack: () => void;
  onOpenPopup?: () => void;
}

export default function RampTimePage({ onBack, onOpenPopup }: RampTimePageProps) {
  const [activeScenario, setActiveScenario] = useState<'competitor' | 'enterprise' | 'negotiation'>('competitor');
  const [isPlaying, setIsPlaying] = useState(false);
  const [demoScore, setDemoScore] = useState(0);

  const scenarios = {
    competitor: {
      title: "Competitor Displacement Battle Card",
      difficulty: "Medium",
      buyerPersona: "Skeptical Ops Director",
      objection: "\"Competitor X claims they do call recording and summarization for free. Why should we invest in CloseIQ?\"",
      winningPitch: "\"Competitor X records and summarizes calls, but they don't solve rep ramp. CloseIQ uses active conversation cues during live calls to coach your reps and automates practice sandbox training. Our customers reduce onboarding ramp time by 75% and save weeks of shadow time. That's why CloseIQ pays for itself instantly.\"",
      metrics: { score: 94, empathy: "Excellent", alignment: "98%" }
    },
    enterprise: {
      title: "Enterprise Custom SSO & Data Security",
      difficulty: "Hard",
      buyerPersona: "Strict Chief Information Officer",
      objection: "\"We cannot deploy any sales assistant that transcribes customer calls without strict data privacy verification and Okta integration.\"",
      winningPitch: "\"We design our architecture with enterprise-grade data isolation. All data is isolated and encrypted both in transit and at rest. We support native Okta and Azure AD SSO, and you can configure custom data retention rules to automatically scrub sensitive PII. Let's schedule a deep-dive security review with our engineering lead.\"",
      metrics: { score: 91, empathy: "Professional", alignment: "95%" }
    },
    negotiation: {
      title: "Quarter-End Budget Resistance",
      difficulty: "Medium",
      buyerPersona: "Frugal Finance Director",
      objection: "\"This quarters budget is completely locked. We have to defer any software spending to next fiscal year.\"",
      winningPitch: "\"I understand budget constraints are tight. That's why we offer a 30-day deferred billing pilot program. Your teams can start reducing onboarding ramp time and closing more deals this quarter, and payment terms will start next quarter. This guarantees you see ROI before you pay a single dollar.\"",
      metrics: { score: 89, empathy: "Strong", alignment: "92%" }
    }
  };

  const handleStartSim = () => {
    setIsPlaying(true);
    setDemoScore(0);
    // Simulate score counting up
    let currentScore = 0;
    const interval = setInterval(() => {
      currentScore += 3;
      if (currentScore >= scenarios[activeScenario].metrics.score) {
        setDemoScore(scenarios[activeScenario].metrics.score);
        clearInterval(interval);
      } else {
        setDemoScore(currentScore);
      }
    }, 50);
  };

  return (
    <div className="min-h-screen bg-background text-on-surface pt-32 pb-24 px-6 transition-colors duration-300">
      {/* Decorative blurred background shapes */}
      <div className="absolute top-40 left-10 w-96 h-96 bg-primary/10 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute top-1/2 right-10 w-96 h-96 bg-secondary/5 rounded-full blur-[120px] pointer-events-none"></div>

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
            Ramp Accelerator
          </span>
        </div>

        {/* Header / Intro */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-7 space-y-6">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-tight">
              Cut rep ramp-up <br />
              <span className="bg-gradient-to-r from-primary via-primary-dim to-secondary bg-clip-text text-transparent">
                time by 75%.
              </span>
            </h1>
            <p className="text-xl text-on-surface-variant leading-relaxed max-w-2xl font-medium">
              Traditional sales onboarding requires hours of shadow sessions, call listening, and manual check-ins. CloseIQ automates this entirely using interactive practice sandboxes and live conversational aids.
            </p>
            <div className="flex flex-wrap gap-4 pt-2">
              <button 
                onClick={onOpenPopup}
                className="px-6 py-3.5 bg-primary text-on-primary font-bold rounded-full hover:brightness-110 shadow-lg transition-all text-sm"
              >
                Start Onboarding Faster
              </button>
            </div>
          </div>

          <div className="lg:col-span-5 grid grid-cols-2 gap-4">
            <div className="p-6 bg-surface-container border border-outline-variant/15 rounded-3xl text-center space-y-2">
              <h3 className="text-4xl font-bold text-primary">3 Weeks</h3>
              <p className="text-sm font-bold text-on-surface">Average Ramp Time</p>
              <p className="text-xs text-on-surface-variant">Down from 3 months average</p>
            </div>
            <div className="p-6 bg-surface-container border border-outline-variant/15 rounded-3xl text-center space-y-2">
              <h3 className="text-4xl font-bold text-secondary">2x Faster</h3>
              <p className="text-sm font-bold text-on-surface">First Closed Deal</p>
              <p className="text-xs text-on-surface-variant">Quota attained in 21 days</p>
            </div>
            <div className="p-6 bg-surface-container border border-outline-variant/15 rounded-3xl text-center space-y-2 col-span-2">
              <h3 className="text-3xl font-bold text-emerald-500">25–40%</h3>
              <p className="text-sm font-bold text-on-surface">Tenure Spent Ramping</p>
              <p className="text-xs text-on-surface-variant">Reps waste active time before consistently hitting quota</p>
            </div>
          </div>
        </div>

        {/* Section 1: The Interactive Practice Sandbox */}
        <section className="bg-surface-container-low rounded-[32px] border border-outline-variant/20 p-8 shadow-xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
            
            {/* Control Panel */}
            <div className="lg:col-span-5 flex flex-col justify-between space-y-8">
              <div className="space-y-4">
                <span className="text-xs font-bold tracking-widest text-primary uppercase font-mono bg-primary/10 px-2.5 py-1 rounded">Interactive Feature Demo</span>
                <h2 className="text-3xl font-bold text-on-surface leading-tight">The Practice Sandbox</h2>
                <p className="text-base text-on-surface-variant leading-relaxed font-medium">
                  Let new hires practice their speech delivery against realistic AI buyers. Select a script scenario below to see how our engine analyzes performance metrics.
                </p>
              </div>

              {/* Scenario switches */}
              <div className="space-y-3">
                <span className="text-sm font-bold text-on-surface-variant uppercase font-mono tracking-wider">Choose a Training Sandbox</span>
                <div className="space-y-2.5">
                  {Object.entries(scenarios).map(([key, item]) => (
                    <button
                      key={key}
                      onClick={() => {
                        setActiveScenario(key as any);
                        setIsPlaying(false);
                        setDemoScore(0);
                      }}
                      className={`w-full p-4 rounded-2xl border text-left transition-all ${activeScenario === key ? 'bg-surface border-primary shadow-md ring-1 ring-primary' : 'bg-surface/50 border-outline-variant/20 hover:bg-surface-container-high'}`}
                    >
                      <div className="flex justify-between items-center mb-1">
                        <h4 className="font-bold text-sm text-on-surface">{item.title}</h4>
                        <span className={`text-[9px] font-bold px-2 py-0.5 rounded font-mono ${item.difficulty === 'Hard' ? 'bg-rose-500/10 text-rose-500 border border-rose-500/20' : 'bg-amber-500/10 text-amber-500 border border-amber-500/20'}`}>
                          {item.difficulty}
                        </span>
                      </div>
                      <p className="text-xs text-on-surface-variant">Buyer: {item.buyerPersona}</p>
                    </button>
                  ))}
                </div>
              </div>

              <button
                onClick={handleStartSim}
                className="w-full py-4 bg-primary text-on-primary font-bold rounded-2xl text-sm hover:brightness-110 active:scale-95 transition-all shadow-md flex items-center justify-center gap-2"
              >
                <span className="material-symbols-outlined text-lg">mic</span>
                Start Simulated Rep Response
              </button>
            </div>

            {/* Sandbox Simulation HUD */}
            <div className="lg:col-span-7 bg-[#0b0f19] rounded-[24px] border border-outline-variant/10 p-6 flex flex-col justify-between min-h-[480px] shadow-2xl relative overflow-hidden text-white">
              
              {/* Top HUD Row */}
              <div className="flex justify-between items-center border-b border-white/10 pb-4">
                <div className="flex items-center gap-2">
                  <span className={`w-2.5 h-2.5 rounded-full ${isPlaying ? 'bg-rose-500 animate-pulse' : 'bg-amber-500'}`}></span>
                  <span className="text-xs font-mono font-bold tracking-wider uppercase text-white/80">
                    {isPlaying ? 'Evaluating Response...' : 'Waiting for Input...'}
                  </span>
                </div>
                <span className="text-xs font-mono bg-white/10 px-3 py-1 rounded-full text-white/60">
                  SANDBOX SESSION V3
                </span>
              </div>

              {/* Scenario Objection */}
              <div className="my-6 space-y-4">
                <div className="flex items-start gap-3.5">
                  <div className="w-8 h-8 rounded-full bg-secondary/35 border border-secondary/20 flex items-center justify-center shrink-0 text-xs font-bold text-white shadow">
                    B
                  </div>
                  <div className="bg-slate-900/60 p-4 rounded-2xl rounded-tl-none border border-white/5 max-w-md shadow-sm">
                    <div className="text-xs text-white/50 font-bold mb-1 uppercase font-mono">Buyer Persona Objection</div>
                    <p className="text-sm text-white/90 leading-relaxed font-medium">
                      {scenarios[activeScenario].objection}
                    </p>
                  </div>
                </div>

                {/* Animated Speech Playback */}
                {isPlaying && (
                  <div className="flex items-start gap-3.5 flex-row-reverse">
                    <div className="w-8 h-8 rounded-full bg-primary/40 border border-primary/30 flex items-center justify-center shrink-0 text-xs font-bold text-white animate-pulse">
                      REP
                    </div>
                    <div className="bg-primary/10 p-4 rounded-2xl rounded-tr-none border border-primary/20 max-w-md text-right shadow-sm">
                      <div className="text-xs text-primary font-bold mb-1 uppercase font-mono">Rep Pitch Audio (Simulated)</div>
                      <p className="text-sm text-white/90 leading-relaxed italic">
                        {scenarios[activeScenario].winningPitch}
                      </p>
                    </div>
                  </div>
                )}
              </div>

              {/* Live AI Grade Indicator */}
              <div className="bg-slate-900/80 border border-white/10 rounded-2xl p-5 space-y-4">
                <div className="flex justify-between items-center">
                  <div>
                    <h4 className="text-sm font-bold text-white uppercase tracking-wider font-mono">AI Real-Time Evaluation</h4>
                    <p className="text-xs text-white/50">Speech parameters, pace, and playbooks check</p>
                  </div>
                  <div className="text-right">
                    <span className="text-3xl font-bold font-mono text-primary">{demoScore}</span>
                    <span className="text-xs text-white/40">/100</span>
                  </div>
                </div>

                <div className="grid grid-cols-3 gap-2.5 text-xs">
                  <div className="bg-white/5 p-2 rounded-xl border border-white/5 text-center">
                    <span className="text-white/40 block mb-0.5 uppercase tracking-wider font-mono">Empathy check</span>
                    <span className="font-semibold text-white/90">{isPlaying ? scenarios[activeScenario].metrics.empathy : '—'}</span>
                  </div>
                  <div className="bg-white/5 p-2 rounded-xl border border-white/5 text-center">
                    <span className="text-white/40 block mb-0.5 uppercase tracking-wider font-mono">Playbook Score</span>
                    <span className="font-semibold text-white/90">{isPlaying ? scenarios[activeScenario].metrics.alignment : '—'}</span>
                  </div>
                  <div className="bg-white/5 p-2 rounded-xl border border-white/5 text-center">
                    <span className="text-white/40 block mb-0.5 uppercase tracking-wider font-mono">Speech Speed</span>
                    <span className="font-semibold text-white/90">{isPlaying ? '138 WPM' : '—'}</span>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* Section 2: Accelerated Ramp Timeline */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <span className="text-secondary text-base font-bold tracking-widest uppercase font-mono">The Onboarding Timeline</span>
            <h2 className="text-3xl md:text-4xl font-bold text-on-surface">Hit quota in 3 weeks, not 3 months.</h2>
            <p className="text-lg md:text-xl text-on-surface-variant/95 leading-relaxed font-medium">
              Standard onboarding leaves reps reading hundreds of sheets and shadowing live calls. CloseIQ structures onboarding into a series of active-roleplay achievements. New hires practice the exact talk tracks used by your top 10% closed deals.
            </p>

            <div className="space-y-4 pt-2">
              <div className="flex gap-4">
                <span className="w-6 h-6 rounded-full bg-primary/20 text-primary flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">1</span>
                <div>
                  <h4 className="font-bold text-base text-on-surface">Auto-Extracted Coaching Clips</h4>
                  <p className="text-sm text-on-surface-variant mt-0.5">Top performing rep audio clips are converted directly into Sandbox practice templates.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <span className="w-6 h-6 rounded-full bg-primary/20 text-primary flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">2</span>
                <div>
                  <h4 className="font-bold text-base text-on-surface">Interactive Skill Tree</h4>
                  <p className="text-sm text-on-surface-variant mt-0.5">Reps unlock scenarios from discovery queries, technical security reviews, to competitor handling.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <span className="w-6 h-6 rounded-full bg-primary/20 text-primary flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">3</span>
                <div>
                  <h4 className="font-bold text-base text-on-surface">Confidence Scorecards</h4>
                  <p className="text-sm text-on-surface-variant mt-0.5">Manager dashboards verify that reps have unlocked all key playbooks before their first live call.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Timeline Cards Visual */}
          <div className="bg-surface-container border border-outline-variant/15 rounded-3xl p-8 space-y-8 shadow-inner">
            <h3 className="font-bold text-lg text-on-surface text-center mb-4">Onboarding Flow Comparison</h3>
            
            {/* CloseIQ Path */}
            <div className="space-y-3">
              <div className="flex justify-between items-center text-sm font-bold text-primary font-mono uppercase tracking-wider">
                <span>With CloseIQ Onboarding Sandbox</span>
                <span>3 Weeks</span>
              </div>
              <div className="w-full bg-surface-container-low h-8 rounded-full border border-primary/20 p-1 overflow-hidden relative flex items-center">
                <div className="bg-gradient-to-r from-primary to-secondary h-full rounded-full w-[25%] text-white text-[9px] font-bold font-mono flex items-center justify-center shadow-md animate-pulse">
                  Ready in 3 Weeks
                </div>
                <span className="absolute right-4 text-xs font-bold text-on-surface-variant">Quota met in 3 weeks</span>
              </div>
              <div className="grid grid-cols-3 gap-2 text-xs text-on-surface-variant text-center font-semibold pt-1">
                <div>Week 1: AI Persona Sandbox</div>
                <div>Week 2: Copilot-Assisted Simulation</div>
                <div>Week 3: Live Quota Deals</div>
              </div>
            </div>

            <div className="h-px bg-outline-variant/10"></div>

            {/* Traditional Path */}
            <div className="space-y-3">
              <div className="flex justify-between items-center text-sm font-bold text-on-surface-variant font-mono uppercase tracking-wider">
                <span>Traditional Sales Onboarding</span>
                <span>3 Months</span>
              </div>
              <div className="w-full bg-surface-container-low h-8 rounded-full border border-outline-variant/25 p-1 overflow-hidden relative flex items-center">
                <div className="bg-surface-container-highest h-full rounded-full w-[100%] text-on-surface-variant text-[9px] font-bold font-mono flex items-center justify-center">
                  Takes 3 Months
                </div>
              </div>
              <div className="grid grid-cols-3 gap-2 text-xs text-on-surface-variant text-center font-semibold pt-1">
                <div>Month 1: Policy Reading</div>
                <div>Month 2: Manager Shadows</div>
                <div>Month 3: Slow Trial Calls</div>
              </div>
            </div>
          </div>
        </section>

      </div>
    </div>
  );
}
