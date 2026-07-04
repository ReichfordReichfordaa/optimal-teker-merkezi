"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { locales, type Locale } from "@/lib/i18n/config";
import { cn } from "@/lib/utils";

export function LanguageSwitcher({
  current,
  tone = "dark",
}: {
  current: Locale;
  tone?: "dark" | "light";
}) {
  return (
    <div
      aria-label="Language"
      className={cn(
        "relative inline-flex h-9 items-center rounded-full border p-1 text-[12px] font-semibold uppercase leading-none",
        tone === "dark"
          ? "border-obsidian/10 bg-obsidian/[0.04]"
          : "border-white/[0.08] bg-white/[0.06] shadow-[inset_0_1px_0_rgba(255,255,255,0.06)]"
      )}
    >
      {locales.map((locale) => (
        <Link
          key={locale}
          href={`/${locale}`}
          aria-current={locale === current ? "page" : undefined}
          className={cn(
            "relative z-10 flex h-7 min-w-9 items-center justify-center rounded-full px-3 tracking-[0.12em] transition-colors duration-300 ease-premium focus-visible:ring-offset-0",
            locale === current
              ? tone === "dark"
                ? "text-white"
                : "text-obsidian"
              : tone === "dark"
              ? "text-obsidian/55 hover:text-obsidian"
              : "text-white/55 hover:text-white"
          )}
        >
          {locale === current && (
            <motion.span
              layoutId={`language-pill-${tone}`}
              className={cn(
                "absolute inset-0 -z-10 rounded-full",
                tone === "dark"
                  ? "bg-obsidian shadow-[0_8px_18px_rgba(10,10,11,0.18)]"
                  : "bg-white shadow-[0_8px_22px_rgba(0,0,0,0.2)]"
              )}
              transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            />
          )}
          {locale}
        </Link>
      ))}
    </div>
  );
}
