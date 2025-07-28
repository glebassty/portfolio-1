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
  icon: ReactNode;
};

export function Button({ icon, children, className, ...props }: ButtonProps) {
  return (
    <button className={cn("bg-accent flex", className)} {...props}>
      <p>{children}</p>
      <div className="">{icon}</div>
    </button>
  );
}
