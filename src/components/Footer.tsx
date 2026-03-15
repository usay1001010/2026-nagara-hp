import Link from "next/link";

const navItems = [
  { label: "SERVICE", href: "/service" },
  { label: "COMPANY", href: "/company" },
  { label: "NEWS", href: "/news" },
  { label: "COLUMN", href: "/column" },
  { label: "CONTACT", href: "/contact" },
];

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-bold tracking-wider mb-4 font-[Lato]">
              NAGARA, inc.
            </h3>
            <p className="text-sm text-gray-400 mb-2">株式会社NAGARA</p>
            <p className="text-sm text-gray-400 leading-relaxed">
              〒466-0064
              <br />
              愛知県名古屋市昭和区鶴舞1丁目2-32
              <br />
              STATION Ai
            </p>
            <p className="text-sm text-gray-400 mt-3">
              <a
                href="mailto:itsuki.okada@nagarainc.co.jp"
                className="hover:text-accent transition-colors"
              >
                itsuki.okada@nagarainc.co.jp
              </a>
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-sm font-bold tracking-widest mb-4 font-[Lato]">
              MENU
            </h4>
            <nav className="flex flex-col gap-3">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-sm text-gray-400 hover:text-white transition-colors tracking-wider font-[Lato]"
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Service */}
          <div>
            <h4 className="text-sm font-bold tracking-widest mb-4 font-[Lato]">
              SERVICE
            </h4>
            <p className="text-sm text-gray-400 leading-relaxed">
              介護記録アプリ「ながらかいご」
              <br />
              AI搭載による音声入力で
              <br />
              事務作業をゼロに
            </p>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-12 pt-8 text-center">
          <p className="text-xs text-gray-500">
            &copy; {new Date().getFullYear()} NAGARA, inc. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
