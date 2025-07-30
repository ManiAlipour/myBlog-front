"use client";
import Tooltip from "@/components/ui/tooltip/Tooltip";
import { useEffect, useState } from "react";
import { FaRegEdit } from "react-icons/fa";
import { FiUser } from "react-icons/fi";
import { IoIosCode } from "react-icons/io";
import { MdOutlineMailOutline } from "react-icons/md";
import { RiApps2Line, RiComputerLine } from "react-icons/ri";

const btns = [
  { title: "Home", Icon: RiApps2Line, id: 1, href: "#" },
  { title: "About Me", Icon: FiUser, id: 2, href: "#about" },
  { title: "Skills", Icon: IoIosCode, id: 3, href: "#skills" },
  { title: "Works", Icon: RiComputerLine, id: 4, href: "#works" },
  { title: "Blogs", Icon: FaRegEdit, id: 5, href: "#blogs" },
  { title: "Contact", Icon: MdOutlineMailOutline, id: 6, href: "#contact" },
];

const Sidebar = () => {
  const [activeHash, setActiveHash] = useState("#");
  const [hovered, setHovered] = useState(false);

  useEffect(() => {
    const handleHashChange = () => setActiveHash(window.location.hash || "#");
    window.addEventListener("hashchange", handleHashChange);
    setActiveHash(window.location.hash || "#");
    return () => window.removeEventListener("hashchange", handleHashChange);
  }, []);

  // فقط گزینه فعال را برگردان
  const activeBtn = btns.find((btn) => btn.href === activeHash) || btns[0];

  // هندل کلیک
  const handleHashChange = (hash: string) => () => {
    window.location.hash = hash;
  };

  return (
    <div
      className={`
        fixed left-4 top-1/2 -translate-y-1/2 z-50 bg-bg2 border-white border-2
        rounded-4xl shadow-xl flex flex-col items-center
        transition-all duration-300
        ${hovered ? "h-96 w-20 py-4" : "h-20 w-20 justify-center"}
      `}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {!hovered && (
        <button
          className="w-16 h-16 flex flex-col items-center justify-center"
          onClick={handleHashChange(activeBtn.href)}
        >
          <span
            className={`
              flex items-center justify-center w-12 h-12 rounded-full transition
              bg-gradient-to-t from-teal-400 to-cyan-400 text-gray-900 shadow-lg`}
          >
            <activeBtn.Icon />
          </span>
          <span className="text-xs mt-1">{activeBtn.title}</span>
        </button>
      )}
    
      {hovered && (
        <div className="flex flex-col gap-2">
          {btns.map((btn) => (
            <button
              onClick={handleHashChange(btn.href)}
              className="cursor-pointer group"
              key={btn.id}
            >
              <span
                className={`
                  flex items-center justify-center w-12 h-12 rounded-full transition
                  ${
                    activeHash === btn.href
                      ? "bg-gradient-to-t from-teal-400 to-cyan-400 text-gray-900 shadow-lg"
                      : "bg-transparent text-white"
                  }
                `}
              >
                <Tooltip text={btn.title} position="right">
                  <btn.Icon />
                </Tooltip>
              </span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default Sidebar;
