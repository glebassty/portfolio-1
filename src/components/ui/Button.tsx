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
      className={cn("bg-accent flex justify-center", className)}
      {...props}
    >
      <p className="text-text-primary px-3 py-2">{children}</p>
      <div className="pt-3.5 pr-3 pb-3.5 pl-2">
        <Icon className="text-text-primary h-5 w-5" />
      </div>
    </button>
  );
}
