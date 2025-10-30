import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import Negotiator from "negotiator";
import { match as matchLocale } from "@formatjs/intl-localematcher";

const locales = ["en", "fa"];
const defaultLocale = "fa";

function getLocale(request: NextRequest): string {
  const acceptLanguage = request.headers.get("accept-language") || "";
  const headers = { "accept-language": acceptLanguage };
  const languages = new Negotiator({ headers }).languages();
  const matched = matchLocale(languages, locales, defaultLocale);
  return matched;
}

export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;

  if (pathname.startsWith("/_next") || pathname.startsWith("/api")) {
    return NextResponse.next();
  }

  if (pathname === "/") {
    const locale = getLocale(request);
    const newUrl = new URL(`/${locale}/home`, request.url);
    return NextResponse.redirect(newUrl);
  }

  // Check if pathname already contains a locale
  const pathnameHasLocale = locales.some(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  );

  if (!pathnameHasLocale) {
    const locale = getLocale(request);
    const newUrl = new URL(`/${locale}${pathname}`, request.url);
    return NextResponse.redirect(newUrl);
  }

  // Continue normally for localized routes
  return NextResponse.next();
}

// Match all paths except Next.js internals
export const config = {
  matcher: ["/((?!_next|api|favicon.ico).*)"],
};
