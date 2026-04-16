import firstimgAI from '../assets/firstimgAI.png';

interface HeroSectionProps {
  onOpenPopup?: () => void;
}

export default function HeroSection({ onOpenPopup }: HeroSectionProps) {
  return (
    <header className="relative pt-32 pb-20 overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full pointer-events-none">
        <div className="absolute top-[-10%] left-[10%] w-[500px] h-[500px] bg-primary/10 blur-[120px] rounded-full"></div>
        <div className="absolute bottom-[10%] right-[5%] w-[400px] h-[400px] bg-tertiary/10 blur-[100px] rounded-full"></div>
      </div>
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-6 space-y-8 z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-surface-container-highest rounded-full border border-outline-variant/20">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
            <span className="text-label-sm text-primary font-medium tracking-wider uppercase text-[10px]">
              Intelligence is Live
            </span>
          </div>
          <h1 className="text-6xl md:text-8xl font-bold leading-[0.9] tracking-[-0.04em] text-on-surface">
            No manual work.<br />
            <span className="text-primary-dim">No Blind spots.</span>
          </h1>
          <p className="text-lg md:text-xl text-on-surface-variant max-w-lg leading-relaxed">
            CloseIQ captures, transcribes, and analyzes every sales interaction—automatically. Get automated summaries, sales insights, and company-wide analytics from your calls.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <button 
              onClick={onOpenPopup}
              className="px-8 py-4 bg-primary text-on-primary font-bold rounded-lg shadow-lg hover:brightness-110 transition-all text-lg"
            >
              Get Started with us
            </button>
          </div>
        </div>
        <div className="lg:col-span-6 relative z-10">
          <div className="bg-surface p-4 rounded-xl border border-outline-variant/20 shadow-2xl relative glow-pulse">
            <img
              alt="Sales Intelligence Interface"
              className="rounded-lg w-full h-auto shadow-2xl"
              src={firstimgAI}
            />
            <div className="absolute -bottom-25 -left-6 bg-surface shadow-2xl p-6 rounded-xl border border-outline-variant/50 max-w-[240px]">
              <div className="flex items-center gap-3 mb-2">
                <span className="material-symbols-outlined text-primary">auto_awesome</span>
                <span className="text-xs font-bold text-primary uppercase tracking-widest">
                  Data Capture
                </span>
              </div>
              <p className="text-sm text-on-surface leading-snug">
                "Never lose a lead again. CloseIQ captures every call, CRM, chat, and email automatically."
              </p>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}
