import { useState, useEffect } from 'react';

interface CompanyPageProps {
  onBack: () => void;
  onOpenPopup?: () => void;
}

export default function CompanyPage({ onBack, onOpenPopup }: CompanyPageProps) {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, []);

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          access_key: 'd9233277-a9a0-4996-a797-ba72639939c8',
          name: formData.name,
          email: formData.email,
          message: formData.message
        })
      });
      if (response.ok) {
        setFormSubmitted(true);
        setFormData({ name: '', email: '', message: '' });
      } else {
        alert("Something went wrong. Please try again.");
      }
    } catch (err) {
      alert("Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-background text-on-surface pt-32 pb-24 relative overflow-hidden">
      {/* Decorative green glow shapes */}
      <div className="absolute top-20 right-0 w-[500px] h-[500px] bg-primary/20 rounded-none blur-[150px] pointer-events-none"></div>
      <div className="absolute bottom-40 left-0 w-[600px] h-[600px] bg-emerald-500/10 rounded-none blur-[150px] pointer-events-none"></div>

      <div className="max-w-[1000px] mx-auto px-6 relative z-10 space-y-24">
        
        {/* Navigation Breadcrumb */}
        <div className="flex justify-between items-center border-b border-outline-variant/15 pb-6">
          <button 
            onClick={onBack}
            className="flex items-center gap-2 text-sm font-semibold text-on-surface-variant hover:text-white transition-all group"
          >
            <span className="material-symbols-outlined text-sm transition-transform group-hover:-translate-x-1">arrow_back</span>
            Back to Home
          </button>
          <span className="text-xs bg-emerald-500/15 text-emerald-400 border border-emerald-500/20 px-3 py-1 rounded-none font-semibold font-mono tracking-wide uppercase shadow-[0_0_10px_rgba(16,185,129,0.2)]">
            About / Company
          </span>
        </div>

        {/* Section 1: Hero Mission */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 space-y-6">
            <h1 className="text-5xl md:text-6xl font-bold tracking-tighter leading-[1.1]">
              Drastically reduce <br />
              <span className="bg-gradient-to-r from-emerald-400 to-emerald-200 bg-clip-text text-transparent">rep ramp-up time.</span>
            </h1>
            <p className="text-lg text-on-surface-variant leading-relaxed font-medium">
              We built CloseIQ to replace slow manual shadow sessions with interactive sales sandboxes and real-time live copilot guidance.
            </p>
            <p className="text-sm text-on-surface-variant/80 leading-relaxed">
              Traditional sales training forces representatives to read outdated wikis, study transcripts of former calls, and shadow managers for hours. We replace that overhead with an active sandbox. Reps practice playbooks out loud against specialized AI buyer profiles, and a Live Copilot acts as their safety net on actual customer calls.
            </p>
          </div>

          <div className="lg:col-span-5 grid grid-cols-2 gap-4">
            <div className="border border-emerald-500/20 bg-emerald-500/[0.02] p-6 text-center space-y-2 rounded-none">
              <div className="text-3xl font-black font-mono text-emerald-400">90%</div>
              <div className="text-[10px] uppercase font-bold tracking-wider text-on-surface-variant/80">Ramp Time Reduced</div>
            </div>
            <div className="border border-outline/25 bg-[#0C0C0E] p-6 text-center space-y-2 rounded-none">
              <div className="text-3xl font-black font-mono text-white">5+ Hrs</div>
              <div className="text-[10px] uppercase font-bold tracking-wider text-on-surface-variant/80">Manager shadow time saved</div>
            </div>
            <div className="border border-outline/25 bg-[#0C0C0E] p-6 text-center space-y-2 rounded-none">
              <div className="text-3xl font-black font-mono text-white">100%</div>
              <div className="text-[10px] uppercase font-bold tracking-wider text-on-surface-variant/80">Conversations Audited</div>
            </div>
            <div className="border border-emerald-500/20 bg-emerald-500/[0.02] p-6 text-center space-y-2 rounded-none">
              <div className="text-3xl font-black font-mono text-emerald-400">2.3x</div>
              <div className="text-[10px] uppercase font-bold tracking-wider text-on-surface-variant/80">Quota Attainment Boost</div>
            </div>
          </div>
        </section>

        {/* Section 2: Values Grid */}
        <section className="space-y-12 border-t border-outline/20 pt-16">
          <h2 className="text-3xl font-bold tracking-tight text-white">Our Core Philosophy</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            <div className="border border-outline/25 bg-surface/35 p-6 space-y-4 rounded-none">
              <div className="w-10 h-10 flex items-center justify-center bg-emerald-500/10 border border-emerald-500/25">
                <span className="material-symbols-outlined text-emerald-400">psychology</span>
              </div>
              <h3 className="font-bold text-base text-white">Active sandbox first</h3>
              <p className="text-xs text-on-surface-variant leading-relaxed">
                Reps don’t learn from watching. They learn by doing. We build simulated arenas where sales teams can make mistakes, handle objections, and master scripts without burning real customer leads.
              </p>
            </div>

            <div className="border border-outline/25 bg-surface/35 p-6 space-y-4 rounded-none">
              <div className="w-10 h-10 flex items-center justify-center bg-emerald-500/10 border border-emerald-500/25">
                <span className="material-symbols-outlined text-emerald-400">shield</span>
              </div>
              <h3 className="font-bold text-base text-white">Uncompromising Security</h3>
              <p className="text-xs text-on-surface-variant leading-relaxed">
                Sales calls represent highly sensitive business IP. We host all data under single-tenant isolation schemes, scrub personal PII automatically, and support full Okta/Azure SSO.
              </p>
            </div>

            <div className="border border-outline/25 bg-surface/35 p-6 space-y-4 rounded-none">
              <div className="w-10 h-10 flex items-center justify-center bg-emerald-500/10 border border-emerald-500/25">
                <span className="material-symbols-outlined text-emerald-400">bolt</span>
              </div>
              <h3 className="font-bold text-base text-white">Live Call Safety Net</h3>
              <p className="text-xs text-on-surface-variant leading-relaxed">
                Rather than auditing call performance hours after it's complete, our Live AI Copilot assists reps mid-call so they always say the winning line and maintain call control.
              </p>
            </div>

          </div>
        </section>

        {/* Section 3: Contact Form */}
        <section className="border-t border-outline/20 pt-16 space-y-12">
          
          <div className="text-center max-w-xl mx-auto space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white">Get in touch</h2>
            <p className="text-xs md:text-sm text-on-surface-variant">
              Have questions about integrations, security configurations, or custom sandbox setups? Drop us a line below.
            </p>
          </div>

          <div className="bg-[#0A0A0B]/80 backdrop-blur-3xl border border-emerald-500/25 p-8 rounded-none max-w-2xl mx-auto flex flex-col justify-between">
            {formSubmitted ? (
              <div className="text-center py-10 space-y-4">
                <span className="material-symbols-outlined text-4xl text-emerald-400">mail</span>
                <h3 className="text-xl font-bold text-white">Message Sent!</h3>
                <p className="text-xs text-on-surface-variant leading-relaxed max-w-sm mx-auto">
                  Thank you for reaching out. A sales engineer will respond to your inquiry via email within 2 hours.
                </p>
                <button 
                  onClick={() => setFormSubmitted(false)}
                  className="px-5 py-2 border border-outline/30 hover:border-white text-xs font-semibold text-white transition-all rounded-none"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleFormSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <label className="text-[10px] text-on-surface-variant/70 font-mono font-bold uppercase">Name</label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="Your Name"
                      className="w-full bg-[#141416] border border-outline/35 px-4 py-2.5 text-xs text-white placeholder-white/30 rounded-none focus:outline-none focus:border-emerald-500"
                    />
                  </div>
                  <div className="space-y-1">
                    <label className="text-[10px] text-on-surface-variant/70 font-mono font-bold uppercase">Work Email</label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="you@company.com"
                      className="w-full bg-[#141416] border border-outline/35 px-4 py-2.5 text-xs text-white placeholder-white/30 rounded-none focus:outline-none focus:border-emerald-500"
                    />
                  </div>
                </div>

                <div className="space-y-1">
                  <label className="text-[10px] text-on-surface-variant/70 font-mono font-bold uppercase">Message</label>
                  <textarea
                    required
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="How can we help your team?"
                    className="w-full bg-[#141416] border border-[#2B2B2F] px-4 py-3 text-xs text-white placeholder-white/30 rounded-none focus:outline-none focus:border-emerald-500 resize-none"
                  />
                </div>

                <button 
                  type="submit" 
                  disabled={isSubmitting}
                  className="w-full py-3.5 bg-emerald-500 text-black font-semibold text-xs uppercase tracking-wider transition-all rounded-none hover:bg-emerald-600 shadow-[0_0_15px_rgba(16,185,129,0.25)] disabled:opacity-50"
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </button>
              </form>
            )}
          </div>

        </section>

      </div>
    </div>
  );
}
