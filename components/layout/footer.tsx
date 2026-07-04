import Link from "next/link";
import { Instagram, Facebook, Phone, Mail, MapPin } from "lucide-react";
import { Logo } from "@/components/shared/logo";
import { CONTACT, LINKS, SOCIALS, BRANDS_CARRIED, DIAGNOSTIC_EQUIPMENT } from "@/lib/constants";
import type { Dictionary } from "@/lib/i18n/types";
import type { Locale } from "@/lib/i18n/config";

export function Footer({ dict, locale }: { dict: Dictionary; locale: Locale }) {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-white/10 bg-obsidian-950 text-white">
      <div className="container max-w-8xl py-16 lg:py-20">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <div>
            <Logo tone="light" />
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-white/50">
              {dict.footer.description}
            </p>
            <div className="mt-6 flex items-center gap-2">
              {BRANDS_CARRIED.map((b) => (
                <span
                  key={b}
                  className="rounded-full border border-white/15 px-3 py-1 text-[11px] font-semibold tracking-wide text-white/70"
                >
                  {b}
                </span>
              ))}
            </div>
            <div className="mt-4 flex items-center gap-3">
              <a
                href={SOCIALS.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-white/15 text-white/60 transition-colors hover:border-white/40 hover:text-white"
              >
                <Instagram className="h-4 w-4" strokeWidth={1.75} />
              </a>
              <a
                href={SOCIALS.facebook}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-white/15 text-white/60 transition-colors hover:border-white/40 hover:text-white"
              >
                <Facebook className="h-4 w-4" strokeWidth={1.75} />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-[11px] font-semibold uppercase tracking-[0.14em] text-white/40">
              {dict.footer.quickLinks}
            </h3>
            <ul className="mt-5 space-y-3 text-sm text-white/60">
              <li><a href="#about" className="hover:text-white">{dict.nav.about}</a></li>
              <li><a href="#services" className="hover:text-white">{dict.nav.services}</a></li>
              <li><a href="#why" className="hover:text-white">{dict.nav.why}</a></li>
              <li><a href="#gallery" className="hover:text-white">{dict.nav.gallery}</a></li>
              <li><a href="#reviews" className="hover:text-white">{dict.nav.reviews}</a></li>
              <li><a href="#contact" className="hover:text-white">{dict.nav.contact}</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-[11px] font-semibold uppercase tracking-[0.14em] text-white/40">
              {dict.footer.servicesTitle}
            </h3>
            <ul className="mt-5 space-y-3 text-sm text-white/60">
              {dict.services.items.slice(0, 6).map((item) => (
                <li key={item.title}>{item.title}</li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-[11px] font-semibold uppercase tracking-[0.14em] text-white/40">
              {dict.footer.contactTitle}
            </h3>
            <ul className="mt-5 space-y-4 text-sm text-white/60">
              <li className="flex items-start gap-2.5">
                <Phone className="mt-0.5 h-4 w-4 shrink-0 text-white/35" strokeWidth={1.75} />
                <span className="flex flex-col gap-1">
                  {CONTACT.phones.map((p) => (
                    <a key={p.raw} href={`tel:${p.raw}`} className="hover:text-white">
                      {p.display}
                    </a>
                  ))}
                </span>
              </li>
              <li className="flex items-start gap-2.5">
                <Mail className="mt-0.5 h-4 w-4 shrink-0 text-white/35" strokeWidth={1.75} />
                <a href={`mailto:${CONTACT.email}`} className="hover:text-white">
                  {CONTACT.email}
                </a>
              </li>
              <li className="flex items-start gap-2.5">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-white/35" strokeWidth={1.75} />
                <span>{CONTACT.address[locale]}</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 flex flex-col items-start justify-between gap-4 border-t border-white/10 pt-8 text-xs text-white/35 sm:flex-row sm:items-center">
          <p>
            © {year} {dict.footer.rights}
          </p>
          <p className="tracking-wide">
            {dict.footer.officialDealer}: {BRANDS_CARRIED.join(" · ")} — {DIAGNOSTIC_EQUIPMENT}
          </p>
        </div>
      </div>
    </footer>
  );
}
