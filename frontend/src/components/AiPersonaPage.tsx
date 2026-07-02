import { useState, useEffect } from 'react';

interface AiPersonaPageProps {
  onBack: () => void;
  onOpenPopup?: () => void;
}

interface BuyerPersona {
  id: string;
  role: string;
  name: string;
  personality: string;
  objection: string;
  budget: string;
  buyingBehavior: string;
  avatarIcon: string;
  conversation: { speaker: 'buyer' | 'rep'; text: string }[];
  copilotSuggestions: string[];
}

const personas: BuyerPersona[] = [
  {
    id: 'cto',
    role: 'CTO',
    name: 'Marcus Chen',
    personality: 'Highly Technical & Skeptical',
    budget: '$150k - $250k',
    buyingBehavior: 'Focuses on security, architecture, API availability, and integration integrity.',
    objection: '“We cannot deploy any sales assistant that transcribes customer calls without strict data privacy verification.”',
    avatarIcon: 'developer_mode',
    conversation: [
      { speaker: 'rep', text: "Thanks for joining, Marcus. I'd love to show you how our native CRM integration works." },
      { speaker: 'buyer', text: "Before we look at the CRM, walk me through your security. We need enterprise-grade data security and strict data isolation." },
      { speaker: 'rep', text: "Absolutely. CloseIQ is built with single-tenant data isolation. All transcribed calls are isolated in secure tenants and encrypted." },
      { speaker: 'buyer', text: "Okay. And what about custom data retention? We have strict scrubbing rules for customer PII." }
    ],
    copilotSuggestions: [
      "Share security and data architecture whitepaper",
      "Mention TLS 1.3 & AES-256 encryption specs",
      "Offer to arrange custom PII scrubbing demonstration"
    ]
  },
  {
    id: 'founder',
    role: 'Founder & CEO',
    name: 'Sarah Jenkins',
    personality: 'Fast-Paced & Growth-Oriented',
    budget: '$50k - $100k',
    buyingBehavior: 'Prioritizes rapid rep onboarding, immediate ROI, and minimal time investments.',
    objection: '“Our managers are already stretched thin. We don\'t have time to configure complex software.”',
    avatarIcon: 'rocket_launch',
    conversation: [
      { speaker: 'rep', text: "Sarah, CloseIQ can start saving your managers up to 5 hours a week of manual shadow sessions." },
      { speaker: 'buyer', text: "That sounds good, but my concern is the setup. If my team has to spend weeks configuring this, it defeats the purpose." },
      { speaker: 'rep', text: "Understandable. CloseIQ has zero manual setup. We integrate natively with Zoom and Salesforce, analyzing calls out of the box." },
      { speaker: 'buyer', text: "How fast do new hires actually start hitting quota with this?" }
    ],
    copilotSuggestions: [
      "Cite Case Study: Acme Corp reduced ramp time by 42% in 2 weeks",
      "Offer 1-click sandbox setup with demo data",
      "Focus pitch on manager time saved (no manual call reviews)"
    ]
  },
  {
    id: 'vpsales',
    role: 'VP of Sales',
    name: 'Robert Stark',
    personality: 'Results-Driven & Competitive',
    budget: '$200k - $400k',
    buyingBehavior: 'Interested in playbook alignment, script compliance, and pipeline velocity.',
    objection: '“My reps won\'t use it if it feels like Big Brother monitoring their every mistake.”',
    avatarIcon: 'trending_up',
    conversation: [
      { speaker: 'rep', text: "Robert, our goal is to assist reps on live calls, not just grade them afterward." },
      { speaker: 'buyer', text: "That’s what every tool says. But reps hate anything that tracks their talk ratios or playbooks." },
      { speaker: 'rep', text: "We structure the platform as an assistant. The Live Copilot whispers helpful cues and obection handling to them, which reps love." },
      { speaker: 'buyer', text: "How do you track playbook alignment without putting pressure on the reps?" }
    ],
    copilotSuggestions: [
      "Explain the 'Assistant first' philosophy",
      "Show how gamified simulated sandbox calls build rep confidence",
      "Discuss anonymized team analytics vs. individual policing"
    ]
  },
  {
    id: 'procurement',
    role: 'Procurement Manager',
    name: 'Elena Rostova',
    personality: 'Detail-Oriented & Price-Sensitive',
    budget: 'Strict Budget Caps',
    buyingBehavior: 'Focuses on discount margins, payment terms, contract commitments, and ROI models.',
    objection: '“Competitor X does simple call transcription for free. We cannot justify this cost.”',
    avatarIcon: 'payments',
    conversation: [
      { speaker: 'rep', text: "Elena, I understand budget constraints. Let's talk about the displacement math." },
      { speaker: 'buyer', text: "Transcription is a commodity. Why should we pay your premium when we get transcription elsewhere?" },
      { speaker: 'rep', text: "Free tools only record. CloseIQ actively drives rep behavior during the call. That correlates with a 35% higher close rate." },
      { speaker: 'buyer', text: "Can you guarantee a pilot period with deferred billing terms?" }
    ],
    copilotSuggestions: [
      "Propose 30-day deferred billing pilot program",
      "Calculate ROI based on a 5% increase in team close rates",
      "Compare call intelligence vs. basic recording"
    ]
  },
  {
    id: 'cfo',
    role: 'CFO',
    name: 'David Vance',
    personality: 'Analytical & ROI-Obsessed',
    budget: 'Enterprise Sign-off',
    buyingBehavior: 'Considers cash flow, payback period, net revenue retention, and total cost of ownership.',
    objection: '“Show me the exact payback period of this software. We are cutting software spend.”',
    avatarIcon: 'account_balance',
    conversation: [
      { speaker: 'rep', text: "David, we can map out a custom business case showing the exact payback timeline." },
      { speaker: 'buyer', text: "Every vendor has a spreadsheet. Show me historical customer data proving time to value." },
      { speaker: 'rep', text: "On average, teams recoup their CloseIQ investment in 47 days by accelerating rep onboarding and saving manager hours." },
      { speaker: 'buyer', text: "What happens to the pricing model if we scale down seats next fiscal year?" }
    ],
    copilotSuggestions: [
      "Provide seat flexibility clause details",
      "Show CFO-centric ROI calculator spreadsheet",
      "Discuss reduction of manager headcounts needed to scale coaching"
    ]
  }
];

