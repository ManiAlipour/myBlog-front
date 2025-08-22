import createMiddleware from "next-intl/middleware";
import { routing } from "./i18n/routing";
import { NextRequest, NextResponse } from "next/server";
import { serverApi } from "./lib/axios/server";

const intlMiddleware = createMiddleware(routing);

export default async function middleware(req: NextRequest) {
  const token = req.cookies.get("token")?.value;
  const pathname = req.nextUrl.pathname;

  const segments = pathname.split("/").filter(Boolean);
  const first = segments[0];
  const isLocale = routing.locales.includes(first as "en" | "fa");

  const mainSegment = isLocale ? segments[1] : first;

  if (
    (mainSegment === "login" ||
      mainSegment === "register" ||
      mainSegment === "verify-email") &&
    token
  ) {
    const locale = isLocale ? first : routing.defaultLocale;
    return NextResponse.redirect(new URL(`/${locale}`, req.url));
  }

  if ((mainSegment === "admin" || mainSegment === "dashboard") && !token) {
    const locale = isLocale ? first : routing.defaultLocale;
    return NextResponse.redirect(new URL(`/${locale}/login`, req.url));
  }

  if (mainSegment === "admin") {
    const api = serverApi(req.cookies.toString(), token);
    const { data: user } = await api.get("/users/profile", {
      redirectOn401: true,
    });

    if (user.role !== "admin") {
      const locale = isLocale ? first : routing.defaultLocale;
      return NextResponse.redirect(new URL(`/${locale}/dashboard`, req.url));
    }
  }

  if (mainSegment === "dashboard") {
    const api = serverApi(req.cookies.toString(), token);
    const { data: user } = await api.get("/users/profile", {
      redirectOn401: true,
    });

    if (user.role === "admin") {
      const locale = isLocale ? first : routing.defaultLocale;
      return NextResponse.redirect(new URL(`/${locale}/admin`, req.url));
    }
  }

  return intlMiddleware(req);
}

export const config = {
  matcher: "/((?!api|trpc|_next|_vercel|.*\\..*).*)",
};
