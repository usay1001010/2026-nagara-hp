import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import Breadcrumb from "@/components/Breadcrumb";

export const metadata: Metadata = {
  title: "介護記録をAI音声入力で効率化するアプリなら株式会社NAGARA | コラム一覧",
  description:
    "役立つ機能が搭載された介護記録アプリ「ながらかいご」について詳しく解説。介護記録アプリについてのお役立ちコラム。",
};

const columns = [
  {
    id: "care-records-app-automation",
    num: "01",
    title: "介護記録の自動化アプリは音声入力で変わる？操作性と導入メリットを解説",
  },
  {
    id: "care-records-app-realtime",
    num: "02",
    title:
      "介護記録アプリでリアルタイムに作業効率UP！記録精度も高める活用のコツ",
  },
  {
    id: "care-records-software-fee",
    num: "03",
    title: "介護記録ソフトの費用を徹底解説！初期費用や運用コストの目安",
  },
  {
    id: "care-record-software-function",
    num: "04",
    title:
      "介護記録ソフトで業務効率化を実現！必須機能とワークフロー改善の秘訣",
  },
  {
    id: "accuracy-care-records-system",
    num: "05",
    title:
      "介護記録システムの導入で議事録自動化と記録精度向上を図る方法",
  },
  {
    id: "ai-care-record-system",
    num: "06",
    title:
      "介護記録システムにAI導入で変わる未来とは？業務効率化とケアの質を両立",
  },
  {
    id: "care-record-writing-examples",
    num: "07",
    title:
      "テンプレート活用で業務の効率化！介護記録の書き方と例文をご紹介",
  },
  {
    id: "care-record-writing-template",
    num: "08",
    title: "介護記録の書き方テンプレートで実現する業務効率化！",
  },
  {
    id: "care-records-voice-input-1",
    num: "09",
    title:
      "介護記録の音声入力の精度を上げるには？方言・ノイズ・誤認識を解決する方法",
  },
  {
    id: "care-records-voice-input-2",
    num: "10",
    title: "音声入力で介護記録の効率化を実現！メリットと実践方法",
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
    value: "代表メールアドレス： itsuki.okada@nagarainc.co.jp",
  },
  { label: "URL", value: "https://nagarainc.co.jp/" },
];

export default function ColumnPage() {
  return (
    <>
      <Breadcrumb items={[{ label: "COLUMN" }]} />

      <section className="py-16 bg-white">
        <div className="max-w-[800px] mx-auto px-6">
          <h1 className="text-[24px] font-bold text-text-dark mb-2">
            コラム一覧
          </h1>
          <p className="text-[13px] text-text-light mb-4">
            役立つ機能が搭載された介護記録アプリ「ながらかいご」について詳しく解説
          </p>

          {/* Header image */}
          <div className="mb-10 rounded-lg overflow-hidden">
            <Image
              src="/images/column-header.webp"
              alt="介護記録アプリについてのお役立ちコラム"
              width={800}
              height={450}
              className="w-full h-auto"
            />
          </div>

          <h2 className="text-[18px] font-bold text-text-dark mb-8">
            介護記録アプリについてのお役立ちコラム
          </h2>

          {/* Column list */}
          <div className="space-y-0">
            {columns.map((column) => (
              <Link
                key={column.id}
                href={`/column/${column.id}`}
                className="flex items-start gap-4 py-5 border-b border-bg-gray hover:bg-bg-light transition-colors px-4 -mx-4"
              >
                <span className="text-primary font-bold font-[Lato] text-[16px] shrink-0 w-8">
                  {column.num}
                </span>
                <p className="text-[14px] text-text leading-relaxed hover:text-primary">
                  {column.title}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom company info */}
      <section className="py-16 bg-white border-t border-bg-gray">
        <div className="max-w-[800px] mx-auto px-6">
          <h2 className="text-[20px] font-bold text-primary text-center mb-8">
            リアルタイムで介護記録が可能なソフトを導入するなら株式会社NAGARA
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
