"use client";
import { useEffect, useState } from "react";
import Header from "../features/header/Header";
import Cookies from "js-cookie";

const Providers = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  const local = Cookies.get("USER_LOCALE") || "en";
  const en = local === "en";

  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (mounted)
    return (
      <div
        dir={en ? "ltr" : "rtl"}
        className={`container mx-auto ${en ? "font-ubuntu" : "font-vazir"}`}
      >
        <Header />
        {children}
      </div>
    );
};

export default Providers;
