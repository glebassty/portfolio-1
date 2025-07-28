// components/ui/button.tsx
import { type ButtonHTMLAttributes, type DetailedHTMLProps } from "react";
import { cn } from "@/lib/utils";

type ButtonProps = DetailedHTMLProps<
  ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
>;

export function Button({ children, className, ...props }: ButtonProps) {
  return (
    <button
      className={cn(
        "bg-primary hover:bg-primary-hover rounded-lg px-6 py-3 text-sm font-medium text-white shadow-md transition",
        className,
      )}
      {...props}
    >
      {children}
    </button>
  );
}
