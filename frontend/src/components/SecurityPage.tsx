interface SecurityPageProps {
  onBack: () => void;
}

export default function SecurityPage({ onBack }: SecurityPageProps) {
  return (
    <div className="min-h-screen bg-background text-on-surface py-24 px-6">
      <div className="max-w-3xl mx-auto space-y-12">
        {/* Navigation / Header */}
        <div className="flex justify-between items-center pb-6 border-b border-outline-variant/30">
          <button 
            onClick={onBack}
            className="flex items-center gap-2 text-sm font-semibold text-primary hover:text-primary-dim transition-colors"
          >
            <span className="material-symbols-outlined text-sm">arrow_back</span>
            Back to home
          </button>
          <span className="text-xs text-on-surface-variant font-mono">Last Updated: June 20, 2026</span>
        </div>

        {/* Title */}
        <div className="space-y-4">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-on-surface">Security Statement</h1>
          <p className="text-on-surface-variant leading-relaxed text-lg md:text-xl font-medium">
            How we protect your data. Simple, clear, and transparent.
          </p>
        </div>

        {/* Security Content */}
        <div className="space-y-8 text-base md:text-lg leading-relaxed text-on-surface-variant/90 font-medium">
          <section className="space-y-3">
            <h2 className="text-2xl font-bold text-on-surface">1. Encryption in Transit & Rest</h2>
            <p>
              Your data is protected at every stage. All web traffic to the CloseIQ dashboard is encrypted using **TLS 1.3** protocols (HTTPS). All backend database records and transcript storage archives are encrypted at rest using **AES-256** standards.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-2xl font-bold text-on-surface">2. Absolute Model Training Isolation</h2>
            <p>
              We prioritize the privacy of your customer conversations. <strong>CloseIQ does not train, fine-tune, or adapt machine learning or artificial intelligence models on your call audio, transcripts, or sales conversations.</strong> Your call logs remain strictly isolated to your organization.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-2xl font-bold text-on-surface">3. Tenant Separation & Database Isolation</h2>
            <p>
              We implement Row-Level Security (RLS) rules directly at the database engine level. This ensures complete multi-tenant isolation, making it mathematically impossible for queries from one organization to access or reference the transcripts, objections, or playbooks of another.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-2xl font-bold text-on-surface">4. Reporting Vulnerabilities</h2>
            <p>
              If you identify any security vulnerability, technical exploit, or data leak, please report it to our engineering team immediately. You can submit details securely through our website's contact form.
            </p>
          </section>
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
