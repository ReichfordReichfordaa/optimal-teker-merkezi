import { cn } from "@/lib/utils";

/**
 * Decorative, oversized version of the brand mark used as ambient
 * background art — a nod to a Hunter Road Force Elite alignment
 * readout: concentric rings, radial gauge ticks, one live accent mark.
 * Purely decorative (aria-hidden), respects reduced motion via the
 * `animate-spin-slow` class being safe/slow by default.
 */
export function AlignmentReticle({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 800 800"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn("pointer-events-none select-none", className)}
      aria-hidden="true"
    >
      <g className="origin-center animate-spin-slow motion-reduce:animate-none">
        <circle cx="400" cy="400" r="360" stroke="white" strokeOpacity="0.08" strokeWidth="1" />
        <circle
          cx="400"
          cy="400"
          r="300"
          stroke="white"
          strokeOpacity="0.14"
          strokeWidth="1.5"
          strokeDasharray="2 10"
          strokeLinecap="round"
        />
        {Array.from({ length: 36 }).map((_, i) => {
          const angle = (i * 360) / 36;
          const isMajor = i % 3 === 0;
          const r1 = isMajor ? 240 : 252;
          const r2 = 264;
          const rad = (angle * Math.PI) / 180;
          const x1 = 400 + r1 * Math.cos(rad);
          const y1 = 400 + r1 * Math.sin(rad);
          const x2 = 400 + r2 * Math.cos(rad);
          const y2 = 400 + r2 * Math.sin(rad);
          return (
            <line
              key={i}
              x1={x1}
              y1={y1}
              x2={x2}
              y2={y2}
              stroke="white"
              strokeOpacity={isMajor ? 0.22 : 0.1}
              strokeWidth={isMajor ? 1.5 : 1}
              strokeLinecap="round"
            />
          );
        })}
      </g>
      <circle cx="400" cy="400" r="150" stroke="white" strokeOpacity="0.16" strokeWidth="1.5" />
      <circle cx="400" cy="400" r="60" stroke="white" strokeOpacity="0.24" strokeWidth="1.5" />
      <circle cx="400" cy="400" r="5" fill="#FF5A1F" />
      <line x1="400" y1="400" x2="400" y2="240" stroke="#FF5A1F" strokeWidth="1.5" strokeOpacity="0.9" />
    </svg>
  );
}
