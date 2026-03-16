import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "NEWS",
  };
}

export default async function NewsDetailPage() {
  return (
    <>
      <Breadcrumb items={[{ label: "NEWS", href: "/news" }, { label: "記事" }]} />

      <section className="py-16 bg-white">
        <div className="max-w-[720px] mx-auto px-6">
          <div className="mb-8">
            <div className="flex items-center gap-4 mb-4">
              <span className="category-badge">お知らせ</span>
              <time className="text-[13px] text-text-muted font-[Lato]">
                2026/03/09
              </time>
            </div>
            <h1 className="text-[24px] md:text-[28px] font-bold text-text-dark leading-tight">
              ニュース記事タイトル
            </h1>
          </div>

          <div className="prose-content">
            <p>
              この記事の内容はmicroCMSから取得されます。microCMSのAPIキーを設定すると、実際のニュース記事が表示されます。
            </p>
          </div>

          <div className="mt-16 text-center">
            <Link href="/news" className="btn-outline">
              <span className="material-icons text-[18px]">
                keyboard_arrow_left
              </span>
              ニュース一覧に戻る
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
