import { Phone, Mail, MapPin, Clock, Navigation, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SectionHeading } from "@/components/shared/section-heading";
import { Reveal } from "@/components/shared/reveal";
import { CONTACT, LINKS } from "@/lib/constants";
import type { Dictionary } from "@/lib/i18n/types";
import type { Locale } from "@/lib/i18n/config";

export function Contact({ dict, locale }: { dict: Dictionary; locale: Locale }) {
  return (
    <section id="contact" className="bg-obsidian py-24 text-white lg:py-32">
      <div className="container max-w-8xl">
        <SectionHeading
          eyebrow={dict.contact.eyebrow}
          title={dict.contact.title}
          subtitle={dict.contact.subtitle}
          tone="light"
        />

        <div className="mt-14 grid grid-cols-1 gap-6 lg:grid-cols-[0.85fr_1.15fr]">
          <Reveal className="flex flex-col gap-4">
            <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-7">
              <div className="flex items-start gap-4">
                <Phone className="mt-1 h-5 w-5 shrink-0 text-accent" strokeWidth={1.75} />
                <div>
                  <div className="text-[11px] font-semibold uppercase tracking-[0.14em] text-white/40">
                    {dict.contact.phoneLabel}
                  </div>
                  <div className="mt-2 flex flex-col gap-1">
                    {CONTACT.phones.map((p) => (
                      <a
                        key={p.raw}
                        href={`tel:${p.raw}`}
                        className="text-lg font-medium tabular-nums text-white hover:text-accent"
                      >
                        {p.display}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-7">
              <div className="flex items-start gap-4">
                <Mail className="mt-1 h-5 w-5 shrink-0 text-accent" strokeWidth={1.75} />
                <div>
                  <div className="text-[11px] font-semibold uppercase tracking-[0.14em] text-white/40">
                    {dict.contact.emailLabel}
                  </div>
                  <a
                    href={`mailto:${CONTACT.email}`}
                    className="mt-2 block text-lg font-medium text-white hover:text-accent"
                  >
                    {CONTACT.email}
                  </a>
                </div>
              </div>
            </div>

            <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-7">
              <div className="flex items-start gap-4">
                <MapPin className="mt-1 h-5 w-5 shrink-0 text-accent" strokeWidth={1.75} />
                <div>
                  <div className="text-[11px] font-semibold uppercase tracking-[0.14em] text-white/40">
                    {dict.contact.addressLabel}
                  </div>
                  <div className="mt-2 text-lg font-medium text-white">
                    {CONTACT.address[locale]}
                  </div>
                </div>
              </div>
            </div>

            <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-7">
              <div className="flex items-start gap-4">
                <Clock className="mt-1 h-5 w-5 shrink-0 text-accent" strokeWidth={1.75} />
                <div>
                  <div className="text-[11px] font-semibold uppercase tracking-[0.14em] text-white/40">
                    {dict.contact.hoursLabel}
                  </div>
                  <div className="mt-2 text-lg font-medium text-white">
                    {dict.contact.hoursValue}
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-wrap gap-3 pt-2">
              <Button asChild variant="accent" size="lg">
                <a href={LINKS.callPrimary}>
                  <Phone className="h-4 w-4" strokeWidth={2} />
                  {dict.buttons.call}
                </a>
              </Button>
              <Button asChild variant="outline-inverse" size="lg">
                <a href={LINKS.whatsapp} target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="h-4 w-4" strokeWidth={2} />
                  {dict.buttons.whatsapp}
                </a>
              </Button>
            </div>
            <p className="text-xs text-white/35">{dict.contact.formNote}</p>
          </Reveal>

          <Reveal delay={0.1} className="min-h-[420px] overflow-hidden rounded-3xl border border-white/10 lg:min-h-full">
            <div className="relative h-full min-h-[420px] w-full">
              <iframe
                title="Optimal Təkər Mərkəzi — Google Maps"
                src={LINKS.mapsEmbed}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="absolute inset-0 h-full w-full grayscale invert-[0.92] contrast-[0.92]"
              />
              <a
                href={LINKS.mapsDirections}
                target="_blank"
                rel="noopener noreferrer"
                className="absolute bottom-5 left-5 flex items-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-medium text-obsidian shadow-premium-lg transition-transform hover:-translate-y-0.5"
              >
                <Navigation className="h-4 w-4" strokeWidth={2} />
                {dict.buttons.directions}
              </a>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
