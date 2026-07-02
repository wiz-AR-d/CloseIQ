import { useState, useEffect } from 'react';

interface ContactPageProps {
  onBack: () => void;
}

export default function ContactPage({ onBack }: ContactPageProps) {
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
    <div className="min-h-screen bg-background text-on-surface py-32 px-6 relative overflow-hidden">
      {/* Decorative green glow shapes */}
      <div className="absolute top-20 right-0 w-[500px] h-[500px] bg-primary/20 rounded-none blur-[150px] pointer-events-none"></div>
      <div className="absolute bottom-40 left-0 w-[600px] h-[600px] bg-emerald-500/10 rounded-none blur-[150px] pointer-events-none"></div>

      <div className="max-w-[700px] mx-auto space-y-12 relative z-10">
        
        {/* Breadcrumb Header */}
        <div className="flex justify-between items-center pb-6 border-b border-outline-variant/15">
          <button 
            onClick={onBack}
            className="flex items-center gap-2 text-sm font-semibold text-on-surface-variant hover:text-white transition-all group"
          >
            <span className="material-symbols-outlined text-sm transition-transform group-hover:-translate-x-1">arrow_back</span>
            Back to Home
          </button>
          <span className="text-xs bg-emerald-500/15 text-emerald-400 border border-emerald-500/20 px-3 py-1 rounded-none font-semibold font-mono tracking-wide uppercase shadow-[0_0_10px_rgba(16,185,129,0.2)]">
            Contact
          </span>
        </div>

        {/* Header copy */}
        <div className="text-center max-w-2xl mx-auto space-y-4">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-white">Contact Us</h1>
          <p className="text-on-surface-variant leading-relaxed text-sm">
            Have questions about integrations, security configurations, or custom sandbox setups? Drop us a line below.
          </p>
        </div>

        {/* Content Body */}
        <div className="bg-[#0A0A0B]/80 backdrop-blur-3xl border border-emerald-500/25 p-8 rounded-none shadow-xl min-h-[300px] flex flex-col justify-between">
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
                  rows={6}
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

      </div>
    </div>
  );
}
