export default function Footer() {
  return (
    <footer className="w-full py-12 border-t border-outline-variant/20 bg-surface-container-lowest">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="text-primary font-bold text-xl">CloseIQ </div>
        <div className="flex flex-wrap justify-center gap-8">
          <a
            className="font-['Inter'] text-sm text-on-surface-variant hover:text-primary transition-colors"
            href="#"
          >
            Privacy Policy
          </a>
          <a
            className="font-['Inter'] text-sm text-on-surface-variant hover:text-primary transition-colors"
            href="#"
          >
            Terms of Service
          </a>
          <a
            className="font-['Inter'] text-sm text-on-surface-variant hover:text-primary transition-colors"
            href="#"
          >
            Contact
          </a>
          <a
            className="font-['Inter'] text-sm text-on-surface-variant hover:text-primary transition-colors"
            href="#"
          >
            Security
          </a>
        </div>
        <div className="font-['Inter'] text-sm text-on-surface-variant">
          © 2026 CloseIQ. All rights reserved.
        </div>
      </div>
    </footer>
  )
}
