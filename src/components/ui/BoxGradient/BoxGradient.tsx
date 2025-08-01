import { cn } from "@/lib/utils";
import React from "react";

type IconArrowProps = {} & React.HTMLAttributes<HTMLDivElement>;

export const BoxGradient = ({ className, children }: IconArrowProps) => {
  return (
    <div
      className={cn(
        "border-border-primary bg-bg-primary text-text-secondary rounded-xl border-2",
        className,
      )}
    >
      {children}
    </div>
  );
};
