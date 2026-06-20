interface TermsOfServiceProps {
  onBack: () => void;
}

export default function TermsOfService({ onBack }: TermsOfServiceProps) {
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
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-on-surface">Terms of Service</h1>
          <p className="text-on-surface-variant leading-relaxed text-base">
            These terms govern your use of the CloseIQ platform and services. By accessing or using CloseIQ, you agree to comply with these terms.
          </p>
        </div>

        {/* Terms Content */}
        <div className="space-y-8 text-sm leading-relaxed text-on-surface-variant">
          <section className="space-y-3">
            <h2 className="text-xl font-bold text-on-surface">1. Account & Usage</h2>
            <p>
              When registering for CloseIQ, you agree to provide accurate and complete information. You are responsible for maintaining the security of your credentials and account access permissions.
            </p>
            <p>
              You agree not to use the CloseIQ platform for any unlawful purpose, nor to attempt to probe, scan, or compromise our infrastructure, perform excessive automated queries, or reverse-engineer our platform components.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-on-surface">2. Consent & Legal Recording Disclosures</h2>
            <p>
              CloseIQ provides conversation transcription and analysis. In many jurisdictions, recording or transcribing active phone calls or virtual meetings requires you to disclose the recording and obtain appropriate consent.
            </p>
            <p>
              You represent and warrant that your team will provide all required disclosures and secure necessary buyer consents before using CloseIQ's live call guidance integrations. CloseIQ assumes no liability for compliance failures on your behalf.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-on-surface">3. Service Uptime</h2>
            <p>
              We host CloseIQ on high-availability cloud infrastructure and aim to maintain standard commercial availability. We do not guarantee uninterrupted platform access or zero-latency audio streaming under all conditions, and reserve the right to perform scheduled maintenance.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-on-surface">4. Disclaimer of Warranty</h2>
            <p>
              CloseIQ provides live suggestions, object battle cards, and coaching playbooks based on automated transcript parsing. While we strive to maximize the accuracy of these suggestions, we make no guarantees regarding sales conversions, deal outcomes, or buyer response changes. The platform is provided "as is" without warranties of any kind.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-on-surface">5. Subscriptions & Billing</h2>
            <p>
              We charge subscription fees based on monthly or annual commitment terms. You can cancel your subscription at any time. Accounts will remain active until the end of the current billing cycle. For billing corrections or refunds, please reach out to our team via our standard contact form.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-on-surface">6. Governing Law</h2>
            <p>
              These Terms of Service are governed by and construed in accordance with the laws applicable in Bengaluru, India, without giving effect to conflicts of laws principles.
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
