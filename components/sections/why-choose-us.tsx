import { Settings2, Users, Timer, Award, MapPin, Briefcase } from "lucide-react";
import { SectionHeading } from "@/components/shared/section-heading";
import { Reveal } from "@/components/shared/reveal";
import { TreadDivider } from "@/components/shared/tread-divider";
import type { Dictionary } from "@/lib/i18n/types";

const icons = [Settings2, Users, Timer, Award, MapPin, Briefcase];

export function WhyChooseUs({ dict }: { dict: Dictionary }) {
  return (
    <section id="why" className="bg-obsidian py-24 text-white lg:py-32">
      <div className="container max-w-8xl">
        <div className="flex flex-col items-start justify-between gap-8 lg:flex-row lg:items-end">
          <SectionHeading
            eyebrow={dict.why.eyebrow}
            title={dict.why.title}
            subtitle={dict.why.subtitle}
            tone="light"
          />
          <TreadDivider className="hidden text-white lg:flex" />
        </div>

        <div className="mt-16 grid grid-cols-1 border-t border-white/10 sm:grid-cols-2 lg:grid-cols-3">
          {dict.why.items.map((why, i) => {
            const Icon = icons[i]!;
            return (
              <Reveal key={why.title} delay={(i % 3) * 0.07}>
                <div className="group h-full border-b border-r border-white/10 p-8 transition-colors duration-300 hover:bg-white/[0.03] lg:p-10">
                  <Icon className="h-6 w-6 text-accent" strokeWidth={1.5} />
                  <h3 className="mt-6 font-display text-lg font-bold text-white">
                    {why.title}
                  </h3>
                  <p className="mt-2.5 text-sm leading-relaxed text-white/50">
                    {why.description}
                  </p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
