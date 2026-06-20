export default function KeyFeaturesSection() {
  return (
    <section className="py-24 bg-surface-container-lowest">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl md:text-5xl font-bold mb-4 text-center text-on-surface">
          Align your sales team around what actually works.
        </h2>
        <p className="text-center text-on-surface-variant max-w-2xl mx-auto mb-16 leading-relaxed">
          CloseIQ surfaces subtle cues during live customer calls, then automatically translates transcript feedback into structured team coaching playbooks—no manual CRM logging required.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          
          {/* Feature 1 */}
          <div className="p-6 rounded-2xl bg-surface border border-outline-variant/10 hover:border-primary/30 transition-all group shadow-sm flex flex-col justify-between min-h-[260px]">
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                <span className="material-symbols-outlined text-primary">
                  hearing
                </span>
              </div>
              <h4 className="text-lg font-bold text-on-surface">Live objection cues</h4>
              <p className="text-xs text-on-surface-variant leading-relaxed">
                Soft, real-time reminders that slide in when pricing or integrations are mentioned, keeping reps aligned without interrupting the call flow.
              </p>
            </div>
            <div className="text-[10px] text-primary font-bold uppercase tracking-wider font-mono pt-4">In-Call Cues</div>
          </div>

          {/* Feature 2 */}
          <div className="p-6 rounded-2xl bg-surface border border-outline-variant/10 hover:border-primary/30 transition-all group shadow-sm flex flex-col justify-between min-h-[260px]">
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                <span className="material-symbols-outlined text-primary">
                  menu_book
                </span>
              </div>
              <h4 className="text-lg font-bold text-on-surface">Auto-built playbooks</h4>
              <p className="text-xs text-on-surface-variant leading-relaxed">
                Translate customer objection transcripts into structured battle cards and competitor pivot libraries automatically.
              </p>
            </div>
            <div className="text-[10px] text-primary font-bold uppercase tracking-wider font-mono pt-4">Knowledge Base</div>
          </div>

          {/* Feature 3 */}
          <div className="p-6 rounded-2xl bg-surface border border-outline-variant/10 hover:border-primary/30 transition-all group shadow-sm flex flex-col justify-between min-h-[260px]">
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                <span className="material-symbols-outlined text-primary">
                  analytics
                </span>
              </div>
              <h4 className="text-lg font-bold text-on-surface">Structured audits</h4>
              <p className="text-xs text-on-surface-variant leading-relaxed">
                Identify objection response quality, pacing, and active listening across all calls, removing the need for random manual audits.
              </p>
            </div>
            <div className="text-[10px] text-primary font-bold uppercase tracking-wider font-mono pt-4">Call Quality</div>
          </div>

          {/* Feature 4 */}
          <div className="p-6 rounded-2xl bg-surface border border-outline-variant/10 hover:border-primary/30 transition-all group shadow-sm flex flex-col justify-between min-h-[260px]">
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                <span className="material-symbols-outlined text-primary">
                  school
                </span>
              </div>
              <h4 className="text-lg font-bold text-on-surface">Interactive practice</h4>
              <p className="text-xs text-on-surface-variant leading-relaxed">
                Let new hires practice real customer pushbacks in safe, self-paced roleplay simulations that score their performance instantly.
              </p>
            </div>
            <div className="text-[10px] text-primary font-bold uppercase tracking-wider font-mono pt-4">Ramp & Practice</div>
          </div>

        </div>
      </div>
    </section>
  );
}
