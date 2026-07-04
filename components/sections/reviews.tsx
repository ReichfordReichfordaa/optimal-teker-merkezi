import { Star, Quote } from "lucide-react";
import { SectionHeading } from "@/components/shared/section-heading";
import { Reveal } from "@/components/shared/reveal";
import type { Dictionary } from "@/lib/i18n/types";

function initials(name: string) {
  return name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();
}

export function Reviews({ dict }: { dict: Dictionary }) {
  return (
    <section id="reviews" className="bg-white py-24 lg:py-32">
      <div className="container max-w-8xl">
        <SectionHeading
          eyebrow={dict.reviews.eyebrow}
          title={dict.reviews.title}
          subtitle={dict.reviews.subtitle}
          align="center"
          className="mx-auto"
        />

        <div className="mt-14 grid grid-cols-1 gap-5 md:grid-cols-3">
          {dict.reviews.items.map((review, i) => (
            <Reveal key={review.name} delay={i * 0.09}>
              <div className="flex h-full flex-col rounded-3xl border border-obsidian/[0.07] bg-canvas p-8">
                <Quote className="h-6 w-6 text-accent/40" strokeWidth={1.5} />
                <div className="mt-4 flex gap-0.5">
                  {Array.from({ length: review.rating }).map((_, s) => (
                    <Star key={s} className="h-4 w-4 fill-accent text-accent" />
                  ))}
                </div>
                <p className="mt-4 flex-1 text-[15px] leading-relaxed text-obsidian/80">
                  “{review.quote}”
                </p>
                <div className="mt-7 flex items-center gap-3 border-t border-obsidian/[0.06] pt-5">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-obsidian text-xs font-bold text-white">
                    {initials(review.name)}
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-obsidian">{review.name}</div>
                    <div className="text-xs text-obsidian-400">{review.role}</div>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
