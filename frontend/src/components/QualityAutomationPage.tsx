import { useState } from 'react';

interface QualityAutomationPageProps {
  onBack: () => void;
  onOpenPopup?: () => void;
}

export default function QualityAutomationPage({ onBack, onOpenPopup }: QualityAutomationPageProps) {
  const [rules, setRules] = useState([
    { id: 'intro', text: 'Stated standard value proposition within first 3 minutes', score: 15, checked: true },
    { id: 'discovery', text: 'Asked at least 3 deep discovery questions about customer workflow pain', score: 25, checked: true },
    { id: 'competitor', text: 'Addressed competitor price comparison with CloseIQ TCO math', score: 25, checked: false },
    { id: 'security', text: 'Confirmed SOC2 Type II status and Okta SSO compatibility', score: 20, checked: false },
    { id: 'cta', text: 'Proposed next action (calendar booking or custom pilot review)', score: 15, checked: true }
  ]);

  const toggleRule = (id: string) => {
    setRules(prev => prev.map(rule => rule.id === id ? { ...rule, checked: !rule.checked } : rule));
  };

  const currentScore = rules.reduce((acc, rule) => acc + (rule.checked ? rule.score : 0), 0);

  const getScoreGrade = (score: number) => {
    if (score >= 90) return { label: 'Excellent', color: 'text-emerald-500 bg-emerald-500/10 border-emerald-500/20' };
    if (score >= 70) return { label: 'Good', color: 'text-amber-500 bg-amber-500/10 border-amber-500/20' };
    return { label: 'Needs Coaching', color: 'text-rose-500 bg-rose-500/10 border-rose-500/20' };
  };

  const grade = getScoreGrade(currentScore);

  return (
    <div className="min-h-screen bg-background text-on-surface pt-32 pb-24 px-6 transition-colors duration-300">
      {/* Decorative blurred background shapes */}
      <div className="absolute top-40 left-10 w-96 h-96 bg-primary/10 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary/5 rounded-full blur-[120px] pointer-events-none"></div>

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
            Quality Automation & Compliance
          </span>
        </div>

        {/* Header / Intro */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 space-y-6">
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight leading-tight">
              Audit 100% of calls. <br />
              <span className="bg-gradient-to-r from-primary via-primary-dim to-secondary bg-clip-text text-transparent">
                Instantly, automatically.
              </span>
            </h1>
            <p className="text-lg text-on-surface-variant leading-relaxed max-w-xl">
              Sales QA teams usually sample only 1-2% of calls, leaving massive compliance gaps. CloseIQ evaluates every deal call automatically, scoring script execution and syncing summary reports directly with your CRM.
            </p>
            <div className="flex flex-wrap gap-4 pt-2">
              <button 
                onClick={onOpenPopup}
                className="px-6 py-3.5 bg-primary text-on-primary font-bold rounded-full hover:brightness-110 shadow-lg transition-all text-sm"
              >
                Start Automating Sales QA
              </button>
            </div>
          </div>

          <div className="lg:col-span-5 bg-surface border border-outline-variant/25 rounded-3xl p-8 shadow-lg space-y-6">
            <h3 className="font-bold text-lg text-on-surface">Seamless Integrations</h3>
            <p className="text-xs text-on-surface-variant leading-relaxed">
              CloseIQ connects natively with your existing sales stack, analyzing calls without requiring reps to change their workflows.
            </p>

            <div className="grid grid-cols-2 gap-3 text-center">
              <div className="p-3 bg-surface-container border border-outline-variant/15 rounded-2xl flex flex-col items-center justify-center gap-1.5 shadow-sm">
                <span className="material-symbols-outlined text-primary text-xl">videocam</span>
                <span className="text-xs font-bold text-on-surface">Zoom & Teams</span>
              </div>
              <div className="p-3 bg-surface-container border border-outline-variant/15 rounded-2xl flex flex-col items-center justify-center gap-1.5 shadow-sm">
                <span className="material-symbols-outlined text-primary text-xl">cloud_sync</span>
                <span className="text-xs font-bold text-on-surface">Salesforce & HubSpot</span>
              </div>
              <div className="p-3 bg-surface-container border border-outline-variant/15 rounded-2xl flex flex-col items-center justify-center gap-1.5 shadow-sm">
                <span className="material-symbols-outlined text-primary text-xl">call</span>
                <span className="text-xs font-bold text-on-surface">Outreach & Salesloft</span>
              </div>
              <div className="p-3 bg-surface-container border border-outline-variant/15 rounded-2xl flex flex-col items-center justify-center gap-1.5 shadow-sm">
                <span className="material-symbols-outlined text-primary text-xl">security</span>
                <span className="text-xs font-bold text-on-surface">SOC2 Type II Isolation</span>
              </div>
            </div>
          </div>
        </div>

        {/* Section 1: Interactive Scorecard Builder */}
        <section className="bg-surface-container-low rounded-[32px] border border-outline-variant/20 p-8 shadow-xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
            
            {/* Left Column: Playbook Designer */}
            <div className="lg:col-span-6 flex flex-col justify-between space-y-8">
              <div className="space-y-4">
                <span className="text-[10px] font-bold tracking-widest text-primary uppercase font-mono bg-primary/10 px-2.5 py-1 rounded">Interactive Feature Builder</span>
                <h2 className="text-3xl font-bold text-on-surface leading-tight">QA Compliance Scorecard</h2>
                <p className="text-sm text-on-surface-variant leading-relaxed">
                  Design call audit criteria for your team. Check or uncheck rules below to see how CloseIQ scores individual sales pitches and automates CRM logging based on execution.
                </p>
              </div>

              {/* Rules check items */}
              <div className="space-y-3.5">
                <span className="text-xs font-bold text-on-surface-variant uppercase font-mono tracking-wider">Playbook Rules Checklist</span>
                <div className="space-y-3">
                  {rules.map(rule => (
                    <div 
                      key={rule.id}
                      onClick={() => toggleRule(rule.id)}
                      className={`p-4 rounded-2xl border flex items-start gap-4 cursor-pointer select-none transition-all ${rule.checked ? 'bg-surface border-primary shadow-sm' : 'bg-surface/50 border-outline-variant/20 hover:bg-surface-container-high'}`}
                    >
                      <input 
                        type="checkbox"
                        checked={rule.checked}
                        onChange={() => {}} // toggled by parent div click
                        className="mt-1 h-4.5 w-4.5 text-primary border-outline-variant rounded focus:ring-primary focus:ring-offset-background shrink-0 cursor-pointer"
                      />
                      <div className="flex-grow">
                        <p className="text-xs font-semibold text-on-surface leading-relaxed">{rule.text}</p>
                        <span className="text-[9px] font-mono text-on-surface-variant block mt-1">Rule value: {rule.score} points</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Column: Automated Audit Output Simulation */}
            <div className="lg:col-span-6 bg-[#0b0f19] rounded-[24px] border border-outline-variant/10 p-6 flex flex-col justify-between min-h-[480px] shadow-2xl relative text-white">
              
              {/* Simulated Window Chrome Header */}
              <div className="flex justify-between items-center border-b border-white/10 pb-4">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-primary animate-pulse"></span>
                  <span className="text-xs font-mono font-bold tracking-wider uppercase text-white/80">
                    CloseIQ Call Audit Logs
                  </span>
                </div>
                <span className="text-[9px] font-mono bg-white/10 px-2.5 py-1 rounded font-bold text-white/60">
                  CRM SYNC ENGINE
                </span>
              </div>

              {/* Call Score details */}
              <div className="my-6 space-y-6">
                <div className="flex justify-between items-center bg-slate-900/60 p-5 rounded-2xl border border-white/5 shadow-sm">
                  <div>
                    <h4 className="text-sm font-bold text-white">Aditya Mehta Call Scorecard</h4>
                    <p className="text-[9px] text-white/50">Audited automatically 90s after zoom disconnect</p>
                  </div>
                  <div className="text-right">
                    <span className="text-4xl font-bold font-mono text-primary">{currentScore}</span>
                    <span className="text-xs text-white/40">/100</span>
                  </div>
                </div>

                {/* Score Status Badge */}
                <div className={`p-4 rounded-xl border flex items-center justify-between text-xs font-semibold ${grade.color}`}>
                  <span>Evaluation Grade</span>
                  <span className="uppercase tracking-widest font-mono text-[10px] font-bold">{grade.label}</span>
                </div>

                {/* Sync Checklist */}
                <div className="space-y-3 bg-slate-900/40 p-4 rounded-2xl border border-white/5">
                  <span className="text-[9px] font-bold text-primary uppercase tracking-wider font-mono">Salesforce Integration Pipeline</span>
                  
                  <div className="space-y-2 text-xs text-white/80">
                    <div className="flex justify-between items-center">
                      <span>1. Meeting Transcript Generated</span>
                      <span className="text-emerald-500 font-mono">COMPLETE (1,480 words)</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span>2. AI Opportunity Digest Created</span>
                      <span className="text-emerald-500 font-mono">COMPLETE (3 paragraphs)</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span>3. Custom QA Scorecard Synced</span>
                      <span className={currentScore >= 70 ? "text-emerald-500 font-mono" : "text-amber-500 font-mono"}>
                        {currentScore >= 70 ? "SYNCED" : "WARNING (Low Score)"}
                      </span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span>4. Action Items & Next Tasks Assigned</span>
                      <span className="text-emerald-500 font-mono">COMPLETE</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Card Footer */}
              <div className="p-3 bg-white/5 rounded-xl border border-white/5 text-center text-[10px] text-white/60">
                Data isolation enabled. Transcript logs scrubbed of sensitive numeric records.
              </div>

            </div>
          </div>
        </section>

      </div>
    </div>
  );
}
