export default function ProblemSection() {
  return (
    <section className="min-h-[60vh] py-20 bg-background text-on-background relative flex flex-col items-center justify-center">
      
      {/* Very subtle glow behind text */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-primary/5 rounded-full blur-[80px] pointer-events-none" />

      <div className="max-w-[1000px] mx-auto px-6 relative z-10 text-center">
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-sans font-bold tracking-tight leading-[1.1] text-on-background mb-8">
          The traditional onboarding playbook <br className="hidden md:block"/>
          <span className="italic text-on-surface-variant">costs you time and deals.</span>
        </h2>
        
        <p className="text-lg font-medium max-w-3xl mx-auto leading-relaxed text-on-surface-variant">
          Shadowing calls and reading wikis doesn't scale. It leaves your new hires guessing 
          when it matters most, burning valuable leads while they try to find their footing.
          CloseIQ replaces guesswork with a predictable revenue engine.
        </p>
      </div>
    </section>
  );
}
