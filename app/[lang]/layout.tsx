import type { Metadata } from "next";
import { Golos_Text, Inter } from "next/font/google";
import "../globals.css";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { FloatingActions } from "@/components/shared/floating-actions";
import { locales, isValidLocale, defaultLocale, type Locale } from "@/lib/i18n/config";
import { getDictionary } from "@/lib/i18n/get-dictionary";
import { getLocalBusinessSchema } from "@/lib/seo";
import { SITE_URL } from "@/lib/constants";

const golos = Golos_Text({
  subsets: ["latin", "latin-ext", "cyrillic"],
  weight: ["500", "600", "700", "800"],
  variable: "--font-display",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin", "latin-ext", "cyrillic"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-body",
  display: "swap",
});

export function generateStaticParams() {
  return locales.map((lang) => ({ lang }));
}

export async function generateMetadata({
  params,
}: {
  params: { lang: string };
}): Promise<Metadata> {
  const lang = isValidLocale(params.lang) ? params.lang : defaultLocale;
  const dict = getDictionary(lang);

  return {
    metadataBase: new URL(SITE_URL),
    title: {
      default: dict.meta.title,
      template: `%s — Optimal Təkər Mərkəzi`,
    },
    description: dict.meta.description,
    keywords: [
      "təkər mərkəzi Bakı",
      "PEARLY diler",
      "ATLAS diler",
      "Hunter Road Force Elite",
      "təkər montajı",
      "balanslaşdırma",
      "шиномонтаж Баку",
    ],
    alternates: {
      canonical: `${SITE_URL}/${lang}`,
      languages: {
        az: `${SITE_URL}/az`,
        ru: `${SITE_URL}/ru`,
      },
    },
    openGraph: {
      title: dict.meta.title,
      description: dict.meta.description,
      url: `${SITE_URL}/${lang}`,
      siteName: "Optimal Təkər Mərkəzi",
      locale: lang === "az" ? "az_AZ" : "ru_RU",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: dict.meta.title,
      description: dict.meta.description,
    },
    robots: {
      index: true,
      follow: true,
    },
  };
}

export default function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { lang: string };
}) {
  const lang: Locale = isValidLocale(params.lang) ? params.lang : defaultLocale;
  const dict = getDictionary(lang);
  const schema = getLocalBusinessSchema(lang);

  return (
    <html lang={lang} className={`${golos.variable} ${inter.variable}`}>
      <body className="min-h-screen bg-canvas font-body text-obsidian">
        <script
          type="application/ld+json"
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
        <Header dict={dict} locale={lang} />
        <main>{children}</main>
        <Footer dict={dict} locale={lang} />
        <FloatingActions dict={dict} />
      </body>
    </html>
  );
}
