import { useState, useEffect } from 'react';

interface NavBarProps {
  currentPage: 'home' | 'ramp-time' | 'coaching' | 'ai-debriefer' | 'ai-persona' | 'ai-copilot' | 'quality-automation' | 'pricing' | 'contact' | 'security' | 'privacy' | 'terms' | 'faq' | 'company';
  onNavigate?: (page: 'home' | 'ramp-time' | 'coaching' | 'ai-debriefer' | 'ai-persona' | 'ai-copilot' | 'quality-automation' | 'pricing' | 'contact' | 'security' | 'privacy' | 'terms' | 'faq' | 'company') => void;
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

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-background/80 backdrop-blur-md border-b border-outline/20 py-4' : 'bg-transparent py-6'}`}>
      <div className="max-w-[1200px] mx-auto px-6 flex justify-between items-center">
        {/* Left Side: Logo */}
        <div 
          onClick={() => onNavigate?.('home')}
          className="cursor-pointer select-none flex items-center gap-3 group"
        >
          <img 
            src="/fox_logo.png" 
            alt="CloseIQ Wolf Logo" 
            className="w-9 h-9 object-contain brightness-0 invert group-hover:opacity-80 transition-opacity" 
          />
          <span className="font-sans font-extrabold tracking-tighter text-2xl text-white">CloseIQ</span>
        </div>
        
        {/* Center: Nav Links */}
        <div className="hidden md:flex items-center gap-8 bg-surface-container-high/50 backdrop-blur-md px-6 py-2 rounded-full border border-outline/30">
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

          <button onClick={() => onNavigate?.('faq')} className={`text-[15px] font-medium transition-colors ${currentPage === 'faq' ? 'text-white' : 'text-on-surface-variant hover:text-white'}`}>FAQs</button>
          <button onClick={() => onNavigate?.('company')} className={`text-[15px] font-medium transition-colors ${currentPage === 'company' ? 'text-white' : 'text-on-surface-variant hover:text-white'}`}>Company</button>
        </div>

        {/* Right Side: Actions */}
        <div className="flex items-center gap-4">
          <button 
            onClick={() => onNavigate?.('contact')}
            className="px-6 py-2.5 bg-white text-black font-semibold text-[15px] rounded-full hover:bg-gray-200 transition-colors shadow-clay-sm hover:shadow-clay"
          >
            Contact Us
          </button>
        </div>
      </div>
    </nav>
  )
}
