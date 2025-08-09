import { IconType } from "react-icons";
import { AiOutlineHtml5 } from "react-icons/ai";
import { FaCss3 } from "react-icons/fa";
import { GrReactjs } from "react-icons/gr";
import { IoLogoJavascript } from "react-icons/io";
import { RiNextjsLine, RiNodejsLine } from "react-icons/ri";
import { SiPrisma, SiRedux } from "react-icons/si";

const skillsLangs: ILangProps[] = [
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
    title: "JavaScript",
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
  {
    Icon: SiPrisma,
    title: "Prisma",
    color: "next",
    id: 7,
  },
  {
    Icon: SiRedux,
    title: "Redux",
    color: "react",
    id: 8,
  },
];

export default skillsLangs;

export interface ILangProps {
  Icon: IconType;
  title: string;
  color: "html" | "css" | "js" | "react" | "node" | "next";
  iconColor?: string;
  id: number;
  className?: string;
}
