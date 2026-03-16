import Link from "next/link";
import Image from "next/image";
import SectionHeading from "@/components/SectionHeading";

const newsItems = [
  {
    id: "mikaru-media",
    category: "メディア掲載",
    title:
      "医療・介護領域メディア「mikaru」の記事で「ながらかいご」が紹介されました",
    date: "2026/3/9",
  },
  {
    id: "nhk-marutto",
    category: "メディア掲載",
    title:
      "NHK名古屋放送局「まるっと!」にて、弊社の取り組みが紹介されます",
    date: "2026/2/25",
  },
  {
    id: "caretex-tokyo",
    category: "お知らせ",
    title:
      "「CareTEX東京'26」NPO法人タダカヨ様ブース内にて「ながらかいご」を出展します",
    date: "2026/2/16",
  },
  {
    id: "aichi-startup-battle",
    category: "お知らせ",
    title:
      "「AICHI STARTUP BATTLE 2025」ビジネスプランコンテストにて1位を獲得",
    date: "2026/2/11",
  },
];

const companyInfo = [
  { label: "会社名", value: "株式会社NAGARA（NAGARA, Inc.）" },
  { label: "代表取締役", value: "岡田一輝 （Itsuki Okada）" },
  {
    label: "所在地",
    value: "〒466-0064\n愛知県名古屋市昭和区鶴舞 1丁目2-32 STATION Ai",
    hasMap: true,
  },
  { label: "事業内容", value: "介護ITサービス事業" },
  {
    label: "ご連絡先",
    value: "代表メールアドレス：　itsuki.okada@nagarainc.co.jp",
  },
  { label: "URL", value: "https://nagarainc.co.jp/" },
];

export default function Home() {
  return (
    <>
      {/* Hero Section - Big logo + tagline */}
      <section className="bg-white py-16 md:py-24">
        <div className="max-w-[1280px] mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center gap-8 md:gap-16">
            {/* Large NAGARA logo icon */}
            <div className="w-[280px] md:w-[400px] shrink-0">
              <Image
                src="/images/hero-logo.webp"
                alt="NAGARA"
                width={400}
                height={300}
                priority
                className="w-full h-auto"
              />
            </div>
            {/* Tagline */}
            <h1 className="text-[32px] md:text-[42px] font-bold text-text-dark leading-tight">
              人と人とのつながりを
              <br />
              <span className="ml-[1em] md:ml-[2em]">最大に</span>
            </h1>
          </div>
        </div>
      </section>

      {/* NEWS Section */}
      <section className="py-16 bg-white">
        <div className="max-w-[1280px] mx-auto px-6">
          <SectionHeading en="NEWS" ja="ニュース" />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-[960px] mx-auto">
            {newsItems.map((news) => (
              <Link
                key={news.id}
                href={`/news/${news.id}`}
                className="group block bg-white border border-bg-gray rounded overflow-hidden hover:shadow-md transition-shadow"
              >
                {/* Thumbnail placeholder */}
                <div className="aspect-[16/9] bg-bg-light relative overflow-hidden">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-text-muted text-sm">
                      {news.category}
                    </span>
                  </div>
                </div>
                <div className="p-4">
                  <span className="category-badge">{news.category}</span>
                  <p className="text-[14px] text-text mt-2 leading-relaxed group-hover:text-primary transition-colors line-clamp-2">
                    {news.title}
                  </p>
                  <p className="text-[12px] text-text-muted mt-2">
                    {news.date}
                  </p>
                </div>
              </Link>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link href="/news" className="btn-outline">
              view more
              <span className="material-icons text-[18px]">
                keyboard_arrow_right
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* SERVICE Section */}
      <section className="py-16 bg-white">
        <div className="max-w-[1280px] mx-auto px-6">
          <SectionHeading en="SERVICE" ja="サービス" />

          <p className="text-center text-[15px] text-text leading-relaxed max-w-[640px] mx-auto mb-10">
            ながらかいごは介護作業中や会議の音声から自動で記録の作成、議事録の生成を行う介護支援アプリです。
          </p>

          <div className="text-center">
            <Link href="/nagarakaigo" className="btn-outline">
              view more
              <span className="material-icons text-[18px]">
                keyboard_arrow_right
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-primary py-10">
        <div className="max-w-[1280px] mx-auto px-6 text-center">
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-white text-primary font-bold px-10 py-4 rounded text-[15px] hover:opacity-90 transition-opacity"
          >
            お問い合わせはこちら
            <span className="material-icons text-[18px]">
              keyboard_arrow_right
            </span>
          </Link>
        </div>
      </section>

      {/* Bottom SEO Section */}
      <section className="py-16 bg-bg-light">
        <div className="max-w-[800px] mx-auto px-6">
          <h2 className="text-[18px] font-bold text-text-dark text-center mb-6 leading-relaxed">
            「話すだけ」で介護記録が完成。ながらかいごで実現する、新時代のワークフロー
          </h2>
          <div className="text-[14px] text-text leading-[2] space-y-4">
            <p>
              株式会社NAGARAは、介護業務の負担を軽減し、ケアの質向上を支援するITサービス「ながらかいご」を提供しています。「ながらかいご」は、介護現場の効率化に貢献する音声特化AIアプリです。介護記録の自動化を実現するこのソフトは、音声入力でリアルタイムに正確な記録を作成するシステムです。これにより、スタッフは記録の書き方に悩むことなく、ケアに集中できます。また、議事録自動化機能も搭載しており、会議や面談の記録の精度を大きく向上させます。
            </p>
            <p>
              費用は月額30,000円から利用でき、小規模から大規模までさまざまな事業規模に対応する料金プランをご用意しています。これらの豊富な機能は、介護現場のワークフローを根本から改善し、より質の高いケアを可能にします。
            </p>
            <p>
              介護記録の負担を軽減し、働きやすい環境づくりをサポートする「ながらかいご」の詳細については、コラム内の例文やテンプレートの活用方法と併せて、ぜひ公式サイトでご確認ください。
            </p>
          </div>
          <div className="text-center mt-8">
            <Link href="/column" className="btn-primary">
              コラム一覧
              <span className="material-icons text-[18px]">
                keyboard_arrow_right
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* Company Info Table */}
      <section className="py-16 bg-white">
        <div className="max-w-[800px] mx-auto px-6">
          <h2 className="text-[20px] font-bold text-primary text-center mb-8">
            介護記録を自動化するアプリで業務効率化をサポートする株式会社NAGARA
          </h2>

          <table className="company-table">
            <tbody>
              {companyInfo.map((item, i) => (
                <tr key={i}>
                  <th>{item.label}</th>
                  <td>
                    {item.label === "URL" ? (
                      <a
                        href={item.value}
                        className="text-primary hover:underline"
                      >
                        {item.value}
                      </a>
                    ) : (
                      <span className="whitespace-pre-line">{item.value}</span>
                    )}
                    {item.hasMap && (
                      <a
                        href="https://maps.google.com/?q=STATION+Ai+名古屋"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-primary text-[13px] ml-4 hover:underline"
                      >
                        MAP
                        <span className="material-icons text-[16px]">
                          keyboard_arrow_right
                        </span>
                      </a>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </>
  );
}
