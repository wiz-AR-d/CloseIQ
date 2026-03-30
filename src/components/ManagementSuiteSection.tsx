export default function ManagementSuiteSection() {
  return (
    <section className="py-24 bg-surface">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
          <span className="text-primary text-sm font-bold tracking-widest uppercase">
            Management Suite
          </span>
          <h2 className="text-4xl md:text-5xl font-bold">
            Instant reports. Actionable insights.
          </h2>
          <p className="text-on-surface-variant">
            Get team-wide performance dashboards and data-backed coaching opportunities from every call.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 h-auto">
          {/* Large Bento Item */}
          <div className="md:col-span-2 bg-surface-container-high rounded-3xl p-8 border border-outline-variant/10 relative overflow-hidden group">
            <div className="relative z-10 space-y-4">
              <h3 className="text-2xl font-bold">Team Leaderboard</h3>
              <p className="text-on-surface-variant max-w-sm">
                Track conversation velocity and closing rates across your entire global sales organization.
              </p>
              <div className="pt-8 space-y-6">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-full bg-surface-variant"></div>
                    <span className="font-medium">Sarah Jenkins</span>
                  </div>
                  <div className="flex items-center gap-8">
                    <span className="text-primary font-bold">92% Quality</span>
                    <span className="text-on-surface-variant">14 Deals</span>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-full bg-surface-variant"></div>
                    <span className="font-medium">Michael Chen</span>
                  </div>
                  <div className="flex items-center gap-8">
                    <span className="text-primary font-bold">88% Quality</span>
                    <span className="text-on-surface-variant">11 Deals</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute -right-20 -bottom-20 w-80 h-80 bg-primary/10 rounded-full blur-[80px]"></div>
          </div>
          {/* Small Bento Item */}
          <div className="bg-primary p-8 rounded-3xl flex flex-col justify-between group">
            <span className="material-symbols-outlined text-on-primary text-4xl">
              trending_up
            </span>
            <div>
              <h3 className="text-3xl font-bold text-on-primary leading-tight mb-2">240%</h3>
              <p className="text-on-primary/80 font-medium">
                Average increase in CRM data accuracy after implementation.
              </p>
            </div>
          </div>
          {/* Another Small Bento Item */}
          <div className="bg-surface-container-high rounded-3xl p-8 border border-outline-variant/10 flex flex-col justify-between">
            <div>
              <h3 className="text-xl font-bold mb-2">Coaching Radar</h3>
              <p className="text-sm text-on-surface-variant">
                AI identifies specific moments in calls where reps can improve pitch delivery.
              </p>
            </div>
            <img
              alt="Coaching Stats"
              className="rounded-xl mt-6 grayscale hover:grayscale-0 transition-all duration-500"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCPtFB6LIKPp4IARnIdRVsIDZQ39hXS7R9Ip9IMa2dNI_6PjK0uEVUywnBifNahvth9FxhIR7EE572KW1fvt_QqQ9mr9Wqq_1_69v2d-8YwF7Pz7SDUa3ruIS5gQHI63gvaPYA4J4Q1U3XZhUKJS6ShmMQ_ErwJ53d1a2y2neZuuq2QKDslqgqr-XkmNdDQRLn8CzDQuhO-QviQFA08bH6uFa1jUG8cH_KctcTBRqt_vsj4cd3so-bDr7uOfeKxCfM-xR1fyq0qdfY"
            />
          </div>
          {/* Long Bento Item */}
          <div className="md:col-span-2 bg-surface-container-high rounded-3xl p-8 border border-outline-variant/10 flex flex-col md:flex-row items-center gap-8">
            <div className="flex-1 space-y-4">
              <h3 className="text-2xl font-bold">Global Transcript Search</h3>
              <p className="text-on-surface-variant text-sm">
                Search across thousands of hours of sales calls for specific keywords like "Competitor X" or "Pricing Objection".
              </p>
              <div className="bg-surface-container-lowest p-3 rounded-lg border border-outline-variant/20 flex items-center gap-3">
                <span className="material-symbols-outlined text-on-surface-variant">
                  search
                </span>
                <span className="text-on-surface-variant text-sm">
                  Search mentions of "Budget"...
                </span>
              </div>
            </div>
            <div className="flex-1 h-32 w-full bg-gradient-to-r from-surface-variant to-transparent rounded-xl border border-outline-variant/10 flex items-center justify-center">
              <span className="text-primary font-mono text-sm tracking-widest">
                ANALYZING 12,402 CALLS...
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
