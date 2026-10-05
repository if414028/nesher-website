export const locales = ["id", "en"] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = "id";
export function isLocale(value: string): value is Locale {
  return locales.some((locale) => locale === value);
}
export function localePath(path: string, locale: Locale): string {
  if (!path.startsWith("/") || path.startsWith("//")) return path;
  const unprefixed = path.replace(/^\/(id|en)(?=\/|$|[?#])/, "");
  return `/${locale}${unprefixed === "/" ? "" : unprefixed}`;
}
