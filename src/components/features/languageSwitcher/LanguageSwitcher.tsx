"use client";

import { useState, useRef, useEffect } from "react";
import { useLanguageSwitcher } from "@/hooks/useLanguageSwitcher";

interface Lang {
  code: "fa" | "en";
  label: string;
  dir: "ltr" | "rtl";
}

const LANGUAGES: Lang[] = [
  { code: "fa", label: "فارسی", dir: "rtl" },
  { code: "en", label: "English", dir: "ltr" },
];

const LanguageSwitcher = () => {
  const { currentLocale, switchLanguage } = useLanguageSwitcher();
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // برای بستن دراپ‌دان هنگام کلیک بیرون
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setOpen(false);
      }
    }
    if (open) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [open]);

  const currentLang =
    LANGUAGES.find((l) => l.code === currentLocale) || LANGUAGES[0];

  return (
    <div className="relative inline-block" ref={dropdownRef}>
      <button
        onClick={() => setOpen((v) => !v)}
        type="button"
        className="text-white bg-blue-700 hover:bg-blue-800 
        focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium
         rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center
          dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        aria-haspopup="listbox"
        aria-expanded={open}
      >
        {/* نمایش زبان جاری */}
        <span className="truncate">{currentLang.label}</span>
        <svg
          className="w-2.5 h-2.5 ms-3"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 10 6"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="m1 1 4 4 4-4"
          />
        </svg>
      </button>

      {/* Dropdown menu */}
      <div
        className={`absolute left-0 z-10 mt-2 min-w-full bg-white rounded-lg shadow-sm 
        divide-y divide-gray-100 ring-1 ring-black ring-opacity-5 dark:bg-gray-700 dark:divide-gray-600 
        transition-all duration-150 ${open ? "block" : "hidden"}`}
        role="menu"
        tabIndex={-1}
      >
        <ul
          className="py-2 text-sm text-gray-700 dark:text-gray-200"
          aria-labelledby="dropdownDividerButton"
        >
          {LANGUAGES.map((lang) => (
            <li key={lang.code} dir={lang.dir}>
              <button
                onClick={() => {
                  setOpen(false);
                  if (lang.code !== currentLocale) switchLanguage(lang.code);
                }}
                disabled={lang.code === currentLocale}
                className={`w-full px-4 py-2 text-left ${
                  lang.code === currentLocale
                    ? "opacity-60 cursor-not-allowed"
                    : "hover:bg-gray-100 dark:hover:bg-gray-600"
                }`}
                role="option"
                aria-selected={lang.code === currentLocale}
              >
                {lang.label}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default LanguageSwitcher;
