import Link from "next/link";

export default function CTASection() {
  return (
    <section className="bg-primary py-20">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <h2 className="section-title-en text-3xl md:text-4xl text-white mb-4">
          CONTACT
        </h2>
        <p className="text-white/80 text-sm mb-4">お問い合わせ</p>
        <div className="w-12 h-0.5 bg-white mx-auto mb-8" />
        <p className="text-white text-lg mb-10 leading-relaxed">
          「ながらかいご」の導入・ご相談に関する
          <br className="hidden sm:block" />
          お問い合わせはこちらから
        </p>
        <Link
          href="/contact"
          className="inline-block bg-white text-primary font-bold px-12 py-4 rounded-full hover:bg-gray-100 transition-colors tracking-wider text-sm"
        >
          お問い合わせはこちら
        </Link>
      </div>
    </section>
  );
}
