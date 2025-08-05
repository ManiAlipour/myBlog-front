// imports
"use client";

import { usePathname, useRouter } from "next/navigation";
import { useLocale } from "next-intl";

const SUPPORTED_LOCALES = ["fa", "en"];

export function useLanguageSwitcher() {
  const router = useRouter();
  const pathname = usePathname();
  const currentLocale = useLocale();

  function switchLanguage(toLocale: string) {
    if (!SUPPORTED_LOCALES.includes(toLocale)) return;

    const segments = pathname.split("/");

    if (SUPPORTED_LOCALES.includes(segments[1])) {
      segments[1] = toLocale;
    } else {

      segments.splice(1, 0, toLocale);
    }
    const newPath = segments.join("/") || "/";
    router.push(newPath);
  }

  return { currentLocale, switchLanguage };
}
