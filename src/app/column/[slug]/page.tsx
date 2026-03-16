import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";

export async function generateMetadata(): Promise<Metadata> {
  return { title: "COLUMN" };
}

export default async function ColumnDetailPage() {
  return (
    <>
      <Breadcrumb
        items={[{ label: "COLUMN", href: "/column" }, { label: "記事" }]}
      />

      <section className="py-16 bg-white">
        <div className="max-w-[720px] mx-auto px-6">
          <h1 className="text-[24px] md:text-[28px] font-bold text-text-dark leading-tight mb-8">
            コラム記事タイトル
          </h1>

          <div className="prose-content">
            <p>
              この記事の内容はmicroCMSから取得されます。microCMSのAPIキーを設定すると、実際のコラム記事が表示されます。
            </p>
          </div>

          <div className="mt-16 text-center">
            <Link href="/column" className="btn-outline">
              <span className="material-icons text-[18px]">
                keyboard_arrow_left
              </span>
              コラム一覧に戻る
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
