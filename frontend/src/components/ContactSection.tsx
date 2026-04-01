import React, { useState } from 'react';

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  });
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');
    
    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          access_key: import.meta.env.VITE_WEB3FORMS_ACCESS_KEY,
          ...formData
        })
      });

      const data = await response.json();

      if (response.ok) {
        setStatus('success');
        setTimeout(() => {
          setStatus('idle');
          setFormData({ name: '', email: '', company: '', message: '' });
        }, 3000);
      } else {
        console.error("Error:", data.message);
        setStatus('error');
      }
    } catch (error) {
      console.error(error);
      setStatus('error');
    }
  };

  return (
    <section id="contact-form" className="py-24 relative overflow-hidden bg-surface-container-low border-t border-outline-variant/10">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        
        {/* Left Side: Copy */}
        <div className="space-y-8">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-white">
            Ready to transform <br/>
            <span className="text-primary">your sales process?</span>
          </h2>
          <p className="text-lg text-on-surface-variant max-w-lg leading-relaxed">
            Fill out the form to get in touch with our team. We'll set up a time to show you how CloseIQ can stop you from losing data and start closing more deals.
          </p>
          <div className="space-y-4">
            <div className="flex items-center gap-4 text-on-surface-variant">
               <span className="material-symbols-outlined text-primary">support_agent</span>
               <span>24/7 Expert Support</span>
            </div>
            <div className="flex items-center gap-4 text-on-surface-variant">
               <span className="material-symbols-outlined text-primary">fast_forward</span>
               <span>Rapid onboarding</span>
            </div>
            <div className="flex items-center gap-4 text-on-surface-variant">
               <span className="material-symbols-outlined text-primary">integration_instructions</span>
               <span>Seamless integrations</span>
            </div>
          </div>
        </div>

        {/* Right Side: Form */}
        <div className="relative z-10 p-8 glass-card border border-outline-variant/20 rounded-2xl shadow-xl">
          {status === 'success' ? (
            <div className="bg-primary/10 border border-primary/20 rounded-xl p-8 text-center flex flex-col items-center justify-center h-full min-h-[400px]">
              <span className="material-symbols-outlined text-primary text-5xl mb-4">check_circle</span>
              <h3 className="text-2xl font-bold text-primary mb-2">Message Sent!</h3>
              <p className="text-on-surface-variant">Thanks for reaching out. We will get back to you shortly.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label htmlFor="contact-name" className="block text-sm font-medium text-white mb-1">Full Name</label>
                <input 
                  type="text" 
                  id="contact-name"
                  required
                  className="w-full bg-surface border border-outline-variant/50 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors"
                  placeholder="Jane Doe"
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                />
              </div>
              
              <div>
                <label htmlFor="contact-email" className="block text-sm font-medium text-white mb-1">Work Email</label>
                <input 
                  type="email" 
                  id="contact-email"
                  required
                  className="w-full bg-surface border border-outline-variant/50 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors"
                  placeholder="jane@company.com"
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                />
              </div>

              <div>
                <label htmlFor="contact-company" className="block text-sm font-medium text-white mb-1">Company Name</label>
                <input 
                  type="text" 
                  id="contact-company"
                  required
                  className="w-full bg-surface border border-outline-variant/50 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors"
                  placeholder="Acme Corp"
                  value={formData.company}
                  onChange={(e) => setFormData({...formData, company: e.target.value})}
                />
              </div>

              <div>
                <label htmlFor="contact-message" className="block text-sm font-medium text-white mb-1">How can we help?</label>
                <textarea 
                  id="contact-message"
                  required
                  className="w-full bg-surface border border-outline-variant/50 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors resize-none h-28"
                  placeholder="Tell us about your needs..."
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                ></textarea>
              </div>

              {status === 'error' && (
                <p className="text-red-500 text-sm">Something went wrong. Please try again.</p>
              )}

              <button 
                type="submit" 
                disabled={status === 'submitting'}
                className="w-full py-4 kinetic-gradient text-on-primary font-bold rounded-lg shadow-lg hover:brightness-110 transition-all text-lg disabled:opacity-70 flex justify-center items-center gap-2"
              >
                {status === 'submitting' ? (
                  <>
                    <span className="animate-spin material-symbols-outlined">progress_activity</span>
                    Submitting...
                  </>
                ) : (
                  'Send Message'
                )}
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
