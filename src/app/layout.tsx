import type { Metadata } from "next";
import { Noto_Sans_JP, Lato } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import "./globals.css";

const notoSansJP = Noto_Sans_JP({
  variable: "--font-noto-sans-jp",
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
});

const lato = Lato({
  variable: "--font-lato",
  subsets: ["latin"],
  weight: ["300", "400", "700"],
});

export const metadata: Metadata = {
  title: {
    default: "株式会社NAGARA（NAGARA, inc.）| 介護記録アプリ「ながらかいご」",
    template: "%s | 株式会社NAGARA（NAGARA, inc.）",
  },
  description:
    "介護記録アプリなら「ながらかいご」。AI搭載による音声入力で事務作業をゼロに。介護現場での音声入力による自動記録で業務時間を大幅に削減しケアの質を向上させます。",
  metadataBase: new URL("https://nagarainc.co.jp"),
  openGraph: {
    type: "website",
    locale: "ja_JP",
    siteName: "株式会社NAGARA",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body className={`${notoSansJP.variable} ${lato.variable} antialiased`}>
        <Header />
        <main className="pt-20">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
