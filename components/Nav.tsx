"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import Logo from "./Logo";

const links = [
  { label: "Who We Help", href: "#who-we-help" },
  { label: "Services", href: "#services" },
  { label: "Why Us", href: "#why-us" },
  { label: "Process", href: "#process" },
  { label: "Contact", href: "#contact" },
];

export default function Nav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled || open
          ? "bg-[#0b0d10]/85 backdrop-blur-xl border-b border-hairline shadow-[0_8px_30px_rgba(0,0,0,0.5)]"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <a href="#" className="group transition-transform hover:scale-[1.02]">
            <Logo size={34} />
          </a>

          {/* Desktop links */}
          <nav className="hidden md:flex items-center gap-7">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="relative text-sm text-muted hover:text-white transition-colors after:absolute after:left-0 after:-bottom-1.5 after:h-px after:w-0 after:bg-chrome after:transition-all hover:after:w-full"
              >
                {l.label}
              </a>
            ))}
            <a
              href="#contact"
              className="ml-1 px-4 py-2 rounded-lg bg-gradient-to-b from-[#f2f4f8] to-[#c0c6d0] text-[#0b0d10] text-sm font-bold transition-all hover:shadow-[0_0_24px_rgba(192,198,208,0.35)] hover:-translate-y-0.5"
            >
              Get a Free Quote
            </a>
          </nav>

          {/* Mobile menu button */}
          <button
            type="button"
            className="md:hidden flex items-center justify-center w-11 h-11 rounded-lg text-muted hover:text-white hover:bg-white/5 active:bg-white/10 transition-colors cursor-pointer"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
            style={{ touchAction: "manipulation" }}
          >
            {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden border-t border-hairline bg-[#0b0d10]/95 backdrop-blur-xl">
          <nav className="px-4 py-5 flex flex-col gap-1">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="text-base text-gray-300 hover:text-white py-3 px-3 rounded-lg hover:bg-white/5 transition-colors"
              >
                {l.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="mt-3 px-4 py-3 rounded-xl bg-gradient-to-b from-[#f2f4f8] to-[#c0c6d0] text-[#0b0d10] text-sm font-bold text-center"
            >
              Get a Free Quote
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
