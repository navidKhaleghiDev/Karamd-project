// proxy.ts
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

  if (
    pathname.startsWith("/_next") ||
    pathname.startsWith("/api") ||
    pathname.startsWith("/public") || // if you used /public prefix (rare)
    pathname.startsWith("/images") ||
    pathname.startsWith("/favicon") ||
    /\.[^\/]+$/.test(pathname) // any path with an extension like .png, .js, .css, .svg etc
  ) {
    return NextResponse.next();
  }

  // ② Handle root path `/`
  if (pathname === "/") {
    const locale = getLocale(request);
    const newUrl = new URL(`/${locale}/home`, request.url);
    return NextResponse.redirect(newUrl);
  }

  // ③ If path already contains locale, do nothing
  const hasLocale = locales.some(
    (loc) => pathname.startsWith(`/${loc}/`) || pathname === `/${loc}`
  );
  if (hasLocale) {
    return NextResponse.next();
  }

  // ④ Otherwise, prefix locale and redirect
  const locale = getLocale(request);
  const newUrl = new URL(`/${locale}${pathname}`, request.url);
  return NextResponse.redirect(newUrl);
}

export const config = {
  matcher: [
    // This pattern says: run proxy on all paths except
    // those starting with _next, api, and except paths containing a dot (static files)
    "/((?!_next|api|.*\\..*).*)",
  ],
};
