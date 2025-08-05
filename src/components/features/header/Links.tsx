"use client";
import { useTranslations } from "next-intl";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Cookies from "js-cookie";

function Links() {
  const pathname = usePathname();
  const t = useTranslations("Header");
  const local = Cookies.get("USER_LOCALE");

  const links = [
    {
      title: "home",
      href: `/${local}`,
      id: 1,
    },
    {
      title: "blogs",
      href: "/blog",
      id: 2,
    },
  ];

  return (
    <div className="flex text-sm gap-3 sm:text-base md:text-lg justify-end px-5 md:flex-1/4">
      {links.map((l) => (
        <Link
          className={`${pathname === l.href && "text-brand1"}`}
          key={l.id}
          href={l.href}
        >
          {t(l.title)}
        </Link>
      ))}
    </div>
  );
}

export default Links;
