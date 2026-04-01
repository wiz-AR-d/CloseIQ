interface NavBarProps {
  onOpenPopup?: () => void;
}

export default function NavBar({ onOpenPopup }: NavBarProps) {
  return (
    <nav className="fixed top-0 w-full z-50 bg-[#000000]/60 backdrop-blur-xl">
      <div className="flex justify-between items-center max-w-7xl mx-auto px-6 py-4">
        <div className="text-2xl font-bold tracking-tighter text-[#00FF41]">CloseIQ</div>
        <div className="flex items-center gap-4">
          <button 
            onClick={onOpenPopup}
            className="px-6 py-2 kinetic-gradient text-on-primary font-bold rounded-md scale-95 active:scale-90 transition-transform"
          >
            Book a Demo
          </button>
        </div>
      </div>
    </nav>
  )
}
