export default function ProblemSection() {
  return (
    <section className="py-32 bg-primary text-white border-b-4 border-black flex items-center justify-center relative">
      {/* Background pattern for texture */}
      <div 
        className="absolute inset-0 z-0 opacity-10"
        style={{
          backgroundImage: `repeating-linear-gradient(45deg, #000 0, #000 2px, transparent 2px, transparent 10px)`
        }}
      />
      
      <div className="max-w-[1400px] mx-auto px-6 relative z-10 w-full">
        <div className="bg-white text-black border-4 border-black p-12 shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] text-center">
          <h2 className="text-5xl md:text-7xl lg:text-[6rem] font-black uppercase leading-[0.9] tracking-tighter mb-8">
            Every day a new rep <br className="hidden md:block"/> isn't productive is <br className="hidden md:block"/>
            <span className="text-primary bg-black text-white px-4">revenue lost.</span>
          </h2>
          
          <p className="text-2xl font-bold max-w-4xl mx-auto leading-tight uppercase border-t-4 border-black pt-8 mt-8">
            The old playbook of shadowing calls and reading wikis is broken. 
            It takes too long, scales poorly, and leaves your reps guessing when it matters most.
          </p>
        </div>
      </div>
    </section>
  );
}
