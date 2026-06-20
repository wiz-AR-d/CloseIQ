export default function CallToActionSection() {
  const scrollToContact = () => {
    const contactSection = document.getElementById('contact-form');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-primary opacity-10"></div>
      <div className="max-w-4xl mx-auto px-6 text-center relative z-10 space-y-10">
        <h2 className="text-5xl md:text-7xl font-bold tracking-tight">
          Clear visibility<br />
          <span className="text-primary">into every conversation.</span>
        </h2>
        <p className="text-xl text-on-surface-variant max-w-2xl mx-auto">
          Join thousands of customer-focused sales teams who use CloseIQ to align playbooks, coaching, and transcripts in one place.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button 
            onClick={scrollToContact}
            className="px-10 py-5 bg-primary text-on-primary font-bold rounded-xl text-xl shadow-2xl hover:scale-105 transition-transform"
          >
            Get Started
          </button>
        </div>
      </div>
    </section>
  )
}
