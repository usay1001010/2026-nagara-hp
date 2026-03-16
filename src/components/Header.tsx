"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

const navItems = [
  { label: "COMPANY", href: "/company" },
  { label: "SERVICE", href: "/nagarakaigo" },
  { label: "NEWS", href: "/news" },
  {
    label: "RECRUIT",
    href: "https://www.wantedly.com/companies/nagarainc",
    external: true,
  },
  { label: "CONTACT", href: "/contact" },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-white relative z-50">
      <div className="max-w-[1280px] mx-auto px-6 flex items-center justify-between h-[80px]">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <Image
            src="/images/logo.svg"
            alt="NAGARA"
            width={160}
            height={40}
            priority
          />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-12">
          {navItems.map((item) =>
            item.external ? (
              <a
                key={item.href}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[14px] font-[Lato] tracking-[0.1em] text-text hover:text-primary transition-colors"
              >
                {item.label}
              </a>
            ) : (
              <Link
                key={item.href}
                href={item.href}
                className="text-[14px] font-[Lato] tracking-[0.1em] text-text hover:text-primary transition-colors"
              >
                {item.label}
              </Link>
            )
          )}
        </nav>

        {/* Hamburger */}
        <button
          className="md:hidden flex flex-col gap-[6px] p-2"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="メニュー"
        >
          <span
            className={`block w-6 h-[2px] bg-text transition-all duration-300 ${isOpen ? "rotate-45 translate-y-[8px]" : ""}`}
          />
          <span
            className={`block w-6 h-[2px] bg-text transition-all duration-300 ${isOpen ? "opacity-0" : ""}`}
          />
          <span
            className={`block w-6 h-[2px] bg-text transition-all duration-300 ${isOpen ? "-rotate-45 -translate-y-[8px]" : ""}`}
          />
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-bg-gray">
          <nav className="flex flex-col py-4">
            {navItems.map((item) =>
              item.external ? (
                <a
                  key={item.href}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 text-[14px] font-[Lato] tracking-[0.1em] text-text hover:bg-bg-light"
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </a>
              ) : (
                <Link
                  key={item.href}
                  href={item.href}
                  className="px-6 py-3 text-[14px] font-[Lato] tracking-[0.1em] text-text hover:bg-bg-light"
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </Link>
              )
            )}
          </nav>
        </div>
      )}
    </header>
  );
}
