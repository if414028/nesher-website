import { NextResponse, type NextRequest } from "next/server";
import { defaultLocale, locales } from "@/lib/i18n/routing";
export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;
  if (
    locales.some(
      (locale) =>
        pathname === `/${locale}` || pathname.startsWith(`/${locale}/`),
    )
  )
    return NextResponse.next();
  const url = request.nextUrl.clone();
  url.pathname = `/${defaultLocale}${pathname === "/" ? "" : pathname}`;
  return NextResponse.redirect(url);
}
export const config = { matcher: ["/((?!api|_next|.*\\..*).*)"] };
