"use client";
import Link from "next/link";
import Links from "./Links";
import SearchBox from "./SearchBox";
import { FaGithubAlt, FaInstagram, FaTelegramPlane } from "react-icons/fa";
import { useLocale, useTranslations } from "next-intl";
import LanguageSwitcher from "../languageSwitcher/LanguageSwitcher";
import { IoMenuOutline } from "react-icons/io5";
import { useState } from "react";
import AuthBtn from "./AuthBtn";
import MobileMenu from "./MobileMenu";

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);

  const t = useTranslations("Header");
  const locale = useLocale();
  const en = locale === "en";

  return (
    <>
      <div className="flex flex-wrap items-center justify-between gap-4 p-5">
        {/* Logo */}
        <div
          className={`flex items-center text-base lg:text-xl ${
            en ? "font-ubuntu" : "font-morabba"
          }`}
        >
          <span className={`text-brand1`}>{"<M />"}</span> {t("title")}
        </div>

        {/* Links - Desktop */}
        <div className="hidden md:block">
          <Links />
        </div>

        {/* Search - Desktop */}
        <div className="hidden md:block flex-auto max-w-sm">
          <SearchBox />
        </div>

        {/* Social - Desktop */}
        <div className="hidden lg:flex items-center gap-4">
          <Link href="/" className="flex items-center gap-2">
            <FaInstagram className="text-brand1 text-xl" />
          </Link>
          <Link href="/" className="flex items-center gap-2">
            <FaGithubAlt className="text-brand1 text-xl" />
          </Link>
          <Link href="/" className="flex items-center gap-2">
            <FaTelegramPlane className="text-brand1 text-xl" />
          </Link>
        </div>

        {/* Language switcher */}
        <div className="hidden md:flex flex-auto justify-end items-center gap-4 flex-nowrap">
          <LanguageSwitcher />
          <AuthBtn />
        </div>

        {/* Mobile menu toggle */}
        <button className="md:hidden flex items-center" onClick={toggleMenu}>
          <IoMenuOutline size={22} />
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <MobileMenu toggleMenu={toggleMenu} />
      )}
    </>
  );
}

export default Header;
