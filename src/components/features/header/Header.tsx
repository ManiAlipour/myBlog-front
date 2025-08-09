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

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const t = useTranslations("Header");
  const locale = useLocale();
  const en = locale === "en";

  return (
    <>
      <div className="flex flex-wrap items-center justify-between gap-4 p-5">
        {/* Logo and Title */}
        <div
          className={`flex items-center text-base lg:text-xl ${
            en ? "font-ubuntu" : "font-morabba"
          }`}
        >
          <span className={`text-brand1`}>{"<M />"}</span> {t("title")}
        </div>

        {/* Navigation Links */}
        <div className="hidden md:block">
          <Links />
        </div>

        {/* SearchBox for Large Screens */}
        <div className="hidden md:block flex-auto max-w-sm">
          <SearchBox />
        </div>

        {/* Social Media Links */}
        <div className="hidden md:flex items-center gap-4">
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

        {/* Language Switcher */}
        <div className="flex flex-auto justify-end">
          <LanguageSwitcher />
        </div>

        <button className="md:hidden" onClick={toggleMenu}>
          <IoMenuOutline size={20} />
        </button>
      </div>

      {isOpen && (
        <motion.div
          initial={{ opacity: 0, x: "100%" }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: "100%" }}
          transition={{ duration: 0.3 }}
          className="fixed z-50 inset-0 bg-black/90 p-5"
        >
          {/* Close Button */}
          <button
            className="absolute top-5 right-5 text-white text-2xl"
            onClick={toggleMenu}
          >
            &times;
          </button>

          {/* Links */}
          <nav className="flex flex-col items-center justify-center h-full gap-8">
            <Link
              href="/"
              className="text-2xl text-white hover:text-brand1"
              onClick={toggleMenu}
            >
              {t("home")}
            </Link>
            <Link
              href="/about"
              className="text-2xl text-white hover:text-brand1"
              onClick={toggleMenu}
            >
              {t("about")}
            </Link>
            <Link
              href="/blogs"
              className="text-2xl text-white hover:text-brand1"
              onClick={toggleMenu}
            >
              {t("blogs")}
            </Link>

            {/* Social Media */}
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

            {/* Language Switcher */}
            <LanguageSwitcher />
          </nav>
        </motion.div>
      )}
    </>
  );
}

export default Header;
