import salya from '../assets/salya.png';

export default function SalesAssistantSection() {
  return (
    <section className="py-24 bg-surface-container-low">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
        <div className="space-y-6">
          <span className="text-tertiary text-sm font-bold tracking-widest uppercase">
            The Sales Assistant
          </span>
          <h2 className="text-4xl md:text-5xl font-bold leading-tight">
            Your personal AI sales assistant.
          </h2>
          <p className="text-lg text-on-surface-variant leading-relaxed">
            Saved context from every call, automated summaries, and instant CRM entries. Focus on closing, not notes.
          </p>
          <div className="bg-surface-container p-6 rounded-xl border border-outline-variant/20 space-y-4">
            <div className="flex justify-between items-center">
              <span className="text-on-surface font-bold">Post-Call Summary</span>
              <span className="text-xs text-on-surface-variant">2 mins ago</span>
            </div>
            <div className="h-[2px] w-full bg-outline-variant/20"></div>
            <p className="text-sm text-on-surface-variant italic">
              "Prospect is ready to move forward. Objection regarding security was handled using the 'ISO Whitepaper' asset..."
            </p>
            <button className="w-full py-3 bg-secondary-container text-on-secondary-container rounded-lg font-bold flex items-center justify-center gap-2 transition-transform active:scale-95">
              <span className="material-symbols-outlined text-sm">sync</span>
              Sync to CRM
            </button>
          </div>
        </div>
        <div className="relative">
          <div className="absolute inset-0 bg-tertiary/5 blur-[100px] rounded-full"></div>
          <img
            alt="AI Sales Assistant"
            className="relative z-10 w-full h-auto rounded-xl border border-outline-variant/20 shadow-2xl"
            src={salya}
          />
        </div>
      </div>
    </section>
  )
}
