import { cn } from "@/lib/utils";

export function TreadDivider({ className }: { className?: string }) {
  return (
    <div
      className={cn("flex items-center gap-[3px] opacity-[0.14]", className)}
      aria-hidden="true"
    >
      {Array.from({ length: 24 }).map((_, i) => (
        <span
          key={i}
          className="h-3 w-[2px] shrink-0 -skew-x-[20deg] bg-current"
        />
      ))}
    </div>
  );
}
