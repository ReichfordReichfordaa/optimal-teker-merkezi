import "server-only";
import type { Locale } from "./config";
import type { Dictionary } from "./types";
import { az } from "./dictionaries/az";
import { ru } from "./dictionaries/ru";

const dictionaries: Record<Locale, Dictionary> = {
  az,
  ru,
};

export function getDictionary(locale: Locale): Dictionary {
  return dictionaries[locale] ?? dictionaries.az;
}
