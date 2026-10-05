export type Dictionary = Record<string, string>;
export function createTranslator(dictionary: Dictionary) {
  return (source: string | undefined): string => {
    if (!source) return "";
    const key = source.replace(/\s+/g, " ").trim();
    return dictionary[key] ?? source;
  };
}
