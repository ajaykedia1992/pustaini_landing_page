import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

/**
 * Button — Updated with Pushtaini premium gold/charcoal styling.
 */
const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium transition-all duration-300 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive tracking-[0.15em] uppercase",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90 border border-[var(--color-gold)]/30 hover:border-[var(--color-gold)]/60 hover:shadow-[0_0_20px_rgba(180,140,60,0.1)]",
        destructive:
          "bg-destructive text-white hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60",
        outline:
          "border border-[var(--color-gold)]/30 bg-transparent hover:bg-[var(--color-gold)]/10 hover:border-[var(--color-gold)]/60 text-[var(--color-gold)]",
        secondary:
          "bg-secondary text-secondary-foreground hover:bg-secondary/80 border border-[var(--color-gold)]/20",
        ghost:
          "hover:bg-accent/30 dark:hover:bg-accent/20",
        link: "text-primary underline-offset-4 hover:underline tracking-normal",
      },
      size: {
        default: "h-10 px-5 py-2 has-[>svg]:px-3",
        sm: "h-8 gap-1.5 px-4 has-[>svg]:px-2.5 text-xs",
        lg: "h-12 px-8 has-[>svg]:px-5 text-sm",
        icon: "size-9",
        "icon-sm": "size-8",
        "icon-lg": "size-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

function Button({
  className,
  variant,
  size,
  asChild = false,
  ...props
}: React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean;
  }) {
  const Comp = asChild ? Slot : "button";

  return (
    <Comp
      data-slot="button"
      className={cn(buttonVariants({ variant, size, className }))}
      style={{ fontFamily: "var(--font-heading)" }}
      {...props}
    />
  );
}

export { Button, buttonVariants };
