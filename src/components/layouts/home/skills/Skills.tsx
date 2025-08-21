"use client";
import FadeUpOnScroll from "@/components/anim/FadeUpOnScroll";
import ZoomInOnScroll from "@/components/anim/ZoomInOnScroll";
import ZoomOutOnScroll from "@/components/anim/ZoomOutOnScroll";
import Title from "@/components/ui/layoutTitle/Title";
import { useTranslations } from "next-intl";
import { IconType } from "react-icons";
import { RiComputerLine } from "react-icons/ri";
import { TbDeviceMobile } from "react-icons/tb";
import skillsLangs, { ILangProps } from "@/utils/constans/skils";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaArrowDown, FaArrowUp } from "react-icons/fa";
import SkillsSlider from "@/components/features/LanguageSlider/LanguageSlider";

const Skills = () => {
  const t = useTranslations("Skills");
  const [showAll, setShowAll] = useState(false);

  const visibleLangs = showAll ? skillsLangs : skillsLangs.slice(0, 5);

  return (
    <FadeUpOnScroll
      id="skills"
      className="md:min-h-screen py-20 md:py-0 flex flex-col"
    >
      <span className="text-9xl text-brand1 lg:flex hidden">
        <span className="flex-1/3"></span>
        <span className="flex-1/3"></span>
        <span className="flex-1/3">{"</>"}</span>
      </span>

      <Title title={t("title")} description={t("description")} />

      {/* دسکتاپ */}
      <div className="md:flex hidden flex-col md:flex-row justify-center items-center gap-x-20">
        <SkillCard
          Icon={RiComputerLine}
          desc="HTML·CSS·JS·REACT..."
          title="web developement"
        />
        <SkillCard
          Icon={TbDeviceMobile}
          desc="REACT-NATIVE"
          title="APP developement"
        />
      </div>

      <div className="md:flex hidden flex-wrap justify-center gap-20">
        <SkillsSlider />
      </div>

      {/* موبایل */}

      <div className="flex md:hidden flex-col items-center gap-5 mt-5 w-full">
        <div className="grid grid-cols-2 gap-4 w-full">
          <AnimatePresence>
            {visibleLangs.map((l, index) => {
              const isFullWidth = [2, 5].includes(index); // فقط برای مثال
              return (
                <motion.div
                  key={l.id}
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3 }}
                  className={isFullWidth ? "col-span-2" : ""}
                >
                  <LanguegeCardOnMobile
                    fullWidthIndex={[2, 5]}
                    index={index}
                    {...l}
                  />
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>

        {skillsLangs.length > 5 && (
          <button
            className="bg-bg2 px-4 py-2 rounded-xl flex gap-2 items-center justify-center"
            onClick={() => setShowAll(!showAll)}
          >
            {showAll ? t("close") : t("open")}
            {showAll ? <FaArrowUp /> : <FaArrowDown />}
          </button>
        )}
      </div>
    </FadeUpOnScroll>
  );
};

export default Skills;

const SkillCard = ({
  Icon,
  title,
  desc,
}: {
  Icon: IconType;
  title: string;
  desc: string;
}) => (
  <ZoomOutOnScroll
    className="w-[288px] h-[132px] uppercase bg-white my-10 rounded-xl 
  flex flex-col items-center font-IBM justify-around text-black"
  >
    <Icon className="text-3xl" />
    <span className="text-lg">{title}</span>
    <span className="font-light gap-4 text-gray-400">{desc}</span>
  </ZoomOutOnScroll>
);

// رنگ‌ها
const bgColors = {
  html: "bg-html",
  css: "bg-css",
  js: "bg-js",
  react: "bg-react",
  node: "bg-green-600",
  next: "bg-white",
};

const textColors = {
  html: "text-html",
  css: "text-css",
  js: "text-js",
  react: "text-react",
  node: "text-green-600",
  next: "text-white",
};

interface ILangMobileProps extends ILangProps {
  fullWidthIndex?: number[];
  index: number;
}

const LanguegeCardOnMobile = ({
  Icon,
  title,
  color,
  index,
  fullWidthIndex = [],
  className = "",
}: ILangMobileProps) => {
  const isFullWidth = fullWidthIndex.indexOf(index as number) >= 0;

  return (
    <ZoomInOnScroll
      className={`flex font-ubuntu items-center px-5 py-3 my-2 gap-4 rounded-2xl 
      backdrop-blur-md bg-white/10 shadow-lg border border-white/10
      transition-all duration-300 hover:scale-105 hover:bg-white/20
      ${textColors[color]} ${className} text-base font-medium
      ${isFullWidth ? "w-2/3 mx-auto" : "flex-1/2"} `}
    >
      <div
        className={`w-12 h-12 flex items-center justify-center rounded-full shadow-md ${bgColors[color]} bg-opacity-80`}
      >
        <Icon
          className={`${
            color === "next" || color === "js" || color === "react"
              ? "text-black"
              : "text-white"
          } text-2xl`}
        />
      </div>

      <span className="whitespace-nowrap">{title}</span>
    </ZoomInOnScroll>
  );
};
