"use client";
import Button from "@/components/ui/button/Button";
import Image from "next/image";
import Link from "next/link";
import { FiMapPin } from "react-icons/fi";
import { GoClock } from "react-icons/go";
import { IoIosLink } from "react-icons/io";
import { MdOutlineFileDownload, MdOutlineMailOutline } from "react-icons/md";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { useLocale, useTranslations } from "next-intl";
import Typewriter from "@/components/anim/TypingAnimation";
import MotionFadeUp from "@/components/anim/FadeUp";

const badgeList = ["Html", "Css", "Js", "React"];

const SectionHero = () => {
  const t = useTranslations("SectionHero");
  const locale = useLocale();

  const en = locale === "en";

  const [show, setShow] = useState(false);
  useEffect(() => {
    setTimeout(() => setShow(true), 150);
  }, []);

  // انیمیشن برای بخش‌ها
  const sectionVariant = {
    hidden: { opacity: 0, y: 40 },
    visible: (delay = 0) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, delay },
    }),
  };
  // انیمیشن ستگِر برای badgeها (مهارت‌ها)
  const badgeContainer = {
    visible: {
      transition: { staggerChildren: 0.13, delayChildren: 0.8 },
    },
  };

  const badgeItem = {
    hidden: { opacity: 0, scale: 0.65 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        type: "spring" as const,
        stiffness: 240,
      },
    },
  };

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          id="#"
          className="flex mb-22 justify-around items-center gap-10 w-full lg:max-h-screen flex-col lg:flex-row"
          initial="hidden"
          animate="visible"
          variants={sectionVariant}
        >
          {/* MOBILE TITLE */}
          <motion.h1
            className={`text-6xl lg:hidden inline-block text-brand1 ${
              en ? "font-ubuntu" : "font-morabba"
            } `}
            variants={sectionVariant}
            custom={0.08}
          >
            <Typewriter
              text={t("title")}
              speed={70}
              cursor={false}
              delay={1000}
            />
          </motion.h1>

          {/* PROFILE CARD */}
          <motion.div
            className="md:flex hidden flex-3/8 lg:px-10 items-center justify-center h-full"
            variants={sectionVariant}
            custom={0.12}
          >
            <motion.div
              className="w-[320px] font-IBM h-[520px] border-l-4 border-t-4 border-r-2 p-[24px] border-b-2 rounded-tl-[200px]
                rounded-br-[200px] [box-shadow:-28px_-8px_36px_-16px_rgba(0,255,255,0.16)] bg-bg1  border-white
                flex flex-col items-center justify-around"
              initial={{ opacity: 0, y: 44, scale: 0.97 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{
                duration: 0.7,
                delay: 0.22,
                type: "spring",
                stiffness: 90,
              }}
              whileHover={{
                scale: 1.04,
                boxShadow: "0 4px 36px #f7f3ec80",
              }}
            >
              {/* PROFILE */}
              <motion.div
                className="flex flex-col gap-2 items-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.35, duration: 0.5 }}
              >
                <Image
                  src="/images/profile-photo.png"
                  alt="profile"
                  width={86}
                  height={86}
                  priority
                />
                <span className="text-xl font-bold">Mani</span>
                <span className="text-base font-extralight">
                  Full-stack developer
                </span>
              </motion.div>

              {/* INFORMATION */}
              <motion.div
                className="flex flex-col gap-2 text-base"
                initial={{ opacity: 0, y: 26 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.48, duration: 0.48 }}
              >
                <span className="flex gap-3 items-center">
                  <MdOutlineMailOutline className="text-brand1" />
                  mani.developer4@gmail.com
                </span>
                <span className="flex gap-3 items-center">
                  <FiMapPin className="text-brand1" />
                  Iran
                </span>
                <span className="flex gap-3 items-center">
                  <GoClock className="text-brand1" />
                  Full-time / Freelancer
                </span>
                <span className="flex gap-3 items-center">
                  <IoIosLink className="text-brand1" />
                  www.manialipour.com
                </span>

                {/* SKILLS BADGE*/}
                <motion.span
                  className="flex gap-2 items-center mt-1"
                  variants={badgeContainer}
                  initial="hidden"
                  animate="visible"
                >
                  {badgeList.map((tech) => (
                    <motion.span
                      key={tech}
                      variants={badgeItem}
                      className="badge"
                    >
                      {tech}
                    </motion.span>
                  ))}
                </motion.span>
              </motion.div>

              {/* DOWNLOAD BTN HOVER EFFECT */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.72, duration: 0.38 }}
                className="w-full flex justify-center"
              >
                <motion.div whileHover={{ scale: 1.07 }}>
                  <Button
                    color="light"
                    className="mr-16 w-[227px] flex justify-center gap-2 items-center"
                  >
                    Download CV
                    <MdOutlineFileDownload size={20} />
                  </Button>
                </motion.div>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* STATISTICS */}
          <div className="flex self-stretch [@media(max-width:768px)]:flex-col md:px-10 px-5 lg:p-2 flex-5/8">
            <motion.div
              className="flex-3/8 flex flex-col justify-around py-5"
              variants={sectionVariant}
              custom={0.33}
            >
              <h1
                className={`lg:text-6xl ${
                  en ? "font-ubuntu" : "font-morabba"
                } xl:text-7xl hidden lg:inline-block text-brand2`}
              >
                <Typewriter
                  text={t("title")}
                  cursor="|"
                  speed={70}
                  delay={1000}
                />
              </h1>
              <motion.div
                className="flex flex-col gap-3 text-4xl xl:text5xl"
                initial={{ opacity: 0, x: en ? 36 : -36 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{
                  delay: 0.41,
                  duration: 0.72,
                  type: "spring",
                  stiffness: 100,
                }}
              >
                <span className="text-base text-brand2 -ml-5 opacity-70">
                  {"</h1>"}
                </span>
                <span>{t("hey")}</span>
                <span>
                  {t("Im")} <span className="text-brand1">{t("Name")}</span>,
                </span>
                <span>
                  {t("fullStack")}{" "}
                  <span className="text-base text-brand2 opacity-70">
                    {"</h1>"}
                  </span>
                </span>
              </motion.div>

              <motion.p
                className="text-base font-extralight text-gray-400"
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.71, duration: 0.62 }}
              >
                <span className="text-base text-gray-400 -ml-5 opacity-70">
                  {"<p>"}
                </span>
                <br />
                {t("description")}
                <br />
                <span className="text-base text-gray-400 -ml-5 opacity-70">
                  {"</p>"}
                </span>
              </motion.p>

              <motion.div
                initial={{ opacity: 0, scale: 0.93 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.92, duration: 0.35 }}
              >
                <Link
                  className="flex gap-3 items-center text-3xl text-brand1"
                  href="/"
                >
                  {t("talk")}
                  <span className="p-2 bg-grey rounded-full">
                    <MdOutlineMailOutline />
                  </span>
                </Link>
              </motion.div>
            </motion.div>

            {/* Stats Card */}
            <motion.div
              className={`flex-2/8 hidden md:flex ${
                en ? "font-IBM" : "font-vazir"
              } flex-col justify-around items-center`}
              initial={{ opacity: 0, y: 14, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{
                delay: 1.08,
                duration: 0.58,
                type: "spring",
                stiffness: 60,
              }}
            >
              <div className="w-[215px] flex flex-col font-light gap-8 justify-around items-center h-[378px] px-8 py-12 bg-bg2 rounded-[100px] shadow-lg">
                <div className="text-xl items-center flex gap-3">
                  <span className="text-brand1 text-5xl">3</span>
                  {t("programmerLangs")}
                </div>
                <div className="text-xl flex items-center gap-3">
                  <span className="text-brand1 text-5xl">6</span>
                  {t("devTools")}
                </div>
                <div className="text-xl flex items-center gap-3">
                  <span className="text-brand1 text-5xl">1</span>
                  {t("exp")}
                </div>
              </div>
            </motion.div>

            <div className="md:hidden grid grid-cols-3 gap-4 w-full mt-6">
              <MotionFadeUp className="flex flex-col items-center bg-bg2 p-3 rounded-2xl shadow-md">
                <span className="text-brand1 text-3xl font-bold">3</span>
                <span className="text-xs text-gray-400 text-center">
                  {t("programmerLangs")}
                </span>
              </MotionFadeUp>
              <MotionFadeUp className="flex flex-col items-center bg-bg2 p-3 rounded-2xl shadow-md">
                <span className="text-brand1 text-3xl font-bold">6</span>
                <span className="text-xs text-gray-400 text-center">
                  {t("devTools")}
                </span>
              </MotionFadeUp>
              <MotionFadeUp className="flex flex-col items-center bg-bg2 p-3 rounded-2xl shadow-md">
                <span className="text-brand1 text-3xl font-bold">1</span>
                <span className="text-xs text-gray-400 text-center">
                  {t("exp")}
                </span>
              </MotionFadeUp>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default SectionHero;
