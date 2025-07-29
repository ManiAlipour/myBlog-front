"use client";
import Tooltip from "@/components/ui/tooltip/Tooltip";
import Link from "next/link";
import { useEffect, useState } from "react";
import { FaRegEdit } from "react-icons/fa";
import { FiUser } from "react-icons/fi";
import { IoIosCode } from "react-icons/io";
import { MdOutlineMailOutline } from "react-icons/md";
import { RiApps2Line, RiComputerLine } from "react-icons/ri";

const btns = [
  { title: "Home", Icon: RiApps2Line, id: 1, href: "#" },
  { title: "About Me", Icon: FiUser, id: 2, href: "#about" },
  { title: "Skils", Icon: IoIosCode, id: 3, href: "#skils" },
  { title: "Works", Icon: RiComputerLine, id: 4, href: "#works" },
  { title: "Blogs", Icon: FaRegEdit, id: 5, href: "#blogs" },
  { title: "Contact", Icon: MdOutlineMailOutline, id: 6, href: "#contact" },
];

const Sidebar = () => {
  const [activeHash, setActiveHash] = useState(
    typeof window !== "undefined" ? window.location.hash || "#" : "#"
  );

  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    console.log(window.location.hash);
    const handleHashChange = () => setActiveHash(window.location.hash || "#");
    window.addEventListener("hashchange", handleHashChange);

    setActiveHash(window.location.hash || "#");
    return () => window.removeEventListener("hashchange", handleHashChange);
  }, []);

  const handleHashChange = (hash: string) => () => {
    window.location.hash = hash;
  };

  return (
    mounted && (
      <div
        className="w-16 h-96 border-white text-white border-2 bg-bg2 md:left-3 lg:left-auto 
        rounded-4xl fixed flex flex-col justify-around items-center text-2xl z-40"
      >
        {btns.map((btn) => (
          <button
            onClick={handleHashChange(btn.href)}
            className="cursor-pointer"
            key={btn.id}
          >
            <Tooltip text={btn.title} position="right">
              <span
                className={`
                flex items-center justify-center w-12 h-12 rounded-full transition
                ${
                  activeHash === btn.href
                    ? "bg-gradient-to-t from-teal-400 to-cyan-400 text-gray-900 shadow-lg"
                    : "bg-transparent"
                }
              `}
              >
                <btn.Icon />
              </span>
            </Tooltip>
          </button>
        ))}
      </div>
    )
  );
};

export default Sidebar;
