import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import SectionHeading from "@/components/SectionHeading";
import ScrollFadeIn from "@/components/ScrollFadeIn";

export const metadata: Metadata = {
  title: "NEWS",
  description: "株式会社NAGARAからのお知らせ・ニュース一覧。",
};

const allNews = [
  {
    id: "mikaru-media",
    category: "メディア掲載",
    title:
      "医療・介護領域メディア「mikaru」の記事で「ながらかいご」が紹介されました",
    date: "2026/03/09",
  },
  {
    id: "nhk-marutto",
    category: "メディア掲載",
    title:
      "NHK名古屋放送局「まるっと!」にて、弊社の取り組みが紹介されます",
    date: "2026/02/25",
  },
  {
    id: "caretex-tokyo",
    category: "お知らせ",
    title:
      "「CareTEX東京'26」NPO法人タダカヨ様ブース内にて「ながらかいご」を出展します",
    date: "2026/02/16",
  },
  {
    id: "aichi-startup-battle",
    category: "お知らせ",
    title:
      "「AICHI STARTUP BATTLE 2025」ビジネスプランコンテストにて1位を獲得",
    date: "2026/02/11",
  },
  {
    id: "koukousei-biz",
    category: "お知らせ",
    title:
      "「高校生ビジネスプラン・グランプリ（東海地区発表会）」にて特別講演・パネルトークに登壇します。",
    date: "2026/01/28",
  },
  {
    id: "nagara-podcast",
    category: "お知らせ",
    title:
      "ながら医療経営ニュース ポッドキャスト内で「ながらかいご」が紹介されました",
    date: "2026/01/14",
  },
  {
    id: "chukyo-tv",
    category: "メディア掲載",
    title: "CHUKYO TVにて「ながらかいご」が紹介されました",
    date: "2026/01/07",
  },
  {
    id: "nagoya-connect",
    category: "お知らせ",
    title: "NAGOYA COONECTにてパネルディスカッションへ登壇します",
    date: "2025/12/21",
  },
  {
    id: "station-ai-summit",
    category: "お知らせ",
    title:
      "STATION Ai Student Summit に弊社代表の岡田が登壇します",
    date: "2025/12/20",
  },
  {
    id: "u30-award",
    category: "お知らせ",
    title:
      "「U30若者活動AWARD 2025」福祉・健康部門にノミネートされました",
    date: "2025/12/15",
  },
  {
    id: "nikkei",
    category: "メディア掲載",
    title:
      "株式会社NAGARA が日本経済新聞朝刊にて掲載されました",
    date: "2025/12/15",
  },
  {
    id: "caretex-nagoya-report",
    category: "お知らせ",
    title: "CareTEX名古屋'25に出展しました",
    date: "2025/12/03",
  },
  {
    id: "caretex-nagoya-announce",
    category: "お知らせ",
    title:
      "株式会社NAGARA、CareTEX名古屋'25への出展に関するご案内",
    date: "2025/11/29",
  },
  {
    id: "kanagawa-subsidy",
    category: "お知らせ",
    title: "神奈川県の介護ロボット改良支援補助金に採択されました",
    date: "2025/11/28",
  },
  {
    id: "sentan-toyota",
    category: "お知らせ",
    title:
      "SENTAN 共創ラボ -Edge- でのイベント「次世代を創る　とよたの起業家」にNAGARAが登壇",
    date: "2025/11/25",
  },
  {
    id: "caretex-hokuriku",
    category: "お知らせ",
    title: "CareTEX北陸'25にて展示を行いました",
    date: "2025/11/20",
  },
  {
    id: "kizzacare",
    category: "お知らせ",
    title:
      "キッザケアいしかわにて「ながらかいご」を展示し介護の効率化をご紹介しました",
    date: "2025/11/08",
  },
  {
    id: "seed-funding",
    category: "プレスリリース",
    title:
      "豊田高専発スタートアップの株式会社NAGARA、シードラウンドにて6200万円の資金調達を実施",
    date: "2025/11/04",
  },
  {
    id: "handa-talk",
    category: "お知らせ",
    title:
      "一般社団法人はんだのたね主催のトークイベント「THINK WORK」にCTO野﨑が登壇しました",
    date: "2025/10/25",
  },
  {
    id: "asahi-news",
    category: "メディア掲載",
    title:
      "朝日新聞に「ながらかいご」および株式会社NAGARAの取り組みが掲載されました",
    date: "2025/10/23",
  },
];

export default function NewsPage() {
  return (
    <>
      <Breadcrumb items={[{ label: "NEWS" }]} />

      <section className="py-16 bg-white">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-10">
          <ScrollFadeIn>
            <SectionHeading en="NEWS" ja="ニュース" />
          </ScrollFadeIn>

          <div className="max-w-[960px] mx-auto space-y-0">
            {allNews.map((news, i) => (
              <ScrollFadeIn key={news.id} delay={i * 30}>
                <Link
                  href={`/news/${news.id}`}
                  className="flex flex-col md:flex-row md:items-start gap-3 md:gap-6 py-6 border-b border-bg-gray hover:bg-bg-light transition-colors px-4 -mx-4"
                >
                  <div className="flex items-center gap-4 shrink-0">
                    <span className="category-badge whitespace-nowrap">
                      {news.category}
                    </span>
                  </div>
                  <p className="text-[13px] sm:text-[14px] text-text leading-relaxed hover:text-primary flex-1">
                    {news.title}
                  </p>
                  <time className="text-[12px] sm:text-[13px] text-text-muted font-[Lato] shrink-0">
                    {news.date}
                  </time>
                </Link>
              </ScrollFadeIn>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
