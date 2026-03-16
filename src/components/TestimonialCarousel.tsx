"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

type Testimonial = {
  quote: string;
  role: string;
  name: string;
};

type Props = {
  testimonials: Testimonial[];
};

export default function TestimonialCarousel({ testimonials }: Props) {
  return (
    <Swiper
      modules={[Autoplay, Pagination]}
      spaceBetween={20}
      slidesPerView={1}
      pagination={{ clickable: true }}
      autoplay={{ delay: 4000, disableOnInteraction: false }}
      loop={true}
      breakpoints={{
        640: { slidesPerView: 2, spaceBetween: 20 },
        1024: { slidesPerView: 3, spaceBetween: 24 },
      }}
      className="testimonial-swiper"
    >
      {testimonials.map((t, i) => (
        <SwiperSlide key={i}>
          <div className="bg-white rounded-2xl p-8 text-center shadow-sm border border-[#eee] min-h-[160px] flex flex-col justify-center">
            <p className="text-[14px] text-[#333] leading-relaxed mb-4">
              「{t.quote}」
            </p>
            <p className="text-[12px] text-[#aaa]">
              - {t.role} {t.name}
            </p>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
