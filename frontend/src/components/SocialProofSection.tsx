export default function SocialProofSection() {
  return (
    <section className="pt-12 pb-8 bg-background text-on-background">
      <div className="max-w-[1200px] mx-auto px-6">
        
        {/* Statistics Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div className="text-center px-4">
            <h4 className="text-5xl font-sans font-bold tracking-tight text-primary mb-3">78%</h4>
            <p className="font-medium text-sm text-on-surface-variant leading-relaxed">
              of VPs identify onboarding time as their #1 barrier to revenue growth.
            </p>
          </div>
          <div className="text-center px-4 relative">
            <div className="hidden md:block absolute left-0 top-1/2 -translate-y-1/2 w-px h-16 bg-outline/40"></div>
            <div className="hidden md:block absolute right-0 top-1/2 -translate-y-1/2 w-px h-16 bg-outline/40"></div>
            <h4 className="text-5xl font-sans font-bold tracking-tight text-primary mb-3">3.2<span className="text-2xl text-on-surface-variant font-sans">mo</span></h4>
            <p className="font-medium text-sm text-on-surface-variant leading-relaxed">
              average industry timeline to a new rep's first closed-won deal.
            </p>
          </div>
          <div className="text-center px-4">
            <h4 className="text-5xl font-sans font-bold tracking-tight text-primary mb-3">$42K</h4>
            <p className="font-medium text-sm text-on-surface-variant leading-relaxed">
              average cost incurred during an unproductive rep's first 90 days.
            </p>
          </div>
        </div>



      </div>
    </section>
  );
}
