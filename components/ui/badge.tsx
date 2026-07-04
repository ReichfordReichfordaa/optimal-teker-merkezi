import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const badgeVariants = cva(
  "inline-flex items-center gap-1.5 rounded-full px-3.5 py-1.5 text-[11px] font-semibold uppercase tracking-[0.12em]",
  {
    variants: {
      variant: {
        light: "bg-obsidian/[0.04] text-obsidian/70",
        dark: "bg-white/[0.08] text-white/80 backdrop-blur-sm border border-white/10",
        accent: "bg-accent/10 text-accent",
      },
    },
    defaultVariants: {
      variant: "light",
    },
  }
);

export interface BadgeProps
  extends React.HTMLAttributes<HTMLSpanElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return <span className={cn(badgeVariants({ variant }), className)} {...props} />;
}

export { Badge, badgeVariants };
