"use client";

import { useRouter, usePathname } from "next/navigation";
import { useLocale } from "next-intl";
import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

const languages = [
  {
    code: "en",
    name: "English",
    flag: "/images/flags/english.svg",
    dir: "ltr",
  },
  { code: "fa", name: "فارسی", flag: "/images/flags/iran.svg", dir: "rtl" },
];

export default function LanguageSwitcher() {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const currentLang = languages.find((l) => l.code === locale) || languages[0];

  const changeLanguage = (code: string) => {
    setIsOpen(false);
    router.push(`/${code}`);
  };

  return (
    <div className="relative inline-block text-left">
      {/* Trigger Button */}
      <button
        className="flex items-center gap-2 px-3 py-2 rounded-lg bg-white/10 border border-white/20 
                   hover:bg-white/20 backdrop-blur-lg transition cursor-pointer"
        onClick={() => setIsOpen(!isOpen)}
      >
        <Image
          src={currentLang.flag}
          alt={currentLang.name}
          width={20}
          height={20}
        />
        <span className="text-white">{currentLang.name}</span>
        <span className="text-white/60 text-sm">▼</span>
      </button>

      {/* Dropdown */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -5 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -5 }}
            transition={{ duration: 0.15 }}
            className="absolute z-50 right-0 mt-2 w-36 rounded-lg bg-[#1a1a1a] shadow-lg border border-white/10 overflow-hidden"
          >
            {languages.map((lang) => (
              <button
                key={lang.code}
                onClick={() => changeLanguage(lang.code)}
                className={`flex w-full items-center gap-2 px-3 py-2 text-left text-sm 
                           hover:bg-white/10 transition ${
                             locale === lang.code ? "bg-white/10" : ""
                           }`}
              >
                <Image src={lang.flag} alt={lang.name} width={18} height={18} />
                <span className="text-white">{lang.name}</span>
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
