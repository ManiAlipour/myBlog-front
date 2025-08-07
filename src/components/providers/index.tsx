"use client";
import { useEffect, useState } from "react";
import Header from "../features/header/Header";
import { useLocale } from "next-intl";
import Footer from "../features/footer/Footer";

const Providers = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  const local = useLocale();
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
        <Footer />
      </div>
    );
};

export default Providers;
