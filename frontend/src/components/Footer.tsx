export default function Footer() {
  return (
    <footer className="w-full py-12 border-t border-[#262626]/20 bg-[#000000]">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="text-[#00FF41] font-bold text-xl">CloseIQ </div>
        <div className="flex flex-wrap justify-center gap-8">
          <a
            className="font-['Inter'] text-sm text-[#adaaaa] hover:text-[#00FF41] transition-colors"
            href="#"
          >
            Privacy Policy
          </a>
          <a
            className="font-['Inter'] text-sm text-[#adaaaa] hover:text-[#00FF41] transition-colors"
            href="#"
          >
            Terms of Service
          </a>
          <a
            className="font-['Inter'] text-sm text-[#adaaaa] hover:text-[#00FF41] transition-colors"
            href="#"
          >
            Contact
          </a>
          <a
            className="font-['Inter'] text-sm text-[#adaaaa] hover:text-[#00FF41] transition-colors"
            href="#"
          >
            Security
          </a>
        </div>
        <div className="font-['Inter'] text-sm text-[#adaaaa]">
          © 2026 CloseIQ. All rights reserved.
        </div>
      </div>
    </footer>
  )
}
