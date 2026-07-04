import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "group relative inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full text-sm font-medium tracking-tight transition-all duration-300 ease-premium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-diagnostic focus-visible:ring-offset-2 focus-visible:ring-offset-canvas disabled:pointer-events-none disabled:opacity-40",
  {
    variants: {
      variant: {
        primary:
          "bg-obsidian text-white hover:bg-obsidian-800 active:scale-[0.98] shadow-premium",
        accent:
          "bg-accent text-white hover:bg-accent-dim active:scale-[0.98] shadow-glow",
        outline:
          "border border-obsidian/15 bg-transparent text-obsidian hover:border-obsidian/40 hover:bg-obsidian/[0.03] active:scale-[0.98]",
        ghost:
          "bg-transparent text-obsidian hover:bg-obsidian/[0.05] active:scale-[0.98]",
        inverse:
          "bg-white text-obsidian hover:bg-white/90 active:scale-[0.98] shadow-premium",
        "outline-inverse":
          "border border-white/25 bg-white/[0.04] text-white backdrop-blur-sm hover:border-white/50 hover:bg-white/[0.1] active:scale-[0.98]",
      },
      size: {
        default: "h-12 px-6",
        sm: "h-10 px-5 text-[13px]",
        lg: "h-14 px-8 text-[15px]",
        icon: "h-11 w-11",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "default",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
