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
        "bg-accent border-secondary flex items-center rounded-lg border-[1px]",
        className,
      )}
      {...props}
    >
      <p className="text-text-primary font-inter px-3 py-2 text-base font-medium">
        {children}
      </p>
      <div className="bg-secondary w-[1px] self-stretch" />
      <div className="xs:pt-2 xs:pr-2 xs:pb-2 xs:pl-1.5 pt-3.5 pr-3 pb-3.5 pl-2">
        <Icon className="text-text-primary h-3.5 w-3.5" />
      </div>
    </button>
  );
}
