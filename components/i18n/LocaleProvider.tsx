"use client";
import { createContext, useContext, useMemo, type ReactNode } from "react";
import { createTranslator, type Dictionary } from "@/lib/i18n/translator";
import type { Locale } from "@/lib/i18n/routing";
const LocaleContext = createContext<{
  locale: Locale;
  t: ReturnType<typeof createTranslator>;
} | null>(null);
export function LocaleProvider({
  locale,
  dictionary,
  children,
}: {
  locale: Locale;
  dictionary: Dictionary;
  children: ReactNode;
}) {
  const value = useMemo(
    () => ({ locale, t: createTranslator(dictionary) }),
    [locale, dictionary],
  );
  return (
    <LocaleContext.Provider value={value}>{children}</LocaleContext.Provider>
  );
}
export function useTranslations() {
  const context = useContext(LocaleContext);
  if (!context) throw new Error("useTranslations requires LocaleProvider");
  return context;
}
