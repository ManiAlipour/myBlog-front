import TitleBorderBottom from "./TitleWithBBorder";
import TypewriterOnScroll from "@/components/anim/TypingOnScroll";
import { useLocale } from "next-intl";

const Title = ({
  title,
  description,
}: {
  title: string;
  description: string;
}) => {
  const locale = useLocale();

  const en = locale === "en";

  return (
    <div className="mx-auto flex flex-col">
      <span
        className={`text-6xl lg:text-5xl text-brand1 self-center ${
          en ? "font-ubuntu" : "font-morabba"
        }`}
      >
        {title}
      </span>

      <span className="w-1/3 mx-auto">
        <TitleBorderBottom />
      </span>

      <TypewriterOnScroll
        text={description}
        className={` px-2 text-center font-extralight py-2 block ${
          en ? "font-IBM " : "font-vazir"
        }`}
        speed={70}
        cursor="▍"
      />
    </div>
  );
};

export default Title;
