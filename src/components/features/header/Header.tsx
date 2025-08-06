import Link from "next/link";
import Links from "./Links";
import SearchBox from "./SearchBox";
import { FaGithubAlt, FaInstagram, FaTelegramPlane } from "react-icons/fa";
import { useTranslations } from "next-intl";
import Cookies from "js-cookie";

function Header() {
  const t = useTranslations("Header");

  const locale = Cookies.get("USER_LOCALE");

  const en = locale === "en";

  return (
    <div className="flex justify-between items-center max-w-full w-full px-5 py-10">
      <div
        className={`@max-xs:text-sm sm:text-base lg:text-xl flex-1/4 ${
          en ? "font-ubuntu" : "font-morabba"
        } `}
      >
        <span className={`text-brand1`}>{"<M />"}</span> {t("title")}
      </div>

      <Links />

      <SearchBox />
      <div className="hidden md:flex-1/4 md:flex justify-around md:gap-3 lg:gap-6 ml-6 lg:text-lg">
        <Link className="flex gap-2 items-center" href="/">
          <FaInstagram className="text-brand1 text-lg" />
          {/* <span className="hidden lg:inline-block">Instagram</span> */}
        </Link>

        <Link className="flex gap-1 items-center" href="/">
          <FaGithubAlt className="text-brand1 text-lg" />
          {/* <span className="hidden lg:inline-block">Github</span> */}
        </Link>

        <Link className="flex gap-2 items-center" href="/">
          <FaTelegramPlane className="text-brand1 text-lg" />
          {/* <span className="hidden lg:inline-block">Telegram</span> */}
        </Link>
      </div>
    </div>
  );
}

export default Header;
