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
    teamSize: '10-25',
    integrations: [] as string[],
    notes: ''
  });
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  if (!isOpen) return null;

  const handleIntegrationToggle = (name: string) => {
    setFormData(prev => {
      const exists = prev.integrations.includes(name);
      return {
        ...prev,
        integrations: exists
          ? prev.integrations.filter(i => i !== name)
          : [...prev.integrations, name]
      };
    });
  };

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
          access_key: 'd9233277-a9a0-4996-a797-ba72639939c8',
          name: formData.name,
          email: formData.email,
          subject: `CloseIQ Popup Pilot Request - ${formData.company}`,
          message: `
Company: ${formData.company}
Team Size: ${formData.teamSize}
Requested Integrations: ${formData.integrations.join(', ') || 'None selected'}
Additional Notes: ${formData.notes}
          `
        })
      });

      if (response.ok) {
        setStatus('success');
        setTimeout(() => {
          onClose();
          setStatus('idle');
          setFormData({
            name: '',
            email: '',
            company: '',
            teamSize: '10-25',
            integrations: [],
            notes: ''
          });
        }, 3000);
      } else {
        setStatus('error');
      }
    } catch (error) {
      console.error(error);
      setStatus('error');
    }
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 p-4 animate-backdrop-fade overflow-y-auto">
      <div className="relative w-full max-w-2xl bg-[#0E0E10] border border-emerald-500/25 rounded-3xl p-6 md:p-8 shadow-2xl animate-modal-entry my-8">
        
        {/* Close Button */}
        <button 
          onClick={onClose}
          className="absolute top-5 right-5 text-on-surface-variant hover:text-white transition-all hover:rotate-90 duration-300"
        >
          <span className="material-symbols-outlined text-2xl">close</span>
        </button>
        
        <div className="mb-6 pr-8">
          <h2 className="text-3xl font-bold text-white tracking-tight mb-2">Register for Pilot</h2>
          <p className="text-on-surface-variant text-sm font-medium">
            Submit your details below and an integration engineer will reach out to schedule your team's kickoff.
          </p>
        </div>

        {status === 'success' ? (
          <div className="bg-emerald-500/10 border border-emerald-500/20 rounded-2xl p-8 text-center space-y-3">
            <span className="material-symbols-outlined text-emerald-400 text-5xl animate-bounce">mail</span>
            <h3 className="text-2xl font-bold text-white">Application Received!</h3>
            <p className="text-on-surface-variant text-base">
              Thank you! An integration engineer will contact you shortly to schedule your kickoff.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-1">
                <label className="text-xs text-on-surface-variant font-bold uppercase tracking-wider">Your Name</label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="Jane Doe"
                  className="w-full bg-[#141416] border border-outline/35 px-4 py-2.5 text-sm text-white placeholder-white/20 rounded-xl focus:outline-none focus:border-emerald-500"
                />
              </div>
              <div className="space-y-1">
                <label className="text-xs text-on-surface-variant font-bold uppercase tracking-wider">Work Email</label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="jane@company.com"
                  className="w-full bg-[#141416] border border-outline/35 px-4 py-2.5 text-sm text-white placeholder-white/20 rounded-xl focus:outline-none focus:border-emerald-500"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-1">
                <label className="text-xs text-on-surface-variant font-bold uppercase tracking-wider">Company Name</label>
                <input
                  type="text"
                  required
                  value={formData.company}
                  onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                  placeholder="Acme Corp"
                  className="w-full bg-[#141416] border border-outline/35 px-4 py-2.5 text-sm text-white placeholder-white/20 rounded-xl focus:outline-none focus:border-emerald-500"
                />
              </div>
              <div className="space-y-1">
                <label className="text-xs text-on-surface-variant font-bold uppercase tracking-wider">Sales Team Size</label>
                <select
                  value={formData.teamSize}
                  onChange={(e) => setFormData({ ...formData, teamSize: e.target.value })}
                  className="w-full bg-[#141416] border border-outline/35 px-4 py-2.5 text-sm text-white rounded-xl focus:outline-none focus:border-emerald-500"
                >
                  <option value="1-9">1–9 reps</option>
                  <option value="10-25">10–25 reps</option>
                  <option value="26-50">26–50 reps</option>
                  <option value="50+">50+ reps</option>
                </select>
              </div>
            </div>

            {/* Integration Checkbox List */}
            <div className="space-y-2">
              <label className="text-xs text-on-surface-variant font-bold uppercase tracking-wider block">Integrations Desired</label>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                {["LeadSquared", "Zoom", "MS Teams", "Salesforce", "HubSpot", "Slack"].map((name) => {
                  const isSelected = formData.integrations.includes(name);
                  return (
                    <button
                      key={name}
                      type="button"
                      onClick={() => handleIntegrationToggle(name)}
                      className={`py-2 px-2.5 border rounded-xl text-xs font-semibold flex items-center justify-center gap-1.5 transition-all ${
                        isSelected 
                          ? 'bg-emerald-500/25 border-emerald-500 text-white shadow-[0_0_10px_rgba(16,185,129,0.15)]' 
                          : 'bg-[#141416] border-outline/35 text-on-surface-variant hover:border-emerald-500/20 hover:text-white'
                      }`}
                    >
                      {isSelected && <span className="material-symbols-outlined text-xs">check</span>}
                      {name}
                    </button>
                  );
                })}
              </div>
            </div>

            <div className="space-y-1">
              <label className="text-xs text-on-surface-variant font-bold uppercase tracking-wider">Additional Requirements / Goals</label>
              <textarea
                rows={2}
                value={formData.notes}
                onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                placeholder="Tell us what you want to achieve during the pilot..."
                className="w-full bg-[#141416] border border-outline/35 px-4 py-2 text-sm text-white placeholder-white/20 rounded-xl focus:outline-none focus:border-emerald-500 resize-none"
              />
            </div>

            {status === 'error' && (
              <p className="text-red-500 text-sm">Something went wrong. Please try again.</p>
            )}

            <button 
              type="submit" 
              disabled={status === 'submitting'}
              className="w-full py-3.5 bg-emerald-500 text-black font-extrabold text-sm uppercase tracking-wider transition-all rounded-xl hover:bg-emerald-600 shadow-[0_0_15px_rgba(16,185,129,0.25)] disabled:opacity-50"
            >
              {status === 'submitting' ? 'Registering...' : 'Apply for Pilot Cohort'}
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
