export default function HeroSection({ onOpenPopup }: { onOpenPopup?: () => void }) {
  return (
    <header className="pt-24 border-b-4 border-black bg-background text-on-background">
      <div className="max-w-[1400px] mx-auto px-6 pt-16 pb-12 flex flex-col items-start border-x-4 border-black border-t-4 bg-white relative shadow-brutal-lg mb-12">
        
        {/* Banner Tag */}
        <div className="absolute top-0 right-0 bg-primary text-white font-bold px-6 py-2 border-b-4 border-l-4 border-black uppercase tracking-widest text-sm">
          Sales Ramp Accelerator
        </div>

        {/* Aggressive Headline */}
        <h1 className="text-6xl md:text-8xl lg:text-[7rem] font-black uppercase leading-[0.85] tracking-tighter max-w-5xl mb-8">
          Slash Ramp Time.<br/>
          <span className="text-primary">Build Killers.</span>
        </h1>
        
        {/* Subheadline */}
        <p className="text-xl md:text-2xl font-medium max-w-3xl leading-snug mb-12 border-l-8 border-black pl-6">
          GET NEW HIRES REVENUE-READY FASTER. DATA-DRIVEN COACHING. BOOST PRODUCTIVITY BY 40% WITHOUT BURNING REAL LEADS.
        </p>

        {/* CTA buttons */}
        <div className="flex flex-col sm:flex-row gap-6 mb-16 w-full">
          <button 
            onClick={onOpenPopup}
            className="px-10 py-5 bg-primary text-white font-black uppercase text-xl border-4 border-black shadow-brutal hover:-translate-y-1 hover:shadow-brutal-lg transition-all"
          >
            Demo Now
          </button>
          <a
            href="#how-it-works"
            className="px-10 py-5 bg-white text-black font-black uppercase text-xl border-4 border-black shadow-brutal hover:-translate-y-1 hover:shadow-brutal-lg transition-all flex items-center justify-center"
          >
            How it Works
          </a>
        </div>

        {/* Brutalist 3-Step Product Flow Grid */}
        <div className="w-full grid grid-cols-1 md:grid-cols-3 border-t-4 border-black mt-4">
          
          {/* Step 1: Learn */}
          <div className="p-8 border-b-4 md:border-b-0 md:border-r-4 border-black bg-surface-container-high hover:bg-white transition-colors group">
            <h3 className="text-4xl font-black uppercase mb-4 tracking-tighter group-hover:text-primary transition-colors">1. Learn</h3>
            <p className="font-bold text-lg leading-tight uppercase">
              AI Debriefer ingests docs & pricing. Interactive QA.
            </p>
          </div>

          {/* Step 2: Practice */}
          <div className="p-8 border-b-4 md:border-b-0 md:border-r-4 border-black bg-surface-container-high hover:bg-white transition-colors group">
            <h3 className="text-4xl font-black uppercase mb-4 tracking-tighter group-hover:text-primary transition-colors">2. Practice</h3>
            <p className="font-bold text-lg leading-tight uppercase">
              Roleplay with ruthless AI buyer personas.
            </p>
          </div>

          {/* Step 3: Perform */}
          <div className="p-8 bg-surface-container-high hover:bg-white transition-colors group">
            <h3 className="text-4xl font-black uppercase mb-4 tracking-tighter group-hover:text-primary transition-colors">3. Perform</h3>
            <p className="font-bold text-lg leading-tight uppercase">
              Live Copilot guides real calls with battlecards.
            </p>
          </div>

        </div>
      </div>
    </header>
  );
}
