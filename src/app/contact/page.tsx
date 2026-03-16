"use client";

import { useState } from "react";
import type { FormEvent } from "react";
import Image from "next/image";
import Breadcrumb from "@/components/Breadcrumb";
import SectionHeading from "@/components/SectionHeading";
import ScrollFadeIn from "@/components/ScrollFadeIn";

export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    await new Promise((resolve) => setTimeout(resolve, 1000));
    setIsSubmitting(false);
    setIsSubmitted(true);
  };

  if (isSubmitted) {
    return (
      <>
        <Breadcrumb items={[{ label: "CONTACT" }]} />
        <section className="py-24 bg-white">
          <div className="max-w-[600px] mx-auto px-4 sm:px-6 text-center">
            <p className="text-[18px] sm:text-[20px] font-bold mb-4">
              お問い合わせを受け付けました
            </p>
            <p className="text-[13px] sm:text-[14px] text-text-light">
              ご返信に3営業日ほどお時間をいただいております。
            </p>
          </div>
        </section>
      </>
    );
  }

  return (
    <>
      <Breadcrumb items={[{ label: "CONTACT" }]} />

      <section className="py-16 bg-white">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-10">
          <ScrollFadeIn>
            <SectionHeading en="CONTACT" ja="お問い合わせ" />
          </ScrollFadeIn>

          {/* Form card */}
          <ScrollFadeIn delay={100}>
            <div className="max-w-[800px] mx-auto bg-bg-light rounded-2xl p-6 sm:p-8 md:p-12">
              {/* Logo */}
              <div className="flex justify-center mb-8">
                <Image
                  src="/images/logo.svg"
                  alt="NAGARA"
                  width={160}
                  height={40}
                />
              </div>

              <h2 className="text-[18px] sm:text-[20px] md:text-[24px] font-bold text-center mb-6 leading-relaxed">
                弊社へのお問い合わせは
                <br />
                こちらのフォームより承っております。
              </h2>

              <div className="text-center text-[13px] sm:text-[14px] text-text-light mb-4 leading-relaxed">
                <p>
                  ご返信に3営業日ほどお時間をいただいております。
                  <br className="hidden sm:inline" />
                  3営業日を過ぎても返信がない場合は、お手数ですが再度お問い合わせをお願いいたします。
                </p>
                <p className="mt-3">
                  当フォームはお客さま専用の窓口です。営業目的のお問い合わせにつきましては、
                  <br className="hidden sm:inline" />
                  内容の如何を問わずお答えしておりません。ご理解とご協力をお願い申し上げます。
                </p>
              </div>

              <form onSubmit={handleSubmit} className="mt-10 space-y-6">
                {/* 法人名/施設名 */}
                <div>
                  <label className="flex items-center gap-1 text-[13px] sm:text-[14px] font-medium text-text mb-2">
                    法人名/施設名
                    <span className="text-red-500 text-[12px]">*</span>
                  </label>
                  <input
                    type="text"
                    name="company name"
                    placeholder="株式会社NAGARA"
                    required
                    className="w-full px-4 py-3 border-b border-text-muted bg-transparent focus:border-primary outline-none transition-colors text-[13px] sm:text-[14px]"
                  />
                </div>

                {/* お名前 */}
                <div>
                  <label className="flex items-center gap-1 text-[13px] sm:text-[14px] font-medium text-text mb-2">
                    お名前
                    <span className="text-red-500 text-[12px]">*</span>
                  </label>
                  <input
                    type="text"
                    name="Name"
                    placeholder="Your Name"
                    required
                    className="w-full px-4 py-3 border-b border-text-muted bg-transparent focus:border-primary outline-none transition-colors text-[13px] sm:text-[14px]"
                  />
                </div>

                {/* メールアドレス */}
                <div>
                  <label className="flex items-center gap-1 text-[13px] sm:text-[14px] font-medium text-text mb-2">
                    メールアドレス
                    <span className="text-red-500 text-[12px]">*</span>
                  </label>
                  <input
                    type="email"
                    name="Email"
                    placeholder="example@nagarainc.co.jp"
                    required
                    className="w-full px-4 py-3 border-b border-text-muted bg-transparent focus:border-primary outline-none transition-colors text-[13px] sm:text-[14px]"
                  />
                </div>

                {/* 電話番号 */}
                <div>
                  <label className="flex items-center gap-1 text-[13px] sm:text-[14px] font-medium text-text mb-2">
                    電話番号
                    <span className="text-red-500 text-[12px]">*</span>
                  </label>
                  <input
                    type="tel"
                    name="Phone number"
                    placeholder="Phone number"
                    required
                    className="w-full px-4 py-3 border-b border-text-muted bg-transparent focus:border-primary outline-none transition-colors text-[13px] sm:text-[14px]"
                  />
                </div>

                {/* 役職 */}
                <div>
                  <label className="flex items-center gap-1 text-[13px] sm:text-[14px] font-medium text-text mb-2">
                    役職
                  </label>
                  <input
                    type="text"
                    name="role"
                    placeholder="役職をご記入ください"
                    className="w-full px-4 py-3 border-b border-text-muted bg-transparent focus:border-primary outline-none transition-colors text-[13px] sm:text-[14px]"
                  />
                </div>

                {/* お問い合わせ内容 */}
                <div>
                  <label className="flex items-center gap-1 text-[13px] sm:text-[14px] font-medium text-text mb-2">
                    お問い合わせ内容
                    <span className="text-red-500 text-[12px]">*</span>
                  </label>
                  <textarea
                    name="Message"
                    placeholder="お問い合わせ内容をご記入ください"
                    required
                    rows={5}
                    className="w-full px-4 py-3 border-b border-text-muted bg-transparent focus:border-primary outline-none transition-colors text-[13px] sm:text-[14px] resize-vertical"
                  />
                </div>

                {/* Submit */}
                <div className="text-center pt-4">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="btn-primary disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? "送信中..." : "この内容で送信する"}
                    <span className="material-icons text-[18px]">
                      keyboard_arrow_right
                    </span>
                  </button>
                </div>
              </form>
            </div>
          </ScrollFadeIn>
        </div>
      </section>
    </>
  );
}
