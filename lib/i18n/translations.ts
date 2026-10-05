import id from "./id.json";
import en from "./en.json";
import type { Locale } from "./routing";
import { createTranslator, type Dictionary } from "./translator";
export type { Dictionary } from "./translator";
const dictionaries: Record<Locale, Dictionary> = { id, en };
export function getDictionary(locale: Locale): Dictionary {
  return dictionaries[locale];
}
export function getTranslator(locale: Locale) {
  return createTranslator(getDictionary(locale));
}
