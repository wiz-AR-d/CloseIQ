export default function LeadershipSection() {
  return (
    <section className="py-24 bg-surface">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
        <div className="order-2 lg:order-1">
          <div className="relative rounded-2xl overflow-hidden bg-surface-container-low border border-outline-variant/10">
            <img
              alt="Leadership Dashboard"
              className="w-full h-auto"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCe9KzYjYvpXkfnu9FWv7XmPyapM11WRNduC4DUsNha4-HQ2l0tb8cKk0Ic8YiQEbn1LC_lNf4GVHkc2qTeYnDV_nwbCvRSZ2D5wR1EBlfuEzjhl03Z0MLpoRHdHa957RK5yP2FLFs-teLv19AcIhUfRau-EdsE6GKgV59D1rZu5JkpIGX47z57970rOS49CsnaUxr9QctjLnEyPSebRO20Ca6kZucJNbEvbwm4He0ex-IV56TJOIXX_vGA4X-y6eCnRU0oDFOl9tY"
            />
            <div className="absolute top-4 right-4 bg-primary text-on-primary px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-tighter">
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
