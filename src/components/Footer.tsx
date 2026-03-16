import Link from "next/link";
import Image from "next/image";

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

const socialLinks = [
  {
    label: "X",
    href: "https://x.com/NAGARA_inc",
    icon: (
      <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ),
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/nagara_inc",
    icon: (
      <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
      </svg>
    ),
  },
  {
    label: "note",
    href: "https://note.com/nagarainc",
    icon: (
      <span className="text-[18px] font-bold font-[Lato]">n</span>
    ),
  },
  {
    label: "Wantedly",
    href: "https://www.wantedly.com/companies/nagarainc",
    icon: (
      <span className="text-[16px] font-bold font-[Lato]">W</span>
    ),
  },
];

export default function Footer() {
  return (
    <footer className="bg-white border-t border-bg-gray">
      {/* Breadcrumb area - pages will add their own */}

      {/* Main footer */}
      <div className="max-w-[1280px] mx-auto px-6 py-12">
        <div className="flex flex-col md:flex-row justify-between gap-10">
          {/* Left: Logo + Company Info */}
          <div>
            <Image
              src="/images/logo.svg"
              alt="NAGARA"
              width={140}
              height={35}
            />
            <p className="text-[14px] font-bold text-text mt-3">
              株式会社NAGARA
            </p>
            <p className="text-[12px] text-text-light mt-1 leading-relaxed">
              〒466-0064
              <br />
              愛知県名古屋市昭和区鶴舞 1丁目2-32 STATION Ai
            </p>
          </div>

          {/* Right: Nav */}
          <nav className="flex flex-wrap gap-x-10 gap-y-3">
            {navItems.map((item) =>
              item.external ? (
                <a
                  key={item.href}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[13px] font-[Lato] tracking-[0.1em] text-text hover:text-primary transition-colors"
                >
                  {item.label}
                </a>
              ) : (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-[13px] font-[Lato] tracking-[0.1em] text-text hover:text-primary transition-colors"
                >
                  {item.label}
                </Link>
              )
            )}
          </nav>
        </div>

        {/* Social Links */}
        <div className="flex justify-center gap-4 mt-10">
          {socialLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full border border-bg-gray flex items-center justify-center text-text hover:text-primary hover:border-primary transition-colors"
              aria-label={link.label}
            >
              {link.icon}
            </a>
          ))}
        </div>
      </div>

      {/* Copyright */}
      <div className="bg-primary text-white text-center py-3">
        <p className="text-[12px] font-[Lato] tracking-wider">
          (C)2025 NAGARA
        </p>
      </div>
    </footer>
  );
}
