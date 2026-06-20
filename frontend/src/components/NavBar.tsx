import { useEffect } from 'react';

interface NavBarProps {
  onOpenPopup?: () => void;
  onNavigate?: (page: 'home' | 'privacy' | 'terms' | 'contact' | 'security') => void;
}

export default function NavBar({ onOpenPopup, onNavigate }: NavBarProps) {
  useEffect(() => {
    document.documentElement.classList.remove('dark');
  }, []);

  const handleNavLink = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    if (onNavigate) {
      e.preventDefault();
      onNavigate('home');
      setTimeout(() => {
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 50);
    }
  };

  return (
    <nav className="fixed top-0 w-full z-50 bg-background/60 backdrop-blur-xl border-b border-outline-variant/10">
      <div className="flex justify-between items-center max-w-7xl mx-auto px-6 py-4">
        {/* Left Side: Logo */}
        <div className="flex items-center gap-8">
          <div 
            onClick={() => onNavigate?.('home')}
            className="text-2xl font-bold tracking-tighter text-primary flex items-center gap-2 cursor-pointer select-none"
          >
            <img src="/fox_logo.png" alt="CloseIQ Logo" className="h-9 w-auto object-contain" />
            CloseIQ
          </div>
          {/* Nav Links */}
          <div className="hidden md:flex items-center gap-6">
            <a 
              href="#live-copilot" 
              onClick={(e) => handleNavLink(e, 'live-copilot')}
              className="text-sm font-medium text-on-surface-variant hover:text-primary transition-colors"
            >
              Live Guidance
            </a>
            <a 
              href="#ai-coaching" 
              onClick={(e) => handleNavLink(e, 'ai-coaching')}
              className="text-sm font-medium text-on-surface-variant hover:text-primary transition-colors"
            >
              Call Coaching
            </a>
            <a 
              href="#roleplays" 
              onClick={(e) => handleNavLink(e, 'roleplays')}
              className="text-sm font-medium text-on-surface-variant hover:text-primary transition-colors"
            >
              Practice Sandbox
            </a>
            <a 
              href="#battle-cards" 
              onClick={(e) => handleNavLink(e, 'battle-cards')}
              className="text-sm font-medium text-on-surface-variant hover:text-primary transition-colors"
            >
              Playbooks
            </a>
          </div>
        </div>

        {/* Right Side: Actions */}
        <div className="flex items-center gap-4">
          <button 
            onClick={onOpenPopup}
            className="px-6 py-2.5 bg-primary text-on-primary font-bold rounded-full text-sm hover:brightness-110 active:scale-95 transition-all shadow-md"
          >
            Book a Demo
          </button>
        </div>
      </div>
    </nav>
  )
}

