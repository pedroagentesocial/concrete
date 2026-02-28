import en from "./en.json";
import es from "./es.json";

export type Lang = "en" | "es";

const dictionaries: Record<Lang, any> = { en, es };

export const getLangFromPath = (pathname: string): Lang => {
  if (pathname.startsWith("/es")) return "es";
  return "en";
};

const getByPath = (obj: any, path: string) => {
  return path.split(".").reduce((acc: any, key: string) => {
    if (acc && typeof acc === "object" && key in acc) {
      return acc[key];
    }
    return undefined;
  }, obj);
};

export const t = <T = unknown>(lang: Lang, key: string, params?: Record<string, string | number>): T => {
  const dict = dictionaries[lang] ?? dictionaries.en;
  let value = getByPath(dict, key);
  if (value === undefined) value = getByPath(dictionaries.en, key);
  if (typeof value === "string" && params) {
    for (const [k, v] of Object.entries(params)) {
      value = value.replace(new RegExp(`{{\\s*${k}\\s*}}`, "g"), String(v));
    }
  }
  return value as T;
};
