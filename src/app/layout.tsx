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
    default:
      "介護記録アプリなら「ながらかいご」｜AI搭載による音声入力で事務作業をゼロに",
    template: "%s | 株式会社NAGARA（NAGARA, inc.）",
  },
  description:
    "介護記録アプリなら、AI音声入力の「ながらかいご」。介護中の声をAIが自動で記録・要約し、議事録や報告書作成の事務負担をゼロへ。",
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
      <head>
        <link
          href="https://fonts.googleapis.com/icon?family=Material+Icons"
          rel="stylesheet"
        />
      </head>
      <body className={`${notoSansJP.variable} ${lato.variable} antialiased`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
