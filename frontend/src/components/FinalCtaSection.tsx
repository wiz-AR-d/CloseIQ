export default function FinalCtaSection() {
  return (
    <section className="py-32 bg-primary text-white border-b-4 border-black">
      <div className="max-w-[1200px] mx-auto px-6 text-center">
        <div className="bg-white text-black border-4 border-black shadow-brutal p-12 md:p-24 relative">
          
          <div className="absolute -top-6 -left-6 bg-primary text-white border-4 border-black font-black uppercase px-6 py-2 text-2xl rotate-[-2deg]">
            Stop Losing Money
          </div>
          
          <h2 className="text-6xl md:text-[5rem] font-black uppercase leading-[0.85] tracking-tighter mb-8 mt-4">
            Stop paying reps to read wikis.
          </h2>
          <p className="text-2xl font-bold uppercase mb-12 max-w-3xl mx-auto border-y-4 border-black py-6">
            Get your team to quota 2 months faster. CloseIQ is the only platform that trains, tests, and guides your reps from day one.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <button className="px-12 py-6 bg-black text-white font-black uppercase text-2xl border-4 border-black hover:bg-primary transition-colors shadow-[8px_8px_0px_0px_rgba(230,57,70,1)] hover:shadow-none hover:translate-x-2 hover:translate-y-2">
              Book a Demo
            </button>
            <button className="px-12 py-6 bg-white text-black font-black uppercase text-2xl border-4 border-black hover:bg-surface-container-high transition-colors shadow-brutal hover:shadow-none hover:translate-x-1 hover:translate-y-1">
              View Pricing
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
