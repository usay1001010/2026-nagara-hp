import type { Metadata } from "next";
import Link from "next/link";
import SectionTitle from "@/components/SectionTitle";

export const metadata: Metadata = {
  title: "NEWS",
  description: "株式会社NAGARAからのお知らせ・ニュース一覧。",
};

// Dummy data for static build - will be replaced by microCMS
const dummyNewsList = [
  {
    id: "website-renewal",
    title: "ウェブサイトをリニューアルしました",
    publishedAt: "2025-07-01T00:00:00.000Z",
    category: { name: "お知らせ" },
  },
];

export default async function NewsPage() {
  // TODO: Replace with microCMS API call
  // const { contents } = await getNewsList();
  const contents = dummyNewsList;

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

      {/* News List */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle en="ALL NEWS" ja="ニュース一覧" />

          {contents.length > 0 ? (
            <div className="divide-y divide-gray-200">
              {contents.map((news) => (
                <Link
                  key={news.id}
                  href={`/news/${news.id}`}
                  className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-6 py-6 hover:bg-gray-50 transition-colors px-4 -mx-4 rounded"
                >
                  <time className="text-sm text-gray-400 font-[Lato] shrink-0 w-28">
                    {new Date(news.publishedAt).toLocaleDateString("ja-JP", {
                      year: "numeric",
                      month: "2-digit",
                      day: "2-digit",
                    })}
                  </time>
                  <span className="text-xs bg-primary/10 text-primary px-3 py-1 rounded-full font-medium shrink-0 w-fit">
                    {news.category.name}
                  </span>
                  <span className="text-gray-800 text-sm hover:text-primary transition-colors">
                    {news.title}
                  </span>
                </Link>
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <p className="text-gray-400">ニュースはまだありません</p>
            </div>
          )}
        </div>
      </section>
    </>
  );
}
