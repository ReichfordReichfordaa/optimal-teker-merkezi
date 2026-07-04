import { ImageIcon } from "lucide-react";
import { SectionHeading } from "@/components/shared/section-heading";
import { Reveal } from "@/components/shared/reveal";
import type { Dictionary } from "@/lib/i18n/types";

const heights = ["h-64", "h-80", "h-56", "h-72", "h-60", "h-96"];
const tones = [
  "from-obsidian-800 to-obsidian-950",
  "from-obsidian-700 to-obsidian-900",
  "from-obsidian-800 to-obsidian-950",
  "from-obsidian-700 to-obsidian-950",
  "from-obsidian-800 to-obsidian-900",
  "from-obsidian-700 to-obsidian-950",
];

export function Gallery({ dict }: { dict: Dictionary }) {
  return (
    <section id="gallery" className="bg-canvas py-24 lg:py-32">
      <div className="container max-w-8xl">
        <SectionHeading
          eyebrow={dict.gallery.eyebrow}
          title={dict.gallery.title}
          subtitle={dict.gallery.subtitle}
        />

        <div className="mt-14 columns-1 gap-5 sm:columns-2 lg:columns-3">
          {dict.gallery.items.map((image, i) => (
            <Reveal key={image.label} delay={(i % 3) * 0.07} className="mb-5 break-inside-avoid">
              <div
                className={`relative w-full overflow-hidden rounded-3xl bg-gradient-to-br ${tones[i % tones.length]} ${heights[i % heights.length]}`}
              >
                {/* Placeholder art direction — replace with real facility
                    photography (recommended: 1600px+, consistent lighting). */}
                <div className="absolute inset-0 opacity-[0.15] [background-image:radial-gradient(circle_at_1px_1px,white_1px,transparent_0)] [background-size:16px_16px]" />
                <div className="absolute right-4 top-4 flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-white/70 backdrop-blur-sm">
                  <ImageIcon className="h-4 w-4" strokeWidth={1.75} />
                </div>
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/50 to-transparent p-5">
                  <span className="text-sm font-medium text-white">{image.label}</span>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
