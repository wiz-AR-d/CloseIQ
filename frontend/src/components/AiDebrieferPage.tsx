import { useEffect } from 'react';

interface AiDebrieferPageProps {
  onBack: () => void;
  onOpenPopup?: () => void;
}

export default function AiDebrieferPage({ onBack, onOpenPopup }: AiDebrieferPageProps) {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, []);

  return (
    <div className="min-h-screen bg-background text-on-surface pt-32 pb-24 overflow-hidden relative">
      {/* Decorative blurred backgrounds matching hero section - PURE GREEN THEME */}
      <div className="absolute top-20 right-0 w-[500px] h-[500px] bg-primary/20 rounded-full blur-[150px] pointer-events-none"></div>
      <div className="absolute bottom-40 left-0 w-[600px] h-[600px] bg-emerald-500/10 rounded-full blur-[150px] pointer-events-none"></div>

      <div className="max-w-[1200px] mx-auto px-6 relative z-10 space-y-32">
        
        {/* Navigation Breadcrumb */}
        <div className="flex justify-between items-center border-b border-outline-variant/15 pb-6">
          <button 
            onClick={onBack}
            className="flex items-center gap-2 text-sm font-semibold text-on-surface-variant hover:text-white transition-all group"
          >
            <span className="material-symbols-outlined text-sm transition-transform group-hover:-translate-x-1">arrow_back</span>
            Back to Home
          </button>
          <span className="text-xs bg-primary/15 text-primary border border-primary/20 px-3 py-1 rounded-none font-semibold font-mono tracking-wide uppercase shadow-[0_0_10px_rgba(16,185,129,0.2)]">
            Solutions / AI Debriefer
          </span>
        </div>

        {/* Section 1: Meet your AI Sales Coach */}
        <section className="grid grid-cols-1 lg:grid-cols-[1fr_1.35fr] gap-16 items-start">
          {/* Copy Side */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tighter leading-[1.1]">
                Meet <br />
                your <br />
                <span className="bg-gradient-to-r from-emerald-400 to-emerald-200 bg-clip-text text-transparent">AI Debriefer.</span>
              </h1>
              <p className="text-2xl text-on-surface-variant leading-relaxed max-w-lg font-semibold">
                Every new sales rep gets an AI debriefer that knows your company inside out.
              </p>
            </div>
            
            <p className="text-lg md:text-xl text-on-surface-variant/95 leading-relaxed max-w-lg font-medium">
              Instead of reading lengthy documentation or waiting for managers to answer questions, reps can have <strong>live voice conversations</strong> with an AI trained on your company's products, pricing, competitors, and objection handling.
            </p>
            <p className="text-lg md:text-xl text-on-surface-variant/95 leading-relaxed max-w-lg font-medium">
              The AI listens, explains concepts, answers follow-up questions, and quizzes reps out loud to reinforce learning—just like a real manager would.
            </p>

            <div className="space-y-3 pt-4">
              {[
                "Trained on your internal knowledge base",
                "Live voice-to-voice roleplay",
                "Interactive onboarding conversations",
                "AI-generated audio quizzes",
                "Personalized learning experience"
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
                Start a Demo Session
              </button>
            </div>
          </div>

          {/* UI Visualization Side - VOICE INTERFACE */}
          <div className="relative">
            {/* Massive Green Glow backing */}
            <div className="absolute inset-0 bg-emerald-500/20 blur-[80px] rounded-none pointer-events-none"></div>
            
            <div className="relative bg-[#0A0A0A]/80 backdrop-blur-3xl border border-emerald-500/30 rounded-none shadow-[0_0_50px_rgba(16,185,129,0.15)] flex flex-col overflow-hidden">
              
              {/* Call Header */}
              <div className="flex items-center justify-between px-6 py-4 border-b border-emerald-500/20 bg-emerald-500/5">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-none bg-emerald-500 flex items-center justify-center shadow-[0_0_15px_rgba(16,185,129,0.4)]">
                    <span className="material-symbols-outlined text-black">mic</span>
                  </div>
                  <div>
                    <h3 className="font-bold text-base text-white">Live Debrief Session</h3>
                    <p className="text-xs text-emerald-400 flex items-center gap-1.5 font-medium tracking-wide uppercase">
                      <span className="w-1.5 h-1.5 rounded-none bg-emerald-500 animate-pulse shadow-[0_0_5px_rgba(16,185,129,1)]"></span>
                      04:12 • Recording
                    </p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <div className="w-8 h-8 rounded-none bg-surface-container-high border border-outline/30 flex items-center justify-center text-white cursor-pointer hover:bg-white/10 transition-colors">
                    <span className="material-symbols-outlined text-[16px]">pause</span>
                  </div>
                  <div className="w-8 h-8 rounded-none bg-error/20 border border-error/30 flex items-center justify-center text-error cursor-pointer hover:bg-error/30 transition-colors shadow-[0_0_10px_rgba(239,68,68,0.2)]">
                    <span className="material-symbols-outlined text-[16px]">call_end</span>
                  </div>
                </div>
              </div>

              {/* Central Voice Visualizer */}
              <div className="h-[200px] flex items-center justify-center relative border-b border-outline/10">
                {/* Glowing Orb */}
                <div className="absolute w-32 h-32 bg-emerald-500/20 rounded-none blur-2xl animate-pulse"></div>
                <div className="absolute w-20 h-20 bg-emerald-500/40 rounded-none blur-xl animate-pulse" style={{ animationDelay: '0.5s' }}></div>
                
                {/* Waveform lines */}
                <div className="flex items-center gap-1.5 relative z-10">
                  {[...Array(24)].map((_, i) => (
                    <div 
                      key={i} 
                      className="w-1.5 bg-emerald-400 rounded-none"
                      style={{
                        height: `${Math.max(10, Math.random() * 80)}px`,
                        animation: `pulse ${0.5 + Math.random()}s infinite alternate`,
                        opacity: 0.5 + Math.random() * 0.5,
                        boxShadow: '0 0 10px rgba(16,185,129,0.5)'
                      }}
                    ></div>
                  ))}
                </div>
              </div>

              {/* Live Transcript */}
              <div className="p-6 space-y-6 bg-gradient-to-b from-transparent to-[#0A0A0A]">
                
                {/* Rep Audio Transcript */}
                <div className="space-y-1">
                  <div className="flex items-center gap-2 text-xs text-on-surface-variant/60 uppercase tracking-wider font-bold">
                    <span className="material-symbols-outlined text-[14px]">person</span>
                    Alex (SDR)
                  </div>
                  <div className="text-base md:text-lg text-white/80 leading-relaxed pl-6 border-l-2 border-outline/20">
                    "Okay, but what if they bring up pricing? Competitor X is like... twenty percent cheaper."
                  </div>
                </div>

                {/* AI Audio Transcript */}
                <div className="space-y-1">
                  <div className="flex items-center gap-2 text-xs text-emerald-400 uppercase tracking-wider font-bold">
                    <span className="material-symbols-outlined text-[14px]">smart_toy</span>
                    CloseIQ Debriefer
                  </div>
                  <div className="text-base md:text-lg text-white leading-relaxed pl-6 border-l-2 border-emerald-500 shadow-[inset_1px_0_10px_rgba(16,185,129,0.05)]">
                    "I want you to acknowledge it, but pivot immediately to Total Cost of Ownership. Try saying: 
                    <br/><br/>
                    <span className="text-emerald-400 italic font-semibold">
                    'They are cheaper on paper, but without native CRM sync, your reps will spend 3 hours a week on data entry. How much is 3 hours of selling time worth?'
                    </span>
                    <br/><br/>
                    Want to try delivering that line to me right now?"
                  </div>
                </div>

              </div>
            </div>
          </div>
        </section>

        {/* Section 2: How CloseIQ Works (Timeline) */}
        <section className="space-y-16 pt-16 mt-16 border-t border-outline/20">
          <div className="space-y-4 max-w-2xl">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tighter">
              Master your <br/>
              <span className="bg-gradient-to-r from-emerald-400 to-emerald-200 bg-clip-text text-transparent">Company Knowledge.</span>
            </h2>
            <p className="text-xl text-on-surface-variant font-medium">
              The AI Debriefer gets every rep up to speed in four simple steps.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-0 border border-outline/20">
            
            {/* Step 1 */}
            <div className="relative group p-8 border-b md:border-b-0 lg:border-r border-outline/20 bg-surface/30 hover:bg-surface/60 transition-colors">
              <div className="absolute inset-0 bg-emerald-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative z-10 space-y-16">
                <div className="flex justify-between items-start">
                  <div className="w-12 h-12 flex items-center justify-center bg-emerald-500/10 border border-emerald-500/30">
                    <span className="material-symbols-outlined text-2xl text-emerald-400">cloud_upload</span>
                  </div>
                  <span className="text-4xl font-black text-outline/30 group-hover:text-emerald-400/20 transition-colors font-mono">01</span>
                </div>
                <div className="space-y-3">
                  <h3 className="text-xl font-bold text-white uppercase tracking-wide">Upload Knowledge</h3>
                  <p className="text-base text-on-surface-variant leading-relaxed font-medium">
                    Upload your company documentation, sales playbook, competitors, pricing, and CRM knowledge directly into CloseIQ.
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
                    <span className="material-symbols-outlined text-2xl text-emerald-400">forum</span>
                  </div>
                  <span className="text-4xl font-black text-outline/30 group-hover:text-emerald-400/20 transition-colors font-mono">02</span>
                </div>
                <div className="space-y-3">
                  <h3 className="text-xl font-bold text-white uppercase tracking-wide">Instant Answers</h3>
                  <p className="text-base text-on-surface-variant leading-relaxed font-medium">
                    Reps ask natural language questions about competitors, pricing, or product specs and get instant, perfectly accurate answers.
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
                    <span className="material-symbols-outlined text-2xl text-teal-400">quiz</span>
                  </div>
                  <span className="text-4xl font-black text-outline/30 group-hover:text-emerald-400/20 transition-colors font-mono">03</span>
                </div>
                <div className="space-y-3">
                  <h3 className="text-xl font-bold text-white uppercase tracking-wide">Interactive Quizzes</h3>
                  <p className="text-base text-on-surface-variant leading-relaxed font-medium">
                    The debriefer proactively tests reps on their knowledge to ensure they retain important information before speaking to a customer.
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
                    <span className="material-symbols-outlined text-2xl text-emerald-500">monitoring</span>
                  </div>
                  <span className="text-4xl font-black text-emerald-500/30 group-hover:text-emerald-400/20 transition-colors font-mono">04</span>
                </div>
                <div className="space-y-3">
                  <h3 className="text-xl font-bold text-white uppercase tracking-wide">Readiness Tracking</h3>
                  <p className="text-base text-on-surface-variant leading-relaxed font-medium">
                    Managers get complete visibility into which reps have mastered the material and who needs more help, ensuring consistent ramp times.
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
