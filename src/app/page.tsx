import Link from "next/link";
import SectionTitle from "@/components/SectionTitle";
import CTASection from "@/components/CTASection";

// Dummy data for static build (replaced by microCMS in production)
const dummyNews = [
  {
    id: "1",
    title: "ウェブサイトをリニューアルしました",
    publishedAt: "2025-07-01T00:00:00.000Z",
    category: { name: "お知らせ" },
  },
];

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center bg-gradient-to-br from-primary via-primary-light to-accent overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 right-20 w-96 h-96 bg-white rounded-full blur-3xl" />
          <div className="absolute bottom-20 left-20 w-72 h-72 bg-accent rounded-full blur-3xl" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in-up">
              <p className="text-accent text-sm font-bold tracking-widest mb-6 font-[Lato]">
                AI-POWERED CARE RECORDING
              </p>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-8">
                介護記録を、
                <br />
                声だけで。
              </h1>
              <p className="text-white/80 text-lg md:text-xl leading-relaxed mb-10">
                AI搭載の音声入力で
                <br />
                事務作業をゼロに。
                <br />
                ケアの質を向上させます。
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/service"
                  className="inline-flex items-center justify-center bg-white text-primary font-bold px-8 py-4 rounded-full hover:bg-gray-100 transition-colors tracking-wider text-sm"
                >
                  サービスを見る
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center border-2 border-white text-white font-bold px-8 py-4 rounded-full hover:bg-white/10 transition-colors tracking-wider text-sm"
                >
                  お問い合わせ
                </Link>
              </div>
            </div>

            {/* Hero Image Placeholder */}
            <div className="hidden lg:flex justify-center">
              <div className="relative w-80 h-[500px] bg-white/10 rounded-3xl backdrop-blur-sm border border-white/20 flex items-center justify-center">
                <div className="text-center text-white/60">
                  <div className="w-20 h-20 mx-auto mb-4 rounded-2xl bg-white/20 flex items-center justify-center">
                    <svg
                      className="w-10 h-10 text-white"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z"
                      />
                    </svg>
                  </div>
                  <p className="text-sm font-medium">ながらかいご</p>
                  <p className="text-xs mt-1 opacity-60">音声で介護記録</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle en="ABOUT" ja="NAGARAについて" />
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-gray-600 text-lg leading-relaxed">
              株式会社NAGARAは、介護現場のDXを推進するスタートアップです。
              <br />
              AI技術を活用した介護記録アプリ「ながらかいご」を通じて、
              <br />
              介護スタッフの事務負担を軽減し、より良いケアの実現を目指します。
            </p>
          </div>
        </div>
      </section>

      {/* Service Section */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle en="SERVICE" ja="サービス" />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {[
              {
                icon: (
                  <svg
                    className="w-8 h-8"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z"
                    />
                  </svg>
                ),
                title: "AI音声入力",
                desc: "話すだけで介護記録を自動作成。方言やノイズにも対応した高精度な音声認識。",
              },
              {
                icon: (
                  <svg
                    className="w-8 h-8"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                    />
                  </svg>
                ),
                title: "記録の自動化",
                desc: "音声からAIが適切な記録形式に自動変換。テンプレートに沿った正確な記録を実現。",
              },
              {
                icon: (
                  <svg
                    className="w-8 h-8"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                ),
                title: "業務時間削減",
                desc: "事務作業にかかる時間を大幅に削減。その分の時間を利用者のケアに充てられます。",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="w-14 h-14 rounded-xl bg-primary/10 text-primary flex items-center justify-center mb-6">
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Link
              href="/service"
              className="inline-flex items-center gap-2 text-primary font-bold text-sm tracking-wider hover:gap-3 transition-all"
            >
              サービス詳細を見る
              <svg
                className="w-4 h-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* News Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle en="NEWS" ja="ニュース" />

          <div className="max-w-3xl mx-auto">
            {dummyNews.map((news) => (
              <Link
                key={news.id}
                href={`/news/${news.id}`}
                className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-6 py-6 border-b border-gray-200 hover:bg-gray-50 transition-colors px-4 -mx-4 rounded"
              >
                <time className="text-sm text-gray-400 font-[Lato] shrink-0">
                  {new Date(news.publishedAt).toLocaleDateString("ja-JP", {
                    year: "numeric",
                    month: "2-digit",
                    day: "2-digit",
                  })}
                </time>
                <span className="text-xs bg-primary/10 text-primary px-3 py-1 rounded-full font-medium shrink-0 w-fit">
                  {news.category.name}
                </span>
                <span className="text-gray-800 text-sm">{news.title}</span>
              </Link>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link
              href="/news"
              className="inline-flex items-center gap-2 text-primary font-bold text-sm tracking-wider hover:gap-3 transition-all"
            >
              ニュース一覧を見る
              <svg
                className="w-4 h-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTASection />
    </>
  );
}
