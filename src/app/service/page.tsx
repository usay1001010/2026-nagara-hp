import type { Metadata } from "next";
import SectionTitle from "@/components/SectionTitle";
import CTASection from "@/components/CTASection";

export const metadata: Metadata = {
  title: "SERVICE",
  description:
    "介護記録アプリ「ながらかいご」のサービス紹介。AI搭載による音声入力で事務作業をゼロに。",
};

const features = [
  {
    title: "AI音声入力による自動記録",
    description:
      "介護スタッフが話すだけで、AIが介護記録を自動作成します。手入力の手間を大幅に削減し、記録漏れも防止。方言やノイズにも対応した高精度な音声認識技術を搭載しています。",
    icon: (
      <svg
        className="w-10 h-10"
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
  },
  {
    title: "リアルタイム記録作成",
    description:
      "音声入力した内容は、リアルタイムでテキスト化され、適切な記録形式に自動変換。ケアの現場にいながら、正確な記録を効率的に作成できます。",
    icon: (
      <svg
        className="w-10 h-10"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M13 10V3L4 14h7v7l9-11h-7z"
        />
      </svg>
    ),
  },
  {
    title: "テンプレート機能",
    description:
      "施設独自の記録テンプレートを設定可能。フォーマットに沿った統一的な記録を簡単に作成でき、記録の品質を均一に保つことができます。",
    icon: (
      <svg
        className="w-10 h-10"
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
  },
  {
    title: "業務効率化ダッシュボード",
    description:
      "記録作成の時間短縮効果を可視化。スタッフごとの利用状況や、削減された業務時間を一目で確認でき、導入効果を数値で把握できます。",
    icon: (
      <svg
        className="w-10 h-10"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
        />
      </svg>
    ),
  },
];

const steps = [
  {
    num: "01",
    title: "音声で話す",
    desc: "介護の現場でケアをしながら、スマートフォンに向かって記録内容を話すだけ。",
  },
  {
    num: "02",
    title: "AIが自動変換",
    desc: "AIが音声を認識し、適切な記録形式に自動変換。専門用語も正確に認識します。",
  },
  {
    num: "03",
    title: "記録完成",
    desc: "変換された記録を確認・編集して完了。手入力と比べて大幅な時間短縮を実現。",
  },
];

export default function ServicePage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-primary to-primary-light py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="section-title-en text-4xl md:text-5xl text-white mb-4">
            SERVICE
          </h1>
          <p className="text-white/70 text-sm mb-6">サービス紹介</p>
          <div className="w-12 h-0.5 bg-white mx-auto mb-8" />
          <p className="text-white text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
            介護記録アプリ「ながらかいご」
            <br />
            AI搭載による音声入力で事務作業をゼロに
          </p>
        </div>
      </section>

      {/* App Overview */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle en="NAGARA KAIGO" ja="ながらかいご" />

          <div className="max-w-3xl mx-auto text-center mb-16">
            <p className="text-gray-600 text-lg leading-relaxed">
              「ながらかいご」は、介護現場での音声入力による自動記録で
              <br className="hidden md:block" />
              業務時間を大幅に削減し、ケアの質を向上させる介護記録アプリです。
            </p>
          </div>

          {/* App mockup placeholder */}
          <div className="max-w-md mx-auto mb-16">
            <div className="bg-gray-50 rounded-3xl p-8 shadow-lg border border-gray-100">
              <div className="bg-white rounded-2xl p-6 shadow-sm">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center">
                    <svg
                      className="w-6 h-6 text-white"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z"
                      />
                    </svg>
                  </div>
                  <div>
                    <p className="font-bold text-lg">ながらかいご</p>
                    <p className="text-xs text-gray-400">
                      AI介護記録アシスタント
                    </p>
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="h-3 bg-gray-100 rounded-full w-full" />
                  <div className="h-3 bg-gray-100 rounded-full w-4/5" />
                  <div className="h-3 bg-gray-100 rounded-full w-3/5" />
                </div>
                <div className="mt-6 flex justify-center">
                  <div className="w-16 h-16 rounded-full bg-accent/20 flex items-center justify-center">
                    <div className="w-12 h-12 rounded-full bg-accent flex items-center justify-center">
                      <svg
                        className="w-6 h-6 text-white"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M12 14c1.66 0 3-1.34 3-3V5c0-1.66-1.34-3-3-3S9 3.34 9 5v6c0 1.66 1.34 3 3 3z" />
                        <path d="M17 11c0 2.76-2.24 5-5 5s-5-2.24-5-5H5c0 3.53 2.61 6.43 6 6.92V21h2v-3.08c3.39-.49 6-3.39 6-6.92h-2z" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle en="FEATURES" ja="機能紹介" />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {features.map((feature, i) => (
              <div
                key={i}
                className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="w-16 h-16 rounded-2xl bg-primary/10 text-primary flex items-center justify-center mb-6">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold mb-4">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle en="HOW IT WORKS" ja="ご利用の流れ" />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {steps.map((step, i) => (
              <div key={i} className="text-center">
                <div className="w-20 h-20 rounded-full bg-primary text-white flex items-center justify-center mx-auto mb-6">
                  <span className="text-2xl font-bold font-[Lato]">
                    {step.num}
                  </span>
                </div>
                <h3 className="text-lg font-bold mb-3">{step.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {step.desc}
                </p>
                {i < steps.length - 1 && (
                  <div className="hidden md:block absolute right-0 top-1/2 transform translate-x-1/2 -translate-y-1/2">
                    <svg
                      className="w-6 h-6 text-gray-300"
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
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTASection />
    </>
  );
}
