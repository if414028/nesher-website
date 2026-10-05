"use client";
import Link from "next/link";
import { forwardRef, type ComponentProps } from "react";
import { useTranslations } from "./LocaleProvider";
import { localePath } from "@/lib/i18n/routing";
export const LocaleLink = forwardRef<
  HTMLAnchorElement,
  ComponentProps<typeof Link>
>(function LocaleLink({ href, ...props }, ref) {
  const { locale } = useTranslations();
  const localized =
    typeof href === "string"
      ? localePath(href, locale)
      : {
          ...href,
          pathname: href.pathname
            ? localePath(href.pathname, locale)
            : href.pathname,
        };
  return <Link ref={ref} href={localized} {...props} />;
});
