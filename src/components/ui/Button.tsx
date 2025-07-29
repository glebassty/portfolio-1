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
      <p className="py-3 pr-2.5 pl-2 text-base sm:py-2.5 sm:pr-1.5 sm:pl-2.5 sm:text-xs">
        {children}
      </p>
      <div className="bg-secondary w-[1px] self-stretch" />
      <div className="py-3.5 pr-3 pl-2 sm:py-3 sm:pr-2.5 sm:pl-2">
        <Icon className="h-3.5 w-3.5 sm:h-2 sm:w-2" />
      </div>
    </button>
  );
}
