import type { Metadata } from "next";
import Link from "next/link";
import SectionTitle from "@/components/SectionTitle";

export const metadata: Metadata = {
  title: "COLUMN",
  description:
    "介護記録に関するお役立ちコラム。AI音声入力による業務効率化の情報を発信。",
};

// Dummy data - will be replaced by microCMS
const dummyColumns = [
  {
    id: "care-records-app-automation",
    title: "介護記録の自動化アプリは音声入力で変わる？操作性と導入メリットを解説",
    publishedAt: "2025-07-01T00:00:00.000Z",
    description:
      "介護記録の自動化アプリの中でも、音声入力タイプの操作性や導入メリットについて詳しく解説します。",
  },
  {
    id: "care-records-app-realtime",
    title: "介護記録アプリでリアルタイムに作業効率UP！記録精度向上の活用コツ",
    publishedAt: "2025-07-01T00:00:00.000Z",
    description:
      "リアルタイムで介護記録を作成できるアプリの活用方法と、記録精度を向上させるコツを紹介します。",
  },
  {
    id: "care-records-software-fee",
    title: "介護記録ソフトの費用を徹底解説！初期費用・運用コスト目安",
    publishedAt: "2025-07-01T00:00:00.000Z",
    description:
      "介護記録ソフトの導入にかかる費用について、初期費用から運用コストまで徹底的に解説します。",
  },
  {
    id: "care-record-software-function",
    title: "介護記録ソフトで業務効率化を実現！必須機能とワークフロー改善",
    publishedAt: "2025-07-01T00:00:00.000Z",
    description:
      "介護記録ソフトに必要な機能と、ワークフローの改善方法について解説します。",
  },
  {
    id: "accuracy-care-records-system",
    title: "介護記録システムの導入で記録精度を向上させる方法",
    publishedAt: "2025-07-01T00:00:00.000Z",
    description:
      "介護記録システムを導入することで、記録の精度を向上させる具体的な方法を紹介します。",
  },
  {
    id: "ai-care-record-system",
    title: "介護記録システムにAI導入で変わる未来〜ケアの質向上との両立〜",
    publishedAt: "2025-07-01T00:00:00.000Z",
    description:
      "AIを導入した介護記録システムがもたらす未来と、ケアの質との両立について考察します。",
  },
  {
    id: "care-record-writing-examples",
    title: "テンプレート活用で業務の効率化！介護記録の書き方と例文を紹介",
    publishedAt: "2025-07-01T00:00:00.000Z",
    description:
      "介護記録のテンプレートを活用して業務を効率化する方法と、具体的な書き方例文を紹介します。",
  },
  {
    id: "care-record-writing-template",
    title: "介護記録の書き方テンプレート！業務効率化の実践法",
    publishedAt: "2025-07-01T00:00:00.000Z",
    description:
      "すぐに使える介護記録のテンプレートと、業務効率化のための実践的な方法を解説します。",
  },
  {
    id: "care-records-voice-input-1",
    title: "音声入力の精度を上げるには？方言・ノイズ対策",
    publishedAt: "2025-07-01T00:00:00.000Z",
    description:
      "介護記録の音声入力で精度を上げるための方言対策やノイズ対策について詳しく解説します。",
  },
  {
    id: "care-records-voice-input-2",
    title: "音声入力で介護記録の効率化を実現！メリットと実践方法",
    publishedAt: "2025-07-01T00:00:00.000Z",
    description:
      "音声入力を活用した介護記録の効率化について、メリットと具体的な実践方法を紹介します。",
  },
];

export default async function ColumnPage() {
  // TODO: Replace with microCMS API call
  // const { contents } = await getColumnList();
  const contents = dummyColumns;

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

      {/* Column List */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle en="ALL COLUMNS" ja="コラム一覧" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {contents.map((column) => (
              <Link
                key={column.id}
                href={`/column/${column.id}`}
                className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow border border-gray-100"
              >
                {/* Thumbnail placeholder */}
                <div className="aspect-[16/9] bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center">
                  <svg
                    className="w-12 h-12 text-primary/30"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1}
                      d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z"
                    />
                  </svg>
                </div>
                <div className="p-6">
                  <time className="text-xs text-gray-400 font-[Lato]">
                    {new Date(column.publishedAt).toLocaleDateString("ja-JP", {
                      year: "numeric",
                      month: "2-digit",
                      day: "2-digit",
                    })}
                  </time>
                  <h3 className="text-sm font-bold mt-2 mb-3 leading-relaxed group-hover:text-primary transition-colors line-clamp-2">
                    {column.title}
                  </h3>
                  <p className="text-xs text-gray-500 leading-relaxed line-clamp-2">
                    {column.description}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
