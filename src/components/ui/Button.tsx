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
    <button className={cn("bg-accent flex", className)} {...props}>
      <div className="">{children}</div>
      <div className="pt-3.5 pr-[11px] pb-3.5 pl-2">
        <Icon className="text-text-first h-5 w-5" />
      </div>
    </button>
  );
}
