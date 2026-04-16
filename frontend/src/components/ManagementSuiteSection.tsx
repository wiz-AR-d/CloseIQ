import AianiImage from '../Aiani.png';

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
          {/* Small Bento Item Image */}
          <div className="flex justify-center items-center h-full">
            <img
              alt="Data Accuracy Insights"
              className="w-full h-full object-cover rounded-3xl border border-outline-variant/20 shadow-xl"
              src={AianiImage}
            />
          </div>
          {/* Another Small Bento Item */}
          <div className="bg-surface-container-high rounded-3xl p-8 border border-outline-variant/10 flex flex-col justify-between">
            <div>
              <h3 className="text-xl font-bold mb-2">Coaching Radar</h3>
              <p className="text-sm text-on-surface-variant">
                AI identifies specific moments in calls where reps can improve pitch delivery.
              </p>
            </div>
            <div className="mt-6 flex-grow flex flex-col justify-end space-y-3 bg-surface p-4 rounded-xl border border-outline-variant/10 shadow-inner">
              <div className="space-y-1">
                <div className="flex items-center justify-between text-xs">
                  <span className="text-on-surface-variant font-medium">Objection Handling</span>
                  <span className="text-primary font-bold">92%</span>
                </div>
                <div className="w-full bg-surface-container-highest h-1.5 rounded-full overflow-hidden">
                  <div className="bg-primary h-full w-[92%] rounded-full opacity-90"></div>
                </div>
              </div>

              <div className="space-y-1">
                <div className="flex items-center justify-between text-xs">
                  <span className="text-on-surface-variant font-medium">Pacing & Pitch</span>
                  <span className="text-secondary font-bold">78%</span>
                </div>
                <div className="w-full bg-surface-container-highest h-1.5 rounded-full overflow-hidden">
                  <div className="bg-secondary h-full w-[78%] rounded-full opacity-90"></div>
                </div>
              </div>

              <div className="space-y-1">
                <div className="flex items-center justify-between text-xs">
                  <span className="text-on-surface-variant font-medium">Active Listening</span>
                  <span className="text-error font-bold">45%</span>
                </div>
                <div className="w-full bg-surface-container-highest h-1.5 rounded-full overflow-hidden">
                  <div className="bg-error h-full w-[45%] rounded-full opacity-90"></div>
                </div>
              </div>
              
              <div className="mt-2 text-[10px] text-error flex gap-1 items-start bg-error/10 p-2 rounded-lg border border-error/20 leading-tight">
                 <span className="material-symbols-outlined text-[14px]">warning</span>
                 <span>Rep spoke 65% of the time during the demo. Coach to listen more.</span>
              </div>
            </div>
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
