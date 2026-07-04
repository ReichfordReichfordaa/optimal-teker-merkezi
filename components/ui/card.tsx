import * as React from "react";
import { cn } from "@/lib/utils";

const Card = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div
      ref={ref}
      className={cn(
        "rounded-3xl border border-obsidian/[0.06] bg-white p-8 shadow-[0_1px_2px_rgba(10,10,11,0.03)] transition-all duration-300 ease-premium",
        className
      )}
      {...props}
    />
  )
);
Card.displayName = "Card";

export { Card };
