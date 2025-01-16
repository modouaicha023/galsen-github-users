import { NextResponse } from "next/server";
import { match } from "@formatjs/intl-localematcher";
import Negotiator from "negotiator";

// Define supported locales and default locale
const locales = ["en", "fr"];
const defaultLocale = "en";

// Helper function to get the best matching locale
function getLocale(request: Request): string {
  const negotiatorHeaders = {
    "accept-language": request.headers.get("accept-language") || "",
  };
  const negotiator = new Negotiator({ headers: negotiatorHeaders });
  const languages = negotiator.languages();
  return match(languages, locales, defaultLocale);
}

// Middleware function
export function middleware(request: Request) {
  const url = new URL(request.url);
  const { pathname } = url;

  // Check if the pathname already includes a locale
  const pathnameHasLocale = locales.some(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  );

  if (pathnameHasLocale) {
    return NextResponse.next(); // Continue to the next middleware or route handler
  }

  // Get the best matching locale and redirect
  const locale = getLocale(request);
  url.pathname = `/${locale}${pathname}`;

  // Redirect to the localized version of the path
  return NextResponse.redirect(url);
}

// Middleware configuration
export const config = {
  matcher: [
    // Skip all internal paths (_next)
    "/((?!_next).*)",
  ],
};
