export default function RealEstateInsightsSection() {
  return (
    <div className="space-y-32 py-24 bg-surface-container-low">


      {/* Feature 2: Executive Confidence */}
      <section className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
        <div className="order-2 lg:order-1 relative">
          <div className="absolute inset-0 bg-secondary/5 blur-[100px] rounded-full"></div>
          <div className="relative z-10 bg-surface rounded-xl shadow-2xl border border-outline-variant/20 overflow-hidden flex flex-col h-[500px]">
            <div className="p-4 border-b border-outline-variant/20 flex items-center justify-between bg-surface-container">
              <div className="flex gap-2 items-center">
                <span className="material-symbols-outlined text-secondary">forum</span>
                <span className="font-semibold text-lg">Market Analysis</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-on-surface-variant">
                <span className="material-symbols-outlined text-sm">history</span>
                <div className="w-6 h-6 bg-tertiary rounded-full flex items-center justify-center text-on-tertiary text-xs font-bold">A</div>
              </div>
            </div>

            <div className="p-6 relative flex-grow bg-surface-container-low overflow-y-auto space-y-6 text-sm">
              <div className="flex gap-4">
                <div className="w-8 h-8 rounded-full bg-secondary-container flex items-center justify-center shrink-0">
                  <span className="text-on-secondary-container font-bold text-xs">AM</span>
                </div>
                <div className="bg-surface p-4 rounded-xl rounded-tl-none border border-outline-variant/20 shadow-sm">
                  <p className="font-semibold mb-1">Alex Meyer</p>
                  <p className="text-on-surface-variant">Which property types have the longest days on market due to pricing mismatch?</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center shrink-0 border border-primary/30">
                  <span className="material-symbols-outlined text-primary text-sm">magic_button</span>
                </div>
                <div className="bg-surface-container p-4 rounded-xl rounded-tl-none border border-outline-variant/10 shadow-sm w-full">
                  <p className="text-on-surface-variant italic mb-4">
                    The analysis clearly highlights that the properties with the highest days on market (DOM) due to pricing-related issues are primarily luxury single-family homes and high-end condos.
                  </p>
                  <h4 className="font-bold text-on-surface mb-2">Key Findings:</h4>
                  <ul className="list-disc list-inside space-y-1 text-on-surface-variant mb-4 ml-1">
                    <li>Analysis identifies several segments with high DOM attributed to pricing mismatches.</li>
                    <li>DOM indicators were computed based on price-drop frequency and negative buyer agent feedback.</li>
                  </ul>

                  <div className="bg-surface border border-outline-variant/20 rounded-lg overflow-hidden">
                    <table className="w-full text-left">
                      <thead className="bg-surface-container-highest/50">
                        <tr>
                          <th className="p-2 font-semibold">Property Segment</th>
                          <th className="p-2 font-semibold">Feedback Count</th>
                          <th className="p-2 font-semibold text-right">Avg DOM Impact</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-outline-variant/10">
                        <tr>
                          <td className="p-2 text-on-surface-variant">Luxury Single-Family (&gt;$2M)</td>
                          <td className="p-2 text-on-surface-variant">154</td>
                          <td className="p-2 text-right text-error font-mono">+42 days</td>
                        </tr>
                        <tr>
                          <td className="p-2 text-on-surface-variant">High-End Condos (Downtown)</td>
                          <td className="p-2 text-on-surface-variant">120</td>
                          <td className="p-2 text-right text-error font-mono">+35 days</td>
                        </tr>
                        <tr>
                          <td className="p-2 text-on-surface-variant">Townhouses (Suburbs)</td>
                          <td className="p-2 text-on-surface-variant">85</td>
                          <td className="p-2 text-right text-error font-mono">+18 days</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-4 border-t border-outline-variant/20 bg-surface">
              <div className="bg-surface-container rounded-full px-4 py-2 border border-outline-variant/30 flex justify-between items-center">
                <span className="text-on-surface-variant">Analyze market data, quickly gain insights...</span>
                <span className="material-symbols-outlined text-primary bg-primary/10 rounded-full p-1">arrow_upward</span>
              </div>
            </div>
          </div>
        </div>
        <div className="order-1 lg:order-2 space-y-6">
          <h2 className="text-4xl md:text-5xl font-bold leading-tight">
            Executive confidence
          </h2>
          <p className="text-lg text-on-surface-variant leading-relaxed">
            Get answers to your market questions in seconds with CloseIQ Genie. Real estate leaders get verified answers that win boardroom debates instantly and drive strategic investments.
          </p>
        </div>
      </section>

      {/* Feature 3: Actionable decisions - optional, but user provided 5 screenshots so let's add it */}
      <section className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
        <div className="space-y-6">
          <h2 className="text-4xl md:text-5xl font-bold leading-tight">
            Actionable decisions
          </h2>
          <p className="text-lg text-on-surface-variant leading-relaxed">
            AI Decision Digests spell out the what, why and so what for every stakeholder. Teams execute high-impact portfolio fixes with full context and traceability.
          </p>
        </div>
        <div className="relative">
          <div className="absolute inset-0 bg-tertiary/5 blur-[100px] rounded-full"></div>
          <div className="relative z-10 bg-surface rounded-xl shadow-2xl border border-outline-variant/20 overflow-hidden flex flex-col h-[400px]">
            <div className="p-4 border-b border-outline-variant/20 flex items-center justify-between bg-surface-container">
              <div className="flex gap-2 items-center">
                <span className="material-symbols-outlined text-tertiary">analytics</span>
                <span className="font-semibold text-lg truncate">AI Decision Digest: Lifting ROI</span>
              </div>
            </div>

            <div className="p-6 relative flex-grow bg-surface-container-low overflow-y-auto space-y-4 text-sm">
              <div className="flex gap-3 bg-surface p-3 rounded-lg border border-outline-variant/20 items-center">
                <div className="w-6 h-6 bg-error flex items-center justify-center text-on-error font-bold rounded">1</div>
                <span className="font-medium">Property Value is Won (or Lost) 7–14 Days After Renovation</span>
                <span className="material-symbols-outlined ml-auto text-on-surface-variant text-sm">event</span>
              </div>

              <div className="flex gap-3 bg-surface p-3 rounded-lg border border-outline-variant/20">
                <div className="w-6 h-6 bg-error flex items-center justify-center text-on-error font-bold rounded shrink-0">2</div>
                <div className="space-y-3 flex-grow">
                  <div className="flex justify-between items-center">
                    <span className="font-bold">Virtual Tours Add 20–30 Engagement Points</span>
                    <span className="material-symbols-outlined text-on-surface-variant text-sm">edit</span>
                  </div>
                  <div className="text-xs text-secondary font-bold uppercase">What (What is important)</div>
                  <p className="text-on-surface-variant text-xs">
                    Listings with interactive 3D tours get significantly higher engagement than listings with only photos. Buyers report a +62 increase in confidence vs +38 for traditional viewings. High visual clarity matters more than descriptive text.
                  </p>
                  <div className="flex gap-4">
                    <div className="bg-surface-container p-2 rounded w-1/3">
                      <div className="text-primary font-bold text-lg">+62</div>
                      <div className="text-[10px] text-on-surface-variant leading-tight">Confidence with 3D Tour</div>
                    </div>
                    <div className="bg-surface-container p-2 rounded w-1/3">
                      <div className="text-primary font-bold text-lg">+38</div>
                      <div className="text-[10px] text-on-surface-variant leading-tight">Confidence with Photos</div>
                    </div>
                    <div className="bg-surface-container p-2 rounded w-1/3">
                      <div className="text-error font-bold text-lg">-31</div>
                      <div className="text-[10px] text-on-surface-variant leading-tight">No visuals provided</div>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

    </div>
  )
}
