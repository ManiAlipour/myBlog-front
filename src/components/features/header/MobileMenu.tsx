"use client";
import Link from "next/link";
import LanguageSwitcher from "../languageSwitcher/LanguageSwitcher";
import AuthBtn from "./AuthBtn";
import { motion } from "framer-motion";
import {
  FaGithubAlt,
  FaInstagram,
  FaTelegramPlane,
  FaUserAlt,
} from "react-icons/fa";
import { useLocale, useTranslations } from "next-intl";
import Cookies from "js-cookie";
import { useEffect, useState } from "react";
import clientApi from "@/lib/axios/client";
import { MdOutlineAlternateEmail } from "react-icons/md";
import { IoMdSettings } from "react-icons/io";

interface IMobileMenuProps {
  toggleMenu: () => void;
}

const MobileMenu = ({ toggleMenu }: IMobileMenuProps) => {
  const t = useTranslations("Header");

  let token = Cookies.get("token");

  const [user, setUser] = useState<any>(undefined);
  const [mounted, setMounted] = useState(false);
  const locale = useLocale();
  const en = locale === "en";

  useEffect(() => {
    let isMounted = true;

    const fetchProfile = async () => {
      try {
        const res = await clientApi.get("/users/profile", {
          redirectOn401: false,
        });
        if (isMounted) {
          setUser(res.data);
        }
      } catch (err) {
        if (isMounted) {
          setUser(undefined);
          token = undefined;
        }
      } finally {
        if (isMounted) {
          setMounted(true);
        }
      }
    };

    fetchProfile();

    return () => {
      isMounted = false;
    };
  }, []);

  if (!mounted) return null;

  return (
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
        <div
          dir={!token && en ? "ltr" : undefined}
          className="w-5/6 cursor-pointer rounded-xl mx-auto bg-bg2 p-3"
        >
          {token ? (
            <Link
              href="/dashboard"
              className="flex gap-5 items-center justify-center "
            >
              <div className="w-16 h-16 flex justify-center items-center rounded-full bg-bg1">
                <FaUserAlt />
              </div>
              <div className="flex flex-col gap-3">
                <span
                  className={`flex justify-between items-center ${
                    en ? "flex-row" : "flex-row-reverse"
                  }`}
                >
                  {user.name}
                  <IoMdSettings />
                </span>
                <span
                  dir="ltr"
                  className="flex items-center gap-2 text-sm text-gray-400"
                >
                  <MdOutlineAlternateEmail />
                  {user.email}
                </span>
              </div>
            </Link>
          ) : (
            <div>
              <Link
                href="/login"
                className="flex gap-5 items-center justify-center "
              >
                <div className="w-16 rtl:flex-row-reverse h-16 flex justify-center items-center rounded-full bg-bg1">
                  <FaUserAlt />
                </div>

                <div>
                  <span className="text-sm text-gray-400">
                    {t("MobileLogin")}
                  </span>
                </div>
              </Link>
            </div>
          )}
        </div>

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
      </nav>
    </motion.div>
  );
};

export default MobileMenu;
