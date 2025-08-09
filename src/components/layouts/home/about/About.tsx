import MotionFadeUp from "@/components/anim/FadeUp";
import FadeUpOnScroll from "@/components/anim/FadeUpOnScroll";
import { getLocale, getTranslations } from "next-intl/server";
import Image from "next/image";

const About = async () => {
  const t = await getTranslations("AboutMe");
  const locale = await getLocale();

  const en = locale === "en";

  return (
    <div
      id="about"
      className="flex md:px-10 gap-y-10 xl:gap-y-0 px-0 justify-center flex-col xl:flex-row items-center my-20 bg-bg2 min-h-screen py-20"
    >
      <div className="flex-1/2 px-10 flex w-full flex-col items-start h-full justify-around gap-y-10">
        <FadeUpOnScroll>
          <span
            className={`text-3xl px-6 py-3 border-2 border-brand1 rounded-tl-4xl rounded-br-4xl self-start ${
              en ? "font-ubuntu" : "font-morabba"
            }`}
          >
            {t("aboutMe")}
          </span>
        </FadeUpOnScroll>

        <FadeUpOnScroll>
          <MotionFadeUp className="self-start bg-bg1 py-5 px-2 md:p-10 rounded-4xl w-full">
            <span className="text-brand2 text-sm py-5">{"<p>"}</span>
            <p className={`${en ? "font-IBM " : "font-vazir"} w-full`}>
              <span className="text-2xl font-extralight text-brand1">
                {t("hello")}
              </span>
              <br />
              {t("myName") + " "} <span className="text-brand1">HTML</span>,{" "}
              <span className="text-brand1">CSS</span>,{" "}
              <span className="text-brand1">JS</span>,{" "}
              <span className="text-brand1">REACT</span>,{" "}
              <span className="text-brand1">NODE</span> and{" "}
              <span className="text-brand1">NEXT</span> {en ? "etc." : "و غیره"}{" "}
              <br />
              <br /> {t("smallDescription")}{" "}
              <span className="text-brand1">{t("writeBlog")}</span>
              {en ? ", " : "، یا"}{" "}
              <span className="text-brand1">{t("reading")}</span>
              {en ? ", or" : "، یا "}{" "}
              <span className="text-brand1">{t("game")}</span>. <br />
              <br /> {t("like")}
            </p>
            <span className="text-brand2 py-5 font-extralight text-sm">
              {"</p>"}
            </span>
          </MotionFadeUp>
        </FadeUpOnScroll>
      </div>

      <FadeUpOnScroll
        className="flex-1/2 hidden md:flex justify-center items-center"
      >
        <Image
          src="/images/coding.png"
          className="md:w-[462px] md:h-[556px] w-[272px] h-[364px]"
          width={462}
          height={556}
          alt="coding"
          priority
        />
      </FadeUpOnScroll>
    </div>
  );
};

export default About;
