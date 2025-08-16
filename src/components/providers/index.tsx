"use client";
import { useEffect, useState } from "react";
import Header from "../features/header/Header";
import { useLocale } from "next-intl";
import Footer from "../features/footer/Footer";
import { usePathname } from "next/navigation";

const Providers = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  const locale = useLocale();
  const patname = usePathname();

  const en = locale === "en";
  const urls = ["/login", "/register", "/dashboard", "/admin", "/verify-email"];
  const layoutCheck = urls.some((url) => patname === `/${locale}${url}`);
  console.log(patname);

  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div
      dir={en ? "ltr" : "rtl"}
      className={`container mx-auto ${en ? "font-ubuntu" : "font-vazir"}`}
    >
      {layoutCheck || <Header />}
      {children}
      {layoutCheck || <Footer />}
    </div>
  );
};

export default Providers;
