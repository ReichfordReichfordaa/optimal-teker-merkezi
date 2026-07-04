export const locales = ["az", "ru"] as const;
export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = "az";

export const localeNames: Record<Locale, string> = {
  az: "AZ",
  ru: "RU",
};

export const localeLabels: Record<Locale, string> = {
  az: "Azərbaycan",
  ru: "Русский",
};

export function isValidLocale(value: string): value is Locale {
  return (locales as readonly string[]).includes(value);
}
