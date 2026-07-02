import { useState } from 'react';

interface PricingPageProps {
  onBack: () => void;
  onOpenPopup?: () => void;
}

export default function PricingPage({ onBack, onOpenPopup }: PricingPageProps) {
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'annual'>('annual');
  const [teamSize, setTeamSize] = useState<number>(20);

  // Compute pricing details based on team size and cycle
  const getPricingDetails = (size: number, cycle: string) => {
    let perUserPrice = 55; // default Pro per user monthly
    if (size <= 5) perUserPrice = 39; // Starter tier
    else if (size > 50) perUserPrice = 79; // Enterprise tier

    // Apply annual discount
    const monthlyRate = cycle === 'annual' ? perUserPrice * 0.8 : perUserPrice;
    const totalMonthly = Math.round(monthlyRate * size);
    const totalAnnual = totalMonthly * 12;

    // ROI estimations
    const hoursSavedPerRepYear = 48; // 4 hours/month saved in logging/auditing
    const totalHoursSaved = hoursSavedPerRepYear * size;
    const dollarSavings = size * 3200; // estimated ramp ROI savings ($3,200 per rep)

    return {
      perUser: Math.round(monthlyRate),
      monthlyTotal: totalMonthly,
      annualTotal: totalAnnual,
      hoursSaved: totalHoursSaved,
      savingsDollar: dollarSavings
    };
  };

  const details = getPricingDetails(teamSize, billingCycle);

  const plans = [
    {
      name: "Starter",
      badge: "Small Teams",
      price: billingCycle === 'annual' ? 32 : 39,
      description: "Accelerate onboarding and call auditing for growing sales groups.",
      features: [
        "Interactive Practice Sandbox (up to 3 tracks)",
        "Real-Time objection helper (10 objection cues)",
        "100% transcript evaluation logging",
        "Weekly performance scorecard summary",
        "Standard Zoom & Teams integrations"
      ],
      cta: "Start Free Trial",
      primary: false
    },
    {
      name: "Professional",
      badge: "Most Popular",
      price: billingCycle === 'annual' ? 44 : 55,
      description: "Scale sales coaching automation and audit compliance across the floor.",
      features: [
        "Everything in Starter plan",
        "Unlimited Practice Sandbox scenarios",
        "Speech pacing & nervous fillers diagnostics",
        "Automated custom training module extractor",
        "Full Salesforce & HubSpot auto-sync pipelines",
        "Manager coaching dashboard and radar alerts"
      ],
      cta: "Upgrade to Pro",
      primary: true
    },
    {
      name: "Enterprise",
      badge: "Global Sales Organizations",
      price: billingCycle === 'annual' ? 64 : 79,
      description: "Complete compliance audit enforcement and SSO controls.",
      features: [
        "Everything in Professional plan",
        "Data isolation isolation partitions",
        "Okta & Azure AD Single Sign-On (SSO)",
        "Custom PII scrubbing filters",
        "Dedicated sales enablement customer support manager",
        "Custom SLA and uptime guarantees"
      ],
      cta: "Schedule Enterprise Review",
      primary: false
    }
  ];

  return (
    <div className="min-h-screen bg-background text-on-surface pt-32 pb-24 px-6 transition-colors duration-300">
      {/* Decorative background shapes */}
      <div className="absolute top-40 right-10 w-96 h-96 bg-primary/10 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-secondary/5 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-6xl mx-auto space-y-16 relative z-10">
        
        {/* Navigation Breadcrumb */}
        <div className="flex justify-between items-center pb-6 border-b border-outline-variant/15">
          <button 
            onClick={onBack}
            className="flex items-center gap-2 text-sm font-semibold text-primary hover:text-primary-dim transition-all group"
          >
            <span className="material-symbols-outlined text-sm transition-transform group-hover:-translate-x-1">arrow_back</span>
            Back to Home
          </button>
          <span className="text-xs bg-primary/15 text-primary border border-primary/20 px-3 py-1 rounded-full font-semibold font-mono tracking-wide uppercase">
            Flexible Plans
          </span>
        </div>

        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
            Transparent pricing for <br />
            <span className="bg-gradient-to-r from-primary via-primary-dim to-secondary bg-clip-text text-transparent">
              teams of all sizes.
            </span>
          </h1>
          <p className="text-xl text-on-surface-variant max-w-2xl mx-auto leading-relaxed font-medium">
            Choose the plan that fits your quota goals. All contracts include direct Zoom recordings integration and automated transcripts.
          </p>

          {/* Monthly/Annual billing switcher toggle */}
          <div className="pt-4 flex justify-center items-center gap-4">
            <span className={`text-sm font-bold transition-all ${billingCycle === 'monthly' ? 'text-primary' : 'text-on-surface-variant'}`}>Bill Monthly</span>
            <button 
              onClick={() => setBillingCycle(prev => prev === 'monthly' ? 'annual' : 'monthly')}
              className="w-14 h-8 bg-surface-container-high border border-outline-variant/20 rounded-full p-1 relative transition-colors"
            >
              <div className={`w-6 h-6 bg-primary rounded-full shadow-md transition-all ${billingCycle === 'annual' ? 'translate-x-6' : 'translate-x-0'}`}></div>
            </button>
            <div className="flex items-center gap-1.5">
              <span className={`text-sm font-bold transition-all ${billingCycle === 'annual' ? 'text-primary' : 'text-on-surface-variant'}`}>Bill Annually</span>
              <span className="text-xs bg-emerald-500/10 text-emerald-500 border border-emerald-500/20 px-2 py-0.5 rounded font-bold font-mono uppercase tracking-wider">Save 20%</span>
            </div>
          </div>
        </div>

        {/* Section 1: ROI Interactive Calculator */}
        <section className="bg-surface-container-low rounded-[32px] border border-outline-variant/20 p-8 shadow-xl max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            
            {/* Range Input Slider */}
            <div className="md:col-span-6 space-y-6">
              <div>
                <span className="text-xs font-bold tracking-widest text-primary uppercase font-mono bg-primary/10 px-2.5 py-1 rounded">Interactive ROI Tool</span>
                <h3 className="text-2xl font-bold text-on-surface mt-2.5">Estimate Your Savings</h3>
                <p className="text-sm text-on-surface-variant mt-1">Adjust your representative count to forecast CloseIQ billing costs and team savings.</p>
              </div>

              <div className="space-y-3">
                <div className="flex justify-between text-base font-bold">
                  <span className="text-on-surface-variant">Team Size (Reps)</span>
                  <span className="text-primary font-bold">{teamSize} Reps</span>
                </div>
                <input 
                  type="range" 
                  min="2" 
                  max="150" 
                  value={teamSize}
                  onChange={(e) => setTeamSize(parseInt(e.target.value))}
                  className="w-full h-2 bg-surface-container-high rounded-lg appearance-none cursor-pointer accent-primary"
                />
                <div className="flex justify-between text-xs text-on-surface-variant font-mono font-bold">
                  <span>2 Reps</span>
                  <span>150 Reps</span>
                </div>
              </div>
            </div>

            {/* Calculations Display Card */}
            <div className="md:col-span-6 bg-surface border border-outline-variant/35 rounded-2xl p-6 shadow-sm grid grid-cols-2 gap-4">
              <div className="p-4 bg-surface-container-low rounded-xl border border-outline-variant/10 text-center">
                <span className="text-xs text-on-surface-variant block uppercase tracking-wider font-mono">Estimated Billing</span>
                <span className="text-2xl font-bold text-on-surface">${details.monthlyTotal}</span>
                <span className="text-xs text-on-surface-variant block mt-0.5">/month total</span>
              </div>

              <div className="p-4 bg-surface-container-low rounded-xl border border-outline-variant/10 text-center">
                <span className="text-xs text-on-surface-variant block uppercase tracking-wider font-mono">Cost Per User</span>
                <span className="text-2xl font-bold text-primary">${details.perUser}</span>
                <span className="text-xs text-on-surface-variant block mt-0.5">/month/rep</span>
              </div>

              <div className="p-4 bg-surface-container-low rounded-xl border border-outline-variant/10 text-center col-span-2 space-y-1">
                <div className="flex justify-between text-xs text-on-surface-variant font-semibold">
                  <span>Manager Hours Reclaimed:</span>
                  <span className="text-primary font-bold">+{details.hoursSaved} hrs/year</span>
                </div>
                <div className="flex justify-between text-xs text-on-surface-variant font-semibold">
                  <span>Ramp Onboarding Savings:</span>
                  <span className="text-emerald-500 font-bold">+${details.savingsDollar.toLocaleString()} value</span>
                </div>
              </div>
            </div>

          </div>
        </section>

        {/* Section 2: Standard Plan Cards */}
        <section className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {plans.map((plan, idx) => (
            <div 
              key={idx}
              className={`p-8 rounded-[28px] border flex flex-col justify-between transition-all relative ${plan.primary ? 'bg-surface border-primary shadow-xl ring-1 ring-primary' : 'bg-surface-container border-outline-variant/15 hover:border-primary/20 shadow-sm'}`}
            >
              {plan.primary && (
                <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-primary text-on-primary text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full shadow-lg font-mono">
                  {plan.badge}
                </span>
              )}
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-bold text-on-surface">{plan.name}</h3>
                  <p className="text-sm md:text-base text-on-surface-variant/90 mt-1.5 leading-relaxed font-medium">{plan.description}</p>
                </div>

                <div className="flex items-baseline gap-1 border-b border-outline-variant/10 pb-6">
                  <span className="text-4xl font-extrabold text-on-surface">${plan.price}</span>
                  <span className="text-xs text-on-surface-variant">/user/month</span>
                </div>

                <ul className="space-y-4 text-sm font-medium text-on-surface-variant">
                  {plan.features.map((feature, fIdx) => (
                    <li key={fIdx} className="flex gap-2.5 items-start">
                      <span className="material-symbols-outlined text-primary text-sm shrink-0">check_circle</span>
                      <span className="leading-relaxed">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-8">
                <button
                  onClick={onOpenPopup}
                  className={`w-full py-3 rounded-xl text-sm font-bold transition-all shadow ${plan.primary ? 'bg-primary text-on-primary hover:brightness-110' : 'bg-surface hover:bg-surface-container-high border border-outline-variant/50 text-on-surface'}`}
                >
                  {plan.cta}
                </button>
              </div>
            </div>
          ))}
        </section>

      </div>
    </div>
  );
}
