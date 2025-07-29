// components/ui/button.tsx
import {
  type ButtonHTMLAttributes,
  type DetailedHTMLProps,
  type ElementType,
} from "react";
import { cn } from "@/lib/utils";

type ButtonProps = DetailedHTMLProps<
  ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
> & {
  icon: ElementType;
};

export function Button({
  icon: Icon,
  children,
  className,
  ...props
}: ButtonProps) {
  return (
    <button
      className={cn(
        "bg-accent border-secondary text-text-primary flex items-center rounded-lg border-[1px]",
        className,
      )}
      {...props}
    >
      <p className="py-2.5 pr-1.5 pl-2.5 text-xs sm:py-3 sm:pr-2.5 sm:pl-2 sm:text-base">
        {children}
      </p>
      <div className="bg-secondary w-[1px] self-stretch" />
      <div className="py-3 pr-2.5 pl-2 sm:py-3.5 sm:pr-3 sm:pl-2">
        <Icon className="h-2.5 w-2.5 sm:h-3.5 sm:w-3.5" />
      </div>
    </button>
  );
}
