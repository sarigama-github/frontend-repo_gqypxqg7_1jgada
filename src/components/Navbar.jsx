import { useState } from 'react'

function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-30 backdrop-blur supports-[backdrop-filter]:bg-white/60 bg-white/80 border-b border-yellow-200/60">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        <a href="/" className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-full bg-red-600 flex items-center justify-center ring-4 ring-yellow-400/60 shadow-md">
            <span className="text-yellow-300 text-xl font-black">M</span>
          </div>
          <div className="leading-tight">
            <p className="font-extrabold text-red-700 text-lg">McDonald's</p>
            <p className="text-[10px] text-red-500 tracking-wide uppercase">Unofficial Demo</p>
          </div>
        </a>

        <nav className="hidden md:flex items-center gap-6 text-sm font-medium">
          <a href="#menu" className="text-red-700 hover:text-red-800 transition-colors">Menu</a>
          <a href="#featured" className="text-red-700 hover:text-red-800 transition-colors">Featured</a>
          <a href="#deals" className="text-red-700 hover:text-red-800 transition-colors">Deals</a>
        </nav>

        <button onClick={() => setOpen(!open)} className="md:hidden p-2 rounded-lg border border-yellow-300/70 text-red-700">
          <span className="sr-only">Toggle Menu</span>
          ☰
        </button>
      </div>

      {open && (
        <div className="md:hidden px-4 pb-4 space-y-2">
          <a href="#menu" className="block p-3 rounded-lg bg-yellow-50 text-red-700">Menu</a>
          <a href="#featured" className="block p-3 rounded-lg bg-yellow-50 text-red-700">Featured</a>
          <a href="#deals" className="block p-3 rounded-lg bg-yellow-50 text-red-700">Deals</a>
        </div>
      )}
    </header>
  )
}

export default Navbar
