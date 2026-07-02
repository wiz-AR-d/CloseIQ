interface PrivacyPolicyProps {
  onBack: () => void;
}

export default function PrivacyPolicy({ onBack }: PrivacyPolicyProps) {
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
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-on-surface">Privacy Policy</h1>
          <p className="text-on-surface-variant leading-relaxed text-lg md:text-xl font-medium">
            At CloseIQ, we are committed to protecting the privacy of your conversation data, sales transcripts, and integration metadata. We design our systems with strict security safeguards so that your data remains confidential.
          </p>
        </div>

        {/* Policy Content */}
        <div className="space-y-8 text-base md:text-lg leading-relaxed text-on-surface-variant/90 font-medium">
          <section className="space-y-3">
            <h2 className="text-2xl font-bold text-on-surface">1. Data Collection & Usage</h2>
            <p>
              To deliver live obection guidance, generate practice sandboxes, and perform automated reviews, we process:
            </p>
            <ul className="list-disc pl-5 space-y-1.5">
              <li><strong>Call Audio & Transcripts:</strong> Streamed temporarily to generate real-time playbooks and coaching metrics.</li>
              <li><strong>CRM Integration Metadata:</strong> Basic details (e.g., deal stage, size, and competitor tags) synced from your sales platform to contextualize our cues.</li>
            </ul>
            <p>
              We only collect information strictly required to run the platform. We do not sell, rent, or trade your transcripts, conversation logs, or deal details to any third-party advertising network or data broker.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-2xl font-bold text-on-surface">2. Absolute Model Training Isolation</h2>
            <p>
              Your conversations are strictly your proprietary data. <strong>CloseIQ does not train, fine-tune, or adapt any artificial intelligence or machine learning models using your call audio, transcripts, or sales conversations.</strong> All inference is executed in secure, isolated runtime environments with zero data leakage.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-2xl font-bold text-on-surface">3. Hosting & Security Infrastructure</h2>
            <p>
              All customer databases, user records, and call logs are hosted in secure production cloud datacenters (managed by premium providers like AWS and Supabase). Access is strictly guarded with multi-factor authentication, row-level database tenant isolation, and encryption protocols.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-2xl font-bold text-on-surface">4. Account Termination & Data Deletion</h2>
            <p>
              Organizations retain full ownership of their data. Upon cancellation or subscription termination, all stored transcripts, audio fragments, and sync records are permanently purged from our databases and cloud storage systems within 48 hours.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-2xl font-bold text-on-surface">5. Contact and Inquiries</h2>
            <p>
              For privacy-related inquiries or data deletion requests, please contact our support team directly via our website's contact form.
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
