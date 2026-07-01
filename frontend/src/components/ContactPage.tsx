import { useState } from 'react';

interface ContactPageProps {
  onBack: () => void;
}

export default function ContactPage({ onBack }: ContactPageProps) {
  const [activeTab, setActiveTab] = useState<'scheduler' | 'form'>('scheduler');
  const [selectedDate, setSelectedDate] = useState<string>('Monday, June 29');
  const [selectedTime, setSelectedTime] = useState<string>('10:00 AM EST');
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [bookingConfirmed, setBookingConfirmed] = useState(false);

  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [formSubmitted, setFormSubmitted] = useState(false);

  const dates = [
    { label: 'Mon, Jun 29', value: 'Monday, June 29' },
    { label: 'Tue, Jun 30', value: 'Tuesday, June 30' },
    { label: 'Wed, Jul 01', value: 'Wednesday, July 1' },
    { label: 'Thu, Jul 02', value: 'Thursday, July 2' },
    { label: 'Fri, Jul 03', value: 'Friday, July 3' }
  ];

  const timeSlots = [
    '9:00 AM EST',
    '10:00 AM EST',
    '11:30 AM EST',
    '1:00 PM EST',
    '2:30 PM EST',
    '4:00 PM EST'
  ];

  const handleBookingSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email && name) {
      setBookingConfirmed(true);
    }
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <div className="min-h-screen bg-background text-on-surface py-28 px-6 transition-colors duration-300">
      <div className="max-w-4xl mx-auto space-y-12">
        {/* Breadcrumb Header */}
        <div className="flex justify-between items-center pb-6 border-b border-outline-variant/15">
          <button 
            onClick={onBack}
            className="flex items-center gap-2 text-sm font-semibold text-primary hover:text-primary-dim transition-all group"
          >
            <span className="material-symbols-outlined text-sm transition-transform group-hover:-translate-x-1">arrow_back</span>
            Back to Home
          </button>
          <span className="text-xs bg-primary/10 text-primary border border-primary/20 px-3 py-1 rounded-full font-semibold font-mono tracking-wide uppercase">
            Let's Connect
          </span>
        </div>

        {/* Header copy */}
        <div className="text-center max-w-2xl mx-auto space-y-4">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight">How can we help?</h1>
          <p className="text-on-surface-variant leading-relaxed text-sm md:text-base">
            Select a convenient slot on our team calendar for a custom ROI review, or drop us a support message below.
          </p>

          {/* Selector Switch */}
          <div className="inline-flex bg-surface-container rounded-full p-1 border border-outline-variant/20 text-xs font-semibold mt-4">
            <button 
              onClick={() => setActiveTab('scheduler')}
              className={`px-4 py-2 rounded-full transition-all ${activeTab === 'scheduler' ? 'bg-primary text-on-primary shadow-sm' : 'text-on-surface-variant hover:text-on-surface'}`}
            >
              1. Schedule a Zoom Demo
            </button>
            <button 
              onClick={() => setActiveTab('form')}
              className={`px-4 py-2 rounded-full transition-all ${activeTab === 'form' ? 'bg-primary text-on-primary shadow-sm' : 'text-on-surface-variant hover:text-on-surface'}`}
            >
              2. Send Support Message
            </button>
          </div>
        </div>

        {/* Content Body */}
        <div className="bg-surface-container-low rounded-[32px] border border-outline-variant/20 p-8 shadow-xl relative min-h-[460px] flex flex-col justify-between">
          
          {/* Tab 1: Demo Calendar Scheduler */}
          {activeTab === 'scheduler' && (
            <div className="space-y-6">
              {bookingConfirmed ? (
                <div className="text-center py-12 space-y-4 max-w-md mx-auto">
                  <span className="material-symbols-outlined text-5xl text-emerald-500 animate-bounce">check_circle</span>
                  <h3 className="text-2xl font-bold text-on-surface">Demo Scheduled!</h3>
                  <p className="text-sm text-on-surface-variant leading-relaxed">
                    Thank you, <span className="font-semibold text-on-surface">{name}</span>! We have sent a calendar invite and Zoom link to <span className="font-semibold text-on-surface">{email}</span> for:
                  </p>
                  <div className="p-4 bg-surface rounded-2xl border border-outline-variant/20 text-center font-semibold text-xs text-primary font-mono shadow-sm">
                    {selectedDate} @ {selectedTime}
                  </div>
                  <p className="text-[10px] text-on-surface-variant">Our team will reach out to confirm your Salesforce integrations prior to the call.</p>
                  <button 
                    onClick={() => {
                      setBookingConfirmed(false);
                      setName('');
                      setEmail('');
                    }}
                    className="text-xs text-primary font-bold hover:underline"
                  >
                    Reschedule or Book Another Slot
                  </button>
                </div>
              ) : (
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                  {/* Calendar controls */}
                  <div className="lg:col-span-7 space-y-5">
                    <div>
                      <h3 className="text-base font-bold text-on-surface">1. Choose Date</h3>
                      <div className="grid grid-cols-5 gap-2.5 mt-3">
                        {dates.map((d) => (
                          <button
                            key={d.value}
                            onClick={() => setSelectedDate(d.value)}
                            className={`p-2.5 rounded-xl border text-center transition-all ${selectedDate === d.value ? 'bg-primary/10 border-primary text-primary font-bold shadow-sm' : 'bg-surface/50 border-outline-variant/15 text-on-surface-variant hover:bg-surface'}`}
                          >
                            <span className="text-[10px] block leading-none font-mono">{d.label.split(', ')[0]}</span>
                            <span className="text-xs block mt-1.5 leading-none font-bold">{d.label.split(', ')[1]}</span>
                          </button>
                        ))}
                      </div>
                    </div>

                    <div>
                      <h3 className="text-base font-bold text-on-surface">2. Select Time</h3>
                      <div className="grid grid-cols-3 gap-2 mt-3">
                        {timeSlots.map((slot) => (
                          <button
                            key={slot}
                            onClick={() => setSelectedTime(slot)}
                            className={`p-2.5 rounded-xl border text-center transition-all text-xs font-semibold ${selectedTime === slot ? 'bg-primary/10 border-primary text-primary font-bold shadow-sm' : 'bg-surface/50 border-outline-variant/15 text-on-surface-variant hover:bg-surface'}`}
                          >
                            {slot}
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Right side form */}
                  <form onSubmit={handleBookingSubmit} className="lg:col-span-5 bg-surface border border-outline-variant/30 rounded-2xl p-6 shadow-sm flex flex-col justify-between space-y-4">
                    <div className="space-y-4">
                      <div>
                        <h4 className="text-xs font-bold text-primary font-mono uppercase tracking-wider">Confirm Booking Details</h4>
                        <p className="text-[10px] text-on-surface-variant mt-0.5">Custom 30-min CloseIQ ROI review</p>
                      </div>

                      <div className="text-xs p-3 bg-surface-container rounded-xl border border-outline-variant/15 space-y-1 font-semibold text-on-surface">
                        <div className="flex justify-between">
                          <span className="text-on-surface-variant">Date:</span>
                          <span>{selectedDate}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-on-surface-variant">Time:</span>
                          <span>{selectedTime}</span>
                        </div>
                      </div>

                      <div className="space-y-3">
                        <div>
                          <label className="block text-[10px] font-bold text-on-surface-variant uppercase font-mono tracking-wider mb-1">Your Name</label>
                          <input 
                            type="text"
                            required
                            placeholder="Sneha Joshi"
                            className="w-full bg-surface-container-low border border-outline-variant/40 rounded-xl px-3.5 py-2.5 text-xs text-on-surface focus:outline-none focus:border-primary transition-colors"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                          />
                        </div>
                        <div>
                          <label className="block text-[10px] font-bold text-on-surface-variant uppercase font-mono tracking-wider mb-1">Work Email</label>
                          <input 
                            type="email"
                            required
                            placeholder="sneha@company.com"
                            className="w-full bg-surface-container-low border border-outline-variant/40 rounded-xl px-3.5 py-2.5 text-xs text-on-surface focus:outline-none focus:border-primary transition-colors"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                          />
                        </div>
                      </div>
                    </div>

                    <button
                      type="submit"
                      className="w-full py-3 bg-primary text-on-primary font-bold rounded-xl text-xs hover:brightness-110 active:scale-95 transition-all shadow-md mt-4"
                    >
                      Book Free Zoom Session
                    </button>
                  </form>
                </div>
              )}
            </div>
          )}

          {/* Tab 2: Regular Support / Contact Form */}
          {activeTab === 'form' && (
            <div className="space-y-6 max-w-xl mx-auto w-full">
              {formSubmitted ? (
                <div className="text-center py-12 space-y-4">
                  <span className="material-symbols-outlined text-5xl text-primary animate-bounce">check_circle</span>
                  <h3 className="text-2xl font-bold text-on-surface">Message Received!</h3>
                  <p className="text-sm text-on-surface-variant max-w-sm mx-auto">
                    We've logged your support request. Our customer success team will contact you within 12 hours.
                  </p>
                  <button 
                    onClick={() => setFormSubmitted(false)}
                    className="text-xs text-primary font-bold hover:underline"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleFormSubmit} className="space-y-5">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[10px] font-bold text-on-surface-variant uppercase font-mono tracking-wider mb-1">Name</label>
                      <input 
                        type="text"
                        required
                        placeholder="Pooja Sharma"
                        className="w-full bg-surface border border-outline-variant/45 rounded-xl px-4 py-3 text-xs text-on-surface focus:outline-none focus:border-primary transition-colors"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      />
                    </div>
                    <div>
                      <label className="block text-[10px] font-bold text-on-surface-variant uppercase font-mono tracking-wider mb-1">Email</label>
                      <input 
                        type="email"
                        required
                        placeholder="pooja@company.com"
                        className="w-full bg-surface border border-outline-variant/45 rounded-xl px-4 py-3 text-xs text-on-surface focus:outline-none focus:border-primary transition-colors"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-[10px] font-bold text-on-surface-variant uppercase font-mono tracking-wider mb-1">Message</label>
                    <textarea 
                      required
                      rows={5}
                      placeholder="Let us know what you need (SSO configuration specs, pricing queries, or platform issues)..."
                      className="w-full bg-surface border border-outline-variant/45 rounded-xl px-4 py-3 text-xs text-on-surface focus:outline-none focus:border-primary transition-colors resize-none"
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-4 bg-primary text-on-primary font-bold rounded-xl text-xs hover:brightness-110 active:scale-95 transition-all shadow-md"
                  >
                    Send Message
                  </button>
                </form>
              )}
            </div>
          )}

        </div>

        {/* Back button at the bottom */}
        <div className="pt-8 border-t border-outline-variant/15 flex justify-center">
          <button 
            onClick={onBack}
            className="px-6 py-3 bg-surface-container hover:bg-surface-container-high border border-outline-variant/35 text-on-surface font-semibold rounded-full text-xs transition-all shadow-sm"
          >
            Back to Home Page
          </button>
        </div>
      </div>
    </div>
  );
}
