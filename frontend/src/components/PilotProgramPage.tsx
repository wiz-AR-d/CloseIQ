import { useState, useEffect } from 'react';

interface PilotProgramPageProps {
  onBack: () => void;
}

export default function PilotProgramPage({ onBack }: PilotProgramPageProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    teamSize: '10-25',
    integrations: [] as string[],
    notes: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, []);

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
          subject: `CloseIQ Pilot Request - ${formData.company}`,
          message: `
Company: ${formData.company}
Team Size: ${formData.teamSize}
Requested Integrations: ${formData.integrations.join(', ') || 'None selected'}
Additional Notes: ${formData.notes}
          `
        })
      });
      if (response.ok) {
        setFormSubmitted(true);
        setFormData({
          name: '',
          email: '',
          company: '',
          teamSize: '10-25',
          integrations: [],
          notes: ''
        });
      } else {
        alert("Something went wrong. Please try again.");
      }
    } catch (err) {
      alert("Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const pilotOfferings = [
    {
      icon: "psychology",
      title: "Custom AI Buyer Personas",
      description: "We ingest your actual sales call transcripts and product documentation to generate high-fidelity AI simulation profiles. Reps practice against your actual target ICP (Ideal Customer Profile) in realistic scenarios."
    },
    {
      icon: "sports_esports",
      title: "Interactive Practice Sandbox",
      description: "A simulated arena where reps talk out loud to handle tough objections, master pricing pitches, and practice playbooks. They get instant, action-oriented scoring and speech diagnostics without burning customer leads."
    },
    {
      icon: "bolt",
      title: "Live Copilot Integration",
      description: "An on-screen safety net for live customer calls. The AI Copilot detects speech cues in real time, serving up winning battlecards, objection-handling templates, and prompt checklist alerts."
    },
    {
      icon: "dashboard",
      title: "Manager Coaching Insights",
      description: "Skip manual shadow hours. Managers get automated, structured dashboards highlighting pacing, script adherence, filler words, and individual progress alerts for every single rep."
    }
  ];

  const integrationList = [
    { name: "LeadSquared", icon: "sync", color: "bg-cyan-500/10 text-cyan-400 border-cyan-500/25" },
    { name: "Zoom", icon: "videocam", color: "bg-blue-500/10 text-blue-400 border-blue-500/25" },
    { name: "MS Teams", icon: "groups", color: "bg-indigo-500/10 text-indigo-400 border-indigo-500/25" },
    { name: "Salesforce", icon: "cloud", color: "bg-sky-500/10 text-sky-400 border-sky-500/25" },
    { name: "HubSpot", icon: "hub", color: "bg-orange-500/10 text-orange-400 border-orange-500/25" },
    { name: "Slack", icon: "chat", color: "bg-pink-500/10 text-pink-400 border-pink-500/25" }
  ];

  const pilotRoadmap = [
    {
      step: "01",
      title: "Kickoff & Integration Setup",
      duration: "Days 1–3",
      desc: "Connect Zoom/Teams/LeadSquared recording channels and configure Azure AD or Okta Single Sign-On (SSO) with zero developer friction."
    },
    {
      step: "02",
      title: "Playbook Ingestion",
      duration: "Days 4–7",
      desc: "Upload target scripts and customer objection playbooks. Our engine generates your tailored AI Buyer Personas."
    },
    {
      step: "03",
      title: "Sandbox Validation",
      duration: "Days 8–10",
      desc: "Run a subset of pilot reps through the active practice environment, adjusting AI objection density and scoring metrics."
    },
    {
      step: "04",
      title: "Full Launch & Live Copilot Assist",
      duration: "Days 11–28",
      desc: "Reps run sandboxes daily and use Live Copilot on live calls. Managers receive auto-generated dashboard evaluations."
    },
    {
      step: "05",
      title: "ROI & Performance Review",
      duration: "Days 29–30",
      desc: "Analyze ramp acceleration time, manager hours saved, and objection handling metrics to project annual ARR ROI."
    }
  ];

  return (
    <div className="min-h-screen bg-background text-on-surface pt-32 pb-24 relative overflow-hidden">
      {/* Decorative green glow shapes */}
      <div className="absolute top-20 right-0 w-[500px] h-[500px] bg-emerald-500/20 rounded-full blur-[150px] pointer-events-none"></div>
      <div className="absolute bottom-40 left-0 w-[600px] h-[600px] bg-emerald-500/10 rounded-full blur-[150px] pointer-events-none"></div>

      <div className="max-w-[1100px] mx-auto px-6 relative z-10 space-y-24">
        
        {/* Navigation Breadcrumb */}
        <div className="flex justify-between items-center border-b border-outline-variant/15 pb-6">
          <button 
            onClick={onBack}
            className="flex items-center gap-2 text-sm font-semibold text-on-surface-variant hover:text-white transition-all group"
          >
            <span className="material-symbols-outlined text-sm transition-transform group-hover:-translate-x-1">arrow_back</span>
            Back to Home
          </button>
          <span className="text-xs bg-emerald-500/15 text-emerald-400 border border-emerald-500/20 px-3 py-1.5 rounded-full font-semibold font-mono tracking-wide uppercase shadow-[0_0_10px_rgba(16,185,129,0.2)]">
            CloseIQ Pilot Program
          </span>
        </div>

        {/* Section 1: Hero Mission */}
        <section className="text-center max-w-4xl mx-auto space-y-6">
          <h1 className="text-5xl md:text-7xl font-bold tracking-tighter leading-[1.1]">
            Experience CloseIQ. <br />
            <span className="bg-gradient-to-r from-emerald-400 to-emerald-200 bg-clip-text text-transparent">Start a Pilot Program.</span>
          </h1>
          <p className="text-xl md:text-2xl text-on-surface-variant leading-relaxed max-w-2xl mx-auto font-medium">
            Test-drive customized sales sandboxes and real-time live copilot guidance with your sales team for 30 days.
          </p>
        </section>

        {/* Section 2: Offerings Grid */}
        <section className="space-y-12">
          <div className="text-center max-w-xl mx-auto space-y-3">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white">What We Provide in the Pilot</h2>
            <p className="text-base text-on-surface-variant font-medium">
              We design a fully operational workspace tailored to your company's playbooks and integrated into your daily tech stack.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {pilotOfferings.map((offering, idx) => (
              <div key={idx} className="border border-outline/20 bg-[#0E0E10]/80 backdrop-blur-md p-8 rounded-2xl hover:border-emerald-500/30 transition-all duration-300 group flex flex-col justify-between">
                <div className="space-y-4">
                  <div className="w-12 h-12 flex items-center justify-center bg-emerald-500/10 border border-emerald-500/25 rounded-xl group-hover:bg-emerald-500/25 group-hover:border-emerald-500/40 transition-colors">
                    <span className="material-symbols-outlined text-emerald-400 text-2xl">{offering.icon}</span>
                  </div>
                  <h3 className="font-bold text-2xl text-white">{offering.title}</h3>
                  <p className="text-lg text-on-surface-variant/95 leading-relaxed font-medium">
                    {offering.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Section 3: Integrations & Compatibility */}
        <section className="space-y-12 bg-surface-container-low/40 rounded-3xl border border-outline-variant/15 p-8 md:p-12 shadow-xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-6 space-y-6">
              <span className="text-xs font-bold tracking-widest text-emerald-400 uppercase font-mono bg-emerald-500/15 px-3 py-1.5 rounded-full border border-emerald-500/20 shadow-[0_0_10px_rgba(16,185,129,0.15)]">Seamless Integrations</span>
              <h2 className="text-3xl md:text-4xl font-bold text-white mt-3">Plugs right into your sales stack</h2>
              <p className="text-lg text-on-surface-variant font-medium leading-relaxed">
                CloseIQ does not require complicated code changes. We sync with your existing systems to automatically pull recorded conversations, analyze objections, and serve up copilots during live calls.
              </p>
              
              <ul className="space-y-3.5 text-base font-semibold text-on-surface-variant">
                <li className="flex gap-3 items-center">
                  <span className="material-symbols-outlined text-emerald-400 text-lg">check_circle</span>
                  <span>Auto-ingest recordings from Zoom, Google Meet & Teams</span>
                </li>
                <li className="flex gap-3 items-center">
                  <span className="material-symbols-outlined text-emerald-400 text-lg">check_circle</span>
                  <span>Two-way CRM syncing (HubSpot, Salesforce, Pipedrive)</span>
                </li>
                <li className="flex gap-3 items-center">
                  <span className="material-symbols-outlined text-emerald-400 text-lg">check_circle</span>
                  <span>Single-click Okta and Azure Active Directory SSO setup</span>
                </li>
              </ul>
            </div>

            <div className="lg:col-span-6 grid grid-cols-2 gap-4">
              {integrationList.map((item, idx) => (
                <div key={idx} className={`p-6 border rounded-2xl flex flex-col justify-between gap-4 bg-[#141416]/90 ${item.color} hover:brightness-110 transition-all cursor-pointer`}>
                  <div className="flex justify-between items-center">
                    <span className="material-symbols-outlined text-3xl">{item.icon}</span>
                    <span className="text-xs font-mono font-bold uppercase tracking-wider bg-white/5 border border-white/10 px-2.5 py-0.5 rounded-full">Supported</span>
                  </div>
                  <span className="text-xl font-bold">{item.name}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Section 4: Timeline Roadmap */}
        <section className="space-y-12">
          <div className="text-center max-w-xl mx-auto space-y-3">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white">30-Day Guided Roadmap</h2>
            <p className="text-base text-on-surface-variant font-medium">
              We guide you every step of the way—from initial integrations setup to validating ROI metrics.
            </p>
          </div>

          <div className="relative border-l border-emerald-500/20 ml-4 md:ml-12 space-y-12">
            {pilotRoadmap.map((roadmap, idx) => (
              <div key={idx} className="relative pl-8 md:pl-12 group">
                {/* Timeline node */}
                <div className="absolute -left-[17px] top-1.5 w-8 h-8 rounded-full bg-[#0A0A0C] border-2 border-emerald-500 flex items-center justify-center font-mono text-xs font-bold text-emerald-400 shadow-[0_0_10px_rgba(16,185,129,0.4)] group-hover:scale-110 transition-transform">
                  {roadmap.step}
                </div>
                
                <div className="space-y-2 bg-[#0E0E10]/40 p-6 md:p-8 border border-outline/10 hover:border-emerald-500/20 rounded-2xl transition-all duration-300">
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <h3 className="text-2xl font-bold text-white">{roadmap.title}</h3>
                    <span className="text-sm font-bold font-mono text-emerald-400 bg-emerald-500/10 px-3 py-1 rounded-full border border-emerald-500/20 uppercase tracking-wide">
                      {roadmap.duration}
                    </span>
                  </div>
                  <p className="text-lg text-on-surface-variant leading-relaxed font-medium pt-1">
                    {roadmap.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Section 5: Onboarding Contact Form */}
        <section className="border-t border-outline/20 pt-20 space-y-12">
          <div className="text-center max-w-xl mx-auto space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white">Join the Pilot Cohort</h2>
            <p className="text-base md:text-lg text-on-surface-variant font-medium">
              Submit your company details below. An integration engineer will reach out to outline a structured pilot timeline for your sales team.
            </p>
          </div>

          <div className="bg-[#0E0E10]/80 backdrop-blur-3xl border border-emerald-500/25 p-8 md:p-10 rounded-3xl max-w-2xl mx-auto shadow-2xl">
            {formSubmitted ? (
              <div className="text-center py-10 space-y-4">
                <span className="material-symbols-outlined text-5xl text-emerald-400 animate-bounce">mail</span>
                <h3 className="text-2xl font-bold text-white">Pilot Application Received!</h3>
                <p className="text-base text-on-surface-variant leading-relaxed max-w-md mx-auto">
                  Thank you for applying. A sales enablement coordinator will schedule a kickoff session with your team in the next 2 hours.
                </p>
                <button 
                  onClick={() => setFormSubmitted(false)}
                  className="px-6 py-2.5 border border-outline/30 hover:border-white text-sm font-semibold text-white transition-all rounded-full hover:bg-white/5"
                >
                  Send Another Application
                </button>
              </div>
            ) : (
              <form onSubmit={handleFormSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs text-on-surface-variant font-bold uppercase tracking-wider">Your Name</label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="Jane Doe"
                      className="w-full bg-[#141416] border border-outline/35 px-4 py-3 text-base text-white placeholder-white/20 rounded-xl focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs text-on-surface-variant font-bold uppercase tracking-wider">Work Email</label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="jane@company.com"
                      className="w-full bg-[#141416] border border-outline/35 px-4 py-3 text-base text-white placeholder-white/20 rounded-xl focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs text-on-surface-variant font-bold uppercase tracking-wider">Company Name</label>
                    <input
                      type="text"
                      required
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      placeholder="Acme Corp"
                      className="w-full bg-[#141416] border border-outline/35 px-4 py-3 text-base text-white placeholder-white/20 rounded-xl focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs text-on-surface-variant font-bold uppercase tracking-wider">Sales Team Size</label>
                    <select
                      value={formData.teamSize}
                      onChange={(e) => setFormData({ ...formData, teamSize: e.target.value })}
                      className="w-full bg-[#141416] border border-outline/35 px-4 py-3 text-base text-white rounded-xl focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500"
                    >
                      <option value="1-9">1–9 reps</option>
                      <option value="10-25">10–25 reps</option>
                      <option value="26-50">26–50 reps</option>
                      <option value="50+">50+ reps</option>
                    </select>
                  </div>
                </div>

                {/* Integration Checkbox List */}
                <div className="space-y-3">
                  <label className="text-xs text-on-surface-variant font-bold uppercase tracking-wider block">Integrations Desired</label>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                    {["LeadSquared", "Zoom", "MS Teams", "Salesforce", "HubSpot", "Slack"].map((name) => {
                      const isSelected = formData.integrations.includes(name);
                      return (
                        <button
                          key={name}
                          type="button"
                          onClick={() => handleIntegrationToggle(name)}
                          className={`py-2 px-3 border rounded-xl text-sm font-semibold flex items-center justify-center gap-2 transition-all ${
                            isSelected 
                              ? 'bg-emerald-500/25 border-emerald-500 text-white shadow-[0_0_10px_rgba(16,185,129,0.15)]' 
                              : 'bg-[#141416] border-outline/35 text-on-surface-variant hover:border-emerald-500/20 hover:text-white'
                          }`}
                        >
                          {isSelected && <span className="material-symbols-outlined text-sm">check</span>}
                          {name}
                        </button>
                      );
                    })}
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-xs text-on-surface-variant font-bold uppercase tracking-wider">Additional Requirements / Goals</label>
                  <textarea
                    rows={3}
                    value={formData.notes}
                    onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                    placeholder="Tell us what you want to achieve during the pilot..."
                    className="w-full bg-[#141416] border border-outline/35 px-4 py-3 text-base text-white placeholder-white/20 rounded-xl focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 resize-none"
                  />
                </div>

                <button 
                  type="submit" 
                  disabled={isSubmitting}
                  className="w-full py-4 bg-emerald-500 text-black font-extrabold text-base uppercase tracking-wider transition-all rounded-xl hover:bg-emerald-600 shadow-[0_0_15px_rgba(16,185,129,0.25)] hover:shadow-[0_0_20px_rgba(16,185,129,0.4)] disabled:opacity-50"
                >
                  {isSubmitting ? 'Submitting Application...' : 'Apply for Pilot Cohort'}
                </button>
              </form>
            )}
          </div>
        </section>

      </div>
    </div>
  );
}
