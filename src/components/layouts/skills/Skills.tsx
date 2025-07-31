import TitleBorderBottom from "@/components/ui/layoutTitle/TitleWithBBorder";
import { IconType } from "react-icons";
import { AiOutlineHtml5 } from "react-icons/ai";
import { FaCss3 } from "react-icons/fa";
import { GrReactjs } from "react-icons/gr";
import { IoLogoJavascript } from "react-icons/io";
import { RiComputerLine, RiNextjsLine, RiNodejsLine } from "react-icons/ri";
import { TbDeviceMobile } from "react-icons/tb";

const Skills = () => {
  return (
    <div className="min-h-screen flex flex-col py-20">
      <span id="skills" className="text-9xl text-brand1 lg:flex hidden">
        <span className="flex-1/3"></span>
        <span className="flex-1/3"></span>
        <span className="flex-1/3">{"</>"}</span>
      </span>

      <div className="mx-auto flex flex-col">
        <span className="xl:text-6xl lg:text-5xl text-brand1 self-center">
          Skills
        </span>

        <span className="w-1/3 mx-auto">
          <TitleBorderBottom />
        </span>

        <p className="font-IBM font-extralight">
          I am striving to never stop learning and improving
        </p>
      </div>

      <div className="flex justify-center items-center gap-20">
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
        <LanguegeCard Icon={AiOutlineHtml5} color="html" title="HTML" />
        <LanguegeCard Icon={FaCss3} color="css" title="CSS" />
        <LanguegeCard Icon={IoLogoJavascript} color="js" title="JS" />
        <LanguegeCard Icon={GrReactjs} color="react" title="REACT" />
        <LanguegeCard
          Icon={RiNextjsLine}
          color="next"
          title="NEXT"
          iconColor="black"
        />
        <LanguegeCard Icon={RiNodejsLine} color="node" title="NODE" />
      </div>
    </div>
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
  <div
    className="w-[288px] h-[132px] uppercase bg-white my-10 rounded-xl 
  flex flex-col items-center font-IBM justify-around text-black"
  >
    <Icon className="text-3xl" />
    <span className="text-lg">{title}</span>
    <span className="font-light text-gray-400">{desc}</span>
  </div>
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
}: {
  Icon: IconType;
  title: string;
  color: "html" | "css" | "js" | "react" | "node" | "next";
  iconColor?: string;
}) => {
  return (
    <div className="flex flex-col items-center gap-2">
      <div
        className={`w-[100px] h-[100px] flex justify-center items-center
         rounded-full text-4xl ${bgColors[color]}  text-${iconColor}`}
      >
        <Icon />
      </div>

      <span className={`${textColors[color]}`}>{title}</span>
    </div>
  );
};
