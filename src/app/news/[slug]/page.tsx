import type { Metadata } from "next";
import Link from "next/link";

// TODO: Replace with microCMS
const dummyNews = {
  id: "website-renewal",
  title: "ウェブサイトをリニューアルしました",
  content:
    "<p>この度、株式会社NAGARAのウェブサイトをリニューアルいたしました。</p><p>より見やすく、より分かりやすいサイトを目指し、デザインおよびコンテンツの改善を行いました。今後とも株式会社NAGARAをよろしくお願いいたします。</p>",
  publishedAt: "2025-07-01T00:00:00.000Z",
  category: { name: "お知らせ" },
};

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: dummyNews.title,
    description: dummyNews.title,
  };
}

export default async function NewsDetailPage() {
  const news = dummyNews;

  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-primary to-primary-light py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="section-title-en text-4xl md:text-5xl text-white mb-4">
            NEWS
          </h1>
          <p className="text-white/70 text-sm mb-6">ニュース</p>
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
            <Link href="/news" className="hover:text-primary">
              NEWS
            </Link>
            <span className="mx-2">/</span>
            <span className="text-gray-600">{news.title}</span>
          </nav>

          {/* Header */}
          <div className="mb-10">
            <div className="flex items-center gap-4 mb-4">
              <time className="text-sm text-gray-400 font-[Lato]">
                {new Date(news.publishedAt).toLocaleDateString("ja-JP", {
                  year: "numeric",
                  month: "2-digit",
                  day: "2-digit",
                })}
              </time>
              <span className="text-xs bg-primary/10 text-primary px-3 py-1 rounded-full font-medium">
                {news.category.name}
              </span>
            </div>
            <h1 className="text-2xl md:text-3xl font-bold leading-tight">
              {news.title}
            </h1>
          </div>

          {/* Content */}
          <div
            className="prose-content"
            dangerouslySetInnerHTML={{ __html: news.content }}
          />

          {/* Back */}
          <div className="mt-16 text-center">
            <Link
              href="/news"
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
              ニュース一覧に戻る
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
