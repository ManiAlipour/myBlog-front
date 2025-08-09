"use client";
import { useEffect, useRef, useState } from "react";
import { BiSearchAlt } from "react-icons/bi";
import { MdClose } from "react-icons/md";
import Cookies from "js-cookie";
import { useTranslations } from "next-intl";

function SearchBox() {
  const [open, setOpen] = useState(false);
  const inputRef = useRef<HTMLInputElement | null>(null);

  const locale = Cookies.get("USER_LOCALE") || "en";
  const en = locale === "en";
  const t = useTranslations("Header");

  useEffect(() => {
    if (open && inputRef.current) inputRef.current.focus();
  }, [open]);

  return (
    <div
      className={`md:flex-1/4 relative flex items-center ${
        en ? "md:ml-3" : "md:mr-3"
      }`}
    >
      {/* Desktop Search */}
      <div className="hidden md:flex w-full relative rounded-full backdrop-blur-md bg-white/20 border border-white/30 shadow-md transition-all duration-300 hover:bg-white/30">
        <input
          className="w-full bg-transparent px-4 py-2 text-sm text-black placeholder-gray-600 focus:outline-none"
          type="text"
          placeholder={t("searchPlaceholder")}
          name="search"
          id="search"
        />
        <button
          className={`absolute top-1/2 -translate-y-1/2 ${
            en ? "right-3" : "left-3"
          } text-gray-700 hover:text-brand1 transition-colors`}
          type="submit"
        >
          <BiSearchAlt size={19} />
        </button>
      </div>

      {/* Mobile Button */}
      <button
        onClick={() => setOpen((prev) => !prev)}
        className={`md:hidden text-xl cursor-pointer p-2 transition-colors ${
          open
            ? "bg-white text-black rounded-full"
            : "bg-transparent text-white"
        }`}
      >
        {open ? <MdClose /> : <BiSearchAlt />}
      </button>

      {/* Mobile Dropdown Search */}
      {open && (
        <div
          className={`absolute md:hidden top-12 w-72 rounded-full backdrop-blur-md bg-white/20 border border-white/30 shadow-md flex items-center gap-2 px-4 py-2 transition-all duration-300 ${
            en ? "right-0" : "left-0"
          }`}
        >
          <input
            ref={inputRef}
            className="flex-1 bg-transparent text-sm text-black placeholder-gray-700 focus:outline-none"
            type="text"
            placeholder={t("searchPlaceholder")}
            name="search"
            id="search"
          />
          <button
            className="text-gray-700 hover:text-brand1 transition-colors"
            type="submit"
          >
            <BiSearchAlt size={19} />
          </button>
        </div>
      )}
    </div>
  );
}

export default SearchBox;
