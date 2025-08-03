import Button from "@/components/ui/button/Button";
import { getTranslations } from "next-intl/server";
import Image from "next/image";
import Link from "next/link";
import { FiMapPin } from "react-icons/fi";
import { GoClock } from "react-icons/go";
import { IoIosLink } from "react-icons/io";
import { MdOutlineFileDownload, MdOutlineMailOutline } from "react-icons/md";

const SectionHero = async () => {
  const t = await getTranslations("homePage");

  return (
    <div
      id="#"
      className="flex mb-22 justify-around items-center gap-10 w-full lg:max-h-screen flex-col lg:flex-row"
    >
      <h1 className="text-6xl lg:hidden inline-block text-brand2">Developer</h1>

      <div className="flex flex-3/8 lg:px-10 items-center justify-center h-full">
        <div
          className="w-[320px] font-IBM h-[520px] border-l-4 border-t-4 border-r-2 p-[24px] border-b-2 rounded-tl-[200px]
         rounded-br-[200px] [box-shadow:-28px_-8px_36px_-16px_rgba(0,255,255,0.16)] bg-bg1  border-white
         flex flex-col items-center justify-around"
        >
          <div className="flex flex-col gap-2 items-center">
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
          </div>

          <div className="flex flex-col gap-2 text-base">
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

            <span className="flex gap-3 items-center">
              <span className="badge">Html</span>
              <span className="badge">Css</span>
              <span className="badge">Js</span>
              <span className="badge">React</span>
            </span>
          </div>

          <Button color="light" className="mr-16 w-[227px]">
            Download CV
            <MdOutlineFileDownload size={20} />
          </Button>
        </div>
      </div>

      <div className="flex self-stretch [@media(max-width:768px)]:flex-col md:px-10 px-5 lg:p-2 flex-5/8">
        <div className="flex-3/8 flex flex-col justify-around py-5">
          <h1 className="lg:text-6xl xl:text-7xl hidden lg:inline-block text-brand2">
            {t("sectionHeroTitle")}
          </h1>
          <div className="flex flex-col gap-3 text-4xl xl:text5xl">
            <span className="text-base text-brand2 -ml-5 opacity-70">
              {"</h1>"}
            </span>
            <span>Hey</span>
            <span>
              I’m <span className="text-brand1">Mani</span>,
            </span>
            <span>
              Full-Stack Developer{" "}
              <span className="text-base text-brand2 opacity-70">
                {"</h1>"}
              </span>
            </span>
          </div>

          <p className="text-base font-extralight text-gray-400">
            <span className="text-base text-gray-400 -ml-5 opacity-70">
              {"<p>"}
            </span>
            <br />
            {t("sectionHeroDescription")}
            <br />
            <span className="text-base text-gray-400 -ml-5 opacity-70">
              {"</p>"}
            </span>
          </p>

          <Link
            className="flex gap-3 items-center text-3xl text-brand1"
            href="/"
          >
            Let’s Talk
            <span className="p-2 bg-grey rounded-full">
              <MdOutlineMailOutline />
            </span>
          </Link>
        </div>

        <div className="flex-2/8 flex font-IBM flex-col justify-around items-center">
          <div className="w-[215px] flex flex-col font-light gap-8 justify-around items-center h-[378px] px-8 py-12 bg-bg2 rounded-[100px]">
            <div className="text-xl items-center flex gap-3">
              <span className="text-brand1 text-5xl">3</span>
              Programming Languages
            </div>
            <div className="text-xl flex items-center gap-3">
              <span className="text-brand1 text-5xl">6</span>
              Development Tools
            </div>
            <div className="text-xl flex items-center gap-3">
              <span className="text-brand1 text-5xl">1</span>
              Year of Experience
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SectionHero;
