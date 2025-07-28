"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  {
    title: "Home",
    href: "/",
    id: 1,
  },
  {
    title: "Blogs",
    href: "/blog",
    id: 2,
  },
];

function Links() {
  const pathname = usePathname();

  return (
    <div className="flex text-sm gap-3 sm:text-base md:text-lg justify-end px-5 md:flex-1/4">
      {links.map((l) => (
        <Link
          className={`${pathname === l.href && "text-brand1"}`}
          key={l.id}
          href={l.href}
        >
          {l.title}
        </Link>
      ))}
    </div>
  );
}

export default Links;
