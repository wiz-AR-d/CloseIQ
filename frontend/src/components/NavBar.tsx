import { useState, useEffect } from 'react';

interface NavBarProps {
  onOpenPopup?: () => void;
}

export default function NavBar({ onOpenPopup }: NavBarProps) {
  const [isLightMode, setIsLightMode] = useState(false);

  useEffect(() => {
    if (isLightMode) {
      document.body.classList.add('light-mode');
    } else {
      document.body.classList.remove('light-mode');
    }
  }, [isLightMode]);

  return (
    <nav className="fixed top-0 w-full z-50 bg-surface/60 backdrop-blur-xl border-b border-outline-variant/10">
      <div className="flex justify-between items-center max-w-7xl mx-auto px-6 py-4">
        <div className="text-2xl font-bold tracking-tighter text-primary">CloseIQ</div>
        <div className="flex items-center gap-4">
          <button 
            onClick={() => setIsLightMode(!isLightMode)}
            className="p-2 bg-surface-container rounded-full text-on-surface flex items-center justify-center border border-outline-variant/30 transition-transform active:scale-95"
            aria-label="Toggle Theme"
          >
            <span className="material-symbols-outlined text-lg">
              {isLightMode ? 'dark_mode' : 'light_mode'}
            </span>
          </button>
          <button 
            onClick={onOpenPopup}
            className="px-6 py-2 bg-primary text-on-primary font-bold rounded-md scale-95 active:scale-90 transition-transform"
          >
            Book a Demo
          </button>
        </div>
      </div>
    </nav>
  )
}
