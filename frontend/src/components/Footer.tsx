interface FooterProps {
  onNavigate?: (page: 'home' | 'privacy' | 'terms' | 'contact' | 'security') => void;
}

export default function Footer({ onNavigate }: FooterProps) {
  return (
    <footer className="w-full py-12 border-t border-outline-variant/20 bg-surface-container-lowest">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8">
        <div 
          onClick={() => onNavigate?.('home')}
          className="text-primary font-bold text-xl cursor-pointer select-none flex items-center gap-2"
        >
          <img src="/fox_logo.png" alt="CloseIQ Logo" className="h-7 w-auto object-contain" />
          CloseIQ
        </div>
        <div className="flex flex-wrap justify-center gap-8">
          <button
            className="font-['Inter'] text-sm text-on-surface-variant hover:text-primary transition-colors focus:outline-none"
            onClick={() => onNavigate?.('privacy')}
          >
            Privacy Policy
          </button>
          <button
            className="font-['Inter'] text-sm text-on-surface-variant hover:text-primary transition-colors focus:outline-none"
            onClick={() => onNavigate?.('terms')}
          >
            Terms of Service
          </button>
          <button
            className="font-['Inter'] text-sm text-on-surface-variant hover:text-primary transition-colors focus:outline-none"
            onClick={() => onNavigate?.('contact')}
          >
            Contact
          </button>
          <button
            className="font-['Inter'] text-sm text-on-surface-variant hover:text-primary transition-colors focus:outline-none"
            onClick={() => onNavigate?.('security')}
          >
            Security
          </button>
        </div>
        <div className="font-['Inter'] text-sm text-on-surface-variant">
          © 2026 CloseIQ. All rights reserved.
        </div>
      </div>
    </footer>
  )
}
