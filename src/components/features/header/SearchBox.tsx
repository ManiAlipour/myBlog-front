"use client";
import { useEffect, useRef, useState } from "react";
import { BiSearchAlt } from "react-icons/bi";
import { MdClose } from "react-icons/md";
import Cookies from "js-cookie";
import { useTranslations } from "next-intl";

function SearchBox() {
  const [open, setOpen] = useState(false);

  const inputRef = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    if (open && inputRef.current) inputRef.current.focus();
  }, [open]);

  const locale = Cookies.get("USER_LOCALE") || "en";
  const en = locale === "en";
  const t = useTranslations("Header");

  return (
    <div className={`md:flex-1/4 ${en || "ml-3"}`}>
      <div className="bg-white hidden md:block md:w-full relative p-2 rounded-full">
        <input
          className="bg-white w-full focus:outline-0 text-black"
          type="text"
          placeholder={t("searchPlaceholder")}
          name="search"
          id="search"
        />
        <button
          className={`absolute ${
            en ? "right-1.5" : "left-1.5"
          } z-40 text-black`}
          type="submit"
        >
          <BiSearchAlt size={19} />
        </button>
      </div>
      <button
        onClick={() => setOpen(!open)}
        className={`md:hidden text-xl cursor-pointer p-2 ${
          open && "bg-white text-black rounded-full"
        }`}
      >
        {open ? <MdClose /> : <BiSearchAlt />}
      </button>
      {open && (
        <div
          className={`bg-white absolute md:hidden md:w-72 p-2 rounded-full
            transition-transform duration-1000
             ${
               open
                 ? (en && "-translate-x-full  translate-y-5") ||
                   "translate-x-full"
                 : (en && "translate-x-full") || "-translate-x-full"
             }`}
        >
          <input
            ref={inputRef}
            className="bg-white focus:outline-0 text-black"
            type="text"
            placeholder={t("searchPlaceholder")}
            name="search"
            id="search"
          />
          <button
            className={`absolute ${
              en ? "right-1.5" : "left-1.5"
            } z-40 text-black`}
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
