import React, { useState } from 'react';

interface PopupFormProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function PopupForm({ isOpen, onClose }: PopupFormProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  });
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  if (!isOpen) return null;

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
          onClose();
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
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 p-4 animate-backdrop-fade">
      <div className="relative w-full max-w-lg bg-surface-container-low border border-outline-variant/30 rounded-2xl p-8 shadow-2xl animate-modal-entry">
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 text-on-surface-variant hover:text-primary transition-colors hover:rotate-90 duration-300"
        >
          <span className="material-symbols-outlined">close</span>
        </button>
        
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-white tracking-tight mb-2">Let's Connect</h2>
          <p className="text-on-surface-variant">Fill out the details below and our team will get back to you shortly.</p>
        </div>

        {status === 'success' ? (
          <div className="bg-primary/10 border border-primary/20 rounded-xl p-6 text-center">
            <span className="material-symbols-outlined text-primary text-4xl mb-2">check_circle</span>
            <h3 className="text-xl font-bold text-primary mb-1">Thank you!</h3>
            <p className="text-on-surface-variant">Your details have been received successfully.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-white mb-1">Full Name</label>
              <input 
                type="text" 
                id="name"
                required
                className="w-full bg-surface border border-outline-variant/50 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors"
                placeholder="Jane Doe"
                value={formData.name}
                onChange={(e) => setFormData({...formData, name: e.target.value})}
              />
            </div>
            
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-white mb-1">Work Email</label>
              <input 
                type="email" 
                id="email"
                required
                className="w-full bg-surface border border-outline-variant/50 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors"
                placeholder="jane@company.com"
                value={formData.email}
                onChange={(e) => setFormData({...formData, email: e.target.value})}
              />
            </div>

            <div>
              <label htmlFor="company" className="block text-sm font-medium text-white mb-1">Company Name</label>
              <input 
                type="text" 
                id="company"
                required
                className="w-full bg-surface border border-outline-variant/50 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors"
                placeholder="Acme Corp"
                value={formData.company}
                onChange={(e) => setFormData({...formData, company: e.target.value})}
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-white mb-1">How can we help?</label>
              <textarea 
                id="message"
                className="w-full bg-surface border border-outline-variant/50 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors resize-none h-24"
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
              className="w-full py-4 bg-primary text-on-primary font-bold rounded-lg shadow-lg hover:brightness-110 transition-all text-lg disabled:opacity-70 flex justify-center items-center gap-2"
            >
              {status === 'submitting' ? (
                <>
                  <span className="animate-spin material-symbols-outlined">progress_activity</span>
                  Submitting...
                </>
              ) : (
                'Submit Request'
              )}
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
