export default function Navbar() {
  return (
    <header className="sticky top-0 z-20 border-b border-slate-800 bg-background/80 backdrop-blur">
      <nav className="mx-auto flex max-w-5xl items-center justify-between px-4 py-3 text-sm text-slate-300">
        <div className="font-semibold tracking-tight text-gray-100">ZY</div>
        <div className="hidden gap-6 md:flex">
          <a href="#about" className="hover:text-teal-400">
            About
          </a>
          <a href="#skills" className="hover:text-teal-400">
            Skills
          </a>
          <a href="#projects" className="hover:text-teal-400">
            Projects
          </a>
          <a href="#contact" className="hover:text-teal-400">
            Contact
          </a>
        </div>
        <button className="inline-flex items-center justify-center rounded-md border border-slate-700 px-2 py-1 text-xs text-gray-100 hover:border-teal-400 md:hidden">
          Menu
        </button>
      </nav>
    </header>
  )
}

