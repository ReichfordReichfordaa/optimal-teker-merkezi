"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import { defaultLocale, isValidLocale } from "@/lib/i18n/config";

export default function NotFound() {
  const pathname = usePathname();
  const maybeLocale = pathname.split("/")[1] ?? "";
  const lang = isValidLocale(maybeLocale) ? maybeLocale : defaultLocale;

  const copy =
    lang === "ru"
      ? { title: "Страница не найдена", body: "Такой страницы не существует.", cta: "На главную" }
      : { title: "Səhifə tapılmadı", body: "Axtardığınız səhifə mövcud deyil.", cta: "Ana səhifə" };

  return (
    <div className="flex min-h-[70vh] flex-col items-center justify-center px-6 text-center">
      <span className="font-display text-display-2 font-bold text-obsidian">404</span>
      <h1 className="mt-4 text-xl font-semibold text-obsidian">{copy.title}</h1>
      <p className="mt-2 text-obsidian-400">{copy.body}</p>
      <Button asChild className="mt-8">
        <Link href={`/${lang}`}>{copy.cta}</Link>
      </Button>
    </div>
  );
}
