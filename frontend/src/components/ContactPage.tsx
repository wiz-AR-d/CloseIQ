import { useState } from 'react';

interface ContactPageProps {
  onBack: () => void;
}

export default function ContactPage({ onBack }: ContactPageProps) {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <div className="min-h-screen bg-background text-on-surface py-24 px-6">
      <div className="max-w-4xl mx-auto space-y-12">
        {/* Navigation / Header */}
        <div className="flex justify-between items-center pb-6 border-b border-outline-variant/30">
          <button 
            onClick={onBack}
            className="flex items-center gap-2 text-sm font-semibold text-primary hover:text-primary-dim transition-colors"
          >
            <span className="material-symbols-outlined text-sm">arrow_back</span>
            Back to home
          </button>
          <span className="text-xs text-on-surface-variant font-mono">Customer Support</span>
        </div>

        {/* Title */}
        <div className="text-center max-w-2xl mx-auto space-y-4">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-on-surface">Get in touch</h1>
          <p className="text-on-surface-variant leading-relaxed">
            Drop us a message, share feature feedback, or say hello. We are usually online and we'd love to chat.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-stretch pt-4">
          {/* Left Column: Coordinates */}
          <div className="md:col-span-5 bg-surface-container-low rounded-3xl p-8 border border-outline-variant/20 flex flex-col justify-between space-y-8">
            <div className="space-y-6">
              <h3 className="text-xl font-bold text-on-surface">Support & Inquiries</h3>
              
              <div className="space-y-4 text-sm text-on-surface-variant leading-relaxed">
                <p>
                  We are here to help. Whether you need technical assistance, want to set up custom objection playbooks, or have inquiries regarding our data isolation settings, please submit your query using the form.
                </p>
                <p>
                  Our engineering and support teams monitor all inquiries actively to ensure quick resolutions.
                </p>
              </div>
            </div>

            <div className="text-xs text-on-surface-variant/80 border-t border-outline-variant/20 pt-4 leading-relaxed">
              We respond to support queries within 12 hours. We promise a real human response to every ticket.
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="md:col-span-7 bg-surface rounded-3xl p-8 border border-outline-variant/20 shadow-xl flex flex-col justify-between min-h-[400px]">
            {submitted ? (
              <div className="flex-grow flex flex-col items-center justify-center text-center space-y-4">
                <span className="material-symbols-outlined text-5xl text-primary animate-bounce">check_circle</span>
                <h3 className="text-2xl font-bold text-on-surface">Message Sent!</h3>
                <p className="text-sm text-on-surface-variant max-w-sm">
                  Thank you! We've received your note and one of us will write back to you shortly.
                </p>
                <button 
                  onClick={() => setSubmitted(false)}
                  className="mt-2 text-xs font-bold text-primary hover:underline"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <h3 className="text-xl font-bold text-on-surface">Send a Message</h3>
                
                <div>
                  <label htmlFor="form-name" className="block text-xs font-semibold text-on-surface-variant uppercase tracking-wider mb-1 font-mono">Your Name</label>
                  <input 
                    type="text" 
                    id="form-name"
                    required
                    className="w-full bg-surface-container-low border border-outline-variant/50 rounded-xl px-4 py-3 text-sm text-on-surface focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors"
                    placeholder="Pooja Sharma"
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                  />
                </div>

                <div>
                  <label htmlFor="form-email" className="block text-xs font-semibold text-on-surface-variant uppercase tracking-wider mb-1 font-mono">Work Email</label>
                  <input 
                    type="email" 
                    id="form-email"
                    required
                    className="w-full bg-surface-container-low border border-outline-variant/50 rounded-xl px-4 py-3 text-sm text-on-surface focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors"
                    placeholder="pooja@company.com"
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                  />
                </div>

                <div>
                  <label htmlFor="form-message" className="block text-xs font-semibold text-on-surface-variant uppercase tracking-wider mb-1 font-mono">Message</label>
                  <textarea 
                    id="form-message"
                    required
                    rows={4}
                    className="w-full bg-surface-container-low border border-outline-variant/50 rounded-xl px-4 py-3 text-sm text-on-surface focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors resize-none"
                    placeholder="Tell us what you're building or asking..."
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                  />
                </div>

                <button 
                  type="submit"
                  className="w-full py-4 bg-primary text-on-primary font-bold rounded-xl text-sm hover:brightness-110 active:scale-[0.98] transition-all shadow-md"
                >
                  Send Message
                </button>
              </form>
            )}
          </div>
        </div>

        {/* Back to top footer */}
        <div className="pt-8 border-t border-outline-variant/30 flex justify-center">
          <button 
            onClick={onBack}
            className="px-6 py-2.5 bg-primary text-on-primary font-bold rounded-full text-sm hover:brightness-110 active:scale-95 transition-all shadow-md"
          >
            Back to Home Page
          </button>
        </div>
      </div>
    </div>
  );
}
