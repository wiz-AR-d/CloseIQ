import { useState, useEffect } from 'react';

interface NavBarProps {
  currentPage: 'home' | 'ramp-time' | 'coaching' | 'ai-debriefer' | 'ai-persona' | 'ai-copilot' | 'quality-automation' | 'pricing' | 'contact' | 'security' | 'privacy' | 'terms' | 'faq' | 'company' | 'pilot-program';
  onNavigate?: (page: 'home' | 'ramp-time' | 'coaching' | 'ai-debriefer' | 'ai-persona' | 'ai-copilot' | 'quality-automation' | 'pricing' | 'contact' | 'security' | 'privacy' | 'terms' | 'faq' | 'company' | 'pilot-program') => void;
  onOpenPopup?: () => void;
}

export default function NavBar({ currentPage, onNavigate, onOpenPopup }: NavBarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-background/90 backdrop-blur-md border-b border-outline/20 py-4' 
        : 'bg-background/80 md:bg-transparent backdrop-blur-md md:backdrop-blur-none border-b border-outline/10 md:border-none py-4 md:py-6'
    }`}>
      <div className="w-full max-w-full px-6 md:px-12 flex justify-between items-center md:grid md:grid-cols-[1fr_auto_1fr]">
        {/* Left Side: Logo */}
        <div 
          onClick={() => {
            onNavigate?.('home');
            setIsMobileMenuOpen(false);
          }}
          className="cursor-pointer select-none flex items-center gap-3 group justify-self-start"
        >
          <img 
            src="/fox_logo.png" 
            alt="CloseIQ Wolf Logo" 
            className="w-9 h-9 object-contain brightness-0 invert group-hover:opacity-80 transition-opacity" 
          />
          <span className="font-sans font-extrabold tracking-tighter text-2xl text-white">CloseIQ</span>
        </div>
        
        {/* Center: Desktop Nav Links */}
        <div className="hidden md:flex items-center gap-8 bg-surface-container-high/50 backdrop-blur-md px-6 py-2 rounded-full border border-outline/30 justify-self-center">
          <button onClick={() => onNavigate?.('home')} className={`text-[15px] font-medium transition-colors ${currentPage === 'home' ? 'text-white' : 'text-on-surface-variant hover:text-white'}`}>Home</button>
          
          {/* Solutions Dropdown */}
          <div className="relative group">
            <button className={`text-[15px] font-medium transition-colors flex items-center gap-1 ${currentPage === 'ramp-time' ? 'text-white' : 'text-on-surface-variant group-hover:text-white'}`}>
              Solutions
              <span className="material-symbols-outlined text-[16px] opacity-70 group-hover:rotate-180 transition-transform duration-300">expand_more</span>
            </button>
            
            {/* Dropdown Menu */}
            <div className="absolute top-full left-1/2 -translate-x-1/2 pt-6 opacity-0 translate-y-2 pointer-events-none group-hover:opacity-100 group-hover:translate-y-0 group-hover:pointer-events-auto transition-all duration-300">
              <div className="bg-[#1C1C1E] border border-white/10 rounded-xl shadow-2xl p-2 w-[220px] flex flex-col gap-1 relative before:absolute before:-top-2 before:left-1/2 before:-translate-x-1/2 before:border-[8px] before:border-transparent before:border-b-[#1C1C1E]">
                <button onClick={() => onNavigate?.('ai-debriefer')} className="text-left px-4 py-2.5 text-[14px] font-medium text-white/80 hover:text-white hover:bg-white/5 rounded-lg transition-colors">AI Debriefer</button>
                <button onClick={() => onNavigate?.('ai-persona')} className="text-left px-4 py-2.5 text-[14px] font-medium text-white/80 hover:text-white hover:bg-white/5 rounded-lg transition-colors">AI Persona</button>
                <button onClick={() => onNavigate?.('ai-copilot')} className="text-left px-4 py-2.5 text-[14px] font-medium text-white/80 hover:text-white hover:bg-white/5 rounded-lg transition-colors">Co-pilot</button>
                <button onClick={() => onNavigate?.('quality-automation')} className="text-left px-4 py-2.5 text-[14px] font-medium text-white/80 hover:text-white hover:bg-white/5 rounded-lg transition-colors">Quality Automation</button>
              </div>
            </div>
          </div>

          <button 
            onClick={() => onNavigate?.('pilot-program')} 
            className={`text-[16px] font-bold px-3.5 py-1 rounded-full transition-all ${
              currentPage === 'pilot-program' 
                ? 'bg-emerald-500 text-black shadow-[0_0_12px_rgba(16,185,129,0.45)]' 
                : 'text-emerald-400 hover:text-emerald-300 bg-emerald-500/10 hover:bg-emerald-500/20 border border-emerald-500/20'
            }`}
          >
            Pilot Program
          </button>
          <button onClick={() => onNavigate?.('faq')} className={`text-[15px] font-medium transition-colors ${currentPage === 'faq' ? 'text-white' : 'text-on-surface-variant hover:text-white'}`}>FAQs</button>
          <button onClick={() => onNavigate?.('company')} className={`text-[15px] font-medium transition-colors ${currentPage === 'company' ? 'text-white' : 'text-on-surface-variant hover:text-white'}`}>Company</button>
        </div>

        {/* Right Side: Actions & Burger Toggle */}
        <div className="flex items-center gap-3 justify-self-end">
          <button 
            onClick={() => {
              onNavigate?.('contact');
              setIsMobileMenuOpen(false);
            }}
            className="hidden sm:inline-block px-4 md:px-5 py-2 md:py-2.5 bg-transparent border border-white/20 text-white font-bold text-[14px] md:text-[15px] rounded-full hover:bg-white/5 transition-colors"
          >
            Contact
          </button>
          <button 
            onClick={() => {
              onOpenPopup?.();
              setIsMobileMenuOpen(false);
            }}
            className="px-4 md:px-6 py-2 md:py-2.5 bg-emerald-500 text-black font-bold text-[14px] md:text-[15px] rounded-full hover:bg-emerald-600 transition-colors shadow-[0_0_15px_rgba(16,185,129,0.3)] hover:shadow-[0_0_20px_rgba(16,185,129,0.5)]"
          >
            Register for Pilot
          </button>
          
          {/* Mobile menu burger toggler */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden flex items-center justify-center w-9 h-9 rounded-full border border-white/10 text-white hover:bg-white/5 transition-colors"
          >
            <span className="material-symbols-outlined text-[20px]">
              {isMobileMenuOpen ? 'close' : 'menu'}
            </span>
          </button>
        </div>
      </div>

      {/* Mobile Nav Menu Drawer */}
      {isMobileMenuOpen && (
        <div className="absolute top-full left-6 right-6 mt-3 bg-[#0A0A0C]/95 backdrop-blur-2xl border border-white/10 rounded-2xl p-6 shadow-2xl flex flex-col gap-4 z-50 md:hidden animate-in fade-in slide-in-from-top-4 duration-300">
          <button 
            onClick={() => {
              onNavigate?.('home');
              setIsMobileMenuOpen(false);
            }} 
            className={`text-left text-base font-semibold py-2 border-b border-white/5 transition-colors ${currentPage === 'home' ? 'text-emerald-400' : 'text-on-surface-variant'}`}
          >
            Home
          </button>
          
          <div className="py-2 border-b border-white/5 space-y-3">
            <div className="text-[10px] font-bold uppercase tracking-widest text-on-surface-variant/60 font-mono">Solutions</div>
            <div className="grid grid-cols-2 gap-x-4 gap-y-2.5 pl-1">
              <button onClick={() => { onNavigate?.('ai-debriefer'); setIsMobileMenuOpen(false); }} className="text-left text-sm font-medium text-white/80 hover:text-white">AI Debriefer</button>
              <button onClick={() => { onNavigate?.('ai-persona'); setIsMobileMenuOpen(false); }} className="text-left text-sm font-medium text-white/80 hover:text-white">AI Persona</button>
              <button onClick={() => { onNavigate?.('ai-copilot'); setIsMobileMenuOpen(false); }} className="text-left text-sm font-medium text-white/80 hover:text-white">Co-pilot</button>
              <button onClick={() => { onNavigate?.('quality-automation'); setIsMobileMenuOpen(false); }} className="text-left text-sm font-medium text-white/80 hover:text-white">QA Automation</button>
            </div>
          </div>

          <button 
            onClick={() => {
              onNavigate?.('pilot-program');
              setIsMobileMenuOpen(false);
            }} 
            className={`text-left text-base font-semibold py-2 border-b border-white/5 transition-colors ${currentPage === 'pilot-program' ? 'text-emerald-400' : 'text-on-surface-variant'}`}
          >
            Pilot Program
          </button>

          <button 
            onClick={() => {
              onNavigate?.('faq');
              setIsMobileMenuOpen(false);
            }} 
            className={`text-left text-base font-semibold py-2 border-b border-white/5 transition-colors ${currentPage === 'faq' ? 'text-emerald-400' : 'text-on-surface-variant'}`}
          >
            FAQs
          </button>

          <button 
            onClick={() => {
              onNavigate?.('company');
              setIsMobileMenuOpen(false);
            }} 
            className={`text-left text-base font-semibold py-2 border-b border-white/5 transition-colors ${currentPage === 'company' ? 'text-emerald-400' : 'text-on-surface-variant'}`}
          >
            Company
          </button>

          <div className="pt-2 flex flex-col gap-2.5">
            <button 
              onClick={() => {
                onOpenPopup?.();
                setIsMobileMenuOpen(false);
              }}
              className="w-full py-3 bg-emerald-500 text-black font-bold text-center text-sm rounded-full shadow-[0_0_15px_rgba(16,185,129,0.3)]"
            >
              Register for Pilot
            </button>
            <button 
              onClick={() => {
                onNavigate?.('contact');
                setIsMobileMenuOpen(false);
              }}
              className="w-full py-3 bg-transparent border border-white/20 text-white font-bold text-center text-sm rounded-full"
            >
              Contact
            </button>
          </div>
        </div>
      )}
    </nav>
  )
}
