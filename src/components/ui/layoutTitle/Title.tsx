import { cookies } from "next/headers";
import TitleBorderBottom from "./TitleWithBBorder";
import TypewriterOnScroll from "@/components/anim/TypingOnScroll";

const Title = async ({
  title,
  description,
}: {
  title: string;
  description: string;
}) => {
  const cookie = await cookies();

  const { value: locale } = cookie.get("USER_LOCALE") || { value: "en" };
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
