export default function SocialProofSection() {
  return (
    <section className="py-20 bg-background text-on-background border-b-4 border-black">
      <div className="max-w-[1400px] mx-auto px-6">
        
        {/* Logos */}
        <div className="flex flex-wrap justify-between items-center gap-10 border-4 border-black bg-white px-8 py-6 shadow-brutal mb-16">
          <p className="w-full md:w-auto text-lg font-black tracking-widest uppercase mb-4 md:mb-0">
            Trusted By:
          </p>
          {['ACME CORP', 'GLOBALTECH', 'NEXUS', 'PINNACLE', 'APEX'].map((logo, index) => (
            <div key={index} className="flex items-center gap-2 text-2xl font-black opacity-80 hover:opacity-100 transition-opacity">
              <span className="material-symbols-outlined text-3xl">emergency</span>
              {logo}
            </div>
          ))}
        </div>

        {/* Statistics Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center p-12 bg-white border-4 border-black shadow-brutal hover:-translate-y-1 hover:shadow-brutal-lg transition-all">
            <h4 className="text-7xl font-black text-primary mb-4">78%</h4>
            <p className="font-bold text-xl uppercase leading-tight">of VPs say ramp time is their #1 bottleneck.</p>
          </div>
          <div className="text-center p-12 bg-white border-4 border-black shadow-brutal hover:-translate-y-1 hover:shadow-brutal-lg transition-all">
            <h4 className="text-7xl font-black text-primary mb-4">3.2<span className="text-4xl text-black">MO</span></h4>
            <p className="font-bold text-xl uppercase leading-tight">average time to first closed-won deal.</p>
          </div>
          <div className="text-center p-12 bg-white border-4 border-black shadow-brutal hover:-translate-y-1 hover:shadow-brutal-lg transition-all">
            <h4 className="text-7xl font-black text-primary mb-4">$42K</h4>
            <p className="font-bold text-xl uppercase leading-tight">cost of an unproductive rep's first 90 days.</p>
          </div>
        </div>

      </div>
    </section>
  );
}
