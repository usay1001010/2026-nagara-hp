import type { Metadata } from "next";
import SectionTitle from "@/components/SectionTitle";
import CTASection from "@/components/CTASection";

export const metadata: Metadata = {
  title: "COMPANY",
  description:
    "株式会社NAGARAの企業情報。介護現場のDXを推進するスタートアップ。",
};

const companyInfo = [
  { label: "会社名", value: "株式会社NAGARA" },
  { label: "英語表記", value: "NAGARA, Inc." },
  { label: "設立", value: "2025年7月1日" },
  { label: "代表取締役", value: "岡田 一輝" },
  { label: "事業内容", value: "介護IT事業（介護記録アプリ「ながらかいご」の開発・運営）" },
  {
    label: "所在地",
    value: "〒466-0064 愛知県名古屋市昭和区鶴舞1丁目2-32 STATION Ai",
  },
  { label: "メール", value: "itsuki.okada@nagarainc.co.jp" },
];

export default function CompanyPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-primary to-primary-light py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="section-title-en text-4xl md:text-5xl text-white mb-4">
            COMPANY
          </h1>
          <p className="text-white/70 text-sm mb-6">企業情報</p>
          <div className="w-12 h-0.5 bg-white mx-auto" />
        </div>
      </section>

      {/* Message */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle en="MESSAGE" ja="代表メッセージ" />

          <div className="max-w-3xl mx-auto">
            <div className="bg-gray-50 rounded-2xl p-8 md:p-12">
              <h3 className="text-2xl font-bold mb-8 text-center">
                テクノロジーの力で、
                <br />
                介護をもっと豊かに。
              </h3>
              <div className="space-y-6 text-gray-600 leading-relaxed">
                <p>
                  日本は世界に先駆けて超高齢社会を迎え、介護の現場では人手不足が深刻化しています。介護スタッフの方々は、日々の業務に追われながらも、利用者の方々に寄り添ったケアを提供しようと懸命に取り組まれています。
                </p>
                <p>
                  しかし、その貴重な時間の多くが事務作業に費やされている現状があります。介護記録の作成は必要不可欠な業務ですが、手入力による記録は大きな負担となっています。
                </p>
                <p>
                  私たちは、AI技術を活用した音声入力による介護記録の自動化を通じて、介護スタッフの方々の事務負担を軽減し、より多くの時間を利用者の方々とのコミュニケーションやケアに充てていただきたいと考えています。
                </p>
                <p>
                  テクノロジーの力で介護の現場を変え、すべての人がより良い介護を受けられる社会の実現を目指してまいります。
                </p>
              </div>
              <div className="mt-8 text-right">
                <p className="text-sm text-gray-500">代表取締役</p>
                <p className="text-xl font-bold mt-1">岡田 一輝</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Company Info */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle en="OVERVIEW" ja="会社概要" />

          <div className="max-w-3xl mx-auto">
            <div className="bg-white rounded-2xl shadow-sm overflow-hidden">
              {companyInfo.map((item, i) => (
                <div
                  key={i}
                  className={`flex flex-col sm:flex-row ${i !== companyInfo.length - 1 ? "border-b border-gray-100" : ""}`}
                >
                  <div className="sm:w-40 shrink-0 bg-gray-50 px-6 py-4 font-medium text-sm text-gray-700">
                    {item.label}
                  </div>
                  <div className="px-6 py-4 text-sm text-gray-600">
                    {item.label === "メール" ? (
                      <a
                        href={`mailto:${item.value}`}
                        className="text-primary hover:underline"
                      >
                        {item.value}
                      </a>
                    ) : (
                      item.value
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Access */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle en="ACCESS" ja="アクセス" />

          <div className="max-w-3xl mx-auto">
            <div className="rounded-2xl overflow-hidden shadow-sm">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3262.0!2d136.92!3d35.15!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sSTATION+Ai!5e0!3m2!1sja!2sjp!4v1"
                width="100%"
                height="400"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="STATION Ai アクセスマップ"
              />
            </div>
            <p className="text-center mt-6 text-gray-600 text-sm">
              〒466-0064 愛知県名古屋市昭和区鶴舞1丁目2-32 STATION Ai
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTASection />
    </>
  );
}
