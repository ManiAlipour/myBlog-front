import { cookies } from "next/headers";
import TitleBorderBottom from "./TitleWithBBorder";

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

      <p
        className={`${
          en ? "font-IBM " : "font-vazir"
        }px-0.5 text-center font-extralight`}
      >
        {description}
      </p>
    </div>
  );
};

export default Title;
