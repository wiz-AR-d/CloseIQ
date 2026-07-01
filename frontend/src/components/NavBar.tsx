import { useState, useEffect } from 'react';

interface NavBarProps {
  currentPage: 'home' | 'ramp-time' | 'coaching' | 'quality-automation' | 'pricing' | 'contact' | 'security' | 'privacy' | 'terms';
  onNavigate?: (page: 'home' | 'ramp-time' | 'coaching' | 'quality-automation' | 'pricing' | 'contact' | 'security' | 'privacy' | 'terms') => void;
}

export default function NavBar({ currentPage, onNavigate }: NavBarProps) {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Ramp Accelerator', page: 'ramp-time' as const },
    { label: 'Sales Coaching', page: 'coaching' as const },
    { label: 'QA & Compliance', page: 'quality-automation' as const },
    { label: 'Pricing Plans', page: 'pricing' as const },
  ];

  return (
    <nav className={`fixed top-0 w-full z-50 bg-background border-b-4 border-black transition-all ${isScrolled ? 'py-2' : 'py-4'}`}>
      <div className="flex justify-between items-center max-w-[1400px] mx-auto px-6">
        {/* Left Side: Logo */}
        <div className="flex items-center gap-10">
          <div 
            onClick={() => onNavigate?.('home')}
            className="text-3xl font-black tracking-tighter uppercase text-black cursor-pointer select-none flex items-center gap-3"
          >
            <span className="material-symbols-outlined text-[32px] font-black">token</span>
            CLOSEIQ
          </div>
          
          {/* Nav Links */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <button 
                key={link.page}
                onClick={() => onNavigate?.(link.page)}
                className={`text-sm font-black tracking-widest uppercase transition-all py-1 ${currentPage === link.page ? 'text-primary border-b-4 border-primary' : 'text-black hover:text-primary hover:border-b-4 hover:border-black border-b-4 border-transparent'}`}
              >
                {link.label}
              </button>
            ))}
          </div>
        </div>

        {/* Right Side: Actions */}
        <div className="flex items-center gap-6">
          <button 
            onClick={() => onNavigate?.('contact')}
            className="px-6 py-2.5 bg-black text-white font-black uppercase text-sm border-2 border-black hover:bg-primary hover:border-primary transition-colors flex items-center gap-2"
          >
            <span className="material-symbols-outlined text-[18px]">bolt</span>
            Get Demo
          </button>
        </div>
      </div>
    </nav>
  )
}
