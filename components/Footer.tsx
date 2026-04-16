"use client";

import { Hammer, Phone, Mail } from "lucide-react";

const navLinks = [
  { label: "Who We Help", href: "#who-we-help" },
  { label: "Services", href: "#services" },
  { label: "Why Us", href: "#why-us" },
  { label: "Process", href: "#process" },
  { label: "Portfolio", href: "#portfolio" },
  { label: "Contact", href: "#contact" },
];

export default function Footer() {
  return (
    <footer className="bg-[#080b14] border-t border-white/5 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-10">
          {/* Brand */}
          <div>
            <a href="#" className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-orange-500 rounded flex items-center justify-center">
                <Hammer className="w-4 h-4 text-white" />
              </div>
              <span className="font-bold text-lg">
                Iron <span className="text-orange-500">Web</span> Studios
              </span>
            </a>
            <p className="text-gray-500 text-sm leading-relaxed">
              Professional websites for local businesses. Fast turnaround,
              fair prices, real results.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-widest text-gray-500 mb-4">
              Navigation
            </h4>
            <ul className="flex flex-col gap-2">
              {navLinks.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    className="text-sm text-gray-400 hover:text-white transition-colors"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-widest text-gray-500 mb-4">
              Contact
            </h4>
            <div className="flex flex-col gap-3">
              <a
                href="tel:7068022534"
                className="flex items-center gap-2 text-sm text-gray-400 hover:text-orange-400 transition-colors"
              >
                <Phone className="w-4 h-4 text-orange-500" />
                (706) 802-2534
              </a>
              <a
                href="mailto:CCOLE@IRONWEBSTUDIOS.COM"
                className="flex items-center gap-2 text-sm text-gray-400 hover:text-orange-400 transition-colors"
              >
                <Mail className="w-4 h-4 text-orange-500" />
                CCOLE@IRONWEBSTUDIOS.COM
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-white/5 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-600">
          <p>© {new Date().getFullYear()} Iron Web Studios. All rights reserved.</p>
          <p>Built with care for local businesses.</p>
        </div>
      </div>
    </footer>
  );
}
