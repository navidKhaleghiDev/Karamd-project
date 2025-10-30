import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import Negotiator from "negotiator";
import { match as matchLocale } from "@formatjs/intl-localematcher";

const locales = ["en", "fa"]; // add your supported locales here
const defaultLocale = "en";

// Extract locale from Accept-Language header using Negotiator + intl-localematcher
function getLocale(request: NextRequest): string {
  const acceptLanguage = request.headers.get("accept-language") || "";
  const headers = { "accept-language": acceptLanguage };
  const languages = new Negotiator({ headers }).languages();
  const matched = matchLocale(languages, locales, defaultLocale);
  return matched;
}

export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Skip Next.js internal paths
  if (pathname.startsWith("/_next") || pathname.startsWith("/api")) {
    return NextResponse.next();
  }

  // Check if pathname already contains a locale
  const pathnameHasLocale = locales.some(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  );

  if (!pathnameHasLocale) {
    // Detect locale and redirect to the localized version
    const locale = getLocale(request);
    const newUrl = new URL(`/${locale}${pathname}`, request.url);
    return NextResponse.redirect(newUrl);
  }

  // Otherwise continue
  return NextResponse.next();
}

// Match all paths except Next.js internals
export const config = {
  matcher: ["/((?!_next|api|favicon.ico).*)"],
};
