export default function CallToActionSection() {
  const scrollToContact = () => {
    const contactSection = document.getElementById('contact-form');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="py-32 relative overflow-hidden">
      <div className="absolute inset-0 kinetic-gradient opacity-10"></div>
      <div className="max-w-4xl mx-auto px-6 text-center relative z-10 space-y-10">
        <h2 className="text-5xl md:text-7xl font-bold tracking-tight">
          Stop losing data.<br />
          <span className="text-primary">Start closing more.</span>
        </h2>
        <p className="text-xl text-on-surface-variant max-w-2xl mx-auto">
          The future of sales intelligence is here. <br />
          Join 5,000+ top-performing sales teams using CloseIQ to dominate their markets.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button 
            onClick={scrollToContact}
            className="px-10 py-5 kinetic-gradient text-on-primary font-bold rounded-xl text-xl shadow-2xl hover:scale-105 transition-transform"
          >
            Contact Us
          </button>
        </div>
        <p className="text-sm text-on-surface-variant/60">Make it Convert</p>
      </div>
    </section>
  )
}
