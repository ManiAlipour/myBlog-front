"use client";
import { useTranslations } from "next-intl";
import Link from "next/link";
import { FaRegUserCircle } from "react-icons/fa";
import Cookies from "js-cookie";

const AuthBtn = () => {
  const t = useTranslations("Header");
  const token = Cookies.get("token");

  return (
    <Link
      className="flex items-center gap-3 shrink-0 px-4 py-2 text-black bg-brand1 rounded-xl"
      href={token ? "/dashboard" : "/login"}
    >
      <FaRegUserCircle />
      <span className="hidden md:inline-block">
        {!token ? t("login") : t("dashboard")}
      </span>
    </Link>
  );
};

export default AuthBtn;
