import { useTranslations } from "next-intl";
import { FaInstagram, FaTelegramPlane } from "react-icons/fa";
import { FiGithub } from "react-icons/fi";

const Footer = () => {
  const t = useTranslations("Footer");
  return (
    <div className="flex justify-around items-center px-5 py-3">
      <span>{t("copy")}</span>

      <span className="flex gap-3">
        <span
          className="w-10 h-10 rounded-full bg-white flex justify-center items-center
        text-black"
        >
          <FaInstagram />
        </span>

        <span
          className="w-10 h-10 rounded-full bg-white flex justify-center items-center
        text-black"
        >
          <FaTelegramPlane />
        </span>

        <span
          className="w-10 h-10 rounded-full bg-white flex justify-center items-center
        text-black"
        >
          <FiGithub />
        </span>
      </span>
    </div>
  );
};

export default Footer;