export default function AiPersonaPage({ onBack, onOpenPopup }: AiPersonaPageProps) {
  const [selectedId, setSelectedId] = useState('cto');
  
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, []);

  const activePersona = personas.find(p => p.id === selectedId) || personas[0];

  return (
    <div className="min-h-screen bg-background text-on-surface pt-32 pb-24 overflow-hidden relative">
      {/* Decorative green glow shapes */}
      <div className="absolute top-20 right-0 w-[500px] h-[500px] bg-emerald-500/10 rounded-none blur-[150px] pointer-events-none"></div>
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
            Solutions / AI Personas
          </span>
        </div>

        {/* Section 1: Introduction */}
        <section className="grid grid-cols-1 lg:grid-cols-[1fr_1.35fr] gap-16 items-start">
          {/* Copy Side */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tighter leading-[1.1]">
                Practice Against <br />
                <span className="bg-gradient-to-r from-emerald-400 to-emerald-200 bg-clip-text text-transparent">AI Buyers.</span>
              </h1>
              <p className="text-2xl text-on-surface-variant leading-relaxed max-w-lg font-semibold">
                Realistic conversations before real customers.
              </p>
            </div>
            
            <p className="text-lg md:text-xl text-on-surface-variant/95 leading-relaxed max-w-lg font-medium">
              Once reps understand your product, they begin practicing with AI buyer personas modeled after your ideal customers. Since CloseIQ provides a real-time AI copilot during every simulation, reps don't need to memorize every product detail. Instead, they focus on what matters most: asking better questions, building rapport, handling objections, and leading confident sales conversations.
            </p>
            <p className="text-lg md:text-xl text-on-surface-variant/95 leading-relaxed max-w-lg font-medium">
              Each persona has unique goals, personalities, objections, budgets, and buying behaviors, making every practice session feel like a real sales call.
            </p>

            <div className="space-y-3 pt-4">
              {[
                "Unlimited AI roleplays",
                "Custom ICP buyer personas",
                "Dynamic objections and buying signals",
                "AI Copilot available during every simulation",
                "Instant performance scoring and feedback"
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
                Start Training Sandboxes
              </button>
            </div>
          </div>

          {/* Interactive UI Visualization Side */}
          <div className="space-y-6 relative">
            {/* Massive Green Glow backing */}
            <div className="absolute inset-0 bg-emerald-500/20 blur-[80px] rounded-none pointer-events-none"></div>

            {/* Buyer Selector Row */}
            <div className="grid grid-cols-5 gap-2 relative z-10">
              {personas.map((persona) => {
                const isActive = persona.id === selectedId;
                return (
                  <button
                    key={persona.id}
                    onClick={() => setSelectedId(persona.id)}
                    className={`p-3 border flex flex-col items-center gap-1.5 transition-all rounded-none ${
                      isActive 
                        ? 'bg-emerald-500/10 border-emerald-500 shadow-[0_0_15px_rgba(16,185,129,0.25)]' 
                        : 'bg-[#0A0A0A]/60 border-outline/35 hover:bg-[#1A1A1A]'
                    }`}
                  >
                    <span className={`material-symbols-outlined text-[20px] ${isActive ? 'text-emerald-400' : 'text-on-surface-variant'}`}>
                      {persona.avatarIcon}
                    </span>
                    <span className="text-xs font-bold uppercase tracking-wider text-center hidden md:block text-white">
                      {persona.role.split(' ')[0]}
                    </span>
                  </button>
                );
              })}
            </div>

            {/* Interactive Sandbox HUD */}
            <div className="relative bg-[#0A0A0A]/80 backdrop-blur-3xl border border-emerald-500/30 rounded-none shadow-[0_0_50px_rgba(16,185,129,0.15)] grid grid-cols-1 md:grid-cols-12 overflow-hidden z-10">
              
              {/* Conversation Area - 7 Columns */}
              <div className="md:col-span-7 flex flex-col border-b md:border-b-0 md:border-r border-outline/25">
                {/* Header */}
                <div className="px-6 py-4 border-b border-outline/25 bg-emerald-500/5 flex items-center justify-between">
                  <div>
                    <h3 className="font-bold text-sm uppercase tracking-wider text-emerald-400">Buyer Simulation</h3>
                    <p className="text-base font-bold text-white">{activePersona.name} ({activePersona.role})</p>
                  </div>
                  <span className="text-xs bg-emerald-500/15 border border-emerald-500/25 px-2 py-0.5 text-emerald-400 font-mono font-bold tracking-widest uppercase">
                    Active
                  </span>
                </div>

                {/* Persona Profile Brief */}
                <div className="p-4 bg-[#141414]/65 border-b border-outline/20 space-y-1">
                  <div className="text-xs text-on-surface-variant/80 font-mono font-bold uppercase">Persona Context</div>
                  <p className="text-sm text-white/80"><strong className="text-emerald-400">Behavior: </strong>{activePersona.buyingBehavior}</p>
                  <p className="text-sm text-white/80"><strong className="text-emerald-400">Budget: </strong>{activePersona.budget}</p>
                </div>

                {/* Message Log */}
                <div className="p-6 space-y-6">
                  {activePersona.conversation.map((msg, idx) => (
                    <div key={idx} className="space-y-1">
                      <div className={`flex items-center gap-1.5 text-xs uppercase tracking-wider font-bold ${msg.speaker === 'buyer' ? 'text-emerald-400' : 'text-on-surface-variant/60'}`}>
                        <span className="material-symbols-outlined text-[14px]">
                          {msg.speaker === 'buyer' ? 'person' : 'support_agent'}
                        </span>
                        {msg.speaker === 'buyer' ? activePersona.role : 'Alex (SDR)'}
                      </div>
                      <div className={`text-base leading-relaxed pl-5 border-l-2 ${msg.speaker === 'buyer' ? 'border-emerald-500 text-white' : 'border-outline/25 text-white/70'}`}>
                        {msg.text}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* AI Copilot Side Guide - 5 Columns */}
              <div className="md:col-span-5 bg-[#0C0C0E]/90 flex flex-col">
                <div className="px-6 py-4 border-b border-outline/25 bg-emerald-500/5">
                  <h3 className="font-bold text-sm uppercase tracking-wider text-emerald-400 flex items-center gap-1.5">
                    <span className="material-symbols-outlined text-[16px] animate-pulse">auto_awesome</span>
                    Live Copilot Guide
                  </h3>
                </div>

                <div className="p-6 space-y-6 flex-1">
                  {/* Persona Objection */}
                  <div className="space-y-2">
                    <div className="text-xs text-on-surface-variant/80 font-mono font-bold uppercase">Objection Triggered</div>
                    <div className="bg-[#1C1C1E] border border-red-500/20 p-3 text-sm leading-relaxed text-red-300 italic font-medium">
                      {activePersona.objection}
                    </div>
                  </div>

                  {/* Dynamic Suggestions */}
                  <div className="space-y-3">
                    <div className="text-xs text-on-surface-variant/80 font-mono font-bold uppercase">Suggested Prompts</div>
                    <div className="space-y-2">
                      {activePersona.copilotSuggestions.map((sug, idx) => (
                        <div key={idx} className="flex gap-2.5 items-start text-sm border border-emerald-500/20 bg-emerald-500/[0.02] p-2.5 hover:bg-emerald-500/[0.05] transition-colors cursor-pointer">
                          <span className="material-symbols-outlined text-[18px] text-emerald-400 mt-0.5">lightbulb</span>
                          <span className="text-white/95 leading-snug">{sug}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* Section 2: How CloseIQ Works (Timeline) */}
        <section className="space-y-16 pt-16 mt-16 border-t border-outline/20">
          <div className="space-y-4 max-w-2xl">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tighter text-white">
              Master the <br/>
              <span className="bg-gradient-to-r from-emerald-400 to-emerald-200 bg-clip-text text-transparent">Art of Selling.</span>
            </h2>
            <p className="text-xl text-on-surface-variant font-medium">
              The AI Persona sandbox prepares reps for every negotiation curveball.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-0 border border-outline/20">
            
            {/* Step 1 */}
            <div className="relative group p-8 border-b md:border-b-0 lg:border-r border-outline/20 bg-surface/30 hover:bg-surface/60 transition-colors">
              <div className="absolute inset-0 bg-emerald-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative z-10 space-y-16">
                <div className="flex justify-between items-start">
                  <div className="w-12 h-12 flex items-center justify-center bg-emerald-500/10 border border-emerald-500/30">
                    <span className="material-symbols-outlined text-2xl text-emerald-400">group</span>
                  </div>
                  <span className="text-4xl font-black text-outline/30 group-hover:text-emerald-400/20 transition-colors font-mono">01</span>
                </div>
                <div className="space-y-3">
                  <h3 className="text-xl font-bold text-white uppercase tracking-wide">Select Buyer</h3>
                  <p className="text-base text-on-surface-variant leading-relaxed font-medium">
                    Choose from standard target ICP roles including CEOs, CFOs, technical CTOs, or budget-conscious procurement leads.
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
                    <span className="material-symbols-outlined text-2xl text-emerald-400">voice_chat</span>
                  </div>
                  <span className="text-4xl font-black text-outline/30 group-hover:text-emerald-400/20 transition-colors font-mono">02</span>
                </div>
                <div className="space-y-3">
                  <h3 className="text-xl font-bold text-white uppercase tracking-wide">Roleplay out loud</h3>
                  <p className="text-base text-on-surface-variant leading-relaxed font-medium">
                    Have natural vocal conversations. The AI buyer responds immediately, mimicking realistic buyer behaviors and moods.
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
                    <span className="material-symbols-outlined text-2xl text-emerald-400">auto_awesome</span>
                  </div>
                  <span className="text-4xl font-black text-outline/30 group-hover:text-emerald-400/20 transition-colors font-mono">03</span>
                </div>
                <div className="space-y-3">
                  <h3 className="text-xl font-bold text-white uppercase tracking-wide">Copilot Assist</h3>
                  <p className="text-base text-on-surface-variant leading-relaxed font-medium">
                    Get real-time guidance prompts so you learn what response works best before ever jumping on a call with a real prospect.
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
                    <span className="material-symbols-outlined text-2xl text-emerald-400">insights</span>
                  </div>
                  <span className="text-4xl font-black text-emerald-500/30 group-hover:text-emerald-400/20 transition-colors font-mono">04</span>
                </div>
                <div className="space-y-3">
                  <h3 className="text-xl font-bold text-white uppercase tracking-wide">Instant Feedback</h3>
                  <p className="text-base text-on-surface-variant leading-relaxed font-medium">
                    Evaluate key objection handling and discovery scores instantly. Focus coaching exactly where reps fall short.
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
