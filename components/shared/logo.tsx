import { cn } from "@/lib/utils";

/**
 * LogoMark — the brand signature.
 *
 * Built from the same idea as the Hunter Road Force Elite wheel
 * diagnostic reading: a segmented ring (rim / tread) with a single
 * precision tick breaking the circle — the "optimal" measurement point.
 * Renders in `currentColor` so it inverts cleanly on dark or light.
 */
export function LogoMark({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn("h-8 w-8", className)}
      aria-hidden="true"
    >
      {/* segmented outer ring — 8 tread-like arcs */}
      <circle
        cx="20"
        cy="20"
        r="16.5"
        stroke="currentColor"
        strokeWidth="2.6"
        strokeDasharray="4.2 3.6"
        strokeLinecap="round"
      />
      {/* inner hub */}
      <circle cx="20" cy="20" r="6.5" stroke="currentColor" strokeWidth="2" />
      <circle cx="20" cy="20" r="1.6" fill="currentColor" />
      {/* precision tick — the "optimal" reading, fixed accent orange */}
      <path
        d="M29.5 10.5L34.5 5.5"
        stroke="#FF5A1F"
        strokeWidth="2.6"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function Logo({
  className,
  markClassName,
  tone = "dark",
}: {
  className?: string;
  markClassName?: string;
  tone?: "dark" | "light";
}) {
  return (
    <span className={cn("inline-flex items-center gap-2.5", className)}>
      <LogoMark
        className={cn(tone === "dark" ? "text-obsidian" : "text-white", markClassName)}
      />
      <span
        className={cn(
          "font-display text-[15px] font-bold leading-none tracking-tight",
          tone === "dark" ? "text-obsidian" : "text-white"
        )}
      >
        OPTIMAL
        <span className="block text-[9px] font-medium tracking-[0.2em] opacity-50">
          TƏKƏR MƏRKƏZİ
        </span>
      </span>
    </span>
  );
}
