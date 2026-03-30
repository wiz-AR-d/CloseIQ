export default function KeyFeaturesSection() {
  return (
    <section className="py-24 bg-surface-container-lowest">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold mb-16 text-center">
          Engineered for Momentum
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Feature 1 */}
          <div className="p-8 rounded-2xl bg-surface-container border border-outline-variant/10 hover:border-primary/30 transition-all group">
            <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <span className="material-symbols-outlined text-primary">
                description
              </span>
            </div>
            <h4 className="text-xl font-bold mb-4">Automated Transcription</h4>
            <p className="text-on-surface-variant leading-relaxed">
              Medical-grade accuracy for technical sales calls. Supports 32+ languages and regional accents out of the box.
            </p>
          </div>
          {/* Feature 2 */}
          <div className="p-8 rounded-2xl bg-surface-container border border-outline-variant/10 hover:border-primary/30 transition-all group">
            <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <span className="material-symbols-outlined text-primary">
                sync_alt
              </span>
            </div>
            <h4 className="text-xl font-bold mb-4">CRM Auto-Sync</h4>
            <p className="text-on-surface-variant leading-relaxed">
              Native integrations with Salesforce, HubSpot, and Pipedrive. We write the notes so you don't have to.
            </p>
          </div>
          {/* Feature 3 */}
          <div className="p-8 rounded-2xl bg-surface-container border border-outline-variant/10 hover:border-primary/30 transition-all group">
            <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <span className="material-symbols-outlined text-primary">
                query_stats
              </span>
            </div>
            <h4 className="text-xl font-bold mb-4">Sales Performance Insights</h4>
            <p className="text-on-surface-variant leading-relaxed">
              Predictive forecasting based on actual conversation sentiment rather than just pipeline stages.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
