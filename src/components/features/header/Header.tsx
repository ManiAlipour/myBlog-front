"use client";
import Link from "next/link";
import Links from "./Links";
import SearchBox from "./SearchBox";
import { FaGithubAlt, FaInstagram, FaTelegramPlane } from "react-icons/fa";
import { useLocale, useTranslations } from "next-intl";
import LanguageSwitcher from "../languageSwitcher/LanguageSwitcher";
import { IoMenuOutline } from "react-icons/io5";
import { useState } from "react";
import { motion } from "framer-motion";
import AuthBtn from "./AuthBtn";

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
        <motion.div
          initial={{ opacity: 0, x: "100%" }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: "100%" }}
          transition={{ duration: 0.3 }}
          className="fixed z-50 inset-0 bg-black/90 p-5"
        >
          <button
            className="absolute top-5 right-5 text-white text-3xl"
            onClick={toggleMenu}
          >
            &times;
          </button>

          <nav className="flex flex-col items-center justify-center h-full gap-8">
            <Link href="/" className="text-2xl text-white" onClick={toggleMenu}>
              {t("home")}
            </Link>
            <Link
              href="/about"
              className="text-2xl text-white"
              onClick={toggleMenu}
            >
              {t("about")}
            </Link>
            <Link
              href="/blogs"
              className="text-2xl text-white"
              onClick={toggleMenu}
            >
              {t("blogs")}
            </Link>

            {/* Social */}
            <div className="flex gap-6">
              <Link href="/" className="text-white">
                <FaInstagram />
              </Link>
              <Link href="/" className="text-white">
                <FaGithubAlt />
              </Link>
              <Link href="/" className="text-white">
                <FaTelegramPlane />
              </Link>
            </div>

            {/* Language */}
            <LanguageSwitcher />

            {/* Auth Btn - Mobile */}
            <AuthBtn />
          </nav>
        </motion.div>
      )}
    </>
  );
}

export default Header;
