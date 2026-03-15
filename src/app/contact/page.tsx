"use client";

import { useState } from "react";
import type { FormEvent } from "react";
import SectionTitle from "@/components/SectionTitle";

export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    // TODO: microCMS form API or external form service integration
    // For now, simulate submission
    await new Promise((resolve) => setTimeout(resolve, 1000));

    setIsSubmitting(false);
    setIsSubmitted(true);
  };

  if (isSubmitted) {
    return (
      <>
        <section className="bg-gradient-to-br from-primary to-primary-light py-32">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="section-title-en text-4xl md:text-5xl text-white mb-4">
              CONTACT
            </h1>
            <p className="text-white/70 text-sm mb-6">お問い合わせ</p>
            <div className="w-12 h-0.5 bg-white mx-auto" />
          </div>
        </section>

        <section className="py-24 bg-white">
          <div className="max-w-2xl mx-auto px-4 text-center">
            <div className="bg-gray-50 rounded-2xl p-12">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg
                  className="w-8 h-8 text-green-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </div>
              <h2 className="text-2xl font-bold mb-4">
                お問い合わせを受け付けました
              </h2>
              <p className="text-gray-600 leading-relaxed">
                ご返信は3営業日ほどお時間をいただいております。
                <br />
                お急ぎの場合は、下記メールアドレスまでご連絡ください。
              </p>
              <p className="mt-4">
                <a
                  href="mailto:itsuki.okada@nagarainc.co.jp"
                  className="text-primary hover:underline"
                >
                  itsuki.okada@nagarainc.co.jp
                </a>
              </p>
            </div>
          </div>
        </section>
      </>
    );
  }

  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-primary to-primary-light py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="section-title-en text-4xl md:text-5xl text-white mb-4">
            CONTACT
          </h1>
          <p className="text-white/70 text-sm mb-6">お問い合わせ</p>
          <div className="w-12 h-0.5 bg-white mx-auto mb-8" />
          <p className="text-white text-lg max-w-2xl mx-auto leading-relaxed">
            弊社へのお問い合わせはこちらのフォームより承っております。
            <br className="hidden sm:block" />
            ご返信は3営業日ほどお時間をいただいております。
          </p>
        </div>
      </section>

      {/* Form */}
      <section className="py-24 bg-white">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle en="INQUIRY FORM" ja="お問い合わせフォーム" />

          <form onSubmit={handleSubmit} className="space-y-8">
            {/* Company Name */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                会社名・団体名
              </label>
              <input
                type="text"
                name="company"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-colors"
                placeholder="株式会社○○"
              />
            </div>

            {/* Name */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                お名前 <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                name="name"
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-colors"
                placeholder="山田 太郎"
              />
            </div>

            {/* Email */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                メールアドレス <span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                name="email"
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-colors"
                placeholder="example@email.com"
              />
            </div>

            {/* Phone */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                電話番号
              </label>
              <input
                type="tel"
                name="phone"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-colors"
                placeholder="090-1234-5678"
              />
            </div>

            {/* Category */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                お問い合わせ種別 <span className="text-red-500">*</span>
              </label>
              <select
                name="category"
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-colors bg-white"
              >
                <option value="">選択してください</option>
                <option value="service">サービスについて</option>
                <option value="demo">デモ・トライアルのお申し込み</option>
                <option value="price">料金について</option>
                <option value="partnership">パートナーシップについて</option>
                <option value="media">取材・メディア関連</option>
                <option value="other">その他</option>
              </select>
            </div>

            {/* Message */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                お問い合わせ内容 <span className="text-red-500">*</span>
              </label>
              <textarea
                name="message"
                required
                rows={6}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-colors resize-vertical"
                placeholder="お問い合わせ内容をご記入ください"
              />
            </div>

            {/* Submit */}
            <div className="text-center pt-4">
              <button
                type="submit"
                disabled={isSubmitting}
                className="inline-flex items-center justify-center bg-primary text-white font-bold px-12 py-4 rounded-full hover:bg-primary-light transition-colors tracking-wider text-sm disabled:opacity-50 disabled:cursor-not-allowed min-w-[200px]"
              >
                {isSubmitting ? (
                  <span className="flex items-center gap-2">
                    <svg
                      className="animate-spin w-4 h-4"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                        fill="none"
                      />
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                      />
                    </svg>
                    送信中...
                  </span>
                ) : (
                  "送信する"
                )}
              </button>
            </div>
          </form>
        </div>
      </section>
    </>
  );
}
