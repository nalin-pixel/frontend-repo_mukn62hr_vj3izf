import { Menu } from "lucide-react";
import { useState } from "react";

const navItems = [
  { href: "#about", label: "About" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#certifications", label: "Certifications" },
  { href: "#achievements", label: "Achievements" },
  { href: "#resume", label: "Resume" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mt-4 rounded-2xl border border-white/10 bg-slate-900/70 backdrop-blur supports-[backdrop-filter]:bg-slate-900/60">
          <div className="flex items-center justify-between px-4 py-3">
            <a href="#home" className="text-white font-semibold tracking-tight text-lg">
              <span className="bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">Your Portfolio</span>
            </a>
            <button onClick={() => setOpen(!open)} className="md:hidden inline-flex items-center justify-center rounded-lg p-2 text-white/80 hover:text-white hover:bg-white/10 transition">
              <Menu className="h-6 w-6" />
            </button>
            <nav className="hidden md:flex items-center gap-1">
              {navItems.map((item) => (
                <a key={item.href} href={item.href} className="px-3 py-2 text-sm text-white/80 hover:text-white rounded-lg transition hover:bg-white/5">
                  {item.label}
                </a>
              ))}
            </nav>
          </div>
          {open && (
            <nav className="md:hidden px-3 pb-3">
              {navItems.map((item) => (
                <a key={item.href} href={item.href} onClick={() => setOpen(false)} className="block px-3 py-2 text-sm text-white/80 hover:text-white rounded-lg transition hover:bg-white/5">
                  {item.label}
                </a>
              ))}
            </nav>
          )}
        </div>
      </div>
    </header>
  );
}
