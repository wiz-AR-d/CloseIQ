export default function LeadershipSection() {
  return (
    <section className="py-24 bg-surface">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
        <div className="order-2 lg:order-1">
          <div className="relative rounded-2xl overflow-hidden bg-surface border border-outline-variant/20 shadow-2xl flex flex-col h-[420px]">
            {/* Header */}
            <div className="p-4 border-b border-outline-variant/20 flex justify-between items-center bg-surface-container-highest">
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-primary text-xl">query_stats</span>
                <span className="font-semibold text-sm text-on-surface tracking-wide">Neural Insights Engine</span>
              </div>
              <div className="flex gap-1.5">
                <span className="w-3 h-3 rounded-full bg-outline-variant/30"></span>
                <span className="w-3 h-3 rounded-full bg-outline-variant/30"></span>
                <span className="w-3 h-3 rounded-full bg-outline-variant/30"></span>
              </div>
            </div>

            {/* Body */}
            <div className="p-6 flex-grow bg-surface-container-low overflow-hidden flex flex-col gap-4">
              
              {/* Top Row: Sentiment & Churn Risk */}
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-surface p-4 rounded-xl border border-outline-variant/10 shadow-sm relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-16 h-16 bg-primary/5 rounded-bl-full"></div>
                  <p className="text-[10px] text-on-surface-variant mb-1 uppercase tracking-wider font-bold">Overall Sentiment</p>
                  <div className="flex items-end gap-2 mt-2">
                    <h3 className="text-3xl font-bold text-primary">76%</h3>
                    <span className="text-xs text-primary mb-1 flex items-center font-medium"><span className="material-symbols-outlined text-[14px]">trending_up</span> +4%</span>
                  </div>
                  <div className="mt-3 w-full bg-surface-container h-1.5 rounded-full overflow-hidden">
                    <div className="bg-primary h-full w-[76%] rounded-full opacity-90"></div>
                  </div>
                </div>

                <div className="bg-surface p-4 rounded-xl border border-outline-variant/10 shadow-sm relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-16 h-16 bg-error/5 rounded-bl-full"></div>
                  <p className="text-[10px] text-on-surface-variant mb-1 uppercase tracking-wider font-bold">Churn Risk Alerts</p>
                  <div className="flex items-end gap-2 mt-2">
                    <h3 className="text-3xl font-bold text-error">12</h3>
                    <span className="text-xs text-error mb-1 flex items-center font-medium"><span className="material-symbols-outlined text-[14px]">trending_down</span> -2%</span>
                  </div>
                  <p className="text-[10px] text-error mt-2 italic leading-tight">Triggered by "competitor pricing".</p>
                </div>
              </div>

              {/* Bottom Section: Feature Gaps */}
              <div className="bg-surface p-5 flex-grow rounded-xl border border-outline-variant/10 shadow-sm flex flex-col justify-center">
                <h4 className="text-[10px] font-bold text-on-surface-variant mb-4 uppercase tracking-wider flex justify-between items-center">
                  <span>Trending Feature Requests</span>
                  <span className="material-symbols-outlined text-sm">tune</span>
                </h4>
                
                <div className="space-y-4">
                  <div className="flex items-center justify-between group">
                    <span className="text-xs font-semibold text-on-surface">SSO Integration</span>
                    <div className="flex items-center gap-3">
                      <span className="text-[10px] text-on-surface-variant font-mono bg-surface-container px-1.5 py-0.5 rounded">48 mentions</span>
                      <div className="w-16 bg-surface-container h-1.5 rounded-full overflow-hidden">
                        <div className="bg-secondary h-full w-[80%] rounded-full opacity-90"></div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between group">
                    <span className="text-xs font-semibold text-on-surface">Custom Dashboards</span>
                    <div className="flex items-center gap-3">
                      <span className="text-[10px] text-on-surface-variant font-mono bg-surface-container px-1.5 py-0.5 rounded">32 mentions</span>
                      <div className="w-16 bg-surface-container h-1.5 rounded-full overflow-hidden">
                        <div className="bg-secondary h-full w-[65%] rounded-full opacity-90"></div>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center justify-between group">
                    <span className="text-xs font-semibold text-on-surface">API Webhooks</span>
                    <div className="flex items-center gap-3">
                      <span className="text-[10px] text-on-surface-variant font-mono bg-surface-container px-1.5 py-0.5 rounded">19 mentions</span>
                      <div className="w-16 bg-surface-container h-1.5 rounded-full overflow-hidden">
                        <div className="bg-secondary h-full w-[40%] rounded-full opacity-90"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="absolute top-3 right-3 bg-primary text-on-primary px-3 py-1 rounded-full text-[9px] font-bold uppercase tracking-widest flex items-center gap-1.5 shadow-lg">
              <span className="w-1.5 h-1.5 rounded-full bg-on-primary animate-pulse"></span>
              Real-Time Sync
            </div>
          </div>
        </div>
        <div className="order-1 lg:order-2 space-y-6">
          <span className="text-primary text-sm font-bold tracking-widest uppercase">
            Leadership Intelligence
          </span>
          <h2 className="text-4xl md:text-5xl font-bold leading-tight">
            Data on what customers <span className="text-primary-dim italic">actually</span> need.
          </h2>
          <p className="text-lg text-on-surface-variant leading-relaxed">
            Heard directly from conversations, at scale. No more guesswork. Our neural engine identifies feature gaps and competitive threats before they hit your churn reports.
          </p>
          <ul className="space-y-4 pt-4">
            <li className="flex items-center gap-3">
              <span className="material-symbols-outlined text-primary">check_circle</span>
              <span className="text-on-surface">Aggregate multi-call sentiment analysis</span>
            </li>
            <li className="flex items-center gap-3">
              <span className="material-symbols-outlined text-primary">check_circle</span>
              <span className="text-on-surface">Automatic product feedback tagging</span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  )
}
