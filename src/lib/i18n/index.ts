import { defaultLocale, locales, type Locale } from "./dictionaries";

export const isLocale = (value: string): value is Locale => {
  return locales.includes(value as Locale);
};

export const resolveLocale = (locale?: string | null): Locale => {
  if (!locale) {
    return defaultLocale;
  }

  return isLocale(locale) ? locale : defaultLocale;
};

export const addLocaleToPath = (locale: Locale, path: string): string => {
  const clean = path.replace(/^\/+/, "");
  return `/${locale}/${clean}`.replace(/\/$/, "");
};

export { locales, defaultLocale };
export type { Locale };
