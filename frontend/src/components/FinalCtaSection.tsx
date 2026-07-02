interface FinalCtaSectionProps {
  onNavigateContact?: () => void;
}

export default function FinalCtaSection({ onNavigateContact }: FinalCtaSectionProps) {
  return (
    <section className="py-32 bg-background text-on-background relative overflow-hidden flex justify-center items-center">
      
      {/* Soft clay-like glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-emerald-100/40 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-[800px] mx-auto px-6 relative z-10 text-center">
        <h2 className="text-5xl md:text-6xl lg:text-[4.5rem] font-sans font-bold tracking-tight leading-[1.05] tracking-tight text-on-background mb-8">
          Turn your ramp time <br/>
          <span className="italic text-on-surface-variant">into a competitive moat.</span>
        </h2>
        <p className="text-lg font-medium text-on-surface-variant max-w-2xl mx-auto mb-10">
          Stop leaving revenue on the table while new hires figure things out. 
          Equip them with the intelligence they need to win from day one.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button 
            onClick={onNavigateContact}
            className="px-8 py-4 bg-surface text-on-background font-medium rounded-full border border-outline hover:bg-surface-container-high transition-colors shadow-sm"
          >
            Contact Us
          </button>
        </div>
      </div>
    </section>
  );
}
