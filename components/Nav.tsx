export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-[#444444]/10 backdrop-blur-lg border-b border-white/5">
      <div className="mx-auto max-w-7xl flex items-center justify-between px-4 py-3">
        
        {/* Logo / Title */}
        <h1 className="text-2xl font-poppins tracking-wide text-transparent bg-clip-text bg-linear-to-r from-[#978BF2] to-[#1C3ED2]">
          E Marketing Paradice
        </h1>

        {/* Navigation Links */}
        <nav className="flex items-center gap-8 bg-[#06091A] border border-white/11 rounded-2xl px-6 py-1 shadow-[0_10px_20px_rgba(0,0,0,0.5)]">
          <a href="#" className="px-4 py-1.5 rounded-md bg-[#D9D9D9]/5 text-white shadow-inner text-sm font-light">
            Home
          </a>
          <a href="#" className="px-4 py-1.5 rounded-lg text-gray-300 hover:text-white hover:bg-[#D9D9D9]/5 text-sm font-light">
            About
          </a>
          <a href="#" className="px-4 py-1.5 rounded-lg text-gray-300 hover:text-white hover:bg-[#D9D9D9]/5 text-sm font-light">
            Services
          </a>
          <a href="#" className="px-4 py-1.5 rounded-lg text-gray-300 hover:text-white hover:bg-[#D9D9D9]/5 text-sm font-light">
            Projects
          </a>
        </nav>

        {/* Access Button */}
        <button className="ml-8 cursor-pointer border border-white/10 rounded-xl px-8 py-2 bg-[#06091A] text-gray-200 hover:text-white shadow-[0_0_15px_rgba(0,0,0,0.3)]">
          Access
        </button>
      </div>
    </header>
  );
}
