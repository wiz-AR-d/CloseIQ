import React, { useState } from 'react';

interface PopupFormProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function PopupForm({ isOpen, onClose }: PopupFormProps) {
  const [email, setEmail] = useState('');
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
          access_key: import.meta.env.VITE_WEB3FORMS_ACCESS_KEY || 'd9233277-a9a0-4996-a797-ba72639939c8',
          email
        })
      });

      const data = await response.json();

      if (response.ok) {
        setStatus('success');
        setTimeout(() => {
          onClose();
          setStatus('idle');
          setEmail('');
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
      <div className="relative w-full max-w-md bg-surface-container-low border border-outline-variant/30 rounded-2xl p-8 shadow-2xl animate-modal-entry">
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 text-on-surface-variant hover:text-primary transition-colors hover:rotate-90 duration-300"
        >
          <span className="material-symbols-outlined">close</span>
        </button>
        
        <div className="mb-6">
          <h2 className="text-3xl font-bold text-on-surface tracking-tight mb-2">Join the Waitlist</h2>
          <p className="text-on-surface-variant">Enter your email below to secure your spot for early access to CloseIQ.</p>
        </div>

        {status === 'success' ? (
          <div className="bg-primary/10 border border-primary/20 rounded-xl p-6 text-center">
            <span className="material-symbols-outlined text-primary text-4xl mb-2">check_circle</span>
            <h3 className="text-xl font-bold text-primary mb-1">You're on the list!</h3>
            <p className="text-on-surface-variant">Thank you! We will reach out as soon as early access slots open up.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="email" className="block text-sm font-semibold text-on-surface mb-1.5">Work Email</label>
              <input 
                type="email" 
                id="email"
                required
                className="w-full bg-background border border-outline-variant/50 rounded-lg px-4 py-3 text-on-surface placeholder:text-on-surface-variant/40 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors"
                placeholder="you@company.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
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
                  Joining...
                </>
              ) : (
                'Join the Waitlist'
              )}
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
