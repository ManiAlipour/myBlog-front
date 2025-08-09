"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";
import skillsLangs, { ILangProps } from "@/utils/constans/skils";

export default function SkillsSlider() {
  return (
    <div className="w-full py-6">
      <Swiper
        modules={[Autoplay]}
        spaceBetween={20}
        loop={true}
        autoplay={{
          delay: 1500,
          disableOnInteraction: false,
        }}
        speed={1500}
        breakpoints={{
          320: { slidesPerView: 3 },
          768: { slidesPerView: 5 },
          1024: { slidesPerView: 7 },
        }}
      >
        {skillsLangs.map((skill: ILangProps) => (
          <SwiperSlide key={skill.id}>
            <div
              className={`flex flex-col items-center justify-center p-4 rounded-xl shadow-lg cursor-pointer
              bg-white/10 backdrop-blur-lg border border-white/20
              hover:shadow-[0_0_15px_var(--brand1)] transition`}
            >
              <skill.Icon size={40} color="\" className="mb-2" />
              <span className="text-white font-medium">{skill.title}</span>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
