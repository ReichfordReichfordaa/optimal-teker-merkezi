import type { ReactNode } from "react";
import { cn } from "@/lib/utils";
import { Reveal } from "./reveal";

export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = "left",
  tone = "dark",
  className,
}: {
  eyebrow: string;
  title: ReactNode;
  subtitle?: string;
  align?: "left" | "center";
  tone?: "dark" | "light";
  className?: string;
}) {
  return (
    <div
      className={cn(
        "max-w-2xl",
        align === "center" && "mx-auto text-center",
        className
      )}
    >
      <Reveal>
        <span
          className={cn(
            "mb-4 inline-block text-[11px] font-semibold uppercase tracking-[0.18em]",
            tone === "dark" ? "text-accent" : "text-accent-dim"
          )}
        >
          {eyebrow}
        </span>
      </Reveal>
      <Reveal delay={0.06}>
        <h2
          className={cn(
            "text-display-3 font-display font-bold",
            tone === "dark" ? "text-obsidian" : "text-white"
          )}
        >
          {title}
        </h2>
      </Reveal>
      {subtitle && (
        <Reveal delay={0.12}>
          <p
            className={cn(
              "mt-4 text-base leading-relaxed",
              tone === "dark" ? "text-obsidian-400" : "text-white/60"
            )}
          >
            {subtitle}
          </p>
        </Reveal>
      )}
    </div>
  );
}
