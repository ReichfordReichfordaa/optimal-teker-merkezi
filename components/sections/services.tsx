import {
  ShoppingBag,
  Wrench,
  Gauge,
  Hammer,
  ScanLine,
  Wind,
  Building2,
  ArrowUpRight,
} from "lucide-react";
import { SectionHeading } from "@/components/shared/section-heading";
import { Reveal } from "@/components/shared/reveal";
import { LINKS } from "@/lib/constants";
import type { Dictionary } from "@/lib/i18n/types";

const icons = [ShoppingBag, Wrench, Gauge, Hammer, ScanLine, Wind, Building2];

export function Services({ dict }: { dict: Dictionary }) {
  const [regular, corporate] = [dict.services.items.slice(0, 6), dict.services.items[6]!];

  return (
    <section id="services" className="bg-white py-24 lg:py-32">
      <div className="container max-w-8xl">
        <SectionHeading
          eyebrow={dict.services.eyebrow}
          title={dict.services.title}
          subtitle={dict.services.subtitle}
          align="left"
        />

        <div className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {regular.map((service, i) => {
            const Icon = icons[i]!;
            return (
              <Reveal key={service.title} delay={(i % 3) * 0.08}>
                <div className="group h-full rounded-3xl border border-obsidian/[0.07] bg-canvas p-8 transition-all duration-300 ease-premium hover:-translate-y-1.5 hover:border-obsidian/0 hover:bg-obsidian hover:shadow-premium-lg">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white text-obsidian shadow-[0_1px_2px_rgba(10,10,11,0.06)] transition-colors duration-300 group-hover:bg-accent group-hover:text-white">
                    <Icon className="h-5 w-5" strokeWidth={1.75} />
                  </div>
                  <h3 className="mt-6 font-display text-xl font-bold text-obsidian transition-colors duration-300 group-hover:text-white">
                    {service.title}
                  </h3>
                  <p className="mt-2.5 text-sm leading-relaxed text-obsidian-400 transition-colors duration-300 group-hover:text-white/60">
                    {service.description}
                  </p>
                </div>
              </Reveal>
            );
          })}
        </div>

        {/* Corporate offering — distinct treatment: a different buyer, a different pitch */}
        <Reveal delay={0.1} className="mt-5">
          <a
            href={LINKS.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex flex-col items-start justify-between gap-6 rounded-3xl bg-obsidian p-10 transition-colors duration-300 hover:bg-obsidian-900 sm:flex-row sm:items-center lg:p-12"
          >
            <div className="flex items-start gap-5">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-accent text-white">
                <Building2 className="h-5 w-5" strokeWidth={1.75} />
              </div>
              <div>
                <h3 className="font-display text-xl font-bold text-white lg:text-2xl">
                  {corporate.title}
                </h3>
                <p className="mt-2 max-w-xl text-sm leading-relaxed text-white/55">
                  {corporate.description}
                </p>
              </div>
            </div>
            <span className="flex shrink-0 items-center gap-2 rounded-full border border-white/20 px-5 py-3 text-sm font-medium text-white transition-colors duration-300 group-hover:border-white/40">
              {dict.buttons.contactUs}
              <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </span>
          </a>
        </Reveal>
      </div>
    </section>
  );
}
