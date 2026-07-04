import { Target, Zap, ShieldCheck, HeartHandshake } from "lucide-react";
import { SectionHeading } from "@/components/shared/section-heading";
import { Reveal } from "@/components/shared/reveal";
import type { Dictionary } from "@/lib/i18n/types";

const icons = [Target, Zap, ShieldCheck, HeartHandshake];

export function About({ dict }: { dict: Dictionary }) {
  return (
    <section id="about" className="bg-canvas py-24 lg:py-32">
      <div className="container max-w-8xl">
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-2 lg:gap-24">
          <SectionHeading
            eyebrow={dict.about.eyebrow}
            title={dict.about.title}
            subtitle={dict.about.paragraph}
          />

          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
            {dict.about.values.map((value, i) => {
              const Icon = icons[i % icons.length]!;
              return (
                <Reveal key={value.title} delay={i * 0.08}>
                  <div className="h-full rounded-3xl border border-obsidian/[0.06] bg-white p-6 transition-all duration-300 ease-premium hover:-translate-y-1 hover:shadow-premium">
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-obsidian text-white">
                      <Icon className="h-5 w-5" strokeWidth={1.75} />
                    </div>
                    <h3 className="mt-5 font-display text-lg font-bold text-obsidian">
                      {value.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-obsidian-400">
                      {value.description}
                    </p>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
