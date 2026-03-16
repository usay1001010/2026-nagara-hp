import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title:
    "介護記録アプリなら「ながらかいご」｜AI搭載による音声入力で事務作業をゼロに",
  description:
    "介護しながら事務作業を終わらせる会話記録AI「ながらかいご」。介護作業中や会議の音声から自動で記録の作成、議事録の生成を行う介護支援アプリです。",
};

const features = [
  {
    title: "自動記録作成",
    description: "介護記録をウェアラブル端末からリアルタイムでドキュメント化",
    image: "/images/feature-1.webp",
  },
  {
    title: "月間報告書作成",
    description:
      "日々の記録とケアプランをRAGシステムにより１か月ごとにまとめて報告書を作成",
    image: "/images/feature-2.webp",
  },
  {
    title: "自動議事録作成",
    description:
      "介護現場での会議や面談の議事録を話者を識別して自動で生成",
    image: "/images/feature-3.webp",
  },
  {
    title: "AIチャット",
    description:
      "AIに質問することで膨大な記録データや報告書、議事録から的確に回答",
    image: "/images/feature-4.webp",
  },
];

const testimonials = [
  {
    quote: "実証実験の1週間で効果を実感できました。",
    role: "経営者",
    name: "H様",
  },
  {
    quote: "5~10万円かけてでも導入したい。",
    role: "施設長",
    name: "N様",
  },
  {
    quote: "音声で話すだけで介護記録が自動的に作成されます。",
    role: "介護士",
    name: "M様",
  },
  {
    quote: "外国人介護士のつたない日本語もしっかり認識してくれる。",
    role: "施設長",
    name: "O様",
  },
  {
    quote: "介護の専門用語もしっかり認識してくれて、実用性がある。",
    role: "介護士",
    name: "T様",
  },
  {
    quote: "値段が安いのに機能が充実している。すぐにでも導入したい。",
    role: "施設長",
    name: "K様",
  },
];

export default function NagarakaigoPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-[#e8f4fd] py-16 md:py-24 overflow-hidden">
        <div className="max-w-[1280px] mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center gap-10">
            <div className="flex-1">
              <h1 className="text-[32px] md:text-[44px] font-bold text-text-dark leading-tight mb-6">
                介護しながら
                <br />
                事務作業を終わらせる
                <br />
                会話記録AI
              </h1>
              <div className="mb-6">
                <Image
                  src="/images/nagarakaigo-logo.svg"
                  alt="ながらかいご"
                  width={190}
                  height={50}
                  className="h-[50px] w-auto"
                />
              </div>
              <p className="text-[15px] text-text leading-relaxed">
                ながらかいごは介護作業中や会議の音声から自動で記録の作成、議事録の生成を行う介護支援アプリです。
              </p>
            </div>
            <div className="flex-1">
              <Image
                src="/images/nagarakaigo-app.webp"
                alt="ながらかいごアプリ画面"
                width={600}
                height={340}
                className="w-full h-auto rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Pain Point */}
      <section className="py-16 bg-white">
        <div className="max-w-[640px] mx-auto px-6 text-center">
          <div className="bg-bg-light rounded-2xl p-10">
            <p className="text-[22px] md:text-[26px] font-bold text-text-dark leading-relaxed">
              介護士の仕事の33%が
              <br />
              <span className="text-primary">
                &ldquo;記録作業&rdquo;
              </span>
              で失われている
            </p>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 bg-bg-light">
        <div className="max-w-[960px] mx-auto px-6">
          <h2 className="text-[28px] font-bold text-center mb-3">主要機能</h2>
          <p className="text-center text-[14px] text-text-light mb-12">
            ながらかいごは以下の４つの機能で介護士さんの悩みを解決します
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {features.map((feature, i) => (
              <div
                key={i}
                className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="aspect-square w-full max-w-[200px] mx-auto mb-4 relative">
                  <Image
                    src={feature.image}
                    alt={feature.title}
                    fill
                    className="object-contain"
                  />
                </div>
                <h3 className="text-[18px] font-bold text-center mb-2">
                  {feature.title}
                </h3>
                <p className="text-[13px] text-text-light text-center leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-white">
        <div className="max-w-[960px] mx-auto px-6">
          <h2 className="text-[28px] font-bold text-center mb-3">
            利用者の声
          </h2>
          <div className="h-[2px] w-[40px] bg-primary mx-auto mb-12" />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <div
                key={i}
                className="bg-bg-light rounded-xl p-6 text-center"
              >
                <p className="text-[14px] text-text leading-relaxed mb-4">
                  「{t.quote}」
                </p>
                <p className="text-[12px] text-text-muted">
                  - {t.role} {t.name}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Results */}
      <section className="py-16 bg-bg-light">
        <div className="max-w-[960px] mx-auto px-6">
          <h2 className="text-[28px] font-bold text-center mb-12">導入効果</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-xl p-8">
              <div className="flex items-center gap-3 mb-4">
                <span className="material-icons text-primary text-[28px]">
                  assignment_turned_in
                </span>
                <h3 className="text-[20px] font-bold">業務時間の大幅削減</h3>
              </div>
              <p className="text-[14px] text-text leading-relaxed">
                実証実験運用中の施設様からの見込みで、年間10,000時間以上の削減効果が期待される。紙とPCに追われていた記録業務を
                &ldquo;話すだけ&rdquo; に置き換え。
              </p>
            </div>
            <div className="bg-white rounded-xl p-8">
              <div className="flex items-center gap-3 mb-4">
                <span className="material-icons text-red-400 text-[28px]">
                  favorite
                </span>
                <h3 className="text-[20px] font-bold">ケアの質向上</h3>
              </div>
              <p className="text-[14px] text-text leading-relaxed">
                普段取ることのない内容も&ldquo;話すだけで&rdquo;詳細に記録を作成。文章作成が苦手な介護士さんでもAIの力で高レベルな記録の作成をサポート。
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
