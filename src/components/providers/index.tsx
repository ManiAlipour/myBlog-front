"use client";
import { useEffect, useState } from "react";
import Header from "../features/header/Header";
import Cookies from "js-cookie";
import Footer from "../features/footer/Footer";
import AOSProvider from "./AOS";

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
        <AOSProvider>
          <Header />
          {children}
          <Footer />
        </AOSProvider>
      </div>
    );
};

export default Providers;
