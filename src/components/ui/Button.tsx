// components/ui/button.tsx
import {
  type ButtonHTMLAttributes,
  type DetailedHTMLProps,
  type ReactNode,
} from "react";
import { cn } from "@/lib/utils";

type ButtonProps = DetailedHTMLProps<
  ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
> & {
  icon?: ReactNode;
  iconPosition?: "left" | "right";
};

export function Button({
  children,
  icon,
  iconPosition = "right",
  className,
  ...props
}: ButtonProps) {
  return (
    <button
      className={cn(
        "flex items-center justify-center gap-3 rounded-lg border border-neutral-900 bg-orange-600 px-5 py-2.5 text-base font-medium text-white shadow-lg transition-colors duration-200 hover:bg-orange-700",
        className,
      )}
      {...props}
    >
      {iconPosition === "left" && icon}
      {children}
      {iconPosition === "right" && icon}
    </button>
  );
}
