import { useState } from 'react';

export default function SalesAssistantSection() {
  const [selectedObjection, setSelectedObjection] = useState<'pricing' | 'contract' | 'security' | 'decision'>('pricing');

  const objectionsData = {
    pricing: {
      buyerText: "\"We really like the workflow engine, but Competitor X is offering standard seating at $35/month, while you guys are at $55.\"",
      repText: "\"I understand pricing is a factor. Let's look at the actual output of our automated review engine...\"",
      cueTitle: "💡 Objection Cue: Competitor Price Under-cutting",
      cueBadge: "COMPETITION BATTLE CARD",
      cueTip: "Focus on total cost of ownership (TCO). Point out that Competitor X requires manual CRM entry taking reps 4+ hours/week. CloseIQ's auto-sync saves $240/rep/month in labor costs.",
      nextActions: ["Highlight TCO Math", "Compare CRM Auto-Sync", "Offer Pilot Discount"]
    },
    contract: {
      buyerText: "\"We don't do annual agreements for new software. We need a month-to-month contract to mitigate risk.\"",
      repText: "\"That makes sense, risk mitigation is key when testing new technology...\"",
      cueTitle: "💡 Objection Cue: Contract Commitment Resistance",
      cueBadge: "TERMS PLAYBOOK",
      cueTip: "Pivot to our Success Guarantee. Highlight that CloseIQ offers a 60-day money-back guarantee on annual agreements or introduce our quarterly-break clauses.",
      nextActions: ["Present Success Guarantee", "Offer Quarterly Break Clause", "Detail Ramp Support"]
    },
    security: {
      buyerText: "\"Our security review committee is strict. We need complete SOC2 compliance reports and custom SSO configurations before signing.\"",
      repText: "\"We take data protection very seriously...\"",
      cueTitle: "💡 Technical Cue: SOC2 & SSO Requirements",
      cueBadge: "COMPLIANCE OUTLINE",
      cueTip: "Confirm that CloseIQ is fully SOC2 Type II certified. SSO integration (Okta, Azure AD) is included natively in the Enterprise tier with zero extra fees.",
      nextActions: ["Provide SOC2 Report", "Explain Okta Integration", "Schedule Security Call"]
    },
    decision: {
      buyerText: "\"I'm sold, but I'll need to run this by my VP of Sales and our Finance Director before I can sign off.\"",
      repText: "\"Awesome, let's make it as easy as possible for them to see the value...\"",
      cueTitle: "💡 Navigation Cue: Multi-Stakeholder Committee",
      cueBadge: "COMMITTEE PLAYBOOK",
      cueTip: "Offer to generate an 'AI Decision Digest' summary of this call. It automatically highlights the 3x ROI metrics to make finance approval friction-free.",
      nextActions: ["Send AI Decision Digest", "Schedule Finance Pitch", "Share VP Case Study"]
    }
  };

  const activeObjection = objectionsData[selectedObjection];

  return (
    <section id="live-copilot" className="py-24 bg-surface-container-low text-on-surface relative overflow-hidden border-t border-outline-variant/10">
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-primary/5 blur-[120px] rounded-full pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="max-w-3xl mb-16 space-y-4">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-primary/10 rounded-full border border-primary/20 text-xs font-bold text-primary uppercase font-mono">
            Live Conversation Guidance
          </div>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
            Real-time call assistance, simplified.
          </h2>
          <p className="text-lg text-on-surface-variant max-w-2xl leading-relaxed">
            CloseIQ surfaces subtle reminders and competitor pivot notes during customer calls, helping reps navigate tough conversations smoothly without losing their flow.
          </p>
        </div>

        {/* Interactive Workspace Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left Column: Objection Selector */}
          <div className="lg:col-span-4 flex flex-col gap-4">
            <span className="text-xs font-bold uppercase tracking-wider text-on-surface-variant font-mono mb-1">
              Select Customer Objection
            </span>
            
            <button 
              onClick={() => setSelectedObjection('pricing')}
              className={`p-5 rounded-2xl border text-left transition-all flex items-start gap-4 ${selectedObjection === 'pricing' ? 'bg-surface border-primary shadow-lg ring-1 ring-primary' : 'bg-surface/50 border-outline-variant/25 hover:bg-surface-container-high'}`}
            >
              <span className={`material-symbols-outlined rounded-lg p-2 ${selectedObjection === 'pricing' ? 'bg-primary/20 text-primary' : 'bg-surface-container text-on-surface-variant'}`}>
                payments
              </span>
              <div>
                <h4 className="font-bold text-sm text-on-surface">Competitor Price Match</h4>
                <p className="text-xs text-on-surface-variant mt-1">"Competitor X is cheaper..."</p>
              </div>
            </button>

            <button 
              onClick={() => setSelectedObjection('contract')}
              className={`p-5 rounded-2xl border text-left transition-all flex items-start gap-4 ${selectedObjection === 'contract' ? 'bg-surface border-primary shadow-lg ring-1 ring-primary' : 'bg-surface/50 border-outline-variant/25 hover:bg-surface-container-high'}`}
            >
              <span className={`material-symbols-outlined rounded-lg p-2 ${selectedObjection === 'contract' ? 'bg-primary/20 text-primary' : 'bg-surface-container text-on-surface-variant'}`}>
                history_edu
              </span>
              <div>
                <h4 className="font-bold text-sm text-on-surface">Contract Commitments</h4>
                <p className="text-xs text-on-surface-variant mt-1">"We need month-to-month..."</p>
              </div>
            </button>

            <button 
              onClick={() => setSelectedObjection('security')}
              className={`p-5 rounded-2xl border text-left transition-all flex items-start gap-4 ${selectedObjection === 'security' ? 'bg-surface border-primary shadow-lg ring-1 ring-primary' : 'bg-surface/50 border-outline-variant/25 hover:bg-surface-container-high'}`}
            >
              <span className={`material-symbols-outlined rounded-lg p-2 ${selectedObjection === 'security' ? 'bg-primary/20 text-primary' : 'bg-surface-container text-on-surface-variant'}`}>
                gpp_good
              </span>
              <div>
                <h4 className="font-bold text-sm text-on-surface">SOC2 & Custom SSO</h4>
                <p className="text-xs text-on-surface-variant mt-1">"Committee needs SSO audit..."</p>
              </div>
            </button>

            <button 
              onClick={() => setSelectedObjection('decision')}
              className={`p-5 rounded-2xl border text-left transition-all flex items-start gap-4 ${selectedObjection === 'decision' ? 'bg-surface border-primary shadow-lg ring-1 ring-primary' : 'bg-surface/50 border-outline-variant/25 hover:bg-surface-container-high'}`}
            >
              <span className={`material-symbols-outlined rounded-lg p-2 ${selectedObjection === 'decision' ? 'bg-primary/20 text-primary' : 'bg-surface-container text-on-surface-variant'}`}>
                groups
              </span>
              <div>
                <h4 className="font-bold text-sm text-on-surface">Buying Committees</h4>
                <p className="text-xs text-on-surface-variant mt-1">"I need approval from the VP..."</p>
              </div>
            </button>
          </div>

          {/* Right Column: Live Copilot HUD */}
          <div className="lg:col-span-8 bg-surface-container-lowest/60 rounded-3xl border border-outline-variant/20 p-6 flex flex-col justify-between shadow-xl backdrop-blur-md min-h-[460px]">
            
            {/* Live Call Header */}
            <div className="flex justify-between items-center pb-4 border-b border-outline-variant/10">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-primary animate-pulse"></span>
                <span className="text-xs font-bold text-on-surface uppercase tracking-wider font-mono">Live Call: CloseIQ Assistant Active</span>
              </div>
              <span className="text-xs text-on-surface-variant bg-surface-container px-2.5 py-1 rounded-full font-mono">STT: Nova-3 (120ms Latency)</span>
            </div>

            {/* Conversation Feed Mockup */}
            <div className="flex-grow my-6 space-y-4">
              {/* Buyer bubble */}
              <div className="flex gap-4 items-start max-w-2xl">
                <div className="w-8 h-8 rounded-full bg-secondary-container/50 border border-secondary/20 flex items-center justify-center shrink-0 text-xs font-bold text-white">
                  AM
                </div>
                <div className="bg-surface-container-high p-4 rounded-2xl rounded-tl-none border border-outline-variant/10 shadow-sm">
                  <div className="text-[10px] text-on-surface-variant font-bold mb-1">Aditya Mehta (Buyer)</div>
                  <p className="text-sm text-on-surface-variant leading-relaxed">
                    {activeObjection.buyerText}
                  </p>
                </div>
              </div>

              {/* Rep bubble */}
              <div className="flex gap-4 items-start max-w-2xl ml-auto flex-row-reverse">
                <div className="w-8 h-8 rounded-full bg-primary/20 border border-primary/30 flex items-center justify-center shrink-0 text-xs font-bold text-white">
                  ME
                </div>
                <div className="bg-[#0b0f19] p-4 rounded-2xl rounded-tr-none border border-outline-variant/10 shadow-sm text-right">
                  <div className="text-[10px] text-primary font-bold mb-1">Sales Representative</div>
                  <p className="text-sm text-white leading-relaxed italic">
                    {activeObjection.repText}
                  </p>
                </div>
              </div>
            </div>

            {/* CloseIQ Live Cues Overlay */}
            <div className="bg-surface border border-outline-variant/30 rounded-2xl p-5 shadow-inner space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-primary bg-primary/10 px-2.5 py-1 rounded-full uppercase tracking-wider font-mono">
                  {activeObjection.cueBadge}
                </span>
                <div className="flex items-center gap-1 text-[10px] text-on-surface-variant font-mono">
                  <span className="material-symbols-outlined text-xs text-primary">auto_awesome</span>
                  Real-time Prompt Match
                </div>
              </div>

              <h4 className="font-bold text-on-surface flex items-center gap-2 text-base">
                <span className="material-symbols-outlined text-primary text-xl">psychology</span>
                {activeObjection.cueTitle}
              </h4>
              <p className="text-sm text-on-surface leading-relaxed p-3.5 bg-surface-container-high rounded-xl border border-outline-variant/10">
                {activeObjection.cueTip}
              </p>

              <div className="flex flex-wrap gap-2.5 pt-2">
                {activeObjection.nextActions.map((action, idx) => (
                  <button 
                    key={idx}
                    className="px-3.5 py-2 bg-primary/10 hover:bg-primary/20 text-primary border border-primary/20 rounded-full text-xs font-bold transition-all flex items-center gap-1.5"
                  >
                    <span className="material-symbols-outlined text-[14px]">play_circle</span>
                    {action}
                  </button>
                ))}
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
