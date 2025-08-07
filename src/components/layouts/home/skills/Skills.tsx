import FadeUpOnScroll from "@/components/anim/FadeUpOnScroll";
import ZoomInOnScroll from "@/components/anim/ZoomInOnScroll";
import ZoomOutOnScroll from "@/components/anim/ZoomOutOnScroll";
import Title from "@/components/ui/layoutTitle/Title";
import { useTranslations } from "next-intl";
import { IconType } from "react-icons";
import { AiOutlineHtml5 } from "react-icons/ai";
import { FaCss3 } from "react-icons/fa";
import { GrReactjs } from "react-icons/gr";
import { IoLogoJavascript } from "react-icons/io";
import { RiComputerLine, RiNextjsLine, RiNodejsLine } from "react-icons/ri";
import { TbDeviceMobile } from "react-icons/tb";

interface ILangProps {
  Icon: IconType;
  title: string;
  color: "html" | "css" | "js" | "react" | "node" | "next";
  iconColor?: string;
  id: number;
}

const langs: ILangProps[] = [
  {
    Icon: AiOutlineHtml5,
    color: "html",
    title: "HTML",
    id: 1,
  },
  {
    Icon: FaCss3,
    color: "css",
    title: "CSS",
    id: 2,
  },
  {
    Icon: IoLogoJavascript,
    color: "js",
    title: "JS",
    id: 3,
  },
  {
    Icon: GrReactjs,
    color: "react",
    title: "REACT",
    id: 4,
  },
  {
    Icon: RiNextjsLine,
    color: "next",
    title: "NEXT",
    iconColor: "black",
    id: 5,
  },
  {
    Icon: RiNodejsLine,
    color: "node",
    title: "NODE",
    id: 6,
  },
];

const Skills = () => {
  const t = useTranslations("Skills");

  return (
    <FadeUpOnScroll id="skills" className="min-h-screen flex flex-col">
      <span className="text-9xl text-brand1 lg:flex hidden">
        <span className="flex-1/3"></span>
        <span className="flex-1/3"></span>
        <span className="flex-1/3">{"</>"}</span>
      </span>

      <Title title={t("title")} description={t("description")} />

      <div className="flex flex-col md:flex-row justify-center items-center gap-x-20">
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
      <div className="flex flex-wrap justify-center gap-20">
        {langs.map((l) => (
          <LanguegeCard key={l.id} {...l} />
        ))}
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
    viewport={{ once: false }}
    className="w-[288px] h-[132px] uppercase bg-white my-10 rounded-xl 
  flex flex-col items-center font-IBM justify-around text-black"
  >
    <Icon className="text-3xl" />
    <span className="text-lg">{title}</span>
    <span className="font-light text-gray-400">{desc}</span>
  </ZoomOutOnScroll>
);

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

const LanguegeCard = ({
  Icon,
  title,
  color,
  iconColor = "white",
}: ILangProps) => {
  return (
    <ZoomInOnScroll
      viewport={{ once: false }}
      className="flex flex-col items-center gap-2"
    >
      <div``
        className={`w-[100px] h-[100px] flex justify-center items-center
         rounded-full text-4xl ${bgColors[color]}  text-${iconColor}`}
      >
        <Icon />
      </div>

      <span className={`${textColors[color]}`}>{title}</span>
    </ZoomInOnScroll>
  );
};
