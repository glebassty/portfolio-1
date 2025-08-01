import { type ButtonHTMLAttributes, type ElementType } from "react";
import { cn } from "@/lib/utils";

type Variant = "primary" | "secondary";

type ButtonProps = {
  icon: ElementType;
  variant?: Variant;
  dividerClassName?: string;
} & ButtonHTMLAttributes<HTMLButtonElement>;

const buttonVariants: Record<Variant, string> = {
  primary:
    "bg-secondary border-primary text-text-primary hover:bg-hover-secondary",
  secondary:
    "bg-primary border-border-primary text-text-secondary hover:bg-hover-primary",
};

const dividerVariants: Record<Variant, string> = {
  primary: "bg-primary",
  secondary: "bg-border-primary",
};

export function Button({
  icon: Icon,
  children,
  className,
  dividerClassName,
  variant = "primary",
  ...props
}: ButtonProps) {
  return (
    <button
      className={cn(
        buttonVariants[variant],
        "flex cursor-pointer items-center rounded-lg border-2 transition-colors duration-300 ease-in-out",
        className,
      )}
      {...props}
    >
      <p className="py-2.5 pr-1.5 pl-2.5 text-xs sm:py-3 sm:pr-2.5 sm:pl-2 sm:text-base">
        {children}
      </p>
      <div
        className={cn(
          dividerVariants[variant],
          "w-[1px] self-stretch",
          dividerClassName,
        )}
      />
      <div className="py-3 pr-2.5 pl-2 sm:py-3.5 sm:pr-3 sm:pl-2">
        <Icon className="h-2.5 w-2.5 sm:h-3.5 sm:w-3.5" />
      </div>
    </button>
  );
}
