interface FooterProps {
  onNavigate?: (page: 'home' | 'ramp-time' | 'coaching' | 'quality-automation' | 'pricing' | 'contact' | 'security' | 'privacy' | 'terms') => void;
}

export default function Footer({ onNavigate }: FooterProps) {
  return (
    <footer className="w-full py-16 bg-white border-t-4 border-black text-black">
      <div className="max-w-[1400px] mx-auto px-6 grid grid-cols-1 md:grid-cols-12 gap-10">
        
        {/* Logo and Copyright column */}
        <div className="md:col-span-4 space-y-6">
          <div 
            onClick={() => onNavigate?.('home')}
            className="text-black font-black text-3xl cursor-pointer select-none flex items-center gap-2 uppercase tracking-tighter"
          >
            <span className="material-symbols-outlined text-[32px] font-black">token</span>
            <span>CloseIQ</span>
          </div>
          <p className="text-sm font-bold uppercase leading-relaxed max-w-sm border-l-4 border-primary pl-4">
            CloseIQ surfaces active speech cues during live customer calls and translates raw audio transcript analysis into personalized sales playbooks.
          </p>
          <div className="text-sm font-black uppercase pt-4 border-t-4 border-black inline-block mt-4">
            © 2026 CLOSEIQ. ALL RIGHTS RESERVED.
          </div>
        </div>

        {/* Product Column */}
        <div className="md:col-span-3 space-y-6">
          <h4 className="text-lg font-black uppercase tracking-wider text-primary border-b-4 border-black pb-2 inline-block">Product Features</h4>
          <div className="flex flex-col gap-4">
            <button
              onClick={() => onNavigate?.('ramp-time')}
              className="text-sm text-black hover:text-primary transition-colors text-left font-black uppercase tracking-wider"
            >
              Ramp Accelerator
            </button>
            <button
              onClick={() => onNavigate?.('coaching')}
              className="text-sm text-black hover:text-primary transition-colors text-left font-black uppercase tracking-wider"
            >
              Sales Coaching
            </button>
            <button
              onClick={() => onNavigate?.('quality-automation')}
              className="text-sm text-black hover:text-primary transition-colors text-left font-black uppercase tracking-wider"
            >
              QA & Compliance
            </button>
            <button
              onClick={() => onNavigate?.('pricing')}
              className="text-sm text-black hover:text-primary transition-colors text-left font-black uppercase tracking-wider"
            >
              Pricing Plans
            </button>
          </div>
        </div>

        {/* Trust & Legal Column */}
        <div className="md:col-span-3 space-y-6">
          <h4 className="text-lg font-black uppercase tracking-wider text-primary border-b-4 border-black pb-2 inline-block">Trust & Security</h4>
          <div className="flex flex-col gap-4">
            <button
              onClick={() => onNavigate?.('security')}
              className="text-sm text-black hover:text-primary transition-colors text-left font-black uppercase tracking-wider"
            >
              Security Specs
            </button>
            <button
              onClick={() => onNavigate?.('privacy')}
              className="text-sm text-black hover:text-primary transition-colors text-left font-black uppercase tracking-wider"
            >
              Privacy Policy
            </button>
            <button
              onClick={() => onNavigate?.('terms')}
              className="text-sm text-black hover:text-primary transition-colors text-left font-black uppercase tracking-wider"
            >
              Terms of Service
            </button>
          </div>
        </div>

        {/* Contact/Support Column */}
        <div className="md:col-span-2 space-y-6">
          <h4 className="text-lg font-black uppercase tracking-wider text-primary border-b-4 border-black pb-2 inline-block">Company</h4>
          <div className="flex flex-col gap-4">
            <button
              onClick={() => onNavigate?.('contact')}
              className="text-sm text-black hover:text-primary transition-colors text-left font-black uppercase tracking-wider"
            >
              Book a Demo
            </button>
            <button
              onClick={() => onNavigate?.('contact')}
              className="text-sm text-black hover:text-primary transition-colors text-left font-black uppercase tracking-wider"
            >
              Customer Support
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
}
