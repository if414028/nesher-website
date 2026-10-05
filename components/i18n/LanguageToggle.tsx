"use client";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useTranslations } from "./LocaleProvider";
import { localePath, type Locale } from "@/lib/i18n/routing";
export function LanguageToggle() {
  const { locale, t } = useTranslations();
  const pathname = usePathname();
  const router = useRouter();
  function preserveLocation(
    event: React.MouseEvent<HTMLAnchorElement>,
    next: Locale,
  ) {
    const target =
      localePath(pathname, next) +
      window.location.search +
      window.location.hash;
    event.currentTarget.href = target;
    if (
      event.button === 0 &&
      !event.metaKey &&
      !event.ctrlKey &&
      !event.shiftKey &&
      !event.altKey
    ) {
      event.preventDefault();
      router.push(target, { scroll: false });
    }
  }
  return (
    <div
      role="group"
      aria-label={t("Bahasa website")}
      className="flex h-12 shrink-0 items-center rounded-full border border-[var(--nesher-purple-border)] bg-white/60 p-0.5"
    >
      {(["id", "en"] as const).map((next) => (
        <Link
          key={next}
          href={localePath(pathname, next)}
          hrefLang={next}
          lang={next}
          aria-current={locale === next ? "true" : undefined}
          aria-label={next === "id" ? "Bahasa Indonesia" : "English"}
          onClick={(event) => preserveLocation(event, next)}
          className={`inline-flex h-11 min-w-11 items-center justify-center rounded-full px-3 text-xs font-semibold transition focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary ${locale === next ? "bg-[var(--nesher-purple-900)] text-white shadow-sm" : "text-[var(--nesher-body)] hover:bg-white"}`}
        >
          {next.toUpperCase()}
        </Link>
      ))}
    </div>
  );
}
