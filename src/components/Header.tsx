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
    <header className="w-full bg-white border-b border-[#eee] relative z-50">
      <div className="w-full max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-10 flex items-center justify-between h-[70px] md:h-[80px]">
        {/* Logo - left aligned */}
        <Link href="/" className="shrink-0">
          <Image
            src="/images/logo.svg"
            alt="NAGARA"
            width={140}
            height={36}
            priority
            className="w-[120px] md:w-[140px] h-auto"
          />
        </Link>

        {/* Desktop Nav - right aligned */}
        <nav className="hidden lg:flex items-center gap-8 xl:gap-12">
          {navItems.map((item) =>
            item.external ? (
              <a
                key={item.href}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[13px] font-[Lato] tracking-[0.12em] text-[#333] hover:text-primary transition-colors"
              >
                {item.label}
              </a>
            ) : (
              <Link
                key={item.href}
                href={item.href}
                className="text-[13px] font-[Lato] tracking-[0.12em] text-[#333] hover:text-primary transition-colors"
              >
                {item.label}
              </Link>
            )
          )}
        </nav>

        {/* Hamburger - mobile */}
        <button
          className="lg:hidden flex flex-col gap-[5px] p-2"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="メニュー"
        >
          <span
            className={`block w-[22px] h-[2px] bg-[#333] transition-all duration-300 ${isOpen ? "rotate-45 translate-y-[7px]" : ""}`}
          />
          <span
            className={`block w-[22px] h-[2px] bg-[#333] transition-all duration-300 ${isOpen ? "opacity-0" : ""}`}
          />
          <span
            className={`block w-[22px] h-[2px] bg-[#333] transition-all duration-300 ${isOpen ? "-rotate-45 -translate-y-[7px]" : ""}`}
          />
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden overflow-hidden transition-all duration-300 bg-white border-t border-[#eee] ${isOpen ? "max-h-[400px]" : "max-h-0"}`}
      >
        <nav className="flex flex-col py-2">
          {navItems.map((item) =>
            item.external ? (
              <a
                key={item.href}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-4 text-[14px] font-[Lato] tracking-[0.1em] text-[#333] hover:bg-[#f7f8fa] border-b border-[#f0f0f0]"
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </a>
            ) : (
              <Link
                key={item.href}
                href={item.href}
                className="px-6 py-4 text-[14px] font-[Lato] tracking-[0.1em] text-[#333] hover:bg-[#f7f8fa] border-b border-[#f0f0f0]"
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </Link>
            )
          )}
        </nav>
      </div>
    </header>
  );
}
