// @ts-ignore
export default function Footer({ onNavigate }: { onNavigate?: (page: any) => void }) {
  return (
    <footer className="bg-background text-on-surface-variant pt-20 pb-0 border-t border-outline/30 overflow-hidden">
      <div className="max-w-[1200px] mx-auto px-6 grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-12">
        
        {/* Brand Column */}
        <div className="col-span-2 lg:col-span-2">
          <div 
            onClick={() => onNavigate?.('home')}
            className="font-sans font-bold tracking-tight text-3xl font-semibold text-on-background select-none flex items-center gap-3 mb-6 cursor-pointer hover:opacity-85 transition-opacity"
          >
            <img 
              src="/fox_logo.png" 
              alt="CloseIQ Wolf Logo" 
              className="w-8 h-8 object-contain brightness-0 invert" 
            />
            CloseIQ
          </div>
          <p className="text-base leading-relaxed mb-6 max-w-xs font-medium">
            The AI sales onboarding platform that turns ramp time into your competitive moat.
          </p>
          <div className="flex gap-3">
            <a 
              href="https://www.linkedin.com/company/closeiq-ai/?viewAsMember=true" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full border border-outline flex items-center justify-center hover:bg-surface-container-high hover:text-on-background transition-colors text-on-surface-variant"
            >
              <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"/>
              </svg>
            </a>
            <button 
              onClick={() => onNavigate?.('home')}
              className="w-10 h-10 rounded-full border border-outline flex items-center justify-center hover:bg-surface-container-high hover:text-on-background transition-colors text-on-surface-variant"
            >
              <span className="material-symbols-outlined text-lg">language</span>
            </button>
          </div>
        </div>

        {/* Links Columns */}
        <div>
          <h5 className="font-semibold text-on-background mb-6">Platform</h5>
          <ul className="space-y-4 text-sm font-medium">
            <li><button onClick={() => onNavigate?.('ai-debriefer')} className="hover:text-primary transition-colors text-left">AI Debriefer</button></li>
            <li><button onClick={() => onNavigate?.('ai-persona')} className="hover:text-primary transition-colors text-left">Roleplay Simulator</button></li>
            <li><button onClick={() => onNavigate?.('ai-copilot')} className="hover:text-primary transition-colors text-left">Live Copilot</button></li>
            <li><button onClick={() => onNavigate?.('quality-automation')} className="hover:text-primary transition-colors text-left">Integrations & QA</button></li>
          </ul>
        </div>
        
        <div>
          <h5 className="font-semibold text-on-background mb-6">Company</h5>
          <ul className="space-y-4 text-sm font-medium">
            <li><button onClick={() => onNavigate?.('company')} className="hover:text-primary transition-colors text-left">About Us</button></li>
          </ul>
        </div>

        {/* Legal Column */}
        <div>
          <h5 className="font-semibold text-on-background mb-6">Legal</h5>
          <ul className="space-y-4 text-sm font-medium">
            <li><button onClick={() => onNavigate?.('privacy')} className="hover:text-primary transition-colors text-left">Privacy Policy</button></li>
            <li><button onClick={() => onNavigate?.('terms')} className="hover:text-primary transition-colors text-left">Terms of Service</button></li>
            <li><button onClick={() => onNavigate?.('security')} className="hover:text-primary transition-colors text-left">Security Policy</button></li>
          </ul>
        </div>

      </div>
      
      <div className="max-w-[1200px] mx-auto px-6 mt-20 pt-8 border-t border-outline/30 flex flex-col md:flex-row justify-between items-center gap-4 text-sm font-medium relative z-10">
        <p>© 2026 CloseIQ, Inc. All rights reserved.</p>
        <div className="flex gap-6">
          <span>System Status: <span className="text-emerald-500">100% Operational</span></span>
        </div>
      </div>
      
      {/* Massive Screen-Spanning Brand Text */}
      <div className="w-full overflow-hidden flex justify-center mt-16 h-[14vw] items-start pointer-events-none">
        <h1 
          className="text-[24vw] leading-[0.75] font-sans font-bold tracking-tighter text-[#059669] select-none text-center animate-pulse duration-3000"
          style={{ textShadow: '0 0 15px rgba(16, 185, 129, 0.8), 0 0 30px rgba(16, 185, 129, 0.5)' }}
        >
          CloseIQ
        </h1>
      </div>
    </footer>
  );
}
