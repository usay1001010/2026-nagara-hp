"use client";

import Link from "next/link";
import { useState } from "react";

const navItems = [
  { label: "SERVICE", href: "/service" },
  { label: "COMPANY", href: "/company" },
  { label: "NEWS", href: "/news" },
  { label: "COLUMN", href: "/column" },
  { label: "CONTACT", href: "/contact" },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3">
            <div className="flex flex-col">
              <span className="text-xl font-bold tracking-wider text-primary font-[Lato]">
                NAGARA, inc.
              </span>
              <span className="text-[10px] text-gray-500 tracking-wide">
                株式会社NAGARA
              </span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm font-medium tracking-widest text-gray-700 hover:text-primary transition-colors font-[Lato]"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Hamburger */}
          <button
            className="md:hidden flex flex-col gap-1.5 p-2"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="メニュー"
          >
            <span
              className={`hamburger-line block w-6 h-0.5 bg-gray-800 ${isOpen ? "rotate-45 translate-y-2" : ""}`}
            />
            <span
              className={`hamburger-line block w-6 h-0.5 bg-gray-800 ${isOpen ? "opacity-0" : ""}`}
            />
            <span
              className={`hamburger-line block w-6 h-0.5 bg-gray-800 ${isOpen ? "-rotate-45 -translate-y-2" : ""}`}
            />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t">
          <nav className="flex flex-col py-4">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="px-6 py-3 text-sm font-medium tracking-widest text-gray-700 hover:bg-gray-50 hover:text-primary font-[Lato]"
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
