import { cn } from "@/lib/utils";
import type { ElementType } from "react";

type LabelProps = {
  icon: ElementType;
} & React.HTMLAttributes<HTMLDivElement>;

export const Label = ({
  icon: Icon,
  className,
  children,
  ...props
}: LabelProps) => {
  return (
    <div
      className={cn(
        "bg-primary text-text-secondary border-border-primary inline-flex cursor-pointer items-center rounded-2xl border-[1px] px-2.5 py-1.5 transition-all duration-300 ease-in-out hover:underline sm:px-4.5",
        className,
      )}
      {...props}
    >
      <Icon className="text-secondary mr-2 h-2 w-2 sm:mr-2.5 sm:h-2.5 sm:w-2.5" />

      <div className="text-[9px] uppercase sm:text-xs">{children}</div>
    </div>
  );
};
