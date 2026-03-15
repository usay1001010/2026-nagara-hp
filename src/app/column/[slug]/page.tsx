import type { Metadata } from "next";
import Link from "next/link";
import CTASection from "@/components/CTASection";

// TODO: Replace with microCMS
const dummyColumn = {
  id: "care-records-app-automation",
  title: "介護記録の自動化アプリは音声入力で変わる？操作性と導入メリットを解説",
  content: `
    <h2>介護記録の自動化が求められる背景</h2>
    <p>介護現場では、日々の介護記録の作成に多くの時間が費やされています。スタッフの方々は、利用者のケアを行いながら、その内容を正確に記録する必要があります。しかし、手書きやPC入力による記録作成は、大きな時間的負担となっています。</p>
    <h2>音声入力による自動化のメリット</h2>
    <p>音声入力を活用した介護記録の自動化には、以下のようなメリットがあります。</p>
    <ul>
      <li>記録作成時間の大幅な削減</li>
      <li>ケアをしながらリアルタイムで記録可能</li>
      <li>記録漏れの防止</li>
      <li>スタッフの負担軽減</li>
    </ul>
    <h2>「ながらかいご」の特徴</h2>
    <p>株式会社NAGARAが提供する「ながらかいご」は、AI搭載の音声入力による介護記録アプリです。方言やノイズにも対応した高精度な音声認識技術により、介護の現場で簡単に記録を作成することができます。</p>
  `,
  publishedAt: "2025-07-01T00:00:00.000Z",
};

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: dummyColumn.title,
    description: dummyColumn.title,
  };
}

export default async function ColumnDetailPage() {
  const column = dummyColumn;

  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-primary to-primary-light py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="section-title-en text-4xl md:text-5xl text-white mb-4">
            COLUMN
          </h1>
          <p className="text-white/70 text-sm mb-6">コラム</p>
          <div className="w-12 h-0.5 bg-white mx-auto" />
        </div>
      </section>

      {/* Article */}
      <section className="py-24 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb */}
          <nav className="mb-8 text-sm text-gray-400">
            <Link href="/" className="hover:text-primary">
              TOP
            </Link>
            <span className="mx-2">/</span>
            <Link href="/column" className="hover:text-primary">
              COLUMN
            </Link>
            <span className="mx-2">/</span>
            <span className="text-gray-600 line-clamp-1">{column.title}</span>
          </nav>

          {/* Header */}
          <div className="mb-10">
            <time className="text-sm text-gray-400 font-[Lato]">
              {new Date(column.publishedAt).toLocaleDateString("ja-JP", {
                year: "numeric",
                month: "2-digit",
                day: "2-digit",
              })}
            </time>
            <h1 className="text-2xl md:text-3xl font-bold leading-tight mt-4">
              {column.title}
            </h1>
          </div>

          {/* Content */}
          <div
            className="prose-content"
            dangerouslySetInnerHTML={{ __html: column.content }}
          />

          {/* Back */}
          <div className="mt-16 text-center">
            <Link
              href="/column"
              className="inline-flex items-center gap-2 text-primary font-bold text-sm tracking-wider hover:gap-3 transition-all"
            >
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
                  d="M15 19l-7-7 7-7"
                />
              </svg>
              コラム一覧に戻る
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTASection />
    </>
  );
}
