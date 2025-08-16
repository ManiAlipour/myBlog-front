import Image from "next/image";
import { useLocale } from "next-intl";
import { usePathname, useRouter } from "next/navigation";

const languages = [
  {
    code: "en",
    name: "English",
    flag: "/images/flags/english.svg",
    dir: "ltr",
  },
  { code: "fa", name: "فارسی", flag: "/images/flags/iran.svg", dir: "rtl" },
];

const AuthLanguageSwitcher = () => {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  const currentLang = languages.find((l) => l.code === locale) || languages[0];
  const targetLang = currentLang.code === "en" ? languages[1] : languages[0];

  const changeLanguage = () => {
    router.push(
      `/${targetLang.code}${pathname.replace(`/${currentLang.code}`, "")}`
    );
  };

  return (
    <button
      onClick={changeLanguage}
      className="absolute top-6 left-6 flex items-center gap-2 px-3 py-2 rounded-full
                 backdrop-blur-md bg-white/10 border border-white/20 shadow-lg
                 hover:bg-white/20 hover:scale-105 transition-all duration-200"
    >
      <Image
        src={targetLang.flag}
        alt={targetLang.name}
        width={20}
        height={20}
        className="rounded-full"
      />
      <span className="text-sm font-medium text-white">
        {targetLang.code.toUpperCase()}
      </span>
    </button>
  );
};

export default AuthLanguageSwitcher;
