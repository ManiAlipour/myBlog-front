import FadeUpOnScroll from "@/components/anim/FadeUpOnScroll";
import ZoomInOnScroll from "@/components/anim/ZoomInOnScroll";
import ZoomOutOnScroll from "@/components/anim/ZoomOutOnScroll";
import Title from "@/components/ui/layoutTitle/Title";
import { useTranslations } from "next-intl";
import { IconType } from "react-icons";
import { RiComputerLine } from "react-icons/ri";
import { TbDeviceMobile } from "react-icons/tb";
import skillsLangs, { ILangProps } from "@/utils/constans/skils";

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
        {skillsLangs.map((l) => (
          <LanguegeCard key={l.id} {...l} />
        ))}
      </div>

      <div className="flex md:hidden gap-5 justify-around items-center flex-wrap">
        {skillsLangs.map((l, index) => (
          <LanguegeCardOnMobile
            fullWidthIndex={[2, 5]}
            index={index}
            key={l.id}
            {...l}
          />
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
    className="w-[288px] h-[132px] uppercase bg-white my-10 rounded-xl 
  flex flex-col items-center font-IBM justify-around text-black"
  >
    <Icon className="text-3xl" />
    <span className="text-lg">{title}</span>
    <span className="font-light gap-4 text-gray-400">{desc}</span>
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
    <ZoomInOnScroll className="flex flex-col items-center gap-2">
      <div
        className={`w-[100px] h-[100px] flex justify-center items-center
         rounded-full text-4xl ${bgColors[color]}  text-${iconColor}`}
      >
        <Icon />
      </div>

      <span className={`${textColors[color]}`}>{title}</span>
    </ZoomInOnScroll>
  );
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
  // iconColor = "white",
  className = "",
}: ILangMobileProps) => {
  const isFullWidth = fullWidthIndex.indexOf(index as number);
  return (
    <ZoomInOnScroll
      className={`flex my-3  bg-bg2 items-center px-4 py-2 justify-center gap-4 
      rounded-full ${textColors[color]} ${className} text-lg ${
        isFullWidth >= 0 ? "w-2/3 mx-auto" : "min-w-1/3"
      } `}
    >
      <Icon className="text-3xl" />
      <span>{title}</span>
    </ZoomInOnScroll>
  );
};
